# Content Chunk 0004

Plain-text content extracted from source files with relationship metadata.

## AENLSB0A1124040 - DTC P0244 / P0245 / P0246
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124040.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0244 / P0245 / P0246
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0244: Turbocharger / Supercharger Wastegate Solenoid “A” Range / Performance
WGV-VSV drive circuit is open.
(3 D/C detection logic)
WGV-VSV and/or its circuit
ECM
P0245: Turbocharger / Supercharger Wastegate Solenoid “A” Low
WGV-VSV drive circuit is shorted to ground.
(3 D/C detection logic)
P0246: Turbocharger / Supercharger Wastegate Solenoid “A” High
WGV-VSV drive circuit is shorted to power supply.
(3 D/C detection logic)
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
Shift position: 5th gear
Accelerator pedal: Depressed by a half of completely depressed position
Engine speed: 3,000 rpm or more
Release accelerator pedal, and keep vehicle coasting for 10 sec. in engine braking condition. (Fuel cut)
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
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

## AENLSB0A1124041 - DTC P0300 / P0301 / P0302 / P0303 / P0304
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124041.xml
Tree scopes: unscoped
Outgoing references: none

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

## AENLSB0A1124042 - DTC P0327 / P0328
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124042.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0327 / P0328
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0327: Knock Sensor Circuit Low
Output voltage of knock sensor signal circuit is lower than specified value for specified time with engine running.
(3 D/C detection logic)
Knock sensor and/or its circuit
ECM
P0328: Knock Sensor Circuit High
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

## AENLSB0A1124043 - DTC P0335 / P0336
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124043.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0335 / P0336
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0335: Crankshaft Position Sensor “A” Circuit
CKP sensor signal is not inputted while intake CMP sensor signal is being inputted.
(3 D/C detection logic)
CKP sensor and/or its circuit
Sensor plate
ECM
P0336: Crankshaft Position Sensor “A” Circuit Range / Performance
Non-toothed position of sensor plate is out of the specified range.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B2:
Exhaust CMP sensor signal circuit
1.
Intake CMP sensor
A1:
Intake CMP sensor power supply circuit
B3:
Exhaust CMP sensor ground circuit
2.
Exhaust CMP sensor
A2:
Intake CMP sensor signal circuit
C1:
CKP sensor power supply circuit
3.
CKP sensor
A3:
Intake CMP sensor ground circuit
C2:
CKP sensor signal circuit
4.
ECM
B1:
Exhaust CMP sensor power supply circuit
C3:
CKP sensor ground circuit
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
.
CKP sensor power supply circuit check
Set ignition “OFF”, disconnect CKP sensor connector.
Check for proper terminal connection to CKP sensor connector.
If connection is OK, set ignition “ON”.
Check that voltage between “C1” and “C3” is battery voltage.
Is check result OK?
Go to Step 4.
Go to Step 3.
CKP sensor ground circuit check
Check that voltage between “C1” and ground is battery voltage.
Is check result OK?
Repair or replace “C3” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Repair or replace “C1” circuit.
CKP sensor signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “C2” circuit: less than 1 Ω
Resistance between “C2” circuit and ground: infinity
Resistance between “C2” circuit terminal and other terminal at CKP sensor connector: infinity
Voltage of “C2” circuit: approx. 0 V (When ignition is “ON”)
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

## AENLSB0A1124044 - DTC P0340 / P0365
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124044.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0340 / P0365
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0340: Camshaft Position Sensor “A” Circuit
Any of the following conditions is met.
Intake CMP sensor signal is not inputted while CKP sensor signal is being inputted.
Intake CMP sensor signal pattern is not equal to the expected pattern.
(3 D/C detection logic)
Intake CMP sensor and/or its circuit
Signal rotor
ECM
P0365: Camshaft Position Sensor “B” Circuit
Any of the following conditions is met.
Exhaust CMP sensor signal is not inputted while CKP sensor signal is being inputted.
Exhaust CMP sensor signal is more than specified counters when output signal of CKP sensor is normal.
(3 D/C detection logic)
Exhaust CMP sensor and/or its circuit
Signal rotor
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
B2:
Exhaust CMP sensor signal circuit
1.
Intake CMP sensor
A1:
Intake CMP sensor power supply circuit
B3:
Exhaust CMP sensor ground circuit
2.
Exhaust CMP sensor
A2:
Intake CMP sensor signal circuit
C1:
CKP sensor power supply circuit
3.
CKP sensor
A3:
Intake CMP sensor ground circuit
C2:
CKP sensor signal circuit
4.
ECM
B1:
Exhaust CMP sensor power supply circuit
C3:
CKP sensor ground circuit
DTC Confirmation Procedure
P0340
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
CKP sensor (P0335 and P0336)
Run engine at idle speed for 1 min.
P0365
Run engine at idle speed for 10 sec.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
CMP sensor power supply circuit check
Set ignition “OFF”, disconnect CMP sensor connector related to DTC.
Check for proper terminal connection to CMP sensor connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and “A3” or “B1” and “B3” is battery voltage.
Is check result OK?
Go to Step 4.
Go to Step 3.
CMP sensor ground circuit check
Check that voltage between “A1” or “B1” and ground is battery voltage.
Is check result OK?
Repair or replace “A3” or “B3” circuit.
Repair or replace “A1” or “B1” circuit.
CMP sensor signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A2” or “B2” circuit: less than 1 Ω
Resistance between “A2” or “B2” circuit and ground: infinity
Resistance between “A2” circuit terminal and other terminal at CMP sensor connector: infinity
Resistance between “B2” circuit terminal and other terminal at CMP sensor connector: infinity
Voltage of “A2” or “B2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
CMP sensor and signal rotor check
Check the following items:
CMP sensor:
Signal rotor:
Is check result OK?
Replace ECM and recheck DTC.
Repair or replace defective parts.

---

## AENLSB0A1124045 - DTC P0351 / P0352 / P0353 / P0354 / P2300 / P2301 / P2303 / P2304 / P2306 / P2307 / P2309 / P2310
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124045.xml
Tree scopes: unscoped
Outgoing references: none

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
D3.
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
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is the same DTC still detected?
Replace ECM and recheck DTC.
End.

---

## AENLSB0A1124046 - DTC P0420
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124046.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0420
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0420: Catalyst System Efficiency Below Threshold (Bank1)
The calculated degradation index is below specified value.
(3 D/C detection logic)
Exhaust system
A/F sensor and/or its circuit
HO2S and/or its circuit
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
A/F sensor
3.
HO2S
5.
A/F signal processing unit
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
A/F sensor (P0131, P0132, P0133, P2237, P2243 and P2251)
HO2S (P0137, P0138, P0139, P0140, P2270 and P2271)
Warm up engine to normal operating temperature.
Drive vehicle at 80 to 120 km/h (50 to 75 mile/h) constantly for 10 min. or more at 5th gear. (Keep throttle valve opening constant in this step.)
Check whether catalyst readiness / monitoring test has completed or not using scan tool. If catalyst readiness / monitoring test has not completed, check vehicle conditions (environmental) and repeat Step 2) – 3).
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
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
HO2S circuit check
Check HO2S signal and ground circuits according to Step 3 under
.
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
A/F sensor signal circuit check
Check A/F sensor signal circuit according to Step 3 under
.
Is check result OK?
Go to Step 6.
Repair or replace defective wire harness.
DTC recheck
Replace catalytic converter.
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0420 still detected?
Go to Step 7.
End.
DTC recheck
Replace HO2S.
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0420 still detected?
Go to Step 8.
End.
DTC recheck
Replace A/F sensor.
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0420 still detected?
Replace ECM and recheck DTC.
End.

---

## AENLSB0A1124047 - DTC P0443 / P0458 / P0459
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124047.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0443 / P0458 / P0459
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0443: Evaporative Emission System Purge Control Valve Circuit
EVAP canister purge valve drive circuit is open.
(3 D/C detection logic)
EVAP canister purge valve and/or its circuit
ECM
P0458: Evaporative Emission System Purge Control Valve Circuit Low
EVAP canister purge valve drive circuit is shorted to ground.
(3 D/C detection logic)
P0459: Evaporative Emission System Purge Control Valve Circuit High
EVAP canister purge valve drive circuit is shorted to power supply.
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
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following condition is met in this “DTC Confirmation Procedure”.
8.5 V < battery voltage < 16 V
Warm up engine to normal operating temperature.
Drive vehicle at 50 to 80 km/h (31 to 50 mile/h) constantly for 3 min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
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

## AENLSB0A1124048 - DTC P0480 / P0691 / P0692
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124048.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0480 / P0691 / P0692
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0480: Fan1 Control Circuit
Radiator cooling fan relay No.1 drive circuit is open.
(3 D/C detection logic but MIL does not light up)
Radiator cooling fan relay No.1 and/or its circuit
ECM
P0691: Fan1 Control Circuit Low
Radiator cooling fan relay No.1 drive circuit is shorted to ground.
(3 D/C detection logic but MIL does not light up)
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
Radiator cooling fan relay No.2 power supply circuit (switch side)
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
8.5 V < battery < 16 V
Connect SUZUKI scan tool to DLC.
Display “ECT” of “Data List” mode on SUZUKI scan tool.
Keep engine at idle speed until engine coolant temperature reaches 98 °C (208 °F) or more.
Stop engine.
Repeat Step 2) – 4) 2 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
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

## AENLSB0A1124049 - DTC P0481 / P0693 / P0694
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124049.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0481 / P0693 / P0694
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0481: Fan2 Control Circuit
Radiator cooling fan relay No.2 drive circuit is open.
(3 D/C detection logic but MIL does not light up)
Radiator cooling fan relay No.2 (coil side) and/or its circuit
ECM
P0693: Fan2 Control Circuit Low
Radiator cooling fan relay No.2 drive circuit is shorted to ground.
(3 D/C detection logic but MIL does not light up)
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
Radiator cooling fan relay No.2 power supply circuit (switch side)
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
8.5 V < battery < 16 V
Connect SUZUKI scan tool to DLC.
Display “ECT” of “Data List” mode on SUZUKI scan tool.
Race engine so that engine coolant temperature reaches 103 °C (217 °F) or more.
Stop engine.
Repeat Step 2) – 4) 2 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
Radiator cooling fan relay No.2 power supply circuit (coil side) check
Set ignition “OFF”, remove radiator cooling fan relay No.2.
Check for proper terminal connection to radiator cooling fan relay No.2 connector.
If connection is OK, set ignition “ON”.
Check that voltage between each of “B1” and ground is battery voltage.
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

## AENLSB0A1124050 - DTC P0500
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124050.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0500
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0500: Vehicle Speed Sensor “A”
Any of the following conditions is met.
Vehicle speed is slower than 4 km/h (2 mile/h) for 12 sec. at fuel cut condition.
Vehicle speed is not inputted by CAN communication.
Wheel speed sensor error massage is received from ESP ® control module.
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
With engine speed at 1,000 to 4,250 rpm drive vehicle at 60 km/h (37 mile/h) constantly for 1 min. or more at 5th gear. (Keep throttle valve opening constant in this step.)
Release accelerator pedal, and keep vehicle coasting for 15 sec. in engine braking condition. (Fuel cut)
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
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

## AENLSB0A1124051 - DTC P0504 / P0571 / P0572 / P0573 / P0703
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124051.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0504 / P0571 / P0572 / P0573 / P0703
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0504: Brake Switch “A” / “B” Correlation
Brake light switch signal does not correlate with brake switch signal.
(3 D/C detection logic but MIL does not light up)
Brake light switch / brake switch and/or its circuit
ECM
P0571: Brake Switch “A” Circuit
Brake light switch signal does not change for specified time.
(1 D/C detection logic)
P0572: Brake Switch Low
Brake light switch signal / brake switch signal is OFF when brake pedal is depressed.
(3 D/C detection logic)
P0573: Brake Switch High
Brake light switch signal / brake switch signal is ON when brake pedal is released.
(3 D/C detection logic)
P0703: Brake Switch “B” Circuit
Brake switch signal does not change for specified time.
(1 D/C detection logic)
Circuit Diagram
[A]:
Non-DSBS model
B1:
Brake light switch power supply circuit
3.
Brake switch
[B]:
DSBS model
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
“STOP” fuse
A2:
Brake switch signal circuit
2.
Brake light switch / brake switch
7.
“IG1 SIG” fuse
DTC Confirmation Procedure
P0504 / P0571 / P0703
Run engine at idle speed.
Depress and release brake pedal 20 times.
When depressing or releasing brake pedal, check indication on “Brake Switch” in “Data List” mode on SUZUKI scan tool.
P0572 / P0573
Run engine at idle speed.
Depress brake pedal for 10 sec.
Release brake pedal for 2 min.
Repeat step 2) – 3) 10 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
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

## AENLSB0A1124053 - DTC P0530
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124053.xml
Tree scopes: unscoped
Outgoing references: none

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

