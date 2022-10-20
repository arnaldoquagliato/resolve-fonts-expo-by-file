import React, {useEffect, useState} from 'react';
import * as Font from 'expo-font';

let customFonts = {
  //corrigir o import
  'sasa': require('./assets/fonts/LayarBahteraDoomsdayLightItalic.ttf'),
};


function App(){
  const [fontsLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    initFonts()
  }, [])

  const initFonts = (async () => {
    await Font.loadAsync(customFonts);
    setFontLoaded(true)
  });

  if (!fontsLoaded) {
    return null;
  }

  console.log(customFonts)

    return(
      <View >
        <Text style={{ fontFamily: "sasa", top: 200}}>Inter Black</Text>
      </View>
    );
}
export default App
