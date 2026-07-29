# Content Chunk 0029

Plain-text content extracted from source files with relationship metadata.

## AENLSB0AA306001 - Engine Switch Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA306001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Repair Instructions
Outgoing references:
- AENLSB0AA506012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506012.xml | Engine Switch Removal and Installation

Content:
Engine Switch Removal and Installation
Refer to
Engine Switch Removal and Installation
.

---

## AENLSB0AA306002 - Remote Controller Registration
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA306002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Repair Instructions
Outgoing references:
- AENLSB0AA206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206001.xml | Remote Controller Registration

Content:
Remote Controller Registration
Refer to
Remote Controller Registration
.

---

## AENLSB0AA306003 - ECM / ISG Registration
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA306003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Repair Instructions > Models > K14C
Outgoing references: none

Content:
ECM / ISG Registration
Referring to the following table, perform each item in “Immobilizer” menu on SUZUKI scan tool according to the replacement part(s).
Refer to Operator’s Manual of SUZUKI scan tool for further details.
Replacement part(s)
Item
ECM
“ECM Registration”
“Integrated Starter Generator (48V model) Registration”
“ECM Registration” or “Integrated Starter Generator (48V model) Registration”
: Replaced
When ECM is replaced with new one, refer to “Procedure after ECM Replacement”.
K14C model:
When ECM and ISG are replaced with new ones at the same time, perform either “ECM Registration” or “Integrated Starter Generator (48V model) Registration”. This performance will complete both ECM and ISG registrations.

---

## AENLSB0AA306004 - BCM Registration
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA306004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Repair Instructions
Outgoing references:
- AENLSB0AA206002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206002.xml | BCM Registration

Content:
BCM Registration
Refer to
BCM Registration
.

---

## AENLSB0AA400001 - Precautions for Diagnosing Trouble
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA400001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Precautions
Outgoing references: none

Content:
Precautions for Diagnosing Trouble
Before using scan tool, read its Operator’s Manual to know how to use it.
When driving under any of the following conditions, TPMS control module may cause the low tire pressure warning light to light up or blink even though Tire Pressure Monitoring System (TPMS) operates properly.
Tire chains are fitted to tires.
A large amount of snow, ice or mud is attached to the wheels or wheel houses.
Wheels mounted on the vehicle are not of a genuine type or tires are of other than specified size.
Tire pressure sensor ID codes for all four tires are not registered in TPMS control module, or a wheel with tire having a tire pressure sensor without its ID registered in TPMS control module is used as a running wheel.
Vehicle is driven near a place where strong radio wave is emitted.
Vehicle is driven in rough road or traffic jam.
A tire is replaced with spare tire.
Tires are replaced with snow tires.
Tire pressure is higher than specification.
Tire pressure sensor(s) installed in tire(s) is not of a genuine type.
Tire pressure sensor(s) is damaged while replacing tire(s).
Electromagnetic interference film is attached to window glasses.
Keyless entry receiver of keyless entry system in BCM malfunctions.
TPMS setting does not match actual tire pressure.
Clear all DTCs after completing troubleshooting.

---

## AENLSB0AA401001 - Tire Pressure Monitoring System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA401001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > General Description
Outgoing references:
- AENLSB0AA406005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA406005.xml | TPMS Setting Procedure
- AENLSB0AA406004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA406004.xml | Registration Procedure for Tire Pressure Sensor ID Code
- AENLSB0AA406005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA406005.xml | TPMS Setting Procedure

Content:
Tire Pressure Monitoring System Description
Tire Pressure Monitoring System (TPMS) monitors air pressure in each tire except spare tire. It consists of low tire pressure warning light (6), tire pressure sensors (1), (2), (3), (4) and TPMS control module (5).
As a tire revolves (at vehicle speed of approximately 25 km/h (16 mile/h) or more), tire pressure sensor installed to each wheel transmits tire pressure data to TPMS control module. When tire pressure is lower than the standard value in the module, TPMS control module turns on low tire pressure warning light to warn the driver that tire pressure has decreased. Also, when any fault is detected in TPMS, it blinks low tire pressure warning light for 75 seconds and then the warning light remains lit to warn the driver that there is a fault in the system.
Operation of tire pressure sensor, TPMS control module and low tire pressure warning light is described below.
7.
Radio waves
Tire Pressure Sensor
Tire pressure sensor consists of a pressure sensor, acceleration sensor, temperature sensor, control section, transmitter / receiver, battery and air valve.
Each tire pressure sensor assigns an individual ID code. Tire pressure detected by the tire pressure sensor, along with the ID code, rolling angle position, temperature, battery status, is transmitted to TPMS control module on the radio wave.
In the condition that 15 minutes have elapsed since the last driving of vehicle, when you start driving and the tire revolves at approximately 25 km/h (16 mile/h) or more, the pressure sensor transmits data to TPMS control module at 16-second interval (fast mode).
And, when the driving is continued for 640 seconds, the pressure sensor transmits data at 64-second interval (active mode).
However, when the acceleration sensor does not detect wheel rotation with the vehicle speed lower than approximately 25 km/h (16 mile/h), the data is sent to TPMS control module at 19-minute interval to prevent battery power consumption (save mode).
TPMS Control Module and Low Tire Pressure Warning Light
TPMS control module receives signals from 4 tire pressure sensors, identifies data by the ID code of each tire pressure sensor and uses the identified data to compare air pressure in each tire with the tire pressure value that was configured in
TPMS Setting Procedure
. When tire pressure is judged to be lower than the specified value, TPMS control module turns on low tire pressure warning light in the combination meter and stores DTC in its memory. Also, when a fault in the system is detected, TPMS control module blinks low tire pressure warning light for 75 seconds and then the warning light remains lit, and stores the DTC in its memory.
TPMS control module has positioning function of tire pressure sensors as well.
Four ID codes of tire pressure sensor can be registered in TPMS control module. Therefore, when wheel with tire equipped with any other sensor is used as a running wheel, ID codes of all tire pressure sensors installed to 4 tires must be re-registered. When vehicle is driven without re-registration of the ID codes, TPMS control module detects faulty condition of the system and illuminates low tire pressure warning light after it blinks for 75 seconds. For the procedure to register the ID codes of tire pressure sensors in TPMS control module, refer to
Registration Procedure for Tire Pressure Sensor ID Code
.
Tire Pressure Setting
Adjust tire pressure referring to “Tire Placard” in accordance with the vehicle loading change. After changing tire pressure, select a suitable “TPMS setting” referring to
TPMS Setting Procedure
.
TPMS does not function correctly without consistency between the tire pressure and “TPMS setting”.

---

## AENLSB0AA402001 - TPMS Input / Output Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA402001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Schematic and Routing Diagram
Outgoing references: none

Content:
TPMS Input / Output Diagram

---

## AENLSB0AA402002 - TPMS Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA402002.xml
Tree scopes: unscoped
Outgoing references: none

Content:
TPMS Circuit Diagram
[A]:
TPMS control module connector (View: [a])
4.
TPMS control module
8.
Receiver
1.
“CONT” fuse
5.
CPU
9.
Each control module
: Refer to
.
2.
“IG1 SIG” fuse
6.
Power supply circuit
3.
IG11 relay
7.
CAN driver

---

## AENLSB0AA403001 - TPMS Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA403001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Component Location > Models > K14C
Outgoing references: none

Content:
TPMS Component Location
The figure shows LHD. For RHD, parts with (*) are installed at the opposite side.
[A]:
K14C model
2.
TPMS seal set
5.
TPMS control module
[B]:
3.
Combination meter
:
7.5 N·m (0.76 kgf-m, 5.5 lbf-ft)
1.
Tire pressure sensor
4.
Low tire pressure warning light
:
Do not reuse.

---

## AENLSB0AA404001 - TPMS Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA400001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA400001.xml | Precautions for Diagnosing Trouble
- AENLSB0AA404001009 -> unresolved | Step 1: Customer Complaint Analysis
- AENLSB0AA404001010 -> unresolved | Step 2: Visual Inspection
- AENLSB0AA404004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404004.xml | DTC Clearance
- AENLSB0AA404001012 -> unresolved | Step 4: Problem Symptom Confirmation and Recheck DTC
- AENLSB0AA404001015 -> unresolved | Step 7: Final Confirmation Test
- AENLSB0AA404003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404003.xml | DTC Check
- AENLSB0AA404004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404004.xml | DTC Clearance
- AENLSB0AA404003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404003.xml | DTC Check
- AENLSB0A0006002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0006002.xml | Intermittent Connection and Poor Contact Inspection

Content:
TPMS Check
To check that trouble diagnosis is done accurately and smoothly, observe
Precautions for Diagnosing Trouble
and follow “TPMS Check”.
Customer complaint analysis
Perform
Step 1: Customer Complaint Analysis
.
Was customer complaint analysis performed?
Go to Step 2.
Perform customer complaint analysis.
Visual inspection
Perform
Step 2: Visual Inspection
.
Is there any faulty condition?
Repair or replace defective part, and then go to Step 7.
Go to Step 3.
DTC check, record and clearance
Check for DTC.
Is there any DTC(s)?
Print DTC or write it down and clear it referring to
DTC Clearance
. Then go to Step 4.
Go to Step 4.
Problem symptom confirmation and recheck DTC
Perform
Step 4: Problem Symptom Confirmation and Recheck DTC
.
Is there any DTC(s)?
Go to Step 5.
Go to Step 6.
DTC troubleshooting
Perform troubleshooting for applicable DTC.
Are check and repair completed?
Go to Step 7.
Check and repair defective part, and then go to Step 7.
Intermittent problem check
Check for intermittent problem.
Is there any faulty condition?
Repair or replace defective part, and then go to Step 7.
Go to Step 7.
Final confirmation test
Perform
Step 7: Final Confirmation Test
.
Is there any problem symptom, DTC or abnormal condition?
Go to Step 4.
End.
Step 1: Customer Complaint Analysis
Record details of the problem (failure, complaint) and how it occurred as described by the customer. For this purpose, such a questionnaire form shown below will facilitate collecting information for proper analysis and diagnosis.
Customer questionnaire form (Example)
Step 2: Visual Inspection
Check each tire and wheel visually for installation condition, crack and damage. When any abnormal condition is found, repair or replace them.
Step 3: DTC Check, Record and Clearance
Perform
DTC Check
procedure, record it and then clear it referring to
DTC Clearance
.
DTC indicates malfunction that occurred in system and indicates whether it exists now or it occurred in the past and normal condition has been restored now.
Step 4: Problem Symptom Confirmation and Recheck DTC
Check if what customer claimed in “Customer questionnaire” is actually found in vehicle and if that symptom is found, whether it is identified as a failure. (This step should be shared with the customer if possible.) Check warning light related to TPMS. Drive vehicle at 25 km/h (16 mile/h) or more for 10 minutes or more and then recheck DTC referring to
DTC Check
.
Step 5: DTC Troubleshooting
Based on the DTC indicated in Step 3 and referring to the applicable DTC diagnosis flow, locate the cause of trouble, namely in sensor, wire harness, connector, TPMS control module or other part and repair or replace faulty parts.
Step 6: Intermittent Problem Check
Check parts that are prone to cause intermittent trouble (e.g. wire harness, connector, etc.), referring to
Intermittent Connection and Poor Contact Inspection
.
Step 7: Final Confirmation Test
Check that the problem symptom has gone and TPMS is free from any abnormal conditions. If what has been repaired is related to malfunction DTC, clear DTC once and then perform road test, and check that no DTC is indicated.

---

## AENLSB0AA404002 - TPMS Self-Diagnosis Function
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures > Models > K14C
Outgoing references:
- AENLSB0AA404005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404005.xml | DTC Table

Content:
TPMS Self-Diagnosis Function
TPMS control module diagnoses conditions of TPMS component parts (whether or not there is any abnormal condition) all the time and indicates the results (warning of abnormal condition occurrence) through low tire pressure warning light as described.
For details of the low tire pressure warning light operation as the warning function, refer to
DTC Table
.
When ignition is “ON”, low tire pressure warning light (1) lights up for 2 seconds to check the warning light and circuit.
When no abnormal condition has been detected, low tire pressure warning light turns off after 2 seconds.
Low tire pressure warning light does not light up in some DTCs even if any malfunctions are detected. In such cases, low tire pressure warning light lights up for 2 seconds and turns off.
[A]:
Ignition
[B]:
Low tire pressure warning light operation for light check
[C]:
K14C model
[D]:
2.
2 seconds
When TPMS control module receives a signal indicating the tire pressure and judges it as lower than the specified value, it causes low tire pressure warning light (1) to light up and stores the DTC in its EEPROM.
[A]:
Ignition
[B]:
Low tire pressure warning light operation when TPMS control module detects tire pressure is lower than specification
[C]:
When malfunction is detected
When tire pressure sensor ID code is not registered in TPMS control module, it causes low tire pressure warning light (1) to light up and stores the DTC in its EEPROM.
[A]:
Ignition
[B]:
Low tire pressure warning light operation when tire pressure sensor ID code is not registered
When TPMS control module detects any abnormal condition in the system, it turns on low tire pressure warning light (1) after it blinks for 75 seconds and stores the DTC in its EEPROM.
[A]:
Ignition
[B]:
Low tire pressure warning light operation when TPMS malfunction occurs
[C]:
When malfunction is detected
2.
3 seconds
3.
1 second
4.
75 seconds

---

## AENLSB0AA404003 - DTC Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC Check
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Read DTC according to instructions displayed on SUZUKI scan tool and print it or write it down. Refer to Operator's Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and TPMS control module is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
Check central gateway control module power supply circuit and ground circuit.
Check TPMS control module power circuit and ground circuit.
After completing the check, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0AA404004 - DTC Clearance
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC Clearance
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Clear DTC according to instructions displayed on SUZUKI scan tool and print it or write it down. Refer to Operator's Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and TPMS control module is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
Check central gateway control module power supply circuit and ground circuit.
Check TPMS control module power circuit and ground circuit.
After completing DTC clearance, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0AA404005 - DTC Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404005.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA404001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404001.xml | TPMS Check
- AENLSB0AA404001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404001.xml | TPMS Check
- AENLSB0AA400001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA400001.xml | Precautions for Diagnosing Trouble