## AENLSB0A1124054 - DTC P0562 / P0563
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124054.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0562 / P0563
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0562: System Voltage Low
Main power supply circuit voltage is less than 9.8 V for 10 sec. with engine running.
(3 D/C detection logic)
ECM power supply circuit and/or ground circuit
Charging system
ECM
P0563: System Voltage High
Main power supply circuit voltage is higher than 16.5 V for 10 sec. with engine running.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
L4:
Main power supply circuit 3
13.
TP sensor (main)
A1:
APP sensor (main) power supply circuit
M1:
Ignition signal circuit
14.
TP sensor (sub)
A2:
APP sensor (sub) power supply circuit
N1:
ECM ground circuit 1
15.
Electric load current sensor
B1:
MAF sensor with IAT sensor-1 power supply circuit
N2:
ECM ground circuit 2
16.
Battery temperature sensor
C1:
Boost pressure sensor with IAT sensor-2 power supply circuit
N3:
ECM ground circuit 3
17.
Brake stroke sensor
D1:
GPF pressure sensor power supply circuit
1.
ECM
18.
Oil pressure and temperature sensor
E1:
Fuel pressure sensor and MAP sensor power supply circuit
2.
APP sensor
19.
Main relay
F1:
A/C refrigerant pressure sensor power supply circuit
3.
APP sensor (main)
20.
“FI MAIN” fuse
G1:
TP sensor power supply circuit
4.
APP sensor (sub)
21.
“INJ DRV” fuse
H1:
Electric load current sensor power supply circuit
5.
MAF sensor with IAT sensor-1
22.
IG11 relay
I1:
Brake stroke sensor power supply circuit
6.
Boost pressure sensor with IAT sensor-2
23.
“IGN” fuse
J1:
Oil pressure and temperature sensor power supply circuit
7.
GPF pressure sensor
24.
To BCM
K1:
Main relay power supply circuit (coil side)
8.
Fuel pressure sensor
25.
“IG” fuse
K2:
Main relay power supply circuit (switch side)
9.
MAP sensor
26.
Main fuse box
L1:
Main relay drive circuit
10.
A/C refrigerant pressure sensor
27.
Battery
L2:
Main power supply circuit 1
11.
Electric throttle body assembly
L3:
Main power supply circuit 2
12.
Throttle actuator
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Drive vehicle more than 10 km/h (6 mile/h) for 1min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
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

## AENLSB0A1124055 - DTC U2300
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124055.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC U2300
DTC Detecting Condition and Trouble Area
After a reprogramming of ECM is executed, if DTC U2300 is indicated, it is possible that the reprogramming of ECM is not completed correctly.
DTC detecting condition
Trouble area
U2300: Control Module Programming Error
ECM internal failure (data programming error)
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
Is DTC U2300 still detected?
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

## AENLSB0A1124056 - DTC P0606
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124056.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0606
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0606: Control Module Processor
ECM internal processor failure
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

## AENLSB0A1124057 - DTC P0607
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124057.xml
Tree scopes: unscoped
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
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0607 still detected?
Go to Step 2.
Check for intermittent trouble.
ECM power supply and ground circuit check
Check ECM power supply and ground circuits.
Is check result OK?
Replace ECM and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0A1124058 - DTC P0645 / P0646 / P0647
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124058.xml
Tree scopes: unscoped
Outgoing references: none

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

## AENLSB0A1124060 - DTC P1693
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124060.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P1693
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1693: Equipment Information Mismatched
ECM detects incorrect vehicle variant data from ESP ® control module and combination meter.
(1 D/C detection logic but MIL does not light up)
Combination meter
ESP ® control module
ECM
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
DTC check for combination meter
Check DTC in combination meter.
Is check result OK?
Go to Step 3.
Go to troubleshooting for applicable DTC.
DTC check for ESP® control module
Check DTC in ESP ® control module.
Is check result OK?
Go to Step 4.
Go to troubleshooting for applicable DTC.
Combination meter specification check
Check that combination meter with the correct part number is installed.
Is check result OK?
Go to Step 5.
Replace combination meter and recheck DTC.
ESP® control module specification check
Check that ESP ® control module with the correct part number is installed.
Is check result OK?
Replace ECM and recheck DTC.
Replace ESP ® control module and recheck DTC.

---

## AENLSB0A1124061 - DTC P2100
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124061.xml
Tree scopes: unscoped
Outgoing references: none

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

## AENLSB0A1124062 - DTC P2101 / P2119
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124062.xml
Tree scopes: unscoped
Outgoing references: none

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
.
DTC recheck
Clear DTC.
Perform electric throttle control system calibration.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure” and recheck DTC.
Is DTC P2101 / P2119 still detected?
Go to Step 3.
End.
Throttle actuator drive circuit check
Check throttle actuator drive circuits according to Step 2 under
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

## AENLSB0A1124063 - DTC P2122 / P2123
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124063.xml
Tree scopes: unscoped
Outgoing references: none

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
Repair or replace APP sensor (main) signal circuit.
APP sensor check
Check APP sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace accelerator pedal assembly (incorporating APP sensor).

---

## AENLSB0A1124064 - DTC P2127 / P2128
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124064.xml
Tree scopes: unscoped
Outgoing references: none

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

## AENLSB0A1124065 - DTC P2135
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124065.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P2135
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P2135: Throttle / Pedal Position Sensor / Switch “A” / “B” Voltage Correlation
Difference between TP sensor (main) signal and TP sensor (sub) signal is higher than specified value.
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
System voltage (P0562 and P0563)
Set ignition “ON”.
Keep accelerator pedal at fully depressed position for 2 sec.
Release accelerator pedal for 2 sec
Repeat Step 2) – 3) 3 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
Wire harness check
Check the following points.
“B1”, “B2” and “B4” circuits: Refer to Step 2 – 4 under
.
“B3” circuit: Refer to Step 4 under
.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
TP sensor check
Check TP sensor referring to “TP Sensor Performance Check” under
.
Is check result OK?
Replace ECM and recheck DTC.
Replace electric throttle body assembly.

---

## AENLSB0A1124066 - DTC P2138
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124066.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P2138
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P2138: Throttle / Pedal Position Sensor / Switch “D” / “E” Voltage Correlation
Difference between half of APP sensor (main) signal and APP sensor (sub) signal is more than specified value.
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
.
Wire harness check
Check the following points.
“A1”, “A2” and “A3” circuits: Refer to Step 3 – 5 under
.
“B1”, “B2” and “B3” circuits: Refer to Step 3 – 5 under
.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
APP sensor check
Check APP sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace accelerator pedal assembly.

---

## AENLSB0A1124067 - DTC P2176
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124067.xml
Tree scopes: unscoped
Outgoing references: none

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
.
“B3” circuit: Refer to Step 4 under
.
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
TP sensor check
Check TP sensor referring to “Throttle Position (TP) Sensor Performance Check” under
.
Is check result OK?
Replace ECM and recheck DTC.
Replace electric throttle body assembly.

---

## AENLSB0A1124069 - DTC P2226 / P2227
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124069.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P2226 / P2227
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P2226: Barometric Pressure Sensor “A” Circuit
Barometric pressure sensor and/or its circuit malfunction (open, short to power supply or short to ground) is detected.
(1 D/C detection logic)
Barometric pressure sensor in ECM
P2227: Barometric Pressure Sensor “A” Circuit Range / Performance
Any of the following conditions is met.
Sensor signal is out of specified range.
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
.
ECM power supply and ground circuit check
Check ECM power supply and ground circuits.
Is check result OK?
Replace ECM and recheck DTC.
Repair ECM power supply and ground circuits.

---

## AENLSB0A1124070 - DTC P2237 / P2243 / P2251
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124070.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P2237 / P2243 / P2251
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P2237: O2 Sensor Positive Current Control Circuit / Open (Bank1 Sensor1)
A/F sensor signal circuit is open.
(3 D/C detection logic)
A/F sensor and/or its circuit
A/F sensor heater
Air intake system
Exhaust system
ECM
P2243: O2 Sensor Reference Voltage Circuit / Open (Bank1 Sensor1)
A/F sensor signal circuit is open.
(3 D/C detection logic)
P2251: O2 Sensor Negative Current Control Circuit / Open
A/F sensor signal circuit is open.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
A5:
A/F sensor heater drive circuit
1.
A/F sensor
A1:
A/F sensor heater power supply circuit
B1:
HO2S heater power supply circuit
2.
HO2S
A2:
A/F sensor signal circuit 1
B2:
HO2S signal circuit
3.
ECM
A3:
A/F sensor signal circuit 2
B3:
HO2S ground circuit
4.
Shield wire
A4:
A/F sensor signal circuit 3
B4:
HO2S heater drive circuit
5.
A/F signal processing unit
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
Battery voltage > 11 V
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
A/F sensor heater (P0030, P0031 and P0032)
Warm up engine to normal operating temperature.
Run engine at idle speed for 1 min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
DTC check
Is there any DTC(s) other than P2237, P2243 or P2251?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Exhaust system and air intake system check
Check exhaust system and air intake system for clogging or leakage.
Is check result OK?
Go to Step 4.
Repair or replace defective part.
A/F sensor signal circuit check
Check “A2”, “A3” and “A4” circuits according to Step 3 under
.
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
A/F sensor heater check
Check A/F sensor heater.
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is check result OK?
Go to Step 6.
Replace A/F sensor.
DTC recheck
Replace A/F sensor.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P2237, P2243 or P2251 still detected?
Replace ECM and recheck DTC.
End.

---

## AENLSB0A1124071 - DTC P2263
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124071.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P2263
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P2263: Turbocharger / Supercharger Boost System Performance
Any of the following conditions is met.
Measured boost pressure is far above targeted boost pressure for specified time.
Measured boost pressure is far below targeted boost pressure for specified time.
(3 D/C detection logic)
Boost pressure sensor and/or its circuit
Air intake system
Exhaust system
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
ABV (P0033, P0034 and P0035)
Barometric pressure sensor (P2226 and P2227)
TP sensor (P0122, P0123, P0222, P0223 and P2135)
Accelerate vehicle under the following conditions for 10 sec.
Shift position: 5th gear
Accelerator pedal: Depressed by a half of completely depressed position
Engine speed: 3,000 rpm or more
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
DTC check
Is there any DTC(s) other than P2263?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Exhaust system and air intake system check
Check exhaust system and air intake system for clogging or leakage.
Is check result OK?
Go to Step 4.
Repair or replace defective part.
Boost pressure sensor circuit check
Check “A1”, “A2” and “A3” circuits according to Step 2 – 4 under
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

## AENLSB0A1124072 - DTC P226D
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124072.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P226D
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P226D: Particulate Filter Deteriorated / Missing Substrate Bank1
GPF pressure during acceleration is lower than the specified value.
(1 D/C detection logic but MIL does not light up)
Exhaust system
GPF pressure sensor hose
GPF pressure sensor
Catalytic converter with GPF
ECM
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test using 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
GPF pressure sensor (P2454 and P2455)
Drive vehicle at 100 km/h (62 mile/h) with 4th gear.
Release accelerator pedal till vehicle speed reached 70 km/h (44 mile/h) with 4th gear.
Depress accelerator pedal completely for 5 sec. till vehicle speed reached 100 km/h (62 mile/h) with 4th gear.
Repeat step 2) and 3) for more than 5 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
DTC check
Is there any DTC(s) other than P226D?
Go to troubleshooting for applicable DTC.
Go to Step 3.
GPF pressure sensor hose check
Check GPF pressure sensor hoses are installed correctly to the sensor.
Is check result OK?
Go to Step 4.
Install GPF pressure sensor hoses correctly.
GPF pressure sensor check
Check GPF pressure sensor.
Is check result OK?
Go to Step 5.
Replace GPF pressure sensor.
DTC recheck
Replace catalytic converter with GPF.
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P226D still detected?
Replace ECM and recheck DTC.
End. (Catalytic converter with GPF was faulty)

---

## AENLSB0A1124073 - DTC P2454 / P2455
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124073.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P2454 / P2455
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P2454: Particulate Filter Pressure Sensor “A” Circuit Low
Output voltage of GPF pressure sensor signal circuit is lower than 0.02 V for 5 sec.
(3 D/C detection logic)
GPF pressure sensor and/or its circuit
ECM
P2455: Particulate Filter Pressure Sensor “A” Circuit High
Output voltage of GPF pressure sensor signal circuit is higher than 4.9 V for 5 sec.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
A2:
GPF pressure sensor signal circuit
1.
GPF pressure sensor
A1:
GPF pressure sensor power supply circuit
A3:
GPF pressure sensor ground circuit
2.
ECM
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
Battery voltage > 11 V
Run engine at idle speed for 1 min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
GPF pressure sensor power supply circuit check
With ignition “OFF”, disconnect GPF pressure sensor connector.
Check for proper terminal connection to GPF pressure sensor connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and “A3” is approx. 5 V.
Is check result OK?
Go to Step 4.
Go to Step 3.
GPF pressure sensor ground circuit check
Check that voltage between “A1” and ground is approx. 5 V.
Is check result OK?
Repair or replace “A3” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Repair or replace “A1” circuit.
If circuit is OK, replace ECM and recheck DTC.
GPF pressure sensor signal circuit check
With ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A2” circuit terminal and other terminal at GPF pressure sensor connector: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
GPF pressure sensor check
Check GPF pressure sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace GPF pressure sensor.

---

## AENLSB0A1124074 - DTC P2463
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124074.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P2463
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P2463: Particulate Filter Restriction - Soot Accumulation Bank1
Soot quantity is higher than specified value.
(1 D/C detection logic but MIL does not light up)
Exhaust system
GPF pressure sensor hose
GPF pressure sensor
Catalytic converter with GPF
ECM
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test using 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
ECT sensor (P0116, P0117 and P0118)
Vehicle speed sensor (P0500)
APP sensor (P2122, P2123, P2127, P2128 and P2138)
GPF pressure sensor (P2454 and P2455)
Drive vehicle at 70 km/h (44 mile/h) with 3rd gear.
Release accelerator pedal till vehicle speed reached 50 km/h (31 mile/h) with 3rd gear.
Depress accelerator pedal by more than half of completely depressed position (more than 60% of accelerator position) till vehicle speed reached 70 km/h (44 mile/h) with 3rd gear.
Repeat step 2) and 3) for more than 5 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
DTC check
Is there any DTC(s) other than P2463?
Go to troubleshooting for applicable DTC.
Go to Step 3.
GPF pressure sensor hose check
Check GPF pressure sensor hoses are installed correctly to the sensor.
Is check result OK?
Go to Step 4.
Install GPF pressure sensor hoses correctly.
GPF pressure sensor check
Check GPF pressure sensor.
Is check result OK?
Go to Step 5.
Replace GPF pressure sensor.
DTC recheck
Perform GPF after-sales regeneration.
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P2463 still detected?
Replace ECM and recheck DTC.
End.

---

