# Content Chunk 0002

Plain-text content extracted from source files with relationship metadata.

## AENLSB0A1111006 - Air Intake System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1111006.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > General Description > K14C
Outgoing references:
- AENLSB0A1111007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1111007.xml | Electric Throttle Control System Description:K14C
- AENLSB0A1111007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1111007.xml | Electric Throttle Control System Description:K14C

Content:
Air Intake System Description
The main components of the air intake system are air cleaner (1), air cleaner outlet hose (2), electric throttle body assembly (3) (For the details, refer to
Electric Throttle Control System Description:K14C
.) and intake manifold (4).
The air (by the amount corresponding to throttle valve (5) opening and engine speed) is filtered by the air cleaner, distributed by the intake manifold, and finally drawn into each combustion chamber. Electric throttle body assembly is not equipped with IAC valve for idle speed control. Idle speed control is performed by the throttle actuator (6) which opens / closes the throttle valve. (For the details, refer to
Electric Throttle Control System Description:K14C
.)

---

## AENLSB0A1111007 - Electric Throttle Control System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1111007.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > General Description > K14C
Outgoing references: none

Content:
Electric Throttle Control System Description
The electric throttle control system consists of the following:
Electric throttle body assembly incorporating the throttle valve, throttle actuator and TP sensors (main and sub)
Accelerator pedal assembly incorporating APP sensors (main and sub)
ECM
Operation Description
ECM (5) detects depressed extent of the accelerator pedal based on the signal voltage of the APP sensor (1). Using that data and engine operation condition, ECM calculates the optimum throttle valve opening. On the other hand, it detects the throttle valve opening based on the signal voltage of the TP sensor (3) in the electric throttle body assembly (2) and compares this value with the above calculated optimum throttle valve opening. When there is a difference between them, ECM changes the duty ratio (100% to 0%) of throttle actuator control according to this difference to drive the throttle actuator (4) in the electric throttle body assembly. When there is no difference, ECM fixes the duty ratio to about 15% to maintain the throttle valve opening. In this way, the throttle valve (13) is opened and closed to achieve the optimum throttle valve opening.
In this system, TP sensor and APP sensor have 2 sensors (main and sub) each to assure highly accurate and reliable control and abnormality detection. When ECM detects an abnormality in the system, it stops controlling the throttle actuator.
This throttle body is not equipped with IAC valve for idle speed control. Idle speed control is performed by the throttle actuator by adjusting the throttle valve opening.
6.
CPU
9.
APP sensor (sub) signal circuit
12.
Drive circuit of throttle actuator
7.
Throttle actuator driver
10.
TP sensor (main) signal circuit
8.
APP sensor (main) signal circuit
11.
TP sensor (sub) signal circuit

---

## AENLSB0A1111008 - Generator Control System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1111008.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > General Description > K14C
Outgoing references:
- AENLSB0A1A17001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A17001.xml | Charging System Specifications:K14C

Content:
Generator Control System Description
Generator control system consists of a generator (1), electric load current sensor (5) and ECM (4).
ECM controls generated electricity (adjusting voltage of IC regulator (2)) so that it is suitable for the engine and electric load conditions. To prevent drop in idling speed that would result from quick increase in electric load and consequent increase in engine load, ECM performs a control so that the generator output increases gradually. In the case of a temporary increase in electricity generation demand while driving, ECM performs a control to limit operation of the generator and thus limits increase in load on the engine to maintain the engine performance whenever necessary (during acceleration, for example).
Operation
ECM optimally controls the generator output voltage by changing the excitation current and regulated voltage based on the following information.
Engine condition (ECT, vehicle speed, engine speed, TP, etc.) (7)
Battery voltage (ECM power voltage) (8)
Electric load condition (blower motor, rearend door window defogger, headlights, radiator cooling fan, A/C compressor, etc.) (9)
Field coil (3) control duty which indicates the operation rate of the field coil
The signal to the “LIN” terminal of the generator adjusts the regulating voltage of the IC regulator, which in turn controls the duty ratio of the field coil and thus the output voltage (“B” terminal output) of the generator.
(For more information on the generator output voltage, refer to
Charging System Specifications:K14C
.)
Furthermore, the generating condition of the generator is controlled to the optimum level using the electric load current sensor which detects the electrical load condition (current consumption) linearly even when a sudden electrical load variation occurs and thus the engine load is reduced.
6.
Battery
10.
Combination meter
11.
CAN driver

---

## AENLSB0A1111009 - Electronic Control System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1111009.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > General Description > K14C
Outgoing references:
- AENLSB0A1411003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1411003.xml | Turbocharger Description:K14C

Content:
Electronic Control System Description
Fuel Injection Control System
The system controls fuel to be supplied into cylinder adjusting injection timing and injection time (volume) optimally.
Fuel injection timing and time (volume) are decided by engine start injection control for the engine starting and after start injection control during the normal driving. Further, fuel cut is controlled in response to the driving conditions.
Engine start injection control
Fuel injection timing
The injection timing is decided corresponding to coolant temperature and fuel is injected in sequential order synchronizing with crankshaft position sensor signal.
Fuel injection time (volume)
For engine start, the injection time is decided adding corrective factors such as intake air temperature, battery voltage, engine speed (cranking speed) and atmospheric pressure to the basic injection time.
And, the lower the coolant temperature, the longer the injection time for good startability.
After start injection control
Fuel injection timing
For programed finishing time of injection, start timing of injection is calculated and fuel is injected sequentially under normal condition.
When fuel cut is finished and normal injection restarts or when accelerating rapidly, fuel is injected into all cylinders simultaneously for a short time without synchronizing with crankshaft position sensor signal.
Fuel injection time (volume)
The basic injection time is decided based on intake air volume and engine speed, and using this basic injection time, optimum injection time is adjusted to fit driving conditions taking information from each sensor.
Fuel cut control
Engine speed fuel cut
To prevent engine overspeed, this fuel cut is operated at engine speed 6,300 rpm or higher.
Each figure in fuel cut condition shown here is reference value (a guide line).
Deceleration fuel cut
To restrain hydrocarbon (HC) emissions and improve fuel economy, this fuel cut is operated during deceleration in specified conditions.
Ignition Timing Control
Corresponding to vehicle running conditions, ignition timing is controlled optimally.
There are three control modes to determine ignition timing, i.e. engine start ignition control mode, normal driving condition ignition control mode and ignition timing inspection mode. Further, torque down control is executed controlling ignition timing.
Engine start ignition control
When engine speed (cranking speed) is below 500 rpm, ignition timing is BTDC –10° to 10°.
Normal condition control mode
At idling
The timing is optimized adding factor of coolant temperature to basic timing for engine start.
Except idling
Basic timing determined by factors such as intake air volume, engine speed and state of VVT is corrected optimally.
Ignition timing inspection mode
When checking ignition timing with SUZUKI scan tool (Suzuki SDT-II), the timing is fixed to BTDC 5° at idling.
Electric Throttle Control
Receiving dual voltage signals, main and sub, from APP sensor, a target degree of throttle opening is calculated and to bring the throttle opening closer to the target, throttle actuator is activated. Further, the system executes the following controls in response to the vehicle conditions.
Engine start control
For engine start, throttle opening angle is set up according to coolant temperature to increase intake air for good startability. And, the lower the coolant temperature, the wider the throttle opening for the same purpose.
Idling control
Basic throttle opening angle is set up according to information of coolant temperature, shift position and A/C switch and, adding corrective factors, a target degree of throttle opening is determined.
Normal condition control
Adding information of accelerator pedal depressing degree, engine load, etc. to basic throttle opening degree, a target degree of throttle opening is determined. If actual throttle opening angle differs from the target degree, ECM adjusts the throttle opening to bring it closer to the target.
Deceleration control
At the time of deceleration, the system opens throttle valve at specified degree to increase intake air and prevents engine speed from excessive falling.
Maximum engine speed limitation control
To prevent engine overspeed, throttle opening is restricted.
While vehicle is running: Engine speed at 6,000 rpm or higher.
While vehicle is stopped:
Engine speed at 5,000 rpm or higher.
Engine speed of 3,200 rpm or higher continues for 150 seconds.
Each engine speed shown here is reference value as a guide line.
Torque down control
While ESP ® control module is executing traction control and stability control, if necessity of engine torque down is judged, the torque down request is inputted to ECM and the ECM controls throttle opening and ignition timing for it.
Fail-safe control
When malfunction of throttle control circuit is detected, ECM cuts off current to throttle actuator. As a result, throttle valve opening is fixed at the default angle or, movable maximum opening of throttle valve is restricted to a degree equivalent to the default angle. However, minimum vehicle running is ensured by control of fuel injection and ignition timing.
Generator Control System
ECM communicates with generator through LIN. For better startability of engine, generator is controlled not to generate electric power while cranking engine.
Receiving information from generator, ECM sends charging system information to combination meter through CAN and controls ON/OFF of charge warning light.
VVT System
The system controls OCV for optimum valve timing in response to engine speed, volume of intake air, degree of throttle opening and coolant temperature. The valve timing is brought closer to the engine command by feedback control detecting actual advance angle of the valve.
Evaporative Emission Control System
Corresponding to vehicle running conditions, the system controls ON/OFF of canister purge control solenoid valve to suck in fuel vapor absorbed in canister and feeds it into intake manifold together with air-fuel mixture to burn. This function restrains the fuel vapor to be released to atmosphere.
Radiator Cooling Fan Control System
Based on information of A/C switch, vehicle speed, engine speed, coolant temperature and A/C refrigerant pressure, the system controls radiator fan relays No.1, No.2 and No.3 for operation of LO, MID, HI or stop.
Fuel Pump Control System
The system operates or stops fuel pump controlling fuel pump relay.
ON conditions of fuel pump relay
For specified time after ignition “ON”.
While CKP sensor signal is being inputted to ECM with engine running.
Main Relay Control
Corresponding to “ON” or “OFF” of ignition mode, the main relay is controlled for startup or stop of EPI system.
The main relay has a self-shutoff function which supplies power source to internal circuit in ECM for specified time until the system stops after ignition “OFF”, and a countercurrent prevention function which refrains battery from supplying reverse current caused by erroneous battery reverse connection.
A/C Control System
Based on information from A/C switch, A/C refrigerant pressure sensor and vehicle driving conditions through CAN communication, the system controls ON/OFF of A/C compressor.
HO2S Heater Control System
To quicken startup or maintain activation of HO2S sensor, the system controls HO2S sensor heater with duty cycle pulse signal.
CAN Communication System
Using this system, each control module transmits / receives data and information with other control modules.
Brake Override System
When the driver depresses accelerator pedal and brake pedal at the same time, ECM controls engine output by restricting throttle valve opening and prioritizes braking force.
The system may not be activated depending in the following conditions.
Depressing amount of accelerator pedal and brake pedal
Vehicle speed
The system restricts throttle valve opening mainly. Therefore, ignition timing control and VVT system are affected by this system.
Boost Control System
Waste gate valve-vacuum switching valve (WGV-VSV) control
The engine requires optimum supercharged pressure at any running conditions.
The boost pressure sensor detects the actual intake pressure and feedback controls WGV-VSV for the turbocharger.
Refer to “Waste Gate Valve Function” under
Turbocharger Description:K14C
.
Air bypass valve-vacuum switching valve (ABV-VSV) control
ABV-VSV operates ABV to open to relief compressed intake air from turbocharger outlet side to inlet side when throttle valve is shut suddenly while the vehicle is running with wide open throttle. The open function of the ABV valve releases the air pressure for an instant and restrains air surge noise.

---

## AENLSB0A1111010 - Engine and Emission Control Input / Output Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1111010.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > General Description > K14C
Outgoing references: none

Content:
Engine and Emission Control Input / Output Table
Function
Output
Input
Injection control
Fuel injector
Ignition ON signal
Ignition START signal
ECT sensor
CKP sensor
CMP sensor
TP sensor
APP sensor
MAP sensor
MAF sensor
IAT sensor-1
HO2S-1
HO2S-2
Barometric pressure sensor
A/C refrigerant pressure sensor
Battery voltage
Brake light switch / brake switch
BCM (A/C switch status signal)
ESP ® control module (wheel speed signal and torque up / down request signal)
P/S control module
TCM (engine speed limit request signal and torque up / down request signal) (A/T model)
Immobilizer control
Fuel injector
Ignition ON signal
BCM
Ignition coil assembly
Ignition control
Ignition coil assembly
Ignition ON signal
Ignition START signal
ECT sensor
CKP sensor
CMP sensor
TP sensor
APP sensor
MAP sensor
MAF sensor
IAT sensor-1
Knock sensor
Barometric pressure sensor
Battery voltage
BCM (electric load signal and A/C switch status signal)
ESP ® control module (wheel speed signal and torque up / down request signal)
TCM (engine speed limit request signal and torque down request signal) (A/T model)
Idle speed control
Throttle actuator
Ignition ON signal
Ignition START signal
ECT sensor
CKP sensor
TP sensor
APP sensor
MAP sensor
MAF sensor
IAT sensor-1
HO2S-1
HO2S-2
Barometric pressure sensor
Oil temperature sensor
A/C refrigerant pressure sensor
Brake light switch / brake switch
Generator (field coil measured signal)
BCM (electric load signal and A/C switch status signal)
ESP ® control module (wheel speed signal and torque up / down request signal)
P/S control module
TCM (transmission shift position signal and torque up / down request signal) (A/T model)
Throttle valve control
Throttle actuator
Ignition ON signal
Ignition START signal
ECT sensor
CKP sensor
TP sensor
APP sensor
MAP sensor
MAF sensor
IAT sensor-1
HO2S-1
HO2S-2
Barometric pressure sensor
A/C refrigerant pressure sensor
Brake light switch / brake switch
Generator (field coil measured signal)
BCM (electric load signal and A/C switch status signal)
ESP ® control module (torque up/down request signal)
TCM (engine speed limit request signal and torque up / down request signal) (A/T model)
Cruise control
Throttle actuator
Ignition ON signal
CKP sensor
CPP No.2 switch (M/T model)
Brake light switch / brake switch
Cruise control switch
ESP ® control module (wheel speed signal)
TCM (engine speed limit request signal, transmission shift position signal and torque up / down request signal) (A/T model)
Generator control
Generator
Ignition ON signal
CKP sensor
APP sensor
Electric load current sensor signal
Generator (field measured signal)
Battery voltage
BCM (electric load signal)
ESP ® control module (wheel speed signal)
HO2S-1 heater control
HO2S-1
Ignition ON signal
Ignition START signal
ECT sensor
TP sensor
MAP sensor
MAF sensor
IAT sensor-1
Barometric pressure sensor
CKP sensor
Battery voltage
HO2S-2 heater control
HO2S-2
Ignition ON signal
Ignition START signal
ECT sensor
TP sensor
MAP sensor
MAF sensor
IAT sensor-1
Barometric pressure sensor
CKP sensor
Battery voltage
EVAP purge control
EVAP canister purge valve
Ignition ON signal
ECT sensor
CKP sensor
TP sensor
MAP sensor
MAF sensor
IAT sensor-1
HO2S-1
HO2S-2
Barometric pressure sensor
ESP ® control module (wheel speed signal)
BCM (electric load signal and A/C switch status signal)
TCM (engine speed limit request signal and torque up / down request signal) (A/T model)
VVT control
OCV
Ignition ON signal
ECT sensor
CKP sensor
CMP sensor
IAT sensor-1
MAP sensor
MAF sensor
TP sensor
Brake light switch / brake switch
ESP ® control module (wheel speed signal)
Boost control
Air bypass valve-vacuum switching valve (ABV-VSV)
Ignition ON signal
ECT sensor
CKP sensor
TP sensor
APP sensor
MAP sensor
Boost pressure sensor
ESP ® control module (wheel speed signal)
Waste gate valve-vacuum switching valve (WGV-VSV)
Ignition ON signal
ECT sensor
CKP sensor
APP sensor
MAP sensor
Boost pressure sensor
IAT sensor-1
IAT sensor-2
ESP ® control module (wheel speed signal)
Fuel pressure control
High pressure fuel pump
Ignition ON signal
ECT sensor
CKP sensor
CMP sensor
MAP sensor
Fuel pressure sensor
A/C compressor control
A/C compressor relay
Ignition ON signal
Ignition START signal
ECT sensor
CKP sensor
TP sensor
APP sensor
A/C refrigerant pressure sensor
MAP sensor
Barometric pressure sensor
BCM (evaporator temperature and A/C ON request signal)
ESP ® control module (wheel speed signal)
Radiator cooling fan control
Radiator cooling fan relay
Ignition ON signal
ECT sensor
CKP sensor
A/C refrigerant pressure sensor
BCM (electric load signal and A/C switch status signal)
ESP ® control module (wheel speed signal)
Fuel pump control
Fuel pump relay
Ignition ON signal
Ignition START signal
CKP sensor
Main relay control
Main relay
Ignition ON signal

---

## AENLSB0A1112001 - Engine and Emission Control System Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1112001.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Schematic and Routing Diagram > K14C
Outgoing references: none

Content:
Engine and Emission Control System Diagram
1.
Air cleaner
17.
Fuel pump (with pressure regulator)
33.
TCM (A/T model)
2.
MAF sensor with IAT sensor-1
18.
Knock sensor
34.
OCV
3.
ABV-VSV
19.
WGV-VSV
35.
Radiator cooling fan relay No.1, No.2 and No.3
4.
Intercooler
20.
HO2S-1
36.
A/C compressor relay
5.
Boost pressure sensor with IAT sensor-2
21.
HO2S-2
37.
Oil temperature sensor
6.
MAP sensor
22.
Fuel pump relay
38.
A/C refrigerant pressure sensor
7.
TP sensor
23.
ECM
39.
Generator
8.
Throttle actuator
24.
Barometric pressure sensor
40.
Brake light
9.
Ignition coil assembly
25.
Cruise control switch
41.
CPP No.1 switch (M/T model) or transmission range sensor (A/T model)
10.
EVAP canister purge valve
26.
CPP No.2 switch (M/T model)
42.
Starting motor control relay
11.
EVAP canister
27.
Brake switch
43.
Brake light switch
12.
ECT sensor
28.
APP sensor
44.
BCM
13.
Fuel injector
29.
CMP sensor
45.
IG11 relay
14.
Fuel pressure sensor
30.
CKP sensor
46.
Main relay
15.
High pressure fuel pump
31.
Neutral position switch (if equipped)
47.
Electric load current sensor
16.
Fuel cut valve
32.
To other control modules and sensor connected by CAN
48.
Starting motor

---

## AENLSB0A1112002 - Engine and Emission Control System Flow Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1112002.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Schematic and Routing Diagram > K14C
Outgoing references: none

Content:
Engine and Emission Control System Flow Diagram

---

## AENLSB0A1112003 - Electronic Control System Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1112003.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Schematic and Routing Diagram > K14C
Outgoing references:
- AENLSB0A1114082 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114082.xml | Inspection of ECM and Its Circuits:K14C

Content:
Electronic Control System Circuit Diagram
[A]:
M/T model
26.
Battery temperature sensor
55.
Radiator cooling fan relay No.3
[B]:
A/T model
27.
DLC
56.
Radiator cooling fan motor
[C]:
Adaptive cruise control model
28.
To other control modules and sensor connected by CAN
57.
Radiator cooling sub fan motor
[D]:
Non-adaptive cruise control model
29.
TCM
58.
“RDTR” fuse
1.
ECM
30.
Barometric pressure sensor
59.
“RDTR2” fuse
2.
APP sensor
31.
CAN driver
60.
Fuel pump relay
3.
APP sensor (main)
32.
LIN driver
61.
Fuel pump
4.
APP sensor (sub)
33.
Fuel injector No.1
62.
“F/P” fuse
5.
CMP sensor
34.
Fuel injector No.2
63.
A/C compressor relay
6.
CKP sensor
35.
Fuel injector No.3
64.
A/C compressor
7.
HO2S-1
36.
Fuel injector No.4
65.
“CPRSR” fuse
8.
HO2S-2
37.
High pressure fuel pump
66.
Starting motor control relay
9.
Shield wire
38.
Oil temperature sensor
67.
Starting motor
10.
MAF sensor with IAT sensor-1
39.
Electric throttle body assembly
68.
“ST” fuse
11.
ECT sensor
40.
Throttle actuator
69.
“ST SIG2” fuse
12.
Boost pressure sensor with IAT sensor-2
41.
TP sensor (main)
70.
CPP No.1 switch
13.
Fuel pressure sensor
42.
TP sensor (sub)
71.
BCM
14.
MAP sensor
43.
Neutral position switch (if equipped)
72.
Engine switch
15.
Knock sensor
44.
EVAP canister purge valve
73.
“IG” fuse
16.
A/C refrigerant pressure sensor
45.
OCV
74.
IG11 relay
17.
Cruise control switch
46.
ABV-VSV
75.
“IGN” fuse
18.
CPP No.2 switch
47.
WGV-VSV
76.
“INJ DRV” fuse
19.
Brake light switch / brake switch
48.
Ignition coil assembly No.1
77.
“FI” fuse
20.
Brake light
49.
Ignition coil assembly No.2
78.
Main relay
21.
Brake switch
50.
Ignition coil assembly No.3
79.
“FI MAIN” fuse
22.
Brake light switch
51.
Ignition coil assembly No.4
80.
Main fuse box
23.
“IG1 SIG” fuse
52.
Generator
81.
Battery
24.
“STOP” fuse
53.
Radiator cooling fan relay No.1
82.
Engine ground
25.
Electric load current sensor
54.
Radiator cooling fan relay No.2
83.
Body ground
Terminal Arrangement of ECM Connector
For circuit names and terminal voltages, refer to
Inspection of ECM and Its Circuits:K14C
.
[A]:
ECM connector (View: [a])

---

## AENLSB0A1113001 - Electronic Control System Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1113001.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Component Location > K14C
Outgoing references: none

Content:
Electronic Control System Component Location
This figure shows component locations for LHD. For RHD, alphabets / numbers with (*) are installed on the opposite side.
Information sensors
Control devices
Others
1.
CPP No.2 switch (M/T model)
[a]:
MIL
[1]:
DLC
2.
CPP No.1 switch (M/T model)
[b]:
Immobilizer indicator light
[2]:
Combination meter
3.
Brake light switch / brake switch
[c]:
EVAP canister purge valve
[3]:
Individual circuit fuse box No.1
4.
Accelerator pedal assembly (incorporating APP sensor)
[d]:
Electric throttle body assembly
[4]:
ECM
5.
MAF sensor with IAT sensor-1
[e]:
Fuel injector
6.
MAP sensor
[f]:
Radiator cooling fan relay No.1
7.
TP sensor
[g]:
Radiator cooling fan relay No.2
8.
Fuel pressure sensor
[h]:
Radiator cooling fan relay No.3
9.
Knock sensor
[i]:
Fuel pump relay
10.
CKP sensor
[j]:
Main relay
11.
A/C refrigerant pressure sensor
[k]:
A/C compressor relay
12.
Oil temperature sensor
[l]
OCV
13.
HO2S-1
[m]:
ABV-VSV
14.
HO2S-2
[n]:
Generator
15.
Boost pressure sensor with IAT sensor-2
[o]:
High pressure fuel pump
16.
CMP sensor
[p]:
Ignition coil assembly
17.
ECT sensor
[q]:
WGV-VSV
18.
Electric load current sensor
19.
Neutral position switch (if equipped)

---

## AENLSB0A1114001 - Engine and Emission Control System Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C
Outgoing references:
- AENLSB0A1114001013 -> unresolved | Step 1: Customer Complaint Analysis
- AENLSB0A1114004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114004.xml | DTC Clearance:K14C
- AENLSB0A1114001015 -> unresolved | Steps 3 and 4: Visual Inspection
- AENLSB0A1114001015 -> unresolved | Steps 3 and 4: Visual Inspection
- AENLSB0A1114001025 -> unresolved | Step 11: Final Confirmation Test
- AENLSB0A1114001013 -> unresolved | Step 1: Customer Complaint Analysis
- AENLSB0A1114001014 -> unresolved | Step 2: DTC / Freeze Frame Data Check, Record and Clearance
- AENLSB0A1114003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114003.xml | DTC Check:K14C
- AENLSB0A1114009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114009.xml | Engine Basic Inspection:K14C
- AENLSB0A1114010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114010.xml | Engine Symptom Diagnosis:K14C

Content:
Engine and Emission Control System Check
Refer to the following items for the details of each step.
Customer complaint analysis
Perform
Step 1: Customer Complaint Analysis
.
Was customer complaint analysis performed?
Go to Step 2.
Perform customer complaint analysis.
DTC / freeze frame data check, record and clearance
Check for DTCs (including pending DTCs).
Is there any DTC(s) / freeze frame data?
Print DTCs and freeze frame data or write them down and clear them referring to
DTC Clearance:K14C
, and go to Step 3.
Go to Step 4.
Visual inspection
Perform
Steps 3 and 4: Visual Inspection
.
Is there any faulty condition?
Repair or replace defective part, and then go to Step 11.
Go to Step 5.
Visual inspection
Perform
Steps 3 and 4: Visual Inspection
.
Is there any faulty condition?
Repair or replace defective part, and then go to Step 11.
Go to Step 8.
Trouble symptom confirmation
Check trouble symptom.
Is trouble symptom identified?
Go to Step 6.
Go to Step 7.
Rechecking and recording DTC / freeze frame data
Recheck for DTC and freeze frame data.
Is there any DTC(s)?
Go to Step 9.
Go to Step 8.
Rechecking and recording DTC / freeze frame data
Recheck for DTC and freeze frame data.
Is there any DTC(s)?
Go to Step 9.
Go to Step 10.
Engine basic inspection and engine symptom diagnosis
Check and repair.
Are check and repair complete?
Go to Step 11.
Check and repair defective part(s), and go to Step 11.
Troubleshooting for DTC
Check and repair according to applicable DTC troubleshooting.
Are check and repair complete?
Go to Step 11.
Check and repair defective part(s), and go to Step 11.
Intermittent problem check
Check for intermittent problems.
Is there any faulty condition?
Repair or replace defective part(s), and go to Step 11.
Go to Step 11.
Final confirmation test
Clear DTC if any.
Perform
Step 11: Final Confirmation Test
.
Is there any problem symptom, DTC or abnormal condition?
Go to Step 6.
End.
Step 1: Customer Complaint Analysis
Record details of the problem (failure, complaint) and how it occurred as described by the customer. For this purpose, use of an inspection form as shown will facilitate collecting information required for proper analysis and diagnosis.
This form is a standard sample. It should be modified according to characteristic of each market.
Customer questionnaire form (Example)
Step 2: DTC / Freeze Frame Data Check, Record and Clearance
First, check DTC (including pending DTC).
If DTC is indicated, print it and freeze frame data or write them down and then clear them.
Steps 3 and 4: Visual Inspection
As a preliminary step, perform visual check of the items that support proper function of the engine.
Step 5: Trouble Symptom Confirmation
If there is no DTC in Step 2:
Based on information obtained in
Step 1: Customer Complaint Analysis
and
Step 2: DTC / Freeze Frame Data Check, Record and Clearance
, check trouble symptoms.
If there is any DTC in Step 2:
Recheck DTC according to “DTC Confirmation Procedure” described in each DTC troubleshooting.
Steps 6 and 7: Rechecking and Recording DTC / Freeze Frame Data
Refer to
DTC Check:K14C
for checking procedure.
Step 8: Engine Basic Inspection and Engine Symptom Diagnosis
Perform
Engine Basic Inspection:K14C
.
If there is no faulty part found in inspection procedure of “Engine Basic Inspection”, perform
Engine Symptom Diagnosis:K14C
based on symptom found in vehicle checking in the following steps.
Customer complaint analysis
Trouble symptom confirmation
Step 9: Troubleshooting for DTC
Perform applicable DTC troubleshooting and repair or replace faulty parts.
Step 10: Intermittent Problem Check
If there is no DTC in Step 2:
Check for intermittent problem.
If there is any DTC in Step 2:
Check parts related to detected DTC (e.g. wire harness, connector, etc.).
Step 11: Final Confirmation Test
Check that the problem symptom has gone and engine is free from any abnormal conditions. If what has been repaired is related to DTC, clear DTC once, perform DTC confirmation procedure and check that no DTC is indicated.

---

## AENLSB0A1114002 - MIL Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114002.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C
Outgoing references:
- AENLSB0A5101003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5101003.xml | OBD System Description
- AENLSB0A1114011 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114011.xml | MIL Does Not Come ON with Ignition “ON” and Engine Stopped (but Engine Can Be Started):K14C
- AENLSB0A1114083 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114083.xml | ECM Power Supply and Ground Circuit Check:K14C
- AENLSB0A1114012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114012.xml | MIL Remains ON after Engine Starts:K14C