Content:
DTC Table
If you do not follow
TPMS Check
for DTC diagnosis, the diagnosis will show a false result.
Follow
TPMS Check
for DTC diagnosis, noting
Precautions for Diagnosing Trouble
.
DTC
DTC name
DTC detecting condition
Low tire pressure warning light
B1A00
Battery Voltage Low
Power supply circuit voltage is lower than specified value although vehicle has run at 25 km/h (16 mile/h) or more.
Lights up after blinks for 75 seconds
B1A01
Battery Voltage High
Power supply circuit voltage is higher than specified value for specified time.
Lights up after blinks for 75 seconds
B1A02
Receiver Circuit No Response
This DTC is detected if all of the following conditions are met.
TPMS control module does not receive any data from all tire pressure sensors for specified time.
Receiver integrated in TPMS control module does not respond.
Lights up after blinks for 75 seconds
B1A03
Internal Control Module EEPROM Error
TPMS control module internal failure. (EEPROM error)
Lights up after blinks for 75 seconds
B1A10
Tire Pressure Sensor Location Not Detected
Location of tire pressure sensor is not detected.
Off
B1A11
Auto Tire Pressure Sensor ID Code Learning Not Complete
Automatic learning of tire pressure sensor ID code is not completed.
Lights up after blinks for 75 seconds
B1A20
Right Front Tire Pressure Sensor Data Error
TPMS control module receives abnormal data from tire pressure sensor.
Lights up after blinks for 75 seconds
B1A21
Left Front Tire Pressure Sensor Data Error
Lights up after blinks for 75 seconds
B1A22
Right Rear Tire Pressure Sensor Data Error
Lights up after blinks for 75 seconds
B1A23
Left Rear Tire Pressure Sensor Data Error
Lights up after blinks for 75 seconds
B1A24
Right Front Tire Pressure Sensor Battery Voltage Low
TPMS control module receives battery run down signal from tire pressure sensor for specified time when tire temperature is higher than –10 °C (14 °F).
Off
B1A25
Left Front Tire Pressure Sensor Battery Voltage Low
Off
B1A26
Right Rear Tire Pressure Sensor Battery Voltage Low
Off
B1A27
Left Rear Tire Pressure Sensor Battery Voltage Low
Off
B1A28
Right Front Tire Pressure Sensor Temperature Too High
This DTC is detected if all of the following conditions are met.
TPMS control module does not receive any data from tire pressure sensor although vehicle has run for more than 6 minutes at 25 km/h (16 mile/h) or more.
TPMS control module receives higher tire temperature than specified value.
Off
B1A29
Left Front Tire Pressure Sensor Temperature Too High
Off
B1A2A
Right Rear Tire Pressure Sensor Temperature Too High
Off
B1A2B
Left Rear Tire Pressure Sensor Temperature Too High
Off
B1A2C
No Data Received From Right Front Tire Pressure Sensor
TPMS control module does not receive any data from tire pressure sensor although vehicle has run for more than 9 minutes at 25 km/h (16 mile/h) or more.
Lights up after blinks for 75 seconds
B1A2D
No Data Received From Left Front Tire Pressure Sensor
Lights up after blinks for 75 seconds
B1A2E
No Data Received From Right Rear Tire Pressure Sensor
Lights up after blinks for 75 seconds
B1A2F
No Data Received From Left Rear Tire Pressure Sensor
Lights up after blinks for 75 seconds
B1A30
Right Front Tire Pressure Low
Tire pressure is lower than specified value.
Lights up
B1A31
Left Front Tire Pressure Low
Lights up
B1A32
Right Rear Tire Pressure Low
Lights up
B1A33
Left Rear Tire Pressure Low
Lights up
B1A40
Tire Pressure Sensor Not Learned/Programmed
Tire pressure sensor ID code is not registered in TPMS control module.
Lights up
B1A41
Vehicle Variant Data Not Programmed
Vehicle variant data is not stored in TPMS control module.
Lights up after blinks for 75 seconds
B1A42
Vehicle Variant Data Mismatched
Inconsistency between vehicle variant data stored in TPMS control module and vehicle information signal transmitted via CAN communication.
Lights up after blinks for 75 seconds
B1A48
Vehicle Speed Wrong Data
This DTC is detected if any one of the following conditions is met.
TPMS control module receives higher tire acceleration data than specified value for specified time continuously even if vehicle speed is lower than 5 km/h (3 mile/h).
TPMS control module receives invalid vehicle speed signal from ECM for specified time continuously.
Lights up after blinks for 75 seconds
B1A49
Wheel Speed Sensor Wrong Data
TPMS control module receives invalid wheel speed signal from ESP ® control module for specified time.
Off
U0073
Control Module Communication Bus Off
TPMS control module fails to transmit and receive data via CAN for specified time continuously.
Off
U0100
Lost Communication With ECM
Receiving error of data from ECM via CAN for specified time continuously.
Lights up after blinks for 75 seconds
U0121
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
Lights up after blinks for 75 seconds
U0140
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
Lights up after blinks for 75 seconds
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
Lights up after blinks for 75 seconds

---

## AENLSB0AA404006 - Scan Tool Data
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404006.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Scan Tool Data
TPMS Control Module
If communication between SUZUKI scan tool and TPMS control module is not possible, perform the following checks:
Check communication condition between PC and VCI using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
Check central gateway control module power supply circuit and ground circuit.
Check TPMS control module power circuit and ground circuit.
Parameter data below are values measured with SUZUKI scan tool when vehicle operates normally.
Set ignition “OFF” and leave ignition “OFF” for 20 minutes or more.
Connect SUZUKI scan tool to DLC.
Adjust each tire pressure to specified value.
Drive vehicle at 25 km/h (16 mile/h) or more for 10 minutes or more.
Stop vehicle.
Apply parking brake and block wheels.
Set ignition “ON”.
Check that no DTC is detected.
Scan tool data
Normal condition / Reference value
Condition
Battery Voltage
10 – 14 V
Engine: Running
ID Code #1
Tire pressure sensor No.1 ID code is displayed.
Ignition: “ON”
TPS Location #1
RF / LF / RR / LR / Unlocated
Ignition: “ON”
Air Temperature #1
Actual tire temperature detected by tire pressure sensor No.1 is displayed.
Ignition: “ON”
Air Pressure #1
Actual tire pressure detected by tire pressure sensor No.1 is displayed.
Ignition: “ON”
TPS Acceleration #1
Approx. 0.0 g
Vehicle: Stopped
Approx. 9.5 g
Vehicle: Running at 25 km/h (16 mile/h)
Battery Status #1
Normal / Low
Ignition: “ON”
ID Code #2
Tire pressure sensor No.2 ID code is displayed.
Ignition: “ON”
TPS Location #2
RF / LF / RR / LR / Unlocated
Ignition: “ON”
Air Temperature #2
Actual tire temperature detected by tire pressure sensor No.2 is displayed.
Ignition: “ON”
Air Pressure #2
Actual tire pressure detected by tire pressure sensor No.2 is displayed.
Ignition: “ON”
TPS Acceleration #2
Approx. 0.0 g
Vehicle: Stopped
Approx. 9.5 g
Vehicle: Running at 25 km/h (16 mile/h)
Battery Status #2
Normal / Low
Ignition: “ON”
ID Code #3
Tire pressure sensor No.3 ID code is displayed.
Ignition: “ON”
TPS Location #3
RF / LF / RR / LR / Unlocated
Ignition: “ON”
Air Temperature #3
Actual tire temperature detected by tire pressure sensor No.3 is displayed.
Ignition: “ON”
Air Pressure #3
Actual tire pressure detected by tire pressure sensor No.3 is displayed.
Ignition: “ON”
TPS Acceleration #3
Approx. 0.0 g
Vehicle: Stopped
Approx. 9.5 g
Vehicle: Running at 25 km/h (16 mile/h)
Battery Status #3
Normal / Low
Ignition: “ON”
ID Code #4
Tire pressure sensor No.4 ID code is displayed.
Ignition: “ON”
TPS Location #4
RF / LF / RR / LR / Unlocated
Ignition: “ON”
Air Temperature #4
Actual tire temperature detected by tire pressure sensor No.4 is displayed.
Ignition: “ON”
Air Pressure #4
Actual tire pressure detected by tire pressure sensor No.4 is displayed.
Ignition: “ON”
TPS Acceleration #4
Approx. 0.0 g
Vehicle: Stopped
Approx. 9.5 g
Vehicle: Running at 25 km/h (16 mile/h)
Battery Status #4
Normal / Low
Ignition: “ON”
Vehicle Speed
Almost the same as speedometer reading
In driving
Low TP Warning Light
OFF / ON/Blinking
Ignition: “ON”
Scan Tool Data Definitions
Battery Voltage
This parameter indicates battery voltage.
ID Code
This parameter indicates tire pressure sensor ID code.
TPS Location
This parameter indicates location of tire pressure sensor.
RF: Right-front
LF: Left-front
RR: Right-rear
LR: Left-rear
Unlocated: Location of tire pressure sensor is not identified.
Air Temperature
This parameter indicates actual tire temperature detected by tire pressure sensor.
Air Pressure
This parameter indicates actual tire pressure detected by tire pressure sensor.
TPS Acceleration
This parameter indicates actual tire acceleration detected by tire pressure sensor.
Battery Status
This parameter indicates battery status in each tire pressure sensor.
Normal: Battery voltage in tire pressure sensor is normal.
Low: Battery voltage in tire pressure sensor is low.
Vehicle Speed
The vehicle speed is calculated based on pulse signals from wheel speed sensors.
Low TP (Tire Pressure) Warning Light
This parameter indicates the states of warning light of tire pressure monitoring system.
OFF: Low tire pressure warning light is OFF.
ON / Blinking: Low tire pressure warning light lights up or blinks.

---

## AENLSB0AA404007 - DTC B1A00
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404007.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1A00
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1A00: Battery Voltage Low
Power supply circuit voltage is lower than specified value although vehicle has run at 25 km/h (16 mile/h) or more.
Power supply circuit / ground circuit
TPMS control module
Circuit Diagram
[A]:
TPMS control module connector (View: [a])
1.
“CONT” fuse
4.
TPMS control module
A1:
TPMS control module power supply circuit
2.
“IG1 SIG” fuse
A2:
TPMS control module ground circuit
3.
IG11 relay
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Drive vehicle at 25 km/h (16 mile/h) or more for 1 minute.
DTC Troubleshooting
TPMS control module power supply circuit check
Check that ignition is “OFF”.
Disconnect “G452” connector.
Check for proper terminal connection to “G452” connector.
If OK, check that voltage between “A1” circuit and ground is battery voltage.
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
TPMS control module ground circuit check
Check that resistance between “A2” circuit and ground is less than 1 Ω.
Is check result OK?
Replace TPMS control module and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0AA404008 - DTC B1A01
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404008.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1A01
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1A01: Battery Voltage High
Power supply circuit voltage is higher than specified value for specified time.
Charging system
TPMS control module
DTC Confirmation Procedure
Start engine, if possible.
DTC Troubleshooting
Charging system check
Check charging system.
Is check result OK?
Replace TPMS control module and recheck DTC.
Repair charging system.

---

## AENLSB0AA404009 - DTC B1A02
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404009.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA404009002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1A02
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1A02: Receiver Circuit No Response
This DTC is detected if all of the following conditions are met.
TPMS control module does not receive any data from all tire pressure sensors for specified time.
Receiver integrated in TPMS control module does not respond.
TPMS control module
DTC Confirmation Procedure
Set ignition “ON”.
Activate any one of tire pressure sensors.
Using recommended tool: Activate a tire pressure sensor with recommended tool. Refer to instruction of recommended tool for activating method of tire pressure sensor.
Recommended tool
“VT56”, “VT55”, “VT36” or “VT30” made by ATEQ
Not using recommended tool: Release air pressure from a tire by 10 kPa (1.45 psi) or more within 30 seconds and then inflate the tire to specified pressure.
DTC Troubleshooting
Tire pressure sensor check
Clear DTC.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1A02 still detected?
Replace TPMS control module and recheck DTC.
Check for intermittent trouble.

---

## AENLSB0AA404010 - DTC B1A03
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404010.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA404010002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1A03
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1A03: Internal Control Module EEPROM Error
TPMS control module internal failure. (EEPROM error)
TPMS control module
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1A03 still detected?
Replace TPMS control module and recheck DTC.
Check for intermittent trouble.

---

## AENLSB0AA404011 - DTC B1A10
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404011.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA404011002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1A10
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1A10: Tire Pressure Sensor Location Not Detected
Location of tire pressure sensor is not detected.
Wheel speed sensor
Tire pressure sensor No.1, No.2, No.3 and/or No.4
ECM
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Set ignition “OFF” and leave ignition “OFF” for 20 minutes or more.
Drive vehicle at 25 km/h (16 mile/h) or more for 10 minutes or more on paved road and winding road as much as possible.
DTC Troubleshooting
DTC check
Check DTC in ESP ® control module.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Check DTC in ECM.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Tire pressure sensor check
Adjust each tire pressure to respective specification.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1A10 still detected?
Replace defective tire pressure sensor.
Check for intermittent trouble.

---

## AENLSB0AA404012 - DTC B1A11
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404012.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA406004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA406004.xml | Registration Procedure for Tire Pressure Sensor ID Code

Content:
DTC B1A11
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1A11: Auto Tire Pressure Sensor ID Code Learning Not Complete
Automatic learning of tire pressure sensor ID code is not completed.
Tire pressure sensor No.1, No.2, No.3 and/or No.4
TPMS control module
ECM
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Set ignition “OFF” and leave ignition “OFF” for 20 minutes or more.
Drive vehicle at 25 km/h (16 mile/h) or more for 10 minutes or more.
DTC Troubleshooting
DTC check
Check DTC in ECM.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
Tire pressure sensor ID code registration
Perform automatic learning referring to “Automatic Learning” in
Registration Procedure for Tire Pressure Sensor ID Code
.
Is ID code registration completed?
End.
Go to Step 3.
DTC check
Is there any DTC(s) other than B1A11?
Go to troubleshooting for applicable DTC.
Replace all tire pressure sensors.

---

## AENLSB0AA404013 - DTC B1A20 / B1A21 / B1A22 / B1A23
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404013.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA404013002 -> unresolved | DTC Confirmation Procedure
- AENLSB0AA404013002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1A20 / B1A21 / B1A22 / B1A23
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1A20: Right Front Tire Pressure Sensor Data Error
B1A21: Left Front Tire Pressure Sensor Data Error
B1A22: Right Rear Tire Pressure Sensor Data Error
B1A23: Left Rear Tire Pressure Sensor Data Error
TPMS control module receives abnormal data from tire pressure sensor.
Tire pressure sensor No.1, No.2, No.3 and/or No.4
TPMS control module
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Set ignition “OFF” and leave ignition “OFF” for 20 minutes or more.
Drive vehicle at 25 km/h (16 mile/h) or more for 10 minutes or more.
DTC Troubleshooting
Preparation of tool
Prepare recommended tool.
Recommended tool
“VT56”, “VT55”, “VT36” or “VT30” made by ATEQ
Do you have recommended tool?
Go to Step 2.
Go to Step 4.
Tire pressure sensor check
Using recommended tool, check tire pressure sensor for detected DTC.
Is check result OK?
Go to Step 3.
Go to Step 4.
DTC check
Clear DTC.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1A20, B1A21, B1A22 or B1A23 still detected?
Go to Step 4.
Check for intermittent trouble.
DTC check
Replace tire pressure sensor for detected DTC.
Clear DTC.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1A20, B1A21, B1A22 or B1A23 still detected?
Replace TPMS control module and recheck DTC.
End.