## AENLSB0A1124075 - DTC P24A4
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124075.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P24A4
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P24A4: Particulate Filter Restriction - Soot Accumulation Too High Bank1
GPF pressure transition during acceleration is higher than the specified value.
(1 D/C detection logic but MIL does not light up)
GPF pressure sensor hose
GPF pressure sensor
Catalytic converter with GPF
ECM
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test using 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
ECT sensor (P0116, P0117 and P0118)
Vehicle speed sensor (P0500)
APP sensor (P2122, P2123, P2127, P2128 and P2138)
GPF pressure sensor (P2454 and P2455)
Drive vehicle at 70 km/h (44 mile/h) with 3rd gear.
Release accelerator pedal till vehicle speed reached 50 km/h (31 mile/h) with 3rd gear.
Depress accelerator pedal by more than half of completely depressed position (more than 60% of accelerator position) till vehicle speed reached 70 km/h (44 mile/h) with 3rd gear.
Repeat step 2) and 3) for more than 5 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
DTC check
Is there any DTC(s) other than P24A4?
Go to troubleshooting for applicable DTC.
Go to Step 3.
GPF pressure sensor hose check
Check GPF pressure sensor hoses are installed correctly to the sensor.
Is check result OK?
Go to Step 4.
Install GPF pressure sensor hoses correctly.
GPF pressure sensor check
Check GPF pressure sensor.
Is check result OK?
Go to Step 5.
Replace GPF pressure sensor.
DTC recheck
Perform GPF after-sales regeneration.
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P24A4 still detected?
Go to Step 6.
End.
DTC recheck
Replace catalytic converter with GPF.
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P24A4 still detected?
Replace ECM and recheck DTC.
End. (Catalytic converter with GPF was faulty)

---

## AENLSB0A1124076 - DTC U0073
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124076.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC U0073
Refer to
.

---

## AENLSB0A1124078 - DTC U0121
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124078.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC U0121
Refer to
.

---

## AENLSB0A1124079 - DTC U0131
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124079.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC U0131
Refer to
.

---

## AENLSB0A1124080 - DTC U0140
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124080.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC U0140
Refer to
.

---

## AENLSB0A1124081 - DTC U0155
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124081.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC U0155
Refer to
.

---

## AENLSB0A1124082 - DTC U108A
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124082.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC U108A
Refer to
.

---

## AENLSB0A1124083 - DTC U108C
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124083.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC U108C
Refer to
.

---

## AENLSB0A1124085 - DTC U1093
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124085.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC U1093
Refer to
.

---

## AENLSB0A1124088 - Inspection of ECM and Its Circuits
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124088.xml
Tree scopes: unscoped
Outgoing references:
- AENLSB0A1124088003 -> unresolved | Fuel injector signal
- AENLSB0A1124088005 -> unresolved | Fuel injector No.2 signal and ignition coil No.2 signal
- AENLSB0A1124088007 -> unresolved | WGV-VSV signal
- AENLSB0A1124088021 -> unresolved | Variable oil pump valve signal
- AENLSB0A1124088009 -> unresolved | Throttle actuator signal
- AENLSB0A1124088016 -> unresolved | CMP sensor signal and CKP sensor signal
- AENLSB0A1124088011 -> unresolved | HO2S signal
- AENLSB0A1124088014 -> unresolved | A/F sensor heater signal
- AENLSB0A1124088003 -> unresolved | Fuel injector signal
- AENLSB0A1124088008 -> unresolved | Exhaust OCV signal
- AENLSB0A1124088009 -> unresolved | Throttle actuator signal
- AENLSB0A1124088016 -> unresolved | CMP sensor signal and CKP sensor signal
- AENLSB0A1124088050 -> unresolved | HO2S heater signal
- AENLSB0A1124088003 -> unresolved | Fuel injector signal
- AENLSB0A1124088003 -> unresolved | Fuel injector signal
- AENLSB0A1124088004 -> unresolved | Fuel injector No.1 signal and ignition coil No.1 signal
- AENLSB0A1124088003 -> unresolved | Fuel injector signal
- AENLSB0A1124088017 -> unresolved | High pressure fuel pump signal
- AENLSB0A1124088010 -> unresolved | ABV signal
- AENLSB0A1124088018 -> unresolved | Knock sensor signal
- AENLSB0A1124088056 -> unresolved | Boost pressure sensor signal
- AENLSB0A1124088057 -> unresolved | MAP sensor signal
- AENLSB0A1124088020 -> unresolved | Ignition coil signal
- AENLSB0A1124088005 -> unresolved | Fuel injector No.2 signal and ignition coil No.2 signal
- AENLSB0A1124088020 -> unresolved | Ignition coil signal
- AENLSB0A1124088006 -> unresolved | Fuel injector No.3 signal and ignition coil No.3 signal
- AENLSB0A1124088022 -> unresolved | A/F sensor signal
- AENLSB0A1124088058 -> unresolved | MAF sensor signal
- AENLSB0A1124088003 -> unresolved | Fuel injector signal
- AENLSB0A1124088006 -> unresolved | Fuel injector No.3 signal and ignition coil No.3 signal
- AENLSB0A1124088003 -> unresolved | Fuel injector signal
- AENLSB0A1124088048 -> unresolved | Fuel injector No.4 signal and ignition coil No.4 signal
- AENLSB0A1124088003 -> unresolved | Fuel injector signal
- AENLSB0A1124088016 -> unresolved | CMP sensor signal and CKP sensor signal
- AENLSB0A1124088015 -> unresolved | EVAP canister purge valve signal
- AENLSB0A1124088018 -> unresolved | Knock sensor signal
- AENLSB0A1124088020 -> unresolved | Ignition coil signal
- AENLSB0A1124088004 -> unresolved | Fuel injector No.1 signal and ignition coil No.1 signal
- AENLSB0A1124088020 -> unresolved | Ignition coil signal
- AENLSB0A1124088048 -> unresolved | Fuel injector No.4 signal and ignition coil No.4 signal
- AENLSB0A1124088022 -> unresolved | A/F sensor signal
- AENLSB0A1124088022 -> unresolved | A/F sensor signal
- AENLSB0A1124088023 -> unresolved | Piston cooling jet valve signal
- AENLSB0A1124088064 -> unresolved | Oil pressure and temperature signal
- AENLSB0A1124088012 -> unresolved | CAN communication signal
- AENLSB0A1124088012 -> unresolved | CAN communication signal
- AENLSB0A1124088051 -> unresolved | EGR valve signal
- AENLSB0A1124088024 -> unresolved | Fuel pump relay signal
- AENLSB0A1124088044 -> unresolved | Intake VVT actuator signal (VTS)
- AENLSB0A1124088046 -> unresolved | Intake VVT actuator signal (VTD)
- AENLSB0A1124088054 -> unresolved | Intake VVT actuator signal (VTP)
- AENLSB0A1124088055 -> unresolved | Intake VVT actuator signal (VTM)
- AENLSB0A1124088012 -> unresolved | CAN communication signal
- AENLSB0A1124088012 -> unresolved | CAN communication signal
- AENLSB0A1124088051 -> unresolved | EGR valve signal
- AENLSB0A1124088051 -> unresolved | EGR valve signal
- AENLSB0A1124088051 -> unresolved | EGR valve signal

