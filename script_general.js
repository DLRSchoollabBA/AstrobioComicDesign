(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"start":"this.init()","scrollBarColor":"#000000","borderRadius":0,"id":"rootPlayer","verticalAlign":"top","backgroundColorDirection":"vertical","scrollBarOpacity":0.5,"paddingLeft":0,"gap":10,"vrPolyfillScale":0.75,"overflow":"hidden","definitions": [{"zoomEnabled":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","surfaceSelectionEnabled":false,"id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate","aaEnabled":true,"displayPlaybackBar":true,"mouseControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"touchControlMode":"drag_rotation"},{"hfov":360,"class":"Panorama","hfovMax":130,"label":trans('panorama_EE04F5E4_EA82_C58F_41AB_3FFE0665A5E0.label'),"vfov":180,"id":"panorama_EE04F5E4_EA82_C58F_41AB_3FFE0665A5E0","partial":false,"thumbnailUrl":"media/panorama_EE04F5E4_EA82_C58F_41AB_3FFE0665A5E0_t.jpg","pitch":0,"data":{"label":"TestIMG"},"hfovMin":"163%","frames":[{"cube":{"levels":[{"url":"media/panorama_EE04F5E4_EA82_C58F_41AB_3FFE0665A5E0_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":30,"width":15360,"rowCount":5,"height":2560},{"url":"media/panorama_EE04F5E4_EA82_C58F_41AB_3FFE0665A5E0_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":18,"width":9216,"rowCount":3,"height":1536},{"url":"media/panorama_EE04F5E4_EA82_C58F_41AB_3FFE0665A5E0_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"width":6144,"rowCount":2,"height":1024},{"url":"media/panorama_EE04F5E4_EA82_C58F_41AB_3FFE0665A5E0_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"width":3072,"rowCount":1,"height":512},{"url":"media/panorama_EE04F5E4_EA82_C58F_41AB_3FFE0665A5E0_0/{face}/vr/0.jpg","tags":"mobilevr","class":"TiledImageResourceLevel","colCount":6,"width":9216,"rowCount":1,"height":1536}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_EE04F5E4_EA82_C58F_41AB_3FFE0665A5E0_t.jpg","class":"CubicPanoramaFrame"}]},{"subtitlesFontSize":"3vmin","toolTipOpacity":1,"subtitlesEnabled":true,"progressBarBorderRadius":0,"progressBorderSize":0,"id":"MainViewer","toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowHorizontalLength":1,"width":"100%","toolTipPaddingLeft":6,"playbackBarProgressBackgroundColor":["#3399FF"],"transitionMode":"blending","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadHeight":15,"playbackBarLeft":0,"subtitlesTextShadowBlurRadius":0,"progressBarBorderSize":0,"subtitlesFontFamily":"Arial","playbackBarHeadShadowBlurRadius":3,"subtitlesTextDecoration":"none","progressBackgroundColorRatios":[0],"playbackBarHeadShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","borderSize":0,"surfaceReticleSelectionOpacity":1,"toolTipDisplayTime":600,"toolTipShadowColor":"#333333","progressBackgroundColorDirection":"vertical","progressBackgroundOpacity":1,"toolTipBorderRadius":3,"subtitlesPaddingTop":5,"propagateClick":false,"surfaceReticleOpacity":0.6,"toolTipFontStyle":"normal","class":"ViewerArea","surfaceReticleColor":"#FFFFFF","toolTipTextShadowColor":"#000000","playbackBarHeadShadowVerticalLength":0,"progressRight":0,"toolTipShadowOpacity":1,"toolTipFontFamily":"Arial","height":"100%","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"subtitlesOpacity":1,"toolTipShadowBlurRadius":3,"subtitlesGap":0,"shadow":false,"toolTipFontSize":"1.11vmin","playbackBarHeadOpacity":1,"subtitlesShadow":false,"transitionDuration":500,"toolTipBorderSize":1,"playbackBarBackgroundOpacity":1,"vrPointerSelectionColor":"#FF6600","playbackBarBorderColor":"#FFFFFF","subtitlesHorizontalAlign":"center","paddingTop":0,"subtitlesBackgroundColor":"#000000","paddingBottom":0,"playbackBarOpacity":1,"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingTop":4,"subtitlesTextShadowOpacity":1,"doubleClickAction":"toggle_fullscreen","toolTipBorderColor":"#767676","borderRadius":0,"subtitlesVerticalAlign":"bottom","progressBorderRadius":0,"firstTransitionDuration":0,"progressBorderColor":"#000000","paddingLeft":0,"toolTipShadowSpread":0,"playbackBarBorderRadius":0,"progressBarBackgroundColor":["#3399FF"],"progressBarBackgroundColorDirection":"vertical","toolTipFontWeight":"normal","progressOpacity":1,"progressBarBorderColor":"#000000","progressBackgroundColor":["#FFFFFF"],"playbackBarBottom":5,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipTextShadowBlurRadius":3,"toolTipShadowVerticalLength":0,"progressLeft":0,"playbackBarProgressBorderColor":"#000000","paddingRight":0,"toolTipTextShadowOpacity":0,"toolTipShadowHorizontalLength":0,"subtitlesBorderSize":0,"displayTooltipInTouchScreens":true,"vrPointerSelectionTime":2000,"toolTipPaddingBottom":4,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesFontColor":"#FFFFFF","toolTipHorizontalAlign":"center","subtitlesFontWeight":"normal","playbackBarHeight":10,"toolTipFontColor":"#606060","surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingRight":6,"subtitlesTop":0,"minHeight":50,"progressBarOpacity":1,"displayTooltipInSurfaceSelection":true,"progressBottom":0,"subtitlesPaddingLeft":5,"progressBarBackgroundColorRatios":[0],"minWidth":100,"playbackBarHeadWidth":6,"playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesBottom":50,"playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowColor":"#000000","translationTransitionDuration":1000,"playbackBarProgressBorderSize":0,"playbackBarHeadBorderColor":"#000000","subtitlesPaddingRight":5,"subtitlesPaddingBottom":5,"subtitlesTextShadowVerticalLength":1,"progressHeight":10,"playbackBarProgressOpacity":1,"subtitlesBackgroundOpacity":0.2,"playbackBarBorderSize":0,"playbackBarProgressBorderRadius":0,"data":{"name":"Main Viewer"},"playbackBarRight":0},{"items":[{"media":"this.panorama_EE04F5E4_EA82_C58F_41AB_3FFE0665A5E0","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","camera":"this.panorama_EE04F5E4_EA82_C58F_41AB_3FFE0665A5E0_camera","player":"this.MainViewerPanoramaPlayer"}],"id":"mainPlayList","class":"PlayList"},{"automaticZoomSpeed":10,"initialSequence":"this.sequence_EFFD3C5D_EA82_CAB9_41C3_A1EA9F625E2F","hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"yaw":-54.3,"class":"PanoramaCameraPosition","pitch":-4.02},"id":"panorama_EE04F5E4_EA82_C58F_41AB_3FFE0665A5E0_camera"},{"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_EFFD3C5D_EA82_CAB9_41C3_A1EA9F625E2F","restartMovementOnUserInteraction":false}],"downloadEnabled":false,"mediaActivationMode":"window","children":["this.MainViewer"],"mobileMipmappingEnabled":false,"paddingRight":0,"horizontalAlign":"left","borderSize":0,"width":"100%","scrollBarVisible":"rollOver","propagateClick":false,"toolTipHorizontalAlign":"center","layout":"absolute","class":"Player","backgroundColor":["#FFFFFF"],"height":"100%","minHeight":20,"desktopMipmappingEnabled":false,"scripts":{"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizFinish":TDV.Tour.Script.quizFinish,"quizStart":TDV.Tour.Script.quizStart,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getOverlays":TDV.Tour.Script.getOverlays,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"clone":TDV.Tour.Script.clone,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setValue":TDV.Tour.Script.setValue,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPixels":TDV.Tour.Script.getPixels,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"init":TDV.Tour.Script.init,"resumePlayers":TDV.Tour.Script.resumePlayers,"isPanorama":TDV.Tour.Script.isPanorama,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setLocale":TDV.Tour.Script.setLocale,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showPopupImage":TDV.Tour.Script.showPopupImage,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showWindow":TDV.Tour.Script.showWindow,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getKey":TDV.Tour.Script.getKey,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"initQuiz":TDV.Tour.Script.initQuiz,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaByName":TDV.Tour.Script.getMediaByName,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMapLocation":TDV.Tour.Script.setMapLocation,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"historyGoForward":TDV.Tour.Script.historyGoForward,"openLink":TDV.Tour.Script.openLink,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMainViewer":TDV.Tour.Script.getMainViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"mixObject":TDV.Tour.Script.mixObject,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"downloadFile":TDV.Tour.Script.downloadFile,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"cloneCamera":TDV.Tour.Script.cloneCamera,"playAudioList":TDV.Tour.Script.playAudioList,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getComponentByName":TDV.Tour.Script.getComponentByName,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"existsKey":TDV.Tour.Script.existsKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"translate":TDV.Tour.Script.translate,"registerKey":TDV.Tour.Script.registerKey,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"unregisterKey":TDV.Tour.Script.unregisterKey,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags},"minWidth":20,"backgroundColorRatios":[0],"defaultVRPointer":"laser","scrollBarWidth":10,"contentOpaque":false,"shadow":false,"data":{"name":"Player522","textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"volume":1,"rate":1},"defaultLocale":"de","locales":{"de":"locale/de.txt"}},"mouseWheelEnabled":true,"paddingTop":0,"backgroundOpacity":1,"backgroundPreloadEnabled":true,"paddingBottom":0,"scrollBarMargin":2};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.1.11.js.map
//Generated with v2021.1.11, Tue Sep 14 2021