---

## AENLSB0AA404014 - DTC B1A24 / B1A25 / B1A26 / B1A27
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404014.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA404014002 -> unresolved | DTC Confirmation Procedure
- AENLSB0AA404014002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1A24 / B1A25 / B1A26 / B1A27
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1A24: Right Front Tire Pressure Sensor Battery Voltage Low
B1A25: Left Front Tire Pressure Sensor Battery Voltage Low
B1A26: Right Rear Tire Pressure Sensor Battery Voltage Low
B1A27: Left Rear Tire Pressure Sensor Battery Voltage Low
TPMS control module receives battery run down signal from tire pressure sensor for specified time when tire temperature is higher than –10 °C (14 °F).
Tire pressure sensor No.1, No.2, No.3 and/or No.4
TPMS control module
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Set ignition “OFF” and leave ignition “OFF” for 20 minutes or more.
Drive vehicle at 25 km/h (16 mile/h) or more for 30 minutes or more when outside air temperature is higher than –10 °C (14 °F).
DTC Troubleshooting
Preparation of tool
Prepare recommended tool.
Recommended tool
“VT56”, “VT55”, “VT36” or “VT30” made by ATEQ
Do you have recommended tool?
Go to Step 2.
Go to Step 4.
Tire pressure sensor check
Using recommended tool, check tire pressure sensor for detected DTC.
Is check result OK?
Go to Step 3.
Go to Step 4.
DTC check
Clear DTC.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1A24, B1A25, B1A26 or B1A27 still detected?
Go to Step 4.
Check for intermittent trouble.
DTC check
Replace tire pressure sensor for detected DTC.
Clear DTC.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1A24, B1A25, B1A26 or B1A27 still detected?
Replace TPMS control module and recheck DTC.
End.

---

## AENLSB0AA404015 - DTC B1A28 / B1A29 / B1A2A / B1A2B
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404015.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA404015002 -> unresolved | DTC Confirmation Procedure
- AENLSB0AA404015002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1A28 / B1A29 / B1A2A / B1A2B
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1A28: Right Front Tire Pressure Sensor Temperature Too High
B1A29: Left Front Tire Pressure Sensor Temperature Too High
B1A2A: Right Rear Tire Pressure Sensor Temperature Too High
B1A2B: Left Rear Tire Pressure Sensor Temperature Too High
This DTC is detected if all of the following conditions are met.
TPMS control module does not receive any data from tire pressure sensor although vehicle has run for more than 6 minutes at 25 km/h (16 mile/h) or more.
TPMS control module receives higher tire temperature than specified value.
Tire pressure sensor No.1, No.2, No.3 and/or No.4
TPMS control module
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Set ignition “OFF” and leave ignition “OFF” for 30 minutes or more.
Drive vehicle at 25 km/h (16 mile/h) or more for 6 minutes or more on paved road.
DTC Troubleshooting
Preparation of tool
Prepare recommended tool.
Recommended tool
“VT56”, “VT55”, “VT36” or “VT30” made by ATEQ
Do you have recommended tool?
Go to Step 2.
Go to Step 4.
Tire pressure sensor check
Using recommended tool, check tire pressure sensor for detected DTC.
Is check result OK?
Go to Step 3.
Go to Step 4.
DTC check
Clear DTC.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1A28, B1A29, B1A2A or B1A2B still detected?
Go to Step 4.
Check for intermittent trouble.
DTC check
Replace tire pressure sensor for detected DTC.
Clear DTC.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1A28, B1A29, B1A2A or B1A2B still detected?
Replace TPMS control module and recheck DTC.
End.

---

## AENLSB0AA404016 - DTC B1A2C / B1A2D / B1A2E / B1A2F
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404016.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA406004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA406004.xml | Registration Procedure for Tire Pressure Sensor ID Code
- AENLSB0AA404016002 -> unresolved | DTC Confirmation Procedure
- AENLSB0AA404016002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1A2C / B1A2D / B1A2E / B1A2F
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1A2C: No Data Received From Right Front Tire Pressure Sensor
B1A2D: No Data Received From Left Front Tire Pressure Sensor
B1A2E: No Data Received From Right Rear Tire Pressure Sensor
B1A2F: No Data Received From Left Rear Tire Pressure Sensor
TPMS control module does not receive any data from tire pressure sensor although vehicle has run for more than 9 minutes at 25 km/h (16 mile/h) or more.
Tire pressure sensor No.1, No.2, No.3 and/or No.4
TPMS control module
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Set ignition “OFF” and leave ignition “OFF” for 20 minutes or more.
Drive vehicle at 25 km/h (16 mile/h) or more for 10 minutes or more.
DTC Troubleshooting
After replacing tire pressure sensor(s) or tire(s) equipped with tire pressure sensor, perform tire pressure sensor learning following the instructions in the
Registration Procedure for Tire Pressure Sensor ID Code
.
If the vehicle is driven without performing the learning for tire pressure sensor ID code registration, DTC(s) may be detected.
Preparation of tool
Prepare recommended tool.
Recommended tool
“VT56”, “VT55”, “VT36” or “VT30” made by ATEQ
Do you have recommended tool?
Go to Step 2.
Go to Step 4.
Tire pressure sensor check
Using recommended tool, check tire pressure sensor for detected DTC.
Is check result OK?
Go to Step 3.
Go to Step 4.
DTC check
Clear DTC.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1A2C, B1A2D, B1A2E or B1A2F still detected?
Go to Step 4.
Check for intermittent trouble.
DTC check
Replace tire pressure sensor for detected DTC.
Clear DTC.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1A2C, B1A2D, B1A2E or B1A2F still detected?
Replace TPMS control module and recheck DTC.
End.

---

## AENLSB0AA404017 - DTC B1A30 / B1A31 / B1A32 / B1A33
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404017.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA404017002 -> unresolved | DTC Confirmation Procedure
- AENLSB0AA404017002 -> unresolved | DTC Confirmation Procedure
- AENLSB0AA404017002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1A30 / B1A31 / B1A32 / B1A33
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1A30: Right Front Tire Pressure Low
B1A31: Left Front Tire Pressure Low
B1A32: Right Rear Tire Pressure Low
B1A33: Left Rear Tire Pressure Low
Tire pressure is lower than specified value.
Air leakage from tire
Tire pressure sensor No.1, No.2, No.3 and/or No.4
TPMS control module
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Set ignition “OFF” and leave ignition “OFF” for 20 minutes or more.
Drive vehicle at 25 km/h (16 mile/h) or more for 10 minutes or more.
DTC Troubleshooting
DTC check
Clear DTC.
Adjust each tire pressure to respective specification.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1A30, B1A31, B1A32 or B1A33 still detected?
Go to Step 2.
Check for air leakage.
Preparation of tool
Prepare recommended tool.
Recommended tool
“VT56”, “VT55”, “VT36” or “VT30” made by ATEQ
Do you have recommended tool?
Go to Step 3.
Go to Step 5.
Tire pressure sensor check
Using recommended tool, check tire pressure sensor for detected DTC.
Is check result OK?
Go to Step 4.
Go to Step 5.
DTC check
Clear DTC.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1A30, B1A31, B1A32 or B1A33 still detected?
Go to Step 5.
Check for intermittent trouble.
DTC check
Replace tire pressure sensor for detected DTC.
Clear DTC.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1A30, B1A31, B1A32 or B1A33 still detected?
Replace TPMS control module and recheck DTC.
End.

---

## AENLSB0AA404018 - DTC B1A40
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404018.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1A40
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1A40: Tire Pressure Sensor Not Learned/Programmed
Tire pressure sensor ID code is not registered in TPMS control module.
TPMS control module
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
DTC check
Is DTC B1A03 detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
Tire pressure sensor ID code registration
Register tire pressure sensor ID code in TPMS control module.
Recheck DTC.
Is DTC B1A40 still detected?
Replace TPMS control module and recheck DTC.
End.

---

## AENLSB0AA404019 - DTC B1A41
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404019.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1A41
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1A41: Vehicle Variant Data Not Programmed
Vehicle variant data is not stored in TPMS control module.
ECM
Combination meter
TPMS control module
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
DTC check
Is DTC B1A03 or B1A40 detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
ECM specification check
Check ECM part number of the vehicle in service.
Is a correct ECM used for the vehicle in service?
Go to Step 3.
Replace ECM with a correct one and recheck DTC.
Combination meter specification check
Check combination meter part number of the vehicle in service.
Is a correct combination meter used for the vehicle in service?
Replace TPMS control module with the correct one and recheck DTC.
Replace combination meter with the correct one and recheck DTC.

---

## AENLSB0AA404020 - DTC B1A42
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404020.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1A42
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1A42: Vehicle Variant Data Mismatched
Inconsistency between vehicle variant data stored in TPMS control module and vehicle information signal transmitted via CAN communication.
ECM
Combination meter
TPMS control module
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
DTC check
Is DTC B1A03 detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
ECM specification check
Check ECM part number of the vehicle in service.
Is a correct ECM used for the vehicle in service?
Go to Step 3.
Replace ECM with a correct one and recheck DTC.
Combination meter specification check
Check combination meter part number of the vehicle in service.
Is a correct combination meter used for the vehicle in service?
Replace TPMS control module with the correct one and recheck DTC.
Replace combination meter with the correct one and recheck DTC.

---

## AENLSB0AA404021 - DTC B1A48
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404021.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1A48
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1A48: Vehicle Speed Wrong Data
This DTC is detected if any one of the following conditions is met.
TPMS control module receives higher tire acceleration data than specified value for specified time continuously even if vehicle speed is lower than 5 km/h (3 mile/h).
TPMS control module receives invalid vehicle speed signal from ECM for specified time continuously.
ECM
Wheel speed sensor
TPMS control module
Tire pressure sensor No.1, No.2, No.3 and/or No.4
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Set ignition “OFF” and leave ignition “OFF” for 20 minutes or more.
Drive vehicle at 25 km/h (16 mile/h) or more for 10 minutes or more on paved road and winding road as much as possible.
DTC Troubleshooting
DTC check
Check DTC in ECM.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Check DTC in ESP ® control module.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
DTC check
Is DTC B1A20, B1A21, B1A22 or B1A23 detected?
Go to troubleshooting for applicable DTC.
Replace TPMS control module and recheck DTC.

---

## AENLSB0AA404022 - DTC B1A49
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404022.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1A49
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1A49: Wheel Speed Sensor Wrong Data
TPMS control module receives invalid wheel speed signal from ESP ® control module for specified time.
Wheel speed sensor
TPMS control module
Tire pressure sensor No.1, No.2, No.3 and/or No.4
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Set ignition “OFF” and leave ignition “OFF” for 20 minutes or more.
Drive vehicle at 25 km/h (16 mile/h) or more for 10 minutes or more on paved road and winding road as much as possible.
DTC Troubleshooting
DTC check
Check DTC in ESP ® control module.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Is DTC B1A20, B1A21, B1A22 or B1A23 detected?
Go to troubleshooting for applicable DTC.
Replace TPMS control module and recheck DTC.

---

## AENLSB0AA404023 - DTC U0073
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404023.xml
Tree scopes: dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC U0073
Refer to
.

---

## AENLSB0AA404024 - DTC U0100
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404024.xml
Tree scopes: dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC U0100
Refer to
.

---

## AENLSB0AA404025 - DTC U0121
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404025.xml
Tree scopes: dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC U0121
Refer to
.

---

## AENLSB0AA404026 - DTC U0140
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404026.xml
Tree scopes: dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC U0140
Refer to
.

---

## AENLSB0AA404027 - DTC U0155
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404027.xml
Tree scopes: dtc: 10 - Control Systems > Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC U0155
Refer to
.

---

## AENLSB0AA404028 - Inspection of TPMS Control Module and Its Circuits
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA404028.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA404028004 -> unresolved | CAN communication signal

Content:
Inspection of TPMS Control Module and Its Circuits
Voltage and Signal Check
Check voltage and/or pulse signal of TPMS control module (1) using voltmeter (2) and oscilloscope (3).
Check that battery voltage is 12 V or more.
The voltage of terminal with asterisk (*) cannot be measured by voltmeter because it is pulse signal. Check it with oscilloscope if necessary.
[A]:
TPMS control module connector (View: [a])
“E452” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
G452-1
—
—
—
—
G452-2
BLK
Ground for TPMS control module
Approx. 0 V
—
G452-3*
WHT
CAN communication line (low)
Refer to
CAN communication signal
.
G452-4*
RED
CAN communication line (high)
G452-5
YEL
Ignition power supply
10 – 14 V
Ignition: “ON”
Approx. 0 V
Other than above condition
G452-6
BLU
Power supply
10 – 14 V
—
Reference Waveform
Oscilloscope display
Shown below is typical waveform display provided by oscilloscope.
How to read waveforms is shown below.
[a]:
Waveform of channel 1
[c]:
VOLT/DIV of each channel
[b]:
Ground level of each channel
[d]:
TIME/DIV
Waveform varies depending on measurement condition and vehicle spec.
CAN communication signal
CAN communication signal (high) (1):
Channel
Probe
Terminal No.
1
+
G452-4
–
G452-2
CAN communication signal (low) (2):
Channel
Probe
Terminal No.
2
+
G452-3
–
G452-2
Measurement condition
Ignition: “ON”

---

## AENLSB0AA406001 - Tire Pressure Sensor Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA406001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Repair Instructions
Outgoing references:
- AENLSB0AA406002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA406002.xml | Tire Pressure Sensor Inspection
- AENLSB0A2406004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A2406004.xml | Tire and/or Tire Pressure Sensor (If Equipped) Mounting and Dismounting

Content:
Tire Pressure Sensor Removal and Installation
Tire Pressure Sensor Inspection
Refer to
Tire and/or Tire Pressure Sensor (If Equipped) Mounting and Dismounting
.

---

## AENLSB0AA406002 - Tire Pressure Sensor Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA406002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Repair Instructions
Outgoing references:
- AENLSB0AA406001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA406001.xml | Tire Pressure Sensor Removal and Installation