Content:
MIL Check
There are two types of OBD system on TCM depending on the vehicle specification.
For identification, refer to “Discrimination for OBD System” under
OBD System Description
.
Set ignition “ON” (with engine at stop) and check that MIL (1) lights.
If MIL does not light up but engine can be started, go to
MIL Does Not Come ON with Ignition “ON” and Engine Stopped (but Engine Can Be Started):K14C
for troubleshooting.
If MIL does not light with ignition “ON” and engine does not start though it is cranked, go to
ECM Power Supply and Ground Circuit Check:K14C
.
Start engine and check that MIL turns off.
If MIL remains on and no DTC is stored in ECM and TCM (type A-A/T model), go to
MIL Remains ON after Engine Starts:K14C
for troubleshooting.

---

## AENLSB0A1114003 - DTC Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114003.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C
Outgoing references:
- AENLSB0A5101003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5101003.xml | OBD System Description

Content:
DTC Check
There are two types of OBD system on TCM depending on the vehicle specification.
For identification, refer to “Discrimination for OBD System” under
OBD System Description
.
In case that MIL turns on, the malfunction(s) is detected in either ECM or TCM (type A-A/T model) and it stores the trouble information (DTC, freeze frame data, etc.) in its memory.
Set ignition “OFF”.
Connect SUZUKI scan tool or CAN communication OBD-II generic scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Read DTC, pending DTC and freeze frame data according to instructions displayed on SUZUKI scan tool and print them or write them down. Refer to Operator's Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and ECM is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
Check central gateway control module power supply circuit and ground circuit.
Check ECM power circuit and ground circuit.
After completing the check, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0A1114004 - DTC Clearance
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114004.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C
Outgoing references:
- AENLSB0A1111003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1111003.xml | OBD System Description:K14C

Content:
DTC Clearance
Set ignition “OFF”.
Connect SUZUKI scan tool or CAN communication OBD-II generic scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Clear DTC and pending DTC according to instructions displayed on SUZUKI scan tool and print them or write them down. Refer to Operator's Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and ECM is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
Check central gateway control module power supply circuit and ground circuit.
Check ECM power circuit and ground circuit.
After completing DTC clearance, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.
DTC and freeze frame data stored in ECM memory are also cleared in the following case. Be careful not to clear them before recording them.
When the same malfunction (DTC) is not detected again for 40 engine warm-up cycles. (See “Warm-Up Cycle” under
OBD System Description:K14C
.)

---

## AENLSB0A1114005 - DTC Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114005.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C
Outgoing references:
- AENLSB0A5101003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5101003.xml | OBD System Description
- AENLSB0A1114040 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114040.xml | DTC P0300 / P0301 / P0302 / P0303 / P0304:K14C
- AENLSB0AA114005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA114005.xml | DTC Table:Cruise Control
- AENLSB0AA124006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA124006.xml | DTC Table:Adaptive Cruise Control
- AENLSB0AA304005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304005.xml | DTC Table
- AENLSB0AA814002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814002.xml | CAN DTC (Lost Communication and Communication Bus Off) Table:CAN (K14C Model)

Content:
DTC Table
There are two types of OBD system on TCM depending on the vehicle specification.
For identification, refer to “Discrimination for OBD System” under
OBD System Description
.
When DTC P0300 / P0301 / P0302 / P0303 / P0304 is detected, MIL blinks or lights up according to detecting condition. For details, refer to
DTC P0300 / P0301 / P0302 / P0303 / P0304:K14C
.
With the CAN communication generic scan tool, only DTC with asterisk (*) in the following table can be read.
“1 D/C / 3 D/C” in “DTC detection logic” column of table below means DTC detecting logic varies depending on DTC detecting condition.
For details, refer to each “DTC Detecting Condition and Trouble Area”.
“Lights up / Off” in “MIL” column of table below means MIL operation varies depending on DTC detection condition.
For details, refer to each “DTC Detecting Condition and Trouble Area”.
DTC
DTC name
DTC detecting condition
DTC
detection logic
MIL
*P0010
“A” Camshaft Position Actuator Circuit / Open (Bank1)
OCV drive circuit is open.
3 D/C
Lights up
*P0011
“A” Camshaft Position Timing Over Advanced or System Performance (Bank1)
Measured CMP does not reach target CMP for specified time.
3 D/C
Lights up / Off
*P0016
Crankshaft Position – Camshaft Position Correlation (Bank1 SensorA)
Difference between camshaft position and crankshaft position is out of specified range.
3 D/C
Lights up / Off
*P0030
HO2S Heater Control Circuit (Bank1 Sensor1)
HO2S-1 heater drive circuit is open.
3 D/C
Lights up
*P0031
HO2S Heater Control Circuit Low (Bank1 Sensor1)
HO2S-1 heater drive circuit is shorted to ground.
3 D/C
Lights up
*P0032
HO2S Heater Control Circuit High (Bank1 Sensor1)
HO2S-1 heater drive circuit is shorted to power supply.
3 D/C
Lights up
*P0033
Turbocharger / Supercharger Bypass Valve Control Circuit
ABV-VSV drive circuit is open.
1 D/C
Lights up
*P0034
Turbocharger / Supercharger Bypass Valve Control Circuit Low
ABV-VSV drive circuit is shorted to ground.
1 D/C
Lights up
*P0035
Turbocharger / Supercharger Bypass Valve “A” Control Circuit High
ABV-VSV drive circuit is shorted to power supply.
1 D/C
Lights up
*P0036
HO2S Heater Control Circuit (Bank1 Sensor2)
HO2S-2 heater drive circuit is open.
3 D/C
Lights up
*P0037
HO2S Heater Control Circuit Low (Bank1 Sensor2)
HO2S-2 heater drive circuit is shorted to ground.
3 D/C
Lights up
*P0038
HO2S Heater Control Circuit High (Bank1 Sensor2)
HO2S-2 heater drive circuit is shorted to power supply.
3 D/C
Lights up
*P0039
Turbocharger / Supercharger Bypass Valve “A” Control Circuit Range / Performance
Boost pressure fluctuation is more than specified value during fuel cut.
1 D/C
Lights up
*P0087
Fuel Rail / System Pressure – Too Low
Measured fuel rail pressure is far below targeted fuel rail pressure for specified time.
1 D/C
Lights up
*P0088
Fuel Rail / System Pressure – Too High
Measured fuel rail pressure is far above targeted fuel rail pressure for specified time.
1 D/C
Lights up
*P0090
Fuel Pressure Regulator1 Control Circuit / Open
High pressure fuel pump circuit is open.
1 D/C
Lights up
*P0091
Fuel Pressure Regulator1 Control Circuit Low
High pressure fuel pump circuit is shorted to ground.
1 D/C
Lights up
*P0092
Fuel Pressure Regulator1 Control Circuit High
High pressure fuel pump circuit is shorted to power supply.
1 D/C
Lights up
*P0097
Intake Air Temperature Sensor 2 Circuit Low (Bank1)
Output voltage of IAT sensor-2 signal circuit is lower than 0.02 V for 5 sec.
3 D/C
Lights up
*P0098
Intake Air Temperature Sensor 2 Circuit High (Bank1)
Output voltage of IAT sensor-2 signal circuit is higher than 4.98 V for 5 sec.
3 D/C
Lights up
*P0102
Mass or Volume Air Flow “A” Circuit Low
Output voltage of MAF sensor signal circuit is lower than 0.28 V for 5 sec.
1 D/C
Lights up
*P0103
Mass or Volume Air Flow “A” Circuit High
Output voltage of MAF sensor signal circuit is higher than 4.98 V for 5 sec.
1 D/C
Lights up
*P0107
Manifold Absolute Pressure / Barometric Pressure Circuit Low
Output voltage of MAP sensor signal circuit is lower than 0.06 V for 5 sec.
1 D/C
Lights up
*P0108
Manifold Absolute Pressure / Barometric Pressure Circuit High
Output voltage of MAP sensor signal circuit is higher than 4.89 V for 5 sec.
1 D/C
Lights up
*P0112
Intake Air Temperature Sensor1 Circuit Low (Bank1)
Output voltage of IAT sensor-1 signal circuit is lower than 0.02 V for 5 sec.
3 D/C
Lights up
*P0113
Intake Air Temperature Sensor1 Circuit High (Bank1)
Output voltage of IAT sensor-1 signal circuit is higher than 4.98 V for 5 sec.
3 D/C
Lights up
*P0116
Engine Coolant Temperature Sensor1 Circuit Range / Performance
Difference between measured ECT and estimated ECT is more than specified value for specified time with engine running.
3 D/C
Lights up
*P0117
Engine Coolant Temperature Sensor1 Circuit Low
Output voltage of ECT sensor signal circuit is lower than 0.02 V.
3 D/C
Lights up
*P0118
Engine Coolant Temperature Sensor1 Circuit High
Output voltage of ECT sensor signal circuit is higher than 4.98 V.
3 D/C
Lights up
*P0122
Throttle / Pedal Position Sensor / Switch “A” Circuit Low
Output voltage of TP sensor (main) signal circuit is lower than 0.20 V.
1 D/C
Lights up
*P0123
Throttle / Pedal Position Sensor / Switch “A” Circuit High
Output voltage of TP sensor (main) signal circuit is higher than 4.81 V.
1 D/C
Lights up
*P0131
O2 Sensor Circuit Low Voltage (Bank1 Sensor1)
Output voltage of HO2S-1 circuit is lower than 0.06 V for 25 sec.
3 D/C
Lights up
*P0132
O2 Sensor Circuit High Voltage (Bank1 Sensor1)
Output voltage of HO2S-1 circuit is higher than 3.50 V for 25 sec.
3 D/C
Lights up
*P0133
O2 Sensor Circuit Slow Response (Bank1 Sensor1)
Signal response time from rich to lean and lean to rich is longer than specified time.
3 D/C
Lights up
*P0134
O2 Sensor Circuit No Activity Detected (Bank1 Sensor1)
Output voltage of HO2S-1 circuit stays between 1.25 and 3.50 V for 25 sec.
3 D/C
Lights up
*P0137
O2 Sensor Circuit Low Voltage (Bank1 Sensor2)
Output voltage of HO2S-2 circuit is lower than 0.06 V for 25 sec. after warming up.
3 D/C
Lights up
*P0138
O2 Sensor Circuit High Voltage (Bank1 Sensor2)
Output voltage of HO2S-2 signal circuit is higher than 3.50 V for 25 sec.
3 D/C
Lights up
*P0140
O2 Sensor Circuit No Activity Detected (Bank1 Sensor2)
Output voltage of HO2S-2 circuit stays between 1.25 to 3.50 V for 25 sec.
3 D/C
Lights up
*P0171
System Too Lean (Bank1)
Fuel trim correction is higher than specified value for specified time under specified vehicle condition.
3 D/C
Lights up
*P0172
System Too Rich (Bank1)
Fuel trim correction is lower than specified value for specified time under specified vehicle condition.
3 D/C
Lights up
*P0192
Fuel Rail Pressure Sensor “A” Circuit Low
Output voltage of fuel pressure sensor signal circuit is lower than 0.02 V for 5 sec.
1 D/C
Lights up
*P0193
Fuel Rail Pressure Sensor “A” Circuit High
Output voltage of fuel pressure sensor signal circuit is higher than 4.98 V for 5 sec.
1 D/C
Lights up
P0197
Engine Oil Temperature Sensor Circuit Low
Output voltage of oil temperature sensor signal circuit is lower than 0.03 V.
3 D/C
Off
P0198
Engine Oil Temperature Sensor Circuit High
Output voltage of oil temperature sensor signal circuit is higher than 4.64 V.
3 D/C
Off
*P0201
Injector Circuit / Open – Cylinder1
Any of the following conditions is met.
Fuel injector No.1 drive circuit is open.
Fuel injector No.1 drive circuit is shorted to ground.
Fuel injector No.1 drive circuit is shorted to power supply.
3 D/C
Lights up
*P0202
Injector Circuit / Open – Cylinder2
Any of the following conditions is met.
Fuel injector No.2 drive circuit is open.
Fuel injector No.2 drive circuit is shorted to ground.
Fuel injector No.2 drive circuit is shorted to power supply.
3 D/C
Lights up
*P0203
Injector Circuit / Open – Cylinder3
Any of the following conditions is met.
Fuel injector No.3 drive circuit is open.
Fuel injector No.3 drive circuit is shorted to ground.
Fuel injector No.3 drive circuit is shorted to power supply.
3 D/C
Lights up
*P0204
Injector Circuit / Open – Cylinder4
Any of the following conditions is met.
Fuel injector No.4 drive circuit is open.
Fuel injector No.4 drive circuit is shorted to ground.
Fuel injector No.4 drive circuit is shorted to power supply.
3 D/C
Lights up
*P0222
Throttle / Pedal Position Sensor / Switch “B” Circuit Low
Output voltage of TP sensor (sub) signal circuit is lower than 0.20 V.
1 D/C
Lights up
*P0223
Throttle / Pedal Position Sensor / Switch “B” Circuit High
Output voltage of TP sensor (sub) signal circuit is higher than 4.81 V.
1 D/C
Lights up
*P0237
Turbocharger / Supercharger Boost Sensor “A” Circuit Low
Output voltage of boost pressure sensor signal circuit is lower than 0.06 V for 5 sec.
1 D/C
Lights up
*P0238
Turbocharger / Supercharger Boost Sensor “A” Circuit High
Output voltage of boost pressure sensor signal circuit is higher than 4.89 V for 5 sec.
1 D/C
Lights up
*P0244
Turbocharger / Supercharger Wastegate Solenoid “A” Range / Performance
WGV-VSV drive circuit is open.
1 D/C
Lights up
*P0245
Turbocharger / Supercharger Wastegate Solenoid “A” Low
WGV-VSV drive circuit is shorted to ground.
1 D/C
Lights up
*P0246
Turbocharger / Supercharger Wastegate Solenoid “A” High
WGV-VSV drive circuit is shorted to power supply.
1 D/C
Lights up
*P0300
Random / Multiple Cylinder Misfire Detected
Any of the following conditions is met.
Misfire, which causes catalyst to overheat during 200 engine revolutions, is detected at 2 or more cylinders. (MIL blinks as long as misfire lasts.)
Misfire, which affects exhaust emission adversely during 1,000 engine revolutions, is detected at 2 or more cylinders.
3 D/C
Lights up
*P0301
Cylinder 1 Misfire Detected
Any of the following conditions is met.
Misfire, which causes catalyst to overheat during 200 engine revolutions, is detected at specific cylinder. (MIL blinks as long as misfire lasts.)
Misfire, which affects exhaust emission adversely during 1,000 engine revolutions, is detected at specific cylinder.
3 D/C
Lights up
*P0302
Cylinder 2 Misfire Detected
3 D/C
Lights up
*P0303
Cylinder 3 Misfire Detected
3 D/C
Lights up
*P0304
Cylinder 4 Misfire Detected
3 D/C
Lights up
*P0327
Knock Sensor1 Circuit Low (Bank1 or Single Sensor)
Output voltage of knock sensor signal circuit is lower than specified value for specified time with engine running.
3 D/C
Lights up
*P0328
Knock Sensor1 Circuit High (Bank1 or Single Sensor)
Output voltage of knock sensor signal circuit is higher than specified value for specified time with engine running.
3 D/C
Lights up
*P0335
Crankshaft Position Sensor “A” Circuit
CKP sensor signal is not inputted while CMP sensor signal is being inputted.
3 D/C
Lights up
*P0336
Crankshaft Position Sensor “A” Circuit Range/Performance
Non-toothed position of sensor plate is out of the specified range.
3 D/C
Lights up
*P0340
Camshaft Position Sensor “A” Circuit (Bank1 or Single Sensor)
Any of the following conditions is met.
CMP sensor signal is not inputted while CKP sensor signal is being inputted.
CMP sensor signal pattern is not equal to the expected pattern.
3 D/C
Lights up
*P0351
Ignition Coil “A” Primary / Secondary Circuit
Ignition coil assembly No.1 and/or its circuit is open with engine running.
3 D/C
Lights up
*P0352
Ignition Coil “B” Primary / Secondary Circuit
Ignition coil assembly No.2 and/or its circuit is open with engine running.
3 D/C
Lights up
*P0353
Ignition Coil “C” Primary / Secondary Circuit
Ignition coil assembly No.3 and/or its circuit is open with engine running.
3 D/C
Lights up
*P0354
Ignition Coil “D” Primary / Secondary Circuit
Ignition coil assembly No.4 and/or its circuit is open with engine running.
3 D/C
Lights up
*P0420
Catalyst System Efficiency Below Threshold (Bank1)
The calculated degradation index is below specified value.
3 D/C
Lights up
*P0443
Evaporative Emission System Purge Control Valve Circuit
EVAP canister purge valve drive circuit is open with engine running.
3 D/C
Lights up
*P0458
Evaporative Emission System Purge Control Valve Circuit Low
EVAP canister purge valve drive circuit is shorted to ground with engine running.
3 D/C
Lights up
*P0459
Evaporative Emission System Purge Control Valve Circuit High
EVAP canister purge valve drive circuit is shorted to power supply with engine running.
3 D/C
Lights up
P0480
Fan1 Control Circuit
Radiator cooling fan relay No.1 drive circuit is shorted to ground or open.
3 D/C
Off
P0481
Fan2 Control Circuit
Radiator cooling fan relay No.2 drive circuit is shorted to ground or open.
3 D/C
Off
P0482
Fan3 Control Circuit
Radiator cooling fan relay No.3 drive circuit is shorted to ground or open.
3 D/C
Off
*P0500
Vehicle Speed Sensor “A”
Any of the following conditions is met.
Vehicle speed is slower than 4 km/h (2 mile/h) for 12 sec. at fuel cut condition.
Vehicle speed is not inputted by CAN communication.
3 D/C
Lights up
P0504
Brake Switch “A”/”B” Correlation
Brake light switch signal does not correlate with brake switch signal.
3 D/C
Off
Brake signal does not change for specified time.
1 D/C
Lights up
P0515
Battery Temperature Sensor Circuit
Any of the following conditions is met.
Output voltage of battery temperature sensor signal circuit is lower than 0.10 V for 5 sec.
Output voltage of battery temperature sensor signal circuit is higher than 4.85 V for 5 sec.
3 D/C
Off
P0530
A/C Refrigerant Pressure Sensor “A” Circuit
Any of the following conditions is met.
Output voltage of A/C refrigerant pressure sensor signal circuit is lower than 0.15 V.
Output voltage of A/C refrigerant pressure sensor signal circuit is higher than 4.93 V.
3 D/C
Off
*P0560
System Voltage
Main power supply voltage is lower than 2.54 V for 10 sec.
3 D/C
Lights up
*P0562
System Voltage Low
Main power supply circuit voltage is between 2.54 V and 9.8 V for 10 sec. with engine running.
3 D/C
Lights up
*P0563
System Voltage High
Main power supply circuit voltage is higher than 16.5 V for 10 sec. with engine running.
3 D/C
Lights up
P0575
Cruise Control Input Circuit
Refer to “DTC Table”.
Cruise control model:
Adaptive cruise control model:
1 D/C
Off
P0602
Control Module Programming Error
ECM internal failure (data programming error).
1 D/C
Off
*P0606
Control Module Processor
ECM internal processor failure
3 D/C
Lights up
*P0607
Control Module Performance
Internal failure in ECM is detected.
1 D/C
Lights up
P0645
A/C Clutch Relay Control Circuit
A/C compressor relay drive circuit is open.
3 D/C
Off
P0646
A/C Clutch Relay Control Circuit Low
A/C compressor relay drive circuit is shorted to ground.
3 D/C
Off
P0647
A/C Clutch Relay Control Circuit High
A/C compressor relay drive circuit is shorted to power supply.
3 D/C
Off
P0649
Speed Control Lamp Control Circuit
Refer to
DTC Table:Cruise Control
.
1 D/C
Off
P0692
Fan1 Control Circuit High
Radiator cooling fan relay No.1 drive circuit is shorted to power supply.
3 D/C
Off
P0694
Fan2 Control Circuit High
Radiator cooling fan relay No.2 drive circuit is shorted to power supply.
3 D/C
Off
P0696
Fan3 Control Circuit High
Radiator cooling fan relay No.3 drive circuit is shorted to power supply.
3 D/C
Off
P081D
Neutral Input Circuit
Refer to
DTC Table:Adaptive Cruise Control
.
1 D/C
Off
P0A5A
Generator Current Sensor Circuit Range / Performance
Any of the following conditions is met.
Output voltage of electric load current sensor signal circuit is more than 4.80 V for 5 sec.
Output voltage of electric load current sensor signal circuit is lower than 0.20 V for 5 sec.
Output voltage of electric load current sensor signal circuit fluctuates less than specified value for 5 sec.
3 D/C
Off
P1610
Immobilizer ID and/or Password Not Registered
Refer to
DTC Table
.
1 D/C
Off
P1611
Password Not Matched
1 D/C
Off
P1622
EEPROM Reading / Writing Error
1 D/C
Off
P1642
Immobilizer Communication Line Error
1 D/C
Off
P1644
Immobilizer ID Mismatched
1 D/C
Off
P1645
ID Code Communication Error
1 D/C
Off
P1646
ID Code Incorrectness
1 D/C
Off
*P2088
“A” Camshaft Position Actuator Control Circuit Low (Bank1)
OCV drive circuit is shorted to ground.
3 D/C
Lights up
*P2089
“A” Camshaft Position Actuator Control Circuit High (Bank1)
OCV drive circuit is shorted to power supply.
3 D/C
Lights up
*P2100
Throttle Actuator “A” Control Motor Circuit / Open
Throttle actuator and/or its circuit malfunction (open, short to power supply or short to ground) is detected.
1 D/C
Lights up
*P2101
Throttle Actuator “A” Control Motor Circuit Range / Performance
Any of the following conditions is met.
Difference between measured throttle valve position and targeted throttle valve position is more than specified value.
Duty ratio of throttle actuator signal is out of specified range for specified time.
1 D/C
Lights up
*P2119
Throttle Actuator Control Throttle Body Range / Performance
Any of the following conditions is met.
Time taken by throttle valve to return from partially open position to mechanical default position is more than specified time during return spring check process after setting ignition “OFF”.
Measured default throttle position is out of specified range.
1 D/C
Lights up
*P2122
Throttle / Pedal Position Sensor / Switch “D” Circuit Low
Output voltage of APP sensor (main) signal circuit is lower than 0.40 V.
1 D/C
Lights up
*P2123
Throttle / Pedal Position Sensor / Switch “D” Circuit High
Output voltage of APP sensor (main) signal circuit is higher than 4.80 V.
1 D/C
Lights up
*P2127
Throttle / Pedal Position Sensor / Switch “E” Circuit Low
Output voltage of APP sensor (sub) signal circuit is lower than 0.20 V.
1 D/C
Lights up
*P2128
Throttle / Pedal Position Sensor / Switch “E” Circuit High
Output voltage of APP sensor (sub) signal circuit is higher than 2.40 V.
1 D/C
Lights up
*P2135
Throttle / Pedal Position Sensor / Switch “A” / “B” Voltage Correlation
Difference between TP sensor (main) signal voltage and TP sensor (sub) signal voltage is higher than specified value.
1 D/C
Lights up
*P2138
Throttle / Pedal Position Sensor / Switch “D” / “E” Voltage Correlation
Difference between half of APP (main) sensor signal and APP (sub) sensor signal is more than specified value.
1 D/C
Lights up
*P2176
Throttle Actuator Control System – Idle Position Not Learned
Any of the following conditions is met.
TP sensor (main) or TP sensor (sub) signal voltage at default position is out of specified range for specified time.
Electric throttle control system calibration is not completed.
1 D/C
Lights up
*P2195
O2 Sensor Signal Biased / Stuck Lean (Bank1 Sensor1)
Output voltage of HO2S-1 circuit is lower than 0.4 V for 25 sec. even if output voltage of HO2S-2 circuit is higher than 0.6 V.
3 D/C
Lights up
*P2196
O2 Sensor Signal Biased / Stuck Rich (Bank1 Sensor1)
Output voltage of HO2S-1 circuit is higher than 0.55 V for 25 sec. even if output voltage of HO2S-2 circuit is lower than 0.25 V.
3 D/C
Lights up
P2226
Barometric Pressure Sensor “A” Circuit
Barometric pressure sensor and/or its circuit malfunction (open, short to power supply or short to ground) is detected.
1 D/C
Lights up
*P2227
Barometric Pressure Circuit Range / Performance
Any of the following conditions is met.
Barometric pressure sensor signal is out of specified range.
Difference between actual and expected ambient pressure is more than the specified value and the fluctuation of ambient pressure is more than the specified value.
1 D/C
Lights up
*P2263
Turbocharger / Supercharger Boost System Performance
Any of the following conditions is met.
Measured boost pressure in intercooler outlet pipe is far above targeted boost pressure for specified time.
Measured boost pressure in intercooler outlet pipe is far below targeted boost pressure for specified time.
1 D/C
Lights up
*P2271
O2 Sensor Signal Biased / Stuck Rich (Bank1 Sensor2)
Output voltage of HO2S-2 signal circuit is higher than 0.4 V for specified time after warming up even when vehicle is in fuel cut driving condition.
3 D/C
Lights up
*P2300
Ignition Coil “A” Primary Control Circuit Low
Ignition coil assembly No.1 drive circuit is shorted to ground with engine running.
3 D/C
Lights up
*P2301
Ignition Coil “A” Primary Control Circuit High
Ignition coil assembly No.1 drive circuit is shorted to power supply with engine running.
3 D/C
Lights up
*P2303
Ignition Coil “B” Primary Control Circuit Low
Ignition coil assembly No.2 drive circuit is shorted to ground with engine running.
3 D/C
Lights up
*P2304
Ignition Coil “B” Primary Control Circuit High
Ignition coil assembly No.2 drive circuit is shorted to power supply with engine running.
3 D/C
Lights up
*P2306
Ignition Coil “C” Primary Control Circuit Low
Ignition coil assembly No.3 drive circuit is shorted to ground with engine running.
3 D/C
Lights up
*P2307
Ignition Coil “C” Primary Control Circuit High
Ignition coil assembly No.3 drive circuit is shorted to power supply with engine running.
3 D/C
Lights up
*P2309
Ignition Coil “D” Primary Control Circuit Low
Ignition coil assembly No.4 drive circuit is shorted to ground with engine running.
3 D/C
Lights up
*P2310
Ignition Coil “D” Primary Control Circuit High
Ignition coil assembly No.4 drive circuit is shorted to power supply with engine running.
3 D/C
Lights up
U0073
Control Module Communication Bus Off
Refer to
CAN DTC (Lost Communication and Communication Bus Off) Table:CAN (K14C Model)
.
1 D/C
Off
*U0101
Lost Communication With TCM
1 D/C
Lights up
*U0121
Lost Communication With ABS / ESP ® Control Module
1 D/C
Lights up
U0131
Lost Communication With Power Steering Control Module
1 D/C
Off
U0140
Lost Communication With Body Control Module
1 D/C
Off
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
1 D/C
Off
U108A
Lost Communication With RBS Control Module
1 D/C
Off
U1093
Lost Communication With DSBS Control Module
1 D/C
Off
U2001
LIN Lost Communication With Generator
Received data from generator via LIN is faulty.
1 D/C
Off
U2021
LIN Invalid Data from ECM to Generator
Transmitted data from ECM to generator via LIN is faulty.
1 D/C
Off

---

## AENLSB0A1114006 - Fail-Safe Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114006.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C
Outgoing references: none

