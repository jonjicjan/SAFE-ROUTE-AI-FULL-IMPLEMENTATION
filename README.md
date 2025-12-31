📘 SafeRoute AI — Android Crash Detection & Emergency Alert System

SafeRoute AI is a smart Android application that detects road accidents in real time using device sensors and AI algorithms. Once a crash is detected, it automatically alerts emergency contacts and services with live GPS location and severity data. The app also includes offline SMS fallback and Google Maps live tracking.

🧠 Features

✔ Real-time crash detection using accelerometer
✔ Crash severity prediction using ML model
✔ Automatic SOS alert to emergency contacts
✔ Live GPS location sharing with Google Maps API
✔ Hazard detection via Google ML Kit Vision
✔ Firebase Firestore storing crash events
✔ Offline SMS alerts when internet isn’t available
✔ Multilingual support
✔ Voice assistant trigger support (Google Assistant)
✔ WearOS integration-ready

📦 Project Structure
SafeRouteAI/
 ├─ app/
 │   ├─ src/main/java/com/saferouteai/
 │   │    ├─ MainActivity.kt  
 │   │    ├─ CrashDetectionService.kt  
 │   │    ├─ SensorMonitor.kt  
 │   │    ├─ MLSeverityModel.kt  
 │   │    ├─ SOSManager.kt  
 │   │    ├─ HazardDetector.kt  
 │   │    ├─ LocationHelper.kt  
 │   │    ├─ AssistantCommands.kt  
 │   │    └─ LanguageSupport.kt  
 │   ├─ res/layout/  
 │   │    ├─ activity_main.xml  
 │   │    └─ activity_maps.xml  
 │   └─ AndroidManifest.xml  
 ├─ build.gradle  
 └─ google-services.json

🛠 Technology Stack
Component	Technology
Crash detection	Android Sensors
AI/ML	TensorFlow Lite + ML Kit
Location	Google Maps API / Fused Location
Database	Firebase Firestore
Notifications	Firebase Messaging / SMS
Voice commands	Google Assistant
Analytics	Firebase Analytics
🔧 Prerequisites

Before installing, make sure you have:

✔ Android Studio 4.1+
✔ Firebase project set up
✔ Google Maps API key
✔ Kotlin support enabled
✔ Internet & Location permissions granted on device

💡 Installation & Setup

Clone the repository

git clone https://github.com/yourusername/SafeRouteAI.git


Open project in Android Studio

Add your Firebase config file

Place google-services.json inside app/

Add your Google Maps API Key

In AndroidManifest.xml, update:

<meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="YOUR_GOOGLE_MAPS_API_KEY" />


Build and run on physical device

Crash detectors work only with real sensors

▶ How to Use

Launch the app

Click Start Detection

App runs in background monitoring sensors

On detecting a high-impact event, alert is triggered

Emergency SMS + Firebase alert sent

📍 Screenshots

(Add some images or MVP screenshots here)

🧪 Testing

✔ Test on a real Android device
✔ Confirm crash alerts in Firebase Console
✔ Check SMS alert delivery
✔ Verify Google Maps location

📌 Future Enhancements

✨ Deep learning crash model
✨ Offline voice trigger
✨ Hospital & police API integration
✨ Admin analytics web dashboard
✨ Smartwatch support

📝 License

This project is open-source — feel free to use and modify for educational purposes.
