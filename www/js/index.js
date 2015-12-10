/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


function tryInit(){
        try {
           ApiAIPlugin.init(
                {
                    subscriptionKey: "cb9693af-85ce-4fbf-844a-5563722fc27f",
                    clientAccessToken: "983aa0bc558e41ad88bf42818e4c066b",
                    lang: "en"
                },
                function () {
                   alert("Init success");
                },
                function (error) {
                   alert("Init error\n" + error);
                });
       } catch (e) {
           alert(e);
       }
}

function sendRequest1() {
    ApiAIPlugin.requestText(
        {
            query: "I want kindle"
        },
        function (response) {
            alert(JSON.stringify(response.result, null, 1));
        },
        function (error) {
            alert(error);
        }
    );
}

function sendRequest2() {
    ApiAIPlugin.requestText(
        {
            query: "I want milk",
            entities: [
                {
                    name: "productsList",
                    isEnum: true,
                    entries: [
                        {
                            value: "@productsFood:productId"
                        }
                    ]
                }
            ]
        },
        function (response) {
            alert(JSON.stringify(response.result, null, 1));
        },
        function (error) {
            alert(error);
        }
    );
}

function sendRequest3() {

}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        tryInit();

        document.getElementById('r1').addEventListener("click", sendRequest1);
        document.getElementById('r2').addEventListener("click", sendRequest2);
        document.getElementById('r3').addEventListener("click", sendRequest3);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();