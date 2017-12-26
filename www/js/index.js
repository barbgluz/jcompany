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

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    onDeviceReady: function() {
        let hamburger = document.getElementById('app-hamburger-btn');
        let close = document.getElementById('app-close-btn');
        let institution = document.getElementById('app-institution-btn');
        let system = document.getElementById('app-system-btn');
        let config = document.getElementById('app-config-btn');

        hamburger.addEventListener("click", openMenu, false);
        close.addEventListener("click", closeMenu, false);   
        institution.addEventListener("click", changeToInstitution, false);
        system.addEventListener("click", changeToSystem, false);
        config.addEventListener("click", changeToConfig, false);
    },
};

app.initialize();
var menu = document.getElementById('app-side-menu');
var institution = document.getElementById('institution');
var system = document.getElementById('system');
var config = document.getElementById('config');
var title = document.getElementById('app-page');

function closeMenu() {
    menu.style.width = "0px";
    menu.style.boxShadow = "none";
}

function openMenu() {
    menu.style.width = "75%";
    menu.style.boxShadow = "-6px 0px 6px 6px rgba(0,0,0,0.75)";
}

function changeToInstitution() {
    system.style.display = "none";
    config.style.display = "none";
    institution.style.display = "block";
    title.innerHTML = "Institucional";
    closeMenu();        
}

function changeToSystem() {
    institution.style.display = "none";
    config.style.display = "none";
    system.style.display = "block";
    title.innerHTML = "Sistema";
    closeMenu();
}

function changeToConfig() {
    institution.style.display = "none";
    system.style.display = "none";
    config.style.display = "block";
    title.innerHTML = "Configuração";
    closeMenu();
}