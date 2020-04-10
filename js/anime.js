            function setHash(str, title) {
                str = str.replace(/ /g, '\u2800')
                window.location.replace('#'+str)
                // window.history.replaceState({}, title, '#'+str)
                // ^ this one adds entries to the browser history in a terrible way
                // window.location.hash = str;
                // ^ this is the naive one that also adds things to browser history
            }

            $(document).on("ready", function(evt) {

                var hash = window.location.hash;
                var currentFun = 'ghost'
                $(document).on('mousemove', function(e) {
                    window.mouseX = e.pageX;
                });

                var now = 0;
                var tick = function() {
                    now += 50;
                    FUNctions[currentFun](now, state[currentFun]) // current frame from table of functions
                    setTimeout(tick, 50);
                }

                state = {
                    ghost: {
                        index: 0,
                        past: 0,
                    },
                };
                FUNctions = {
                    ghost: function(now, state) {
                        if (now - state.past > 120) {
                            var frames = [
                                '👻',
                                ' 👻',
                                '  👻',
                                '   👻',
                                '    👻',
                                '     👻',
                                '      👻',
                                '       👻',
                                '        👻',
                                '         👻',
                                '          👻',
                                '           👻',
                                '            👻',
                                '             👻',
                                '              👻',
                                '               👻',
                                '                👻',
                                '                 👻',
                                '                  👻',
                                '                   👻',
                                '                    👻',
                                '                   👻',
                                '                  👻',
                                '                 👻',
                                '                👻',
                                '               👻',
                                '              👻',
                                '             👻',
                                '            👻',
                                '           👻',
                                '          👻',
                                '         👻',
                                '        👻',
                                '       👻',
                                '      👻',
                                '     👻',
                                '    👻',
                                '   👻',
                                '  👻',
                                ' 👻',

                            ];
                            if (state.index > frames.length - 1) {
                                state.index = 0;
                            }

                            setHash(frames[state.index], ':👻');

                            state.index += 1;
                            state.past = now;
                        }
                    },
                };


                setTimeout(tick, 50)

            });