Content:
Tire Pressure Sensor Inspection
Tire Pressure Sensor Removal and Installation
Visually check tire pressure sensor for damage. Replace tire pressure sensor if defective.
Using recommended tool, activate tire pressure sensor.
Refer to instruction of recommended tool for activating method of tire pressure sensor.
Recommended tool
“VT56”, “VT55”, “VT36” or “VT30” made by ATEQ
Check information from tire pressure sensor is indicated in recommended tool.
Repeat the activating process once again if no information is indicated.
Replace tire pressure sensor if still no information is indicated.

---

## AENLSB0AA406003 - TPMS Control Module Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA406003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Repair Instructions
Outgoing references:
- AENLSB0AA406004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA406004.xml | Registration Procedure for Tire Pressure Sensor ID Code

Content:
TPMS Control Module Removal and Installation
Removal
Disconnect negative (–) cable at battery.
Remove glove box.
Disconnect TPMS control module connector (1).
Remove bolt (3), and then remove TPMS control module (2).
Installation
Reverse removal procedure noting the following points.
Tighten TPMS control module bolt to specified torque.
TPMS control module bolt
a
9.0
0.92
7.0
If TPMS control module is replaced, perform
Registration Procedure for Tire Pressure Sensor ID Code
.

---

## AENLSB0AA406004 - Registration Procedure for Tire Pressure Sensor ID Code
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA406004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Repair Instructions
Outgoing references: none

Content:
Registration Procedure for Tire Pressure Sensor ID Code
Only 4 ID codes of tire pressure sensor can be registered in TPMS control module. Therefore, register only ID codes of tire pressure sensors that are installed on vehicle wheels. If the ID code of tire pressure sensor of any other tire besides the 4 vehicle tires is registered in TPMS control module, TPMS control module detects an abnormal condition in the system when the vehicle is driven for longer than 10 minutes and blinks the low tire pressure warning light for 75 seconds and then the warning light remains lit.
Manual Learning
Not using SUZUKI scan tool
Check that all doors are closed and ignition is “OFF”.
Open driver side door.
Perform Step a) – c) within 15 seconds after changing ignition to “ON”.
Press driver side door switch within 5 seconds after changing ignition to “ON”. Keep pressing driver side door switch for 2 seconds.
Release driver side door switch and then press driver side door switch for 2 seconds or more.
Release driver side door switch and then press driver side door switch for 2 – 5 seconds.
Using recommended tool (1), activate each tire pressure sensor in order of left-front → left-rear → right-rear → right-front within 180 seconds.
Refer to instruction of recommended tool for activating method of tire pressure sensor.
Recommended tool
“VT56”, “VT55”, “VT36” or “VT30” made by ATEQ
People except the worker for activation may disturb transmissions from the tire pressure sensors.
When tire pressure sensor is activated, ID code of tire pressure sensor is registered automatically in TPMS control module.
If all 4 tire pressure sensor ID codes are not registered in TPMS control module within 180 seconds, perform the above steps again. Also, it is possible to check the number of tire pressure sensor ID codes received by TPMS control module by observing the flashing pattern of low tire pressure warning light.
If registration of tire pressure sensor ID codes is not completed within 180 seconds, former ID codes remain in TPMS control module.
When TPMS control module receives all 4 tire pressure sensor ID codes, TPMS control module turns ON low tire pressure warning light in combination meter for 5 seconds.
[A]:
TPMS control module has received no signal from tire pressure sensor
[D]:
TPMS control module has received 3 signals from tire pressure sensor
[B]:
TPMS control module has received 1 signal from tire pressure sensor
[E]:
TPMS control module has received 4 signals from tire pressure sensor
[C]:
TPMS control module has received 2 signals from tire pressure sensor
Check that low tire pressure warning light in combination meter turns on for 5 seconds. If not, repeat Step 1) – 4).
Set ignition “OFF” after registration is completed.
Using SUZUKI scan tool
Check that ignition is “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Select “TPS ID registration” under “Utility” mode of SUZUKI scan tool.
Using recommended tool (1), activate each tire pressure sensor in order of left-front → left-rear → right-rear → right-front according to the instructions displayed on SUZUKI scan tool within 180 seconds.
Refer to the instruction of recommended tool for activating method of tire pressure sensor.
Recommended tool
“VT56”, “VT55”, “VT36” or “VT30” made by ATEQ
People except the worker for activation may disturb transmissions from the tire pressure sensors.
When tire pressure sensor is activated, ID code of tire pressure sensor is registered automatically in TPMS control module.
When registering tire pressure sensor ID codes using SUZUKI scan tool, former ID codes are cleared. Therefore, if registration is not completed, perform the above steps again.
When TPMS control module receives all 4 tire pressure sensor ID codes, TPMS control module turns ON low tire pressure warning light in combination meter for 5 seconds.
[A]:
TPMS control module has received no signal from tire pressure sensor
[D]:
TPMS control module has received 3 signals from tire pressure sensor
[B]:
TPMS control module has received 1 signal from tire pressure sensor
[E]:
TPMS control module has received 4 signals from tire pressure sensor
[C]:
TPMS control module has received 2 signals from tire pressure sensor
Check that low tire pressure warning light in combination meter turns on for 5 seconds. If not, repeat Step 1) – 4).
Set ignition “OFF”, and then disconnect SUZUKI scan tool from DLC.
Automatic Learning
Set ignition “OFF” and leave ignition “OFF” for 20 minutes or more.
Drive vehicle at 25 km/h (16 mile/h) or more for 10 minutes or more.
Check that low tire pressure warning light in combination meter turns off. If not, repeat Step 1).
When tire pressure sensor is activated and driving vehicle at 25 km/h (16 mile/h) or more for 10 minutes or more, ID code of tire pressure sensor is registered automatically in TPMS control module.

---

## AENLSB0AA406005 - TPMS Setting Procedure
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA406005.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Repair Instructions
Outgoing references: none

Content:
TPMS Setting Procedure
The Tire Placard (1) affixed to vehicle body indicates two types of setting modes for TPMS, “Comfort (Unladen)” (2) and “Load (Laden)” (3). The system is set to “Comfort” as default.
When changing the tire pressure to suit the driving condition, the TPMS setting mode also needs to be changed as follows.
Set ignition “ON”.
Push and hold indicator selector knob (1) for more than 3 seconds.
Turn the indicator selector knob to left or right and select “TPMS” (2).
Turn the indicator selector knob to left or right and select “TPMS Mode” (3).
Select a mode from “Comfort Mode” (1) or “Load Mode” (2) depending on tire pressure to be set.
Push indicator selector knob. Registration is complete if “Successful” (3) is displayed.
Adjust the tire pressure to the specified range depending on the configured setting mode.

---

## AENLSB0AA407001 - Tightening Torque Specifications
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA407001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Specifications
Outgoing references:
- AENLSB0AA403001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA403001.xml | TPMS Component Location
- AENLSB0A0101006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0101006.xml | Fasteners Information

Content:
Tightening Torque Specifications
Fastening part
Tightening torque
Note
N·m
kgf-m
lbf-ft
TPMS control module bolt
9.0
0.92
7.0
Reference:
For the tightening torques of fasteners not specified in this page, refer to:
TPMS Component Location
Fasteners Information

---

## AENLSB0AA408001 - Special Tool
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA408001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10D - Tire Pressure Monitoring System > Special Tools and Equipment
Outgoing references: none

Content:
Special Tool
SUZUKI scan tool (Suzuki SDT-II)
—

---

## AENLSB0AA500001 - Precautions for Diagnosing Trouble
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA500001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Precautions
Outgoing references:
- AENLSB0AA200001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA200001.xml | Precautions for Diagnosing Trouble

Content:
Precautions for Diagnosing Trouble
Keyless start control system is controlled by BCM. Before confirming diagnosing troubles, refer to
Precautions for Diagnosing Trouble
.

---

## AENLSB0AA500002 - Precautions for Replacing Remote Controller
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA500002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Precautions
Outgoing references:
- AENLSB0AA200002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA200002.xml | Precautions for Replacing Remote Controller

Content:
Precautions for Replacing Remote Controller
Refer to
Precautions for Replacing Remote Controller
.

---

## AENLSB0AA500003 - Precautions for Remote Controller Disposal
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA500003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Precautions
Outgoing references:
- AENLSB0AA200003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA200003.xml | Precautions for Remote Controller Disposal

Content:
Precautions for Remote Controller Disposal
Refer to
Precautions for Remote Controller Disposal
.

---

## AENLSB0AA500004 - Precautions for Replacing BCM
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA500004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Precautions
Outgoing references:
- AENLSB0AA200004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA200004.xml | Precautions for Replacing BCM

Content:
Precautions for Replacing BCM
Refer to
Precautions for Replacing BCM
.

---

## AENLSB0AA501001 - Keyless Start System (Keyless Push Start System) Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA501001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > General Description
Outgoing references: none

Content:
Keyless Start System (Keyless Push Start System) Description
Keyless start system (keyless push start system) has three functions as described below.
Door lock function:
Door can be locked or unlocked by pushing the door request switch incorporated in the outside handle of door while carrying remote controller.
Keyless entry system function:
Door can be locked or unlocked by pushing the lock or unlock button of remote controller.
Keyless engine start function:
Ignition mode can be switched and engine can be started / stopped by depressing brake pedal (A/T model) or clutch pedal (M/T model) and pushing engine switch while carrying the remote controller.
If the remote controller battery has run down or a system malfunction has occurred, doors can be locked or unlocked with the emergency key built into remote controller and the engine can be started by touching the remote controller to the engine switch.
If there is a malfunction in CAN communication line, ECM, or the BCM, etc., ignition mode cannot be changed to “OFF” due to fail-safe operation. Follow the following procedure to stop engine. Check that engine is not started until malfunction has been repaired.
Push and hold engine switch for approximately 2 seconds or repeat push and release of engine switch 3 times with brake pedal (A/T model) or clutch pedal (M/T model) released to stop engine. Ignition mode switches to “ACC” in this case.
Disconnect negative (–) cable at battery until malfunction has been repaired to prevent battery from going flat.

---

## AENLSB0AA501002 - Description of Keyless Start System Parts and Functions
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA501002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > General Description
Outgoing references:
- AENLSB0AA503001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA503001.xml | Keyless Start System Component Location

Content:
Description of Keyless Start System Parts and Functions
Keyless Start System Component Location
Part
Construction / Function
BCM
Installed on underside of instrument panel at left side. Transmits information through CAN communication between ECM and combination meter, etc.
Monitors status of each request switch, door switch and engine switch. Makes requests for locking and unlocking doors, starting engine, and releasing steering lock.
Remote controller
Receives request signal from each antenna. Transmits ID code and request signal to BCM. Also includes the following equipment and functions.
Operation indicator light
When ignition mode is “ON”, if battery voltage falls, transmits signal to BCM to indicate remote controller battery is running down and displays “KEY FOB LOW BATTERY” in information display to alert driver to replace battery.
Emergency key to lock or unlock doors when keyless start system does not operate because of run-down battery, etc.
Lock / unlock buttons to lock or unlock doors using keyless entry system function.
Engine switch
Located on instrument panel at driver side. Includes push switch that detects operation status.
Driver side outside antenna
Included in outside door handle. Transmits request signals to remote controller outside vehicle.
Passenger side outside antenna
Rear outside antenna
Located in back side of back panel. Transmits request signals to remote controller outside vehicle.
Mid inside antenna
Located in floor console box. Transmits request signals to remote controller inside vehicle.
Rear inside antenna
Located on back side of tail end trim. Transmits request signals to remote controller in luggage compartment.
Driver door request switch
Located on each outside door handle. Transmits ON/OFF information from each door request switch to BCM.
Passenger door request switch
Rearend door request switch
Located in rearend door. Transmits ON/OFF information from rearend door request switch to BCM.
Each door switch
Transmits open / close information from each door to BCM.
Rearend door switch
Included in rearend door latch. Transmits open / close information from rearend door to BCM.
Steering lock unit
Located in steering column. Releases or locks steering lock.
Includes unlock detection switch and lock detection switch which detect steering lock status. Outputs status to BCM through serial communication.
Immobilizer indicator light
Located in combination meter. Goes out if ID code of remote controller matches when engine switch is pushed. Lights up if remote controller cannot be detected when engine switch is pushed.
Lights up or blinks when system malfunction has occurred.
Theft deterrent light
Located in hazard warning switch. Lights up or blinks when security alarm is set or system malfunction has occurred.
Information display
Located in combination meter. Alerts driver by displaying messages.
ACC relay
Included in J/B. Switch ignition mode under control by BCM.
IG11 relay
IG21 relay, IG22 relay, IG23 relay
Starting motor control relay
Located in relay box. Turns ON and supplies power to starting motor when BCM determines that engine starting is possible.
P position switch (A/T model)
Located in select lever. Transmits “P” range information from select lever to BCM.
TCM (A/T model)
Located on transaxle case. Controls ground circuit of starting motor control relay.
Transmission range sensor is incorporated, and transmits shift position information to BCM through CAN communication.
Brake light switch (A/T model)
Located on brake pedal. Transmits operation information from brake pedal to BCM.
CPP switch (M/T model)
Located on clutch pedal. Transmits operation information from clutch pedal to BCM.
Outside warning buzzer
Located on outside of cowl side outer member on the left side. Sounds when alarm or warning function operates.
Driver / passenger door lock switch
Included in both front door lock actuators. Transmits lock / unlock information from driver / passenger door to BCM.
ECM
Detects state of brake light switch, and transmits this information to BCM through CAN communication.
ESP ® control module
Outputs vehicle speed signal to BCM. BCM detects the vehicle state of drive / stop based on this signal.

---

## AENLSB0AA501003 - Description of Keyless Start System Door Lock Function
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA501003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > General Description
Outgoing references: none