Content:
Inspection of ECM and Its Circuits
Voltage Check
As each terminal voltage is affected by battery voltage, check that battery voltage is 11 V or more when ignition is “ON”.
Voltage with asterisk (*) cannot be measured with voltmeter because it is pulse signal. Use oscilloscope for its check.
Before performing this inspection, read “Precautions for ECM Circuit Inspection” under
.
[A]:
ECM connector (View: [a])
“C01” connector
Terminal No.
Wire color
Circuit
Normal voltage
Condition
C01-1*
WHT
Fuel injector No.2 drive circuit (low side)
Refer to reference waveform.
Fuel injector signal
Fuel injector No.2 signal and ignition coil No.2 signal
C01-2*
GRN
WGV-VSV drive circuit
10 to 14 V
Ignition: “ON”
Refer to reference waveform.
WGV-VSV signal
C01-3*
BLU
Variable oil pump valve drive circuit
Refer to reference waveform.
Variable oil pump valve signal
C01-4*
BRN
Throttle actuator drive circuit (open)
Refer to reference waveform.
Throttle actuator signal
C01-5*
GRN
Exhaust CMP sensor signal circuit
Approx. 0 V or 4 to 5 V
Ignition: “ON”
Refer to reference waveform.
CMP sensor signal and CKP sensor signal
C01-6
GRY
MAF sensor power supply circuit
4.5 to 5.5 V
Ignition: “ON”
C01-7
PNK
Boost pressure sensor power supply circuit
4.5 to 5.5 V
Ignition: “ON”
C01-8
LT BLU
Fuel pressure sensor and MAP sensor power supply circuit
4.5 to 5.5 V
Ignition: “ON”
C01-9
RED
TP sensor power supply circuit
4.5 to 5.5 V
Ignition: “ON”
C01-10
GRN
TP sensor (main) signal circuit
0.8 to 1.0 V
Ignition: “ON”
Accelerator pedal: Released
4.3 to 4.5 V
Ignition: “ON”
Accelerator pedal: Fully depressed
C01-11
WHT
TP sensor (sub) signal circuit
4.0 to 4.2 V
Ignition: “ON”
Accelerator pedal: Released
0.5 to 0.7 V
Ignition: “ON”
Accelerator pedal: Fully depressed
C01-12*
BRN
HO2S signal circuit
Refer to reference waveform.
HO2S signal
C01-13
BEG
HO2S shield ground circuit
Below 0.3 V
Ignition: “ON”
C01-14
—
—
—
—
C01-15*
YEL
A/F sensor heater drive circuit
Refer to reference waveform.
A/F sensor heater signal
C01-16*
BRN
Fuel injector No.2 drive circuit (high side)
Refer to reference waveform.
Fuel injector signal
C01-17
GRY
CKP sensor ground circuit
Below 0.3 V
Ignition: “ON”
C01-18*
PNK
Exhaust OCV drive circuit
10 to 14 V
Ignition: “ON”
Refer to reference waveform.
Exhaust OCV signal
C01-19*
LT GRN
Throttle actuator drive circuit (close)
Refer to reference waveform.
Throttle actuator signal
C01-20*
YEL
Intake CMP sensor signal circuit
Approx. 0 V or 4 to 5 V
Ignition: “ON”
Refer to reference waveform.
CMP sensor signal and CKP sensor signal
C01-21
BLU
ECT sensor signal circuit
3.2 to 3.6 V
Ignition: “ON”
ECT: 0 °C (32 °F)
1.0 to 1.4 V
Ignition: “ON”
ECT: 50 °C (122 °F)
0.2 to 0.5 V
Ignition: “ON”
ECT: 100 °C (212 °F)
C01-22
RED
Fuel pressure sensor signal circuit
Approx. 1.2 to 2.0 V
Engine: Idle speed after warming up
Reference fuel rail pressure: 5,500 to 10,500 kPa (56.1 to 107.1 kgf/cm 2 , 797 to 1,522 psi, 55 to 105 bar)
C01-23
LT GRN
ECT sensor and boost pressure sensor with IAT sensor-2 ground circuit
Below 0.3 V
Ignition: “ON”
C01-24
BLU
MAF sensor with IAT sensor-1 ground circuit
Below 0.3 V
Ignition: “ON”
C01-25
GRY
TP sensor shield ground circuit
Below 0.3 V
Ignition: “ON”
C01-26
BLK
TP sensor ground circuit
Below 0.3 V
Ignition: “ON”
C01-27
YEL
HO2S ground circuit
Below 0.3 V
Ignition: “ON”
C01-28
LT BLU
A/F sensor shield ground circuit
Below 0.3 V
Ignition: “ON”
C01-29
—
—
—
—
C01-30*
RED
HO2S heater drive circuit
Refer to reference waveform.
HO2S heater signal
C01-31*
BLU
Fuel injector No.3 drive circuit (high side)
Refer to reference waveform.
Fuel injector signal
C01-32*
YEL
Fuel injector No.1 drive circuit (low side)
Refer to reference waveform.
Fuel injector signal
Fuel injector No.1 signal and ignition coil No.1 signal
C01-33*
GRN
Fuel injector No.1 drive circuit (high side)
Refer to reference waveform.
Fuel injector signal
C01-34*
RED
High pressure fuel pump drive circuit
Refer to reference waveform.
High pressure fuel pump signal
C01-35
PPL
CMP sensor ground circuit
Below 0.3 V
Ignition: “ON”
C01-36*
BRN
ABV drive circuit
10 to 14 V
Ignition: “ON”
Refer to reference waveform.
ABV signal
C01-37*
WHT
Knock sensor signal circuit 1
2.3 to 2.5 V
Engine: Idle speed
Refer to reference waveform.
Knock sensor signal
C01-38
—
—
—
—
C01-39
PPL
Boost pressure sensor signal circuit
Approx. 2.0 V
Engine: Idle speed after warming up
Reference boost pressure: 101 kPa (1.03 kgf/cm 2 , 14.6 psi, 1.01 bar)
Refer to reference waveform.
Boost pressure sensor signal
C01-40
BRN
MAP sensor signal circuit
Approx. 2.0 V
Ignition: “ON”
Approx. 0.8 V
Engine: Idle speed after warming up
Barometric pressure: 101 kPa, 758 mmHg
Refer to reference waveform.
MAP sensor signal
C01-41*
LT GRN
Ignition coil No.2 drive circuit
Approx. 0 V
Ignition: “ON”
Refer to reference waveform.
Ignition coil signal
Fuel injector No.2 signal and ignition coil No.2 signal
C01-42*
BLU
Ignition coil No.3 drive circuit
Approx. 0 V
Ignition: “ON”
Refer to reference waveform.
Ignition coil signal
Fuel injector No.3 signal and ignition coil No.3 signal
C01-43*
RED
A/F sensor signal circuit 1
Refer to reference waveform.
A/F sensor signal
C01-44
—
—
—
—
C01-45*
GRN
MAF sensor signal circuit
Refer to reference waveform.
MAF sensor signal
C01-46*
RED
Fuel injector No.3 drive circuit (low side)
Refer to reference waveform.
Fuel injector signal
Fuel injector No.3 signal and ignition coil No.3 signal
C01-47*
LT BLU
Fuel injector No.4 drive circuit (low side)
Refer to reference waveform.
Fuel injector signal
Fuel injector No.4 signal and ignition coil No.4 signal
C01-48*
LT GRN
Fuel injector No.4 drive circuit (high side)
Refer to reference waveform.
Fuel injector signal
C01-49
BLU
High pressure fuel pump power supply circuit
4.5 to 5.5 V
Ignition: “ON”
C01-50*
PNK
CKP sensor signal circuit
Approx. 0 V or 4 to 5 V
Ignition: “ON”
Refer to reference waveform.
CMP sensor signal and CKP sensor signal
C01-51*
BLK
EVAP canister purge valve drive circuit
10 to 14 V
Ignition: “ON”
Refer to reference waveform.
EVAP canister purge valve signal
C01-52*
BLU
Knock sensor signal circuit 2
2.3 to 2.5 V
Engine: Idle speed
Refer to reference waveform.
Knock sensor signal
C01-53
BEG
Fuel pressure sensor and MAP sensor ground circuit
Below 0.3 V
Ignition: “ON”
C01-54
YEL
IAT sensor-1 signal circuit
2.2 to 2.6 V
Ignition: “ON”
IAT-1: 20 °C (68 °F)
1.3 to 1.7 V
Ignition: “ON”
IAT-1: 40 °C (104 °F)
C01-55
GRN
IAT sensor-2 signal circuit
2.2 to 2.6 V
Ignition: “ON”
IAT-2: 20 °C (68 °F)
1.3 to 1.7 V
Ignition: “ON”
IAT-2: 40 °C (104 °F)
C01-56*
GRY
Ignition coil No.1 drive circuit
Approx. 0 V
Ignition: “ON”
Refer to reference waveform.
Ignition coil signal
Fuel injector No.1 signal and ignition coil No.1 signal
C01-57*
PNK
Ignition coil No.4 drive circuit
Approx. 0 V
Ignition: “ON”
Refer to reference waveform.
Ignition coil signal
Fuel injector No.4 signal and ignition coil No.4 signal
C01-58*
WHT
A/F sensor signal circuit 2
Refer to reference waveform.
A/F sensor signal
C01-59*
BLK
A/F sensor signal circuit 3
Refer to reference waveform.
A/F sensor signal
C01-60*
BLU
Piston cooling jet valve drive circuit
Refer to reference waveform.
Piston cooling jet valve signal
“E01” connector
Terminal No.
Wire color
Circuit
Normal voltage
Condition
E01-1
GRN
Main power supply circuit 3
10 to 14 V
Ignition: “ON”
E01-2
BLK
ECM ground circuit 3
Below 0.3 V
Ignition: “ON”
E01-3
BEG
APP sensor (main) signal circuit
0.70 to 0.80 V
Ignition: “ON”
Accelerator pedal: Released
4.35 to 4.45 V
Ignition: “ON”
Accelerator pedal: Fully depressed
E01-4
BLU
APP sensor (main) ground circuit
Below 0.3 V
Ignition: “ON”
E01-5
BRN
APP sensor (main) power supply circuit
4.5 to 5.5 V
Ignition: “ON”
E01-6
PNK
GPF pressure sensor power supply circuit
4.5 to 5.5 V
Ignition: “ON”
E01-7
LT GRN
Brake stroke sensor power supply circuit
4.5 to 5.5 V
Ignition: “ON”
E01-8
—
—
—
—
E01-9
GRY
A/C refrigerant pressure sensor power supply circuit
4.5 to 5.5 V
Ignition: “ON”
E01-10*
GRN
Oil pressure and temperature sensor signal circuit
Refer to reference waveform.
Oil pressure and temperature signal
E01-11
BEG
Electric load current sensor signal circuit
Approx. 2.4 V
Ignition: “ON”
Approx. 1.9 V
Ignition: “ON”
Headlight: ON
Blower speed selector / switch: Max position
E01-12
PPL
Brake stroke sensor signal circuit
0.9 to 1.1 V
Engine: Idle speed after warming up
Brake pedal: Released
1.9 to 2.2 V
Engine: Idle speed after warming up
Brake pedal: Fully depressed
E01-13
—
—
—
—
E01-14
BLU
A/C refrigerant pressure sensor ground circuit
Below 0.3 V
Ignition: “ON”
E01-15
—
—
—
—
E01-16
LT GRN
Starting motor control relay signal circuit
Approx. 0 V
Ignition: “ON”
6 to 12 V
Ignition: “START”
E01-17
—
—
—
—
E01-18
—
—
—
—
E01-19
LT GRN
Cruise control command switch signal circuit
3.1 to 4.3 V
Ignition: “ON”
2.9 V
Ignition: “ON”
Distance switch: ON (Distance switch kept pushed)
2.0 to 2.4 V
Ignition: “ON”
“RES / +” switch: ON (RES / + switch kept pushed)
1.2 to 1.6 V
Ignition: “ON”
“SET / –” switch: ON (SET / – switch kept pushed)
0.88 V
Ignition: “ON”
“LIMIT” switch: ON (LIMIT switch kept pushed)
0.3 to 0.6 V
Ignition: “ON”
“CANCEL” switch: ON (CANCEL switch kept pushed)
0 to 0.2 V
Ignition: “ON”
“CRUISE” switch: ON (CRUISE switch kept pushed)
E01-20
LT BLU
GPF pressure sensor signal circuit
Approx. 0.52 V
Ignition: “ON”
Approx. 0.53 V
Engine: Idle speed after warming up
Approx. 0.50 V
Engine: Idle speed after warming up
GPF pressure sensor hose No.2: Pinching
E01-21
—
—
—
—
E01-22
—
—
—
—
E01-23
—
—
—
—
E01-24
PPL
Heater shut off valve drive circuit
11 to 15 V
Engine: Idle speed
E01-25
YEL
APP sensor (sub) signal circuit
0.325 to 0.425 V
Ignition: “ON”
Accelerator pedal: Released
2.15 to 2.25 V
Ignition: “ON”
Accelerator pedal: Fully depressed
E01-26
WHT
APP sensor (sub) ground circuit
Below 0.3 V
Ignition: “ON”
E01-27
BLK
APP sensor (sub) power supply circuit
4.5 to 5.5 V
Ignition: “ON”
E01-28
—
—
—
—
E01-29
BEG
Brake stroke sensor ground circuit
Below 0.3 V
Ignition: “ON”
E01-30
YEL
Oil pressure and temperature sensor power supply circuit
4.5 to 5.5 V
Ignition: “ON”
E01-31
BLK
GPF pressure sensor ground circuit
Below 0.3 V
Ignition: “ON”
E01-32
BLU
Oil pressure and temperature sensor ground circuit
Below 0.3 V
Ignition: “ON”
E01-33
LT BLU
Electric load current sensor power supply circuit
4.5 to 5.5 V
Ignition: “ON”
E01-34
—
—
—
—
E01-35
—
—
—
—
E01-36
—
—
—
—
E01-37
RED
A/C refrigerant pressure sensor signal circuit
0.9 to 1.3 V
Engine: Running
A/C compressor: Not operating
1.3 to 2.2 V
Engine: Running
A/C compressor: Operating
E01-38
—
—
—
—
E01-39
—
—
—
—
E01-40
—
—
—
—
E01-41
—
—
—
—
E01-42
—
—
—
—
E01-43
—
—
—
—
E01-44
—
—
—
—
E01-45
GRN
Radiator cooling fan relay No.2 drive circuit
10 to 14 V
Engine: Idle speed
ECT < 101 °C (213.8 °F)
A/C switch: OFF
Approx. 0 V
Engine: Idle speed
ECT > 103 °C (217.4 °F)
A/C switch: OFF
E01-46
BEG
Radiator cooling fan relay No.3 drive circuit
10 to 14 V
Engine: Idle speed
ECT < 101 °C (213.8 °F)
A/C switch: OFF
Approx. 0 V
Engine: Idle speed
ECT: 2 sec. after ECT > 103 °C (217.4 °F)
A/C switch: OFF
E01-47
GRN
Main power supply circuit 2
10 to 14 V
Ignition: “ON”
E01-48
BLK
ECM ground circuit 2
Below 0.3 V
Ignition: “ON”
E01-49
—
—
—
—
E01-50
YEL
Electric load current sensor and battery temperature sensor ground circuit
Below 0.3 V
Ignition: “ON”
E01-51
BRN
Cruise control command switch ground circuit
Below 0.3 V
Ignition: “ON”
E01-52
PPL
CPP No.2 switch signal circuit
10 to 14 V
Ignition: “ON”
Clutch pedal: Released
Approx. 0 V
Ignition: “ON”
Clutch pedal: Fully depressed
E01-53
GRN
CPP No.1 switch signal
Approx. 0 V
Ignition: “ON”
Clutch pedal: Fully depressed
10 to 14 V
Ignition: “ON”
Clutch pedal: Released
E01-54
PNK
Neutral position switch signal (+)
3 to 5 V
Ignition: “ON”
Gear position: “Neutral”
10 to 14 V
Ignition: “ON”
Gear position: Other than “Neutral”
E01-55
—
—
—
—
E01-56
—
—
—
—
E01-57
—
—
—
—
E01-58*
BLU
CAN (high) communication circuit 2
Refer to reference waveform.
CAN communication signal
E01-59*
WHT
CAN (low) communication circuit 1
Refer to reference waveform.
CAN communication signal
E01-60
—
—
—
—
E01-61
—
—
—
—
E01-62
—
—
—
—
E01-63
—
—
—
—
E01-64
LT GRN
Thermostat heater drive circuit
10 to 14 V
Engine: Idle speed
E01-65
—
—
—
—
E01-66*
PNK
EGR valve drive circuit 2
Refer to reference waveform.
EGR valve signal
E01-67
—
—
—
—
E01-68
RED
Fuel pump relay drive circuit
Refer to reference waveform.
Fuel pump relay signal
E01-69
—
—
—
—
E01-70
LT GRN
Radiator cooling fan relay No.1 drive circuit
10 to 14 V
Engine: Idle speed
ECT < 98 °C (208.4 °F)
A/C switch: OFF
Approx. 0 V
Engine: Idle speed
ECT > 100.0 °C (212.0 °F)
A/C switch: OFF
E01-71
GRN
Main power supply circuit 1
10 to 14 V
Ignition: “ON”
E01-72
BLK
ECM ground circuit 1
Below 0.3 V
Ignition: “ON”
E01-73
PNK
Main relay drive circuit
Approx. 0 V
Ignition: “ON”
10 to 14 V
Ignition: 30 sec. after ignition “OFF”
E01-74
—
—
—
—
E01-75
RED
Neutral position switch signal (–)
3 to 5 V
Ignition: “ON”
Gear position: “Neutral”
Approx. 0 V
Ignition: “ON”
Gear position: Other than “Neutral”
E01-76
LT BLU
Brake light switch signal circuit
Approx. 0 V
Ignition: “ON”
Brake pedal: Released
10 to 14 V
Ignition: “ON”
Brake pedal: Fully depressed
E01-77*
GRY
Intake VVT actuator signal circuit (VTS)
Refer to reference waveform.
Intake VVT actuator signal (VTS)
E01-78*
WHT
Intake VVT actuator signal circuit (VTD)
Refer to reference waveform.
Intake VVT actuator signal (VTD)
E01-79*
BEG
Intake VVT actuator signal circuit (VTP)
Refer to reference waveform.
Intake VVT actuator signal (VTP)
E01-80*
PNK
Intake VVT actuator signal circuit (VTM)
Refer to reference waveform.
Intake VVT actuator signal (VTM)
E01-81
—
—
—
—
E01-82*
WHT
CAN (low) communication circuit 2
Refer to reference waveform.
CAN communication signal
E01-83*
RED
CAN (high) communication circuit 1
Refer to reference waveform.
CAN communication signal
E01-84
—
—
—
—
E01-85
PNK
Battery temperature sensor signal circuit
2.0 to 2.3 V
Ignition: “ON”
Temperature in the vicinity of battery: 25 °C (77 °F)
0.3 to 0.5 V
Ignition: “ON”
Temperature in the vicinity of battery: 90 °C (194 °F)
E01-86
—
—
—
—
E01-87
—
—
—
—
E01-88*
GRN
EGR valve drive circuit 1
Refer to reference waveform.
EGR valve signal
E01-89*
BRN
EGR valve drive circuit 4
Refer to reference waveform.
EGR valve signal
E01-90*
PPL
EGR valve drive circuit 3
Refer to reference waveform.
EGR valve signal
E01-91
BLU
Brake switch signal circuit
10 to 14 V
Ignition: “ON”
Brake pedal: Released
Approx. 0 V
Ignition: “ON”
Brake pedal: Fully depressed
E01-92
WHT
Ignition signal circuit
Approx. 0 V
Ignition: “OFF” or “ACC”
10 to 14 V
Ignition: “ON”
E01-93
—
—
—
—
E01-94
BRN
A/C compressor relay drive circuit
10 to 14 V
Engine: Running
A/C compressor: Not operating
Approx. 0 V
Engine: Running
A/C compressor: Operating
Reference Waveform
Display includes the following types of data:
[A]:
Waveform of channel 1
[C]:
VOLT/DIV of each channel
[B]:
Ground level of each channel
[D]:
TIME/DIV
Waveform varies depending on measurement condition and vehicle spec.
Fuel injector signal
Fuel injector No.1 signal (high side) (1):
Channel
Probe
Terminal No.
1
+
C01-33
–
E01-72
Fuel injector No.1 signal (low side) (2):
Channel
Probe
Terminal No.
2
+
C01-32
–
E01-72
Fuel injector No.4 signal (high side) (3):
Channel
Probe
Terminal No.
1
+
C01-48
–
E01-72
Fuel injector No.4 signal (low side) (4):
Channel
Probe
Terminal No.
2
+
C01-47
–
E01-72
Fuel injector No.2 signal (high side) (1):
Channel
Probe
Terminal No.
1
+
C01-16
–
E01-72
Fuel injector No.2 signal (low side) (2):
Channel
Probe
Terminal No.
2
+
C01-1
–
E01-72
Fuel injector No.3 signal (high side) (3):
Channel
Probe
Terminal No.
1
+
C01-31
–
E01-72
Fuel injector No.3 signal (low side) (4):
Channel
Probe
Terminal No.
2
+
C01-46
–
E01-72
Measurement condition
Engine: Idle speed after warming up
3.
Signal is outputted, but fuel is not injected.
4.
Fuel is injected.
Fuel injector No.1 signal and ignition coil No.1 signal
Fuel injector No.1 signal (low side) (1):
Channel
Probe
Terminal No.
1
+
C01-32
–
E01-72
Ignition coil No.1 signal (2):
Channel
Probe
Terminal No.
2
+
C01-56
–
E01-72
Intake CMP sensor signal (3):
Channel
Probe
Terminal No.
3
+
C01-20
–
E01-72
CKP sensor signal (4):
Channel
Probe
Terminal No.
4
+
C01-50
–
E01-72
Measurement condition
Engine: Idle speed after warming up
5.
Signal is outputted, but fuel is not injected.
7.
Camshaft 360° angle
6.
Fuel is injected.
8.
Crankshaft 720° angle
Fuel injector No.2 signal and ignition coil No.2 signal
Fuel injector No.2 signal (low side) (1):
Channel
Probe
Terminal No.
1
+
C01-1
–
E01-72
Ignition coil No.2 signal (2):
Channel
Probe
Terminal No.
2
+
C01-41
–
E01-72
Intake CMP sensor signal (3):
Channel
Probe
Terminal No.
3
+
C01-20
–
E01-72
CKP sensor signal (4):
Channel
Probe
Terminal No.
4
+
C01-50
–
E01-72
Measurement condition
Engine: Idle speed after warming up
5.
Signal is outputted, but fuel is not injected.
7.
Camshaft 360° angle
6.
Fuel is injected.
8.
Crankshaft 720° angle
Fuel injector No.3 signal and ignition coil No.3 signal
Fuel injector No.3 signal (low side) (1):
Channel
Probe
Terminal No.
1
+
C01-46
–
E01-72
Ignition coil No.3 signal (2):
Channel
Probe
Terminal No.
2
+
C01-42
–
E01-72
Intake CMP sensor signal (3):
Channel
Probe
Terminal No.
3
+
C01-20
–
E01-72
CKP sensor signal (4):
Channel
Probe
Terminal No.
4
+
C01-50
–
E01-72
Measurement condition
Engine: Idle speed after warming up
5.
Fuel is injected.
7.
Crankshaft 720° angle
6.
Camshaft 360° angle
Fuel injector No.4 signal and ignition coil No.4 signal
Fuel injector No.4 signal (low side) (1):
Channel
Probe
Terminal No.
1
+
C01-47
–
E01-72
Ignition coil No.4 signal (2):
Channel
Probe
Terminal No.
2
+
C01-57
–
E01-72
Intake CMP sensor signal (3):
Channel
Probe
Terminal No.
3
+
C01-20
–
E01-72
CKP sensor signal (4):
Channel
Probe
Terminal No.
4
+
C01-50
–
E01-72
Measurement condition
Engine: Idle speed after warming up
5.
Signal is outputted, but fuel is not injected.
7.
Camshaft 360° angle
6.
Fuel is injected.
8.
Crankshaft 720° angle
WGV-VSV signal
Channel
Probe
Terminal No.
1
+
C01-2
–
E01-72
Measurement condition
WGV-VSV: 10% open (using active test of SUZUKI scan tool)
Variable oil pump valve signal
Channel
Probe
Terminal No.
1
+
C01-3
–
E01-72
Measurement condition
Engine: Idle speed after warming up
Throttle actuator signal
Throttle actuator signal (open) (1):
Channel
Probe
Terminal No.
1
+
C01-4
–
E01-72
Throttle actuator signal (close) (2):
Channel
Probe
Terminal No.
2
+
C01-19
–
E01-72
Measurement condition
Engine: Idle speed after warming up
Measurement condition
Engine: Racing at 3,000 rpm after warming up
CMP sensor signal and CKP sensor signal
Intake CMP sensor signal (1):
Channel
Probe
Terminal No.
1
+
C01-20
–
E01-72
Exhaust CMP sensor signal (2):
Channel
Probe
Terminal No.
2
+
C01-5
–
E01-72
CKP sensor signal (3):
Channel
Probe
Terminal No.
3
+
C01-50
–
E01-72
Measurement condition
Engine: Idle speed after warming up
HO2S signal
Channel
Probe
Terminal No.
1
+
C01-12
–
E01-72
Measurement condition
Engine: Warm up engine → Keep engine speed at 3,000 rpm for a specified period of time → Release accelerator pedal fully
1.
Engine: Racing
2.
Engine: Idle speed
A/F sensor heater signal
Channel
Probe
Terminal No.
1
+
C01-15
–
E01-72
Measurement condition
Engine: Idle speed after warming up
1.
A/F sensor heater signal
Exhaust OCV signal
Channel
Probe
Terminal No.
1
+
C01-18
–
E01-72
Measurement condition
Engine: Racing after warming up
Accelerator pedal: Fully depressed position
1.
OCV signal
HO2S heater signal
Channel
Probe
Terminal No.
1
+
C01-30
–
E01-72
Measurement condition
Engine: Idle speed after warming up
High pressure fuel pump signal
Channel
Probe
Terminal No.
1
+
C01-34
–
E01-72
Measurement condition
Engine: Idle speed after warming up
ABV signal
Channel
Probe
Terminal No.
1
+
C01-36
–
E01-72
Measurement condition
ABV: ON → OFF → ON (using active test of SUZUKI scan tool)
1.
ON
2.
OFF
Knock sensor signal
Channel
Probe
Terminal No.
1
+
C01-37
C01-52
–
E01-72
Measurement condition
Engine: Racing at 2,500 rpm after warming up
Boost pressure sensor signal
Channel
Probe
Terminal No.
1
+
C01-39
–
E01-72
Measurement condition
Engine: Racing speed after warming up
1.
Boost pressure sensor signal
3.
Accelerator pedal: Released
2.
Accelerator pedal: Fully depressed
MAP sensor signal
Channel
Probe
Terminal No.
1
+
C01-40
–
E01-72
Measurement condition
Engine: Racing speed after warming up
1.
MAP sensor signal
3.
Accelerator pedal: Fully depressed
2.
Accelerator pedal: Released
MAF sensor signal
Channel
Probe
Terminal No.
1
+
C01-45
–
E01-72
Measurement condition
Engine: Idle speed after warming up
1.
MAF sensor signal
Engine: Running at 2,000 rpm after warming up
1.
MAF sensor signal
A/F sensor signal
A/F sensor signal 1 (1):
Channel
Probe
Terminal No.
1
+
C01-43
–
E01-72
A/F sensor signal 2 (2):
Channel
Probe
Terminal No.
2
+
C01-58
–
E01-72
A/F sensor signal 3 (3):
Channel
Probe
Terminal No.
3
+
C01-59
–
E01-72
Measurement condition
Engine: Idle speed after warming up
EVAP canister purge valve signal
Channel
Probe
Terminal No.
1
+
C01-51
–
E01-72
Measurement condition
EVAP canister purge valve: 10% open (using active test of SUZUKI scan tool)
Ignition coil signal
Channel
Probe
Terminal No.
1
+
C01-56 (No.1)
C01-41 (No.2)
C01-42 (No.3)
C01-57 (No.4)
–
E01-72
Measurement condition
Engine: Idle speed after warming up
1.
Ignition coil signal
Piston cooling jet valve signal
Channel
Probe
Terminal No.
1
+
C01-60
–
E01-72
Measurement condition
Engine: Idle speed after warming up
Oil pressure and temperature signal
Channel
Probe
Terminal No.
1
+
E01-10
–
E01-72
Measurement condition
Engine: Idle speed after warming up
CAN communication signal
CAN (high) communication signal (1):
Channel
Probe
Terminal No.
1
+
E01-83
E01-58
–
E01-72
CAN (low) communication signal (2):
Channel
Probe
Terminal No.
2
+
E01-59
E01-82
–
E01-72
Measurement condition
Ignition: “ON”
EGR valve signal
EGR valve signal 1 (1):
Channel
Probe
Terminal No.
1
+
E01-88
–
E01-72
EGR valve signal 2 (2):
Channel
Probe
Terminal No.
2
+
E01-66
–
E01-72
EGR valve signal 3 (3):
Channel
Probe
Terminal No.
3
+
E01-90
–
E01-72
EGR valve signal 4 (4):
Channel
Probe
Terminal No.
4
+
E01-89
–
E01-72
Measurement condition
Engine: Right after engine start
Fuel pump relay signal
Channel
Probe
Terminal No.
1
+
E01-68
–
E01-72
Measurement condition
Ignition: “OFF” → “ON” → “START”
1.
Fuel pump relay signal
3.
Ignition: “ON”
2.
Ignition: “OFF”
4.
Ignition: “START”
Intake VVT actuator signal (VTS)
Channel
Probe
Terminal No.
1
+
E01-77
–
E01-72
Measurement condition
Engine: Idle speed after warming up
Engine: Running at 2,000 rpm after warming up
Intake VVT actuator signal (VTD)
Channel
Probe
Terminal No.
1
+
E01-78
–
E01-72
Measurement condition
Engine: Idle speed after warming up
Engine: Running at 2,000 rpm after warming up
Intake VVT actuator signal (VTP)
Channel
Probe
Terminal No.
1
+
E01-79
–
E01-72
Measurement condition
Engine: Idle speed after warming up
Engine: Running at 2,000 rpm after warming up
Intake VVT actuator signal (VTM)
Channel
Probe
Terminal No.
1
+
E01-80
–
E01-72
Measurement condition
Engine: Idle speed after warming up

