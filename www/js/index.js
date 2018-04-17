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
        this.setSource();
        let hamburger = document.getElementById('app-hamburger-btn');
        let close = document.getElementById('app-close-btn');
        let menuCover = document.getElementById('app-side-menu-cover');
        let institution = document.getElementById('app-institution-btn');
        let system = document.getElementById('app-system-btn');
        let config = document.getElementById('app-config-btn');
        let storage = document.getElementById('app-link-config-btn');
        let frame = document.getElementById('app-frame');
        let input = document.getElementById('app-link-config-input');

        hamburger.addEventListener("click", openMenu, false);
        close.addEventListener("click", closeMenu, false);
        menuCover.addEventListener("click", closeMenu, false);     
        institution.addEventListener("click", changeToInstitution, false);
        system.addEventListener("click", changeToSystem, false);
        system.addEventListener("click", this.setSource, false);
        config.addEventListener("click", changeToConfig, false);
        config.addEventListener("click", this.verifyStorage, false);
        storage.addEventListener("click", this.localStorage, false);
        frame.addEventListener("load", hideLoading, false);
        frame.addEventListener("load", this.setStatus, false);
        input.addEventListener("focus", hideWave, false);
        input.addEventListener("blur", showWave, false);
    },

    localStorage: function() {
        var er = new RegExp('[a-z|0-9]+\\.glotes\\.com\\.br$|sgloc\\.com\\.br$');
        var input = document.getElementById('app-link-config-input');
        var url = input.value;

        if(!(url.substring(0,7) == "http://" || url.substring(0,8) == "https://")) {
            url = "http://" + url; 
        }

        if(er.test(url)) {
            window.localStorage.setItem("url", url);
            navigator.notification.alert(
                'Link cadastrado!', 
                function(){},         
                'Sucesso',            
                'Ok'             
            );
        } else {
            window.localStorage.setItem("url", "http://avaliacao.glotes.com.br");
            input.value = "avaliacao.glotes.com.br";
            navigator.notification.alert(
                'Link inserido não é permitido. Link padrão foi configurado no lugar.', 
                function(){},         
                'Erro',            
                'Ok'             
            );
        }
    },

    verifyStorage: function() {
        var input = document.getElementById('app-link-config-input');
        var url = window.localStorage.getItem("url");
        if(url == null) {
            window.localStorage.setItem("url", "http://avaliacao.glotes.com.br");
            input.value = "avaliacao.glotes.com.br";
            frame.setAttribute("src", "");
        } else {
            input.value = url.substring(7);
        }
    },

    setSource: function() {
        var load = document.getElementById('app-loading');
        var connection = document.getElementById('app-connection-none');
        var tutorial = document.getElementById('app-tutorial');
        var frame = document.getElementById('app-frame');
        var actual = frame.getAttribute("src");
        var url = window.localStorage.getItem("url");

        if(navigator.connection.type == Connection.NONE) {
            frame.style.display = "none";
            load.style.display = "none";
            tutorial.style.display = "none";
            connection.style.display ="flex";
        } else {
            connection.style.display ="none";
            tutorial.style.display = "none";
            if(url == null || url == "" || url == undefined) {
                frame.style.display = "none";
                load.style.display = "none";
                tutorial.style.display = "flex";
            } else if(actual != url) {
                frame.style.display = "none";
                load.style.display = "flex";
                window.localStorage.setItem("isLoaded", "0");
                frame.setAttribute("src", url);
            } else if (window.localStorage.getItem("isLoaded") == 1) {
                load.style.display = "none";
                frame.style.display = "block";
            }
        }
    },

    setStatus: function() {
        window.localStorage.setItem("isLoaded", "1");
    } 
};

app.initialize();
var menu = document.getElementById('app-side-menu');
var menuCover = document.getElementById('app-side-menu-cover');
var title = document.getElementById('app-page');

var institution = document.getElementById('institution');
var system = document.getElementById('system');
var config = document.getElementById('config');

var institutionBtn = document.getElementById('app-institution-btn');
var systemBtn = document.getElementById('app-system-btn');
var configBtn = document.getElementById('app-config-btn');

var institutionImg = document.getElementById('app-institution-img');
var systemImg = document.getElementById('app-system-img');
var configImg = document.getElementById('app-config-img');

var frame = document.getElementById('app-frame');
var load = document.getElementById('app-loading');
var wave = document.getElementById('app-wave');

function closeMenu() {
    menu.setAttribute("class", "sidemenu-content");
    menuCover.setAttribute("class", "sidemenu-cover");
}

function openMenu() {
    menu.setAttribute("class", "sidemenu-content sidemenu-active");
    menuCover.setAttribute("class", "sidemenu-cover sidemenu-cover-active");
}

function changeToInstitution() {
    closeMenu();        
    systemBtn.setAttribute("class", "");
    configBtn.setAttribute("class", "");
    institutionBtn.setAttribute("class", "active");
    system.style.display = "none";
    config.style.display = "none";
    institution.style.display = "block";
    title.innerHTML = "Institucional";
}

function changeToSystem() {
    closeMenu();
    institutionBtn.setAttribute("class", "");
    configBtn.setAttribute("class", "");
    systemBtn.setAttribute("class", "active");
    institution.style.display = "none";
    config.style.display = "none";
    system.style.display = "block";
    title.innerHTML = "Sistema";
}

function changeToConfig() {
    closeMenu();
    institutionBtn.setAttribute("class", "");
    systemBtn.setAttribute("class", "");
    configBtn.setAttribute("class", "active");
    institution.style.display = "none";
    system.style.display = "none";
    config.style.display = "block";
    title.innerHTML = "Configuração";
}

function hideLoading() {
    load.style.display = "none";
    frame.style.display = "block";
}

function hideWave() {
    wave.setAttribute("class", "wave hide-wave");
}

function showWave() {
    setTimeout(function() {wave.setAttribute("class", "wave");} , 100);
}