Content:
Fail-Safe Table
When any of the following DTCs is detected, ECM control enters the fail-safe mode as long as the failure condition associated with the DTC continues. The fail-safe mode is canceled when ECM detects normal condition.
DTC
DTC name
Fail-safe operation
P0010
“A” Camshaft Position Actuator Circuit / Open (Bank1)
ECM stops VVT control.
P0011
“A” Camshaft Position Timing Over Advanced or System Performance (Bank1)
P0016
Crankshaft Position – Camshaft Position Correlation (Bank1 SensorA)
P0030
HO2S Heater Control Circuit (Bank1 Sensor1)
ECM stops A/F feedback (closed loop) control.
P0031
HO2S Heater Control Circuit Low (Bank1 Sensor1)
P0032
HO2S Heater Control Circuit High (Bank1 Sensor1)
P0033
Turbocharger / Supercharger Bypass Valve Control Circuit
ECM stops boost control.
P0034
Turbocharger / Supercharger Bypass Valve Control Circuit Low
P0035
Turbocharger / Supercharger Bypass Valve “A” Control Circuit High
P0036
HO2S Heater Control Circuit (Bank1 Sensor2)
—
P0037
HO2S Heater Control Circuit Low (Bank1 Sensor2)
—
P0038
HO2S Heater Control Circuit High (Bank1 Sensor2)
—
P0039
Turbocharger / Supercharger Bypass Valve “A” Control Circuit Range / Performance
ECM stops boost control.
P0087
Fuel Rail / System Pressure – Too Low
ECM limits engine speed.
ECM limits engine torque.
ECM limits fuel rail pressure.
P0088
Fuel Rail / System Pressure – Too High
ECM limits engine speed.
P0090
Fuel Pressure Regulator1 Control Circuit / Open
ECM limits engine speed.
ECM limits engine torque.
ECM stops fuel pressure control.
P0091
Fuel Pressure Regulator1 Control Circuit Low
P0092
Fuel Pressure Regulator1 Control Circuit High
P0097
Intake Air Temperature Sensor 2 Circuit Low (Bank1)
ECM controls actuators with modeled temperature.
ECM stops boost control.
P0098
Intake Air Temperature Sensor 2 Circuit High (Bank1)
P0102
Mass or Volume Air Flow “A” Circuit Low
ECM calculates MAF based on TP sensor signal.
ECM stops boost control.
P0103
Mass or Volume Air Flow “A” Circuit High
P0107
Manifold Absolute Pressure / Barometric Pressure Circuit Low
ECM stops boost control.
P0108
Manifold Absolute Pressure / Barometric Pressure Circuit High
P0112
Intake Air Temperature Sensor1 Circuit Low (Bank1)
ECM controls actuators assuming that intake air temperature is 20 °C (68 °F).
P0113
Intake Air Temperature Sensor1 Circuit High (Bank1)
P0116
Engine Coolant Temperature Sensor1 Circuit Range / Performance
ECM calculates ECT value from engine load.
ECM stops boost control.
P0117
Engine Coolant Temperature Sensor1 Circuit Low
P0118
Engine Coolant Temperature Sensor1 Circuit High
P0122
Throttle / Pedal Position Sensor / Switch “A” Circuit Low
ECM performs fuel cut at specified engine speed.
ECM fixes throttle valve at default position.
P0123
Throttle / Pedal Position Sensor / Switch “A” Circuit High
P0131
O2 Sensor Circuit Low Voltage (Bank1 Sensor1)
ECM stops A/F feedback (closed loop) control.
P0132
O2 Sensor Circuit High Voltage (Bank1 Sensor1)
P0133
O2 Sensor Circuit Slow Response (Bank1 Sensor1)
—
P0134
O2 Sensor Circuit No Activity Detected (Bank1 Sensor1)
—
P0137
O2 Sensor Circuit Low Voltage (Bank1 Sensor2)
—
P0138
O2 Sensor Circuit High Voltage (Bank1 Sensor2)
—
P0140
O2 Sensor Circuit No Activity Detected (Bank1 Sensor2)
—
P0171
System Too Lean (Bank1)
—
P0172
System Too Rich (Bank1)
—
P0192
Fuel Rail Pressure Sensor “A” Circuit Low
ECM stops fuel pressure control.
ECM stops boost control.
P0193
Fuel Rail Pressure Sensor “A” Circuit High
P0197
Engine Oil Temperature Sensor Circuit Low
—
P0198
Engine Oil Temperature Sensor Circuit High
—
P0201
Injector Circuit / Open – Cylinder1
ECM stops fuel injector No.1 control.
ECM stops A/F feedback (closed loop) control.
P0202
Injector Circuit / Open – Cylinder2
ECM stops fuel injector No.2 control.
ECM stops A/F feedback (closed loop) control.
P0203
Injector Circuit / Open – Cylinder3
ECM stops fuel injector No.3 control.
ECM stops A/F feedback (closed loop) control.
P0204
Injector Circuit / Open – Cylinder4
ECM stops fuel injector No.4 control.
ECM stops A/F feedback (closed loop) control.
P0222
Throttle / Pedal Position Sensor / Switch “B” Circuit Low
ECM performs fuel cut at specified engine speed.
ECM fixes throttle valve at default position.
P0223
Throttle / Pedal Position Sensor / Switch “B” Circuit High
P0237
Turbocharger / Supercharger Boost Sensor “A” Circuit Low
ECM stops boost control.
ECM limits throttle valve to specified range.
P0238
Turbocharger / Supercharger Boost Sensor “A” Circuit High
P0244
Turbocharger / Supercharger Wastegate Solenoid “A” Range / Performance
ECM stops boost control.
ECM limits throttle valve to specified range.
P0245
Turbocharger / Supercharger Wastegate Solenoid “A” Low
P0246
Turbocharger / Supercharger Wastegate Solenoid “A” High
P0300
Random / Multiple Cylinder Misfire Detected
ECM stops fuel injector control of faulty cylinder for catalyst damaging levels of misfire.
P0301
Cylinder 1 Misfire Detected
ECM stops fuel injector No.1 control for catalyst damaging levels of misfire.
P0302
Cylinder 2 Misfire Detected
ECM stops fuel injector No.2 control for catalyst damaging levels of misfire.
P0303
Cylinder 3 Misfire Detected
ECM stops fuel injector No.3 control for catalyst damaging levels of misfire.
P0304
Cylinder 4 Misfire Detected
ECM stops fuel injector No.4 control for catalyst damaging levels of misfire.
P0327
Knock Sensor1 Circuit Low (Bank1 or Single Sensor)
ECM retards ignition timing.
P0328
Knock Sensor1 Circuit High (Bank1 or Single Sensor)
P0335
Crankshaft Position Sensor “A” Circuit
ECM calculates CKP based on CMP sensor signal.
P0336
Crankshaft Position Sensor “A” Circuit Range/Performance
P0340
Camshaft Position Sensor “A” Circuit (Bank1 or Single Sensor)
ECM stops VVT actuator control.
P0351
Ignition Coil “A” Primary / Secondary Circuit
—
P0352
Ignition Coil “B” Primary / Secondary Circuit
—
P0353
Ignition Coil “C” Primary / Secondary Circuit
—
P0354
Ignition Coil “D” Primary / Secondary Circuit
—
P0420
Catalyst System Efficiency Below Threshold (Bank1)
—
P0443
Evaporative Emission System Purge Control Valve Circuit
—
P0458
Evaporative Emission System Purge Control Valve Circuit Low
—
P0459
Evaporative Emission System Purge Control Valve Circuit High
—
P0480
Fan1 Control Circuit
—
P0481
Fan2 Control Circuit
—
P0482
Fan3 Control Circuit
—
P0500
Vehicle Speed Sensor “A”
ECM controls actuators assuming that vehicle speed is 0 km/h (0 mile/h).
P0504
Brake Switch “A” / “B” Correlation
For cruise control model, ECM stops cruise control.
P0515
Battery Temperature Sensor Circuit
ECM stops generator control.
P0530
A/C Refrigerant Pressure Sensor “A” Circuit
ECM stops A/C compressor relay control.
P0560
System Voltage
Throttle movement and fuel injection are limited.
P0562
System Voltage Low
—
P0563
System Voltage High
—
P0575
Cruise Control Input Circuit
For cruise control model, ECM stops cruise control.
P0575
Cruise Control Input Circuit
For adaptive cruise control model, ECM stops cruise control.
P0602
Control Module Programming Error
—
P0606
Control Module Processor
ECM retards ignition timing.
P0607
Control Module Performance
ECM selects the following fail-safes depending on defective part.
Fail-safe A:
None
Fail-safe B:
ECM fixes throttle valve at default position.
ECM performs fuel cut at specified engine speed.
Fail-safe C:
ECM limits engine torque.
P0645
A/C Clutch Relay Control Circuit
—
P0646
A/C Clutch Relay Control Circuit Low
—
P0647
A/C Clutch Relay Control Circuit High
—
P0649
Speed Control Lamp Control Circuit
For cruise control model, ECM stops cruise control.
P0692
Fan1 Control Circuit High
—
P0694
Fan2 Control Circuit High
—
P0696
Fan3 Control Circuit High
—
P081D
Neutral Input Circuit
For adaptive cruise control model, ECM stops adaptive cruise control.
P0A5A
Generator Current Sensor Circuit Range / Performance
ECM stops generator control.
P2088
“A” Camshaft Position Actuator Control Circuit Low (Bank1)
ECM stops VVT actuator control.
P2089
“A” Camshaft Position Actuator Control Circuit High (Bank1)
P2100
Throttle Actuator Control Motor Circuit / Open
ECM performs fuel cut at specified engine speed.
P2101
Throttle Actuator Control Motor Circuit Range / Performance
P2119
Throttle Actuator Control Throttle Body Range / Performance
P2122
Throttle / Pedal Position Sensor / Switch “D” Circuit Low
ECM limits engine torque.
P2123
Throttle / Pedal Position Sensor / Switch “D” Circuit High
P2127
Throttle / Pedal Position Sensor / Switch “E” Circuit Low
P2128
Throttle / Pedal Position Sensor / Switch “E” Circuit High
P2135
Throttle / Pedal Position Sensor / Switch “A” / “B” Voltage Correlation
ECM performs fuel cut at specified engine speed.
ECM fixes throttle valve at default position.
P2138
Throttle / Pedal Position Sensor / Switch “D” / “E” Voltage Correlation
ECM limits engine torque.
*P2176
Throttle Actuator Control System – Idle Position Not Learned
ECM performs fuel cut at specified engine speed.
P2195
O2 Sensor Signal Biased / Stuck Lean (Bank1 Sensor1)
ECM stops A/F feedback (closed loop) control.
P2196
O2 Sensor Signal Biased / Stuck Rich (Bank1 Sensor1)
P2226
Barometric Pressure Sensor “A” Circuit
ECM controls actuators assuming that barometric pressure is 101 kPa (760 mmHg).
ECM stops boost control.
P2227
Barometric Pressure Circuit Range / Performance
P2263
Turbocharger / Supercharger Boost System Performance
ECM stops boost control.
ECM limits throttle valve to specified range.
P2271
O2 Sensor Signal Biased / Stuck Rich (Bank1 Sensor2)
—
P2300
Ignition Coil “A” Primary Control Circuit Low
—
P2301
Ignition Coil “A” Primary Control Circuit High
—
P2303
Ignition Coil “B” Primary Control Circuit Low
—
P2304
Ignition Coil “B” Primary Control Circuit High
—
P2306
Ignition Coil “C” Primary Control Circuit Low
—
P2307
Ignition Coil “C” Primary Control Circuit High
—
P2309
Ignition Coil “D” Primary Control Circuit Low
—
P2310
Ignition Coil “D” Primary Control Circuit High
—
U0073
Control Module Communication Bus Off
—
U0101
Lost Communication With TCM
—
U0121
Lost Communication With ABS / ESP ® Control Module
ECM disables torque request from ESP ® control module.
For cruise control model, ECM stops cruise control.
U0131
Lost Communication With Power Steering Control Module
—
U0140
Lost Communication With Body Control Module
—
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
—
U108A
Lost Communication With RBS Control Module
—
U1093
Lost Communication With DSBS Control Module
—
U2001
LIN Lost Communication With Generator
ECM stops generator control.
U2021
LIN Invalid Data from ECM to Generator

---

## AENLSB0A1114007 - Scan Tool Data
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114007.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C
Outgoing references:
- AENLSB0A1316037 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1316037.xml | Electric Load Current Sensor On-Vehicle Inspection:K14C

Content:
Scan Tool Data
ECM
If communication between SUZUKI scan tool and ECM is not possible, perform the following checks:
Check communication condition between PC and VCI using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
Check central gateway control module power supply circuit and ground circuit.
Check ECM power circuit and ground circuit.
With the generic scan tool, only data with asterisk (*) in the following table can be read.
When checking data with engine running at idle or racing, place gear shift lever in neutral position (M/T model) or select P range (A/T model) and apply parking brake lever fully. Also, if nothing or “no load” is indicated, turn off A/C, all electric loads, P/S and all the other switches.
Scan tool data
Vehicle condition
Normal condition / Reference value
Engine Oil Temperature
Engine: Idle speed after warming up
Approx. 70 to 110 °C (158 to 230 °F)
*
Fuel System
Open loop control before satisfaction of closed loop control conditions (ECT >10 °C, IAT, TP, HO2S/system = OK)
OL (open loop)
Open loop control due to driving conditions (Power enrichment, etc.)
OL-Drive (open loop)
Open loop control due to system fault detected
OL-Fault (open loop)
Closed loop control using HO2S-1 as feedback sensors for fuel control
CL (closed loop)
Closed loop control due to system fault detected
CL-Fault (closed loop)
When engine stops with ignition “ON”
—
*
Short Term Fuel Trim
Engine: Idle speed after warming up
Approx. –20 to 20%
*
Long Term Fuel Trim
Engine: Idle speed after warming up
Approx. –20 to 20%
Total Fuel Trim
Engine: Idle speed after warming up
Approx. –30 to 30%
Inj Pulse Width
Engine: Idle speed with no load after warming up
Approx. 0.5 to 4.0 msec.
*
Ignition Advance
Engine: Idle speed with no load after warming up
–5 to 15° BTDC
*
Fuel Rail Pressure
Engine: Idle speed after warming up
Approx. 5,500 to 10,500 kPa
Target Fuel Rail Pressure
Engine: Idle speed after warming up
Approx. 5,500 to 10,500 kPa
*
Calculated Load
Engine: Idle speed with no load after warming up
Approx. 5 to 40%
*
Engine Speed
Engine: Idle speed after warming up
Radiator cooling fan: Stopped
All electrical equipment: OFF
M/T model:
Gear shift lever: Neutral position
A/T model:
Select lever: P range
M/T model: 650 to 750 rpm
A/T model: 750 to 850 rpm
Desired Idle
Engine: Idle speed after warming up
Radiator cooling fan: Stopped
All electrical equipment: OFF
M/T model:
Gear shift lever: Neutral position
A/T model:
Select lever: P range
M/T model: 650 to 750 rpm
A/T model: 750 to 850 rpm
*
MAF
Engine: Idle speed with no load after warming up
0.5 to 3.0 g/sec
*
Vehicle Speed
Vehicle running
Almost the same as speedometer reading
*
MAP
Engine: Idle speed after warming up
Approx. 20 to 55 kPa
*
ECT
Engine: Idle speed after warming up
Approx. 80 to 105 °C (176 – 221 °F)
*
Intake Air Temperature 2
Engine: Idle speed after warming up
–5 °C (–9 °F) + environmental temperature to 40 °C (72 °F) + environmental temperature
*
Barometric Pres
—
Barometric pressure is displayed.
*
EVAP Canist Prg Duty
Engine: Idle speed after warming up
0 to 30%
Waste Gate Valve - VSV control duty
Turbocharger: Operating
0 to 100%
VVT Gap
Engine: Idle speed after warming up
–1.0 to 1.0 °CA
IAC Throttle Opening
Engine: Idle speed with no load after warming up
Approx. 1 to 40%
Engine: Idle speed after warming up
A/C compressor: Operating
Blower speed selector: Max position
Approx. 10 to 70%
TP Sensor 1 Volt
Ignition: “ON”
Accelerator pedal: Released
0.6 to 1.0 V
Ignition: “ON”
Accelerator pedal: Fully depressed
4.1 to 4.5 V
TP Sensor 2 Volt
Ignition: “ON”
Accelerator pedal: Released
4.0 to 4.4 V
Ignition: “ON”
Accelerator pedal: Fully depressed
0.5 to 0.9 V
APP Sensor 1 Voltage
Ignition: “ON”
Accelerator pedal: Released
0.6 to 0.9 V
Ignition: “ON”
Accelerator pedal: Fully depressed
3.7 to 4.4 V
APP Sensor 2 Voltage
Ignition: “ON”
Accelerator pedal: Released
0.3 to 0.5 V
Ignition: “ON”
Accelerator pedal: Fully depressed
1.8 to 2.2 V
*
Accelerator Position
Ignition: “ON”
Accelerator pedal: Released
0 to 2%
Ignition: “ON”
Accelerator pedal: Fully depressed
90 to 100%
*
Throttle Position
Ignition: “ON”
Accelerator pedal: Released
0 to 10%
Ignition: “ON”
Accelerator pedal: Fully depressed
90 to 100%
*
Target Throttle Posi
Ignition: “ON”
Accelerator pedal: Released
0 to 2%
Ignition: “ON”
Accelerator pedal: Fully depressed
90 to 100%
*
O2S B1 S1
Engine: Idle speed after warming up
Approx. 0 to 1.0 V
*
O2S B1 S2
Engine: 2,000 rpm for 3 min. or more after warming up
Approx. 0 to 1.0 V
*
Battery Voltage
Engine: Idle speed
Approx. 10.7 to 16.0 V
Fuel Tank Level
Ignition: “ON”
0 to 100%
A/C Pressure
Engine: Idle speed
A/C compressor: Operating
Blower speed selector: Max position
Ambient temperature: 30 °C (86 °F)
1,420 to 1,870 kPa
Generator Field Duty
Engine: Idle speed after warming up
Approx. 20 to 100%
Battery Current
Refer to
Electric Load Current Sensor On-Vehicle Inspection:K14C
.
Battery Temperature
—
Battery temperature is displayed.
Generator Reg Volt (Com)
Engine: Idle speed
10.7 to 16.0 V
Radiator Fan
Radiator cooling fan: Off
Off
Radiator cooling fan: Low speed
Low
Radiator cooling fan: Middle speed
Mid
Radiator cooling fan: High speed
High
A/C Comp Relay
Engine: Running
A/C compressor: Operating
Blower speed selector: 1st or higher speed position
ON
Other than above condition
OFF
Fuel Pump
Engine: Running
ON
Other than above condition
OFF
Air Bypass Valve (Com)
ABV-VSV: Operating
ON
Other than above condition
OFF
Starter Switch
Ignition: “START” (engine cranking)
ON
Other than above condition
OFF
A/C Switch
A/C switch: ON
ON
Other than above condition
OFF
Blower Fan
Manual A/C model: 2nd or higher speed position
Auto A/C model: 4th or higher speed position
ON
Manual A/C model: Other than above condition
Auto A/C model: Other than above condition
OFF
Brake Switch
Brake pedal: Depressed
ON
Brake pedal: Released
OFF
Electric Load
Headlight: ON
ON
Headlight: OFF
OFF
PNP Signal
A/T model
Engine: Running
Shift select lever: Other than P or N position
D
A/T model
Engine: Running
Shift select lever: P or N position
P/N
Clutch Switch
M/T model
Clutch pedal: Depressed fully
Declutch
M/T model
Clutch pedal: Released
Clutched
Cruise RES/ACC Switch
“RES / +” switch: Pushed
ON
“RES / +” switch: Released
OFF
Cruise SET/COAST Switch
“SET / –” switch: Pushed
ON
“SET / –” switch: Released
OFF
Cruise CANCEL Switch
“CANCEL” switch: Pushed
ON
“CANCEL” switch: Released
OFF
Cruise ON/OFF Switch
“Cruise” switch: Pushed
Pushed
“Cruise” switch: Released
Released
Distance Setting Switch
Distance switch: Pushed
ON
Distance switch: Released
OFF
Speed Limiter Switch
“LIMIT” switch: Pushed
ON
“LIMIT” switch: Released
OFF
Speed Limiter
Speed limiter system is functioning
Active
Other than above condition
Inactive
Speed Limiter Main SW
Speed limiter system: ON
ON
Speed limiter system: OFF
OFF
Fuel Cut
Engine: Idle speed after warming up
OFF
Accelerator pedal: Released
Engine condition: 2,000 rpm or more after warming up
ON
Closed Throttle Pos
Ignition: “ON”
Accelerator pedal: Released
ON
Ignition: “ON”
Accelerator pedal: Fully depressed
OFF
O2S B1 S1 Act
Engine: Idle speed after warming up
Active
O2S B1 S2 Act
Engine: Idle speed after warming up
Active
Target Valve Closing Position of High Pressure Fuel Pump
Engine: Idle speed after warming up
Approx. 5 to 25 °CA
Intake Air Temperature 1
Engine: Idle speed after warming up
–5 °C (–9 °F) + environmental temperature to 40 °C (72 °F) + environmental temperature
Boost Pressure
Engine: Idle speed after warming up
Approx. 101 kPa
Scan Tool Data Definitions
Engine Oil Temperature (°C, °F)
This parameter indicates the oil temperature detected by oil temperature sensor.
Fuel System (Fuel system status)
This parameter indicates the state of A/F feedback control by ECM.
Open loop
Fuel injection time (volume) in the various engine states is determined beforehand.
Therefore, information from HO2S-1 is not reflected in fuel injection control.
Closed loop
Information from HO2S-1 is reflected in fuel injection control.
When ECM judges that actual air-fuel ratio is higher than stoichiometric air-fuel ratio, ECM controls to increase the volume of fuel. On the contrary, when the actual air-fuel ratio is lower than stoichiometric air-fuel ratio, ECM controls to decrease the volume of fuel.
Short Term Fuel Trim (%)
This parameter indicates short term fuel trim value (short term air/fuel mixture correction factor) and changes the value corresponding to driving conditions. 0 (zero) indicates no correction, a value greater than 0 indicates enrichment correction, and a value less than 0 indicates enleanment correction.
Long Term Fuel Trim (%)
This parameter indicates a median value of short term trim learned in A/F feedback control (closed loop). This median value is used by ECM to correct fuel injection volume appropriately in open loop control avoiding interference caused by individual difference and aging. 0 (zero) indicates no correction, a value greater than 0 indicates enrichment correction, and a value less than 0 indicates enleanment correction.
Total Fuel Trim (%)
This parameter indicates the comprehensive fuel trim computed based on short term and long term fuel trim.
Inj Pulse Width (Fuel injection pulse width, msec)
This parameter indicates the injector drive pulse width (open time) during the injector valve stays open commanded by ECM.
Ignition Advance (Ignition timing advance for No.1 cylinder, ° BTDC)
This parameter indicates the ignition timing of No.1 cylinder commanded by ECM.
Fuel Rail Pressure (kPa, mmHg, inHg, psi, inH2O)
This parameter indicates fuel rail pressure measured by fuel pressure sensor.
Target Fuel Rail Pressure (kPa, mmHg, inHg, psi, inH2O)
This parameter indicates target fuel rail pressure calculated by ECM.
Calculated Load (Calculated load value, %)
This parameter indicates the engine load as a percentage calculated by ECM based on input signals of various sensors.
Engine Speed (rpm)
This parameter indicates the engine speed calculated by ECM based on input signal of CKP sensor.
Desired Idle (Desired idle speed, rpm)
This parameter indicates the target engine idle speed requested by ECM.
When performing “Fixed Spark” in “Active Test”, actual engine idle speed may not follow the target engine idle speed.
MAF (Mass air flow rate, g/sec, lb/min.)
This parameter indicates the total mass of air entering intake manifold measured by MAF sensor.
Vehicle Speed (km/h, MPH)
This parameter indicates the vehicle speed based on signals from wheel speed sensors sent from ESP ® control module via CAN communication.
MAP (Manifold absolute pressure, kPa, mmHg, inHg, psi, inH2O)
This parameter indicates the calculated MAP based on input voltage of MAP sensor.
ECT (Engine coolant temperature, °C, °F)
This parameter indicates the calculated ECT based on input voltage of ECT sensor.
Intake Air Temperature 2 (°C, °F)
This parameter indicates the calculated IAT based on input voltage of intake air temperature sensor-2.
Barometric Pres (Barometric pressure, kPa, mmHg, inHg, psi, inH2O)
This parameter indicates the barometric air pressure measurement and is used for altitude correction of the fuel injection rate.
Evap Canist Prg Duty (Evap canister purge flow duty, %)
This parameter indicates valve ON (valve open) time rate within a certain set cycle of EVAP canister purge valve.
Waste Gate Valve - VSV control duty (%)
This parameter indicates valve ON (VSV open) time rate within a certain set cycle of WGV-VSV which controls the WGV opening.
VVT Gap (Variable valve timing difference between target and actual position, °)
This parameter indicates difference between target camshaft position (intake side) and actual camshaft position (intake side).
IAC Throttle Opening (Idle air throttle valve opening, %)
This parameter indicates opening% of throttle valve on the assumption that the maximum opening of idle air control is 100%.
TP Sensor 1 Volt (TP sensor (main) output voltage, V)
This parameter indicates the input voltage of TP sensor (main) incorporated in throttle body.
TP Sensor 2 Volt (TP sensor (sub) output voltage, V)
This parameter indicates the input voltage of TP sensor (sub) incorporated in throttle body.
APP Sensor 1 Voltage (APP sensor (main) output voltage, V)
This parameter indicates the input voltage of APP sensor (main) incorporated in accelerator pedal.
APP Sensor 2 Voltage (APP sensor (sub) output voltage, V)
This parameter indicates the input voltage of APP sensor (sub) incorporated in accelerator pedal.
Accelerator Position (Absolute accelerator pedal position, %)
This parameter indicates the depressing amount of accelerator pedal in percentage calculated by ECM based on the input signals of APP sensor (main and sub).
Throttle Position (Absolute throttle position, %)
This parameter indicates the calculated throttle valve opening in percentage based on input signal from TP sensor.
Target Throttle Posi (Target throttle valve position, %)
This parameter indicates the target throttle position requested by ECM.
O2S B1 S1 (HO2S-1, V)
This parameter indicates output voltage of HO2S-1 installed on exhaust manifold (pre-TWC).
O2S B1 S2 (HO2S-2, V)
This parameter indicates output voltage of HO2S-2 installed on exhaust manifold (post-TWC). It is used to detect catalyst deterioration.
Battery Voltage (V)
This parameter indicates battery positive voltage inputted from main relay to ECM.
Fuel Tank Level (%)
This parameter indicates the information of fuel level inputted via combination meter. The fuel level data is provided as a percentage from 0 to 100%.
A/C Pressure (A/C refrigerant absolute pressure, kPa)
This parameter indicates A/C refrigerant pressure calculated by ECM based on A/C refrigerant pressure sensor voltage.
Generator Field Duty (%)
This parameter indicates operating rate (state of output) of the generator by field coil duty ratio.
Battery Current (A)
This parameter indicates electric load value (current consumption) detected by electric load current sensor.
Battery Temperature (°C, °F)
This parameter indicates battery temperature based on battery temperature sensor.
Generator Reg Volt (Com) (Generator Regulated Voltage (Com) (V))
This parameter indicates commanded generator regulated voltage.
Radiator Fan (Radiator cooling fan control relay, Low/Mid/High/Off)
This parameter indicates the state that ECM operates radiator cooling fan relays.
A/C Comp Relay (A/C compressor relay, ON/OFF)
This parameter indicates the state of the A/C compressor relay controlled by ECM.
Fuel Pump (ON/OFF)
This parameter indicates the state of fuel pump relay controlled by ECM.
Air Bypass Valve (Com) (ON/OFF)
This parameter indicates the state of air bypass solenoid valve controlled by ECM.
Starter Switch (ON/OFF)
This parameter indicates state of starting motor control relay output.
A/C Switch (ON/OFF)
This parameter indicates the state of A/C operation controlled by ECM based on request from BCM.
Blower Fan (ON/OFF)
This parameter indicates the signal state of the blower fan motor inputted into ECM.
Brake Switch (ON/OFF)
This parameter indicates operating state of the brake switch.
Electric Load (ON/OFF)
This parameter indicates the state of electric load signal inputted into ECM.
PNP Signal (P/N or D range) (A/T model)
This parameter indicates shift position informed from TCM via CAN communication.
Clutch Switch (CPP No.2 switch, Declutch/Clutched) (M/T model)
This parameter indicates operating state of CPP No.2 switch.
Cruise RES/ACC Switch (“RES/+” switch, OFF/ON)
This parameter indicates the state of cruise “RES/+” switch.
Cruise SET/COAST Switch (“SET/–” switch, OFF/ON)
This parameter indicates the state of cruise SET/–” switch.
Cruise CANCEL Switch (“CANCEL” switch, OFF/ON)
This parameter indicates the state of cruise “CANCEL” switch.
Cruise ON/OFF Switch (“CRUISE” (main) switch, Released/Pushed)
This parameter indicates the state of “CRUISE” (main) switch.
Distance Setting Switch (ON/OFF)
This parameter indicates the state of distance switch.
Speed Limiter Switch (“LIMIT” switch, ON/OFF)
This parameter indicates the state of “LIMIT” switch.
Speed Limiter (Inactive/Active)
This parameter indicates the activation condition of the speed limiter system.
Speed Limiter Main SW (ON/OFF)
This parameter indicates the state of the speed limiter system.
Fuel Cut (ON/OFF)
This parameter indicates the state of fuel injection.
Closed Throttle Pos (Closed throttle position, ON/OFF)
This parameter indicates monitored idle for engine control.
O2S B1 S1 ACT (HO2S-1, Active/Inactive)
This parameter indicates the activation condition of HO2S-1.
O2S B1 S2 ACT (HO2S-2, Active/Inactive)
This parameter indicates the activation condition of HO2S-2.
Target Valve Closing Position of High Pressure Fuel Pump (°CA)
This parameter indicates close timing of high pressure fuel pump delivery valve. Correlation between the close timing and amount of fuel supply into high-pressure fuel pipe is as follows.
0 degree: Amount of fuel supply is the minimum.
Larger degrees: Amount of fuel supply increases.
Intake Air Temperature 1 (°C, °F)
This parameter indicates the calculated IAT based on input voltage of intake air temperature sensor-1.
Boost Pressure (kPa)
This parameter indicates the calculated boost pressure based on input voltage of boost pressure sensor.