---

## AENLSB0A1124089 - ECM Power Supply and Ground Circuit Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124089.xml
Tree scopes: unscoped
Outgoing references: none

Content:
ECM Power Supply and Ground Circuit Check
Circuit Diagram
[A]:
ECM connector (View: [a])
L4:
Main power supply circuit 3
13.
TP sensor (main)
A1:
APP sensor (main) power supply circuit
M1:
Ignition signal circuit
14.
TP sensor (sub)
A2:
APP sensor (sub) power supply circuit
N1:
ECM ground circuit 1
15.
Electric load current sensor
B1:
MAF sensor with IAT sensor-1 power supply circuit
N2:
ECM ground circuit 2
16.
Battery temperature sensor
C1:
Boost pressure sensor with IAT sensor-2 power supply circuit
N3:
ECM ground circuit 3
17.
Brake stroke sensor
D1:
GPF pressure sensor power supply circuit
1.
ECM
18.
Oil pressure & temperature sensor
E1:
Fuel pressure sensor and MAP sensor power supply circuit
2.
APP sensor
19.
Main relay
F1:
A/C refrigerant pressure sensor power supply circuit
3.
APP sensor (main)
20.
“FI MAIN” fuse
G1:
TP sensor power supply circuit
4.
APP sensor (sub)
21.
“INJ DRV” fuse
H1:
Electric load current sensor power supply circuit
5.
MAF sensor with IAT sensor-1
22.
IG11 relay
I1:
Brake stroke sensor power supply circuit
6.
Boost pressure sensor with IAT sensor-2
23.
“IGN” fuse
J1:
Oil pressure and temperature sensor power supply circuit
7.
GPF pressure sensor
24.
To BCM
K1:
Main relay power supply circuit (coil side)
8.
Fuel pressure sensor
25.
“IG” fuse
K2:
Main relay power supply circuit (switch side)
9.
MAP sensor
26.
Main fuse box
L1:
Main relay drive circuit
10.
A/C refrigerant pressure sensor
27.
Battery
L2:
Main power supply circuit 1
11.
Electric throttle body assembly
L3:
Main power supply circuit 2
12.
Throttle actuator
Circuit Description
When ignition is set to “ON”, the main relay turns on (contacts close) and the main power is supplied to ECM. ECM then supplies 5 V power to the following sensors: A/C refrigerant pressure sensor, APP sensor, TP sensor, MAF sensor with IAT sensor-1, boost pressure sensor with IAT sensor-2, GPF pressure sensor, fuel pressure sensor, brake stroke sensor, electric load current sensor, oil pressure and temperature sensor and MAP sensor.
Troubleshooting
Before troubleshooting, read “Precautions for ECM Circuit Inspection” under
.
Before performing, check that related fuses of ECM power circuit have not blown out.
If any fuse has blown out, replace the fuse and check circuits connected to the blown fuse for short circuit to ground.
Battery check
Check that battery voltage is 12 V or more.
Is check result OK?
Go to Step 2.
Check battery and generator.
Battery:
Charging:
Main relay power supply check
With ignition “OFF”, remove main relay (1) from individual circuit fuse box No.1.
Check for proper terminal connection to main relay connector.
If connection is OK, set ignition “ON”.
Check that voltage between each of “K1” and “K2” circuit and ground is battery voltage.
Is check result OK?
Go to Step 3.
“FI MAIN” fuse blown:
Replace “FI MAIN” fuse and check “K1” and “K2” circuits again. If check result is not OK, repair or replace defective wire harness.
“FI MAIN” fuse not blown:
Repair or replace defective wire harness.
Main relay check
Check main relay.
Is check result OK?
Go to Step 4.
Replace main relay.
Ignition signal circuit check
Set ignition “OFF”, install main relay to individual circuit fuse box No.1.
Disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, set ignition “ON”.
Check that voltage between “M1” and ground is battery voltage.
Is check result OK?
Go to Step 5.
Check that “IG” fuse has not blown.
If check result is OK, repair or replace defective wire harness.
Main relay drive circuit check
Set ignition “OFF”.
Check that voltage between “L1” and ground is battery voltage.
Is check result OK?
Go to Step 6.
Repair or replace defective wire harness.
Main power supply circuit check
Using service wire, ground “L1”.
Set ignition “ON”.
Check that voltage between each of “L2”, “L3” and “L4” circuit and ground is battery voltage.
Is check result OK?
Go to Step 7.
Repair or replace defective wire harness.
ECM ground circuit check
Set ignition “OFF”.
Check that resistance between each of “N1”, “N2” and “N3” circuit and ground is less than 1 Ω.
Is check result OK?
Go to Step 8.
Repair or replace defective wire harness.
Sensor power supply circuit check
Set ignition “OFF”, connect “C01” and “E01” connectors to ECM.
Disconnect connectors from APP sensor, MAF sensor with IAT sensor-1, boost pressure sensor with IAT sensor-2, GPF pressure sensor, fuel pressure sensor, MAP sensor, electric throttle body assembly, electric load current sensor, brake stroke sensor, oil pressure and temperature sensor and A/C refrigerant pressure sensor.
Check for proper terminal connection to each sensor connector.
If connections are OK, set ignition “ON”.
Check that voltage between each of the following circuits and ground is approx. 5 V.
A1
A2
B1
C1
D1
E1
F1
G1
H1
I1
J1
Is check result OK?
ECM power supply and ground circuits are in good condition.
Check wiring harness for open, short circuit to battery and short circuit to ground. If wiring harness is in good condition, replace ECM and recheck ECM power supply and ground circuits.

