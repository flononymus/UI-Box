# UI-Box
___

A simple UI-sandbox/playground thingy (virtual fidget spinner)


### Todo:
- [ ] Look into electron + webpack
- [ ] Maybe electron + react


### Maybe structure?:
https://github.com/reZach/secure-electron-template

    app/
        electron/
            main.js    <-- BrowserWindow gets created here, event handlers, etc.
            menu.js    <-- Custom menu is defined here
            preload.js    <-- Preload code is here
        src/
            components/    <-- Reusable .jsx components
            core/    <-- The root wrapper element of the app (contains a store, page router)
            pages/    <-- Each page of the app (.jsx and .css).
                home/
                    home.jsx
                    home.css
                about/
                    about.jsx
                    about.css
            redux/    <-- Page routing code, may not be specific to you
            index.html    <-- Root html page
            index.jsx    <-- Root element that renders the root wrapper element
    dist/    <-- Gets auto-created
    node_modules/
    resources/
        icon.icns
        icon.ico
        icon.png
        etc...
    test/    <-- Contains test scripts
    .gitignore
    .babelrc
    package.json
    README.md
    webpack.config.js


___
### Refs

#### Youtube Tutorial:
https://www.youtube.com/watch?v=kN1Czs0m1SU

#### Multipage example maybe:
https://github.com/nklayman/electron-multipage-example

#### page structure example:
https://github.com/swiftyapp/swifty

#### electron boilerplate example:
https://github.com/szwacz/electron-boilerplate

#### Add react to electron (?):
https://www.freecodecamp.org/news/building-an-electron-application-with-create-react-app-97945861647c/