---

## AENLSB0A1114008 - Visual Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114008.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C
Outgoing references:
- AENLSB0A0206004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0206004.xml | Engine Oil and Filter Change
- AENLSB0A1616002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1616002.xml | Coolant Level Check:K14C
- AENLSB0A1616003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1616003.xml | Engine Cooling System Inspection:K14C
- AENLSB0A1716004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1716004.xml | Fuel Leakage Check Procedure:K14C
- AENLSB0A5106004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5106004.xml | ATF Level Check
- AENLSB0A1416003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416003.xml | Air Cleaner Filter Inspection and Cleaning:K14C
- AENLSB0A1A14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14001.xml | Battery Inspection:K14C
- AENLSB0A1A16003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A16003.xml | Water Pump / Generator Drive Belt Tension Inspection and Adjustment:K14C
- AENLSB0A1114002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114002.xml | MIL Check:K14C
- AENLSB0A1A14002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14002.xml | Generator Symptom Diagnosis:K14C
- AENLSB0A1516002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1516002.xml | Oil Pressure Switch On-Vehicle Inspection:K14C
- AENLSB0A1316016 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1316016.xml | ECT Sensor Inspection:K14C
- AENLSB0A1716025 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1716025.xml | Fuel Level Sensor Inspection:K14C
- AENLSB0A1B14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1B14001.xml | Exhaust System Check:K14C

Content:
Visual Inspection
Visually check the following parts and systems.
Inspection item
Referring section
Engine oil – Level, leakage
Engine Oil and Filter Change
Engine coolant – Level, leakage
Coolant Level Check:K14C
Engine Cooling System Inspection:K14C
Fuel – Level, leakage
Fuel Leakage Check Procedure:K14C
ATF – Level, leakage
ATF Level Check
Air cleaner filter – Dirt, clogging
Air Cleaner Filter Inspection and Cleaning:K14C
Battery – Corrosion of terminal
Battery Inspection:K14C
Accessory drive belt – Tension, damage
Water Pump / Generator Drive Belt Tension Inspection and Adjustment:K14C
Throttle valve – Operating sound
—
Vacuum hoses of air intake system – Disconnection, looseness, deterioration, bend
—
Connectors of electric wire harness – Disconnection, friction, pinch
—
Fuses – Blown
—
Parts – Installation, deformation
—
Bolts and nuts – Looseness
—
Additionally check the following items at engine start, if possible.
Inspection item
Referring section
MIL – Operation
MIL Check:K14C
Charging light – Operation
Generator Symptom Diagnosis:K14C
Engine oil pressure light – Operation
Oil Pressure Switch On-Vehicle Inspection:K14C
Engine coolant temperature meter – Operation
ECT Sensor Inspection:K14C
Fuel level sensor – Operation
Fuel Level Sensor Inspection:K14C
Tachometer – Operation
Section 9C
Exhaust system – Leakage of exhaust gas, noise
Exhaust System Check:K14C
Abnormal air being inhaled at air intake system
—
Other parts that can be checked visually
—

---

## AENLSB0A1114009 - Engine Basic Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114009.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C
Outgoing references:
- AENLSB0A1114008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114008.xml | Visual Inspection:K14C
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A1914001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1914001.xml | Cranking System Symptom Diagnosis:K14C
- AENLSB0A1114010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114010.xml | Engine Symptom Diagnosis:K14C
- AENLSB0A1114010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114010.xml | Engine Symptom Diagnosis:K14C
- AENLSB0A1114010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114010.xml | Engine Symptom Diagnosis:K14C
- AENLSB0A1714003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1714003.xml | Fuel Injector Circuit Check:K14C

Content:
Engine Basic Inspection
This check is very important for troubleshooting when ECM has detected no DTC and no abnormality has been found in
Visual Inspection:K14C
.
Follow the flow carefully.
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Battery voltage check
Is it 12 V or more?
Go to Step 3.
Charge or replace battery.
Is engine cranked?
Go to Step 4.
Go to
Cranking System Symptom Diagnosis:K14C
.
Does engine start?
Go to Step 5.
Go to Step 7.
Idle speed check
Check engine idle speed.
Is check result OK?
Go to Step 6.
Go to
Engine Symptom Diagnosis:K14C
.
Ignition system check
Check ignition system.
Is check result OK?
Go to
Engine Symptom Diagnosis:K14C
.
Repair or replace defective parts.
Immobilizer system check
Check immobilizer control system.
Is check result OK?
Go to Step 8.
Immobilizer control system malfunction.
Low fuel pressure circuit check
Check low fuel pressure circuit.
Is check result OK?
Go to Step 9.
Repair or replace defective parts.
High fuel pressure circuit check
Check high fuel pressure circuit.
Is check result OK?.
Go to Step 10.
Repair or replace defective parts.
Fuel injector circuit check
Check fuel injector circuit.
Is check result OK?
Go to
Engine Symptom Diagnosis:K14C
.
Go to
Fuel Injector Circuit Check:K14C
.

---

## AENLSB0A1114010 - Engine Symptom Diagnosis
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114010.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C
Outgoing references:
- AENLSB0A1114008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114008.xml | Visual Inspection:K14C
- AENLSB0A1114009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114009.xml | Engine Basic Inspection:K14C
- AENLSB0A1816002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1816002.xml | Spark Plug Inspection:K14C
- AENLSB0A1816004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1816004.xml | Ignition Coil Assembly Inspection:K14C
- AENLSB0A1714007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1714007.xml | Low-Pressure Fuel Supply Circuit Check:K14C
- AENLSB0A1714004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1714004.xml | Fuel Pump and Its Circuit Check:K14C
- AENLSB0A1714008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1714008.xml | High-Pressure Fuel Supply Circuit Check:K14C
- AENLSB0A1316003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1316003.xml | Electric Throttle Body Assembly On-Vehicle Inspection:K14C
- AENLSB0A1316008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1316008.xml | APP Sensor Inspection:K14C
- AENLSB0A1316016 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1316016.xml | ECT Sensor Inspection:K14C
- AENLSB0A1316010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1316010.xml | MAP Sensor Inspection:K14C
- AENLSB0A1316027 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1316027.xml | MAF Sensor with IAT Sensor-1 Inspection:K14C
- AENLSB0A1114082 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114082.xml | Inspection of ECM and Its Circuits:K14C
- AENLSB0A1414001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1414001.xml | Compression Check:K14C
- AENLSB0A1816001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1816001.xml | Spark Plug Removal and Installation:K14C
- AENLSB0A1416042 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416042.xml | Valve and Valve Guide Inspection:K14C
- AENLSB0A1416042 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416042.xml | Valve and Valve Guide Inspection:K14C
- AENLSB0A1416045 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416045.xml | Valve Spring Inspection:K14C
- AENLSB0A1416043 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416043.xml | Cylinder Head Inspection:K14C
- AENLSB0A1416049 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416049.xml | Cylinder, Piston and Piston Ring Inspection:K14C
- AENLSB0A1416049 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416049.xml | Cylinder, Piston and Piston Ring Inspection:K14C
- AENLSB0A1216007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1216007.xml | PCV Valve On-Vehicle Inspection:K14C
- AENLSB0A1416037 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416037.xml | Camshaft and VVT Actuator Inspection:K14C
- AENLSB0A1416034 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416034.xml | Timing Chain and Chain Tensioner Inspection:K14C
- AENLSB0A1416028 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416028.xml | Timing Chain Cover Inspection:K14C
- AENLSB0A1416040 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416040.xml | Valve Rocker Arm Inspection:K14C
- AENLSB0A1416039 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416039.xml | Valve and Cylinder Head Removal and Installation:K14C
- AENLSB0A0206004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0206004.xml | Engine Oil and Filter Change
- AENLSB0A1516002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1516002.xml | Oil Pressure Switch On-Vehicle Inspection:K14C
- AENLSB0A1516011 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1516011.xml | Oil Pump Inspection:K14C
- AENLSB0A1516011 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1516011.xml | Oil Pump Inspection:K14C
- AENLSB0A1416054 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416054.xml | Crankshaft Inspection:K14C
- AENLSB0A1416042 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416042.xml | Valve and Valve Guide Inspection:K14C
- AENLSB0A1416045 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416045.xml | Valve Spring Inspection:K14C
- AENLSB0A1416042 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416042.xml | Valve and Valve Guide Inspection:K14C
- AENLSB0A1416040 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416040.xml | Valve Rocker Arm Inspection:K14C
- AENLSB0A1416039 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416039.xml | Valve and Cylinder Head Removal and Installation:K14C
- AENLSB0A1416049 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416049.xml | Cylinder, Piston and Piston Ring Inspection:K14C
- AENLSB0A1416049 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416049.xml | Cylinder, Piston and Piston Ring Inspection:K14C
- AENLSB0A1416051 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416051.xml | Crankshaft Pin and Connecting Rod Bearing Inspection:K14C
- AENLSB0A1416051 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416051.xml | Crankshaft Pin and Connecting Rod Bearing Inspection:K14C
- AENLSB0A1416047 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416047.xml | Piston, Piston Ring, Connecting Rod and Cylinder Removal and Installation:K14C
- AENLSB0A1416055 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416055.xml | Main Bearing Inspection:K14C
- AENLSB0A1416054 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416054.xml | Crankshaft Inspection:K14C
- AENLSB0A1416055 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416055.xml | Main Bearing Inspection:K14C
- AENLSB0A1416054 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416054.xml | Crankshaft Inspection:K14C
- AENLSB0A1616008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1616008.xml | Thermostat Inspection:K14C
- AENLSB0A1616016 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1616016.xml | Water Pump Inspection:K14C
- AENLSB0A1616013 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1616013.xml | Radiator On-Vehicle Inspection and Cleaning:K14C
- AENLSB0A0206004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0206004.xml | Engine Oil and Filter Change
- AENLSB0A1514001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1514001.xml | Oil Pressure Check:K14C
- AENLSB0A1514001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1514001.xml | Oil Pressure Check:K14C
- AENLSB0A1614002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1614002.xml | Radiator Cooling Fan System Check:K14C
- AENLSB0A4104001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4104001.xml | Brake Symptom Diagnosis
- AENLSB0A5304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5304001.xml | Clutch System Symptom Diagnosis
- AENLSB0A1416043 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1416043.xml | Cylinder Head Inspection:K14C
- AENLSB0A1616005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1616005.xml | Cooling System Refilling:K14C
- AENLSB0A1816002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1816002.xml | Spark Plug Inspection:K14C
- AENLSB0A1316016 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1316016.xml | ECT Sensor Inspection:K14C
- AENLSB0A1316010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1316010.xml | MAP Sensor Inspection:K14C

Content:
Engine Symptom Diagnosis
Perform troubleshooting referring to the following points when ECM has detected no DTC and no abnormality has been found in
Visual Inspection:K14C
and
Engine Basic Inspection:K14C
.
Hard starting (Engine can be cranked)
Faulty spark plug
Spark Plug Inspection:K14C
Faulty ignition coil
Ignition Coil Assembly Inspection:K14C
Dirty or clogged fuel hoses or pipes
Low-Pressure Fuel Supply Circuit Check:K14C
Malfunctioning fuel pump
Fuel Pump and Its Circuit Check:K14C
Malfunctioning high pressure fuel pump
High-Pressure Fuel Supply Circuit Check:K14C
Air drawn in through intake manifold gasket or throttle body gasket
Check air intake system.
Faulty electric throttle body assembly
Electric Throttle Body Assembly On-Vehicle Inspection:K14C
Faulty APP sensor
APP Sensor Inspection:K14C
Faulty ECT sensor, MAP sensor or MAF sensor
ECT Sensor Inspection:K14C
,
MAP Sensor Inspection:K14C
or
MAF Sensor with IAT Sensor-1 Inspection:K14C
Faulty ECM
Inspection of ECM and Its Circuits:K14C
Low compression
Compression Check:K14C
Poor spark plug tightening or faulty gasket
Spark Plug Removal and Installation:K14C
Compression leakage from valve seat
Valve and Valve Guide Inspection:K14C
Sticky valve stem
Valve and Valve Guide Inspection:K14C
Weak or damaged valve springs
Valve Spring Inspection:K14C
Compression leakage at cylinder head gasket
Cylinder Head Inspection:K14C
Sticky or damaged piston ring
Cylinder, Piston and Piston Ring Inspection:K14C
Worn piston, piston ring or cylinder
Cylinder, Piston and Piston Ring Inspection:K14C
Malfunctioning PCV valve
PCV Valve On-Vehicle Inspection:K14C
VVT system out of order
VVT actuator:
Camshaft and VVT Actuator Inspection:K14C
Valve timing:
Timing Chain and Chain Tensioner Inspection:K14C
OCV oil circuit:
Timing Chain Cover Inspection:K14C
Faulty valve rocker arm
Valve Rocker Arm Inspection:K14C
Faulty valve lash adjuster
Valve and Cylinder Head Removal and Installation:K14C
Low oil pressure
Improper oil viscosity
Engine Oil and Filter Change
Malfunctioning oil pressure switch
Oil Pressure Switch On-Vehicle Inspection:K14C
Clogged oil strainer
Check oil strainer for clog.
Functional deterioration of oil pump
Oil Pump Inspection:K14C
Worn oil pump relief valve
Oil Pump Inspection:K14C
Excessive clearance in various sliding parts
—
Engine noise – Valve noise
Before checking mechanical noise, check that:
Specified spark plug is used.
Specified fuel is used.
Improper valve lash
Crankshaft Inspection:K14C
Worn valve stem and guide
Valve and Valve Guide Inspection:K14C
Weak or broken valve spring
Valve Spring Inspection:K14C
Warped or bent valve
Valve and Valve Guide Inspection:K14C
Faulty valve rocker arm
Valve Rocker Arm Inspection:K14C
Faulty valve lash adjuster
Valve and Cylinder Head Removal and Installation:K14C
Engine noise – Piston, piston ring and cylinder noise
Before checking mechanical noise, check that:
Specified spark plug is used.
Specified fuel is used.
Worn piston, piston ring and cylinder bore
Cylinder, Piston and Piston Ring Inspection:K14C
Engine noise – Connecting rod noise
Before checking mechanical noise, check that:
Specified spark plug is used.
Specified fuel is used.
Worn piston, piston ring and cylinder bore
Cylinder, Piston and Piston Ring Inspection:K14C
Worn connecting rod bearing
Crankshaft Pin and Connecting Rod Bearing Inspection:K14C
Worn crankshaft pin
Crankshaft Pin and Connecting Rod Bearing Inspection:K14C
Loose connecting rod bolts
Piston, Piston Ring, Connecting Rod and Cylinder Removal and Installation:K14C
Low oil pressure
Condition “Low oil pressure”
Engine noise – Crankshaft noise
Before checking mechanical noise, check that:
Specified spark plug is used.
Specified fuel is used.
Low oil pressure
Condition “Low oil pressure”
Worn main bearing
Main Bearing Inspection:K14C
Worn crankshaft journal
Crankshaft Inspection:K14C
Loose bearing cap bolts
Main Bearing Inspection:K14C
Excessive crankshaft thrust play
Crankshaft Inspection:K14C
Engine overheating
Inoperative thermostat
Thermostat Inspection:K14C
Poor water pump performance
Water Pump Inspection:K14C
Clogged or leaky radiator
Radiator On-Vehicle Inspection and Cleaning:K14C
Improper engine oil grade
Engine Oil and Filter Change
Clogged oil filter or oil strainer
Oil Pressure Check:K14C
Poor oil pump performance
Oil Pressure Check:K14C
Faulty radiator cooling fan control system
Radiator Cooling Fan System Check:K14C
Dragging brakes
Condition “Dragging brakes” in
Brake Symptom Diagnosis
Slipping clutch (M/T model)
Condition “Slipping” in
Clutch System Symptom Diagnosis
Blown cylinder head gasket
Cylinder Head Inspection:K14C
Air mixed in cooling system
Cooling System Refilling:K14C
Poor fuel mileage
Faulty spark plug (improper gap, heavy deposits and burned electrodes, etc.)
Spark Plug Inspection:K14C
High idle speed
Condition “Improper engine idling or engine fails to idle”
Poor performance of ECT sensor, MAP sensor or MAF sensor
ECT Sensor Inspection:K14C
,
MAP Sensor Inspection:K14C
or
MAF Sensor with IAT Sensor-1 Inspection:K14C
Faulty electric throttle body assembly
Electric Throttle Body Assembly On-Vehicle Inspection:K14C
Faulty APP sensor
APP Sensor Inspection:K14C
Faulty fuel injector
Fuel Injector Circuit Check:K14C
Faulty ECM
Inspection of ECM and Its Circuits:K14C
Low compression
Compression Check:K14C
Poor valve seating
Valve and Valve Guide Inspection:K14C
Dragging brakes
Condition “Dragging brakes” in
Brake Symptom Diagnosis
Slipping clutch (M/T model)
Condition “Slipping” in
Clutch System Symptom Diagnosis
Thermostat out of order
Thermostat Inspection:K14C
Improper tire pressure
Tire Description
VVT system out of order
VVT actuator:
Camshaft and VVT Actuator Inspection:K14C
Valve timing:
Timing Chain and Chain Tensioner Inspection:K14C
OCV oil circuit:
Timing Chain Cover Inspection:K14C
Excessive engine oil consumption – Oil leakage
Broken cylinder head gasket
Cylinder Head Inspection:K14C
Leaky crankshaft pulley oil seal
Crankshaft Inspection:K14C
Leaky crankshaft rear oil seal
Main Bearing, Crankshaft and Cylinder Block Removal and Installation:K14C
Leaky cylinder head cover gasket
Cylinder Head Cover Components:K14C
Excessive engine oil consumption – Oil entering combustion chamber
Sticky piston ring
Cylinder, Piston and Piston Ring Inspection:K14C
Worn piston and cylinder
Cylinder, Piston and Piston Ring Inspection:K14C
Worn piston ring groove and ring
Cylinder, Piston and Piston Ring Inspection:K14C
Improper location of piston ring gap
Piston, Piston Ring, Connecting Rod and Cylinder Disassembly and Reassembly:K14C
Worn or damaged valve stem seal
Valve and Cylinder Head Disassembly and Reassembly:K14C
Worn valve stem
Valve and Valve Guide Inspection:K14C
Engine hesitates – Momentary lack of response as accelerator is depressed. Can occur at all vehicle speeds. Usually severest when moving out from a stop at stop signal, etc.
Faulty spark plug or plug gap out of adjustment
Spark Plug Inspection:K14C
Fuel pressure out of specification
Fuel Low-Pressure Basic Check:K14C
and
Fuel High-Pressure Basic Check:K14C
Poor performance of ECT sensor, MAP sensor or MAF sensor
ECT Sensor Inspection:K14C
,
MAP Sensor Inspection:K14C
or
MAF Sensor with IAT Sensor-1 Inspection:K14C
Faulty electric throttle body assembly
Electric Throttle Body Assembly On-Vehicle Inspection:K14C
Faulty APP sensor
APP Sensor Inspection:K14C
Faulty fuel injector
Fuel Injector Circuit Check:K14C
Faulty ECM
Inspection of ECM and Its Circuits:K14C
Engine overheating
Condition “Engine overheating”
Low compression
Compression Check:K14C
Malfunctioning air bypass valve
Air bypass valve:
Turbocharger On-Vehicle Inspection:K14C
ABV-VSV:
ABV-VSV On-Vehicle Inspection:K14C
Malfunctioning waste gate valve
Waste gate valve:
Waste Gate Valve On-Vehicle Inspection:K14C
WGV-VSV:
WGV-VSV On-Vehicle Inspection:K14C
Faulty boost pressure sensor
Boost Pressure Sensor with IAT Sensor-2 Inspection:K14C
Surge – Engine power variation under steady throttle or cruise. Vehicle speed changes up and down with no change in accelerator pedal position.
Faulty spark plug (excessive carbon deposits, improper gap, burned electrodes, etc.)
Spark Plug Inspection:K14C
Variable fuel pressure
Low-Pressure Fuel Supply Circuit Check:K14C
and
High-Pressure Fuel Supply Circuit Check:K14C
Kinky or damaged fuel lines
Low-Pressure Fuel Supply Circuit Check:K14C
Fuel pump (clogged fuel filter)
Fuel Pump and Its Circuit Check:K14C
Poor performance of MAP sensor or MAF sensor
MAP Sensor Inspection:K14C
or
MAF Sensor with IAT Sensor-1 Inspection:K14C
Faulty fuel injector
Fuel Injector Circuit Check:K14C
Faulty ECM
Inspection of ECM and Its Circuits:K14C
Faulty electric throttle body assembly
Electric Throttle Body Assembly On-Vehicle Inspection:K14C
Faulty APP sensor
APP Sensor Inspection:K14C
VVT system out of order
VVT actuator:
Camshaft and VVT Actuator Inspection:K14C
Valve timing:
Timing Chain and Chain Tensioner Inspection:K14C
OCV oil circuit:
Timing Chain Cover Inspection:K14C
Excessive detonation – Engine continuously generates sharp, metallic knocking sound that changes with throttle opening.
Faulty spark plug
Spark Plug Inspection:K14C
Engine overheating
Condition “Engine overheating”
Clogged fuel filter (faulty fuel pump) or fuel lines
Fuel Pump and Its Circuit Check:K14C
or
Low-Pressure Fuel Supply Circuit Check:K14C
Air drawn in through intake manifold or throttle body gasket
Check air intake system.
Poor performance of knock sensor, ECT sensor, MAP sensor or MAF sensor
Knock Sensor On-Vehicle Inspection:K14C
,
ECT Sensor Inspection:K14C
,
MAP Sensor Inspection:K14C
or
MAF Sensor with IAT Sensor-1 Inspection:K14C
Faulty fuel injector
Fuel Injector Circuit Check:K14C
or
Fuel Injector Inspection:K14C
Faulty ECM
Inspection of ECM and Its Circuits:K14C
Excessive combustion chamber deposits
Cylinder, Piston and Piston Ring Inspection:K14C
and/or
Piston Pin and Connecting Rod Inspection:K14C
VVT system out of order
VVT actuator:
Camshaft and VVT Actuator Inspection:K14C
Valve timing:
Timing Chain and Chain Tensioner Inspection:K14C
OCV oil circuit:
Timing Chain Cover Inspection:K14C
Poor engine power
Faulty spark plug
Spark Plug Inspection:K14C
Faulty ignition coil assembly
Ignition Coil Assembly Inspection:K14C
Faulty knock sensor
Knock Sensor On-Vehicle Inspection:K14C
Clogged fuel hoses or pipes
Low-Pressure Fuel Supply Circuit Check:K14C
Malfunctioning fuel pump
Fuel Pump and Its Circuit Check:K14C
Malfunctioning high pressure fuel pump
High-Pressure Fuel Supply Circuit Check:K14C
Air drawn in through intake manifold gasket or throttle body gasket
Check air intake system.
Engine overheating
Condition “Engine overheating”
Poor performance of ECT sensor, MAP sensor or MAF sensor
ECT Sensor Inspection:K14C
,
MAP Sensor Inspection:K14C
or
MAF Sensor with IAT Sensor-1 Inspection:K14C
Faulty electric throttle body assembly
Electric Throttle Body Assembly On-Vehicle Inspection:K14C
Faulty APP sensor
APP Sensor Inspection:K14C
Faulty fuel injector
Fuel Injector Circuit Check:K14C
or
Fuel Injector Inspection:K14C
Faulty ECM
Inspection of ECM and Its Circuits:K14C
Dragging brakes
Condition “Dragging brakes” in
Brake Symptom Diagnosis
Slipping clutch (M/T model)
Condition “Slipping” in
Clutch System Symptom Diagnosis
Low compression
Compression Check:K14C
VVT system out of order
VVT actuator:
Camshaft and VVT Actuator Inspection:K14C
Valve timing:
Timing Chain and Chain Tensioner Inspection:K14C
OCV oil circuit:
Timing Chain Cover Inspection:K14C
Malfunctioning air bypass valve
Air bypass valve:
Turbocharger On-Vehicle Inspection:K14C
ABV-VSV:
ABV-VSV On-Vehicle Inspection:K14C
Malfunctioning waste gate valve
Waste gate valve:
Waste Gate Valve On-Vehicle Inspection:K14C
WGV-VSV:
WGV-VSV On-Vehicle Inspection:K14C
Faulty boost pressure sensor
Boost Pressure Sensor with IAT Sensor-2 Inspection:K14C
Improper engine idling or engine fails to idle
Faulty spark plug
Spark Plug Inspection:K14C
Faulty ignition coil assembly
Ignition Coil Assembly Inspection:K14C
Fuel pressure out of specification
Fuel Low-Pressure Basic Check:K14C
and
Fuel High-Pressure Basic Check:K14C
Leaky manifold, throttle body or cylinder head gasket
Check air intake system.
Faulty evaporative emission control system
EVAP Canister Purge Valve Inspection:K14C
Faulty fuel injector
Fuel Injector Circuit Check:K14C
or
Fuel Injector Inspection:K14C
Poor performance of ECT sensor, MAP sensor or MAF sensor
ECT Sensor Inspection:K14C
,
MAP Sensor Inspection:K14C
or
MAF Sensor with IAT Sensor-1 Inspection:K14C
Faulty electric throttle body assembly
Electric Throttle Body Assembly On-Vehicle Inspection:K14C
Faulty APP sensor
APP Sensor Inspection:K14C
Faulty ECM
Inspection of ECM and Its Circuits:K14C
Loose connection or disconnection of vacuum hoses
Check connection of vacuum hoses.
Malfunctioning PCV valve
PCV Valve On-Vehicle Inspection:K14C
Engine overheating
Condition “Engine overheating”
Low compression
Compression Check:K14C
Faulty generator and/or its circuit
Generator Test:K14C
VVT system out of order
VVT actuator:
Camshaft and VVT Actuator Inspection:K14C
Valve timing:
Timing Chain and Chain Tensioner Inspection:K14C
OCV oil circuit:
Timing Chain Cover Inspection:K14C
Faulty oil temperature sensor
Oil Temperature Sensor On-Vehicle Inspection:K14C
Excessive hydrocarbon (HC) emission or carbon monoxide (CO) emission
Faulty spark plug
Spark Plug Inspection:K14C
Faulty ignition coil assembly
Ignition Coil Assembly Inspection:K14C
Low compression
Compression Check:K14C
Lead contamination of TWC
Check for absence of filler neck restrictor.
Faulty evaporative emission control system
EVAP Canister Purge System Inspection:K14C
Fuel pressure out of specification
Fuel Low-Pressure Basic Check:K14C
and
Fuel High-Pressure Basic Check:K14C
Faulty closed loop system (A/F feedback compensation) (Poor performance of ECT sensor, MAP sensor or MAF sensor)
ECT Sensor Inspection:K14C
,
MAP Sensor Inspection:K14C
or
MAF Sensor with IAT Sensor-1 Inspection:K14C
Faulty electric throttle body assembly
Electric Throttle Body Assembly On-Vehicle Inspection:K14C
Faulty APP sensor
APP Sensor Inspection:K14C
Faulty fuel injector
Fuel Injector Circuit Check:K14C
Faulty ECM
Inspection of ECM and Its Circuits:K14C
Engine not at normal operating temperature
—
Clogged air cleaner
Air Cleaner Filter Inspection and Cleaning:K14C
Vacuum leakage
Intake Manifold Vacuum Check:K14C
VVT system out of order
VVT actuator:
Camshaft and VVT Actuator Inspection:K14C
Valve timing:
Timing Chain and Chain Tensioner Inspection:K14C
OCV oil circuit:
Timing Chain Cover Inspection:K14C
Excessive nitrogen oxides (NOx) emission
Improper ignition timing
Ignition Timing Inspection:K14C
Lead contamination of TWC
Check for absence of filler neck restrictor.
Fuel pressure out of specification
Fuel Low-Pressure Basic Check:K14C
and
Fuel High-Pressure Basic Check:K14C
Faulty closed loop system (A/F feedback compensation) (Poor performance of ECT sensor, MAP sensor or MAF sensor)
ECT Sensor Inspection:K14C
,
MAP Sensor Inspection:K14C
or
MAF Sensor with IAT Sensor-1 Inspection:K14C
Faulty electric throttle body assembly
Electric Throttle Body Assembly On-Vehicle Inspection:K14C
Faulty APP sensor
APP Sensor Inspection:K14C
Faulty fuel injector
Fuel Injector Circuit Check:K14C
or
Fuel Injector Inspection:K14C
Faulty ECM
Inspection of ECM and Its Circuits:K14C
VVT system out of order
VVT actuator:
Camshaft and VVT Actuator Inspection:K14C
Valve timing:
Timing Chain and Chain Tensioner Inspection:K14C
OCV oil circuit:
Timing Chain Cover Inspection:K14C