---

## AENLSB0A1124090 - DTC P0013 / P2090 / P2091
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124090.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0013 / P2090 / P2091
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0013: “B” Camshaft Position Actuator Circuit / Open (Bank1)
Exhaust OCV control circuit is open.
(3 D/C detection logic)
Exhaust OCV and/or its circuit
ECM
P2090: “B” Camshaft Position Actuator Control Circuit Low (Bank1)
Exhaust OCV control circuit is shorted to ground.
(3 D/C detection logic)
P2091: “B” Camshaft Position Actuator Control Circuit High (Bank1)
Exhaust OCV control circuit is shorted to power supply.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
A2:
Exhaust OCV drive circuit
2.
ECM
A1:
Exhaust OCV power supply circuit
1.
Exhaust OCV
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
Battery voltage > 8.5 V
Run engine at idle speed for 10 sec.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
Exhaust OCV power supply circuit check
Set ignition “OFF”, disconnect connector from exhaust OCV.
Check for proper terminal connection to exhaust OCV connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Exhaust OCV drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A1” circuit terminal and “A2” circuit terminal at exhaust OCV connector: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Exhaust OCV check
Check exhaust OCV.
Is check result OK?
Go to Step 5.
Replace exhaust OCV.
Troubleshooting of other DTC(s) at the same time
Is other DTC(s) detected together?
Go to troubleshooting for applicable DTC.
Replace ECM and recheck DTC.

---

## AENLSB0A1124091 - DTC P0014
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124091.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0014
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0014: “B” Camshaft Position Timing Over Advanced or System Performance (Bank1)
Measured exhaust CMP does not reach target exhaust CMP for specified time.
(3 D/C detection logic)
Exhaust OCV and/or its circuit
CKP sensor and sensor plate
Exhaust CMP sensor and signal rotor
Exhaust OCV oil passage
Exhaust VVT actuator
Valve timing
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
A2:
Exhaust OCV drive circuit
2.
ECM
A1:
Exhaust OCV power supply circuit
1.
Exhaust OCV
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Troubleshoot first unexpected DTCs previously detected in “DTC Confirmation Procedure”.
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
Exhaust OCV (P0013, P2090 and P2091)
CKP sensor (P0335 and P0336)
Exhaust CMP sensor (P0365)
Start engine and drive vehicle at 60 to 80 km/h (37 to 50 mile/h) for more than 10 min with engine speed 1,600 rpm or more.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
DTC check
Check DTC.
Is there DTC other than P0014?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Exhaust OCV power supply circuit and exhaust OCV drive circuit check
Check “A1” and “A2” circuits according to Step 2 – 3 under
.
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Oil pressure check
Check oil pressure.
Is check result OK?
Go to Step 5.
Repair or replace defective parts.
Exhaust OCV oil circuit visual check
Remove timing chain cover.
Check oil pressure leakage from exhaust OCV oil circuit.
Is check result OK?
Go to Step 6.
Repair or replace defective parts.
CKP sensor and sensor plate check
Check CKP sensor and sensor plate.
CKP sensor:
Sensor plate:
Is check result OK?
Go to Step 7.
Repair or replace defective parts.
Exhaust CMP sensor and signal rotor check
Check exhaust CMP sensor and signal rotor.
Exhaust CMP sensor:
Signal rotor:
Is check result OK?
Go to Step 8.
Repair or replace defective parts.
Exhaust OCV check
Check exhaust OCV.
Is check result OK?
Go to Step 9.
Replace exhaust OCV.
Exhaust VVT actuator check
Check exhaust VVT actuator.
Is check result OK?
Go to Step 10.
Replace exhaust VVT actuator.
Valve timing check
Check parts related to timing chain and their installing condition.
Is check result OK?
Replace ECM and recheck DTC.
Reinstall parts related to timing chain correctly, or replace defective parts.

---

## AENLSB0A1124092 - DTC P0403
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124092.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0403
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0403: Exhaust Gas Recirculation “A” Control Circuit
EGR valve and/or its circuit malfunction (open, short to power supply or short to ground) is detected.
(3 D/C detection logic)
EGR valve and/or its circuit
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
EGR valve drive circuit 1
B4:
EGR valve drive circuit 4
A1:
EGR valve power supply circuit 1
B2:
EGR valve drive circuit 2
1.
EGR valve
A2:
EGR valve power supply circuit 2
B3:
EGR valve drive circuit 3
2.
ECM
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following conditions are met in this “DTC Confirmation Procedure”.
IAT-1 > –10 °C (14 °F)
ECT > 70 °C (158 °F)
Drive vehicle at 50 to 80 km/h (31 to 50 mile/h) constantly for 3 min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
EGR valve power supply circuit check
Set ignition “OFF”, disconnect EGR valve connector.
Check for proper terminal connection to EGR valve connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” or “A2” and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
EGR valve drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “B1”, “B2”, “B3” or “B4” circuit: less than 1 Ω
Resistance between each of “B1”, “B2”, “B3” and “B4” circuit and ground: infinity
Resistance between “B1” circuit terminal and other terminal at EGR valve connector: infinity
Resistance between “B2” circuit terminal and other terminal at EGR valve connector: infinity
Resistance between “B3” circuit terminal and other terminal at EGR valve connector: infinity
Resistance between “B4” circuit terminal and other terminal at EGR valve connector: infinity
Voltage of “B1”, “B2”, “B3” or “B4” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
EGR valve check
Check EGR valve.
Is check result OK?
Replace ECM and recheck DTC.
Replace EGR valve.

---

## AENLSB0A1124093 - DTC P0482 / P0695 / P0696
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124093.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0482 / P0695 / P0696
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0482: Fan3 Control Circuit
Radiator cooling fan relay No.3 drive circuit is open.
(3 D/C detection logic but MIL does not light up)
Radiator cooling fan relay No.3 and/or its circuit
ECM
P0695: Fan3 Control Circuit Low
Radiator cooling fan relay No.3 drive circuit is shorted to ground.
(3 D/C detection logic but MIL does not light up)
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
Radiator cooling fan relay No.2 power supply circuit (switch side)
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
8.5 V < battery < 16 V
Connect SUZUKI scan tool to DLC.
Display “ECT” of “Data List” mode on SUZUKI scan tool.
Race engine so that engine coolant temperature reaches 103 °C (217 °F) or more.
Stop engine.
Repeat Step 2) – 4) 2 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
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

## AENLSB0A1124094 - DTC P0597 / P0598 / P0599
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124094.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0597 / P0598 / P0599
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0597: Thermostat Heater Control Circuit / Open
Thermostat heater drive circuit is open.
(3 D/C detection logic but MIL does not light up)
Thermostat heater and/or its circuit
ECM
P0598: Thermostat Heater Control Circuit Low
Thermostat heater drive circuit is shorted to ground.
(3 D/C detection logic but MIL does not light up)
P0599: Thermostat Heater Control Circuit High
Thermostat heater drive circuit is shorted to power supply.
(3 D/C detection logic but MIL does not light up)
Circuit Diagram
[A]:
ECM connector (View: [a])
A2:
Thermostat heater drive circuit
2.
ECM
A1:
Thermostat heater power supply circuit
1.
Thermostat heater
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following condition is met in this “DTC Confirmation Procedure”.
Battery voltage > 8.5 V
Warm up engine to normal operating temperature.
Drive vehicle at 70 to 100 km/h (43 to 62 mile/h) constantly for 10 min. or more.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
Thermostat heater power supply circuit check
Set ignition “OFF”, disconnect thermostat heater connector.
Check for proper terminal connection to thermostat heater connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Thermostat heater drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connections to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A1” circuit terminal and “A2” circuit terminal at thermostat heater connector: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Thermostat heater check
Check thermostat heater.
Is check result OK?
Replace ECM and recheck DTC.
Replace thermostat heater.

---

## AENLSB0A1124095 - DTC P0400
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124095.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0400
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0400: Exhaust Gas Recirculation “A” Flow
Amount of EGR flow is less than specified during fuel cut.
(3 D/C detection logic)
EGR pipe
EGR cooler
EGR valve
MAP sensor
MAF sensor
ECM
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following conditions are met in this “DTC Confirmation Procedure”.
IAT > –10 °C (14 °F)
ECT > 70 °C (158 °F)
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
Intake VVT actuator (P1088, P14C4, P2614, P34AC and P34C8)
Exhaust OCV (P0013, P2090 and P2091)
VVT system (P0011, P0014, P0016 and P0017)
IAT sensor (P0112 and P0113)
ECT sensor (P0117 and P0118)
TP sensor (P0122, P0123, P0222, P0223, P2101 and P2135)
MAF sensor (DTC P0102 and P0103)
MAP sensor (P0107 and P0108)
EGR valve (P0403)
System voltage (P0562 and P0563)
Throttle actuator (P2119 and P2176)
Drive vehicle at 80 km/h (50 mile/h).
Release accelerator pedal, and keep vehicle coasting for 15 sec. with engine braking applied (fuel cut condition).
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
DTC check
Is there DTC(s) detected other than P0400?
Go to troubleshooting for applicable DTC.
Go to Step 3.
EGR valve system check
Check EGR valve system.
Is check result OK?
Check the following points.
MAP sensor:
MAF sensor:
Go to Step 4.
EGR passage check
Remove the following parts, check EGR passage for clogging.
EGR valve:
EGR cooler:
EGR pipe:
Is check result OK?
Replace ECM and recheck DTC.
Replace defective part.

---

## AENLSB0A1124096 - DTC P0195 / P0520 / P1520
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124096.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0195 / P0520 / P1520
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0195: Engine Oil Temperature Sensor “A” Circuit
Oil pressure and temperature sensor is malfunction.
(3 D/C detection logic)
Oil pressure and temperature sensor and/or its circuit
ECM
P0520: Engine Oil Pressure Sensor “A” Circuit
Oil pressure and temperature sensor is malfunction.
(3 D/C detection logic)
P1520: Engine Oil Pressure and Temperature Sensor “A” Circuit
Oil pressure and temperature sensor is malfunction.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
A2:
Oil pressure and temperature sensor signal circuit
1.
ECM
A1:
Oil pressure and temperature sensor power supply circuit
A3:
Oil pressure and temperature sensor ground circuit
2.
Oil pressure and temperature sensor
DTC Confirmation Procedure
Warm up engine to normal operating temperature.
Run engine at idle speed for 10 sec.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
Oil pressure and temperature sensor power supply circuit check
Set ignition “OFF”, disconnect oil pressure and temperature sensor connector.
Check for proper terminal connection to oil pressure and temperature sensor connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and “A3” is approx. 5 V.
Is check result OK?
Go to Step 4.
Go to Step 3.
Oil pressure and temperature sensor ground circuit check
Check that voltage between “A1” and ground is approx. 5 V.
Is check result OK?
Repair or replace “A3” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Repair or replace “A1” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Oil pressure and temperature sensor signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A2” circuit terminal and other terminal at oil pressure and temperature sensor connector: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
Oil pressure and temperature sensor check
Check oil pressure and temperature sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace oil pressure and temperature sensor.

---

## AENLSB0A1124097 - DTC P01E8 / P01E9 / P01EA
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124097.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P01E8 / P01E9 / P01EA
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P01E8: Engine Coolant Heater “A” Control Circuit/Open
Heater shut off valve drive circuit is open.
(3 D/C detection logic but MIL does not light up)
Heater shut off valve and/or its circuit
ECM
P01E9: Engine Coolant Heater “A” Control Circuit Low
Heater shut off valve drive circuit is shorted to ground.
(3 D/C detection logic but MIL does not light up)
P01EA: Engine Coolant Heater “A” Control Circuit High
Heater shut off valve drive circuit is shorted to power supply.
(3 D/C detection logic but MIL does not light up)
Circuit Diagram
[A]:
ECM connector (View: [a])
A2:
Heater shut off valve drive circuit
2.
ECM
A1:
Heater shut off valve power supply circuit
1.
Heater shut off valve
DTC Confirmation Procedure
Warm up engine to normal operating temperature.
Run engine at idle speed for 10 sec.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
Heater shut off valve power supply circuit check
Set ignition “OFF”, disconnect heater shut off valve connector.
Check for proper terminal connection to heater shut off valve connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Heater shut off valve drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2”” circuit and ground: infinity
Resistance between “A2” circuit terminal and other terminal at heater shut off valve connector: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Heater shut off valve check
Check heater shut off valve.
Is check result OK?
Replace ECM and recheck DTC.
Replace heater shut off valve.

