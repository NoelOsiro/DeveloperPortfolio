import gcp from '/public/assets/svg/skills/gcp.svg'
import html from '/public/assets/svg/skills/html.svg'
import photoshop from '/public/assets/svg/skills/photoshop.svg'
import illustrator from '/public/assets/svg/skills/illustrator.svg'
import docker from '/public/assets/svg/skills/docker.svg'
import adobeXd from '/public/assets/svg/skills/adobe-xd.svg'
import afterEffects from '/public/assets/svg/skills/after-effects.svg'
import css from '/public/assets/svg/skills/css.svg'
import angular from '/public/assets/svg/skills/angular.svg'
import javascript from '/public/assets/svg/skills/javascript.svg'
import nextJS from '/public/assets/svg/skills/nextJS.svg'
import nuxtJS from '/public/assets/svg/skills/nuxtJS.svg'
import react from '/public/assets/svg/skills/react.svg'
import svelte from '/public/assets/svg/skills/svelte.svg'
import typescript from '/public/assets/svg/skills/typescript.svg'
import vue from '/public/assets/svg/skills/vue.svg'
import bootstrap from '/public/assets/svg/skills/bootstrap.svg'
import bulma from '/public/assets/svg/skills/bulma.svg'
import capacitorjs from '/public/assets/svg/skills/capacitorjs.svg'
import coffeescript from '/public/assets/svg/skills/coffeescript.svg'
import memsql from '/public/assets/svg/skills/memsql.svg'
import mongoDB from '/public/assets/svg/skills/mongoDB.svg'
import mysql from '/public/assets/svg/skills/mysql.svg'
import postgresql from '/public/assets/svg/skills/postgresql.svg'
import tailwind from '/public/assets/svg/skills/tailwind.svg'
import vitejs from '/public/assets/svg/skills/vitejs.svg'
import vuetifyjs from '/public/assets/svg/skills/vuetifyjs.svg'
import c from '/public/assets/svg/skills/c.svg'
import cplusplus from '/public/assets/svg/skills/cplusplus.svg'
import csharp from '/public/assets/svg/skills/csharp.svg'
import dart from '/public/assets/svg/skills/dart.svg'
import go from '/public/assets/svg/skills/go.svg'
import java from '/public/assets/svg/skills/java.svg'
import julia from '/public/assets/svg/skills/julia.svg'
import kotlin from '/public/assets/svg/skills/kotlin.svg'
import matlab from '/public/assets/svg/skills/matlab.svg'
import php from '/public/assets/svg/skills/php.svg'
import python from '/public/assets/svg/skills/python.svg'
import ruby from '/public/assets/svg/skills/ruby.svg'
import swift from '/public/assets/svg/skills/swift.svg'
import adobeaudition from '/public/assets/svg/skills/adobeaudition.svg'
import aws from '/public/assets/svg/skills/aws.svg'
import deno from '/public/assets/svg/skills/deno.svg'
import django from '/public/assets/svg/skills/django.svg'
import firebase from '/public/assets/svg/skills/firebase.svg'
import gimp from '/public/assets/svg/skills/gimp.svg'
import git from '/public/assets/svg/skills/git.svg'
import graphql from '/public/assets/svg/skills/graphql.svg'
import lightroom from '/public/assets/svg/skills/lightroom.svg'
import materialui from '/public/assets/svg/skills/materialui.svg'
import nginx from '/public/assets/svg/skills/nginx.svg'
import numpy from '/public/assets/svg/skills/numpy.svg'
import opencv from '/public/assets/svg/skills/opencv.svg'
import premierepro from '/public/assets/svg/skills/premierepro.svg'
import pytorch from '/public/assets/svg/skills/pytorch.svg'
import selenium from '/public/assets/svg/skills/selenium.svg'
import strapi from '/public/assets/svg/skills/strapi.svg'
import tensorflow from '/public/assets/svg/skills/tensorflow.svg'
import webix from '/public/assets/svg/skills/webix.svg'
import wordpress from '/public/assets/svg/skills/wordpress.svg'

import azure from '/public/assets/svg/skills/azure.svg'
import blender from '/public/assets/svg/skills/blender.svg'
import fastify from '/public/assets/svg/skills/fastify.svg'
import figma from '/public/assets/svg/skills/figma.svg'
import flutter from '/public/assets/svg/skills/flutter.svg'
import haxe from '/public/assets/svg/skills/haxe.svg'
import ionic from '/public/assets/svg/skills/ionic.svg'
import markdown from '/public/assets/svg/skills/markdown.svg'
import microsoftoffice from '/public/assets/svg/skills/microsoftoffice.svg'
import picsart from '/public/assets/svg/skills/picsart.svg'
import sketch from '/public/assets/svg/skills/sketch.svg'
import unity from '/public/assets/svg/skills/unity.svg'
import wolframalpha from '/public/assets/svg/skills/wolframalpha.svg'

import canva from '/public/assets/svg/skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'gcp':
            return gcp;
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'docker':
            return docker;
        case 'illustrator':
            return illustrator;
        case 'adobe xd':
            return adobeXd;
        case 'after effects':
            return afterEffects;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'nuxt js':
            return nuxtJS;
        case 'react':
            return react;
        case 'svelte':
            return svelte;
        case 'typescript':
            return typescript;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'bulma':
            return bulma;
        case 'capacitorjs':
            return capacitorjs;
        case 'coffeescript':
            return coffeescript;
        case 'memsql':
            return memsql;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'vuetifyjs':
            return vuetifyjs;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'dart':
            return dart;
        case 'go':
            return go;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        case 'julia':
            return julia;
        case 'matlab':
            return matlab;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'ruby':
            return ruby;
        case 'swift':
            return swift;
        case 'adobe audition':
            return adobeaudition;
        case 'aws':
            return aws;
        case 'deno':
            return deno;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'gimp':
            return gimp;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'lightroom':
            return lightroom;
        case 'materialui':
            return materialui;
        case 'nginx':
            return nginx;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'premiere pro':
            return premierepro;
        case 'pytorch':
            return pytorch;
        case 'selenium':
            return selenium;
        case 'strapi':
            return strapi;
        case 'tensorflow':
            return tensorflow;
        case 'webix':
            return webix;
        case 'wordpress':
            return wordpress;
        case 'azure':
            return azure;
        case 'blender':
            return blender;
        case 'fastify':
            return fastify;
        case 'figma':
            return figma;
        case 'flutter':
            return flutter;
        case 'haxe':
            return haxe;
        case 'ionic':
            return ionic;
        case 'markdown':
            return markdown;
        case 'microsoft office':
            return microsoftoffice;
        case 'picsart':
            return picsart;
        case 'sketch':
            return sketch;
        case 'unity':
            return unity;
        case 'wolframalpha':
            return wolframalpha;
        case 'canva':
            return canva;
        default:
            break;
    }
}