Content:
Description of Keyless Start System Door Lock Function
Lock / Unlock Using Door Request Switch
Lock / unlock the doors using door request switch as shown below.
Push door request switch incorporated in the outside handle of driver or passenger door or the rearend door.
BCM (1) activates each antenna to send request signal to remote controller (2).
The remote controller that receives request signal sends ID code to BCM.
If ID code corresponds with registered code in BCM, and BCM determines that remote controller is not in vehicle compartment, it activates door lock actuator.
[A]:
Signal flow “1” – “4” linked with Step 1) – 4)
6.
Mid inside antenna
10.
Rear outside antenna
3.
Driver door request switch
7.
Rear inside antenna
11.
Each door lock actuator
4.
Passenger door request switch
8.
Driver side outside antenna
5.
Rearend door request switch
9.
Passenger side outside antenna
Operation area
Distance between remote controller and each door antenna should be within approximately 80 cm (31.5 in, 2.6 ft.) (1), to ensure operation of door lock function. Also, locking and unlocking are possible only when remote controller is within operation area where request switch has been pushed. (For example: When driver door request switch has been pushed, remote controller should be within operation area of driver side outside antenna.)
Door lock function may not operate if remote controller is placed too close to vehicle, near to the ground, or too high up.
Door lock function may not operate if the same type of vehicles equipped with keyless start system are placed next to each other, and both keyless start systems operate at the same time.
Door lock function may not operate if a registered remote controller and an unregistered remote controller are carried at the same time.
2.
Driver side outside antenna
4.
Rear outside antenna
3.
Passenger side outside antenna
Safety function
Doors cannot be locked with door request switch when any of the following conditions is present.
Ignition is “ACC” or “ON”.
One of the doors is open.
BCM determines that remote controller is in vehicle compartment.
Remote controller lock-in vehicle prevention function
This function prevents driver from locking doors and leaving vehicle with remote controller left behind in vehicle compartment.
When mid inside antenna (1) or rear inside antenna (2) detects remote controller (i.e., remote controller is in the vehicle compartment) under the following condition, BCM activates door lock actuator to unlocks the door.
Doors are locked with key cylinder (emergency key), door lock knob or power door lock switch with one of the front doors open.
Remote controller lock-in vehicle prevention function may not operate when remote controller is on instrument panel, in one of the storage boxes, around the foot area of driver side or passenger side, or in door pocket, etc.
When keyless start system function is off, remote controller lock-in vehicle prevention function does not operate.
3.
Mid inside antenna detection area
4.
Rear inside antenna detection area
Timer Lock Function
This function automatically locks doors again if doors are unlocked with door request switch or keyless entry system and no door is opened within approximately 30 seconds.

---

## AENLSB0AA501004 - Description of Keyless Engine Start Function
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA501004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > General Description
Outgoing references: none

Content:
Description of Keyless Engine Start Function
Changing Ignition Mode
When engine switch is pushed with remote controller inside cabin and brake pedal (A/T model) or clutch pedal (M/T model) released, BCM compares the ID code sent by remote controller with the ID code registered in BCM. When these ID codes match, BCM controls ON/OFF of the ACC and IG relays according to engine switch operation for switching ignition mode from “OFF” → “ACC” → “ON” (engine not running) → “OFF”. When ignition mode is “ACC”, “IGNITION SWITCH POSITION ACC” is shown on the information display. When mode is “ON” (engine not running), “IGNITION SWITCH POSITION ON” is shown on the information display.
For A/T model, BCM judges whether select lever is in “P” position or not by the state of P position switch. This inhibits ignition mode switching from “ACC” to “OFF” with select lever in any position other than “P” position.
Table below shows transition of ignition mode according to engine switch operation. One arrow indicates transition by pressing engine switch once.
Except in emergency situations, do not stop engine while driving.
[A]:
A/T model
[E]:
Shift only while the vehicle is stopped
[B]:
M/T model
[F]:
While driving (shift when holding the engine switch down longer or repeat push and release of engine switch 3 times)
[C]:
Always shift
*1.
While driving, shift when holding the engine switch down longer or repeat push and release of engine switch 3 times
[D]:
Shift only when the ID code sent from the remote controller matches
Starting Engine
The method of starting engine is as follows.
When brake pedal is depressed with shift position in “P” or “N” (A/T model) or when clutch pedal is depressed (M/T model), BCM (1) sends request signal to combination meter (2) through CAN communication to display “PUSH START SWITCH” on the information display.
Push engine switch (3) with remote controller (4) being carried.
BCM activates each antenna to send request signal to remote controller.
Remote controller receives request signal and then sends ID code to BCM.
If ID code corresponds with registered code in BCM, and BCM determines that remote controller is in vehicle compartment, BCM outputs a steering lock release request signal to steering lock unit (5) through serial communication. At the same time, it outputs engine start signal to ECM (6) and turns the starting motor control relay ON to activate the starting motor (7). This enables the steering lock to be released and the engine to be started.
[A]:
Signal flow “1” – “5” linked with Step 1) – 5)
9.
Rear inside antenna
11.
Passenger side outside antenna
8.
Mid inside antenna
10.
Driver side outside antenna
12.
Rear outside antenna
Operation area
Engine can be started when remote controller is within mid inside antenna detection area (1).
Keyless engine start function may not operate when remote controller is on instrument panel, in one of the storage boxes, around foot area of driver side or passenger side, in door pocket, or in luggage compartment etc.
2.
Mid inside antenna
Engine Cannot Be Started
When remote controller is not in vehicle compartment or there is only an unregistered one in vehicle compartment, BCM sends immobilizer indicator light request signal and information display request signal to combination meter through CAN communication to warn driver. At the same time, it turns ACC, IG and starting motor control relays OFF to inhibit ignition mode from switching and the starting motor from activating.
If remote controller battery has run down or system malfunction has occurred, engine can be started by placing remote controller on the engine switch as an emergency measure.

---

## AENLSB0AA501005 - Description of Keyless Start System Alarm Function
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA501005.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > General Description
Outgoing references: none

Content:
Description of Keyless Start System Alarm Function
This function warns driver using outside warning buzzer, warning buzzer built in combination meter, immobilizer indicator light, remote controller battery consumption warning light, information display and theft deterrent light.
*1: Mode (active / inactive) can be switched.
*2: Alarm may operate even when remote controller battery has run down.
Alarm function
Condition
Outside warning buzzer
Warning buzzer (in combination meter)
Indicator light / Display on information display
Ignition mode alarm
One of door request switches is pushed while ignition mode in “ACC” or “ON”, remote controller is outside the vehicle, and all doors are closed.
Once (2 sec.)
—
—
Door ajar alarm 1
One of door request switches is pushed while ignition mode in “OFF”, remote controller is outside the vehicle, and one of doors is opened.
Once (2 sec.)
—
—
Door ajar alarm 2
Doors are locked with keyless entry system while one of doors is opened and ignition mode is “OFF”.
Remote controller lock-in prevention alarm 1
One of door request switches is pushed while ignition mode in “OFF”, remote controller is in vehicle compartment or luggage compartment, and all doors are closed.
Once (2 sec.)
—
—
Remote controller lock-in prevention alarm 2 (if equipped)
“Lock” button of remote controller is pushed while ignition mode in “OFF”, remote controller is in vehicle compartment or luggage compartment, and all doors are closed.
Once (2 sec.)
—
—
Remote controller battery run down alarm *1
Remote controller transmits remote controller battery run down signal to BCM while ignition mode in “ON”.
—
—
“KEY FOB LOW BATTERY” is displayed
Remote controller out of detection area alarm *2
No registered remote controller is in vehicle compartment when engine switch is pushed while ignition mode in “OFF”.
—
*1
Immobilizer indicator light lights up (5 sec.)
“PLACE KEY FOB ON START SWITCH” is displayed
“KEY FOB NOT DETECTED” is displayed
Steering lock abnormal condition alarm
Driver door is opened with steering lock not locked while ignition mode in “ACC” or has switched from “ON” to “OFF”.
—
Intermittent
“SERVICE STEERING LOCK SYSTEM” is displayed
Remote controller carried-out alarm
Remote controller is carried out of vehicle, one of doors is opened, and then all doors are closed while ignition mode in “ON” or “ACC”.
5 times
5 times
Immobilizer indicator light lights up
“KEY FOB NOT DETECTED” is displayed
Remote controller is carried out of vehicle and engine switch is pushed with brake pedal (A/T model) or clutch pedal (M/T model) depressed while ignition mode in “ON” or “ACC”.
Immobilizer indicator light lights up
“PLACE KEY FOB ON START SWITCH” is displayed
“KEY FOB NOT DETECTED” is displayed
System malfunction alarm
Malfunction has been detected in keyless start system.
—
—
Immobilizer indicator light lights up or theft deterrent light blinks
“SERVICE START SYSTEM” is displayed

---

## AENLSB0AA501006 - CAN Communication System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA501006.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > General Description > Models > K14C
Outgoing references: none

Content:
CAN Communication System Description
BCM uses CAN communication to communicate with other control module. For more detail of CAN communication, refer to “Communication System Description” in Section 10H.
K14C model:

---

## AENLSB0AA502001 - Keyless Start System Input / Output Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA502001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Schematic and Routing Diagram
Outgoing references: none

Content:
Keyless Start System Input / Output Diagram

---

## AENLSB0AA502002 - Keyless Start System Electric Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA502002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Schematic and Routing Diagram
Outgoing references:
- AENLSB0AA202002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA202002.xml | Body Electrical Control System Circuit Diagram

Content:
Keyless Start System Electric Circuit Diagram
Refer to
Body Electrical Control System Circuit Diagram
.

---

## AENLSB0AA503001 - Keyless Start System Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA503001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Component Location
Outgoing references: none

Content:
Keyless Start System Component Location
The figure shows LHD. For RHD, parts with (*) are installed at the opposite side.
[A]:
A/T model
10.
Rear inside antenna
21.
Steering lock unit
[B]:
M/T model
11.
Rearend door opener actuator (included in rearend door switch)
22.
Brake light switch
1.
ECM
12.
Rearend door request switch
23.
CPP No.1 switch
2.
ESP ® control module
13.
Front door lock actuator (included in door lock switch)
24.
CPP No.2 switch
3.
Starting motor control relay
14.
Rear outside antenna
25.
P position switch
4.
Driver side outside antenna / Passenger side outside antenna
15.
Combination meter
26.
Mid inside antenna
5.
Door request switch
16.
Immobilizer indicator light
27.
Remote controller
6.
Rear door lock actuator
17.
Information display
28.
Operation indicator light
7.
Door switch
18.
BCM
29.
Emergency key
8.
Outside warning buzzer
19.
Theft deterrent light
9.
TCM
20.
Engine switch

---

## AENLSB0AA504001 - Keyless Start System Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA504001006 -> unresolved | Step 3: Trouble Symptom Confirmation
- AENLSB0AA504001006 -> unresolved | Step 3: Trouble Symptom Confirmation

Content:
Keyless Start System Check
Step 1: Customer Complaint Analysis
Record details of problem (failure, complaint) and how it occurred as described by the customer. For this purpose, such a questionnaire form shown below will facilitate collecting information required for proper analysis and diagnosis.
Customer questionnaire form (Example)
Step 2: DTC Check
Check DTC stored in BCM memory.
In case that current DTC is detected:
Perform applicable DTC troubleshooting for current DTC and repair or replace faulty parts.
In case that history DTC is detected:
Record DTC and then clear DTC once.
Perform
Step 3: Trouble Symptom Confirmation
.
Referring to “Circuit Diagram” and “Trouble Area” in applicable DTC troubleshooting, check related parts that are prone to cause intermittent trouble (e.g. wire harness, connector, etc.) for detected history DTC.
Check intermittent trouble.
Do not follow DTC troubleshooting flow for intermittent trouble.
In case that there is no DTC:
Perform
Step 3: Trouble Symptom Confirmation
.
If there is “Symptom Diagnosis” procedure for any possible cause, perform corresponding “Symptom Diagnosis” procedure.
Step 3: Trouble Symptom Confirmation
Check if what customer claimed in “Customer Questionnaire” is actually found in vehicle and if that symptom is found (This step should be shared with customer if possible.). Also, check if DTC is detected or not.
Step 4: Final Confirmation Test
Check that the problem symptom has gone and keyless start system is free from any abnormal conditions. If what has been repaired is related to malfunction DTC, recheck DTC and check that no DTC is indicated. If history DTC is detected, clear DTC.

---

## AENLSB0AA504002 - Keyless Start System Symptom Diagnosis
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures > Models > K14C
Outgoing references:
- AENLSB0AA306003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA306003.xml | ECM / ISG Registration
- AENLSB0AA504002003 -> unresolved | Diagnosis flow: [a]