---

## AENLSB0A1124098 - DTC P0524
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124098.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P0524
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0524: Engine Oil Pressure Too Low
Measured oil pressure is less than specified value for specified time.
(1 D/C detection logic)
Variable oil pump valve and/or its circuit
Oil pressure and temperature senor and/or its circuit
Engine oil
Oil pump assembly
Oil strainer
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
A2:
Variable oil pump valve drive circuit
2.
ECM
A1:
Variable oil pump valve power supply circuit
1.
Variable oil pump valve
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following condition is met in this “DTC Confirmation Procedure”.
8.5 V < battery voltage < 16 V
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
Variable oil pump valve (P06DA, P06DB and P06DC)
Oil pressure and temperature sensor (P0195, P0520 and P1520)
Warm up engine to normal operating temperature.
Drive vehicle at 50 to 80 km/h (31 to 50 mile/h) constantly for 3 min.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
Variable oil pump valve power supply circuit check
Set ignition “OFF”, disconnect variable oil pump valve connector.
Check for proper terminal connection to variable oil pump valve connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Variable oil pump valve drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A2” circuit terminal and other terminal at variable oil pump valve connector: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Variable oil pump valve check
Check variable oil pump valve.
Is check result OK?
Go to Step 5.
Replace oil pump assembly.
Oil pressure and temperature sensor and its circuit check
Check oil pressure and temperature sensor and its circuit according to Step 2 – 5 under
.
Is check result OK?
Go to Step 6.
Repair or replace defective part.
Oil pressure check
Check oil pressure.
Is check result OK?
Go to Step 7.
Replace or replace defective parts.
Engine mechanical system check
Remove oil pump assembly.
Check the following items.
Oil pump:
Oil strainer:
Is check result OK?
Replace ECM and recheck DTC.
Replace or replace defective parts.

---

## AENLSB0A1124099 - DTC P06DA / P06DB / P06DC
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124099.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P06DA / P06DB / P06DC
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P06DA: Engine Oil Pressure Control Circuit/Open
Variable oil pump valve drive circuit is open.
(3 D/C detection logic)
Variable oil pump valve and/or its circuit
ECM
P06DB: Engine Oil Pressure Control Circuit Low
Variable oil pump valve drive circuit is shorted to ground.
(3 D/C detection logic)
P06DC: Engine Oil Pressure Control Circuit High
Variable oil pump valve drive circuit is shorted to power supply.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
A2:
Variable oil pump valve drive circuit
2.
ECM
A1:
Variable oil pump valve power supply circuit
1.
Variable oil pump valve
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
8.5 V < battery voltage < 16 V
Warm up engine to normal operating temperature.
Run engine at idle speed for 10 sec.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
Variable oil pump valve power supply circuit and drive circuit check
Check “A1” and “A2” circuits according to Step 2 – 3 under
.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Variable oil pump valve check
Check variable oil pump valve.
Is check result OK?
Replace ECM and recheck DTC.
Replace oil pump assembly.

---