---

## AENLSB0A1114011 - MIL Does Not Come ON with Ignition “ON” and Engine Stopped (but Engine Can Be Started)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114011.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || symptoms: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references: none

Content:
MIL Does Not Come ON with Ignition “ON” and Engine Stopped (but Engine Can Be Started)
Troubleshooting
DTC check
Check DTC related to CAN communication.
Is there any CAN-DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Check combination meter for DTC.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace ECM and recheck MIL operation.

---

## AENLSB0A1114012 - MIL Remains ON after Engine Starts
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114012.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || symptoms: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A5101003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5101003.xml | OBD System Description

Content:
MIL Remains ON after Engine Starts
For type distinction of OBD system, refer to “Discrimination for OBD System” under
OBD System Description
.
Troubleshooting
DTC check
Start engine and recheck DTC of ECM and TCM (type A-A/T model) while engine running.
Is there any DTC(s)?
Go to troubleshooting for applicable DTC.
Substitute a known-good combination meter and recheck DTC.
If MIL still remains ON, replace ECM and recheck MIL operation.

---

## AENLSB0A1114013 - DTC P0010 / P2088 / P2089
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114013.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0010 / P2088 / P2089
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0010: “A” Camshaft Position Actuator Circuit / Open (Bank1)
OCV drive circuit is open.
(3 D/C detection logic)
OCV and/or its circuit
ECM
P2088: “A” Camshaft Position Actuator Control Circuit Low (Bank1)
OCV drive circuit is shorted to ground.
(3 D/C detection logic)
P2089: “A” Camshaft Position Actuator Control Circuit High (Bank1)
OCV drive circuit is shorted to power supply.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
A2:
OCV drive circuit
2.
ECM
A1:
OCV power supply circuit
1.
OCV
3.
To main relay
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following condition is met in this “DTC Confirmation Procedure”.
8.5 V < battery voltage < 16.5 V
Warm up engine and repeat acceleration and deceleration between 30 and 80 km/h (19 and 50 mile/h) more than 10 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
OCV power supply circuit check
Set ignition “OFF”, disconnect connector from OCV.
Check for proper terminal connection to OCV connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
OCV drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connections to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A1” circuit terminal and “A2” circuit terminal at OCV connector: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
OCV check
Check OCV.
Is check result OK?
Go to Step 5.
Replace OCV.
Troubleshooting of other DTC(s) at the same time
Is other DTC(s) detected together?
Go to troubleshooting for applicable DTC.
Replace ECM and recheck DTC.

---

## AENLSB0A1114014 - DTC P0011
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114014.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A1114013 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114013.xml | DTC P0010 / P2088 / P2089:K14C

Content:
DTC P0011
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0011: “A” Camshaft Position Timing Over Advanced or System Performance (Bank1)
Measured CMP does not reach target CMP for specified time.
(3 D/C detection logic or 3 D/C detection logic but MIL does not light up)
OCV and/or its circuit
CKP sensor and sensor plate
CMP sensor and signal rotor
OCV oil passage
VVT actuator
Valve timing
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
A2:
OCV drive circuit
2.
ECM
A1:
OCV power supply circuit
1.
OCV
3.
To main relay
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
CMP sensor (P0340)
CKP sensor (P0335 and P0336)
OCV (P0010, P2088 and P2089)
Warm up engine and repeat acceleration and deceleration between 30 and 80 km/h (19 and 50 mile/h) more than 10 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
DTC check
Check DTC.
Is there DTC(s) other than P0011?
Go to troubleshooting for applicable DTC.
Go to Step 3.
OCV power supply circuit and OCV drive circuit check
Check “A1” and “A2” circuits according to Step 2 – 3 under
DTC P0010 / P2088 / P2089:K14C
.
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Oil pressure check
Check oil pressure.
Is check result OK?
Go to Step 5.
Repair or replace defective parts.
CKP sensor and sensor plate check
Check CKP sensor and sensor plate.
CKP sensor:
Sensor plate:
Is check result OK?
Go to Step 6.
Repair or replace defective parts.
CMP sensor and signal rotor check
Check CMP sensor and signal rotor.
CMP sensor:
Signal rotor:
Is check result OK?
Go to Step 7.
Repair or replace defective parts.
OCV check
Check OCV.
Is check result OK?
Go to Step 8.
Replace OCV.
OCV oil circuit visual check
Check oil pressure leakage from OCV oil circuit.
Is check result OK?
Go to Step 9.
Repair or replace defective parts.
VVT actuator check
Check VVT actuator.
Is check result OK?
Go to Step 10.
Replace VVT actuator.
Valve timing check
Check parts related to timing chain and their installing condition.
Is check result OK?
Replace ECM and recheck DTC.
Reinstall parts related to timing chain correctly, or replace defective parts.

---

## AENLSB0A1114015 - DTC P0016
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114015.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A1114043 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114043.xml | DTC P0340:K14C
- AENLSB0A1114042 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114042.xml | DTC P0335 / P0336:K14C

Content:
DTC P0016
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0016: Crankshaft Position – Camshaft Position Correlation (Bank1 SensorA)
Difference between camshaft position and crankshaft position is out of specified range.
(3 D/C detection logic)
CMP sensor and signal rotor
CKP sensor and sensor plate
Timing chain
Timing chain tensioner
Timing chain tensioner adjuster
VVT actuator
ECM
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Warm up engine and repeat acceleration and deceleration between 30 and 80 km/h (19 and 50 mile/h) more than 10 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
CMP sensor, signal rotor and its circuit check
Check CMP sensor, signal rotor and its circuit related to DTC according to Step 2 – 5 under
DTC P0340:K14C
.
Is check result OK?
Go to Step 3.
Repair or replace defective part.
CKP sensor, sensor plate and its circuit check
Check CKP sensor, sensor plate and its circuit related to DTC according to Step 2 – 5 under
DTC P0335 / P0336:K14C
.
Is check result OK?
Go to Step 4.
Repair or replace defective part.
Engine mechanical system check
Remove timing chain cover.
Check the following items.
Timing chain, timing chain tensioner and timing chain tensioner adjuster:
VVT actuator:
Is check result OK?
Go to Step 5.
Repair or replace defective part.
Troubleshooting of other DTC(s) at the same time
Is other DTC(s) detected together?
Go to troubleshooting for applicable DTC.
Replace ECM and recheck for DTC.

---

## AENLSB0A1114016 - DTC P0030 / P0031 / P0032
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114016.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0030 / P0031 / P0032
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0030: HO2S Heater Control Circuit (Bank1 Sensor1)
HO2S-1 heater drive circuit is open.
(3 D/C detection logic)
HO2S-1 heater and/or its circuit
ECM
P0031: HO2S Heater Control Circuit Low (Bank1 Sensor1)
HO2S-1 heater drive circuit is shorted to ground.
(3 D/C detection logic)
P0032: HO2S Heater Control Circuit High (Bank1 Sensor1)
HO2S-1 heater drive circuit is shorted to power supply.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
HO2S-2 heater power supply circuit
2.
HO2S-2
A1:
HO2S-1 heater power supply circuit
B2:
HO2S-2 signal circuit
3.
ECM
A2:
HO2S-1 signal circuit
B3:
HO2S-2 ground circuit
4.
Shield wire
A3:
HO2S-1 ground circuit
B4:
HO2S-2 heater drive circuit
A4:
HO2S-1 heater drive circuit
1.
HO2S-1
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
8.5 V < battery voltage < 16 V
Run engine at idle speed for 1 min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
HO2S-1 heater power supply circuit check
Set ignition “OFF”, disconnect HO2S-1 connector.
Check for proper terminal connection to HO2S-1 connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” circuit and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wiring harness.
HO2S-1 heater drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A4” circuit: less than 1 Ω
Resistance between “A4” circuit and ground: infinity
Resistance between “A4” circuit terminal and other terminal at HO2S-1 connector: infinity
Voltage of “A4” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 4.
Repair or replace defective wiring harness.
HO2S-1 heater check
Check HO2S-1 heater.
Is check result OK?
Replace ECM and recheck DTC.
Replace HO2S-1.

---

