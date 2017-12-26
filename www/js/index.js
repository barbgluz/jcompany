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
        let institution = document.getElementById('institution');
        let system = document.getElementById('institution');
        let config = document.getElementById('config');

        hamburger.addEventListener("click", this.openMenu, false);
        close.addEventListener("click", this.closeMenu, false);   
        institution.addEventListener("click", this.changeToInstitution, false);
        system.addEventListener("click", this.changeToSystem, false);
        config.addEventListener("click", this.changeToConfig, false);
    },

    openMenu: function() {
        let menu = document.getElementById('app-side-menu');
        menu.style.width = "75%";
        menu.style.boxShadow = "-6px 0px 6px 6px rgba(0,0,0,0.75)";
    },

    closeMenu: function() {
        let menu = document.getElementById('app-side-menu');
        menu.style.width = "0px";
        menu.style.boxShadow = "none";
    },

    changeToInstitution: function() {
        let institution = document.getElementById('institution');
        let system = document.getElementById('system');
        let config = document.getElementById('config');
        let title = document.getElementById('app-page');

        system.style.display = "none";
        config.style.display = "none";
        institution.style.display = "block";
        title.innerHTML = "Institucional";
    },

    changeToSystem: function() {
        let institution = document.getElementById('institution');
        let system = document.getElementById('system');
        let config = document.getElementById('config');
        let title = document.getElementById('app-page');

        institution.style.display = "none";
        config.style.display = "none";
        system.style.display = "block";
        title.innerHTML = "Sistema";
    },

    changeToConfig: function() {
        let institution = document.getElementById('institution');
        let system = document.getElementById('system');
        let config = document.getElementById('config');
        let title = document.getElementById('app-page');
        
        institution.style.display = "none";
        system.style.display = "none";
        config.style.display = "block";
        title.innerHTML = "Configuração";
    }
};

app.initialize();