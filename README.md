# ToDoList
This a basic ToDos App built with React Native.

## Technology stack:

* react-native
* react-navigation
* react-native-vector-icons
* react-native-keyboard-aware-scroll-view

## Installation

### React Native setup:

```brew install node```

```brew install watchman```

```sudo npm install -g react-native-cli```

And also install Xcode for iOS simulator + Android Studio / Genymotion for Android simulator. Alternatively connect up a hardware device.

### Project setup:

Clone the repo:
```git clone https://github.com/pjay79/ToDoList.git```

Change to the project folder:
```cd ToDoList```

Add dependencies:
```npm install``` or ```yarn```

Run on ios:
```react-native-run-ios ```

Run on android:
```react-native-run-ios```

## Disclaimer:

If you experience the 'Haste package' error below in the Metro Bundler Terminal window:

***error: bundling failed: Error: While resolving module `react-native-vector-icons/FontAwesome`, the Haste package `react-native-vector-icons` was found. However the module `FontAwesome` could not be found within the package. Indeed, none of these files exist:***

Run this command below and reload to fix:

```rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json```.

If you can work out how to fix this please let me know.

Any feedback on the code itself is also appreciated.

## Screenshots:

![screenshot1](https://user-images.githubusercontent.com/14052885/35735704-c6bafd7e-0879-11e8-85a2-f8b2009e7152.png)
![screenshot2](https://user-images.githubusercontent.com/14052885/35735705-c6eea8cc-0879-11e8-9366-ffb66067087f.png)
![screenshot3](https://user-images.githubusercontent.com/14052885/35752416-fbba23b6-08af-11e8-82e1-b37fb3a2c3be.jpg)