## AENLSB0A1114017 - DTC P0033 / P0034 / P0035
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114017.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0033 / P0034 / P0035
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0033: Turbocharger / Supercharger Bypass Valve Control Circuit
ABV-VSV drive circuit is open.
(1 D/C detection logic)
ABV-VSV and/or its circuit
ECM
P0034: Turbocharger / Supercharger Bypass Valve Control Circuit Low
ABV-VSV drive circuit is shorted to ground.
(1 D/C detection logic)
P0035: Turbocharger / Supercharger Bypass Valve “A” Control Circuit High
ABV-VSV drive circuit is shorted to power supply.
(1 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
ABV-VSV drive circuit
2.
To main relay
A1:
ABV-VSV power supply circuit
1.
ABV-VSV
3.
ECM
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following condition is met in this “DTC Confirmation Procedure”.
Battery voltage > 8.5 V
Warm up engine to normal operating temperature.
Accelerate vehicle under the following conditions for 10 sec.
Shift position: 6th gear (M/T model) or D range (A/T model)
Accelerator pedal: Depressed by a half of completely depressed position
Engine speed: 3,000 rpm or more
Release accelerator pedal, and keep vehicle coasting for 10 sec. in engine braking condition. (Fuel cut)
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
ABV-VSV power supply circuit check
Set ignition “OFF”, disconnect connector from ABV-VSV.
Check for proper terminal connection to ABV-VSV connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
ABV-VSV drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “B1” circuit: less than 1 Ω
Resistance between “B1” circuit and ground: infinity
Resistance between “A1” circuit terminal and “B1” circuit terminal at ABV-VSV connector: infinity
Voltage of “B1” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
ABV-VSV check
Check ABV-VSV.
Is check result OK?
Replace ECM and recheck DTC.
Replace ABV-VSV.

---

## AENLSB0A1114018 - DTC P0036 / P0037 / P0038
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114018.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0036 / P0037 / P0038
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0036: HO2S Heater Control Circuit (Bank1 Sensor2)
HO2S-2 heater drive circuit is open.
(3 D/C detection logic)
HO2S-2 heater and/or its circuit
ECM
P0037: HO2S Heater Control Circuit Low (Bank1 Sensor2)
HO2S-2 heater drive circuit is shorted to ground.
(3 D/C detection logic)
P0038: HO2S Heater Control Circuit High (Bank1 Sensor2)
HO2S-2 heater drive circuit is shorted to power supply.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
HO2S-2 heater power supply circuit
2.
HO2S-2
A1:
HO2S-1 heater power supply circuit
B2:
HO2S-2 signal circuit
3.
ECM
A2:
HO2S-1 signal circuit
B3:
HO2S-2 ground circuit
4.
Shield wire
A3:
HO2S-1 ground circuit
B4:
HO2S-2 heater drive circuit
A4:
HO2S-1 heater drive circuit
1.
HO2S-1
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
8.5 V < battery voltage < 16 V
Run engine at idle speed for 1 min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
HO2S-2 heater power supply circuit check
Set ignition “OFF”, disconnect HO2S-2 connector.
Check for proper terminal connection to HO2S-2 connector.
If connection is OK, set ignition “ON”.
Check that voltage between “B1” circuit and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wiring harness.
HO2S-2 heater drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “B4” circuit: less than 1 Ω
Resistance between “B4” circuit and ground: infinity
Resistance between “B4” circuit terminal and other terminal at HO2S-2 connector: infinity
Voltage of “B4” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 4.
Repair or replace defective wiring harness.
HO2S-2 check
Check HO2S-2 heater.
Is check result OK?
Replace ECM and recheck DTC.
Replace HO2S-2.

---

## AENLSB0A1114019 - DTC P0039
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114019.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A1114017 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114017.xml | DTC P0033 / P0034 / P0035:K14C

Content:
DTC P0039
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0039: Turbocharger / Supercharger Bypass Valve “A” Control Circuit Range / Performance
Boost pressure fluctuation is more than specified value during fuel cut.
(1 D/C detection logic)
ABV-VSV and/or its circuit
Air intake system
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
ABV-VSV drive circuit
2.
To main relay
A1:
ABV-VSV power supply circuit
1.
ABV-VSV
3.
ECM
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
Boost pressure sensor (P0237 and P0238)
Warm up engine to normal operating temperature.
Accelerate vehicle under the following conditions for 10 sec.
Shift position: 6th gear (M/T model) or D range (A/T model)
Accelerator pedal: Depressed by a half of completely depressed position
Engine speed: 3,000 rpm or more
Release accelerator pedal, and keep vehicle coasting for 10 sec. in engine braking condition. (Fuel cut)
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
DTC check
Is there any DTC(s) other than P0039?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Air intake system check
Check air intake system for clogging or leakage.
Is check result OK?
Go to Step 4.
Repair or replace defective part.
ABV-VSV circuit check
Check “A1” and “A2” circuits according to Step 2 – 3 under
DTC P0033 / P0034 / P0035:K14C
.
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
ABV-VSV check
Check ABV-VSV.
Is check result OK?
Replace ECM and recheck DTC.
Replace ABV-VSV.

---

## AENLSB0A1114020 - DTC P0087 / P0088
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114020.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0087 / P0088
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0087: Fuel Rail / System Pressure – Too Low
Measured fuel rail pressure is far below targeted fuel rail pressure for specified time.
(1 D/C detection logic)
Fuel pressure sensor
Low fuel pressure circuit (fuel pressure regulator in fuel pump, fuel pump and/or its circuit, fuel filter, fuel hose, fuel pipe)
High fuel pressure circuit (high pressure fuel pump, fuel rail, high pressure pipe, fuel injector)
ECM
P0088: Fuel Rail / System Pressure – Too High
Measured fuel rail pressure is far above targeted fuel rail pressure for specified time.
(1 D/C detection logic)
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following condition is met in this “DTC Confirmation Procedure”.
Battery voltage < 16 V
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
Fuel pressure sensor (P0192 and P0193)
Warm up engine to normal operating temperature.
Drive vehicle at 50 to 80 km/h (31 to 50 mile/h) constantly for 5 min. or more.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Low fuel pressure circuit check
Check low fuel pressure circuit.
Is check result OK?
Go to Step 3.
Repair or replace defective part(s).
High fuel pressure circuit check
Check high fuel pressure circuit.
Is check result OK?
Replace ECM and recheck DTC.
Repair or replace defective part(s).

---

## AENLSB0A1114021 - DTC P0090 / P0091 / P0092
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114021.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0090 / P0091 / P0092
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0090: Fuel Pressure Regulator1 Control Circuit / Open
High pressure fuel pump circuit is open.
(1 D/C detection logic)
High pressure fuel pump and/or its circuit
ECM
P0091: Fuel Pressure Regulator1 Control Circuit Low
High pressure fuel pump circuit is shorted to ground.
(1 D/C detection logic)
P0092: Fuel Pressure Regulator1 Control Circuit High
High pressure fuel pump circuit is shorted to power supply.
(1 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B2:
Fuel pressure sensor signal circuit
3.
Fuel pressure sensor
A1:
High pressure fuel pump power supply circuit
B3:
Fuel pressure sensor ground circuit
4.
To MAP sensor
A2:
High pressure fuel pump drive circuit
1.
ECM
B1:
Fuel pressure sensor power supply circuit
2.
High pressure fuel pump
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
8.5 V < Battery voltage < 16.5 V
Run engine at idle speed.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
High pressure fuel pump power supply circuit and drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM and high pressure fuel pump connector.
Check for proper terminal connection to “C01” and “E01” connectors and high pressure fuel pump connector.
If connections are OK, check the following points.
Resistance of “A1” and “A2” circuits: less than 1 Ω
Resistance between each “A1” and “A2” circuit and ground: infinity
Resistance between “A1” circuit terminal and “A2” circuit terminal at high pressure fuel pump connector: infinity
Voltage of “A1” and “A2” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
High pressure fuel pump check
Check high pressure fuel pump.
Is check result OK?
Replace ECM and recheck DTC.
Replace high pressure fuel pump.

---

## AENLSB0A1114022 - DTC P0097 / P0098
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114022.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0097 / P0098
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0097: Intake Air Temperature Sensor 2 Circuit Low (Bank1)
Output voltage of IAT sensor-2 signal circuit is lower than 0.02 V for 5 sec.
(3 D/C detection logic)
IAT sensor-2 and/or its circuit
ECM
P0098: Intake Air Temperature Sensor 2 Circuit High (Bank1)
Output voltage of IAT sensor-2 signal circuit is higher than 4.98 V for 5 sec.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
A3:
Boost pressure sensor with IAT sensor-2 ground circuit
2.
Boost pressure sensor
A1:
Boost pressure sensor power supply circuit
B1:
IAT sensor-2 signal circuit
3.
IAT sensor-2
A2:
Boost pressure sensor signal circuit
1.
ECM
4.
To ECT sensor
DTC Confirmation Procedure
Run engine at idle speed for 10 sec.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
IAT sensor-2 signal circuit and boost pressure sensor with IAT sensor-2 ground check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM and boost pressure sensor with IAT sensor-2 connector.
Check for proper terminal connection to “C01” and “E01” connectors and boost pressure sensor with IAT sensor-2 connector.
If connections are OK, check the following points.
Resistance of “B1” and “A3” circuits: less than 1 Ω
Resistance between each of “B1” and “A3” circuits and ground: infinity
Resistance between “B1” circuit terminal and other terminal at boost pressure sensor with IAT sensor-2 connector: infinity
Resistance between “A3” circuit terminal and other terminal at boost pressure sensor with IAT sensor-2 connector: infinity
Voltage of “B1” and “A3” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
IAT sensor-2 check
Check IAT sensor-2.
Is check result OK?
Replace ECM and recheck DTC.
Replace boost pressure sensor with IAT sensor-2.

---

## AENLSB0A1114023 - DTC P0102 / P0103
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114023.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0102 / P0103
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0102: Mass or Volume Air Flow “A” Circuit Low
Output voltage of MAF sensor signal circuit is lower than 0.28 V for 5 sec.
(1 D/C detection logic)
MAF sensor and/or its circuit
ECM
P0103: Mass or Volume Air Flow “A” Circuit High
Output voltage of MAF sensor signal circuit is higher than 4.98 V for 5 sec.
(1 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
IAT sensor-1 signal circuit
3.
IAT sensor-1
A1:
MAF sensor power supply circuit
C1:
MAF sensor with IAT sensor-1 ground circuit
4.
ECM
A2:
MAF sensor reference voltage circuit
1.
MAF sensor with IAT sensor-1
A3:
MAF sensor signal circuit
2.
MAF sensor
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
Battery voltage > 11 V
Run engine at idle speed for 1 min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
MAF sensor power supply circuit check
Set ignition “OFF”, disconnect connector from MAF sensor with IAT sensor-1.
Check for proper terminal connection to MAF sensor with IAT sensor-1 connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and “C1” is battery voltage.
Is check result OK?
Go to Step 4.
Go to Step 3.
MAF sensor with IAT sensor-1 ground circuit check
Check that voltage between “A1” and ground is battery voltage.
Is check result OK?
Repair or replace “C1” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Repair or replace “A1” circuit.
MAF sensor reference voltage circuit check
Check that voltage between “A2” and “C1” is approx. 5 V.
Is check result OK?
Go to Step 5.
Repair or replace “A2” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
MAF sensor signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A3” circuit: less than 1 Ω
Resistance between “A3” circuit and ground: infinity
Resistance between “A3” circuit terminal and other terminal at MAF sensor with IAT sensor-1 connector: infinity
Voltage of “A3” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 6.
Repair or replace defective wire harness.
MAF sensor check
Check MAF sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace MAF sensor with IAT sensor-1.

---

## AENLSB0A1114024 - DTC P0107 / P0108
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114024.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0107 / P0108
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0107: Manifold Absolute Pressure / Barometric Pressure Circuit Low
Output voltage of MAP sensor signal circuit is lower than 0.06 V for 5 sec.
(1 D/C detection logic)
MAP sensor and/or its circuit
ECM
P0108: Manifold Absolute Pressure / Barometric Pressure Circuit High
Output voltage of MAP sensor signal circuit is higher than 4.89 V for 5 sec.
(1 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
A3:
MAP sensor ground circuit
3.
To fuel pressure sensor
A1:
MAP sensor power supply circuit
1.
MAP sensor
A2:
MAP sensor signal circuit
2.
ECM
DTC Confirmation Procedure
Run engine at idle speed for 10 sec.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
MAP sensor power supply circuit check
Set ignition “OFF”, disconnect MAP sensor connector.
Check for proper terminal connection to MAP sensor connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and “A3” is approx. 5 V.
Is check result OK?
Go to Step 4.
Go to Step 3.
MAP sensor ground circuit check
Check that voltage between “A1” and ground is approx. 5 V.
Is check result OK?
Repair or replace “A3” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Check “A1” circuit.
If defective circuit is found, repair or replace “A1” circuit.
If circuit is OK, replace ECM and recheck DTC.
MAP sensor signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace defective wiring harness.
MAP sensor check
Check MAP sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace MAP sensor.

---

## AENLSB0A1114025 - DTC P0112 / P0113
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114025.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0112 / P0113
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0112: Intake Air Temperature Sensor1 Circuit Low (Bank1)
Output voltage of IAT sensor-1 signal circuit is lower than 0.02 V for 5 sec.
(3 D/C detection logic)
IAT sensor-1 and/or its circuit
ECM
P0113: Intake Air Temperature Sensor1 Circuit High (Bank1)
Output voltage of IAT sensor-1 signal circuit is higher than 4.98 V for 5 sec.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
IAT sensor-1 signal circuit
3.
IAT sensor-1
A1:
MAF sensor power supply circuit
C1:
MAF sensor with IAT sensor-1 ground circuit
4.
ECM
A2:
MAF sensor reference voltage circuit
1.
MAF sensor with IAT sensor-1
A3:
MAF sensor signal circuit
2.
MAF sensor
DTC Confirmation Procedure
Warm up engine to normal operating temperature.
Run engine at idle speed for 10 sec.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
IAT sensor-1 signal circuit and ground circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM and MAF sensor with IAT sensor-1 connector.
Check for proper terminal connection to “C01” and “E01” connectors and MAF sensor with IAT sensor-1 connector.
If connections are OK, check the following points.
Resistance of “B1” and “C1” circuits: less than 1 Ω
Resistance between each of “B1” and “C1” circuits and ground: infinity
Resistance between “B1” circuit terminal and other terminal at MAF sensor with IAT sensor-1 connector: infinity
Resistance between “C1” circuit terminal and other terminal at MAF sensor with IAT sensor-1 connector: infinity
Voltage of “B1” and “C1” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
IAT sensor-1 check
Check IAT sensor-1.
Is check result OK?
Replace ECM and recheck DTC.
Replace MAF sensor with IAT sensor-1.

---

## AENLSB0A1114026 - DTC P0116
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114026.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A1114027 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114027.xml | DTC P0117 / P0118:K14C

Content:
DTC P0116
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0116: Engine Coolant Temperature Sensor1 Circuit Range / Performance
Difference between measured ECT and estimated ECT is more than specified value for specified time with engine running.
(3 D/C detection logic)
ECT sensor and/or its circuit
Cooling system
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
A2:
ECT sensor ground circuit
2.
ECM
A1:
ECT sensor signal circuit
1.
ECT sensor
3.
To boost pressure sensor with IAT sensor-2
DTC Confirmation Procedure
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
MAF sensor (P0102 and P0103)
MAP sensor (P0107 and P0108)
ECT sensor (P0117 and P0118)
Warm up engine to normal operating temperature.
Run engine at idle speed for 5 min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Coolant level check
Check coolant level.
Is check result OK?
Go to Step 3.
Add coolant and recheck DTC.
ECT sensor circuit check
Check ECT sensor circuits according to Step 2 under
DTC P0117 / P0118:K14C
.
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
ECT sensor check
Check ECT sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace ECT sensor.

---

## AENLSB0A1114027 - DTC P0117 / P0118
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114027.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0117 / P0118
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0117: Engine Coolant Temperature Sensor1 Circuit Low
Output voltage of ECT sensor signal circuit is lower than 0.02 V.
(3 D/C detection logic)
ECT sensor and/or its circuit
ECM
P0118: Engine Coolant Temperature Sensor1 Circuit High
Output voltage of ECT sensor signal circuit is higher than 4.98 V.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
A2:
ECT sensor ground circuit
2.
ECM
A1:
ECT sensor signal circuit
1.
ECT sensor
3.
To boost pressure sensor with IAT sensor-2
DTC Confirmation Procedure
Set ignition “ON” for 10 sec.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
ECT sensor signal circuit and ground circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM and ECT sensor connector.
Check for proper terminal connection to “C01” and “E01” connectors and ECT sensor connector.
If connections are OK, check the following points.
Resistance of “A1” and “A2” circuits: less than 1 Ω
Resistance between each of “A1” and “A2” circuits and ground: infinity
Resistance between “A1” circuit terminal and “A2” circuit terminal at ECT sensor connector: infinity
Voltage of “A1” and “A2” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
ECT sensor check
Check ECT sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace ECT sensor.

---

## AENLSB0A1114028 - DTC P0122 / P0123
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114028.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A1316003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1316003.xml | Electric Throttle Body Assembly On-Vehicle Inspection:K14C

Content:
DTC P0122 / P0123
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0122: Throttle / Pedal Position Sensor / Switch “A” Circuit Low
Output voltage of TP sensor (main) signal circuit is lower than 0.20 V.
(1 D/C detection logic)
TP sensor (main) and/or its circuit
Electric throttle body assembly
ECM
P0123: Throttle / Pedal Position Sensor / Switch “A” Circuit High
Output voltage of TP sensor (main) signal circuit is higher than 4.81 V.
(1 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B3:
TP sensor (sub) signal circuit
4.
Throttle actuator
A1:
Throttle actuator drive circuit (close)
B4:
TP sensor ground circuit
5.
ECM
A2:
Throttle actuator drive circuit (open)
1.
Electric throttle body assembly
6.
Shield wire
B1:
TP sensor power supply circuit
2.
TP sensor (main)
B2:
TP sensor (main) signal circuit
3.
TP sensor (sub)
DTC Confirmation Procedure
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
System voltage (P0560, P0562 and P0563)
Set ignition “ON” for 10 sec.
Keep accelerator pedal at fully depressed position for 2 sec.
Release accelerator pedal for 2 sec.
Repeat Step 2) – 3) 3 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
TP sensor power supply circuit check
Set ignition “OFF”, disconnect electric throttle body assembly connector.
Check for proper terminal connection to electric throttle body assembly connector.
If connection is OK, set ignition “ON”.
Check that voltage between “B1” and “B4” is approx. 5 V.
Is check result OK?
Go to Step 4.
Go to Step 3.
TP sensor ground circuit check
Check that voltage between “B1” and ground is approx. 5 V.
Is check result OK?
Repair or replace “B4” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Repair or replace “B1” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
TP sensor (main) signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “B2” circuit: less than 1 Ω
Resistance between “B2” circuit and ground: infinity
Resistance between “B2” circuit terminal and other terminal at electric throttle body assembly connector: infinity
Voltage of “B2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
TP sensor check
Check TP sensor referring to “TP Sensor Performance Check” under
Electric Throttle Body Assembly On-Vehicle Inspection:K14C
.
Is check result OK?
Replace ECM and recheck DTC.
Replace electric throttle body assembly.

---

## AENLSB0A1114029 - DTC P0131 / P0132
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114029.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0131 / P0132
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0131: O2 Sensor Circuit Low Voltage (Bank1 Sensor1)
Output voltage of HO2S-1 circuit is lower than 0.06 V for 25 sec.
(3 D/C detection logic)
HO2S-1 and/or its circuit
ECM
P0132: O2 Sensor Circuit High Voltage (Bank1 Sensor1)
Output voltage of HO2S-1 circuit is higher than 3.50 V for 25 sec.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
HO2S-2 heater power supply circuit
2.
HO2S-2
A1:
HO2S-1 heater power supply circuit
B2:
HO2S-2 signal circuit
3.
ECM
A2:
HO2S-1 signal circuit
B3:
HO2S-2 ground circuit
4.
Shield wire
A3:
HO2S-1 ground circuit
B4:
HO2S-2 heater drive circuit
A4:
HO2S-1 heater drive circuit
1.
HO2S-1
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following condition is met in this “DTC Confirmation Procedure”.
Battery voltage > 11 V
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
HO2S-1 heater (P0030, P0031 and P0032)
Warm up engine to normal operating temperature.
Drive vehicle at 50 to 80 km/h (31 to 50 mile/h) constantly for 10 min. or more.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
DTC check
Is there any DTC(s) other than P0131 and P0132?
Go to troubleshooting for applicable DTC.
Go to Step 3.
HO2S-1 signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM and HO2S-1 connector.
Check for proper terminal connection to “C01” and “E01” connectors and HO2S-1 connector.
If connections are OK, check the following points.
Resistance of “A2” and “A3” circuits: less than 1 Ω
Resistance between each of “A2” and “A3” circuits and ground: infinity
Resistance between “A2” circuit terminal and other terminal at HO2S-1 connector: infinity
Resistance between “A3” circuit terminal and other terminal at HO2S-1 connector: infinity
Voltage of “A2” and “A3” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
DTC recheck
Replace HO2S-1.
Perform “DTC Confirmation Procedure” to check for DTCs.
Is DTC P0131 and/or P0132 still detected?
Replace ECM and recheck DTC.
End.

---

## AENLSB0A1114030 - DTC P0133
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114030.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A1114029 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114029.xml | DTC P0131 / P0132:K14C

Content:
DTC P0133
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0133: O2 Sensor Circuit Slow Response (Bank1 Sensor1)
Signal response time from rich to lean and lean to rich is longer than specified time.
(3 D/C detection logic)
HO2S-1 and/or its circuit
HO2S-1 heater
Air intake system
Exhaust system
Fuel system
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
HO2S-2 heater power supply circuit
2.
HO2S-2
A1:
HO2S-1 heater power supply circuit
B2:
HO2S-2 signal circuit
3.
ECM
A2:
HO2S-1 signal circuit
B3:
HO2S-2 ground circuit
4.
Shield wire
A3:
HO2S-1 ground circuit
B4:
HO2S-2 heater drive circuit
A4:
HO2S-1 heater drive circuit
1.
HO2S-1
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following condition is met in this “DTC Confirmation Procedure”.
A/F feedback (closed loop) control is activated.
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
MAP sensor (P0107 and P0108)
MAF sensor (P0102 and P0103)
IAT sensor-1 (P0112 and P0113)
Cylinder misfire detected (P0300)
ECT sensor (P0116, P0117 and P0118)
HO2S-1 (P0131, P0132 and P0134)
EVAP canister purge valve (P0443, P0458 and P0459)
Warm up engine to normal operating temperature.
With engine speed at 1,300 to 3,500 rpm, drive vehicle at 50 to 80 km/h (31 to 50 mile/h) for 5 min.
Check whether O2 sensor readiness / monitoring test has completed or not using scan tool. If O2 sensor readiness / monitoring test has not completed, check vehicle conditions (environmental) and repeat Step 2) – 4).
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
DTC check
Is there any DTC(s) other than P0133?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Exhaust system and air intake system check
Check exhaust system and air intake system for clogging or leakage.
Is check result OK?
Go to Step 4.
Repair or replace defective part.
Fuel system inspection
Check fuel system.
Is check result OK?
Go to Step 5.
Repair or replace defective part.
HO2S-1 signal circuit check
Check “A2” and “A3” circuits according to Step 3 under
DTC P0131 / P0132:K14C
.
Is check result OK?
Go to Step 6.
Repair or replace defective wire harness.
HO2S-1 heater check
Check HO2S-1 heater.
Is check result OK?
Go to Step 7.
Replace HO2S-1.
DTC recheck
Replace HO2S-1.
Perform “DTC Confirmation Procedure” and check DTC.
Is DTC P0133 still detected?
Replace ECM and recheck DTC.
End.

---

## AENLSB0A1114031 - DTC P0134
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114031.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A1114029 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114029.xml | DTC P0131 / P0132:K14C

Content:
DTC P0134
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0134: O2 Sensor Circuit No Activity Detected (Bank1 Sensor1)
Output voltage of HO2S-1 circuit stays between 1.25 and 3.50 V for 25 sec.
(3 D/C detection logic)
HO2S-1 and/or its circuit
HO2S-1 heater
Air intake system
Exhaust system
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
HO2S-2 heater power supply circuit
2.
HO2S-2
A1:
HO2S-1 heater power supply circuit
B2:
HO2S-2 signal circuit
3.
ECM
A2:
HO2S-1 signal circuit
B3:
HO2S-2 ground circuit
4.
Shield wire
A3:
HO2S-1 ground circuit
B4:
HO2S-2 heater drive circuit
A4:
HO2S-1 heater drive circuit
1.
HO2S-1
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following condition is met in this “DTC Confirmation Procedure”.
Battery voltage > 11 V
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
HO2S-1 heater (P0030, P0031 and P0032)
Warm up engine to normal operating temperature.
Drive vehicle at 50 to 80 km/h (31 to 50 mile/h) constantly for 10 min. or more.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
DTC check
Is there any DTC(s) other than P0134?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Exhaust system and air intake system check
Check exhaust system and air intake system for clogging or leakage.
Is check result OK?
Go to Step 4.
Repair or replace defective part.
HO2S-1 signal circuit check
Check “A2” and “A3” circuits according to Step 3 under
DTC P0131 / P0132:K14C
.
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
HO2S-1 heater recheck
Check HO2S-1 heater.
Perform “DTC Confirmation Procedure” and check DTC.
Is check result OK?
Go to Step 6.
Replace HO2S-1.
DTC recheck
Replace HO2S-1.
Perform “DTC Confirmation Procedure” and check DTC.
Is DTC P0134 still detected?
Replace ECM and recheck DTC.
End.

---

## AENLSB0A1114032 - DTC P0137 / P0138 / P0140
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114032.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A1114018 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114018.xml | DTC P0036 / P0037 / P0038:K14C

Content:
DTC P0137 / P0138 / P0140
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0137: O2 Sensor Circuit Low Voltage (Bank1 Sensor2)
Output voltage of HO2S-2 circuit is lower than 0.06 V for 25 sec. after warming up.
(3 D/C detection logic)
HO2S-2 and/or its circuit
HO2S-2 heater and/or its circuit
Exhaust system
Air intake system
Fuel system
ECM
P0138: O2 Sensor Circuit High Voltage (Bank1 Sensor2)
Output voltage of HO2S-2 signal circuit is higher than 3.50 V for 25 sec.
(3 D/C detection logic)
P0140: O2 Sensor Circuit No Activity Detected (Bank1 Sensor2)
Output voltage of HO2S-2 circuit stays between 1.25 to 3.50 V for 25 sec.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
HO2S-2 heater power supply circuit
2.
HO2S-2
A1:
HO2S-1 heater power supply circuit
B2:
HO2S-2 signal circuit
3.
ECM
A2:
HO2S-1 signal circuit
B3:
HO2S-2 ground circuit
4.
Shield wire
A3:
HO2S-1 ground circuit
B4:
HO2S-2 heater drive circuit
A4:
HO2S-1 heater drive circuit
1.
HO2S-1
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following condition is met in this “DTC Confirmation Procedure”.
Battery voltage > 11 V
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
HO2S-2 heater (P0036, P0037 and P0038)
Warm up engine to normal operating temperature.
Drive vehicle at 50 to 80 km/h (31 to 50 mile/h) constantly for 10 min. or more.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
DTC check
Is there any DTC(s) other than P0137, P0138 and P0140?
Go to troubleshooting for applicable DTC(s).
Go to Step 3.
HO2S-2 signal circuit and ground circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM and HO2S-2 connector.
Check for proper terminal connection to “C01” and “E01” connectors and HO2S-2 connector.
If connections are OK, check the following points.
Resistance of “B2” and “B3” circuits: less than 1 Ω
Resistance between each of “B2” and “B3” circuits and ground: infinity
Resistance between “B2” circuit terminal and other terminal at HO2S-2 connector: infinity
Resistance between “B3” circuit terminal and other terminal at HO2S-2 connector: infinity
Voltage of “B2” and “B3” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 4.
Repair or replace defective wiring harness.
Exhaust system and air intake system check
Check exhaust system and air intake system for clogging or leakage.
Is check result OK?
Go to Step 5.
Repair or replace defective part.
HO2S-2 heater circuit check
Check HO2S-2 heater circuits according to Step 2 – 3 under
DTC P0036 / P0037 / P0038:K14C
.
Is check result OK?
Go to Step 6.
Repair or replace defective part.
Fuel injector and its circuit check
Check fuel injector circuit.
Check fuel injectors.
Is check result OK?
Go to Step 7.
Faulty injector(s) or its circuit.
DTC recheck
Replace HO2S-2.
Perform “DTC Confirmation Procedure” to check for DTCs.
Is DTC P0137, P0138 or P0140 still detected?
Replace ECM and recheck DTC.
End.

---

## AENLSB0A1114033 - DTC P0171 / P0172
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114033.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A0205002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0205002.xml | Maintenance Schedule under Normal Driving Conditions (Except for Europe)
- AENLSB0A0205004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0205004.xml | Maintenance Recommended under Severe Driving Conditions (Except for Europe)
- AENLSB0A1716015 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1716015.xml | Fuel Injector Carbon Deposit Inspection:K14C
- AENLSB0A1114029 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114029.xml | DTC P0131 / P0132:K14C

Content:
DTC P0171 / P0172
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0171: System Too Lean (Bank1)
Fuel trim correction is higher than specified value for specified time under specified vehicle condition.
(3 D/C detection logic)
Fuel system
Air intake system
Exhaust system
HO2S-1 and/or its circuit
Emission control system
ECM
P0172: System Too Rich (Bank1)
Fuel trim correction is lower than specified value for specified time under specified vehicle condition.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
HO2S-2 heater power supply circuit
2.
HO2S-2
A1:
HO2S-1 heater power supply circuit
B2:
HO2S-2 signal circuit
3.
ECM
A2:
HO2S-1 signal circuit
B3:
HO2S-2 ground circuit
4.
Shield wire
A3:
HO2S-1 ground circuit
B4:
HO2S-2 heater drive circuit
A4:
HO2S-1 heater drive circuit
1.
HO2S-1
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following conditions are met in this “DTC Confirmation Procedure”.
A/F feedback (closed loop) control is activated.
ECT > 71 °C (160 °F)
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
IAT sensor (P0112 and P0113)
ECT sensor (P0116, P0117 and P0118)
EVAP canister purge valve (P0443, P0458 and P0459)
CMP sensor (P0010 and P0011)
CKP sensor (P0335 and P0336)
HO2S-1 (P0131, P0132 and P0134)
Cylinder misfire detected (P0300)
OCV (P2088 and P2089)
TP sensor (P0122, P0123, P0222, P0223 and P2135)
Warm up engine to normal operating temperature.
Drive vehicle at 50 to 80 km/h (31 to 50 mile/h) constantly for 10 min. or more.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
DTC check
Is there any DTC(s) other than P0171 and P0172?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Fuel system and emission control system check
Check the following points related to fuel and emission control systems.
Low fuel pressure:
High fuel pressure:
Power balance test:
Fuel injector circuit:
Injector resistance:
Injector resistance is not within the reference range: Replace the abnormal injector(s).
Injector resistance is within the reference range but DTC P0171 (too lean) is detected: Check whether or not the item “Fuel injection” is listed in
Maintenance Schedule under Normal Driving Conditions (Except for Europe)
or
Maintenance Recommended under Severe Driving Conditions (Except for Europe)
.
If the vehicle is applicable to inspection item of “Fuel injection”: Perform
Fuel Injector Carbon Deposit Inspection:K14C
.
If the vehicle is not applicable to inspection of “Fuel injection”: Replace all of injectors.
Injector resistance is within the reference range but DTC P0172 (too rich) is detected: Replace all of injectors.
MAP sensor:
MAF sensor:
EVAP canister purge valve:
PCV valve:
Is check result OK?
Go to Step 4.
Repair or replace defective parts.
Exhaust system and air intake system check
Check exhaust system and air intake system for clogging or leakage.
Is check result OK?
Go to Step 5.
Repair or replace defective part.
HO2S-1 signal circuit check
Check HO2S-1 signal circuits according to Step 3 under
DTC P0131 / P0132:K14C
.
Is check result OK?
Go to Step 6.
Repair or replace defective wire harness.
DTC recheck
Replace HO2S-1.
Perform “DTC Confirmation Procedure” and check DTC.
Is DTC P0171 or P0172 still detected?
Go to Step 7.
End.
DTC recheck
Replace all fuel injectors.
Perform “DTC Confirmation Procedure” and check DTC.
Is DTC P0171 or P0172 still detected?
Replace ECM and recheck DTC.
End.

---

## AENLSB0A1114034 - DTC P0192 / P0193
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114034.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0192 / P0193
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0192: Fuel Rail Pressure Sensor “A” Circuit Low
Output voltage of fuel pressure sensor signal circuit is lower than 0.02 V for 5 sec.
(1 D/C detection logic)
Fuel pressure sensor and/or its circuit
Fuel delivery pipe (incorporating fuel pressure sensor)
ECM
P0193: Fuel Rail Pressure Sensor “A” Circuit High
Output voltage of fuel pressure sensor signal circuit is higher than 4.98 V for 5 sec.
(1 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B2:
Fuel pressure sensor signal circuit
3.
Fuel pressure sensor
A1:
High pressure fuel pump power supply circuit
B3:
Fuel pressure sensor ground circuit
4.
To MAP sensor
A2:
High pressure fuel pump drive circuit
1.
ECM
B1:
Fuel pressure sensor power supply circuit
2.
High pressure fuel pump
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Fuel pressure sensor power supply circuit check
Set ignition “OFF”, disconnect fuel pressure sensor connector.
Check for proper terminal connection to fuel pressure sensor connector.
If connection is OK, set ignition “ON”.
Check that voltage between “B1” and “B3” is approx. 5 V.
Is check result OK?
Go to Step 4.
Go to Step 3.
Fuel pressure sensor ground circuit check
Check that voltage between “B1” and ground is approx. 5 V.
Is check result OK?
Repair or replace “B3” circuit. If this DTC is detected again, replace ECM and recheck DTC.
Check “B1” circuit.
If detective circuit is found, repair or replace “B1” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Fuel pressure sensor signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “B2” circuit: less than 1 Ω
Resistance between “B2” circuit and ground: infinity
Resistance between “B2” circuit terminal and other terminal at fuel pressure sensor connector: infinity
Voltage of “B2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
Fuel pressure sensor check
Check fuel pressure sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace fuel delivery pipe (incorporating fuel pressure sensor).

---

## AENLSB0A1114035 - DTC P0197 / P0198
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114035.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0197 / P0198
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0197: Engine Oil Temperature Sensor Circuit Low
Output voltage of oil temperature sensor signal circuit is lower than 0.03 V.
(3 D/C detection logic but MIL does not light up)
Oil temperature sensor and/or its circuit
ECM
P0198: Engine Oil Temperature Sensor Circuit High
Output voltage of oil temperature sensor signal circuit is higher than 4.64 V.
(3 D/C detection logic but MIL does not light up)
Circuit Diagram
[A]:
ECM connector (View: [a])
A2:
Oil temperature sensor ground circuit
2.
ECM
A1:
Oil temperature sensor signal circuit
1.
Oil temperature sensor
DTC Confirmation Procedure
P0197
Check that the following DTC is not detected in this “DTC Confirmation Procedure”.
Engine oil temperature sensor (P0198)
Warm up engine to normal operating temperature.
Run engine at idle speed for 1 min.
P0198
Check that the following DTC is not detected in this “DTC Confirmation Procedure”.
Engine oil temperature sensor (P0197)
Warm up engine to normal operating temperature.
Run engine at idle speed for 1 min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Oil temperature sensor signal circuit and ground circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM and oil temperature sensor connector.
Check for proper terminal connection to “C01” and “E01” connectors and oil temperature sensor connector.
If connections are OK, check the following points.
Resistance of “A1” and “A2” circuits: less than 1 Ω
Resistance between each of “A1” and “A2” circuits and ground: infinity
Resistance between “A1” circuit terminal and “A2” circuit terminal at oil temperature sensor connector: infinity
Voltage of “A1” and “A2” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Oil temperature sensor check
Check oil temperature sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace oil temperature sensor.

---

## AENLSB0A1114036 - DTC P0201 / P0202 / P0203 / P0204
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114036.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0201 / P0202 / P0203 / P0204
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0201: Injector Circuit / Open – Cylinder1
Any of the following conditions is met.
Fuel injector No.1 drive circuit is open.
Fuel injector No.1 drive circuit is shorted to ground.
Fuel injector No.1 drive circuit is shorted to power supply.
(3 D/C detection logic)
Fuel injector and/or its circuit
ECM
P0202: Injector Circuit / Open – Cylinder2
Any of the following conditions is met.
Fuel injector No.2 drive circuit is open.
Fuel injector No.2 drive circuit is shorted to ground.
Fuel injector No.2 drive circuit is shorted to power supply.
(3 D/C detection logic)
P0203: Injector Circuit / Open – Cylinder3
Any of the following conditions is met.
Fuel injector No.3 drive circuit is open.
Fuel injector No.3 drive circuit is shorted to ground.
Fuel injector No.3 drive circuit is shorted to power supply.
(3 D/C detection logic)
P0204: Injector Circuit / Open – Cylinder4
Any of the following conditions is met.
Fuel injector No.4 drive circuit is open.
Fuel injector No.4 drive circuit is shorted to ground.
Fuel injector No.4 drive circuit is shorted to power supply.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
C1:
Fuel injector No.3 drive circuit (high side)
2.
Fuel injector No.1
A1:
Fuel injector No.1 drive circuit (high side)
C2:
Fuel injector No.3 drive circuit (low side)
3.
Fuel injector No.2
A2:
Fuel injector No.1 drive circuit (low side)
D1:
Fuel injector No.4 drive circuit (high side)
4.
Fuel injector No.3
B1:
Fuel injector No.2 drive circuit (high side)
D2:
Fuel injector No.4 drive circuit (low side)
5.
Fuel injector No.4
B2:
Fuel injector No.2 drive circuit (low side)
1.
ECM
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
8.5 V < battery voltage < 16.5 V
Run engine at idle speed for 1 min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Fuel injector drive circuit (high side) and (low side) check
Set ignition “OFF”, disconnect connector from fuel injector related to DTC.
Disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors and fuel injector connector.
If connections are OK, check the following points.
Resistance of “A1”, “A2”, “B1”, “B2”, “C1”, “C2”, “D1” or “D2” circuit: less than 1 Ω
Resistance between each of “A1”, “A2”, “B1”, “B2”, “C1”, “C2”, “D1” and “D2” circuit and ground: infinity
Resistance between “A1” circuit terminal and “A2” circuit terminal at fuel injector connector: infinity
Resistance between “B1” circuit terminal and “B2” circuit terminal at fuel injector connector: infinity
Resistance between “C1” circuit terminal and “C2” circuit terminal at fuel injector connector: infinity
Resistance between “D1” circuit terminal and “D2” circuit terminal at fuel injector connector: infinity
Voltage of “A1”, “A2”, “B1”, “B2”, “C1”, “C2”, “D1” or “D2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Fuel injector check
Check fuel injector related to DTC.
Is check result OK?
Replace ECM and recheck DTC.
Replace fuel injector related to DTC.

---

## AENLSB0A1114037 - DTC P0222 / P0223
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114037.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A1316003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1316003.xml | Electric Throttle Body Assembly On-Vehicle Inspection:K14C

Content:
DTC P0222 / P0223
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0222: Throttle / Pedal Position Sensor / Switch “B” Circuit Low
Output voltage of TP sensor (sub) signal circuit is lower than 0.20 V.
(1 D/C detection logic)
TP sensor (sub) and/or its circuit
Electric throttle body assembly
ECM
P0223: Throttle / Pedal Position Sensor / Switch “B” Circuit High
Output voltage of TP sensor (sub) signal circuit is higher than 4.81 V.
(1 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B3:
TP sensor (sub) signal circuit
4.
Throttle actuator
A1:
Throttle actuator drive circuit (close)
B4:
TP sensor ground circuit
5.
ECM
A2:
Throttle actuator drive circuit (open)
1.
Electric throttle body assembly
6.
Shield wire
B1:
TP sensor power supply circuit
2.
TP sensor (main)
B2:
TP sensor (main) signal circuit
3.
TP sensor (sub)
DTC Confirmation Procedure
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
System voltage (P0560, P0562 and P0563)
Set ignition “ON” for 10 sec.
Keep accelerator pedal at fully depressed position for 2 sec.
Release accelerator pedal for 2 sec.
Repeat Step 2) – 3) 3 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
TP sensor power supply circuit check
Set ignition “OFF”, disconnect electric throttle body assembly connector.
Check for proper terminal connection to electric throttle body assembly connector.
If connection is OK, set ignition “ON”.
Check that voltage between “B1” and “B4” is approx. 5 V.
Is check result OK?
Go to Step 4.
Go to Step 3.
TP sensor ground circuit check
Check that voltage between “B1” and ground is approx. 5 V.
Is check result OK?
Repair or replace “B4” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Repair or replace “B1” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
TP sensor (sub) signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “B3” circuit: less than 1 Ω
Resistance between “B3” circuit and ground: infinity
Resistance between “B3” circuit terminal and other terminal at electric throttle body assembly connector: infinity
Voltage of “B3” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace TP sensor (sub) signal circuit.
TP sensor check
Check TP sensor referring to “TP Sensor Performance Check” under
Electric Throttle Body Assembly On-Vehicle Inspection:K14C
.
Is check result OK?
Replace ECM and recheck DTC.
Replace electric throttle body assembly.

---

## AENLSB0A1114038 - DTC P0237 / P0238
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114038.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0237 / P0238
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0237: Turbocharger / Supercharger Boost Sensor “A” Circuit Low
Output voltage of boost pressure sensor signal circuit is lower than 0.06 V for 5 sec.
(1 D/C detection logic)
Boost pressure sensor and/or its circuit
ECM
P0238: Turbocharger / Supercharger Boost Sensor “A” Circuit High
Output voltage of boost pressure sensor signal circuit is higher than 4.89 V for 5 sec.
(1 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
A3:
Boost pressure sensor with IAT sensor-2 ground circuit
2.
Boost pressure sensor
A1:
Boost pressure sensor power supply circuit
B1:
IAT sensor-2 signal circuit
3.
IAT sensor-2
A2:
Boost pressure sensor signal circuit
1.
ECM
4.
To ECT sensor
DTC Confirmation Procedure
P0237
Check that the following DTC is not detected in this “DTC Confirmation Procedure”.
Boost pressure sensor (P0238)
Run engine at idle speed.
P0238
Check that the following DTC is not detected in this “DTC Confirmation Procedure”.
Boost pressure sensor (P0237)
Run engine at idle speed.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Boost pressure sensor power supply circuit check
Set ignition “OFF”, disconnect boost pressure sensor with IAT sensor-2 connector.
Check for proper terminal connection to boost pressure sensor with IAT sensor-2 connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and “A3” is approx. 5 V.
Is check result OK?
Go to Step 4.
Go to Step 3.
Boost pressure sensor with IAT sensor-2 ground circuit check
Check that voltage between “A1” and ground is approx. 5 V.
Is check result OK?
Repair or replace “A3” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Check “A1” circuit.
If defective circuit is found, repair or replace “A1” circuit.
If circuit is OK, replace ECM and recheck DTC.
Boost pressure sensor signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A2” circuit terminal and other terminal at boost pressure sensor with IAT sensor-2 connector: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
Boost pressure sensor check
Check boost pressure sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace boost pressure sensor with IAT sensor-2.

---

## AENLSB0A1114039 - DTC P0244 / P0245 / P0246
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114039.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0244 / P0245 / P0246
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0244: Turbocharger / Supercharger Wastegate Solenoid “A” Range / Performance
WGV-VSV drive circuit is open.
(1 D/C detection logic)
WGV-VSV and/or its circuit
ECM
P0245: Turbocharger / Supercharger Wastegate Solenoid “A” Low
WGV-VSV drive circuit is shorted to ground.
(1 D/C detection logic)
P0246: Turbocharger / Supercharger Wastegate Solenoid “A” High
WGV-VSV drive circuit is shorted to power supply.
(1 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
WGV-VSV drive circuit
2.
To main relay
A1:
WGV-VSV power supply circuit
1.
WGV-VSV
3.
ECM
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following condition is met in this “DTC Confirmation Procedure”.
Battery voltage > 8.5 V
Warm up engine to normal operating temperature.
Accelerate vehicle under the following conditions for 10 sec.
Shift position: 6th gear (M/T model) or D range (A/T model)
Accelerator pedal: Depressed by a half of completely depressed position
Engine speed: 3,000 rpm or more
Release accelerator pedal, and keep vehicle coasting for 10 sec. in engine braking condition. (Fuel cut)
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
WGV-VSV power supply circuit check
Set ignition “OFF”, disconnect connector from WGV-VSV.
Check for proper terminal connection to WGV-VSV connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
WGV-VSV drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “B1” circuit: less than 1 Ω
Resistance between “B1” circuit and ground: infinity
Resistance between “A1” circuit terminal and “B1” circuit terminal at WGV-VSV connector: infinity
Voltage of “B1” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
WGV-VSV check
Check WGV-VSV.
Is check result OK?
Replace ECM and recheck DTC.
Replace WGV-VSV.

---

## AENLSB0A1114040 - DTC P0300 / P0301 / P0302 / P0303 / P0304
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114040.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0300 / P0301 / P0302 / P0303 / P0304
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0300: Random / Multiple Cylinder Misfire Detected
Any of the following conditions is met.
Misfire, which causes catalyst to overheat during 200 engine revolutions, is detected at 2 or more cylinders.
(MIL blinks as long as misfire lasts.)
Misfire, which affects exhaust emission adversely during 1,000 engine revolutions, is detected at 2 or more cylinders.
(3 D/C detection logic)
Exhaust system
Air intake system
Ignition system
Fuel system
Engine compression
Valve timing
ECM
P0301: Cylinder 1 Misfire Detected
P0302: Cylinder 2 Misfire Detected
P0303: Cylinder 3 Misfire Detected
P0304: Cylinder 4 Misfire Detected
Any of the following conditions is met.
Misfire, which causes catalyst to overheat during 200 engine revolutions, is detected at specific cylinder.
(MIL blinks as long as misfire lasts.)
Misfire, which affects exhaust emission adversely during 1,000 engine revolutions, is detected at specific cylinder.
(3 D/C detection logic)
Ignition system
Engine compression
Fuel injector and/or its circuit
ECM
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following conditions are met in this “DTC Confirmation Procedure”.
ECT > –10 °C (14 °F)
Engine speed < 4,500 rpm
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
CKP sensor (P0335 and P0336)
Warm up engine to normal operating temperature.
With engine speed at 4,500 rpm or less, drive vehicle at 50 to 80 km/h (31 to 50 mile/h) constantly for 5 min. or more.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Fuel level check
Check fuel level by fuel level meter.
Does it indicate “E” level (empty)?
Add fuel and recheck DTC.
Go to Step 3.
Fuel quality check
Check fuel in fuel tank for smell, color and quality.
Is check result OK?
Go to Step 4.
Replace fuel with correct type fuel and recheck DTC.
Air intake system and exhaust system check
Check exhaust system and air intake system for clogging or leakage.
Is check result OK?
Go to Step 5.
Repair or replace defective parts.
Ignition system check
Check ignition system.
Is check result OK?
Go to Step 6.
Repair or replace defective parts.
Fuel system inspection
Check the following points related to fuel system.
Low fuel pressure:
High fuel pressure:
Fuel injector circuit:
Fuel injector:
Is check result OK?
Go to Step 7.
Repair or replace defective parts.
Engine mechanical system check
Check the following points which can be cause of rough idling or poor performance.
Engine compression:
Valve timing:
Is check result OK?
Check ECM power supply and ground circuits.
If circuit is OK, replace ECM and recheck DTC.
Repair or replace defective parts.

---

## AENLSB0A1114041 - DTC P0327 / P0328
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114041.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0327 / P0328
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0327: Knock Sensor1 Circuit Low (Bank1 or Single Sensor)
Output voltage of knock sensor signal circuit is lower than specified value for specified time with engine running.
(3 D/C detection logic)
Knock sensor and/or its circuit
ECM
P0328: Knock Sensor1 Circuit High (Bank1 or Single Sensor)
Output voltage of knock sensor signal circuit is higher than specified value for specified time with engine running.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
Knock sensor signal circuit 2
2.
ECM
A1:
Knock sensor signal circuit 1
1.
Knock sensor
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
P0327
Limit the driving speed permissible in road conditions and regulations.
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
CKP sensor (P0335 and P0336)
Knock sensor (P0328)
Warm up engine and repeat acceleration and deceleration between 30 and 80 km/h (19 and 50 mile/h) more than 10 times.
P0328
Limit the driving speed permissible in road conditions and regulations.
Check that the following DTC is not detected in this “DTC Confirmation Procedure”.
Knock sensor (P0327)
Warm up engine and repeat acceleration and deceleration between 30 and 80 km/h (19 and 50 mile/h) more than 10 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Knock sensor signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM and knock sensor connector.
Check for proper terminal connection to “C01” and “E01” connectors and knock sensor connector.
If connections are OK, check the following points.
Resistance of “A1” and “B1” circuits: less than 1 Ω
Resistance between each of “A1” and “B1” circuits and ground: infinity
Resistance between “A1” circuit terminal and “B1” circuit terminal at knock sensor connector: infinity
Voltage of “A1” and “B1” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Knock sensor check
Check knock sensor.
Is check result OK?
Go to Step 4.
Replace knock sensor.
Troubleshooting of other DTC(s) at the same time
Is other DTC(s) detected together?
Go to troubleshooting for applicable DTC.
Replace ECM and recheck DTC.

---

## AENLSB0A1114042 - DTC P0335 / P0336
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114042.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0335 / P0336
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0335: Crankshaft Position Sensor “A” Circuit
CKP sensor signal is not inputted while CMP sensor signal is being inputted.
(3 D/C detection logic)
CKP sensor and/or its circuit
Sensor plate
ECM
P0336: Crankshaft Position Sensor “A” Circuit Range/Performance
Non-toothed position of sensor plate is out of the specified range.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
CKP sensor power supply circuit
2.
CKP sensor
A1:
CMP sensor power supply circuit
B2:
CKP sensor signal circuit
3.
ECM
A2:
CMP sensor signal circuit
B3:
CKP sensor ground circuit
A3:
CMP sensor ground circuit
1.
CMP sensor
DTC Confirmation Procedure
P0335
Run engine at idle speed for 1 min.
P0336
Check that the following DTC is not detected in this “DTC Confirmation Procedure”.
CKP sensor (P0335)
Run engine at idle speed for 1 min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
CKP sensor power supply circuit check
Set ignition “OFF”, disconnect CKP sensor connector.
Check for proper terminal connection to CKP sensor connector.
If connection is OK, set ignition “ON”.
Check that voltage between “B1” and “B3” is battery voltage.
Is check result OK?
Go to Step 4.
Go to Step 3.
CKP sensor ground circuit check
Check that voltage between “B1” and ground is battery voltage.
Is check result OK?
Repair or replace “B3” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Repair or replace “B1” circuit.
CKP sensor signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “B2” circuit: less than 1 Ω
Resistance between “B2” circuit and ground: infinity
Resistance between “B2” circuit terminal and other terminal at CKP sensor connector: infinity
Voltage of “B2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
CKP sensor and sensor plate check
Check CKP sensor and sensor plate.
CKP sensor:
Sensor plate:
Is check result OK?
Replace ECM and recheck DTC.
Repair or replace defective parts.

---

## AENLSB0A1114043 - DTC P0340
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114043.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0340
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0340: Camshaft Position Sensor “A” Circuit (Bank1 or Single Sensor)
Any of the following condition is met.
CMP sensor signal is not inputted while CKP sensor signal is being inputted.
CMP sensor signal pattern is not equal to the expected pattern.
(3 D/C detection logic)
CMP sensor and/or its circuit
Signal rotor
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
CKP sensor power supply circuit
2.
CKP sensor
A1:
CMP sensor power supply circuit
B2:
CKP sensor signal circuit
3.
ECM
A2:
CMP sensor signal circuit
B3:
CKP sensor ground circuit
A3:
CMP sensor ground circuit
1.
CMP sensor
DTC Confirmation Procedure
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
CKP sensor (P0335 and P0336)
Run engine at idle speed for 1 min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
CMP sensor power supply circuit check
Set ignition “OFF”, disconnect CMP sensor connector.
Check for proper terminal connection to CMP sensor connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and “A3” is battery voltage.
Is check result OK?
Go to Step 4.
Go to Step 3.
CMP sensor ground circuit check
Check that voltage between “A1” and ground is battery voltage.
Is check result OK?
Repair or replace “A3” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Repair or replace “A1” circuit.
CMP sensor signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A2” circuit terminal and other terminal at CMP sensor connector: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
CMP sensor and signal rotor check
Check CMP sensor and signal rotor.
CMP sensor:
Signal rotor:
Is check result OK?
Replace ECM and recheck DTC.
Repair or replace defective parts.

---

## AENLSB0A1114044 - DTC P0351 / P0352 / P0353 / P0354 / P2300 / P2301 / P2303 / P2304 / P2306 / P2307 / P2309 / P2310
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114044.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0351 / P0352 / P0353 / P0354 / P2300 / P2301 / P2303 / P2304 / P2306 / P2307 / P2309 / P2310
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0351: Ignition Coil “A” Primary / Secondary Circuit
Ignition coil assembly No.1 and/or its circuit is open with engine running.
(3 D/C detection logic)
Ignition coil assembly and/or its circuit
ECM
P0352: Ignition Coil “B” Primary / Secondary Circuit
Ignition coil assembly No.2 and/or its circuit is open with engine running.
(3 D/C detection logic)
P0353: Ignition Coil “C” Primary / Secondary Circuit
Ignition coil assembly No.3 and/or its circuit is open with engine running.
(3 D/C detection logic)
P0354: Ignition Coil “D” Primary / Secondary Circuit
Ignition coil assembly No.4 and/or its circuit is open with engine running.
(3 D/C detection logic)
P2300: Ignition Coil “A” Primary Control Circuit Low
Ignition coil assembly No.1 drive circuit is shorted to ground with engine running.
(3 D/C detection logic)
P2301: Ignition Coil “A” Primary Control Circuit High
Ignition coil assembly No.1 drive circuit is shorted to power supply with engine running.
(3 D/C detection logic)
P2303: Ignition Coil “B” Primary Control Circuit Low
Ignition coil assembly No.2 drive circuit is shorted to ground with engine running.
(3 D/C detection logic)
P2304: Ignition Coil “B” Primary Control Circuit High
Ignition coil assembly No.2 drive circuit is shorted to power supply with engine running.
(3 D/C detection logic)
P2306: Ignition Coil “C” Primary Control Circuit Low
Ignition coil assembly No.3 drive circuit is shorted to ground with engine running.
(3 D/C detection logic)
P2307: Ignition Coil “C” Primary Control Circuit High
Ignition coil assembly No.3 drive circuit is shorted to power supply with engine running.
(3 D/C detection logic)
P2309: Ignition Coil “D” Primary Control Circuit Low
Ignition coil assembly No.4 drive circuit is shorted to ground with engine running.
(3 D/C detection logic)
P2310: Ignition Coil “D” Primary Control Circuit High
Ignition coil assembly No.4 drive circuit is shorted to power supply with engine running.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B3:
Ignition coil assembly No.2 ground circuit
D3:
Ignition coil assembly No.4 ground circuit
A1:
Ignition coil assembly No.1 power supply circuit
C1:
Ignition coil assembly No.3 power supply circuit
1.
Ignition coil assembly No.1
A2:
Ignition coil assembly No.1 drive circuit
C2:
Ignition coil assembly No.3 drive circuit
2.
Ignition coil assembly No.2
A3:
Ignition coil assembly No.1 ground circuit
C3:
Ignition coil assembly No.3 ground circuit
3.
Ignition coil assembly No.3
B1:
Ignition coil assembly No.2 power supply circuit
D1:
Ignition coil assembly No.4 power supply circuit
4.
Ignition coil assembly No.4
B2:
Ignition coil assembly No.2 drive circuit
D2:
Ignition coil assembly No.4 drive circuit
5.
ECM
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
8.5 V < battery voltage < 16.5 V
Run engine at idle speed for 1 min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Ignition coil assembly power supply circuit check
Set ignition “OFF”, disconnect connector from ignition coil assembly related to DTC.
Check for proper terminal connection to ignition coil assembly connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and “A3”, “B1” and “B3”, “C1” and “C3” or “D1” and “D3” is battery voltage.
Is check result OK?
Go to Step 4.
Go to Step 3.
Ignition coil assembly ground circuit check
Check that voltage between “A1”, “B1”, “C1” or “D1” and ground is battery voltage.
Is check result OK?
Repair or replace “A3”, “B3”, “C3” or “D3” circuit.
Repair or replace “A1”, “B1”, “C1” or “D1” circuit.
Ignition coil assembly drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connections to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A2”, “B2”, “C2” or “D2” circuit: less than 1 Ω
Resistance between each of “A2”, “B2”, “C2” or “D2” circuit and ground: infinity
Resistance between “A2” circuit terminal and other terminal at ignition coil assembly connector: infinity
Resistance between “B2” circuit terminal and other terminal at ignition coil assembly connector: infinity
Resistance between “C2” circuit terminal and other terminal at ignition coil assembly connector: infinity
Resistance between “D2” circuit terminal and other terminal at ignition coil assembly connector: infinity
Voltage of “A2”, “B2”, “C2” or “D2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
DTC recheck
Replace ignition coil assembly related to DTC with normal ignition coil assembly.
Perform “DTC Confirmation Procedure” and recheck DTC.
Is the same DTC still detected?
Replace ECM and recheck DTC.
End.

---

## AENLSB0A1114045 - DTC P0420
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114045.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A1114032 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114032.xml | DTC P0137 / P0138 / P0140:K14C
- AENLSB0A1114029 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114029.xml | DTC P0131 / P0132:K14C

Content:
DTC P0420
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0420: Catalyst System Efficiency Below Threshold (Bank1)
The calculated degradation index is below specified value.
(3 D/C detection logic)
Exhaust system
HO2S-1 and/or its circuit
HO2S-2 and/or its circuit
TWC
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
2.
TWC
4.
ECM
1.
HO2S-1
3.
HO2S-2
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following conditions are met in this “DTC Confirmation Procedure”.
A/F feedback (closed loop) control is activated.
ECT at engine start > –9 °C (16 °F)
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
HO2S-1 (P0131, P0132, P0133 and P0134)
HO2S-2 (P0137, P0138, P0140 and P2271)
Warm up engine to normal operating temperature.
Drive vehicle at 60 to 100 km/h (37 to 62 mile/h) constantly for 10 min. or more at 6th gear (M/T model) or D range (A/T model). (Keep throttle valve opening constant in this step.)
Check whether catalyst readiness / monitoring test has completed or not using scan tool. If catalyst readiness / monitoring test has not completed, check vehicle conditions (environmental) and repeat Step 2) – 3).
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
DTC check
Check DTC.
Is there DTC(s) detected other than P0420?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Exhaust system check
Check exhaust system for leakage, damage and looseness.
Is check result OK?
Go to Step 4.
Repair or replace defective parts.
HO2S-2 circuit check
Check HO2S-2 signal and ground circuits according to Step 3 under
DTC P0137 / P0138 / P0140:K14C
.
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
HO2S-1 signal circuit check
Check HO2S-1 signal circuit according to Step 3 under
DTC P0131 / P0132:K14C
.
Is check result OK?
Go to Step 6.
Repair or replace defective wire harness.
DTC recheck
Replace catalytic converter.
Perform “DTC Confirmation Procedure”.
Is DTC P0420 still detected?
Go to Step 7.
End.
DTC recheck
Replace HO2S-2.
Check DTC.
Is DTC P0420 still detected?
Go to Step 8.
End.
DTC recheck
Replace HO2S-1.
Check DTC.
Is DTC P0420 still detected?
Replace ECM and recheck DTC.
End.

---

## AENLSB0A1114046 - DTC P0443 / P0458 / P0459
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114046.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0443 / P0458 / P0459
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0443: Evaporative Emission System Purge Control Valve Circuit
EVAP canister purge valve drive circuit is open with engine running.
(3 D/C detection logic)
EVAP canister purge valve and/or its circuit
ECM
P0458: Evaporative Emission System Purge Control Valve Circuit Low
EVAP canister purge valve drive circuit is shorted to ground with engine running.
(3 D/C detection logic)
P0459: Evaporative Emission System Purge Control Valve Circuit High
EVAP canister purge valve drive circuit is shorted to power supply with engine running.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
EVAP canister purge valve drive circuit
2.
To main relay
A1:
EVAP canister purge valve power supply circuit
1.
EVAP canister purge valve
3.
ECM
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
8.5 V < battery voltage < 16 V
Warm up engine to normal operating temperature.
Run engine at idle speed for 1 min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
EVAP canister purge valve power supply circuit check
Set ignition “OFF”, disconnect EVAP canister purge valve connector.
Check for proper terminal connection to EVAP canister purge valve connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
EVAP canister purge valve drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “B1” circuit: less than 1 Ω
Resistance between “B1” circuit and ground: infinity
Resistance between “A1” circuit terminal and “B1” circuit terminal at EVAP canister purge valve connector: infinity
Voltage of “B1” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
EVAP canister purge valve check
Check EVAP canister purge valve for resistance.
Is check result OK?
Replace ECM and recheck DTC.
Replace EVAP canister purge valve.

---

## AENLSB0A1114047 - DTC P0480 / P0692
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114047.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0480 / P0692
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0480: Fan1 Control Circuit
Radiator cooling fan relay No.1 drive circuit is shorted to ground or open.
(3 D/C detection logic but MIL does not light up)
Radiator cooling fan relay No.1 and/or its circuit
ECM
P0692: Fan1 Control Circuit High
Radiator cooling fan relay No.1 drive circuit is shorted to power supply.
(3 D/C detection logic but MIL does not light up)
Circuit Diagram
[A]:
ECM connector (View: [a])
D2:
Radiator cooling fan ground circuit
A1:
Radiator cooling fan relay No.1 power supply circuit (coil side)
D3:
Radiator cooling sub fan power supply circuit
A2:
Radiator cooling fan relay No.1 power supply circuit (switch side)
D4:
Radiator cooling sub fan ground circuit
A3:
Radiator cooling fan relay No.1 drive circuit
1.
ECM
B1:
Radiator cooling fan relay No.2 power supply circuit (coil side)
2.
Radiator cooling fan motor
B2:
Radiator cooling fan relay No.2 drive circuit
3.
Radiator cooling sub fan motor
B3:
Radiator cooling fan relay No.2 ground circuit
4.
Radiator cooling fan relay No.1
C1:
Radiator cooling fan relay No.3 power supply circuit (coil side)
5.
Radiator cooling fan relay No.2
C2:
Radiator cooling fan relay No.3 power supply circuit (switch side)
6.
Radiator cooling fan relay No.3
C3:
Radiator cooling fan relay No.3 drive circuit
7.
“RDTR” fuse
D1:
Radiator cooling fan power supply circuit
8.
“RDTR2” fuse
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
Battery voltage > 8.5 V
Connect SUZUKI scan tool to DLC.
Display “ECT” of “Data List” mode on SUZUKI scan tool.
Keep engine at idle speed until engine coolant temperature reaches 100 °C (212 °F) or more.
Stop engine.
Repeat Step 2) – 4) 2 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Radiator cooling fan relay No.1 power supply circuit (coil side) check
Set ignition “OFF”, remove radiator cooling fan relay No.1.
Check for proper terminal connection to radiator cooling fan relay No.1 connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Radiator cooling fan relay No.1 check
Check radiator cooling fan relay No.1.
Is check result OK?
Go to Step 4.
Replace radiator cooling fan relay No.1.
Radiator cooling fan relay No.1 drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A3” circuit: less than 1 Ω
Resistance between “A3” circuit and ground: infinity
Resistance between “A3” circuit terminal and other terminal at radiator cooling fan relay No.1 connector: infinity
Voltage of “A3” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Replace ECM and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0A1114048 - DTC P0481 / P0694
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114048.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0481 / P0694
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0481: Fan2 Control Circuit
Radiator cooling fan relay No.2 drive circuit is shorted to ground or open.
(3 D/C detection logic but MIL does not light up)
Radiator cooling fan relay No.2 (coil side) and/or its circuit
ECM
P0694: Fan2 Control Circuit High
Radiator cooling fan relay No.2 drive circuit is shorted to power supply.
(3 D/C detection logic but MIL does not light up)
Circuit Diagram
[A]:
ECM connector (View: [a])
D2:
Radiator cooling fan ground circuit
A1:
Radiator cooling fan relay No.1 power supply circuit (coil side)
D3:
Radiator cooling sub fan power supply circuit
A2:
Radiator cooling fan relay No.1 power supply circuit (switch side)
D4:
Radiator cooling sub fan ground circuit
A3:
Radiator cooling fan relay No.1 drive circuit
1.
ECM
B1:
Radiator cooling fan relay No.2 power supply circuit (coil side)
2.
Radiator cooling fan motor
B2:
Radiator cooling fan relay No.2 drive circuit
3.
Radiator cooling sub fan motor
B3:
Radiator cooling fan relay No.2 ground circuit
4.
Radiator cooling fan relay No.1
C1:
Radiator cooling fan relay No.3 power supply circuit (coil side)
5.
Radiator cooling fan relay No.2
C2:
Radiator cooling fan relay No.3 power supply circuit (switch side)
6.
Radiator cooling fan relay No.3
C3:
Radiator cooling fan relay No.3 drive circuit
7.
“RDTR” fuse
D1:
Radiator cooling fan power supply circuit
8.
“RDTR2” fuse
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
Battery voltage > 8.5 V
Connect SUZUKI scan tool to DLC.
Display “ECT” of “Data List” mode on SUZUKI scan tool.
Keep engine at idle speed until engine coolant temperature reaches 103 °C (217 °F) or more.
Stop engine.
Repeat Step 2) – 4) 2 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Radiator cooling fan relay No.2 power supply circuit (coil side) check
Set ignition “OFF”, remove radiator cooling fan relay No.2.
Check for proper terminal connection to radiator cooling fan relay No.2 connector.
If connection is OK, set ignition “ON”.
Check that voltage between “B1” and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Radiator cooling fan relay No.2 check
Check radiator cooling fan relay No.2.
Is check result OK?
Go to Step 4.
Replace radiator cooling fan relay No.2.
Radiator cooling fan relay No.2 drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “B2” circuit: less than 1 Ω
Resistance between “B2” circuit and ground: infinity
Resistance between “B2” circuit terminal and other terminal at radiator cooling fan relay No.2 connector: infinity
Voltage of “B2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Replace ECM and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0A1114049 - DTC P0482 / P0696
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114049.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0482 / P0696
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0482: Fan3 Control Circuit
Radiator cooling fan relay No.3 drive circuit is shorted to ground or open.
(3 D/C detection logic but MIL does not light up)
Radiator cooling fan relay No.3 and/or its circuit
ECM
P0696: Fan3 Control Circuit High
Radiator cooling fan relay No.3 drive circuit is shorted to power supply.
(3 D/C detection logic but MIL does not light up)
Circuit Diagram
[A]:
ECM connector (View: [a])
D2:
Radiator cooling fan ground circuit
A1:
Radiator cooling fan relay No.1 power supply circuit (coil side)
D3:
Radiator cooling sub fan power supply circuit
A2:
Radiator cooling fan relay No.1 power supply circuit (switch side)
D4:
Radiator cooling sub fan ground circuit
A3:
Radiator cooling fan relay No.1 drive circuit
1.
ECM
B1:
Radiator cooling fan relay No.2 power supply circuit (coil side)
2.
Radiator cooling fan motor
B2:
Radiator cooling fan relay No.2 drive circuit
3.
Radiator cooling sub fan motor
B3:
Radiator cooling fan relay No.2 ground circuit
4.
Radiator cooling fan relay No.1
C1:
Radiator cooling fan relay No.3 power supply circuit (coil side)
5.
Radiator cooling fan relay No.2
C2:
Radiator cooling fan relay No.3 power supply circuit (switch side)
6.
Radiator cooling fan relay No.3
C3:
Radiator cooling fan relay No.3 drive circuit
7.
“RDTR” fuse
D1:
Radiator cooling fan power supply circuit
8.
“RDTR2” fuse
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
Battery voltage > 8.5 V
Connect SUZUKI scan tool to DLC.
Display “ECT” of “Data List” mode on SUZUKI scan tool.
Keep engine at idle speed until engine coolant temperature reaches 103 °C (217 °F) or more.
Stop engine.
Repeat Step 2) – 4) 2 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Radiator cooling fan relay No.3 power supply circuit (coil side) check
Set ignition “OFF”, remove radiator cooling ran relay No.3.
Check for proper terminal connection to radiator cooling fan relay No.3 connector.
If connection is OK, set ignition “ON”.
Check that voltage between “C1” and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Radiator cooling fan relay No.3 check
Check radiator cooling fan relay No.3.
Is check result OK?
Go to Step 4.
Replace radiator cooling fan relay No.3.
Radiator cooling fan relay No.3 drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “C3” circuit: less than 1 Ω
Resistance between “C3” circuit and ground: infinity
Resistance between “C3” circuit terminal and other terminal at radiator cooling fan relay No.3 connector: infinity
Voltage of “C3” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Replace ECM and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0A1114050 - DTC P0500
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114050.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0500
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0500: Vehicle Speed Sensor “A”
Any of the following condition is met.
Vehicle speed is slower than 4 km/h (2 mile/h) for 12 sec. at fuel cut condition.
Vehicle speed is not inputted by CAN communication.
(3 D/C detection logic)
CAN communication line
Wheel speed sensor
ESP ® control module
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
3.
Left-rear wheel speed sensor
6.
ECM
1.
Left-front wheel speed sensor
4.
Right-rear wheel speed sensor
7.
CAN driver
2.
Right-front wheel speed sensor
5.
ESP ® control module
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Warm up engine to normal operating temperature.
With engine speed at 1,000 to 4,250 rpm drive vehicle at 60 km/h (37 mile/h) constantly for 1 min. or more at 5th gear (M/T model) or D range (A/T model). (Keep throttle valve opening constant in this step.)
Release accelerator pedal, and keep vehicle coasting for 10 sec. in engine braking condition. (Fuel cut)
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
DTC check
Is there any CAN-DTC detected?
Go to troubleshooting for CAN-DTC.
Go to Step 3.
DTC check
Check DTC in ESP ® control module.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace ECM and recheck DTC.

