package com.testingsvg;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.johnsonsu.rnsoundplayer.RNSoundPlayerPackage;
import com.otomogroove.OGReactNativeWaveform.OGWavePackage;
import com.luongnd.RNGvr.RNGvrPackage;
import com.entria.views.RNViewOverflowPackage;
import com.airbnb.android.react.maps.MapsPackage;
import org.reactnative.camera.RNCameraPackage;
import se.folof.androw.RNAndrowPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.horcrux.svg.SvgPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.wix.interactable.Interactable;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNSoundPlayerPackage(),
            new OGWavePackage(),
            new RNGvrPackage(),
            new RNViewOverflowPackage(),
            new MapsPackage(),
            new RNCameraPackage(),
            new RNAndrowPackage(),
            new LinearGradientPackage(),
            new RNGestureHandlerPackage(),
            new VectorIconsPackage(),
            new SvgPackage(),
             new Interactable()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