## AENLSB0A1124100 - DTC P1088 / P14C4 / P2614 / P34AC / P34C8
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124100.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P1088 / P14C4 / P2614 / P34AC / P34C8
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1088: “A” Camshaft Position Actuator Control Circuit Bank 1
Intake VVT actuator and/or its circuit malfunction (open, short to power supply or short to ground) is detected.
(1 D/C detection logic)
Intake VVT actuator and/or its circuit
ECM
P14C4: “A” Camshaft Position Actuator Control Motor Circuit Bank 1
Intake VVT actuator and/or its circuit malfunction (open, short to power supply or short to ground) is detected.
(1 D/C detection logic)
P2614: Camshaft “A” Position Signal Output Circuit/Open Bank 1
Intake VVT actuator and/or its circuit malfunction (open, short to power supply or short to ground) is detected.
(1 D/C detection logic)
P34AC: “A” Camshaft Position Actuator Position Sensor “A” Circuit Bank 1
Intake VVT position sensor in actuator malfunction (open, short to power supply or short to ground) is detected.
(1 D/C detection logic)
P34C8: Camshaft Position Control Module Performance
Intake VVT actuator and/or its circuit malfunction (open, short to power supply or short to ground) is detected.
(1 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
B3:
Intake VVT actuator signal circuit (VTD)
2.
ECM
A1:
Intake VVT actuator power supply circuit
B4:
Intake VVT actuator signal circuit (VTM)
3.
To VVT relay
B1:
Intake VVT actuator signal circuit (VTP)
C1:
Intake VVT actuator ground circuit
B2:
Intake VVT actuator signal circuit (VTS)
1.
Intake VVT actuator
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
8.5 V < battery voltage < 16 V
Run engine at idle speed for 10 sec.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
Intake VVT actuator power supply circuit check
Set ignition “OFF”, disconnect intake VVT actuator connector.
Check for proper terminal connection to intake VVT actuator connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and “C1” is battery voltage.
Is check result OK?
Go to Step 4.
Go to Step 3.
Intake VVT actuator ground circuit check
Check that voltage between “A1” and ground is battery voltage.
Is check result OK?
Repair or replace “C1” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Repair or replace “A1” circuit.
If this DTC is detected again, replace ECM and recheck DTC.
Intake VVT actuator signal circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “B1”, “B2”, “B3” or “B4” circuit: less than 1 Ω
Resistance between each of “B1”, “B2”, “B3” or “B4” circuit and ground: infinity
Resistance between “B1” circuit terminal and other terminal at intake VVT actuator connector: infinity
Resistance between “B2” circuit terminal and other terminal at intake VVT actuator connector: infinity
Resistance between “B3” circuit terminal and other terminal at intake VVT actuator connector: infinity
Resistance between “B4” circuit terminal and other terminal at intake VVT actuator connector: infinity
Voltage of “B1”, “B2”, “B3” or “B4” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
Intake VVT actuator check
Check intake VVT actuator.
Motor part:
Sprocket part:
Is check result OK?
Replace ECM and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0A1124101 - DTC P25A9 / P25AA / P25AB
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124101.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P25A9 / P25AA / P25AB
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P25A9: Piston Cooling Oil Control Circuit/Open
Piston cooling jet valve drive circuit is open.
(3 D/C detection logic)
Piston cooling jet valve and/or its circuit
ECM
P25AA: Piston Cooling Oil Control Circuit Low
Piston cooling jet valve drive circuit is shorted to ground.
(3 D/C detection logic)
P25AB: Piston Cooling Oil Control Circuit High
Piston cooling jet valve drive circuit is shorted to power supply.
(3 D/C detection logic)
Circuit Diagram
[A]:
ECM connector (View: [a])
A2:
Piston cooling jet valve drive circuit
2.
ECM
A1:
Piston cooling jet valve power supply circuit
1.
Piston cooling jet valve
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
8.5 V < battery voltage < 16 V
Warm up engine to normal operating temperature.
Run engine at idle speed for 10 sec.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
Piston cooling jet valve power supply circuit check
Set ignition “OFF”, disconnect piston cooling jet valve connector.
Check for proper terminal connection to piston cooling jet valve connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Piston cooling jet valve drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A2” circuit terminal and other terminal at piston cooling jet valve connector: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Piston cooling jet valve check
Check piston cooling jet valve.
Is check result OK?
Replace ECM and recheck DTC.
Replace piston cooling jet valve.

---

## AENLSB0A1124102 - DTC P25AC
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124102.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC P25AC
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P25AC: Piston Cooling Oil Control Circuit Performance/Stuck Off
Oil pressure change between piston cooling jet valve ON and OFF is less than specified value at fuel cut.
(3 D/C detection logic)
Piston cooling jet valve and/or its circuit
Oil pressure and temperature senor and/or its circuit
Engine oil
Oil pump assembly
Oil strainer
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
A2:
Piston cooling jet valve drive circuit
2.
ECM
A1:
Piston cooling jet valve power supply circuit
1.
Piston cooling jet valve
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following condition is met in this “DTC Confirmation Procedure”.
8.5 V < battery voltage < 16 V
Check that the following DTCs are not detected in this “DTC Confirmation Procedure”.
Variable oil pump valve (P06DA, P06DB and P06DC)
Oil pressure and temperature sensor (P0195, P0520 and P1520)
Warm up engine to normal operating temperature.
Drive vehicle at 80 to 100 km/h (50 to 75 mile/h) constantly for 10 min.
Release accelerator pedal at 100km/h (75mile/h), and keep vehicle coasting for 20 sec. in engine braking condition. (Fuel cut)
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
Piston cooling jet valve power supply circuit check
Check “A1” and “A2” circuits according to Step 2 – 3 under
.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Piston cooling jet valve check
Check piston cooling jet valve.
Is check result OK?
Go to Step 4.
Replace piston cooling jet valve.
Oil pressure and temperature sensor and its circuit check
Check oil pressure and temperature sensor and its circuit according to Step 2 – 5 under
.
Is check result OK?
Go to Step 5.
Repair or replace defective part.
Oil pressure check
Check oil pressure.
Is check result OK?
Go to Step 6.
Replace or replace defective parts.
Engine mechanical system check
Remove oil pump assembly.
Check the following items.
Oil pump:
Oil strainer:
Is check result OK?
Replace ECM and recheck DTC.
Replace or replace defective parts.

---

## AENLSB0A1124103 - DTC U0151
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124103.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC U0151
Refer to
.

---

## AENLSB0A1124104 - DTC U0074
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124104.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC U0074
Refer to
.

---

## AENLSB0A1124105 - DTC U0298
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124105.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC U0298
Refer to
.

---

## AENLSB0A1124106 - DTC U1092
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124106.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC U1092
Refer to
.

---

## AENLSB0A1124A01 - Hard starting (Engine can be cranked)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124A01.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Hard starting (Engine can be cranked)
Perform troubleshooting referring to the following points when ECM has detected no DTC and no abnormality has been found in
and
.
Hard starting (Engine can be cranked)
Faulty spark plug
Faulty ignition coil
Dirty or clogged fuel hoses or pipes
Malfunctioning fuel pump
Malfunctioning high pressure fuel pump
Air drawn in through intake manifold gasket or throttle body gasket
Check air intake system.
Faulty electric throttle body assembly
Faulty APP sensor
Faulty ECT sensor, MAP sensor or MAF sensor
,
or
Faulty ECM
Low compression
Poor spark plug tightening or faulty gasket
Compression leakage from valve seat
Sticky valve stem
Weak or damaged valve springs
Compression leakage at cylinder head gasket
Sticky or damaged piston ring
Worn piston, piston ring or cylinder
Malfunctioning PCV valve
VVT system out of order
VVT actuator
Intake VVT actuator
Motor part:
Sprocket part:
Exhaust VVT actuator:
Valve timing:
Exhaust OCV oil circuit:
Faulty valve rocker arm
Faulty valve lash adjuster

---

## AENLSB0A1124A02 - Low oil pressure
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124A02.xml
Tree scopes: unscoped
Outgoing references:
- AENLSB0A0206004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0206004.xml | Engine Oil and Filter Change

Content:
Low oil pressure
Perform troubleshooting referring to the following points when ECM has detected no DTC and no abnormality has been found in
and
.
Low oil pressure
Improper oil viscosity
Engine Oil and Filter Change
Malfunctioning oil pressure and temperature sensor
Clogged oil strainer
Check oil strainer for clog.
Functional deterioration of oil pump
Worn oil pump relief valve
Excessive clearance in various sliding parts
—

---

## AENLSB0A1124A03 - Engine noise – Valve noise
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124A03.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Engine noise – Valve noise
Perform troubleshooting referring to the following points when ECM has detected no DTC and no abnormality has been found in
and
.
Engine noise – Valve noise
Before checking mechanical noise, check that:
Specified spark plug is used.
Specified fuel is used.
Worn valve stem and guide
Weak or broken valve spring
Warped or bent valve
Faulty valve rocker arm
Faulty valve lash adjuster

---

## AENLSB0A1124A04 - Engine noise – Piston, piston ring and cylinder noise
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124A04.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Engine noise – Piston, piston ring and cylinder noise
Perform troubleshooting referring to the following points when ECM has detected no DTC and no abnormality has been found in
and
.
Engine noise – Piston, piston ring and cylinder noise
Before checking mechanical noise, check that:
Specified spark plug is used.
Specified fuel is used.
Worn piston, piston ring and cylinder bore

---

## AENLSB0A1124A05 - Engine noise – Connecting rod noise
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124A05.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Engine noise – Connecting rod noise
Perform troubleshooting referring to the following points when ECM has detected no DTC and no abnormality has been found in
and
.
Engine noise – Connecting rod noise
Before checking mechanical noise, check that:
Specified spark plug is used.
Specified fuel is used.
Worn piston, piston ring and cylinder bore
Worn connecting rod bearing
Worn crankshaft pin
Loose connecting rod bolts
Low oil pressure
Condition “Low oil pressure”

---

## AENLSB0A1124A06 - Engine noise – Crankshaft noise
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124A06.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Engine noise – Crankshaft noise
Perform troubleshooting referring to the following points when ECM has detected no DTC and no abnormality has been found in
and
.
Engine noise – Crankshaft noise
Before checking mechanical noise, check that:
Specified spark plug is used.
Specified fuel is used.
Low oil pressure
Condition “Low oil pressure”
Worn main bearing
Worn crankshaft journal
Loose bearing cap bolts
Excessive crankshaft thrust play

---

## AENLSB0A1124A07 - Engine overheating
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124A07.xml
Tree scopes: unscoped
Outgoing references:
- AENLSB0A0206004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0206004.xml | Engine Oil and Filter Change
- AENLSB0A4104001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4104001.xml | Brake Symptom Diagnosis
- AENLSB0A5304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5304001.xml | Clutch System Symptom Diagnosis

Content:
Engine overheating
Perform troubleshooting referring to the following points when ECM has detected no DTC and no abnormality has been found in
and
.
Engine overheating
Inoperative thermostat
Poor water pump performance
Clogged or leaky radiator
Improper engine oil grade
Engine Oil and Filter Change
Clogged oil filter or oil strainer
Poor oil pump performance
Faulty radiator cooling fan control system
Dragging brakes
Condition “Dragging brakes” in
Brake Symptom Diagnosis
Slipping clutch
Condition “Slipping” in
Clutch System Symptom Diagnosis
Blown cylinder head gasket
Air mixed in cooling system

---

## AENLSB0A1124A08 - Poor fuel mileage
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124A08.xml
Tree scopes: unscoped
Outgoing references:
- AENLSB0A4104001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4104001.xml | Brake Symptom Diagnosis
- AENLSB0A5304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5304001.xml | Clutch System Symptom Diagnosis
- AENLSB0A2401001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A2401001.xml | Tire Description

Content:
Poor fuel mileage
Perform troubleshooting referring to the following points when ECM has detected no DTC and no abnormality has been found in
and
.
Poor fuel mileage
Faulty spark plug (improper gap, heavy deposits and burned electrodes, etc.)
High idle speed
Condition “Improper engine idling or engine fails to idle”
Poor performance of ECT sensor, MAP sensor or MAF sensor
,
or
Faulty electric throttle body assembly
Faulty APP sensor
Faulty fuel injector
Faulty ECM
Low compression
Poor valve seating
Dragging brakes
Condition “Dragging brakes” in
Brake Symptom Diagnosis
Slipping clutch
Condition “Slipping” in
Clutch System Symptom Diagnosis
Thermostat out of order
Improper tire pressure
Tire Description
VVT system out of order
VVT actuator
Intake VVT actuator
Motor part:
Sprocket part:
Exhaust VVT actuator:
Valve timing:
Exhaust OCV oil circuit:

---

## AENLSB0A1124A09 - Excessive engine oil consumption – Oil leakage
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124A09.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Excessive engine oil consumption – Oil leakage
Perform troubleshooting referring to the following points when ECM has detected no DTC and no abnormality has been found in
and
.
Excessive engine oil consumption – Oil leakage
Broken cylinder head gasket
Leaky crankshaft pulley oil seal
Leaky crankshaft rear oil seal
Leaky cylinder head cover gasket

---

## AENLSB0A1124A10 - Excessive engine oil consumption – Oil entering combustion chamber
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124A10.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Excessive engine oil consumption – Oil entering combustion chamber
Perform troubleshooting referring to the following points when ECM has detected no DTC and no abnormality has been found in
and
.
Excessive engine oil consumption – Oil entering combustion chamber
Sticky piston ring
Worn piston and cylinder
Worn piston ring groove and ring
Improper location of piston ring gap
Worn or damaged valve stem seal
Worn valve stem

---

## AENLSB0A1124A11 - Engine hesitates – Momentary lack of response as accelerator is depressed. Can occur at all vehicle speeds. Usually severest when moving out from a stop at stop signal, etc.
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124A11.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Engine hesitates – Momentary lack of response as accelerator is depressed. Can occur at all vehicle speeds. Usually severest when moving out from a stop at stop signal, etc.
Perform troubleshooting referring to the following points when ECM has detected no DTC and no abnormality has been found in
and
.
Engine hesitates – Momentary lack of response as accelerator is depressed. Can occur at all vehicle speeds. Usually severest when moving out from a stop at stop signal, etc.
Faulty spark plug or plug gap out of adjustment
Fuel pressure out of specification
and
Poor performance of ECT sensor, MAP sensor or MAF sensor
,
or
Faulty electric throttle body assembly
Faulty APP sensor
Faulty fuel injector
Faulty ECM
Engine overheating
Condition “Engine overheating”
Low compression
Malfunctioning air bypass valve
Air bypass valve:
Malfunctioning waste gate valve
Waste gate valve:
WGV-VSV:
Faulty boost pressure sensor

---

## AENLSB0A1124A12 - Surge – Engine power variation under steady throttle or cruise. Vehicle speed changes up and down with no change in accelerator pedal position.
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124A12.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Surge – Engine power variation under steady throttle or cruise. Vehicle speed changes up and down with no change in accelerator pedal position.
Perform troubleshooting referring to the following points when ECM has detected no DTC and no abnormality has been found in
and
.
Surge – Engine power variation under steady throttle or cruise. Vehicle speed changes up and down with no change in accelerator pedal position.
Faulty spark plug (excessive carbon deposits, improper gap, burned electrodes, etc.)
Variable fuel pressure
and
Kinky or damaged fuel lines
Faulty fuel pump (clogged fuel filter)
Poor performance of MAP sensor or MAF sensor
or
Faulty fuel injector
Faulty ECM
Faulty electric throttle body assembly
Faulty APP sensor
VVT system out of order
VVT actuator
Intake VVT actuator
Motor part:
Sprocket part:
Exhaust VVT actuator:
Valve timing:
Exhaust OCV oil circuit:

---

## AENLSB0A1124A13 - Excessive detonation – Engine continuously generates sharp, metallic knocking sound that changes with throttle opening.
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124A13.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Excessive detonation – Engine continuously generates sharp, metallic knocking sound that changes with throttle opening.
Perform troubleshooting referring to the following points when ECM has detected no DTC and no abnormality has been found in
and
.
Excessive detonation – Engine continuously generates sharp, metallic knocking sound that changes with throttle opening.
Faulty spark plug
Engine overheating
Condition “Engine overheating”
Faulty fuel pump (clogged fuel filter) or fuel lines
or
Air drawn in through intake manifold or throttle body gasket
Check air intake system.
Poor performance of knock sensor, ECT sensor, MAP sensor or MAF sensor
,
,
or
Faulty fuel injector
or
Faulty ECM
Excessive combustion chamber deposits
and/or
VVT system out of order
VVT actuator
Intake VVT actuator
Motor part:
Sprocket part:
Exhaust VVT actuator:
Valve timing:
Exhaust OCV oil circuit:

---

## AENLSB0A1124A14 - Poor engine power
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124A14.xml
Tree scopes: unscoped
Outgoing references:
- AENLSB0A4104001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4104001.xml | Brake Symptom Diagnosis
- AENLSB0A5304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5304001.xml | Clutch System Symptom Diagnosis

Content:
Poor engine power
Perform troubleshooting referring to the following points when ECM has detected no DTC and no abnormality has been found in
and
.
Poor engine power
Faulty spark plug
Faulty ignition coil assembly
Faulty knock sensor
Clogged fuel hoses or pipes
Malfunctioning fuel pump
Malfunctioning high pressure fuel pump
Air drawn in through intake manifold gasket or throttle body gasket
Check air intake system.
Engine overheating
Condition “Engine overheating”
Poor performance of ECT sensor, MAP sensor or MAF sensor
,
or
Faulty electric throttle body assembly
Faulty APP sensor
Faulty fuel injector
or
Faulty ECM
Dragging brakes
Condition “Dragging brakes” in
Brake Symptom Diagnosis
Slipping clutch
Condition “Slipping” in
Clutch System Symptom Diagnosis
Low compression
VVT system out of order
VVT actuator
Intake VVT actuator
Motor part:
Sprocket part:
Exhaust VVT actuator:
Valve timing:
Exhaust OCV oil circuit:
Malfunctioning air bypass valve
Air bypass valve:
Malfunctioning waste gate valve
Waste gate valve:
WGV-VSV:
Faulty boost pressure sensor

---

## AENLSB0A1124A15 - Improper engine idling or engine fails to idle
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124A15.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Improper engine idling or engine fails to idle
Perform troubleshooting referring to the following points when ECM has detected no DTC and no abnormality has been found in
and
.
Improper engine idling or engine fails to idle
Faulty spark plug
Faulty ignition coil assembly
Fuel pressure out of specification
and
Leaky manifold, throttle body or cylinder head gasket
Check air intake system.
Faulty evaporative emission control system
Faulty fuel injector
or
Poor performance of ECT sensor, MAP sensor or MAF sensor
,
or
Faulty electric throttle body assembly
Faulty APP sensor
Faulty ECM
Loose connection or disconnection of vacuum hoses
Check connection of vacuum hoses.
Malfunctioning PCV valve
Engine overheating
Condition “Engine overheating”
Low compression
Faulty ISG and/or its circuit
VVT system out of order
VVT actuator
Intake VVT actuator
Motor part:
Sprocket part:
Exhaust VVT actuator:
Valve timing:
Exhaust OCV oil circuit:
Faulty oil pressure and temperature sensor

---

## AENLSB0A1124A16 - Excessive hydrocarbon (HC) emission or carbon monoxide (CO) emission
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124A16.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Excessive hydrocarbon (HC) emission or carbon monoxide (CO) emission
Perform troubleshooting referring to the following points when ECM has detected no DTC and no abnormality has been found in
and
.
Excessive hydrocarbon (HC) emission or carbon monoxide (CO) emission
Faulty spark plug
Faulty ignition coil assembly
Low compression
Lead contamination of TWC
Check for absence of filler neck restrictor.
Faulty evaporative emission control system
Fuel pressure out of specification
and
Faulty closed loop system (A/F feedback compensation) (Poor performance of ECT sensor, MAP sensor or MAF sensor)
,
or
Faulty electric throttle body assembly
Faulty APP sensor
Faulty fuel injector
Faulty ECM
Engine not at normal operating temperature
—
Clogged air cleaner
Vacuum leakage
VVT system out of order
VVT actuator
Intake VVT actuator
Motor part:
Sprocket part:
Exhaust VVT actuator:
Valve timing:
Exhaust OCV oil circuit:

---

## AENLSB0A1124A17 - Excessive nitrogen oxides (NOx) emission
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1124A17.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Excessive nitrogen oxides (NOx) emission
Perform troubleshooting referring to the following points when ECM has detected no DTC and no abnormality has been found in
and
.
Excessive nitrogen oxides (NOx) emission
Improper ignition timing
Lead contamination of TWC
Check for absence of filler neck restrictor.
Fuel pressure out of specification
and
Faulty closed loop system (A/F feedback compensation) (Poor performance of ECT sensor, MAP sensor or MAF sensor)
,
or
Faulty electric throttle body assembly
Faulty APP sensor
Faulty fuel injector
or
Faulty ECM
VVT system out of order
VVT actuator
Intake VVT actuator
Motor part:
Sprocket part:
Exhaust VVT actuator:
Valve timing:
Exhaust OCV oil circuit:

---

## AENLSB0A1126001 - Idle Speed Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1126001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Idle Speed Inspection
Before idle speed check, check the following items.
Lead wires and hoses of electronic fuel injection and engine and emission control systems are connected securely.
Battery voltage is approx. 12 V.
All electrical systems (wipers, heater, lights, A/C, etc.) are off.
Air cleaner is properly installed and is in good condition.
There is no air abnormally drawn in from air intake system.
There is no obstruction in PCV valve or its hose.
There is no DTC in ECM.
The following items are turned off as checked using “Data List” mode on scan tool.
A/C Comp Relay
A/C Switch
Brake Switch
Electric Load
Blower Fan
After checking all items, check idle speed as follows.
Before starting engine, place gear shift lever in neutral position, apply parking brake and block drive wheels.
Set ignition “OFF”, connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Warm up engine to normal operating temperature.
Check engine idle speed using “Data List” mode on scan tool.
Engine idle speed
A/C OFF
700 to 800 rpm
A/C ON
750 to 850 rpm
If check result is not as specified, check engine idle speed referring to “Improper engine idling or engine fails to idle” under
.
After completing the check, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0A1128001 - Special Tool
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1128001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Special Tool
SUZUKI scan tool (Suzuki SDT-II)
—

---

## AENLSB0A1214001 - EVAP Canister Purge System Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1214001.xml
Tree scopes: bookmarks: 1 - Engine > 1B - Aux. Emission Control Devices > Diagnostic Information and Procedures > K14C
Outgoing references: none

Content:
EVAP Canister Purge System Inspection
If you suck at the nipple on the EVAP canister purge valve, you will inhale harmful fuel vapor that may be present inside the EVAP canister purge valve.
Never suck the nipple on the EVAP canister purge valve.
If excessive negative pressure is applied, the EVAP canister purge valve may be damaged.
Do not exceed negative pressure of –66 kPa (–0.7 kgf/cm 2 , –9.57 psi, –0.66 bar).
Remove air cleaner assembly.
Prepare to operate EVAP canister purge valve as follows.
Using SUZUKI scan tool:
Connect SUZUKI scan tool to DLC (1) with ignition “OFF”.
(A)
SUZUKI scan tool (Suzuki SDT-II)
With ignition “ON”, clear DTC and select “Active Test” mode on SUZUKI scan tool.
EVAP canister purge valve is operated using scan tool as follows.
EVAP canister purge valve is OFF: 0%
EVAP canister purge valve is ON: 100%
Without using SUZUKI scan tool:
Connect service wire (2) between EVAP canister purge valve (1) and EVAP canister purge valve connector with ignition “OFF”.
Set ignition “ON”.
EVAP canister purge valve is operated using service wire as follows.
EVAP canister purge valve is OFF:
[a]: Unground “GRY” harness side terminal of EVAP canister purge valve.
EVAP canister purge valve is ON:
[b]: Ground “GRY” harness side terminal of EVAP canister purge valve.
Set ignition “OFF”.
Disconnect vacuum hose from intake manifold and purge hose from EVAP canister purge valve (1).
Connect special tool to vacuum hose (2) and set the tool in “VACUUM” mode.
Before using special tool (vacuum pump gauge), read its Operator’s Manual to know how to use it.
(A)
09917–47020
Connect MAF sensor with IAT sensor-1 connector.
Set ignition “ON”.
Check EVAP canister purge valve operation as follows.
Check that negative pressure of –60 kPa (–0.6 kgf/cm 2 , –8.7 psi, –0.6 bar) can be applied when EVAP canister purge valve is turned off [A].
Check that no negative pressure can be applied when EVAP canister purge valve is turned on [B].
If faulty condition is found, check the following items.
Wire harness and connections
EVAP canister purge valve:
Vacuum hose:

---