---

## AENLSB0A1114051 - DTC P0504
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114051.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0504
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0504: Brake Switch “A” / “B” Correlation
Brake light switch signal does not correlate with brake switch signal.
(3 D/C detection logic but MIL does not light up)
Brake signal does not change for specified time.
(1 D/C detection logic)
Brake light switch / brake switch and/or its circuit
ECM
Circuit Diagram
[A]:
Non-adaptive cruise control model
B1:
Brake light switch power supply circuit
3.
Brake switch
[B]:
Adaptive cruise control model
B2:
Brake light switch signal circuit
4.
Brake light switch
[C]:
ECM connector (View: [a])
C1:
Brake light switch / brake switch ground circuit
5.
Brake light
A1:
Brake switch power supply circuit
1.
ECM
6.
“IG1 SIG” fuse
A2:
Brake switch signal circuit
2.
Brake light switch / brake switch
7.
“STOP” fuse
DTC Confirmation Procedure
Run engine at idle speed.
Depress and release brake pedal 20 times.
When depressing or releasing brake pedal, check indication on “Brake Switch” in “Data List” mode on SUZUKI scan tool.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Brake light switch power supply circuit and brake switch power supply circuit check
Set ignition “OFF”, disconnect brake light switch / brake switch connector.
Check for proper terminal connection to brake light switch / brake switch connector.
If connection is OK, set ignition “ON”.
Check that voltage between each of “A1” and “B1” circuits and “C1” circuit is battery voltage.
Is check result OK?
Go to Step 4.
Go to Step 3.
Brake light switch / brake switch ground circuit check
Check that voltage between each of “A1” and “B1” circuits and ground is battery voltage.
Is check result OK?
Repair or replace “C1” circuit.
Repair or replace defective wire harness.
Brake light switch signal circuit and brake switch signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A2” and “B2” circuits: less than 1 Ω
Resistance between each of “A2” and “B2” circuits and ground: infinity
Resistance between “A2” circuit terminal and other terminal at brake light switch / brake switch connector: infinity
Resistance between “B2” circuit terminal and other terminal at brake light switch / brake switch connector: infinity
Voltage of “A2” and “B2” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
Brake light switch / brake switch check
Check brake light switch / brake switch.
Is check result OK?
Replace ECM and recheck DTC.
Replace brake light switch / brake switch.

---

## AENLSB0A1114052 - DTC P0515
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114052.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0515
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0515: Battery Temperature Sensor Circuit
Any of the following conditions is met.
Output voltage of battery temperature sensor signal circuit is lower than 0.10 V for 5 sec.
Output voltage of battery temperature sensor signal circuit is higher than 4.85 V for 5 sec.
(3 D/C detection logic but MIL does not light up)
Electric load current sensor and/or its circuit
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
A3:
Battery temperature sensor signal circuit
2.
Battery temperature sensor
A1:
Electric load current sensor power supply circuit
A4:
Electric load current sensor and battery temperature sensor ground circuit
3.
ECM
A2:
Electric load current sensor signal circuit
1.
Electric load current sensor
DTC Confirmation Procedure
Set ignition “ON” for 10 sec.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Battery temperature sensor signal circuit and ground circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM and electric load current sensor connector.
Check for proper terminal connection to “C01” and “E01” connectors and electric load current sensor connector.
If connections are OK, check the following points.
Resistance of “A3” and “A4” circuits: less than 1 Ω
Resistance between each of “A3” and “A4” circuits and ground: infinity
Resistance between “A3” circuit terminal and other terminal at electric load current sensor connector: infinity
Resistance between “A4” circuit terminal and other terminal at electric load current sensor connector: infinity
Voltage of “A3” and “A4” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Electric load current sensor check
Check electric load current sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace electric load current sensor.

---

## AENLSB0A1114053 - DTC P0530
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114053.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0530
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0530: A/C Refrigerant Pressure Sensor “A” Circuit
Any of the following conditions is met.
Output voltage of A/C refrigerant pressure sensor signal circuit is lower than 0.15 V.
Output voltage of A/C refrigerant pressure sensor signal circuit is higher than 4.93 V.
(3 D/C detection logic but MIL does not light up)
A/C refrigerant pressure sensor and/or its circuit
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
A2:
A/C refrigerant pressure sensor signal circuit
1.
A/C refrigerant pressure sensor
A1:
A/C refrigerant pressure sensor power supply circuit
A3:
A/C refrigerant pressure sensor ground circuit
2.
ECM
DTC Confirmation Procedure
Run engine at idle speed for 10 sec.
Set A/C ON for 10 sec.
Set A/C OFF.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
A/C refrigerant pressure sensor power supply circuit check
Set ignition “OFF”, disconnect A/C refrigerant pressure sensor connector.
Check for proper terminal connection to A/C refrigerant pressure sensor connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and “A3” is approx. 5 V.
Is check result OK?
Go to Step 4.
Go to Step 3.
A/C refrigerant pressure sensor ground circuit check
Check that voltage between “A1” and ground is approx. 5 V.
Is check result OK?
Repair or replace “A3” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Repair or replace “A1” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
A/C refrigerant pressure sensor signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A2” circuit terminal and other terminal at A/C refrigerant pressure sensor connector: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
A/C refrigerant pressure sensor check
Check A/C refrigerant pressure sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace A/C refrigerant pressure sensor.

---

## AENLSB0A1114054 - DTC P0560 / P0562 / P0563
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114054.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0560 / P0562 / P0563
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0560: System Voltage
Main power supply voltage is lower than 2.54 V for 10 sec.
(3 D/C detection logic)
ECM power supply circuit and/or ground circuit
Charging system
ECM
P0562: System Voltage Low
Main power supply circuit voltage is between 2.54 V and 9.8 V for 10 sec. with engine running.
(3 D/C detection logic)
P0563: System Voltage High
Main power supply circuit voltage is higher than 16.5 V for 10 sec. with engine running.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
I1:
Ignition signal circuit
11.
Electric throttle body assembly
A1:
APP sensor (main) power supply circuit
J1:
ECM ground circuit 1
12.
Throttle actuator
A2:
APP sensor (sub) power supply circuit
J2:
ECM ground circuit 2
13.
TP sensor (main)
B1:
Boost pressure sensor with IAT sensor-2 power supply circuit
J3:
ECM ground circuit 3
14.
TP sensor (sub)
C1:
Fuel pressure sensor and MAP sensor power supply circuit
1.
ECM
15.
“INJ DRV” fuse
D1:
A/C refrigerant pressure sensor power supply circuit
2.
APP sensor
16.
Main relay
E1:
Electric load current sensor power supply circuit
3.
APP sensor (main)
17.
“FI MAIN” fuse
F1:
TP sensor power supply circuit
4.
APP sensor (sub)
18.
“IG” fuse
G1:
Main relay drive circuit
5.
Boost pressure sensor with IAT sensor-2
19.
IG11 relay
G2:
Main power supply circuit 1
6.
Fuel pressure sensor
20.
To BCM
G3:
Main power supply circuit 2
7.
MAP sensor
21.
“IGN” fuse
G4:
Main power supply circuit 3
8.
A/C refrigerant pressure sensor
22.
Main fuse box
H1:
Main relay power supply circuit (coil side)
9.
Electric load current sensor
23.
Battery
H2:
Main relay power supply circuit (switch side)
10.
Battery temperature sensor
DTC Confirmation Procedure
P0560
Set ignition “ON” for 1 min.
P0562 / P0563
Run engine at idle speed for 1 min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
ECM power supply and ground circuit check
Check ECM power supply and ground circuits.
Is check result OK?
Go to Step 3.
Repair or replace ECM power supply and/or ground circuit.
Charging system check
Check that charging system is working properly.
Is check result OK?
Replace ECM and recheck DTC.
Repair or replace defective parts.