Content:
Keyless Start System Symptom Diagnosis
Diagnosis Flow Selection Table
Problem
Diagnosis flow
Hard starting
Engine can be cranked, but engine does not start. (Cranking time: For an instant)
[a]
Engine can be cranked, but engine does not start. (Cranking time: For 10 – 12 sec.)
[b]
Engine cannot be cranked
Ignition mode can be changed to “ACC” or “ON”, but engine does not crank.
[c]
Ignition mode does not change from “OFF” and engine does not crank.
[d]
Engine cannot be stopped
Engine cannot be stopped.
[e]
Ignition mode does not change
Ignition mode does not change to “OFF”.
[f]
Ignition mode does not change from certain position.
[g]
Ignition mode is changed to “OFF” from “ACC” but takes time.
[h]
Troubleshooting
Diagnosis flow: [a]
Battery voltage check
Check battery voltage.
Is check result OK?
Go to Step 2.
Charge or replace battery.
Scan tool communication check
Connect SUZUKI scan tool to DLC.
Set ignition “ON”.
Check that communication with scan tool and BCM is possible.
Is check result OK?
Go to Step 3.
Check CAN communication circuit, connector and/or terminal connection.
K14C model:
DTC check
Check DTC in BCM.
Is current DTC U0073 and/or U0100 detected?
Go to Step 4.
Go to Step 9.
CAN communication circuit check
Set ignition “OFF”.
Check CAN communication circuit between ECM and BCM.
K14C model:
Is check result OK?
Go to Step 5.
Repair or replace defective part.
ECM power supply and ground circuit check
Check ECM power supply and ground circuits.
K14C model:
Is check result OK?
Go to Step 6.
Repair or replace defective wire harness.
DTC check
Set ignition “OFF”.
Connect connectors to all control modules and then check for proper connector connection to all control modules.
If connections are OK, set ignition “ON”.
Check DTC in BCM.
Is current DTC U0073 and/or U0100 detected?
Go to Step 8.
Go to Step 7.
Engine start check
Does engine start?
Intermittent trouble. (poor connection of control module connector(s))
Go to Step 8.
BCM power supply and ground circuit check
Check BCM power supply and ground circuits.
Is check result OK?
Replace ECM and recheck keyless start system.
K14C model:
Repair or replace defective wire harness.
DTC recheck
Set ignition “ON”.
Recheck DTC in BCM.
Is current DTC B1194 detected?
Check starting motor control relay connection, and go to troubleshooting for applicable DTC.
Go to Step 10.
ECM power supply and ground circuit check
Check ECM power supply and ground circuits.
K14C model:
Is check result OK?
Go to Step 11.
Repair or replace defective wire harness.
BCM power supply and ground circuit check
Check BCM power supply and ground circuits.
Is check result OK?
Go to Step 12.
Repair or replace defective wire harness.
Engine start check
Replace ECM.
K14C model:
Perform
ECM / ISG Registration
.
Start engine.
Does engine start?
End. (ECM was faulty).
Replace BCM and recheck keyless start system.
Diagnosis flow: [b]
Engine cranking check
Depress brake pedal (A/T model) or clutch pedal (M/T model) and push engine switch and perform engine cranking.
Release engine switch.
Does cranking stop at the same time to release of engine switch?
Go to
Diagnosis flow: [a]
.
Go to Step 2.
Immobilizer indicator light check
Does immobilizer indicator light blink in engine cranking?
Go to Step 5.
Go to Step 3.
Engine start check
Depress brake pedal (A/T model) or clutch pedal (M/T model) and push engine switch again. (push engine switch for longer than Step 1)
Release engine switch.
Does engine start?
Go to Step 4.
Perform “Engine Symptom Diagnosis in Section 1A.
K14C model:
DTC check
Check DTC in ECM and BCM.
ECM
K14C model:
BCM:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Intermittent trouble. (electromagnetic interference)
Remote controller check
Check that remote controller is within inside antenna detection area.
Move remote controller to inside of antenna detection area, when remote controller is put in the following.
On instrument panel
In one of the storage boxes
Around the foot area of driver side or passenger side
In door pocket, etc.
Confirm whether object causing electromagnetic interference is not attached to remote controller.
Remove the following objects from remote controller, if attached.
Metallic container
Remote controller of other vehicle.
Unregistered remote controller
Cellular-telephone
Remove aftermarket devices from accessory socket, if installed.
Start engine.
Does engine start?
Intermittent trouble. (electromagnetic interference or remote controller is carried out of vehicle)
Faulty immobilizer control system.
Diagnosis flow: [c]
Battery voltage check
Check battery voltage.
Is check result OK?
M/T model: Go to Step 2.
A/T model: Go to Step 3.
Charge or replace battery.
CPP No.1 switch check
Set ignition “ON”.
Depress clutch pedal.
Is “PUSH START SWITCH” indicated on information display?
Go to Step 7.
Inspect or adjust CPP No.1 switch.
Shift position check
Set ignition “ON”.
Shift select lever to other than “P” and “N” ranges.
Shift select lever to “P” or “N” range.
Repeat Step 2) – 3) several times.
Shift select lever to “P” or “N” range.
Depress brake pedal and push engine switch and perform engine cranking.
Is engine cranking?
Intermittent trouble. (condition of keyless engine start function is not concluded)
Go to Step 4.
TCM circuit check
Check TCM circuit.
Is check result OK?
Go to Step 5.
Replace TCM and recheck keyless start system.
Brake light switch check
Set ignition “ON”.
Shift select lever to “P” range.
Depress brake pedal.
Is “PUSH START SWITCH” indicated on information display?
Go to Step 6.
Inspect or adjust brake light switch and brake pedal.
Brake light switch inspection:
Brake light switch adjustment:
Brake pedal free height inspection:
Brake pedal play inspection:
Steering lock unit check
Set ignition “ON” while turning steering wheel to the right and left.
Check that steering lock is released and steering wheel operation is enabled.
Is check result OK?
Go to Step 7.
Check steering lock unit.
DTC check
Set ignition “ON”.
Check DTC in BCM.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 8.
DTC check
Check DTC in other than BCM.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 9.
BCM power supply and ground circuit check
Check BCM power supply and ground circuits.
Is check result OK?
Go to Step 10.
Repair or replace defective wire harness.
Engine start check
Set ignition “OFF”.
Check for proper connector connection to BCM connectors.
If connections are OK, start engine.
Does engine start?
Intermittent trouble. (poor connection of BCM connector(s))
Replace BCM and recheck keyless start system.
Diagnosis flow: [d]
Battery voltage check
Check battery voltage.
Is check result OK?
Go to Step 2.
Charge or replace battery.
Remote controller check
Push engine switch.
Is “KEY FOB NOT DETECTED” indicated on information display?
Go to Step 3.
Go to Step 4.
Remote controller check
Check that remote controller is within inside antenna detection area.
Move remote controller to inside of antenna detection area, when remote controller is put in the following.
On instrument panel
In one of the storage boxes
Around the foot area of driver side or passenger side
In door pocket, etc.
Confirm whether object causing electromagnetic interference is not attached to remote controller.
Remove the following objects from remote controller, if attached.
Metallic container
Remote controller of other vehicle.
Unregistered remote controller
Cellular-telephone
Check remote controller battery, and replace if necessary.
Push engine switch.
Does ignition mode change?
Intermittent trouble. (electromagnetic interference or remote controller is carried out of vehicle or remote controller battery is run down)
Go to Step 4.
Remote controller check
Remove aftermarket devices from accessory socket, if installed.
Place remote controller on passenger seat cushion.
Check that ignition is “OFF”.
Check operation indicator light of remote controller blinks instantly when engine switch is pushed.
Is check result OK?
Go to Step 8.
Go to Step 5.
Engine switch check
Check engine switch.
Is check result OK?
Go to Step 6.
Replace engine switch.
Inside antenna check
Check mid inside antenna and rear inside antenna.
Is check result OK?
Go to Step 7.
Replace defective inside antenna.
Mid inside antenna:
Rear inside antenna:
Remote controller registration
Perform “Immobilizer Key Registration”.
Start engine.
Does engine start?
End. (remote controller was not registered)
Go to Step 8.
DTC check
Check DTC in BCM.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 9.
BCM power supply and ground circuit check
Check BCM power supply and ground circuits.
Is check result OK?
Go to Step 10.
Repair or replace defective wire harness.
Engine start check
Set ignition “OFF”.
Check for proper connector connection to BCM connectors.
If connections are OK, start engine.
Does engine start?
Intermittent trouble. (poor connection of BCM connector(s))
Replace BCM and recheck keyless start system.
Diagnosis flow: [e]
Engine stop check
For M/T model, place gear shift lever in “Neutral”.
For A/T model, shift select lever to “P” range.
Apply parking brake.
Push and hold engine switch for approx. 2 seconds, or repeat push and release of engine switch 3 times.
Does engine stop, and ignition mode change to “ACC”?
Go to Step 2.
Go to Step 5.
DTC check
Set ignition “ON”.
Check DTC in BCM.
Is current DTC U0073 and/or U0100 detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
DTC check
Set ignition “ON”.
Check DTC in ECM.
K14C model:
Is current DTC P0500 and/or U0121 detected?
Go to troubleshooting for applicable DTC.
Go to Step 4.
ESP® control module check
Check state of the following warning lights.
Seat belt reminder light: Does not blink
ABS warning light: Does not light up
ESP ® warning light: Does not light up
Brake warning light: Does not light up
Is check result OK?
Go to Step 5.
Faulty wheel speed sensor or ESP ® control module.
Engine switch check
Check engine switch.
Is check result OK?
Go to Step 6.
Replace engine switch.
DTC check
Check DTC in BCM.
Is current DTC B1192 and/or B1193 detected?
Go to troubleshooting for applicable DTC.
Go to Step 7.
BCM power supply and ground circuit check
Check BCM power supply and ground circuits.
Is check result OK?
Go to Step 8.
Repair or replace defective wire harness.
Engine start check
Set ignition “OFF”.
Check for proper connector connection to BCM connectors.
If connections are OK, start engine.
Does engine start?
Intermittent trouble. (poor connection of BCM connector(s))
Replace BCM and recheck keyless start system.
Diagnosis flow: [f]
M/T model
CPP No.1 switch check
Check CPP No.1 switch.
Is check result OK?
Go to Step 2.
Adjust or replace CPP No.1 switch.
Adjust:
Replace:
BCM power supply and ground circuit check
Check BCM power supply and ground circuits.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Engine start check
Set ignition “OFF”.
Check for proper connector connection to BCM connectors.
If connections are OK, start engine.
Does engine start?
Intermittent trouble. (poor connection of BCM connector(s))
Replace BCM and recheck keyless start system.
A/T model
Shift position check
Set ignition “ON”.
Depress brake pedal and shift select lever to other than “P” range.
Depress brake pedal and shift select lever to “P” range.
Repeat Step 2) – 3) several times.
Release brake pedal.
Push engine switch and set ignition “OFF”.
Does ignition mode change to “OFF”?
Intermittent trouble. (select lever was not in “P” range)
Go to Step 2.
P position switch check
Check P position switch.
Is check result OK?
Go to Step 3.
Replace select lever.
TCM circuit check
Check TCM circuit.
Is check result OK?
Go to Step 4.
Replace TCM and recheck keyless start system.
BCM power supply and ground circuit check
Check BCM power supply and ground circuits.
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
Engine start check
Set ignition “OFF”.
Check for proper connector connection to BCM connectors.
If connections are OK, start engine.
Does engine start?
Intermittent trouble. (poor connection of BCM connector(s))
Replace BCM and recheck keyless start system.
Diagnosis flow: [g]
Engine switch check
Check engine switch.
Is check result OK?
Go to Step 2.
Replace engine switch.
DTC check
Set ignition “ON”, if possible.
Check DTC in BCM.
Is current DTC B1191, B1192 and/or B1193 detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
BCM power supply and ground circuit check
Check BCM power supply and ground circuits.
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Engine start check
Set ignition “OFF”.
Check for proper connector connection to BCM connectors.
If connections are OK, start engine.
Does engine start?
Intermittent trouble. (poor connection of BCM connector(s))
Replace BCM and recheck keyless start system.
Diagnosis flow: [h]
Aftermarket device check
Remove aftermarket devices from accessory socket, if installed.
Set ignition “ACC”.
Set ignition “OFF”.
Did switching time of ignition mode from “ACC” to “OFF” change?
Faulty power supply circuit of aftermarket device.
Go to Step 2.
DTC check
Set ignition “ON”.
Check DTC in BCM.
Is DTC B1191 detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
BCM power supply and ground circuit check
Check BCM power supply and ground circuits.
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Engine start check
Set ignition “OFF”.
Check for proper connector connection to BCM connectors.
If connections are OK, start engine.
Does engine start?
Intermittent trouble. (poor connection of BCM connector(s))
Replace BCM and recheck keyless start system.

---

## AENLSB0AA504003 - BCM Self-Diagnosis Function
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA204002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204002.xml | BCM Self-Diagnosis Function

Content:
BCM Self-Diagnosis Function
Refer to
BCM Self-Diagnosis Function
.

---

## AENLSB0AA504004 - DTC Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA204003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204003.xml | DTC Check

Content:
DTC Check
Refer to
DTC Check
.

---

## AENLSB0AA504005 - DTC Clearance
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504005.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA204004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204004.xml | DTC Clearance

Content:
DTC Clearance
Refer to
DTC Clearance
.

---

## AENLSB0AA504006 - DTC Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504006.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC Table
*1: Theft deterrent light blinks.
*2: Immobilizer indicator light lights up.
*3: “KEY FOB LOW BATTERY” is shown in information display.
DTC
DTC name
DTC detecting condition
Warning
B1103
Mid Inside Antenna Circuit
Mid inside antenna does not operate, even if mid inside antenna is ON.
*1
B1104
Luggage Antenna Circuit
Rear inside antenna does not operate, even if rear inside antenna is ON.
*1
B1105
Driver Side Antenna Circuit
Driver side outside antenna does not operate, even if driver side outside antenna is ON.
*1
B1106
Passenger Side Antenna Circuit
Passenger side outside antenna does not operate, even if passenger side outside antenna is ON.
*1
B1107
Rear Outside Antenna Circuit
Rear outside antenna does not operate, even if rear outside antenna is ON.
*1
B1108
BCM Internal Defect
BCM internal failure.
*1
B1125
Clutch / Shift Switch Malfunction
M/T model:
Inconsistency between signals from CPP No.1 switch or CPP No.2 switch and inhibit switch signal transmitted via CAN communication.
A/T model:
Inconsistency between transmission range sensor signal and P position switch signal or transmission shift position signal transmitted via CAN communication.
*2
B1126
P Position Switch Malfunction
P position switch ON signal is detected while vehicle running. (10 km/h (6 mile/h) or more)
*2
B1134
Remote Controller Battery Low
Remote controller battery run down signal is received from remote controller.
*3
B1137
Brake Light Switch Malfunction
Inconsistency between brake light switch signal and the data signal transmitted via CAN communication.
*2
B115C
Steering Lock Unit Actuator Power Supply Circuit (Steering Lock Unit)
Any of the following conditions is met.
Steering lock unit power supply circuit is open.
Steering lock unit internal failure.
*2
B115D
Steering Lock Unit Performance
Lock operation failure.
*2
B115E
Steering Lock Unit Power Supply Circuit (BCM)
Any of the following conditions is met.
Steering lock unit power supply circuit is shorted to ground.
BCM internal failure.
*2
B115F
Steering Lock Unit Actuator Power Supply Circuit (BCM)
Any of the following conditions is met.
Steering lock unit power supply circuit is shorted to power supply or ground.
BCM internal failure.
*2
B1160
Steering Lock Unit Communication Error
No communication is available between BCM and steering lock unit.
*2
B1161
Steering Lock Unit Information Mismatched
Verification error between BCM and steering lock unit.
*2
B1162
Steering Lock Unit Internal Defect
Any of the following conditions is met.
Steering lock unit internal failure.
Lock / Unlock operation failure.
*2
B1163
Steering Lock Unit Unregistered
No registration of steering lock unit.
Off
B116A
Abnormal Vehicle Speed Pulses From ABS / ESP ® Control Module
Vehicle speed signal is not inputted from ESP ® control module.
Off
B1180
Driver Side Door Request Switch Malfunction
Driver door request switch signal voltage is lower than specified value for specified time.
*1
B1181
Passenger Side Door Request Switch Malfunction
Passenger door request switch signal voltage is lower than specified value for specified time.
*1
B1182
Rear End Door / Trunk Lid Request Switch Malfunction
Rearend door request switch signal voltage is lower than specified value for specified time.
*1
B1186
Antenna Circuit Internal Defect
BCM internal failure.
*1
B1190
Engine Switch Malfunction
Push switch 1 signal voltage and/or push switch 2 signal voltage is not as specified for longer than specified time.
*2
B1191
Accessory Relay Malfunction
Inconsistency between input voltage via “ACC” fuse and ACC relay control condition continues for longer than specified time.
*2
B1192
Ignition1 Relay Malfunction
Inconsistency between input voltage via “IG1 SIG” fuse and IG1 relay control condition continues for longer than specified time.
*2
B1193
Ignition2 Relay Malfunction
Inconsistency between input voltage via “WASH” fuse and IG2 relay control condition continues for longer than specified time.
*2
B1194
Starting Motor Relay Malfunction
Inconsistency between starting motor control relay monitor input voltage and starting motor control relay ON condition for longer than specified time is detected 3 times.
*2

---