---

## AENLSB0A1114055 - DTC P0602
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114055.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P0602
DTC Detecting Condition and Trouble Area
After a reprogramming of ECM is executed, if DTC P0602 is indicated, it is possible that the reprogramming of ECM is not completed correctly.
DTC detecting condition
Trouble area
P0602: Control Module Programming Error
ECM internal failure (data programming error).
(1 D/C detection logic but MIL does not light up)
Reprogramming failure of ECM
ECM power supply circuit and/or ground circuit
ECM
DTC Confirmation Procedure
Set ignition “ON” for 1 min.
DTC Troubleshooting
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0602 still detected?
Go to Step 2.
Check for intermittent trouble.
ECM reprogramming check
Was reprogramming of ECM executed?
Execute reprogramming of ECM correctly again.
Go to Step 3.
ECM power supply and ground circuit check
Check ECM power supply and ground circuits.
Is check result OK?
Replace ECM and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0A1114056 - DTC P0606
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114056.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P0606
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0606: Control Module Processor
ECM internal processor failure.
(3 D/C detection logic)
ECM power supply circuit and/or ground circuit
ECM
System Description
Internal control module is installed in ECM.
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
8.5 V < battery voltage < 16.5 V
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
CKP sensor (P0335 and P0336)
Run engine at idle speed for 1 min.
DTC Troubleshooting
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0606 still detected?
Go to Step 2.
Check for intermittent trouble.
ECM power supply and ground circuit check
Check ECM power supply and ground circuits.
Is check result OK?
Replace ECM and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0A1114057 - DTC P0607
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114057.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P0607
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0607: Control Module Performance
Internal failure in ECM is detected.
(1 D/C detection logic)
ECM power supply circuit and/or ground circuit
ECM
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
Battery voltage > 8.5 V
Set ignition “ON”.
Start engine, if possible.
DTC Troubleshooting
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure” and check DTC.
Is DTC P0607 still detected?
Go to Step 2.
Check for intermittent trouble.
ECM power supply and ground circuit check
Check ECM power supply and ground circuits.
Is check result OK?
Replace ECM and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0A1114058 - DTC P0645 / P0646 / P0647
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114058.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0645 / P0646 / P0647
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0645: A/C Clutch Relay Control Circuit
A/C compressor relay drive circuit is open.
(3 D/C detection logic but MIL does not light up)
A/C compressor relay and/or its circuit
ECM
P0646: A/C Clutch Relay Control Circuit Low
A/C compressor relay drive circuit is shorted to ground.
(3 D/C detection logic but MIL does not light up)
P0647: A/C Clutch Relay Control Circuit High
A/C compressor relay drive circuit is shorted to power supply.
(3 D/C detection logic but MIL does not light up)
Circuit Diagram
[A]:
ECM connector (View: [a])
1.
A/C compressor relay
4.
To main fuse box
A1:
A/C compressor relay power supply circuit (coil side)
2.
A/C compressor
5.
ECM
B1:
A/C compressor relay drive circuit
3.
To main relay
6.
“CPRSR” fuse
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
Battery voltage > 8.5 V
Run engine at idle speed for 10 sec.
Set A/C switch ON for 10 sec.
Set A/C switch OFF.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
A/C compressor relay power supply circuit (coil side) check
Set ignition “OFF”, remove A/C compressor relay.
Check for proper terminal connection to A/C compressor relay connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
A/C compressor relay check
Check A/C compressor relay.
Is check result OK?
Go to Step 4.
Replace A/C compressor relay.
A/C compressor relay drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “B1” circuit: less than 1 Ω
Resistance between “B1” circuit and ground: infinity
Resistance between “B1” circuit terminal and other terminal at A/C compressor relay connector: infinity
Voltage of “B1” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Replace ECM and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0A1114059 - DTC P0A5A
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114059.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P0A5A
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0A5A: Generator Current Sensor Circuit Range / Performance
Any of the following conditions is met.
Output voltage of electric load current sensor signal circuit is more than 4.80 V for 5 sec.
Output voltage of electric load current sensor signal circuit is lower than 0.20 V for 5 sec.
Output voltage of electric load current sensor signal circuit fluctuates less than specified value for 5 sec.
(3 D/C detection logic but MIL does not light up)
Electric load current sensor and/or its circuit
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
A3:
Battery temperature sensor signal circuit
2.
Battery temperature sensor
A1:
Electric load current sensor power supply circuit
A4:
Electric load current sensor and battery temperature sensor ground circuit
3.
ECM
A2:
Electric load current sensor signal circuit
1.
Electric load current sensor
DTC Confirmation Procedure
Set ignition “ON” for 10 sec.
Start engine at idle speed for 10 min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Electric load current sensor power supply circuit check
Set ignition “OFF”, disconnect electric load current sensor connector.
Check for proper terminal connection to electric load current sensor connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and “A4” is approx. 5 V.
Is check result OK?
Go to Step 4.
Go to Step 3.
Electric load current sensor and battery temperature sensor ground circuit check
Check that voltage between “A1” and ground is approx. 5 V.
Is check result OK?
Repair or replace “A4” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Repair or replace “A1” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Electric load current sensor signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A2” circuit terminal and other terminal at electric load current sensor connector: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
Electric load current sensor check
Check electric load current sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace electric load current sensor.

---

## AENLSB0A1114060 - DTC P2100
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114060.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P2100
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P2100: Throttle Actuator “A” Control Motor Circuit / Open
Throttle actuator and/or its circuit malfunction (open, short to power supply or short to ground) is detected.
(1 D/C detection logic)
Throttle actuator and/or its circuit
Electric throttle body assembly
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
B3:
TP sensor (sub) signal circuit
4.
Throttle actuator
A1:
Throttle actuator drive circuit (close)
B4:
TP sensor ground circuit
5.
ECM
A2:
Throttle actuator drive circuit (open)
1.
Electric throttle body assembly
6.
Shield wire
B1:
TP sensor power supply circuit
2.
TP sensor (main)
B2:
TP sensor (main) signal circuit
3.
TP sensor (sub)
DTC Confirmation Procedure
Set ignition “ON”.
Keep accelerator pedal at fully depressed position for 2 sec.
Release accelerator pedal for 2 sec.
Repeat Step 2) – 3) 3 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Throttle actuator drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM and electric throttle body assembly connector.
Check for proper terminal connection to “C01” and “E01” connectors and electric throttle body assembly connector.
If connections are OK, check the following points.
Resistance of “A1” and “A2” circuits: less than 1 Ω
Resistance between each of “A1” and “A2” circuits and ground: infinity
Resistance between “A1” circuit terminal and other terminal at electric throttle body assembly connector: infinity
Resistance between “A2” circuit terminal and other terminal at electric throttle body assembly connector: infinity
Voltage of “A1” and “A2” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Electric throttle body assembly check
Check electric throttle body assembly for performance.
Is check result OK?
Replace ECM and recheck DTC.
Replace electric throttle body assembly.

---

## AENLSB0A1114061 - DTC P2101 / P2119
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114061.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A1114060 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114060.xml | DTC P2100:K14C

Content:
DTC P2101 / P2119
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P2101: Throttle Actuator “A” Control Motor Circuit Range / Performance
Any of the following conditions is met.
Difference between measured throttle valve position and targeted throttle valve position is more than specified value.
Duty ratio of throttle actuator signal is out of specified range for specified time.
(1 D/C detection logic)
Throttle actuator and/or its circuit
Electric throttle body assembly
ECM
P2119: Throttle Actuator Control Throttle Body Range / Performance
Any of the following conditions is met.
Time taken by throttle valve to return from partially open position to mechanical default position is more than specified time during return spring check process after setting ignition “OFF”.
Measured default throttle position is out of specified range.
(1 D/C detection logic, monitoring once per D/C)
Circuit Diagram
[A]:
ECM connector (View: [a])
B3:
TP sensor (sub) signal circuit
4.
Throttle actuator
A1:
Throttle actuator drive circuit (close)
B4:
TP sensor ground circuit
5.
ECM
A2:
Throttle actuator drive circuit (open)
1.
Electric throttle body assembly
6.
Shield wire
B1:
TP sensor power supply circuit
2.
TP sensor (main)
B2:
TP sensor (main) signal circuit
3.
TP sensor (sub)
DTC Confirmation Procedure
P2101
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
ECM (P0607)
Throttle actuator (P2100)
Set ignition “ON”.
Keep accelerator pedal at fully depressed position for 2 sec.
Release accelerator pedal for 2 sec.
Set ignition “OFF” for 1 min. and then set ignition “ON”.
P2119
Check that the following conditions are met in this “DTC Confirmation Procedure”.
10 V < battery voltage < 16 V
6 °C (43 °F) < ECT < 100 °C (212 °F)
IAT-1 > 6 °C (43 °F)
Set ignition “ON”.
Keep accelerator pedal at fully depressed position for 2 sec.
Release accelerator pedal for 2 sec.
Set ignition “OFF” for 1 min. and then set ignition “ON”.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
DTC recheck
Clear DTC.
Perform electric throttle control system calibration.
Recheck DTC.
Is DTC P2101 / P2119 still detected?
Go to Step 3.
End.
Throttle actuator drive circuit check
Check throttle actuator drive circuits according to Step 2 under
DTC P2100:K14C
.
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Electric throttle body assembly check
Check electric throttle body assembly for performance.
Is check result OK?
Replace ECM and recheck DTC.
Replace electric throttle body assembly.

---

## AENLSB0A1114062 - DTC P2122 / P2123
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114062.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P2122 / P2123
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P2122: Throttle / Pedal Position Sensor / Switch “D” Circuit Low
Output voltage of APP sensor (main) signal circuit is lower than 0.40 V.
(1 D/C detection logic)
APP sensor (main) and/or its circuit
ECM
P2123: Throttle / Pedal Position Sensor / Switch “D” Circuit High
Output voltage of APP sensor (main) signal circuit is higher than 4.80 V.
(1 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
APP sensor (sub) power supply circuit
2.
APP sensor (main)
A1:
APP sensor (main) power supply circuit
B2:
APP sensor (sub) signal circuit
3.
APP sensor (sub)
A2:
APP sensor (main) signal circuit
B3:
APP sensor (sub) ground circuit
4.
ECM
A3:
APP sensor (main) ground circuit
1.
APP sensor
DTC Confirmation Procedure
P2122
Check that the following DTC is not detected in this “DTC Confirmation Procedure”.
APP sensor (P2123)
Set ignition “ON” for 10 sec.
P2123
Check that the following DTC is not detected in this “DTC Confirmation Procedure”.
APP sensor (P2122)
Set ignition “ON” for 10 sec.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Accelerator pedal assembly (incorporating APP sensor) mounting check
Check that accelerator pedal assembly (incorporating APP sensor) is mounted to vehicle body properly (no pinched floor carpet, etc.).
Is check result OK?
Go to Step 3.
Reinstall accelerator pedal assembly (incorporating APP sensor) properly.
APP sensor (main) power supply circuit check
Set ignition “OFF”, disconnect APP sensor connector.
Check for proper terminal connection to APP sensor connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and “A3” is approx. 5 V.
Is check result OK?
Go to Step 5.
Go to Step 4.
APP sensor (main) ground circuit check
Check that voltage between “A1” and ground is approx. 5 V.
Is check result OK?
Repair or replace “A3” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Repair or replace “A1” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
APP sensor (main) signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A2” circuit terminal and other terminal at APP sensor connector: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 6.
Repair or replace defective wire harness.
APP sensor check
Check APP sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace accelerator pedal assembly (incorporating APP sensor).

---

## AENLSB0A1114063 - DTC P2127 / P2128
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114063.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P2127 / P2128
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P2127: Throttle / Pedal Position Sensor / Switch “E” Circuit Low
Output voltage of APP sensor (sub) signal circuit is lower than 0.20 V.
(1 D/C detection logic)
APP sensor (sub) and/or its circuit
ECM
P2128: Throttle / Pedal Position Sensor / Switch “E” Circuit High
Output voltage of APP sensor (sub) signal circuit is higher than 2.40 V.
(1 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
APP sensor (sub) power supply circuit
2.
APP sensor (main)
A1:
APP sensor (main) power supply circuit
B2:
APP sensor (sub) signal circuit
3.
APP sensor (sub)
A2:
APP sensor (main) signal circuit
B3:
APP sensor (sub) ground circuit
4.
ECM
A3:
APP sensor (main) ground circuit
1.
APP sensor
DTC Confirmation Procedure
P2127
Check that the following DTC is not detected in this “DTC Confirmation Procedure”.
APP sensor (P2128)
Set ignition “ON” for 10 sec.
P2128
Check that the following DTC is not detected in this “DTC Confirmation Procedure”.
APP sensor (P2127)
Set ignition “ON” for 10 sec.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Accelerator pedal assembly (incorporating APP sensor) mounting check
Check that accelerator pedal assembly (incorporating APP sensor) is mounted to vehicle body properly (no pinched floor carpet, etc.).
Is check result OK?
Go to Step 3.
Reinstall accelerator pedal assembly (incorporating APP sensor) properly.
APP sensor (sub) power supply circuit check
Set ignition “OFF”, disconnect APP sensor connector.
Check for proper terminal connection to APP sensor connector.
If connection is OK, set ignition “ON”.
Check that voltage between “B1” and “B3” is approx. 5 V.
Is check result OK?
Go to Step 5.
Go to Step 4.
APP sensor (sub) ground circuit check
Check that voltage between “B1” and ground is approx. 5 V.
Is check result OK?
Repair or replace “B3” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Repair or replace “B1” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
APP sensor (sub) signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “B2” circuit: less than 1 Ω
Resistance between “B2” circuit and ground: infinity
Resistance between “B2” circuit terminal and other terminal at APP sensor connector: infinity
Voltage of “B2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 6.
Repair or replace APP sensor (sub) signal circuit.
APP sensor check
Check APP sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace accelerator pedal assembly (incorporating APP sensor).

---

## AENLSB0A1114064 - DTC P2135
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114064.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A1114028 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114028.xml | DTC P0122 / P0123:K14C
- AENLSB0A1114037 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114037.xml | DTC P0222 / P0223:K14C
- AENLSB0A1316003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1316003.xml | Electric Throttle Body Assembly On-Vehicle Inspection:K14C

Content:
DTC P2135
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P2135: Throttle / Pedal Position Sensor / Switch “A” / “B” Voltage Correlation
Difference between TP sensor (main) signal voltage and TP sensor (sub) signal voltage is higher than specified value.
(1 D/C detection logic)
TP sensor and/or its circuit
Electric throttle body assembly
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
B3:
TP sensor (sub) signal circuit
4.
Throttle actuator
A1:
Throttle actuator drive circuit (close)
B4:
TP sensor ground circuit
5.
ECM
A2:
Throttle actuator drive circuit (open)
1.
Electric throttle body assembly
6.
Shield wire
B1:
TP sensor power supply circuit
2.
TP sensor (main)
B2:
TP sensor (main) signal circuit
3.
TP sensor (sub)
DTC Confirmation Procedure
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
TP sensor (P0122, P0123, P0222 and P0223)
System voltage (P0560, P0562 and P0563)
Set ignition “ON”.
Keep accelerator pedal at fully depressed position for 2 sec.
Release accelerator pedal for 2 sec
Repeat Step 2) – 3) 3 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Wire harness check
Check the following points.
“B1”, “B2” and “B4” circuits: Refer to Step 2 – 4 under
DTC P0122 / P0123:K14C
.
“B3” circuit: Refer to Step 4 under
DTC P0222 / P0223:K14C
.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
TP sensor check
Check TP sensor for performance referring to “TP Sensor Performance Check” under
Electric Throttle Body Assembly On-Vehicle Inspection:K14C
.
Is check result OK?
Replace ECM and recheck DTC.
Replace electric throttle body assembly.

---

## AENLSB0A1114065 - DTC P2138
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114065.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A1114062 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114062.xml | DTC P2122 / P2123:K14C
- AENLSB0A1114063 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114063.xml | DTC P2127 / P2128:K14C

Content:
DTC P2138
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P2138: Throttle / Pedal Position Sensor / Switch “D” / “E” Voltage Correlation
Difference between half of APP (main) sensor signal and APP (sub) sensor signal is more than specified value.
(1 D/C detection logic)
APP sensor and/or its circuit
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
APP sensor (sub) power supply circuit
2.
APP sensor (main)
A1:
APP sensor (main) power supply circuit
B2:
APP sensor (sub) signal circuit
3.
APP sensor (sub)
A2:
APP sensor (main) signal circuit
B3:
APP sensor (sub) ground circuit
4.
ECM
A3:
APP sensor (main) ground circuit
1.
APP sensor
DTC Confirmation Procedure
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
APP sensor (P2122, P2123, P2127 and P2128)
Set ignition “ON”.
Keep accelerator pedal at fully depressed position for 2 sec.
Release accelerator pedal for 2 sec.
Repeat Step 2) – 3) 3 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Wire harness check
Check the following points.
“A1”, “A2” and “A3” circuits: Refer to Step 3 – 5 under
DTC P2122 / P2123:K14C
.
“B1”, “B2” and “B3” circuits: Refer to Step 3 – 5 under
DTC P2127 / P2128:K14C
.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
APP sensor check
Check APP sensor for performance.
Is check result OK?
Replace ECM and recheck DTC.
Replace accelerator pedal assembly.

---

## AENLSB0A1114066 - DTC P2176
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114066.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A1114028 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114028.xml | DTC P0122 / P0123:K14C
- AENLSB0A1114037 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114037.xml | DTC P0222 / P0223:K14C
- AENLSB0A1316003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1316003.xml | Electric Throttle Body Assembly On-Vehicle Inspection:K14C

Content:
DTC P2176
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P2176: Throttle Actuator Control System – Idle Position Not Learned
Any of the following conditions is met.
TP sensor (main) or TP sensor (sub) signal voltage at default position is out of specified range for specified time.
Electric throttle control system calibration is not completed.
(1 D/C detection logic)
TP sensor and/or its circuit
Electric throttle body assembly
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
B3:
TP sensor (sub) signal circuit
4.
Throttle actuator
A1:
Throttle actuator drive circuit (close)
B4:
TP sensor ground circuit
5.
ECM
A2:
Throttle actuator drive circuit (open)
1.
Electric throttle body assembly
6.
Shield wire
B1:
TP sensor power supply circuit
2.
TP sensor (main)
B2:
TP sensor (main) signal circuit
3.
TP sensor (sub)
DTC Confirmation Procedure
Check that the following conditions are met in this “DTC Confirmation Procedure”.
Battery voltage > 10 V
6 °C (43 °F) < ECT < 100 °C (212 °F)
IAT-1 > 6 °C (43 °F)
Set ignition “ON” with accelerator pedal released for 1 min.
Set ignition “OFF”.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Electric throttle control system calibration
Perform electric throttle control system calibration.
Recheck DTC.
Is DTC P2176 still detected?
Go to Step 3.
End.
Wire harness check
Check the following points.
“B1”, “B2” and “B4” circuits: Refer to Step 2 – 4 under
DTC P0122 / P0123:K14C
.
“B3” circuit: Refer to Step 4 under
DTC P0222 / P0223:K14C
.
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
TP sensor check
Check TP sensor referring to “TP Sensor Performance Check” under
Electric Throttle Body Assembly On-Vehicle Inspection:K14C
.
Is check result OK?
Replace ECM and recheck DTC.
Replace electric throttle body assembly.

---

## AENLSB0A1114067 - DTC P2195 / P2196
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114067.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A1114029 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114029.xml | DTC P0131 / P0132:K14C

Content:
DTC P2195 / P2196
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P2195: O2 Sensor Signal Biased / Stuck Lean (Bank1 Sensor1)
Output voltage of HO2S-1 circuit is lower than 0.4 V for 25 sec. even if output voltage of HO2S-2 circuit is higher than 0.6 V.
(3 D/C detection logic)
HO2S-1 and/or its circuit
ECM
P2196: O2 Sensor Signal Biased / Stuck Rich (Bank1 Sensor1)
Output voltage of HO2S-1 circuit is higher than 0.55 V for 25 sec. even if output voltage of HO2S-2 circuit is lower than 0.25 V.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
HO2S-2 heater power supply circuit
2.
HO2S-2
A1:
HO2S-1 heater power supply circuit
B2:
HO2S-2 signal circuit
3.
ECM
A2:
HO2S-1 signal circuit
B3:
HO2S-2 ground circuit
4.
Shield wire
A3:
HO2S-1 ground circuit
B4:
HO2S-2 heater drive circuit
A4:
HO2S-1 heater drive circuit
1.
HO2S-1
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
P2195
Limit the driving speed permissible in road conditions and regulations.
Check that the following conditions are met in this “DTC Confirmation Procedure”.
A/F feedback (closed loop) control is activated.
Battery voltage > 11 V
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
HO2S-1 heater (P0030, P0031 and P0032)
EVAP canister purge valve (P0443, P0458 and P0459)
Warm up engine to normal operating temperature.
Drive vehicle at 50 to 80 km/h (31 to 50 mile/h) constantly for 10 min. or more.
P2196
Limit the driving speed permissible in road conditions and regulations.
Check that the following conditions are met in this “DTC Confirmation Procedure”.
A/F feedback (closed loop) control is activated.
Battery voltage > 11 V
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
HO2S-1 heater (P0030, P0031 and P0032)
Warm up engine to normal operating temperature.
Drive vehicle at 50 to 80 km/h (31 to 50 mile/h) constantly for 10 min. or more.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
HO2S-1 signal circuit check
Check “A2” and “A3” circuits according to Step 3 under
DTC P0131 / P0132:K14C
.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
DTC recheck
Replace HO2S-1.
Perform “DTC Confirmation Procedure” and check DTC.
Is DTC P2195 or P2196 still detected?
Replace ECM and recheck DTC.
End.

---

## AENLSB0A1114068 - DTC P2226 / P2227
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114068.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
DTC P2226 / P2227
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P2226: Barometric Pressure Sensor “A” Circuit
Barometric pressure sensor and/or its circuit malfunction (open, short to power supply or short to ground) is detected.
(1 D/C detection logic)
Barometric pressure sensor in ECM
P2227: Barometric Pressure Circuit Range / Performance
Any of the following conditions is met.
Barometric pressure sensor signal is out of specified range.
Difference between actual and expected ambient pressure is more than the specified value and the fluctuation of ambient pressure is more than the specified value.
(1 D/C detection logic)
DTC Confirmation Procedure
P2226
Set ignition “ON” for 1 min.
P2227
Run engine at idle speed for 1 min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
ECM power supply and ground circuit check
Check ECM power supply and ground circuits.
Is check result OK?
Replace ECM and recheck DTC.
Repair ECM power supply and ground circuits.

---

## AENLSB0A1114069 - DTC P2263
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114069.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A1114038 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114038.xml | DTC P0237 / P0238:K14C

Content:
DTC P2263
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P2263: Turbocharger / Supercharger Boost System Performance
Any of the following conditions is met.
Measured boost pressure in intercooler outlet pipe is far above targeted boost pressure for specified time.
Measured boost pressure in intercooler outlet pipe is far below targeted boost pressure for specified time.
(1 D/C detection logic)
Boost pressure sensor and/or its circuit
Air intake system
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
A3:
Boost pressure sensor with IAT sensor-2 ground circuit
2.
Boost pressure sensor
A1:
Boost pressure sensor power supply circuit
B1:
IAT sensor-2 signal circuit
3.
IAT sensor-2
A2:
Boost pressure sensor signal circuit
1.
ECM
4.
To ECT sensor
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
Boost pressure sensor (P0237 and P0238)
WGV-VSV (P0244, P0245 and P0246)
MAF sensor (P0102 and P0103)
MAP sensor (P0107 and P0108)
ABV-VSV (P0033, P0034 and P0035)
Barometric pressure sensor (P2226 and P2227)
TP sensor (P0122, P0123, P0222, P0223 and P2135)
Accelerate vehicle under the following conditions for 10 sec.
Shift position: 6th gear (M/T model) or D range (A/T model)
Accelerator pedal: Depressed by a half of completely depressed position
Engine speed: 3,000 rpm or more
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
DTC check
Is there any DTC(s) other than P2263?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Air intake system check
Check air intake system for clogging or leakage.
Is check result OK?
Go to Step 4.
Repair or replace defective part.
Boost pressure sensor circuit check
Check “A1”, “A2” and “A3” circuits according to Step 2 – 4 under
DTC P0237 / P0238:K14C
.
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
Boost pressure sensor check
Check boost pressure sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace boost pressure sensor with IAT sensor-2.

---

## AENLSB0A1114070 - DTC P2271
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114070.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C
- AENLSB0A1114032 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114032.xml | DTC P0137 / P0138 / P0140:K14C

Content:
DTC P2271
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P2271: O2 Sensor Signal Biased / Stuck Rich (Bank1 Sensor2)
Output voltage of HO2S-2 signal circuit is higher than 0.4 V for specified time after warming up even when vehicle is in fuel cut driving condition.
(3 D/C detection logic)
HO2S-2 and/or its circuit
Exhaust system
Air intake system
Fuel system
Engine compression
Ignition system
Emission control system
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
HO2S-2 heater power supply circuit
2.
HO2S-2
A1:
HO2S-1 heater power supply circuit
B2:
HO2S-2 signal circuit
3.
ECM
A2:
HO2S-1 signal circuit
B3:
HO2S-2 ground circuit
4.
Shield wire
A3:
HO2S-1 ground circuit
B4:
HO2S-2 heater drive circuit
A4:
HO2S-1 heater drive circuit
1.
HO2S-1
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following condition is met in this “DTC Confirmation Procedure”.
Battery voltage > 11 V
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
HO2S-2 (P0137, P0138 and P0140)
Fuel trim system (P0171 and P0172)
Cylinder misfire detected (P0300)
EVAP canister purge valve (P0443, P0458 and P0459)
Warm up engine to normal operating temperature.
With engine speed at 1,300 to 3,500 rpm, drive vehicle at 50 to 80 km/h (31 to 50 mile/h) for 5 min.
Release accelerator pedal, and keep vehicle coasting for 10 sec. in engine braking condition. (Fuel cut)
Check whether O2 sensor readiness / monitoring test has completed or not using scan tool. If O2 sensor readiness / monitoring test has not completed, check vehicle conditions (environmental) and repeat Step 2) – 4).
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
DTC check
Is there any DTC(s) other than P2271?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Exhaust system and air intake system check
Check exhaust system and air intake system for clogging or leakage.
Is check result OK?
Go to Step 4.
Repair or replace defective part.
HO2S-2 signal and ground circuit check
Check the following point.
“B2” and “B3” circuits: Refer to Step 3 under
DTC P0137 / P0138 / P0140:K14C
.
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
Engine mechanical system check
Check the following points related to engine mechanical system.
Engine compression:
Spark plug:
Is check result OK?
Go to Step 6.
Repair or replace defective parts.
Fuel system and emission control system check
Check the following points related to fuel system and emission control system.
EVAP canister purge valve:
MAP sensor:
PCV valve:
Low fuel pressure:
High fuel pressure:
Fuel injector:
Fuel injector circuit:
Is check result OK?
Go to Step 7.
Repair or replace defective parts.
Recheck DTC
Replace HO2S-2.
Perform “DTC Confirmation Procedure” and check DTC.
Is DTC P2271 still detected?
Replace ECM and recheck DTC.
End.

---

## AENLSB0A1114071 - DTC U0073
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114071.xml
Tree scopes: bookmarks: 1 - Engine > 1A - Engine General Information and Diagnosis > Diagnostic Information and Procedures > K14C || dtc: 1 - Engine > Engine General Information and Diagnosis > K14C > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814004.xml | Troubleshooting for Communication Bus Off:CAN (K14C Model)

Content:
DTC U0073
Refer to
Troubleshooting for Communication Bus Off:CAN (K14C Model)
.

---