## AENLSB0AA504007 - Fail-Safe Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504007.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Fail-Safe Table
When DTC is detected, BCM enters fail-safe mode as long as malfunction continues to exist but that mode is canceled when BCM recovers normal condition.
DTC
DTC name
Fail-safe operation
B1103
Mid Inside Antenna Circuit
—
B1104
Luggage Antenna Circuit
—
B1105
Driver Side Antenna Circuit
—
B1106
Passenger Side Antenna Circuit
—
B1107
Rear Outside Antenna Circuit
—
B1108
BCM Internal Defect
—
B1125
Clutch / Shift Switch Malfunction
Starting motor control relay is kept ON when engine switch is pressed continuously with ignition “ON”.
B1126
P Position Switch Malfunction
Steering lock unit is kept unlocked.
B1134
Remote Controller Battery Low
—
B1137
Brake Light Switch Malfunction
Depending on the conditions, starting motor control relay is kept ON by either operation of the brake light switch or continuous pressing of engine switch when ignition is “ON”.
B115C
Steering Lock Unit Actuator Power Supply Circuit (Steering Lock Unit)
—
B115D
Steering Lock Unit Performance
—
B115E
Steering Lock Unit Power Supply Circuit (BCM)
—
B115F
Steering Lock Unit Actuator Power Supply Circuit (BCM)
—
B1160
Steering Lock Unit Communication Error
—
B1161
Steering Lock Unit Information Mismatched
—
B1162
Steering Lock Unit Internal Defect
—
B1163
Steering Lock Unit Unregistered
—
B116A
Abnormal Vehicle Speed Pulses From ABS / ESP ® Control Module
—
B1180
Driver Side Door Request Switch Malfunction
BCM assumes that driver door request switch signal is OFF.
B1181
Passenger Side Door Request Switch Malfunction
BCM assumes that passenger door request switch signal is OFF.
B1182
Rear End Door / Trunk Lid Request Switch Malfunction
BCM assumes that rearend door request switch signal is OFF.
B1186
Antenna Circuit Internal Defect
—
B1190
Engine Switch Malfunction
Control performed by normally operating side switch when one side breaks down.
When both sides break down, engine start / stop and ignition mode changes are inhibited.
B1191
Accessory Relay Malfunction
—
B1192
Ignition1 Relay Malfunction
—
B1193
Ignition2 Relay Malfunction
—
B1194
Starting Motor Relay Malfunction
—

---

## AENLSB0AA504008 - Scan Tool Data
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504008.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA204007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204007.xml | Scan Tool Data

Content:
Scan Tool Data
BCM
Refer to
Scan Tool Data
.

---

## AENLSB0AA504009 - Scan Tool Active Test Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504009.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA204008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204008.xml | Scan Tool Active Test Table

Content:
Scan Tool Active Test Table
Refer to
Scan Tool Active Test Table
.

---

## AENLSB0AA504010 - Scan Tool Utility Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504010.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA204009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204009.xml | Scan Tool Utility Table

Content:
Scan Tool Utility Table
Refer to
Scan Tool Utility Table
.

---

## AENLSB0AA504011 - DTC B1103 / B1104 / B1105 / B1106 / B1107
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504011.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA504011003 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1103 / B1104 / B1105 / B1106 / B1107
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1103: Mid Inside Antenna Circuit
Mid inside antenna does not operate, even if mid inside antenna is ON.
Each outside antenna circuit / connector
Each outside antenna
Each inside antenna circuit / connector
Each inside antenna
BCM
B1104: Luggage Antenna Circuit
Rear inside antenna does not operate, even if rear inside antenna is ON.
B1105: Driver Side Antenna Circuit
Driver side outside antenna does not operate, even if driver side outside antenna is ON.
B1106: Passenger Side Antenna Circuit
Passenger side outside antenna does not operate, even if passenger side outside antenna is ON.
B1107: Rear Outside Antenna Circuit
Rear outside antenna does not operate, even if rear outside antenna is ON.
Circuit Diagram
[A]:
BCM connector (View: [a])
C2:
Diver side outside antenna signal circuit 2
2.
Rear inside antenna
A1:
Mid inside antenna signal circuit 1
D1:
Passenger side outside antenna signal circuit 1
3.
Driver side outside antenna
A2:
Mid inside antenna signal circuit 2
D2:
Passenger side outside antenna signal circuit 2
4.
Passenger side outside antenna
B1:
Rear inside antenna signal circuit 1
E1:
Rear outside antenna signal circuit 1
5.
Rear outside antenna
B2:
Rear inside antenna signal circuit 2
E2:
Rear outside antenna signal circuit 2
6.
BCM
C1:
Diver side outside antenna signal circuit 1
1.
Mid inside antenna
7.
Antenna circuit
DTC Confirmation Procedure
Set ignition “OFF”.
Close all doors.
Open a door for more than 4 seconds.
DTC Troubleshooting
Antenna check
Check antenna related to DTC.
Is check result OK?
Go to Step 2.
Replace defective antenna.
Driver side / passenger side outside antenna:
Rear outside antenna:
Mid inside antenna:
Rear inside antenna:
Antenna circuit check
Disconnect negative (–) cable at battery.
Disconnect related antenna, “G06” and “L01” connectors.
Check for proper terminal connection to antenna, “G06” and “L01” connectors.
If connections are OK, check the following points.
Resistance of “A1” – “A2”, “B1” – “B2”, “C1” – “C2”, “D1” – “D2” or “E1” – “E2” circuits: less than 1 Ω
Resistance between each of “A1” – “A2”, “B1” – “B2”, “C1” – “C2”, “D1” – “D2” or “E1” – “E2” circuits and ground: infinity
Resistance between each terminal of “A1” – “A2”, “B1” – “B2” or “E1” – “E2” circuits and each terminal of “L01” connector: infinity
Resistance between each terminal of “C1” – “C2” or “D1” – “D2” circuits and each terminal of “G06” connector: infinity
Resistance between each of “A1” – “A2”, “B1” – “B2”, “C1” – “C2”, “D1” – “D2” or “E1” – “E2” circuits and battery positive (+) cable: infinity
Resistance between each of “A1” – “A2”, “B1” – “B2”, “C1” – “C2”, “D1” – “D2” or “E1” – “E2” circuits and each fuse in individual circuit fuse box No.2: infinity
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
DTC check
Connect antenna, “G06” and “L01” connectors.
Connect negative (–) cable at battery.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is current DTC B1103, B1104, B1105, B1106 or B1107 detected?
Replace BCM and recheck DTC.
End. (Intermittent trouble.)

---

## AENLSB0AA504012 - DTC B1108
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504012.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA504012002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1108
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1108: BCM Internal Defect
BCM internal failure.
BCM
DTC Confirmation Procedure
Push lock / unlock button of remote controller in the area where lock / unlock signal reaches.
DTC Troubleshooting
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1108 still detected?
Replace BCM and recheck DTC.
End.

---

## AENLSB0AA504013 - DTC B1125
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504013.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA504013005 -> unresolved | DTC Confirmation Procedure
- AENLSB0AA504013005 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1125
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1125: Clutch / Shift Switch Malfunction
M/T model:
Inconsistency between signals from CPP No.1 switch or CPP No.2 switch and inhibit switch signal transmitted via CAN communication.
A/T model:
Inconsistency between transmission range sensor signal and P position switch signal or transmission shift position signal transmitted via CAN communication.
CPP No.1 switch circuit / connector (M/T model)
CPP No.1 switch (M/T model)
CPP No.2 switch circuit / connector (M/T model)
CPP No.2 switch (M/T model)
Transmission range sensor circuit / connector (A/T model)
TCM (including transmission range sensor) (A/T model)
BCM
Circuit Diagram
M/T model
[A]:
BCM connector (View: [a])
1.
CPP No.1 switch
4.
ECM
A1:
CPP No.1 switch signal circuit
2.
CPP No.2 switch
5.
Starting motor control relay
A2:
CPP No.2 switch signal circuit
3.
BCM
A/T model
[A]:
BCM connector (View: [a])
2.
Transmission range sensor
5.
Starting motor control relay
A1:
Transmission range sensor signal circuit
3.
BCM
1.
TCM
4.
ECM
DTC Confirmation Procedure
M/T model
Set ignition “ON”.
Depress clutch pedal fully for 3 seconds or more.
Release clutch pedal.
A/T model
Set ignition “ON” and leave ignition “ON” for 30 seconds.
DTC Troubleshooting
This DTC might be detected when battery is run down or the voltage is very low.
M/T model
DTC check
Is any DTC other than B1125 detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check “P position / CPP 2 Switch” and “Shift / Clutch Switch” displayed on SUZUKI scan tool.
Is check result OK?
End. (Intermittent trouble.)
Go to Step 3.
CPP No.1 switch signal circuit check
Disconnect negative (–) cable at battery.
Disconnect CPP No.1 switch, ECM and “E05” connectors.
Remove starting motor control relay.
Check for proper terminal connection to CPP No.1 switch, ECM and “E05” connectors.
If connections are OK, check the following points.
Resistance of “A1” circuit: less than 1 Ω
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and each terminal at “E05” connector: infinity
Resistance between “A1” circuit and battery positive (+) cable: infinity
Resistance between “A1” circuit and each fuse in individual circuit fuse box No.2: infinity
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
CPP No.2 switch signal circuit check
Disconnect CPP No.2 switch and “E04” connectors.
Check for proper terminal connection to CPP No.2 switch and “E04” connectors.
If connections are OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A2” circuit terminal and each terminal at “E04” connector: infinity
Resistance between “A2” circuit and battery positive (+) cable: infinity
Resistance between “A2” circuit and each fuse in individual circuit fuse box No.2: infinity
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
CPP No.1 switch check
Check CPP No.1 switch.
Is check result OK?
Go to Step 6.
Replace CPP No.1 switch.
CPP No.2 switch check
Check CPP No.2 switch.
Is check result OK?
Go to Step 7.
Replace CPP No.2 switch.
DTC check
Connect CPP No.1 switch, CPP No.2 switch, ECM, “E04” and “E05” connectors.
Install starting motor control relay.
Connect negative (–) cable at battery.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is current DTC B1125 detected?
Replace BCM and recheck DTC.
End. (Intermittent trouble.)
A/T model
DTC check
Is any DTC other than B1125 detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check “P position / CPP 2 Switch” and “Shift / Clutch Switch” displayed on SUZUKI scan tool.
Is check result OK?
End. (Intermittent trouble.)
Go to Step 3.
Transmission range sensor signal circuit check
Disconnect negative (–) cable at battery.
Disconnect TCM, ECM and “E05” connectors.
Remove starting motor control relay.
Check for proper terminal connection to TCM, ECM and “E05” connectors.
If connections are OK, check the following points.
Resistance of “A1” circuit: less than 1 Ω
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and each terminal at “E05” connector: infinity
Resistance between “A1” circuit and battery positive (+) cable: infinity
Resistance between “A1” circuit and each fuse in individual circuit fuse box No.2: infinity
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
TCM circuit check
Check TCM circuit.
Is check result OK?
Go to Step 5.
Replace TCM and recheck DTC.
DTC check
Connect TCM, ECM and “E05” connectors.
Install starting motor control relay.
Connect negative (–) cable at battery.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is current DTC B1125 detected?
Replace BCM and recheck DTC.
End. (Intermittent trouble.)

---

## AENLSB0AA504014 - DTC B1126
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504014.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA504014003 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1126
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1126: P Position Switch Malfunction
P position switch ON signal is detected while vehicle running. (10 km/h (6 mile/h) or more)
P position switch circuit / connector
P position switch
BCM
Circuit Diagram
[A]:
BCM connector (View: [a])
1.
P position switch
A1:
P position switch signal circuit
2.
BCM
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Drive vehicle at 10 km/h (6 mile/h) or more for 1 minute.
DTC Troubleshooting
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check “P position / CPP 2 Switch” and “Shift / Clutch Switch” displayed on SUZUKI scan tool.
Is check result OK?
End. (Intermittent trouble.)
Go to Step 2.
P position switch signal circuit check
Disconnect negative (–) cable at battery.
Disconnect select lever and “E04” connectors.
Check for proper terminal connection to select lever and “E04” connectors.
If connections are OK, check the following points.
Resistance of “A1” circuit: less than 1 Ω
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and each terminal at “E04” connector: infinity
Resistance between “A1” circuit and battery positive (+) cable: infinity
Resistance between “A1” circuit and each fuse in individual circuit fuse box No.2: infinity
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
P position switch check
Check P position switch.
Is check result OK?
Go to Step 4.
Replace select lever.
DTC check
Connect select lever and “E04” connectors.
Connect negative (–) cable at battery.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is current DTC B1126 detected?
Replace BCM and recheck DTC.
End. (Intermittent trouble.)

---

## AENLSB0AA504015 - DTC B1134
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504015.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA504015002 -> unresolved | DTC Confirmation Procedure
- AENLSB0AA504015002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1134
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1134: Remote Controller Battery Low
Remote controller battery run down signal is received from remote controller.
Remote controller battery
Remote controller
DTC Confirmation Procedure
If DTC cannot be cleared although battery of registered remote controller is replaced, replacement of the remote controller itself will be necessary.
Set ignition “ON”.
Check that “Remote Controller Battery Warning” setting is “Active” mode.
Lock / unlock the doors more than 2 times using the remote controller.
Repeat Step 3) 6 times.
Perform Step 3) – 4) with all of registered remote controllers.
DTC Troubleshooting
Remote controller check
Prepare all registered remote controllers.
Perform
DTC Confirmation Procedure
for all remote controllers.
Does “KEY FOB LOW BATTERY” show in information display?
Go to Step 2.
End. (Remote controller battery run down signal was detected in the past. (DTC is not cleared))
Remote controller battery check
Replace battery of corresponding remote controller with new one.
Clear DTC.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1134 still detected?
Replace remote controller and recheck DTC.
End.

---

## AENLSB0AA504016 - DTC B1137
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504016.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA204020 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204020.xml | DTC U0100
- AENLSB0AA504016003 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1137
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1137: Brake Light Switch Malfunction
Inconsistency between brake light switch signal and the data signal transmitted via CAN communication.
Brake light switch circuit / connector
Brake light switch
BCM
Circuit Diagram
[A]:
DSBS model
A1:
Brake light switch signal circuit 1
3.
BCM
[B]:
Non-DSBS model
A2:
Brake light switch signal circuit 2
4.
ECM
[C]:
J/B connector (View: [a])
1.
“STOP” fuse
5.
To brake light
[D]:
ECM connector (View: [a])
2.
Brake light switch
DTC Confirmation Procedure
Set ignition “ON”.
Depress brake pedal fully for 3 seconds or more.
Release brake pedal for 3 seconds or more.
DTC Troubleshooting
This DTC might be detected when battery is run down or the voltage is very low.
DTC check
Check DTC in BCM.
Is DTC U0100 detected?
Go to troubleshooting in
DTC U0100
.
Go to Step 2.
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check “Brake Light Switch” displayed on SUZUKI scan tool.
Is check result OK?
End. (Intermittent trouble.)
Go to Step 3.
Brake light switch signal circuit check
Disconnect negative (–) cable at battery.
Disconnect ECM and “E323” connectors.
Check for proper terminal connection to ECM and “E323” connectors.
If connections are OK, check that resistance of “A1” circuit is less than 1 Ω.
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Brake light switch signal circuit check
Disconnect brake light switch connector.
Connect “E323” connector.
Check that resistance between “A2” circuit terminal at brake light switch connector and “A1” circuit terminal at ECM connector is less than 1 Ω.
Is check result OK?
Replace ECM and recheck DTC.
Go to Step 5.
Brake light switch check
Check brake light switch.
Is check result OK?
Go to Step 6.
Replace brake light switch.
DTC check
Connect brake light switch and ECM connectors.
Connect negative (–) cable at battery.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is current DTC B1137 detected?
Replace BCM and recheck DTC.
End. (Intermittent trouble.)

---

## AENLSB0AA504017 - DTC B115C
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504017.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1A14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14001.xml | Battery Inspection:K14C
- AENLSB0A1A14003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14003.xml | Generator Test:K14C
- AENLSB0AA504017003 -> unresolved | DTC Confirmation Procedure

Content:
DTC B115C
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B115C: Steering Lock Unit Actuator Power Supply Circuit (Steering Lock Unit)
Any of the following conditions is met.
Steering lock unit power supply circuit is open.
Steering lock unit internal failure.
Steering lock unit circuit / connector
Steering lock unit
Circuit Diagram
[A]:
Steering lock unit connector (View: [a])
A2:
Steering lock unit power supply circuit 2
C2:
Steering lock unit ground circuit 2
[B]:
BCM connector (View: [a])
B1:
Steering lock unit signal circuit
1.
Steering lock unit
A1:
Steering lock unit power supply circuit 1
C1:
Steering lock unit ground circuit 1
2.
BCM
DTC Confirmation Procedure
Set steering wheel in straight ahead position.
Repeat lock / unlock operation of steering lock unit several times.
Lock: Change ignition “ON” to “OFF” and open a door.
Unlock: Set ignition “ON” at steering lock conditions.
DTC Troubleshooting
This DTC might be detected when battery is run down or the voltage is very low.
Replace steering lock unit if DTC B115C is detected due to 100,000 or more operation of the steering lock unit.
Battery voltage check
Check that battery terminal voltage is 12 V or more.
Is check result OK?
Go to Step 2.
Check battery and generator.
K14C model
Battery Inspection:K14C
Generator Test:K14C
DTC check
Clear DTC.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is current DTC B115C detected?
Go to Step 3.
End. (Intermittent trouble.)
Steering lock unit power supply circuit check
Disconnect negative (–) cable at battery.
Disconnect steering lock unit connector.
Check for proper terminal connection to steering lock unit connector.
If connections are OK, check the following points.
Resistance of “A1” circuit: less than 1 Ω
Resistance between “A1” circuit terminal and each terminal at “G06” connector: infinity
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
DTC check
Connect steering lock unit connector.
Connect negative (–) cable at battery.
Check DTC.
Is current DTC B115C detected?
Replace steering lock unit and recheck DTC.
End. (Intermittent trouble.)

---

## AENLSB0AA504018 - DTC B115D
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504018.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1A14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14001.xml | Battery Inspection:K14C
- AENLSB0A1A14003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14003.xml | Generator Test:K14C
- AENLSB0AA504018002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B115D
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B115D: Steering Lock Unit Performance
Lock operation failure.
Steering lock unit
DTC Confirmation Procedure
Set steering wheel in straight ahead position.
Repeat lock / unlock operation of steering lock unit several times.
Lock: Change ignition “ON” to “OFF” and open a door.
Unlock: Set ignition “ON” at steering lock conditions.
DTC Troubleshooting
This DTC might be detected when battery is run down or the voltage is very low.
Replace steering lock unit if DTC B115D is detected due to 100,000 or more operation of the steering lock unit.
Battery voltage check
Check that battery terminal voltage is 12 V or more.
Is check result OK?
Go to Step 2.
Check battery and generator.
K14C model
Battery Inspection:K14C
Generator Test:K14C
DTC recheck
Clear DTC.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is current DTC B115D detected?
Replace steering lock unit and recheck DTC.
End. (Intermittent trouble.)

---

## AENLSB0AA504019 - DTC B115E
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504019.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1A14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14001.xml | Battery Inspection:K14C
- AENLSB0A1A14003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14003.xml | Generator Test:K14C
- AENLSB0AA504019003 -> unresolved | DTC Confirmation Procedure

Content:
DTC B115E
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B115E: Steering Lock Unit Power Supply Circuit (BCM)
Any of the following conditions is met.
Steering lock unit power supply circuit is shorted to ground.
BCM internal failure.
Steering lock unit circuit / connector
BCM
Circuit Diagram
[A]:
Steering lock unit connector (View: [a])
A2:
Steering lock unit power supply circuit 2
C2:
Steering lock unit ground circuit 2
[B]:
BCM connector (View: [a])
B1:
Steering lock unit signal circuit
1.
Steering lock unit
A1:
Steering lock unit power supply circuit 1
C1:
Steering lock unit ground circuit 1
2.
BCM
DTC Confirmation Procedure
Set steering wheel in straight ahead position.
Repeat lock / unlock operation of steering lock unit several times.
Lock: Change ignition “ON” to “OFF” and open a door.
Unlock: Set ignition “ON” at steering lock conditions.
DTC Troubleshooting
This DTC might be detected when battery is run down or the voltage is very low.
Battery voltage check
Check that battery terminal voltage is 12 V or more.
Is check result OK?
Go to Step 2.
Check battery and generator.
K14C model
Battery Inspection:K14C
Generator Test:K14C
DTC check
Clear DTC.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is current DTC B115E detected?
Go to Step 3.
End. (Intermittent trouble.)
Steering lock unit power supply circuit check
Disconnect negative (–) cable at battery.
Disconnect steering lock unit and “G06” connectors.
Check for proper terminal connection to steering lock unit and “G06” connectors.
If connections are OK, check the following points.
Resistance between “A2” circuit and ground: infinity
Resistance between “A2” circuit terminal and each terminal at “G06” connector: infinity
Is check result OK?
Replace BCM and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0AA504020 - DTC B115F
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504020.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1A14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14001.xml | Battery Inspection:K14C
- AENLSB0A1A14003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14003.xml | Generator Test:K14C
- AENLSB0AA504020003 -> unresolved | DTC Confirmation Procedure

Content:
DTC B115F
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B115F: Steering Lock Unit Actuator Power Supply Circuit (BCM)
Any of the following conditions is met.
Steering lock unit power supply circuit is shorted to power supply or ground.
BCM internal failure.
Steering lock unit circuit / connector
BCM
Circuit Diagram
[A]:
Steering lock unit connector (View: [a])
A2:
Steering lock unit power supply circuit 2
C2:
Steering lock unit ground circuit 2
[B]:
BCM connector (View: [a])
B1:
Steering lock unit signal circuit
1.
Steering lock unit
A1:
Steering lock unit power supply circuit 1
C1:
Steering lock unit ground circuit 1
2.
BCM
DTC Confirmation Procedure
Set steering wheel in straight ahead position.
Repeat lock / unlock operation of steering lock unit several times.
Lock: Change ignition “ON” to “OFF” and open a door.
Unlock: Set ignition “ON” at steering lock conditions.
DTC Troubleshooting
This DTC might be detected when battery is run down or the voltage is very low.
Battery voltage check
Check that battery terminal voltage is 12 V or more.
Is check result OK?
Go to Step 2.
Check battery and generator.
K14C model
Battery Inspection:K14C
Generator Test:K14C
DTC check
Clear DTC.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is current DTC B115F detected?
Go to Step 3.
End. (Intermittent trouble.)
Steering lock unit power supply circuit check
Disconnect negative (–) cable at battery.
Disconnect steering lock unit and “G06” connectors.
Check for proper terminal connection to steering lock unit and “G06” connectors.
If connections are OK, check the following points.
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and each terminal at “G06” connector: infinity
Resistance between “A1” circuit and battery positive (+) cable: infinity
Resistance between “A1” circuit and each fuse in individual circuit fuse box No.2: infinity
Is check result OK?
Replace BCM and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0AA504021 - DTC B1160
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504021.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA504021003 -> unresolved | DTC Confirmation Procedure
- AENLSB0AA504021003 -> unresolved | DTC Confirmation Procedure
- AENLSB0AA504021003 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1160
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1160: Steering Lock Unit Communication Error
No communication is available between BCM and steering lock unit.
Steering lock unit circuit / connector
Steering lock unit
BCM
Circuit Diagram
[A]:
Steering lock unit connector (View: [a])
A2:
Steering lock unit power supply circuit 2
C2:
Steering lock unit ground circuit 2
[B]:
BCM connector (View: [a])
B1:
Steering lock unit signal circuit
1.
Steering lock unit
A1:
Steering lock unit power supply circuit 1
C1:
Steering lock unit ground circuit 1
2.
BCM
DTC Confirmation Procedure
Repeat lock / unlock operation of steering lock unit several times.
Lock: Change ignition “ON” to “OFF” and open a door.
Unlock: Set ignition “ON” at steering lock conditions.
DTC Troubleshooting
This DTC might be detected when battery is run down or the voltage is very low.
Steering lock unit operation check
Check lock / unlock operation of steering lock unit referring to
DTC Confirmation Procedure
.
Is check result OK?
End. (Intermittent trouble.)
Go to Step 2.
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check the following parameters displayed on SUZUKI scan tool.
Display of “Steering Unlock Switch” and “Steering Lock Switch” and unlock / lock state of steering lock unit agree.
Display of “Steering Lock Counter” is 100,000 times or less.
Is check result OK?
End. (Intermittent trouble.)
Go to Step 3.
DTC check
Clear DTC.
Disconnect negative (–) cable at battery.
Disconnect steering lock unit and “G06” connectors.
Check for proper terminal connection to steering lock unit and “G06” connectors.
If connections are OK, connect steering lock unit and “G06” connectors.
Connect negative (–) cable at battery.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is current DTC B1160 detected?
Go to Step 4.
End. (Intermittent trouble.)
Steering lock unit power supply circuit check
Disconnect negative (–) cable at battery.
Disconnect steering lock unit and “G06” connectors.
Check for proper terminal connection to steering lock unit and “G06” connectors.
If connections are OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A2” circuit terminal and each terminal at steering lock unit connector: infinity
Resistance between “A2” circuit and battery positive (+) cable: infinity
Resistance between “A2” circuit and each fuse in individual circuit fuse box No.2: infinity
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
Steering lock unit ground circuit check
Check the following points.
Resistance of “C2” circuit: less than 1 Ω
Resistance between “C2” circuit terminal and each terminal at steering lock unit connector: infinity
Resistance between “C2” circuit and battery positive (+) cable: infinity
Resistance between “C2” circuit and each fuse in individual circuit fuse box No.2: infinity
Is check result OK?
Go to Step 6.
Repair or replace defective wire harness.
Steering lock unit signal circuit check
Check the following points.
Resistance of “B1” circuit: less than 1 Ω
Resistance between “B1” circuit and ground: infinity
Resistance between “B1” circuit terminal and each terminal at steering lock unit connector: infinity
Resistance between “B1” circuit and battery positive (+) cable: infinity
Resistance between “B1” circuit and each fuse in individual circuit fuse box No.2: infinity
Is check result OK?
Go to Step 7.
Repair or replace defective wire harness.
DTC check
Replace steering lock unit.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1160 still detected?
Replace BCM and recheck DTC.
End. (Steering lock unit was faulty)

---

## AENLSB0AA504022 - DTC B1161 / B1163
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504022.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA504022002 -> unresolved | DTC Confirmation Procedure
- AENLSB0AA504022002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1161 / B1163
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1161: Steering Lock Unit Information Mismatched
Verification error between BCM and steering lock unit.
Steering lock unit circuit / connector
Steering lock unit
BCM
B1163: Steering Lock Unit Unregistered
No registration of steering lock unit.
BCM and steering lock unit check registration data each other. Therefore, if ignition cannot be set “ON”, it is necessary to replace steering lock unit with new one.
DTC Confirmation Procedure
Repeat lock / unlock operation of steering lock unit several times.
Lock: Change ignition “ON” to “OFF” and open a door.
Unlock: Set ignition “ON” at steering lock conditions.
DTC Troubleshooting
DTC check
Clear DTC.
Set ignition “OFF”.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1161 or B1163 still detected?
Go to Step 2.
End. (Intermittent trouble.)
DTC check
Replace steering lock unit.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1161 or B1163 still detected?
Replace BCM and recheck DTC.
End. (Steering lock unit was faulty)

---

## AENLSB0AA504023 - DTC B1162
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504023.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1A14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14001.xml | Battery Inspection:K14C
- AENLSB0A1A14003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14003.xml | Generator Test:K14C
- AENLSB0AA504023002 -> unresolved | DTC Confirmation Procedure
- AENLSB0AA504023002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1162
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1162: Steering Lock Unit Internal Defect
Any of the following conditions is met.
Steering lock unit internal failure.
Lock / Unlock operation failure.
Steering lock unit
DTC Confirmation Procedure
Set steering wheel in straight ahead position.
Repeat lock / unlock operation of steering lock unit several times.
Lock: Change ignition “ON” to “OFF” and open a door.
Unlock: Set ignition “ON” at steering lock conditions.
DTC Troubleshooting
This DTC might be detected when battery is run down or the voltage is very low.
Replace steering lock unit if DTC B1162 is detected due to 100,000 or more operation of the steering lock unit.
Battery voltage check
Check that battery terminal voltage is 12 V or more.
Is check result OK?
Go to Step 2.
Check battery and generator.
K14C model
Battery Inspection:K14C
Generator Test:K14C
DTC check
Check DTC.
Is current DTC B1162 detected?
Go to Step 4.
Go to Step 3.
DTC recheck
Clear DTC.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is current DTC B1162 detected?
Go to Step 4.
End. (Intermittent trouble)
Steering lock unit operation check
Check lock / unlock operation of steering lock unit referring to
DTC Confirmation Procedure
.
Is check result OK?
End. (Intermittent trouble.)
Replace steering lock unit and recheck DTC.

---
