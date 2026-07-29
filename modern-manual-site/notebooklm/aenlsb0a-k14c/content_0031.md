# Content Chunk 0031

Plain-text content extracted from source files with relationship metadata.

## AENLSB0AA900005 - Precautions for Replacing ISG
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA900005.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Precautions
Outgoing references:
- AENLSB0AA306003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA306003.xml | ECM / ISG Registration
- AENLSB0AA206002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206002.xml | BCM Registration

Content:
Precautions for Replacing ISG
After ISG is replaced with new one, perform
ECM / ISG Registration
using SUZUKI scan tool.
When ISG and BCM are replaced at the same time, perform
BCM Registration
for their registration.

---

## AENLSB0AA901001 - Description of ENG A-STOP System
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA901001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > General Description
Outgoing references:
- AENLSB0AAB01001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB01001.xml | Description for Auxiliary Power Module (Lithium-Ion Battery) Control System
- AENLSB0AB101001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB101001.xml | Description of SHVS System
- AENLSB0AB101003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB101003.xml | Description of SHVS System Control

Content:
Description of ENG A-STOP System
The ENG A-STOP system performs the following controls to reduce emissions, fuel consumption, noise during engine restarts and idling noise during the vehicle stops or decelerates (15 km/h (9 mile/h) or less). The system monitors the vehicle condition depending on signals from the relevant sensors and switches.
Engine auto stop control
Engine auto start control
The state of ENG A-STOP control is shown on the combination meter. ENG A-STOP indicator light indicates normal operation of ENG A-STOP system and ENG A-STOP warning light indicates stop of the control. When an abnormal condition in the system occurs, ENG A-STOP warning light blinks to warn the driver.
Auxiliary power module (lithium-ion battery) is adopted to cover the power supply while the engine is auto stopping by ENG A-STOP system. For more detail of auxiliary power module (lithium-ion battery) control, refer to
Description for Auxiliary Power Module (Lithium-Ion Battery) Control System
.
The ISG fitted on the ENG A-STOP system serves as a starter which automatically restarts the engine. For more detail of ISG control, refer to
Description of SHVS System
or
Description of SHVS System Control
.
Active / Inactive Conditions of Engine Auto Stop Control
When all of the following active conditions in the table are met, ECM performs the engine auto stop control. If any of the following inactive conditions in the table is met, ECM inhibits the engine auto stop control.
Engine auto stop control active / inactive condition
Vehicle condition
Active
Inactive
Vehicle speed history
Vehicle: Stopped
More than 3 km/h (2 mile/h)
Lower than 3 km/h (2 mile/h)
Vehicle: Decelerating
More than 10 km/h (6 mile/h)
Lower than 10 km/h (6 mile/h)
Vehicle speed
Vehicle: Stopped
Lower than 3 km/h (2 mile/h)
More than 3 km/h (2 mile/h)
Vehicle: Decelerating
Lower than 15 km/h (9 mile/h)
More than 15 km/h (9 mile/h)
Accelerator pedal
Released
Depressed
Clutch pedal
Released
Depressed
Gear shift lever
Neutral
Other than neutral
Driver’s seat belt
Fastened
Unfastened
Driver’s door
Closed
Open
Hood
Closed
Open
ENG A-STOP OFF switch
OFF (ENG A-STOP warning light: OFF)
ON (ENG A-STOP warning light: ON)
Charge warning light
OFF
ON
Auxiliary power module (lithium-ion battery)
State-of-charge
Higher than specified value
Lower than specified value
Estimated temperature
2 to 62 °C (36 to 144 °F)
Out of 2 to 62 °C (36 to 144 °F) range
Engine coolant temperature
35 to 110 °C (95 to 230 °F)
Out of 35 to 110 °C (95 to 230 °F) range
Brake booster vacuum
Higher than specified value
Lower than specified value
ECM
Permits engine auto stop
Inhibits engine auto stop
ESP ® system
Receives engine auto stop permission signal from ESP ® control module
Receives engine auto stop inhibition signal from ESP ® control module
Auto A/C system
Receives engine auto stop permission signal from BCM
Receives engine auto stop inhibition signal from BCM
Starting motor status
More than 2 sec. after cranking engine
Less than 2 sec. after cranking engine
Ignition
Ignition “ON”
Other than “ON” position
ISG internal temperature
Lower than specified value
Higher than specified value
ISG belt slip
Not slipping
Slipping
SDM
Not detecting collision
Detecting collision
DTC detecting condition
Auxiliary power module (lithium-ion battery)
DC/DC converter
ISG
ESP ® control module
ECM
No DTC related to the control is detected
DTC(s) related to the control is detected
Active Conditions of Engine Auto Start Control
When the gear shift lever is in “Neutral” and one or more of the following conditions in the table are met, ECM performs the engine auto start control. The engine is then restarted.
*1: When the engine is restarted, ENG A-STOP indicator blinks once.
*2: When the engine is restarted, ENG A-STOP indicator blinks 5 times.
*3: When engine is auto stopping at vehicle stop the control causes engine to stall.
Engine auto start control active condition
Vehicle condition
ENG A-STOP OFF switch
ON (ENG A-STOP warning light: ON)
Vehicle speed increase value (*1)
More than 2 km/h (1 mile/h)
Driver’s seat belt (*2)
Unfastened
Driver’s door (*2)
Opened
Engine auto stopping time (*1)
Vehicle: Stopped
For more than 3 min. continuously
Brake booster vacuum (*1)
Lower than specified value
Hood (*3)
Opened (Engine auto stopping in deceleration)
ECM (*1)
Permits engine auto restart
ESP ® system (*1)
Receives engine auto restart request signal from ESP ® control module
Auto A/C system (*1)
Receives engine auto restart request signal from BCM
ISG internal temperature (*1)
Higher than specified value
DTC detecting condition (*1)
Auxiliary power module (lithium-ion battery)
DC/DC converter
ISG
ESP ® control module
ECM
DTC(s) related to the control is detected
Engine Auto Start Inhibit Control
If any of the following conditions is met during the engine auto stop control, ECM inhibits the engine auto start control and buzzer sounds 2 times.
Once the engine auto start control is inhibited, driver’s operation is needed to restart the engine.
Engine auto start control inhibit condition
Vehicle condition
Hood
Opened (Engine auto stopping control in vehicle stopped)
ENG A-STOP system
Detects DTC (s)
Engine Restart Control after Engine Stall
While driving the vehicle, if the engine is stalled by a clutch operation error etc., the engine will be restarted by depressing the clutch pedal without pushing the engine switch to start when the following conditions are met.
This auto restart control may not work if the engine coolant temperature does not meet restart conditions such as low temperature. In this case, the engine can be restarted in the conventional manner.
Engine restart control condition after engine stall
Vehicle condition
Gear shift lever
Neutral
Clutch pedal
Depressed

---

## AENLSB0AA901002 - Description of ENG A-STOP System Components
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA901002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > General Description
Outgoing references: none

Content:
Description of ENG A-STOP System Components
The ENG A-STOP system consists of the following components.
Component
Description
ECM
ECM controls engine auto stop and auto restart receiving signals related to ENG A-STOP from control modules, sensors and switches. When restarting engine, ISG functions as a starting motor. ECM is also provided with self-diagnosis function and fail-safe function.
CPP No.1 switch / CPP No.2 switch
These switches are installed on the clutch pedal bracket. The switches provide the ECM with information on the state of the clutch pedal.
Neutral position switch
This switch is installed on the transaxle case. The ECM determines whether the gear is in neutral based on the signal from this switch.
ENG A-STOP OFF switch
This momentary switch inhibits engine auto stop and auto restart control transmitting OFF signal to BCM. However, if this OFF signal is transmitted while the engine is auto stopping, the engine is auto restarted.
While engine auto stop and auto restart control is inhibited by this OFF switch, ENG A-STOP warning light in combination meter comes on.
Hood latch switch
This switch is incorporated in the hood latch and has switch1 and switch2. The switch detects open / closed state of the hood and transmits this signal to BCM.
Auxiliary power module (lithium-ion battery)
While the engine is auto stopping by ENG A-STOP control, lithium-ion battery incorporated in auxiliary power module (lithium-ion battery) supplies power to the following electrical devices through DC/DC converter.
Engine electrical devices such as ECM, ignition coils, fuel injectors, etc.
Body electrical devices such as combination meter, audio, auto A/C etc.
DC/DC converter
Installed under left side front seat. The DC/DC converter transforms 48V to 12V and supplies to lead-acid battery and each electrical device.
ISG
ISG combines functions of generator, engine starting motor and engine assist motor.
ESP ® control module
This control module transmits wheel speed, brake booster pressure, etc. to ECM via CAN.
BCM
BCM controls the following functions.
Receiving signal from ECM via CAN, this module turns off engine oil pressure light and inhibits ignition position change by engine switch while the engine is auto stopping by ENG A-STOP control.
This module transmits information signals of ENG A-STOP OFF switch, hood latch switch, brake light switch, driver side door switch, warning lights, etc. to ECM via CAN.
This module transmits auto A/C signals to ECM via CAN and requests permission or inhibition of engine auto stop.
SDM
This module transmits collision signal to each control module via CAN.
Combination meter
Receiving information from ECM via CAN, this meter shows information display and the state of ENG A-STOP control by indicator lights. ENG A-STOP indicator light indicates normal operation of ENG A-STOP system and ENG A-STOP warning light indicates stop of the control. When an abnormal condition in the system occurs, ENG A-STOP warning light blinks to warn the driver.
Accelerator pedal (APP sensor)
This sensor detects degree of accelerator pedal depressing and transmits the information to ECM.
Engine coolant temperature sensor (ECT sensor)
This sensor transmits engine coolant temperature signal to ECM.
Brake booster pressure sensor
This sensor transmits brake booster vacuum signal to ESP ® control module.
Driver seat belt buckle switch
This switch transmits fastening / unfastening signal of seat belt to BCM.
Driver side front door switch
This switch transmits opening / closing signal of driver side front door to BCM.

---

## AENLSB0AA901003 - Description of ENG A-STOP System Alarm Function
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA901003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > General Description
Outgoing references: none

Content:
Description of ENG A-STOP System Alarm Function
The ENG A-STOP alarm function works when ECM detects any of the following conditions during the engine auto stop control. The function provides warning by sounding the buzzer inside the combination meter according to the condition detected.
Alarm
Condition
Warning buzzer
Gear shift alarm
The gear shift lever is moved to a position other than “Neutral” without depressing the clutch pedal.
Sounds continuously.
Hood open alarm
The hood is open.
Sounds 2 times.
ENG A-STOP system malfunction alarm
A problem related to the engine auto start control occurs in the ENG A-STOP system.
Sounds 2 times.

---

## AENLSB0AA901004 - Description of CAN Communication System
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA901004.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Description of CAN Communication System
ECM is using CAN communication to communicate with other control module. For more detail of CAN communication, refer to
.

---

## AENLSB0AA901005 - Description of SHVS System Control
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA901005.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > General Description
Outgoing references:
- AENLSB0AB101003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB101003.xml | Description of SHVS System Control

Content:
Description of SHVS System Control
Refer to
Description of SHVS System Control
.

---

## AENLSB0AA902001 - ENG A-STOP System Input / Output Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA902001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Schematic and Routing Diagram
Outgoing references: none

Content:
ENG A-STOP System Input / Output Diagram

---

## AENLSB0AA902002 - ENG A-STOP System Electric Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA902002.xml
Tree scopes: unscoped
Outgoing references: none

Content:
ENG A-STOP System Electric Circuit Diagram
The ENG A-STOP system is controlled by ECM. For connection of ECM, refer to
.

---

## AENLSB0AA903001 - ENG A-STOP System Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA903001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Component Location
Outgoing references: none

Content:
ENG A-STOP System Component Location
The figure shows LHD. For RHD, parts with (*) are installed on the opposite side.
1.
ECM
8.
ECT sensor
15.
DC/DC converter
2.
Brake booster pressure sensor
9.
Combination meter
16.
CPP No.1 switch
3.
ESP ® control module
10.
Information display
17.
CPP No.2 switch
4.
ISG
11.
ENG A-STOP indicator light
18.
Accelerator pedal assembly (incorporating APP sensor)
5.
Hood latch switch (included in hood latch)
12.
ENG A-STOP warning light
19.
SDM
6.
Driver side front door switch
13.
ENG A-STOP OFF switch
20.
Auxiliary power module (lithium-ion battery)
7.
Neutral position switch
14.
BCM
21.
Driver seat belt buckle

---

## AENLSB0AA904001 - ENG A-STOP System Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA904001010 -> unresolved | Step 1: Customer Complaint Analysis
- AENLSB0AA904004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904004.xml | DTC Clearance
- AENLSB0AA904001016 -> unresolved | Step 5: ENG A-STOP System Symptom Diagnosis
- AENLSB0AA904001021 -> unresolved | Step 8: Final Confirmation Test
- AENLSB0AA904001010 -> unresolved | Step 1: Customer Complaint Analysis
- AENLSB0AA904001011 -> unresolved | Step 2: DTC Check, Record and Clearance
- AENLSB0AA904003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904003.xml | DTC Check
- AENLSB0AA904008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904008.xml | ENG A-STOP System Symptom Diagnosis

Content:
ENG A-STOP System Check
Customer complaint analysis
Perform
Step 1: Customer Complaint Analysis
.
Was customer complaint analysis performed?
Go to Step 2.
Perform customer complaint analysis.
DTC check, record and clearance
Check for DTC (including pending DTC).
Is there any DTC(s)?
Print DTC or write it down and clear it referring to
DTC Clearance
. Then go to Step 3.
Go to Step 3.
Trouble symptom confirmation
Check trouble symptom.
Is trouble symptom identified?
Go to Step 4.
Go to Step 5.
Rechecking and recording DTC
Recheck for DTC.
Is there any DTC(s)?
Go to Step 6.
Go to Step 7.
ENG A-STOP symptom diagnosis
Perform
Step 5: ENG A-STOP System Symptom Diagnosis
.
Are check and repair completed?
Go to Step 8.
Check and repair defective part, and then go to Step 8.
Troubleshooting for DTC
Perform troubleshooting for applicable DTC.
Are check and repair completed?
Go to Step 8.
Check and repair defective part, and then go to Step 8.
Intermittent problem check
Check for intermittent problem.
Is there any faulty condition?
Repair or replace defective part, and then go to Step 8.
Go to Step 8.
Final confirmation test
Perform
Step 8: Final Confirmation Test
.
Is there any problem symptom, DTC or abnormal condition?
Go to Step 4.
End.
Step 1: Customer Complaint Analysis
Record details of the problem (failure, complaint) and how it occurred as described by the customer.
For this purpose, such a questionnaire form shown below will facilitate collecting information for proper analysis and diagnosis.
The form is a standard sample. It should be modified according to characteristics of each market.
Customer questionnaire form (Example)
Step 2: DTC Check, Record and Clearance
First, check for DTCs.
If DTCs are indicated, print DTC or write them down and then clear them.
Step 3: Trouble Symptom Confirmation
If there is no DTC in Step 2:
Based on information obtained in
Step 1: Customer Complaint Analysis
and
Step 2: DTC Check, Record and Clearance
, check trouble symptoms.
If there is any DTC in Step 2:
Recheck DTC according to “DTC Confirmation Procedure” described in each DTC troubleshooting.
Step 4: Rechecking and Recording DTC
Refer to
DTC Check
for checking procedure.
Step 5: ENG A-STOP System Symptom Diagnosis
Perform
ENG A-STOP System Symptom Diagnosis
based on symptom found in vehicle, checking the following items.
Customer complaint analysis
Trouble symptom confirmation
Step 6: Troubleshooting for DTC
Perform troubleshooting for applicable DTC and repair or replace faulty parts.
Step 7: Intermittent Problem Check
If there is no DTC in Step 2:
Check for intermittent problem.
If there is any DTC in Step 2:
Check parts related to detected DTC (e.g. wire harness, connector, etc.).
Step 8: Final Confirmation Test
Check that the problem symptom does not recur and the vehicle is free from any abnormal conditions. If what has been repaired is related to DTC, clear DTC once, perform DTC confirmation procedure and check that no DTC is indicated.

---

## AENLSB0AA904002 - ENG A-STOP System Self-Diagnosis Function
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Diagnostic Information and Procedures
Outgoing references: none

Content:
ENG A-STOP System Self-Diagnosis Function
Description
ECM monitors conditions of the system components and circuits. When an abnormal condition in the system occurs, the ECM performs necessary controls as follows.
Self-Diagnosis Function
ECM has self-diagnosis function that stores DTC for abnormalities detected in ENG A-STOP system. Stored DTCs remain in memory of ECM unless they are cleared.
Warning Function
When a malfunction is detected in ECM, the ECM blinks on ENG A-STOP warning light (1) to warn the driver. The warning light is turned off when normal condition is detected.
Fail-Safe Control
ECM performs fail-safe control when an abnormal condition related to ENG A-STOP system is detected and stops all control to protect the system.
Details of fail-safe control vary with detected DTC.

---

## AENLSB0AA904003 - DTC Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904003.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC Check
Refer to
.

---

## AENLSB0AA904004 - DTC Clearance
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904004.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC Clearance
Refer to
.

---

## AENLSB0AA904005 - DTC Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904005.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC Table
DTC
DTC name
DTC detecting condition
Warning light
P081D
Neutral Input Circuit
Measured voltage of neutral position switch signal circuit is not as specified for specified time continuously.
Blinks
P083F
Clutch Pedal Switch “A” / “B” Correlation
This DTC is detected if all of the following conditions are met.
ON signal of CPP No.1 switch is input for specified time continuously.
OFF signal of CPP No.2 switch is input for specified time continuously.
Blinks
P1320
ENG A-STOP Battery Current Sensor “A” Circuit Range / Performance
Difference between maximum current and minimum current is lower than specified value for specified time continuously.
Blinks
P1321
ENG A-STOP Battery Current Sensor “A” Circuit Low
Measured voltage of electric load current sensor circuit is lower than 0.2 V for specified time continuously.
Blinks
P1322
ENG A-STOP Battery Current Sensor “A” Circuit High
Measured voltage of electric load current sensor circuit is higher than 4.8 V for specified time continuously.
Blinks
P1326
ENG A-STOP Battery Temperature Sensor Circuit Low
Measured voltage of battery temperature sensor circuit is lower than 0.2 V for specified time continuously.
Blinks
P1327
ENG A-STOP Battery Temperature Sensor Circuit High
Measured voltage of battery temperature sensor circuit is higher than 4.7 V for specified time continuously.
Blinks
P13A0
ENG A-STOP OFF Switch Circuit
ENG A-STOP OFF switch ON signal is detected for longer than specified time.
Blinks
P254F
Engine Hood Switch Circuit
ON/OFF signals from hood latch switch 1 and hood latch switch 2 are the same for specified time continuously.
Blinks

---

## AENLSB0AA904006 - Fail-Safe Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904006.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fail-Safe Table
Refer to
.

---

## AENLSB0AA904007 - Scan Tool Data
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904007.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Scan Tool Data
Refer to
.

---

## AENLSB0AA904008 - ENG A-STOP System Symptom Diagnosis
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904008.xml
Tree scopes: unscoped
Outgoing references:
- AENLSB0AA901001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA901001.xml | Description of ENG A-STOP System
- AENLSB0AA906015 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906015.xml | Hood Latch Switch Inspection
- AENLSB0AA906018 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906018.xml | ENG A-STOP OFF Switch Inspection
- AENLSB0A9606008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9606008.xml | Front and Rear Door Switch Inspection
- AENLSB0A8106004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A8106004.xml | Front Seat Belt Buckle Inspection
- AENLSB0A5206010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5206010.xml | Neutral Position Switch On-Vehicle Inspection (If Equipped)
- AENLSB0A4106026 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4106026.xml | Brake Booster Pressure Sensor Inspection (If Equipped)
- AENLSB0AAB06002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB06002.xml | Auxiliary Power Module (Lithium-Ion Battery) Inspection
- AENLSB0AB106013 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106013.xml | DC/DC Converter Inspection
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A7204005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204005.xml | Air Conditioning System Check
- AENLSB0AAB06002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB06002.xml | Auxiliary Power Module (Lithium-Ion Battery) Inspection
- AENLSB0AA906015 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906015.xml | Hood Latch Switch Inspection
- AENLSB0AA906018 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906018.xml | ENG A-STOP OFF Switch Inspection
- AENLSB0A9606008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9606008.xml | Front and Rear Door Switch Inspection
- AENLSB0A8106004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A8106004.xml | Front Seat Belt Buckle Inspection
- AENLSB0A5206010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5206010.xml | Neutral Position Switch On-Vehicle Inspection (If Equipped)
- AENLSB0A4106026 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4106026.xml | Brake Booster Pressure Sensor Inspection (If Equipped)
- AENLSB0AAB06002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB06002.xml | Auxiliary Power Module (Lithium-Ion Battery) Inspection
- AENLSB0AB106013 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106013.xml | DC/DC Converter Inspection

Content:
ENG A-STOP System Symptom Diagnosis
ENG A-STOP system controls the system communicating with ECM, ISG, auxiliary power module (lithium-ion battery), DC/DC converter, ESP ® control module, BCM, etc., using CAN communication system.
Before performing symptom diagnosis, check each control module for DTC.
Input signals of switch, sensor, etc., related to the engine auto stop and auto restart control can be checked simply in “Data List” mode on SUZUKI scan tool.
For details of the engine auto stop and auto restart control conditions, refer to
Description of ENG A-STOP System
.
When charging the battery, disconnect negative (–) cable at the battery.
Engine auto stop control does not operate
Other than engine auto stop conditions
—
Faulty hood latch switch
Hood Latch Switch Inspection
Faulty ENG A-STOP OFF switch
ENG A-STOP OFF Switch Inspection
Faulty driver side front door switch
Front and Rear Door Switch Inspection
Faulty driver side seat belt buckle switch
Front Seat Belt Buckle Inspection
Faulty CPP switch
Check CPP switch.
CPP No.1 switch:
CPP No.2 switch:
Faulty neutral position switch
Neutral Position Switch On-Vehicle Inspection (If Equipped)
Faulty ECT sensor
Faulty brake booster sensor
Brake Booster Pressure Sensor Inspection (If Equipped)
Faulty APP sensor
Faulty battery
Faulty ISG
Faulty auxiliary power module (lithium-ion battery)
Auxiliary Power Module (Lithium-Ion Battery) Inspection
Faulty DC/DC converter
DC/DC Converter Inspection
Faulty engine control system
Faulty ESP ® control system
ESP® System Check
Faulty HVAC control system
Air Conditioning System Check
Faulty CAN communication
Engine auto start control does not operate after engine auto stop
Other than engine auto start conditions
—
Faulty ISG
Faulty engine control system
Faulty auxiliary power module (lithium-ion battery)
Auxiliary Power Module (Lithium-Ion Battery) Inspection
Engine auto stop control operates under conditions other than those specified
Faulty hood latch switch
Hood Latch Switch Inspection
Faulty ENG A-STOP OFF switch
ENG A-STOP OFF Switch Inspection
Faulty driver side front door switch
Front and Rear Door Switch Inspection
Faulty driver side seat belt buckle switch
Front Seat Belt Buckle Inspection
Faulty CPP switch
Check CPP switch.
CPP No.1 switch:
CPP No.2 switch:
Faulty neutral position switch
Neutral Position Switch On-Vehicle Inspection (If Equipped)
Faulty ECT sensor
Faulty brake booster pressure sensor
Brake Booster Pressure Sensor Inspection (If Equipped)
Faulty APP sensor
Faulty battery
Faulty ISG
Faulty auxiliary power module (lithium-ion battery)
Auxiliary Power Module (Lithium-Ion Battery) Inspection
Faulty DC/DC converter
DC/DC Converter Inspection
Faulty ECM

---

## AENLSB0AA904009 - ENG A-STOP Warning Light Does Not Come ON with Ignition “ON” and Engine Stopped (but Engine Can Be Started)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904009.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Diagnostic Information and Procedures || symptoms: 10 - Control Systems > Engine Auto Stop Start System > Diagnostic Information and Procedures
Outgoing references: none

Content:
ENG A-STOP Warning Light Does Not Come ON with Ignition “ON” and Engine Stopped (but Engine Can Be Started)
Troubleshooting
DTC check
Check for DTC related to CAN communication.
Is there any CAN related DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Check for DTC related to combination meter.
Is there any combination meter related DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace ECM and recheck for DTC.

---

## AENLSB0AA904010 - ENG A-STOP Warning Light Remains ON or Blinking with Ignition “ON”
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904010.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Diagnostic Information and Procedures || symptoms: 10 - Control Systems > Engine Auto Stop Start System > Diagnostic Information and Procedures
Outgoing references: none

Content:
ENG A-STOP Warning Light Remains ON or Blinking with Ignition “ON”
Troubleshooting
ENG A-STOP OFF switch check
Check ENG A-STOP OFF switch.
Is check result OK?
Go to Step 2.
Replace ENG A-STOP OFF switch.
DTC check
Set ignition “OFF”.
Set ignition “ON”.
Check for DTC.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace combination meter and recheck for DTC.
If ENG A-STOP warning light still remains ON or blinking, replace ECM and recheck for DTC.

---

## AENLSB0AA904012 - DTC P081D
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904012.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Engine Auto Stop Start System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P081D
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P081D: Neutral Input Circuit
Measured voltage of neutral position switch signal circuit is not as specified for specified time continuously.
Neutral position switch circuit / connector
Neutral position switch
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
A2:
Neutral position switch signal circuit (–)
2.
ECM
A1:
Neutral position switch signal circuit (+)
1.
Neutral position switch
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check “Neutral Switch Voltage” displayed on SUZUKI scan tool.
Is check result OK?
Check for intermittent trouble.
Go to Step 2.
Neutral position switch signal circuit check
Set ignition “OFF”.
Disconnect neutral position switch and “E01” connectors.
Check for proper terminal connection to neutral position switch and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A1” and “A2” circuits: less than 1 Ω
Resistance between “A1” and “A2” circuits and ground: infinity
Resistance between “A1” and “A2” circuit terminals at neutral position switch connector: infinity
Voltage of “A1” and “A2” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Neutral position switch check
Check neutral position switch.
Is check result OK?
Replace ECM and recheck for DTC.
Replace neutral position switch.

---

## AENLSB0AA904013 - DTC P083F
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904013.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Engine Auto Stop Start System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P083F
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P083F: Clutch Pedal Switch “A” / “B” Correlation
This DTC is detected if all of the following conditions are met.
ON signal of CPP No.1 switch is input for specified time continuously.
OFF signal of CPP No.2 switch is input for specified time continuously.
CPP No.1 switch circuit / connector
CPP No.1 switch
CPP No.2 switch circuit / connector
CPP No.2 switch
ECM
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
CPP No.1 switch ground circuit
2.
CPP No.2 switch
A1:
CPP No.1 switch signal circuit
B2:
CPP No.2 switch ground circuit
3.
ECM
A2:
CPP No.2 switch signal circuit
1.
CPP No.1 switch
DTC Confirmation Procedure
Set ignition “ON”.
Depress clutch pedal fully for 1 second or more.
Release clutch pedal for 1 second or more.
DTC Troubleshooting
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check “Half Clutch Switch”, “Clutch Switch” and “Clutch Switch Condition” displayed on SUZUKI scan tool.
Is check result OK?
Check for intermittent trouble.
Go to Step 2.
CPP No.1 switch signal circuit check
Set ignition “OFF”.
Disconnect CPP No.1 switch and “E01” connectors.
Check for proper terminal connection to CPP No.1 switch and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A1” circuit: less than 1 Ω
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and other terminal at CPP No.1 switch connector: infinity
Voltage of “A1” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
CPP No.1 switch ground circuit check
Set ignition “OFF”.
Check that resistance between “B1” circuit and ground is less than 1 Ω.
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
CPP No.2 switch signal circuit check
Disconnect CPP No.2 switch connector.
Check for proper terminal connection to CPP No.2 switch and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A2” circuit terminal and other terminal at CPP No.2 switch connector: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
CPP No.2 switch ground circuit check
Set ignition “OFF”.
Check that resistance between “B2” circuit and ground is less than 1 Ω.
Is check result OK?
Go to Step 6.
Repair or replace defective wire harness.
CPP No.1 switch check
Check CPP No.1 switch.
Is check result OK?
Go to Step 7.
Replace CPP No.1 switch.
CPP No.2 switch check
Check CPP No.2 switch.
Is check result OK?
Replace ECM and recheck for DTC.
Replace CPP No.2 switch.

---

## AENLSB0AA904014 - DTC P1320 / P1321 / P1322
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904014.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Engine Auto Stop Start System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P1320 / P1321 / P1322
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1320: ENG A-STOP Battery Current Sensor “A” Circuit Range / Performance
Difference between maximum current and minimum current is lower than specified value for specified time continuously.
Electric load current sensor & battery temperature sensor circuit / connector
Electric load current sensor & battery temperature sensor
ECM
P1321: ENG A-STOP Battery Current Sensor “A” Circuit Low
Measured voltage of electric load current sensor circuit is lower than 0.2 V for specified time continuously.
P1322: ENG A-STOP Battery Current Sensor “A” Circuit High
Measured voltage of electric load current sensor circuit is higher than 4.8 V for specified time continuously.
Circuit Diagram
[A]:
ECM connector (View: [a])
A3:
Battery temperature sensor signal circuit
2.
Electric load current sensor
A1:
Electric load current sensor power supply circuit
A4:
Electric load current sensor & battery temperature sensor ground circuit
3.
Battery temperature sensor
A2:
Electric load current sensor signal circuit
1.
Electric load current sensor & battery temperature sensor
4.
ECM
DTC Confirmation Procedure
Run engine at idle speed for 2 min.
DTC Troubleshooting
Battery negative (–) cable connection check
Check for proper connection of negative (–) cable at battery.
Is check result OK?
Go to Step 2.
Repair or replace battery negative (–) cable.
Electric load current sensor power supply circuit check
Set ignition “OFF”.
Disconnect electric load current sensor & battery temperature sensor connector.
Check for proper terminal connection to electric load current sensor & battery temperature sensor connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and “A4” is approx. 5 V.
Is check result OK?
Go to Step 5.
Go to Step 3.
Electric load current sensor ground circuit check
Check that voltage between “A1” and ground is approx. 5 V.
Is check result OK?
Repair or replace “A4” circuit. If DTC P1320, P1321 or P1322 is still detected, replace ECM and recheck for DTC.
Go to Step 4.
Electric load current sensor power supply circuit check
Set ignition “OFF”.
Disconnect “E01” connector.
Check for proper terminal connection to “E01” connector.
If connection is OK, check the following points.
Resistance of “A1” circuit: less than 1 Ω
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and other terminal at electric load current sensor & battery temperature sensor connector: infinity
Voltage of “A1” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Replace ECM and recheck for DTC.
Repair or replace defective wire harness.
Electric load current sensor signal circuit check
Set ignition “OFF”.
Disconnect “E01” connector.
Check for proper terminal connection to “E01” connector.
If connection is OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A2” circuit terminal and other terminal at electric load current sensor & battery temperature sensor connector: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 6.
Repair or replace defective wire harness.
Electric load current sensor check
Check electric load current sensor & battery temperature sensor.
Is check result OK?
Replace ECM and recheck for DTC.
Replace electric load current sensor & battery temperature sensor.

---

## AENLSB0AA904016 - DTC P1326 / P1327
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904016.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Engine Auto Stop Start System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P1326 / P1327
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1326: ENG A-STOP Battery Temperature Sensor Circuit Low
Measured voltage of battery temperature sensor circuit is lower than 0.2 V for specified time continuously.
Electric load current sensor & battery temperature sensor circuit / connector
Electric load current sensor & battery temperature sensor
ECM
P1327: ENG A-STOP Battery Temperature Sensor Circuit High
Measured voltage of battery temperature sensor circuit is higher than 4.7 V for specified time continuously.
Circuit Diagram
[A]:
ECM connector (View: [a])
A3:
Battery temperature sensor signal circuit
2.
Electric load current sensor
A1:
Electric load current sensor power supply circuit
A4:
Electric load current sensor & battery temperature sensor ground circuit
3.
Battery temperature sensor
A2:
Electric load current sensor signal circuit
1.
Electric load current sensor & battery temperature sensor
4.
ECM
DTC Confirmation Procedure
Run engine at idle speed for 1 min.
DTC Troubleshooting
Battery temperature sensor signal circuit and ground circuit check
Set ignition “OFF”.
Disconnect electric load current sensor & battery temperature sensor and “E01” connectors.
Check for proper terminal connection to electric load current sensor & battery temperature sensor and “E01” connectors.
If connections are OK, check the following points.
Resistance of “A3” and “A4” circuits: less than 1 Ω
Resistance between each of “A3” and “A4” circuits and ground: infinity
Resistance between each of “A3” and “A4” circuit terminals and other terminal at electric load current sensor & battery temperature sensor connector: infinity
Voltage of “A3” and “A4” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
Battery temperature sensor check
Check electric load current sensor & battery temperature sensor.
Is check result OK?
Replace ECM and recheck for DTC.
Replace electric load current sensor & battery temperature sensor.

---

## AENLSB0AA904019 - DTC P13A0
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904019.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Engine Auto Stop Start System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P13A0
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P13A0: ENG A-STOP OFF Switch Circuit
ENG A-STOP OFF switch ON signal is detected for longer than specified time.
ENG A-STOP OFF switch circuit / connector
ENG A-STOP OFF switch
ECM
Circuit Diagram
[A]:
BCM connector (View: [a])
1.
ENG A-STOP OFF switch
3.
CAN driver
A1:
ENG A-STOP OFF switch signal circuit
2.
BCM
4.
To ECM
DTC Troubleshooting
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check “Prohibit Idle Stop SW” displayed on SUZUKI scan tool.
Is check result OK?
Check for intermittent trouble.
Go to Step 2.
ENG A-STOP OFF switch signal circuit check
Disconnect negative (–) cable at battery.
Disconnect “G04” connector and ENG A-STOP OFF switch connector.
Check for proper connection to “G04” connector and ENG A-STOP OFF switch connector.
If connections are OK, check the following points.
Resistance of “A1” circuit: less than 1 Ω
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and other terminal at “G04” connector: infinity
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
ENG A-STOP OFF switch check
Check ENG A-STOP OFF switch.
Is check result OK?
Replace ECM and recheck DTC.
Replace ENG A-STOP OFF switch.

---

## AENLSB0AA904020 - DTC P254F
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904020.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Engine Auto Stop Start System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P254F
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P254F: Engine Hood Switch Circuit
ON/OFF signals from hood latch switch 1 and hood latch switch 2 are the same for specified time continuously.
Hood latch switch circuit / connector
Hood latch switch
BCM
Circuit Diagram
[A]:
BCM connector (View: [a])
B1:
Hood latch switch ground circuit
3.
CAN driver
A1:
Hood latch switch signal circuit 1
1.
Hood latch switch
4.
To ECM
A2:
Hood latch switch signal circuit 2
2.
BCM
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check “Hood Switch1” and “Hood Switch2” displayed on SUZUKI scan tool.
Is check result OK?
Check for intermittent trouble.
Go to Step 2.
Hood latch switch signal circuit check
Disconnect negative (–) cable at battery.
Disconnect hood latch switch and “E04” connectors.
Check for proper terminal connection to hood latch switch and “E04” connectors.
If connections are OK, check the following points.
Resistance of “A1” and “A2” circuits: less than 1 Ω
Resistance between each of “A1” and “A2” circuits and ground: infinity
Resistance between each of “A1” and “A2” circuit terminals and other terminal at hood latch switch connector: infinity
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Hood latch switch ground circuit check
Check that resistance between “B1” circuit and ground is less than 1 Ω.
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Hood latch switch check
Check hood latch switch.
Is check result OK?
Replace BCM and recheck for DTC.
Replace hood latch.

---

## AENLSB0AA904021 - Inspection of ECM and Its Circuits
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904021.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Inspection of ECM and Its Circuits
Refer to
.

---

## AENLSB0AA904022 - ECM Power Supply and Ground Circuit Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904022.xml
Tree scopes: unscoped
Outgoing references: none

Content:
ECM Power Supply and Ground Circuit Check
Refer to
.

---

## AENLSB0AA904A01 - Engine auto stop control does not operate
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904A01.xml
Tree scopes: symptoms: 10 - Control Systems > Engine Auto Stop Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA901001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA901001.xml | Description of ENG A-STOP System
- AENLSB0AA906015 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906015.xml | Hood Latch Switch Inspection
- AENLSB0AA906018 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906018.xml | ENG A-STOP OFF Switch Inspection
- AENLSB0A9606008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9606008.xml | Front and Rear Door Switch Inspection
- AENLSB0A8106004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A8106004.xml | Front Seat Belt Buckle Inspection
- AENLSB0A5206010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5206010.xml | Neutral Position Switch On-Vehicle Inspection (If Equipped)
- AENLSB0A4106026 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4106026.xml | Brake Booster Pressure Sensor Inspection (If Equipped)
- AENLSB0AAB06002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB06002.xml | Auxiliary Power Module (Lithium-Ion Battery) Inspection
- AENLSB0AB106013 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106013.xml | DC/DC Converter Inspection
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A7204005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204005.xml | Air Conditioning System Check

Content:
Engine auto stop control does not operate
ENG A-STOP system controls the system communicating with ECM, ISG, auxiliary power module (lithium-ion battery), DC/DC converter, ESP ® control module, BCM, etc., using CAN communication system.
Before performing symptom diagnosis, check each control module for DTC.
Input signals of switch, sensor, etc., related to the engine auto stop and auto restart control can be checked simply in “Data List” mode on SUZUKI scan tool.
For details of the engine auto stop and auto restart control conditions, refer to
Description of ENG A-STOP System
.
When charging the battery, disconnect negative (–) cable at the battery.
Engine auto stop control does not operate
Other than engine auto stop conditions
—
Faulty hood latch switch
Hood Latch Switch Inspection
Faulty ENG A-STOP OFF switch
ENG A-STOP OFF Switch Inspection
Faulty driver side front door switch
Front and Rear Door Switch Inspection
Faulty driver side seat belt buckle switch
Front Seat Belt Buckle Inspection
Faulty CPP switch
Check CPP switch.
CPP No.1 switch:
CPP No.2 switch:
Faulty neutral position switch
Neutral Position Switch On-Vehicle Inspection (If Equipped)
Faulty ECT sensor
Faulty brake booster sensor
Brake Booster Pressure Sensor Inspection (If Equipped)
Faulty APP sensor
Faulty battery
Faulty ISG
Faulty auxiliary power module (lithium-ion battery)
Auxiliary Power Module (Lithium-Ion Battery) Inspection
Faulty DC/DC converter
DC/DC Converter Inspection
Faulty engine control system
Faulty ESP ® control system
ESP® System Check
Faulty HVAC control system
Air Conditioning System Check
Faulty CAN communication

---

## AENLSB0AA904A02 - Engine auto start control does not operate after engine auto stop
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904A02.xml
Tree scopes: symptoms: 10 - Control Systems > Engine Auto Stop Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA901001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA901001.xml | Description of ENG A-STOP System
- AENLSB0AAB06002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB06002.xml | Auxiliary Power Module (Lithium-Ion Battery) Inspection

Content:
Engine auto start control does not operate after engine auto stop
ENG A-STOP system controls the system communicating with ECM, ISG, auxiliary power module (lithium-ion battery), DC/DC converter, ESP ® control module, BCM, etc., using CAN communication system.
Before performing symptom diagnosis, check each control module for DTC.
Input signals of switch, sensor, etc., related to the engine auto stop and auto restart control can be checked simply in “Data List” mode on SUZUKI scan tool.
For details of the engine auto stop and auto restart control conditions, refer to
Description of ENG A-STOP System
.
When charging the battery, disconnect negative (–) cable at the battery.
Engine auto start control does not operate after engine auto stop
Other than engine auto start conditions
—
Faulty ISG
Faulty engine control system
Faulty auxiliary power module (lithium-ion battery)
Auxiliary Power Module (Lithium-Ion Battery) Inspection

---

## AENLSB0AA904A03 - Engine auto stop control operates under conditions other than those specified
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904A03.xml
Tree scopes: symptoms: 10 - Control Systems > Engine Auto Stop Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA901001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA901001.xml | Description of ENG A-STOP System
- AENLSB0AA906015 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906015.xml | Hood Latch Switch Inspection
- AENLSB0AA906018 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906018.xml | ENG A-STOP OFF Switch Inspection
- AENLSB0A9606008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9606008.xml | Front and Rear Door Switch Inspection
- AENLSB0A8106004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A8106004.xml | Front Seat Belt Buckle Inspection
- AENLSB0A5206010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5206010.xml | Neutral Position Switch On-Vehicle Inspection (If Equipped)
- AENLSB0A4106026 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4106026.xml | Brake Booster Pressure Sensor Inspection (If Equipped)
- AENLSB0AAB06002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB06002.xml | Auxiliary Power Module (Lithium-Ion Battery) Inspection
- AENLSB0AB106013 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106013.xml | DC/DC Converter Inspection

Content:
Engine auto stop control operates under conditions other than those specified
ENG A-STOP system controls the system communicating with ECM, ISG, auxiliary power module (lithium-ion battery), DC/DC converter, ESP ® control module, BCM, etc., using CAN communication system.
Before performing symptom diagnosis, check each control module for DTC.
Input signals of switch, sensor, etc., related to the engine auto stop and auto restart control can be checked simply in “Data List” mode on SUZUKI scan tool.
For details of the engine auto stop and auto restart control conditions, refer to
Description of ENG A-STOP System
.
When charging the battery, disconnect negative (–) cable at the battery.
Engine auto stop control operates under conditions other than those specified
Faulty hood latch switch
Hood Latch Switch Inspection
Faulty ENG A-STOP OFF switch
ENG A-STOP OFF Switch Inspection
Faulty driver side front door switch
Front and Rear Door Switch Inspection
Faulty driver side seat belt buckle switch
Front Seat Belt Buckle Inspection
Faulty CPP switch
Check CPP switch.
CPP No.1 switch:
CPP No.2 switch:
Faulty neutral position switch
Neutral Position Switch On-Vehicle Inspection (If Equipped)
Faulty ECT sensor
Faulty brake booster pressure sensor
Brake Booster Pressure Sensor Inspection (If Equipped)
Faulty APP sensor
Faulty battery
Faulty ISG
Faulty auxiliary power module (lithium-ion battery)
Auxiliary Power Module (Lithium-Ion Battery) Inspection
Faulty DC/DC converter
DC/DC Converter Inspection
Faulty ECM

---

## AENLSB0AA906001 - ECM Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
ECM Removal and Installation
Refer to
.

---

## AENLSB0AA906002 - Sensor Calibration for ENG A-STOP System
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Repair Instructions
Outgoing references:
- AENLSB0AB106009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106009.xml | Brake Stroke Sensor Zero Point Reset

Content:
Sensor Calibration for ENG A-STOP System
Refer to
Brake Stroke Sensor Zero Point Reset
.

---

## AENLSB0AA906003 - Auxiliary Power Module (Lithium-Ion Battery) Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Repair Instructions
Outgoing references:
- AENLSB0AA906004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906004.xml | Auxiliary Power Module (Lithium-Ion Battery) Inspection
- AENLSB0AAB06001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB06001.xml | Auxiliary Power Module (Lithium-Ion Battery) Removal and Installation

Content:
Auxiliary Power Module (Lithium-Ion Battery) Removal and Installation
Auxiliary Power Module (Lithium-Ion Battery) Inspection
Refer to
Auxiliary Power Module (Lithium-Ion Battery) Removal and Installation
.

---

## AENLSB0AA906004 - Auxiliary Power Module (Lithium-Ion Battery) Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Repair Instructions
Outgoing references:
- AENLSB0AA906003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906003.xml | Auxiliary Power Module (Lithium-Ion Battery) Removal and Installation
- AENLSB0AAB06002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB06002.xml | Auxiliary Power Module (Lithium-Ion Battery) Inspection

Content:
Auxiliary Power Module (Lithium-Ion Battery) Inspection
Auxiliary Power Module (Lithium-Ion Battery) Removal and Installation
Refer to
Auxiliary Power Module (Lithium-Ion Battery) Inspection
.

---

## AENLSB0AA906005 - ISG Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906005.xml
Tree scopes: unscoped
Outgoing references:
- AENLSB0AA906006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906006.xml | ISG Inspection

Content:
ISG Removal and Installation
ISG Inspection
Refer to
.

---

## AENLSB0AA906006 - ISG Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906006.xml
Tree scopes: unscoped
Outgoing references:
- AENLSB0AA906005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906005.xml | ISG Removal and Installation

Content:
ISG Inspection
ISG Removal and Installation
Refer to
.

---

## AENLSB0AA906007 - Neutral Position Switch Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906007.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Repair Instructions
Outgoing references:
- AENLSB0AA906008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906008.xml | Neutral Position Switch Inspection
- AENLSB0A5206009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5206009.xml | Neutral Position Switch Removal and Installation (If Equipped)

Content:
Neutral Position Switch Removal and Installation
Neutral Position Switch Inspection
Refer to
Neutral Position Switch Removal and Installation (If Equipped)
.

---

## AENLSB0AA906008 - Neutral Position Switch Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906008.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Repair Instructions
Outgoing references:
- AENLSB0AA906007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906007.xml | Neutral Position Switch Removal and Installation
- AENLSB0A5206010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5206010.xml | Neutral Position Switch On-Vehicle Inspection (If Equipped)

Content:
Neutral Position Switch Inspection
Neutral Position Switch Removal and Installation
Refer to
Neutral Position Switch On-Vehicle Inspection (If Equipped)
.

---

## AENLSB0AA906009 - CPP No.1 Switch Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906009.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Repair Instructions
Outgoing references:
- AENLSB0AA906010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906010.xml | CPP No.1 Switch Inspection
- AENLSB0A5306001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5306001.xml | CPP No.1 Switch Removal and Installation

Content:
CPP No.1 Switch Removal and Installation
CPP No.1 Switch Inspection
Refer to
CPP No.1 Switch Removal and Installation
.

---

## AENLSB0AA906010 - CPP No.1 Switch Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906010.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Repair Instructions
Outgoing references:
- AENLSB0AA906009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906009.xml | CPP No.1 Switch Removal and Installation
- AENLSB0A5306002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5306002.xml | CPP No.1 Switch Inspection and Adjustment

Content:
CPP No.1 Switch Inspection
CPP No.1 Switch Removal and Installation
Refer to
CPP No.1 Switch Inspection and Adjustment
.

---

## AENLSB0AA906011 - CPP No.2 Switch Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906011.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Repair Instructions
Outgoing references:
- AENLSB0AA906012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906012.xml | CPP No.2 Switch Inspection
- AENLSB0A5306003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5306003.xml | CPP No.2 Switch Removal and Installation

Content:
CPP No.2 Switch Removal and Installation
CPP No.2 Switch Inspection
Refer to
CPP No.2 Switch Removal and Installation
.

---

## AENLSB0AA906012 - CPP No.2 Switch Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906012.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Repair Instructions
Outgoing references:
- AENLSB0AA906011 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906011.xml | CPP No.2 Switch Removal and Installation
- AENLSB0A5306004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5306004.xml | CPP No.2 Switch Inspection and Adjustment

Content:
CPP No.2 Switch Inspection
CPP No.2 Switch Removal and Installation
Refer to
CPP No.2 Switch Inspection and Adjustment
.

---

## AENLSB0AA906013 - Brake Booster Pressure Sensor Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906013.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Repair Instructions
Outgoing references:
- AENLSB0A4106026 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4106026.xml | Brake Booster Pressure Sensor Inspection (If Equipped)

Content:
Brake Booster Pressure Sensor Inspection
Refer to
Brake Booster Pressure Sensor Inspection (If Equipped)
.

---

## AENLSB0AA906014 - Hood Latch Switch Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906014.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Repair Instructions
Outgoing references:
- AENLSB0AA906015 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906015.xml | Hood Latch Switch Inspection
- AENLSB0A9A06003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9A06003.xml | Hood Lock Release Cable Components

Content:
Hood Latch Switch Removal and Installation
Hood Latch Switch Inspection
Hood latch switch is combined with hood latch therefore check it as it is.
If any abnormality is found, replace hood latch.
Refer to
Hood Lock Release Cable Components
.

---

## AENLSB0AA906015 - Hood Latch Switch Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906015.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Repair Instructions
Outgoing references:
- AENLSB0AA906014 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906014.xml | Hood Latch Switch Removal and Installation

Content:
Hood Latch Switch Inspection
Hood Latch Switch Removal and Installation
Disconnect hood latch switch connector (1).
Check continuity between terminals of hood latch switch connector when latch hook (2) is operated. If check result is not as specified, replace hood latch (3).
Hood latch switch continuity

---

## AENLSB0AA906016 - Electric Load Current Sensor On-Vehicle Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906016.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Electric Load Current Sensor On-Vehicle Inspection
Refer to
.

---

## AENLSB0AA906017 - ENG A-STOP OFF Switch Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906017.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Repair Instructions
Outgoing references:
- AENLSB0AA906018 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906018.xml | ENG A-STOP OFF Switch Inspection

Content:
ENG A-STOP OFF Switch Removal and Installation
Removal
Remove steering column hole cover.
Disconnect ENG A-STOP OFF switch connector.
Remove ENG A-STOP OFF switch (1) from switch bezel.
Installation
ENG A-STOP OFF Switch Inspection
Reverse removal procedure.

---

## AENLSB0AA906018 - ENG A-STOP OFF Switch Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906018.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Repair Instructions
Outgoing references:
- AENLSB0AA906017 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906017.xml | ENG A-STOP OFF Switch Removal and Installation

Content:
ENG A-STOP OFF Switch Inspection
ENG A-STOP OFF Switch Removal and Installation
Check continuity between terminals at each switch position. If check result is not as specified, replace ENG A-STOP OFF switch.

---

## AENLSB0AA906019 - DC/DC Converter Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906019.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Repair Instructions
Outgoing references:
- AENLSB0AA906020 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906020.xml | DC/DC Converter Inspection
- AENLSB0AB106012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106012.xml | DC/DC Converter Removal and Installation

Content:
DC/DC Converter Removal and Installation
DC/DC Converter Inspection
Refer to
DC/DC Converter Removal and Installation
.

---

## AENLSB0AA906020 - DC/DC Converter Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906020.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Repair Instructions
Outgoing references:
- AENLSB0AA906019 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA906019.xml | DC/DC Converter Removal and Installation
- AENLSB0AB106013 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106013.xml | DC/DC Converter Inspection

Content:
DC/DC Converter Inspection
DC/DC Converter Removal and Installation
Refer to
DC/DC Converter Inspection
.

---

## AENLSB0AAA10001 - Precautions for Diagnosing Trouble
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA10001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Precautions > Dual Sensor Brake Support
Outgoing references:
- AENLSB0AAA14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14001.xml | Dual Sensor Brake Support System Check:Dual Sensor Brake Support

Content:
Precautions for Diagnosing Trouble
Diagnose Dual Sensor Brake Support (DSBS) system according to the procedure in
Dual Sensor Brake Support System Check:Dual Sensor Brake Support
.
Check that component parts related to the vehicle posture such as tires, suspension, etc. are standard parts.
Check that dual sensor brake support control module is installed in the original position.
Check that windshield is no abrasion or adhesion of dirt, etc. on the surface.
Check that sticker, film (including clear film), etc. are not affixed in the area (1) on the windshield.
[A]:
Windshield outside
“a”:
100mm (3.94 in.)
3.
Dual sensor brake support control module center
[B]:
Windshield inside
2.
Windshield upper end
4.
Dual sensor brake support control module front end

---

## AENLSB0AAA10002 - Precautions for Dual Sensor Brake Support System
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA10002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Precautions > Dual Sensor Brake Support
Outgoing references:
- AENLSB0AAA16002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA16002.xml | Dual Sensor Brake Support Control Module Aiming Adjustment:Dual Sensor Brake Support

Content:
Precautions for Dual Sensor Brake Support System
Dual sensor brake support system is designed to assist safe driving avoiding collision or reducing the collision damage. However, the system efficiency to detect objects and vehicle controllability are limited, and the system may not function depending on the surrounding circumstances. Therefore it is necessary to pay enough attention for safe driving checking the surrounding traffic.
For lane departure prevention model, the lane departure prevention system assists steering but it is not a system to bring the vehicle back to the lane automatically. And, if the driver drives without holding the steering wheel, the system does not assist the steering.
Dual sensor brake support may work at a railroad crossing sensing the crossing gate as an obstacle. If the vehicle stops automatically in the crossing even though the crossing gate is not lowered, get away from the place taking the following operations.
Move the vehicle depressing the accelerator pedal if the vehicle is stopped.
Depress the accelerator pedal while the vehicle is decelerating.
Disable dual sensor brake support system by pushing the dual sensor brake support OFF switch.
Without observing the following precautions, a serious accident may occur by malfunction of dual sensor brake support.
Do not affix sticker, film (including clear film), etc. in specified area of windshield.
Do not drop or otherwise expose dual sensor brake support control module to large shock. The dual sensor brake support control module that has received large shock should be replaced.
When replacing windshield and windshield wiper blade, use SUZUKI genuine parts.
After removing / and installing or replacing windshield, perform
Dual Sensor Brake Support Control Module Aiming Adjustment:Dual Sensor Brake Support
.
Do not modify suspension. Modification of the vehicle’s height or inclination may affect correct detection of a vehicle ahead.
Use tires of the specified size and same brand. Do not mix tires of different wear.
Disable dual sensor brake support when checking the vehicle on a brake tester or speedometer tester. Without disabling dual sensor brake support, the system may malfunction.
Procedure to disable dual sensor brake support can be selected either dual sensor brake support OFF switch (on-board) or ESP ® OFF switch (on-board).
When the driver does any of the following, then the dual sensor brake support system may not operate.
The vehicle is in a collision avoidance operation using steering, accelerator pedal, etc.
Windshield washer is being operated.
Dual sensor brake support may not work under the following conditions.
Windshield is soiled or fogged.
Raindrops or droplets from windshield washer etc. are not wiped fully by windshield wiper.
There are environmental obstacles such as heavy rain, snowstorm, dense fog, clouds of smoke, frost on windshield, etc.
Bad visibility caused by raised dust or spray of water from the vehicle ahead or oncoming vehicle, etc.
At twilight in the morning and evening.
The device is exposed to strong light such as direct sunshine or headlight high beam.
Obstructed front visibility caused by a load such as canoe on the roof.
The vehicle ahead has a special rear end appearance such as low platform truck, car carrier, sidecar, etc.
The vehicle ahead has a load projected out of the rear end of the vehicle.
The vehicle ahead has uneven rear end.
Laterally stopped vehicle.
Backing-up vehicle.
Sudden condition change of the vehicle ahead because of abrupt steering, quick acceleration or deceleration.
Pedestrian(s) at night.
Small animal(s).
Window surface or mirror.
Pole like structures such as traffic sign, power pole, etc.
Low height structure such as guard rail etc.
Obstacle on intersection or curve.
Vehicle or pedestrian which is very close to own vehicle.
Cutting in or rushing out vehicle or pedestrian.
Vehicle or pedestrian located outside of illuminating area of the headlight.
There is no lane-dividing line or the lane marking is in the following conditions.
Fading
Low contrast between the line color and the pavement color
Line is narrow
Inappropriate loading or occupants.
The vehicle is tilted by heavy load on the luggage compartment or rear seat.
The vehicle is running without lighting the headlight at night or in a tunnel.
The vehicle is running on a narrow traffic lane.
The vehicle is running on a winding road, steep uphill or steep downhill.
The vehicle is running on a bumpy or wavy road because of no pavement etc.
The vehicle is entering or leaving a tunnel.
During the night or in a tunnel, headlight of the oncoming vehicle or tail light of the vehicle ahead is in the following conditions.
OFF
Dark (soiled lamp)
ON only at one side
Small vehicle such as motorcycle or bicycle.
Dual sensor brake support may work unexpectedly under the following conditions.
While passing a tollgate or parking gate, or starts vehicle before the gate opens fully.
While running touching a flag, tree branches, grass, etc.
While running on a road where the gradient changes suddenly.
Exhaust black smoke or white smoke from the vehicle ahead is visible obviously.
There are tracks on wet or snow-covered road.
There is a boundary between snow and pavement or repair work spot on the road.
There are two or more boundary lane lines.
Shadow of guard rail etc. falls on the road.
There is light source(s) similar to headlight of the oncoming vehicle or tail light of the vehicle ahead.
There is dazzling light reflected from traffic sign or mirror.
The vehicle and oncoming vehicle pass each other at a sharp narrow curve.
Obstacle at the intersection or curve.
The vehicle passes close to other vehicle or obstacle.
The vehicle parks close to obstacle.
There is obstacle similar to traffic sign in front of the vehicle.

---

## AENLSB0AAA10003 - Precautions for Servicing Dual Sensor Brake Support System
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA10003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Precautions > Dual Sensor Brake Support
Outgoing references: none

Content:
Precautions for Servicing Dual Sensor Brake Support System
When ignition is “ON”, 1M class laser beam in IEC60825-1 standards is irradiated from the dual sensor brake support control module. This laser beam is not harmful to eyes in normal usage. However, without observing the following precautions, an optical impairment or loss of eyesight may occur in the worst case.
Using a magnifier etc., do not look into dual sensor brake support control module from a distance within 100 mm (3.94 in.).
To avoid danger of harmful irradiation, never disassemble dual sensor brake support control module.
Laser specifications
Maximum average output
45 mW
Pulse width
33 ns
Wavelength
905 nm
Angle of divergence (horizontal x vertical)
28° x 12°
When servicing a vehicle for any of the following items, the dual sensor brake support control module detects unexpected object and the automatic brake could work suddenly. Therefore, disable dual sensor brake support by pushing the dual sensor brake support OFF switch or ESP ® OFF switch for a long time and turn on dual sensor brake support OFF light beforehand.
When checking the vehicle on a speedometer tester or free rollers.
When the vehicle is towed by another vehicle or tows another vehicle.
When driving the vehicle which might have been exposed to impact at around vehicle front i.e. the vehicle involved in an accident.
When loading the vehicle on a car carrier truck.
When the vehicle runs with a spare tire or tire chains fitted.
When the vehicle runs with an emergency repaired tire fitted.
When the vehicle is hoisted and the tires are rotated with engine running.
When the vehicle races in a circuit etc.
When the vehicle is loaded on or unloaded from a ferry.
When the vehicle moves into an automobile elevator or parking garage with elevators.
When the automatic brake works many times unexpectedly.
Without observing the following precautions, dual sensor brake support may malfunction.
Do not affix sticker including clear film or paint (*1) on windshield.
Do not modify the suspension.
Do not use tires other than the specified size.
Do not use worn tires or mix tires of different wear.
Use tires adjusted to the specified pressure.
Do not grip lens (camera) and laser sensors of dual sensor brake support control module.
Do not wipe lens (camera) and laser sensors.
Do not adhere cleaning solvent to lens (camera) and laser sensors when cleaning windshield.
When removing dual sensor brake support control module, protect the lens and laser sensors from soiling by covering them with vinyl film etc.
If any damage is present within the prohibited repair area (1), replace the windshield.
[A]:
Windshield outside
2.
Windshield upper end
[B]:
Windshield inside
3.
Dual sensor brake support control module center
“a”:
100mm (3.94 in.)
4.
Dual sensor brake support control module front end
*1: Exclude wax or water repellent

---

## AENLSB0AAA10004 - Precautions for Removing / Installing and Replacing Dual Sensor Brake Support Control Module
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA10004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Precautions > Dual Sensor Brake Support
Outgoing references:
- AENLSB0AAA16002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA16002.xml | Dual Sensor Brake Support Control Module Aiming Adjustment:Dual Sensor Brake Support

Content:
Precautions for Removing / Installing and Replacing Dual Sensor Brake Support Control Module
When replacing dual sensor brake support control module, use new control module.
After removing / installing or replacing dual sensor brake support control module and/or windshield, perform
Dual Sensor Brake Support Control Module Aiming Adjustment:Dual Sensor Brake Support
.
When installing dual sensor brake support control module, check that the mounting portion is not damaged or deformed.
Do not disassemble dual sensor brake support control module. If disassembled, replace it.
If dual sensor brake support control module is exposed to a large shock, it will lose its original performance. Do not drop the control module. If the control module is exposed to a large shock, replace it even if the appearance is normal.

---

## AENLSB0AAA11001 - Dual Sensor Brake Support System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA11001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > General Description > Dual Sensor Brake Support
Outgoing references: none

Content:
Dual Sensor Brake Support System Description
Dual sensor brake support is a system incorporating a frontal collision warning function, brake assist function against frontal collision damage, automatic brake function, lane departure warning function, vehicle swaying warning function, high beam assist function and traffic sign recognition function (if equipped). However, on lane departure prevention model, P/S control module controls lane departure prevention function based on camera information signal from dual sensor brake support control module.
As a sensor detecting a vehicle or pedestrian ahead or other frontal obstacle, lane lines and traffic signs, the system uses a monocular camera (1) and laser beam irradiation device (2) incorporated in dual sensor brake support control module (3). In addition, the system senses headlight of the oncoming vehicle, tail light of the vehicle ahead and streetlight.
4.
Laser beam photoreceptor device
Monocular camera detects frontal vehicle, pedestrian, lane-dividing line and traffic sign etc. using image processing, and laser radar detects accurate distance to frontal vehicle, pedestrian and frontal obstacle irradiating 905 nm infrared rays frontward and measuring time of reflected rays from frontal objects. Using information from monocular camera, the dual sensor brake support control module detects presence, type and distance of objects.
1.
Laser beam detectable area
2.
Monocular camera detectable area
Dual sensor brake support system consists of the control module, dual sensor brake support OFF switch, lane departure warning OFF switch, ESP ® OFF switch, lane departure prevention switch (lane departure prevention model), lighting and turn signal switch, combination meter, ECM, TCM (A/T model), BCM, P/S control module and ESP ® control module.
Operation Table
Function
Description
Dual sensor brake support
Frontal collision warning function
When your vehicle is running at about 15 to 140 km/h (9 to 87 mile/h) and a vehicle ahead is stopped, or your vehicle is running at about 15 to 60 km/h (9 to 37 mile/h) and a pedestrian ahead is stopped, or the relative speed between your vehicle and the vehicle or pedestrian ahead is about 15 km/h (9 mile/h) or more, the system detects hazardous state of a collision and urges the driver’s attention to apply brake by sounding the buzzer in the combination meter and displaying caution on the information display.
Brake assist function
When your vehicle is running at about 15 to 80 km/h (9 to 50 mile/h) and a vehicle ahead is stopped, or your vehicle is running at about 15 to 60 km/h (9 to 37 mile/h) and a pedestrian ahead is stopped, or the relative speed between your vehicle and the vehicle or pedestrian ahead is about 15 km/h (9 mile/h) or more, the driver notices that the vehicle is approaching the vehicle ahead and applies hard brake but insufficiently, the system judges a pressing hazard of the collision and assists avoidance of the collision by raising brake pressure.
Automatic brake function
When your vehicle is running at about 5 to 100 km/h (3 to 62 mile/h) and a vehicle ahead is stopped, or your vehicle is running at about 5 to 60 km/h (3 to 37 mile/h) and a pedestrian ahead is stopped, or the relative speed between your vehicle and the vehicle or pedestrian ahead is about 5 km/h (3 mile/h) or more, the system judges that a collision is inevitable and then applies automatic hard brake, blinking dual sensor brake support indicator light and displaying caution on the information display at the same time and thus avoids the collision or reduces the collision damage even if it occurs.
Lane departure warning function
Dual sensor brake support control module detects right and left lane lines on the road by image processing and, when departure of the vehicle from the lane is judged, the system warns the driver.
Lane departure prevention function
(lane departure prevention model)
Dual sensor brake support control module detects right and left lane lines on the road by image processing and, if the vehicle is likely to depart from the lane caused by delay of the steering operation or error etc., the electronic power steering (EPS) system assists the driver to return the vehicle into the lane controlling the steering.
Vehicle swaying warning function
Dual sensor brake support control module detects right and left lane lines on the road alternately by image processing when the vehicle is swaying or detects lane departure repeatedly for a short time, the system warns the driver.
High beam assist function
Dual sensor brake support control module detects headlight of the oncoming vehicle, tail light of the vehicle ahead or streetlight with the monocular camera and demands BCM of switching headlight between high beam and low beam.
Traffic sign recognition function (if equipped)
When dual sensor brake support control module recognizes specific traffic sign and the vehicle passes it, the control module displays traffic sign mark on the information display in the combination meter.

---

## AENLSB0AAA11002 - Description of Dual Sensor Brake Support System Components
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA11002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > General Description > Dual Sensor Brake Support
Outgoing references:
- AENLSB0AA811001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA811001.xml | Communication System Description:CAN (K14C Model)
- AENLSB0AAA11004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA11004.xml | Operation Table of Indicator Light / Information Display / Buzzer:Dual Sensor Brake Support

Content:
Description of Dual Sensor Brake Support System Components
Component
Description
Dual sensor brake support control module
Dual sensor brake support control module is mounted on windshield in front of inner rear view mirror.
Dual sensor brake support control module calculates distance and relative speed between the vehicle and the frontal obstacle using image processing with a monocular camera and laser beam reflected from the obstacle. Sensing traffic signs and lane-dividing lines on the road by image from the monocular camera, the vehicle location on the road is detected.
Dual sensor brake support control module communicates with other control module through CAN communication. For CAN communication, refer to
Communication System Description:CAN (K14C Model)
or
.
Dual sensor brake support OFF switch
Dual sensor brake support OFF switch is installed on the switch bezel of the instrument panel.
When the dual sensor brake support OFF switch is pressed, the dual sensor brake support control module suspends frontal collision warning function, brake assist function and automatic brake function.
The switch is of a momentary contact type and pushing the button for about 3 seconds switches the system to ON (dual sensor brake support OFF light: off) or OFF (dual sensor brake support OFF light: on).
The switch signal is outputted to BCM, and dual sensor brake support control module receives dual sensor brake support OFF switch signal from BCM through CAN communication.
When ignition is turned “ON” again, the system comes ON (dual sensor brake support OFF light: off).
Lane departure warning OFF switch
Lane departure warning OFF switch is installed on the switch bezel of the instrument panel.
When the lane departure warning OFF switch is pressed, the dual sensor brake support control module suspends lane departure warning function and vehicle swaying warning function.
The switch is of a momentary contact type and pushing the button for about 3 seconds switches the systems to ON (lane departure warning OFF light: off) or OFF (lane departure warning OFF light: on).
The switch signal is outputted to BCM, and dual sensor brake support control module receives lane departure warning OFF switch signal from BCM through CAN communication.
When ignition is turned “ON” again, the state of lane departure warning function and vehicle swaying warning function (ON or OFF) is maintained in the position of ignition turned OFF.
Lane departure prevention switch (lane departure prevention model)
Lane departure prevention switch is located at lower right of steering wheel.
The switch is of a momentary contact type and pushing up the button switches the system to ON or OFF.
The switch signal is outputted to dual sensor brake support control module, and P/S control module receives lane departure prevention switch signal from dual sensor brake support control module through CAN communication.
ESP ® OFF switch
ESP ® OFF switch is installed on the switch bezel of the instrument panel.
When ESP ® control is disabled by operating ESP ® OFF switch, dual sensor brake support control module receives ESP ® OFF signal and disables frontal collision warning function, brake assist function, automatic brake function, lane departure warning function, lane departure prevention function, vehicle swaying warning function and traffic sign recognition function.
Lighting and turn signal switch
Steering angle sensor is incorporated, and transmits steering angle signal to dual sensor brake support control module through CAN communication.
P/S control module
Receiving steering vibration request signal from dual sensor brake support control module through CAN communication, P/S control module vibrates steering wheel and warns the driver.
P/S control module transmits faulty status signal of lane departure warning function to dual sensor brake support control module through CAN communication.
For lane departure prevention model, receiving camera information signal from dual sensor brake support control module through CAN communication, P/S control module assists steering wheel torque.
Combination meter
Receiving information from dual sensor brake support control module through CAN communication, combination meter displays various dual sensor brake support information and sounds a buzzer for the system warning, collision warning, operating condition, etc. and warns the driver of this situation. Refer to
Operation Table of Indicator Light / Information Display / Buzzer:Dual Sensor Brake Support
for further details.
In setting mode on the meter, ON / OFF switching of traffic sign recognition function can be performed.
ECM
ECM transmits brake light switch signal, accelerator pedal position signal, etc. to dual sensor brake support control module through CAN communication.
Receiving information from dual sensor brake support control module through CAN communication, ECM performs engine torque reduction control.
BCM
BCM transmits dual sensor brake support OFF switch signal, lane departure warning OFF switch signal, etc. to dual sensor brake support control module through CAN communication.
Receiving signal from dual sensor brake support control module through CAN communication, this module switches headlight between high beam and low beam.
TCM (A/T model)
TCM transmits transmission shift position signal to dual sensor brake support control module through CAN communication.
ESP ® control module
ESP ® control module controls brake pressure and brake light receiving information from dual sensor brake support control module through CAN communication.
ESP ® control module transmits wheel speed signal, yaw rate signal, master cylinder pressure signal, etc. to dual sensor brake support control module through CAN communication.

---

## AENLSB0AAA11003 - Description of Dual Sensor Brake Support Function
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA11003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > General Description > Dual Sensor Brake Support
Outgoing references: none

Content:
Description of Dual Sensor Brake Support Function
Dual Sensor Brake Support
Frontal collision warning function
When your vehicle is running at about 15 to 140 km/h (9 to 87 mile/h) and a vehicle ahead is stopped, or your vehicle is running at about 15 to 60 km/h (9 to 37 mile/h) and a pedestrian ahead is stopped, or the relative speed between your vehicle and the vehicle or pedestrian ahead is about 15 km/h (9 mile/h) or more, dual sensor brake support control module detects the vehicle or pedestrian ahead (1) using the monocular camera and laser beam. If dual sensor brake support control module judges hazardous state of a collision due to the fact that your vehicle is approaching the vehicle or pedestrian ahead, the system urges the driver’s attention to apply brake by sounding the buzzer (2) and displaying headway alert indication (3) on the information display (4) in the combination meter. When elimination of the collision potential is judged, the warning is canceled. On the other hand, the warning continues while the automatic brake or brake assist is still in operation.
When the relative speed is low, the frontal collision warning function and automatic brake function could be activated at the same time
Brake assist function
When your vehicle is running at about 15 to 80 km/h (9 to 50 mile/h) and a vehicle ahead is stopped, or your vehicle is running at about 15 to 60 km/h (9 to 37 mile/h) and a pedestrian ahead is stopped, or the relative speed between your vehicle and the vehicle or pedestrian ahead is about 15 km/h (9 mile/h) or more, and dual sensor brake support control module detects the driver’s hard braking condition, dual sensor brake support control module detects the vehicle or pedestrian ahead (1) using the monocular camera and laser beam, and if pressing collision hazard is judged due to insufficient brake pedal depressing pressure, dual sensor brake support control module transmits brake assist control request to ESP ® control module.
ESP ® control module increases brake pressure by the pump motor and effects larger deceleration.
While the brake assist function is active, the frontal collision warning function emits alert.
[A]:
Hard braking
Automatic brake function
When your vehicle is running at about 5 to 100 km/h (3 to 62 mile/h) and a vehicle ahead is stopped, or your vehicle is running at about 5 to 60 km/h (3 to 37 mile/h) and a pedestrian ahead is stopped, or the relative speed between your vehicle and the vehicle or pedestrian ahead is about 5 km/h (3 mile/h) or more, dual sensor brake support control module detects the vehicle or pedestrian ahead (1) using the monocular camera and laser beam and judges that a collision is inevitable, dual sensor brake support control module transmits automatic brake control signal to ESP ® control module. ESP ® control module increases brake pressure by the pump motor and effects larger deceleration automatically.
While the automatic brake function is in operation, the frontal collision warning function emits alert and dual sensor brake support indicator light (2) blinks.
Buzzer sound, blinking of dual sensor brake support indicator light and indication of information display continue until your vehicle stops and the system releases brake.
When the relative speed is low, the frontal collision warning function and automatic brake function could be activated at the same time.
While the automatic brake is in operation, ESP ® control module turns the brake light ON.
[A]:
Brake pedal released
Dual sensor brake support operation principle
Each function works under the following conditions.
Frontal collision warning function
Brake assist function
Automatic brake function
Engine
Running
Vehicle speed
About 15 to 140 km/h (9 to 87 mile/h) (vehicle ahead is stopped)
About 15 to 60 km/h (9 to 37 mile/h) (pedestrian ahead is stopped)
The relative speed between your vehicle and the vehicle or pedestrian ahead is about 15 km/h (9 mile/h) or more
About 15 to 80 km/h (9 to 50 mile/h) (vehicle ahead is stopped)
About 15 to 60 km/h (9 to 37 mile/h) (pedestrian ahead is stopped)
The relative speed between your vehicle and the vehicle or pedestrian ahead is about 15 km/h (9 mile/h) or more
About 5 to 100 km/h (3 to 62 mile/h) (vehicle ahead is stopped)
About 5 to 60 km/h (3 to 37 mile/h) (pedestrian ahead is stopped)
The relative speed between your vehicle and the vehicle or pedestrian ahead is about 5 km/h (3 mile/h) or more
Accelerator pedal position
Depressing degree of the pedal is lower than specified value
Brake pedal
Released
Depressed strongly
Released
Clutch pedal (M/T model)
—
System condition
ON (*1)
Dual sensor brake support indicator light
OFF
Dual sensor brake support OFF light
OFF
ESP ® OFF light
OFF
ESP ®
—
Not operating
Not operating
Gear shift lever (M/T model)
Other than reverse position
Select lever (A/T model)
Other than “R” range
Steering angle
—
—
Lower than specified value
*1: Dual sensor brake support control is not disabled by operation of dual sensor brake support OFF switch or ESP ® OFF switch.
Lane Departure Warning Function
When your vehicle is running at about 60 km/h (37 mile/h) or more, dual sensor brake support control module detects right and left lane lines on the road by image processing and when departure of the vehicle from the lane is judged, the system warns the driver vibrating steering wheel (1), blinking lane departure warning indicator light (2) and departure side lane line indication on the information display (3), furthermore, indicating “WARNING LANE DEPARTURE” on the same information display.
For 7 seconds after ON / OFF operation of turn signal switch or hazard switch, dual sensor brake support control module suspends the function.
4.
Left side lane line
6.
Expected course
8.
Start of lane departure warning function
5.
Right side lane line
7.
Detection of right and left lane lines and prediction of course
Lane departure warning operation principle
Lane departure warning operation principle
Vehicle speed
More than 60 km/h (37 mile/h)
Lane departure warning indicator light
OFF
Lane departure warning OFF light
OFF
ESP ® OFF light
OFF
Lane-dividing line
Left line and/or right line detected
Turn signal light or hazard warning light
OFF
Lane width
Wider than specified range
Lane Departure Prevention Function (Lane Departure Prevention Model)
When your vehicle is running at 65 - 160 km/h (40 - 99 mile/h), dual sensor brake support control module detects right and left lane lines on the road by image processing and if the vehicle is likely to depart from the lane caused by delay of the steering operation or error etc., the electronic power steering (EPS) system assists the driver’s handling to return the vehicle into the lane controlling the steering (1).
When the lane departure prevention switch (2) is turned ON, lane departure prevention indicator (car pictograph) is shown in white (3) in the information display and when the lane departure prevention system is active (ready state to assist steering), the lane departure prevention indicator (car pictograph) changes the color to green (4) and keeps the same color during the steering assist operation.
While the system is active, if the driver is driving without holding the steering wheel for 5 seconds, “HOLD THE STEERING WHEEL” (5) with steering wheel pictograph is indicated in the information display showing the lane departure prevention indicator (car pictograph) in green continuously.
And if this condition continues for 5 seconds more, the system changes the color of hands (6) on steering wheel pictograph to red and sounds buzzer (7) intermittently for 2 seconds to warn the driver.
And if the condition that driving without holding the steering wheel continues furthermore, the lane departure prevention will be turned off (car pictograph and the warning of “HOLD THE STEERING WHEEL” with steering wheel pictograph will not be displayed). And then the system starts to warn the driver with continuous buzzer for 5seconds.
Lane departure prevention system is controlled by P/S control module. And, when the module detects an abnormal condition in the system, the module indicates lane departure prevention indicator (car pictograph) in umber (8) to warn the driver.
The lane departure prevention system assists steering but it is not a system to bring the vehicle back to the lane automatically. And, if the driver drives without holding the steering wheel, the system does not assist the steering.
While the system is in operation, do not release the steering wheel.
9.
Left side lane line
11.
Expected course
10.
Right side lane line
12.
Start of detection of vehicle abnormal movement that the running course is likely to depart from the lane.
Lane departure prevention operation principle
Lane departure warning operation principle
Vehicle speed
65 to 160 km/h (40 to 99 mile/h)
Lane departure prevention indicator i.e. car pictograph (green)
ON
Dual sensor brake support indicator light
OFF
Lane departure warning indicator light
OFF
P/S warning light
OFF
ESP ® OFF light
OFF
Lane-dividing line
Left line and right line detected
Turn signal light
OFF
Lane width
Wider than specified range
Vehicle Swaying Warning Function
When your vehicle is running at about 60 km/h (37 mile/h) or more and dual sensor brake support control module judges that the vehicle is swaying in right and left lane lines on the road or detects lane departure repeatedly for a short time, the system warns the driver sounding buzzer (1), blinking lane departure warning indicator light (2) and right and left lane line indication alternately on the information display (3), furthermore, indicating “VEHICLE SWAYING DETECTED” on the same information display.
If vehicle swaying warning was activated sensing right and left lane lines in the past, the system does not activate the same warning soon when the swaying is detected again. However, the warning is activated after a while.
Vehicle swaying is judged sensing lane lines on the road and it may not work on a road where the lane line(s) cannot be recognized.
4.
Sensing vehicle swaying
5.
Activation of vehicle swaying warning
Vehicle swaying warning operation principle
Vehicle swaying warning operation principle
Vehicle speed
More than 60 km/h (37 mile/h)
Lane departure warning indicator light
OFF
Lane departure warning OFF light
OFF
ESP ® OFF light
OFF
Lane-dividing line
Left line and right line detected
Turn signal light or hazard warning light
OFF
Lane width
Within the specified range
High Bean Assist Function
When your vehicle is running at about 40 km/h (25 mile/h) or more, dual sensor brake support control module detects headlight of the oncoming vehicle, tail light of the vehicle ahead or streetlight with the monocular camera and transmits signal to BCM for switching headlight between high beam and low beam.
The state of high beam assist control is shown on the combination meter. High beam assist indicator light (green) indicates normal operation of the high beam assist function.
Dual sensor brake support control module turns on high beam assist warning light (umber) to warn the driver that a malfunction is detected or the system is disabled temporarily.
Depending on the surrounding circumstances in front of the vehicle, automatic beam change from high to low may not function. In such a case, manually change the beam when necessary.
Beam change when passing with oncoming vehicle
When your vehicle is running at about 40 km/h (25 mile/h) or more, dual sensor brake support control module detects an oncoming vehicle within the detecting area (1) and the control module transmits change to low beam request to BCM. BCM changes the headlight to low beam (2) and turns off high beam indicator light (3) automatically.
Whenever the system is activated, high beam assist indicator light (4) lights up in combination meter.
When the oncoming vehicle moves outside the detecting area (1), BCM changes the headlight to high beam (2) again in a specified period of time “a” and turns on high beam indicator light (3).
4.
High beam assist indicator light
Beam change when overtaking vehicle ahead
When your vehicle is running at about 40 km/h (25 mile/h) or more, dual sensor brake support control module detects vehicle ahead within the detecting area (1) and the control module transmits change to low beam request to BCM. BCM changes the headlight to low beam (2) automatically and turns off high beam indicator light (3).
4.
High beam assist indicator light
When the vehicle ahead moves outside the detecting area (1), BCM changes the headlight to high beam (2) again in a specified period of time “a” and turns on high beam indicator light (3).
4.
High beam assist indicator light
High beam assist system operating conditions
High beam assist system operating conditions
Lighting switch position
“AUTO”
Dimmer / passing switch position
“HI”
Outside condition
Dark
High beam assist indicator light (green)
ON
High beam lighting conditions
High beam will light up when the following conditions are met while the high beam assist system is functioning.
High beam operating conditions
Vehicle speed
More than 40 km/h (25 mile/h)
Oncoming vehicle
Outside of the detecting area
Vehicle ahead
Outside of the detecting area
Streetlight
No light in front of the vehicle
Automatic change to low beam conditions
Headlight will be changed from high beam to low beam automatically when any of the following conditions is met while the high beam assist system is functioning.
Change to low beam condition
Vehicle speed
Lower than 35 km/h (22 mile/h)
Oncoming vehicle
Within the detecting area
Vehicle ahead
Within the detecting area
Streetlight
Many lights in front of the vehicle
Traffic Sign Recognition Function (If Equipped)
Traffic sign recognition function can be set to OFF in setting mode on combination meter.
Traffic sign recognition function may not work properly outside Europe.
When dual sensor brake support control module is replaced, traffic sign recognition function is setting ON. When necessary, traffic sign recognition function is setting OFF by operation of user customization function in combination meter.
The traffic signs on the information can be disabled under the following conditions.
Vehicle runs for specified distance after the traffic signs are indicated on the information display.
Blinking turn signal lights, vehicle turns to right or left.
When dual sensor brake support control module recognizes specific traffic sign (1) and the vehicle passes it, the control module displays traffic sign mark (2) on the information display in the combination meter.
Traffic sign recognition operation principle
Traffic sign recognition operation principle
Gear shift lever (M/T model)
Other than reverse position
Select lever (A/T model)
Other than “P”, “N” and “R” range
Parking brake lever
Released
Traffic sign
The vehicle recognizes traffic sign and passes it.

---

## AENLSB0AAA11004 - Operation Table of Indicator Light / Information Display / Buzzer
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA11004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > General Description > Dual Sensor Brake Support
Outgoing references: none

Content:
Operation Table of Indicator Light / Information Display / Buzzer
Operation Table of Indicator / Buzzer
Indicator light
Buzzer
Ignition “ON”
Lights up
(*1)
Lights up
(*1)
Lights up
(*1)
Lights up
(*1)
Lights up
(*1, *4)
—
Dual sensor brake support OFF
—
Lights up
—
—
—
Sounds
(*5)
Frontal collision warning function is in operation
—
—
—
—
—
Sounds
(*6)
Brake assist function is in operation
—
—
—
—
—
Sounds
(*7)
Automatic brake function is in operation
Blinks
—
—
—
—
Sounds
(*8)
Lane departure warning OFF
—
—
—
Lights up
—
Sounds
(*5)
Lane departure warning is in operation
—
—
Blinks
(*10)
—
—
—
Vehicle swaying warning is in operation
—
—
Blinks
—
—
Sounds
(*9)
High beam assist is in operation
—
—
—
—
Lights up
(*3)
—
Temporary stop (*2)
Lights up
—
Lights up
—
Lights up
(*4)
—
System malfunction
Lights up
—
Lights up
—
Lights up
(*4)
—
ESP ® OFF
—
Lights up
—
Lights up
—
Sounds
(*5)
*1: For about 4 seconds after ignition “ON”.
*2: When DTC C16C0 is detected.
*3: Lights up high beam assist indicator light (green).
*4: Lights up high beam assist warning light (umber).
*5: Buzzer sounds once (a single “pi” sound) at the moment dual sensor brake support OFF light lights up or goes off by operation of dual sensor brake support OFF switch, lane departure warning OFF switch or ESP ® OFF switch.
*6: Buzzer sounds intermittently (intermittent “pipipi” sound) at the moment the headway alert indication comes on.
*7: Headway alert indication lights up and buzzer sounds intermittently (intermittent “pipipi” sound) at the moment the brake assist function is activated.
*8: Headway alert indication lights up and buzzer sounds intermittently (intermittent “pipipi” sound) at the moment the automatic brake function is activated.
*9: Buzzer sounds intermittently (intermittent “pipipi” sound) for about 1 second.
*10: Vibrates steering wheel, without sounding buzzer.
Operation Table of Information Display
*1: Lane departure prevention model.
*2: When lane departure prevention system is active, the indicator (car pictograph) is shown in green.
When lane departure prevention system is in stand-by mode, the indicator (car pictograph) is shown in white.
*3: When lane departure prevention system is malfunctioning, the indicator (car pictograph) is shown in umber.
When P/S control module cannot command indication of lane departure prevention caused by EPS system failure, enlarged lane departure prevention indicator (car pictograph) only (with dotted lines on the both sides and without separated lane lines) is shown in umber together with “INSPECTION” message.
*4: Lane departure prevention indicator (car pictograph) is shown in green for 5 seconds. After that, the system warns the driver sounding buzzer and changing the indicator color to white until the driver operates the steering wheel.
*5: Blinks departure side lane line.
*6: Blinks right and left lane lines alternately.

---

## AENLSB0AAA12001 - Dual Sensor Brake Support System Input / Output Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA12001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Schematic and Routing Diagram > Dual Sensor Brake Support
Outgoing references: none

Content:
Dual Sensor Brake Support System Input / Output Diagram

---

## AENLSB0AAA12002 - Dual Sensor Brake Support System Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA12002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Schematic and Routing Diagram > Dual Sensor Brake Support
Outgoing references:
- AENLSB0AA812001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA812001.xml | CAN Communication System Circuit Diagram:CAN (K14C Model)

Content:
Dual Sensor Brake Support System Circuit Diagram
[A]:
Lane departure prevention model
2.
CAN driver
5.
Lane departure prevention switch
[B]:
Dual sensor brake support control module connector (View: [a])
3.
IG11 relay
6.
Contact coil
1.
Dual sensor brake support control module
4.
“IG1 SIG3” fuse
7.
Each control module
K14C model:
CAN Communication System Circuit Diagram:CAN (K14C Model)

---

## AENLSB0AAA13001 - Dual Sensor Brake Support System Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA13001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Component Location > Dual Sensor Brake Support
Outgoing references: none

Content:
Dual Sensor Brake Support System Component Location
The figure shows LHD. For RHD, parts with (*) are installed on the opposite side.
1.
Dual sensor brake support control module
8.
Information display
15.
Lane departure warning OFF switch
2.
ESP ® control module
9.
Dual sensor brake support indicator light
16.
Dual sensor brake support OFF switch
3.
ECM
10.
Dual sensor brake support OFF light
17.
BCM
4.
TCM (A/T model)
11.
Lane departure warning indicator light
18.
ESP ® OFF switch
5.
Lighting and turn signal switch
12.
Lane departure warning OFF light
19.
Brake light switch
6.
P/S control module
13.
High beam assist indicator light (green) / High beam assist warning light (umber)
7.
Combination meter
14.
Lane departure prevention switch (lane departure prevention model)

---

## AENLSB0AAA14001 - Dual Sensor Brake Support System Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support
Outgoing references:
- AENLSB0AAA14001013 -> unresolved | Step 1: Customer Complaint Analysis
- AENLSB0AAA14004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14004.xml | DTC Clearance:Dual Sensor Brake Support
- AENLSB0AAA14001015 -> unresolved | Steps 3 and 4: Visual Inspection
- AENLSB0AAA14001015 -> unresolved | Steps 3 and 4: Visual Inspection
- AENLSB0AAA14001018 -> unresolved | Step 8: Dual Sensor Brake Support System Symptom Diagnosis
- AENLSB0AAA14001023 -> unresolved | Step 11: Final Confirmation Test
- AENLSB0AAA14001013 -> unresolved | Step 1: Customer Complaint Analysis
- AENLSB0AAA14001014 -> unresolved | Step 2: DTC Check, Record and Clearance
- AENLSB0AAA14003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14003.xml | DTC Check:Dual Sensor Brake Support
- AENLSB0AAA14010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14010.xml | Dual Sensor Brake Support System Symptom Diagnosis:Dual Sensor Brake Support

Content:
Dual Sensor Brake Support System Check
Customer complaint analysis
Perform
Step 1: Customer Complaint Analysis
.
Was customer complaint analysis performed?
Go to Step 2.
Perform customer complaint analysis.
DTC check, record and clearance
Check for DTC (current and history).
Is there any DTC(s)?
Print DTC or write it down and clear it referring to
DTC Clearance:Dual Sensor Brake Support
. Then go to Step 3.
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
Rechecking and recording DTC
Recheck for current DTC.
Is there any DTC(s)?
Go to Step 9.
Go to Step 8.
Rechecking and recording DTC
Recheck for current DTC.
Is there any DTC(s)?
Go to Step 9.
Go to Step 10.
Dual sensor brake support system symptom diagnosis
Perform
Step 8: Dual Sensor Brake Support System Symptom Diagnosis
.
Is there any faulty condition?
Repair or replace defective part(s), and then go to Step 11.
Go to Step 10.
Troubleshooting for DTC
Perform troubleshooting for applicable DTC.
Are check and repair completed?
Go to Step 11.
Check and repair defective part(s), and then go to Step 11.
Intermittent problem check
Check for intermittent problems.
Is there any faulty condition?
Repair or replace defective part(s), and then go to Step 11.
Go to Step 11.
Final confirmation test
Perform
Step 11: Final Confirmation Test
.
Is there any problem symptom, DTC or abnormal condition?
Go to Step 6.
End.
Step 1: Customer Complaint Analysis
Record details of the problem (failure, complaint) and how it occurred as described by the customer.
For this purpose, such a questionnaire form shown below will facilitate collecting information for proper analysis and diagnosis.
The form is a standard sample. It should be modified according to characteristics of each market.
Customer questionnaire form (Example)
Step 2: DTC Check, Record and Clearance
First, check for DTC (current and history).
If DTCs are indicated, print the DTCs or write them down and then clear them.
DTC checklist (Example)
Steps 3 and 4: Visual Inspection
As a preliminary step, perform visual check of the items that support proper function of the dual sensor brake support system for their installation or connector connection.
Step 5: Trouble Symptom Confirmation
Based on information obtained in
Step 1: Customer Complaint Analysis
and
Step 2: DTC Check, Record and Clearance
, check trouble symptoms.
Steps 6 and 7: Rechecking and Recording DTC
Refer to
DTC Check:Dual Sensor Brake Support
for checking procedure.
Step 8: Dual Sensor Brake Support System Symptom Diagnosis
Perform
Dual Sensor Brake Support System Symptom Diagnosis:Dual Sensor Brake Support
based on symptom found in vehicle, checking the following items.
Customer complaint analysis
Trouble symptom confirmation
Step 9: Troubleshooting for DTC
Perform troubleshooting for applicable DTC and repair or replace faulty parts.
Step 10: Intermittent Problem Check
If there is no DTC in Step 2:
Check for intermittent problem.
If there is any DTC in Step 2:
Check parts related to detected DTC (e.g. wire harness, connector, etc.).
Step 11: Final Confirmation Test
Check that the problem symptom does not recur and the vehicle is free from any abnormal conditions. If what has been repaired is related to DTC, clear DTC once, perform DTC confirmation procedure and check that no DTC is indicated.

---

## AENLSB0AAA14002 - Dual Sensor Brake Support Control Module Self-Diagnosis Function
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support
Outgoing references: none

Content:
Dual Sensor Brake Support Control Module Self-Diagnosis Function
Description
Dual sensor brake support control module monitors conditions of the system components and circuits. When an abnormal condition in the system occurs, dual sensor brake support control module performs control as follows.
Self-Diagnosis Function
Dual sensor brake support control module has self-diagnosis function that stores DTC for abnormalities detected in dual sensor brake support system. Stored DTCs remain in memory of dual sensor brake support control module unless they are cleared.
Dual sensor brake support control module does not store history DTCs of C1681, C1690 and C16C0.
Warning Function
Dual sensor brake support control module turns on dual sensor brake support indicator light (1), lane departure warning indicator light (2) and high beam assist warning light (3) to warn the driver that a malfunction is detected or the system is disabled temporarily.
Right after setting ignition “ON”, dual sensor brake support control module turns on the dual sensor brake support indicator light, dual sensor brake support OFF light (4), lane departure warning indicator light, lane departure warning OFF light (5) and high beam assist warning light. If no abnormality is detected, those lights are turned off in about 4 seconds after setting ignition “ON”. If any faulty condition is found, each light is indicated as follows.
Dual sensor brake support indicator light: Stays on
Dual sensor brake support OFF light: Off
Lane departure warning light: Stays on
Lane departure warning OFF light: Off
High beam assist warning light: Stays on
Fail-Safe Control
When any abnormality is found, dual sensor brake support control module disables dual sensor brake support control.

---

## AENLSB0AAA14003 - DTC Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support
Outgoing references: none

Content:
DTC Check
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Read DTC according to instructions displayed on SUZUKI scan tool and print it or write it down. Refer to Operator's Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and dual sensor brake support control module is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
K14C model:
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
K14C model:
Check central gateway control module power supply circuit and ground circuit.
Check dual sensor brake support control module power circuit and ground circuit.
After completing the check, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0AAA14004 - DTC Clearance
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support
Outgoing references: none

Content:
DTC Clearance
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Clear DTC according to instructions displayed on SUZUKI scan tool and print it or write it down. Refer to Operator's Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and Dual Sensor Brake Support control module is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
K14C model:
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
K14C model:
Check central gateway control module power supply circuit and ground circuit.
Check dual sensor brake support control module power circuit and ground circuit.
After completing DTC clearance, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0AAA14005 - DTC Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14005.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support
Outgoing references: none

Content:
DTC Table
*1: This DTC can be detected as a current DTC but it is not stored as a history DTC.
*2: Dual sensor brake support indicator light, lane departure warning indicator light and high beam assist warning light turns ON at the same time.
DTC
DTC name
DTC detecting condition
Indicator light / warning light
C1680
Control Module Performance
Dual sensor brake support control module internal failure.
Lights up *2
C1681 *1
Control Module Mismatch
Verification error between combination meter and dual sensor brake support control module.
Lights up *2
C1685
Control Module Internal Temperature High
Internal temperature of dual sensor brake support control module is higher than specified value.
Lights up *2
C1686
Automatic Brake
Signal Mismatch
Automatic brake request signal from dual sensor brake support control module and ESP ® control module receive data disagree.
Lights up *2
C1687
Engine Torque Control Request Disabled
ECM does not receive torque request signal from dual sensor brake support control module.
Lights up *2
C1688
Automatic Brake Operation Time
Automatic brake operated 3 times in 1D/C.
Lights up *2
C1689
Control Module Internal Temperature Low
Internal temperature of dual sensor brake support control module is lower than specified value.
Lights up *2
C1690 *1
Sensor Not Aligned
“Dual Sensor Brake Support Control Module Aiming Adjustment” is not performed or not completed.
Lights up *2
C16A0
CAN Invalid Data From ECM
Dual sensor brake support control module detected abnormal condition in control data transmitted by ECM through CAN communication.
Lights up *2
C16A1
CAN Invalid Data From TCM
Dual sensor brake support control module detected abnormal condition in control data transmitted by TCM through CAN communication.
Lights up *2
C16A2
CAN Invalid Data From BCM
Dual sensor brake support control module detected abnormal condition in control data transmitted by BCM through CAN communication.
Lights up *2
C16A3
CAN Invalid Data From ABS / ESP ® Control Module
Dual sensor brake support control module detected abnormal condition in control data transmitted by ESP ® control module through CAN communication.
Lights up *2
C16A8
Communication Error From Dual Sensor Brake Support Control Module To ABS / ESP ® Control Module
ESP ® control module detected abnormal condition in control data transmitted by dual sensor brake support control module through CAN communication.
Lights up *2
C16A9
CAN Invalid Data From Power Steering Control Module
Dual sensor brake support control module detected abnormal condition in control data transmitted by P/S control module through CAN communication.
Lights up *2
C16C0 *1
Control Temporary Inhibition
This DTC is detected if any one of the following conditions is met.
Power supply voltage to dual sensor brake support control module is higher than specified value.
Power supply voltage to dual sensor brake support control module is lower than specified value.
Poor visibility of camera.
Poor visibility of laser radar.
Internal temperature of dual sensor brake support control module is higher than specified value.
Received abnormal condition in control data from lighting and turn signal switch through CAN communication temporarily.
Received abnormal condition in control data from ESP ® control module through CAN communication temporarily.
Lights up *2
C16C1
Camera Misaligned
Deviation of beam axis from camera is detected.
Lights up *2
C16C8
Dual Sensor Brake Support OFF Switch Circuit
Dual sensor brake support control module received ON signal of dual sensor brake support OFF switch from BCM for specified time continuously.
Lights up *2
C16C9
Lane Departure Warning OFF Switch Circuit
Dual sensor brake support control module received ON signal of lane departure warning OFF switch from BCM for specified time continuously.
Lights up *2
U0073
Control Module Communication Bus Off
Dual sensor brake support control module fails to transmit and receive data via CAN for specified time continuously.
Lights up *2
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
Lights up *2
U0101
Lost Communication With TCM
Receiving error of the data from TCM via CAN for specified time continuously.
Lights up *2
U0121
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
Lights up *2
U0126
Lost Communication With Steering Angle Sensor Module
Receiving error of the data from lighting and turn signal switch via CAN for specified time continuously.
Lights up *2
U0131
Lost Communication With Power Steering Control Module
Receiving error of the data from P/S control module via CAN for specified time continuously.
Lights up *2
U0140
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
Lights up *2
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
Lights up *2

---

## AENLSB0AAA14006 - Fail-Safe Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14006.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support
Outgoing references: none

Content:
Fail-Safe Table
DTC
Fail-safe operation
Fail-safe operation cancel condition
C1680
Dual sensor brake support control module disables the following control.
Dual sensor brake support control
Lane departure warning control
Lane departure prevention control
Vehicle swaying warning control
High beam assist control
Traffic sign recognition control
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1681
When the cause of the inconsistency is eliminated.
C1685
When dual sensor brake support control module judges the control module internal temperature to be normal.
C1686
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1687
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1688
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1689
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1690
When “Dual Sensor Brake Support Control Module Aiming Adjustment” is completed.
C16A0
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C16A1
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C16A2
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C16A3
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C16A8
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C16A9
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C16C0
Dual sensor brake support control module disables the following control.
Dual sensor brake support control
Lane departure warning control
Lane departure prevention control
Vehicle swaying warning control
High beam assist control
Traffic sign recognition control
Fail-safe operation is canceled when all of the following conditions are met.
Power supply voltage to dual sensor brake support control module returns to normal.
Camera recovers good visibility.
Laser radar recovers good visibility.
Internal temperature of dual sensor brake support control module returns to normal.
Lighting and turn signal switch judges steering angle signal to be normal.
ESP ® control module judges control data to be normal.
C16C1
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C16C8
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C16C9
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
U0073
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
U0100
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
U0101
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
U0121
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
U0126
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
U0131
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
U0140
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.
U0155
When dual sensor brake support control module judges the system to be normal after switching ignition from “OFF” to “ON”.

---

## AENLSB0AAA14007 - Scan Tool Data
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14007.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support
Outgoing references: none

Content:
Scan Tool Data
Dual Sensor Brake Support Control Module
If communication between SUZUKI scan tool and dual sensor brake support control module is not possible, perform the following checks:
Check communication condition between PC and VCI using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
K14C model:
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
K14C model:
Check central gateway control module power supply circuit and ground circuit.
Check dual sensor brake support control module power circuit and ground circuit.
Scan tool data
Normal condition / Reference value
Condition
Battery Voltage
13 to 15 V
Engine: Idle speed
Lidar Center Beam Distance
Distance between control module and frontal obstacle detected by laser beam irradiating forward is displayed.
Lidar Left Beam Distance
Distance between control module and frontal obstacle detected by laser beam irradiating diagonally to the left is displayed.
Lidar Right Beam Distance
Distance between control module and frontal obstacle detected by laser beam irradiating diagonally to the right is displayed.
Lidar Center Beam Reflection Intensity
1 or more
A detectable obstacle put in front of vehicle.
0
Other than above condition
Lidar Left Beam Reflection Intensity
1 or more
A detectable obstacle put diagonally to the left of vehicle.
0
Other than above condition
Lidar Right Beam Reflection Intensity
1 or more
A detectable obstacle put diagonally to the right of vehicle.
0
Other than above condition
Detecting Distance
Automatic brake controllable distance from front end of bumper to frontal obstacle under control of dual sensor brake support is displayed.
Roll Angle
Corrected value for roll angle in “Dual Sensor Brake Support Control Module Aiming Adjustment” is displayed.
Pitch Angle
Corrected value for pitch angle in “Dual Sensor Brake Support Control Module Aiming Adjustment” is displayed.
Yaw Angle
Corrected value for yaw angle in “Dual Sensor Brake Support Control Module Aiming Adjustment” is displayed.
High Beam Assist Inspection Mode
OFF
Other than condition below
ON
High beam assist inspection mode: Active (using active test of SUZUKI scan tool)
Aiming Mode Status
OFF
Other than condition below
ON
“Dual Sensor Brake Support Control Module Aiming Adjustment” mode: Active
Aiming Completion Status
Not complete
“Dual Sensor Brake Support Control Module Aiming Adjustment”: Not completed
Complete
“Dual Sensor Brake Support Control Module Aiming Adjustment”: Completed
Lane Departure Warning System
ON
Lane departure warning OFF switch: OFF
Lane departure warning system: Active
Vehicle swaying warning system: Active
OFF
Lane departure warning OFF switch: ON
Lane departure warning system: Inactive (except malfunction or temporary inhibition)
Vehicle swaying warning system: Inactive (except malfunction or temporary inhibition)
Dual Sensor Brake Support System
ON
Dual sensor brake support OFF switch: OFF
Dual sensor brake support system: Active
OFF
Dual sensor brake support OFF switch: ON
Dual sensor brake support system: Inactive (except malfunction or temporary inhibition)
High Beam Assist Recommendation
Hi Beam
Dual sensor brake support control module requests headlight beam change to high
Low Beam
Other than above condition
Running Compensation Status
OFF
Other than condition below
ON
“Automatic Adjustment by Driving”: Possible
“Aiming Adjustment”: Completed
(After ignition is ON, “ON” status is maintained for about 8 seconds.)
Running Compensation Complete Status
Not complete
Other than condition below
(After ignition is ON, “Not complete” status is maintained for 8 seconds.)
Complete
“Automatic Adjustment by Driving” Completed.
Camera Condition
OK
The camera has good visibility.
NG1
Poor visibility at upper screen in camera is detected.
NG2
Poor visibility at lower screen in camera is detected.
NG3
Poor visibility in full screen in camera is detected.
NG4
Temporary poor visibility in camera is detected.
Lidar Condition
OK
Other than condition below
NG
Irradiation of laser beam is shaded.
Temperature Condition
OK
Other than condition below
NG
Internal temperature of dual sensor brake support control module is higher than specified value.
Voltage Condition
OK
Other than condition below
NG
Power supply voltage to dual sensor brake support control module is out of specified range.
Distance Camera to Pattern
Inputted value in “Dual Sensor Brake Support Control Module Aiming Adjustment” is displayed.
Pattern Height
Inputted value in “Dual Sensor Brake Support Control Module Aiming Adjustment” is displayed.
Distance Camera to Front Axis
Inputted value in “Dual Sensor Brake Support Control Module Aiming Adjustment” is displayed.
Camera Offset
Inputted value in “Dual Sensor Brake Support Control Module Aiming Adjustment” is displayed.
Camera Height
Inputted value in “Dual Sensor Brake Support Control Module Aiming Adjustment” is displayed.
Distance between Pattern and Center
Inputted value in “Dual Sensor Brake Support Control Module Aiming Adjustment” is displayed.
Scan Tool Data Definitions
Battery Voltage (V)
This parameter indicates battery voltage detected by dual sensor brake support control module.
Lidar Center Beam Distance (mm)
This parameter indicates distance between control module and frontal obstacle detected by laser beam irradiating forward.
Lidar Left Beam Distance (mm)
This parameter indicates distance between control module and frontal obstacle detected by laser beam irradiating diagonally to the left.
Lidar Right Beam Distance (mm)
This parameter indicates distance between control module and frontal obstacle detected by laser beam irradiating diagonally to the right.
Lidar Center Beam Reflection Intensity
This parameter indicates intensity of reflected laser beam from frontal obstacle on laser beam irradiating forward.
Indication of 1 or higher value proves normal function of control module.
Lidar Left Beam Reflection Intensity
This parameter indicates reflection intensity of reflected laser beam from frontal obstacle on laser beam irradiating diagonally to the left.
Indication of 1 or higher value proves normal function of control module.
Lidar Right Beam Reflection Intensity
This parameter indicates reflection intensity of reflected laser beam from frontal obstacle on laser beam irradiating diagonally to the right.
Indication of 1 or higher value proves normal function of control module.
Detecting Distance (m)
This parameter indicates automatic brake control distance from front end of bumper to frontal obstacle under control of dual sensor brake support.
Roll Angle (°)
This parameter indicates corrected value for dual sensor brake support control module roll angle in “Dual Sensor Brake Support Control Module Aiming Adjustment”.
Pitch Angle (°)
This parameter indicates corrected value for dual sensor brake support control module pitch angle in “Dual Sensor Brake Support Control Module Aiming Adjustment”.
Yaw Angle (°)
This parameter indicates corrected value for dual sensor brake support control module yaw angle in “Dual Sensor Brake Support Control Module Aiming Adjustment”.
High Beam Assist Inspection Mode (OFF / ON)
This parameter indicates the state of high beam assist inspection mode.
Aiming Mode Status (OFF / ON)
This parameter indicates the state of “Dual Sensor Brake Support Control Module Aiming Adjustment”.
Aiming Completion Status (Not complete / Complete)
This parameter indicates completion state of “Dual Sensor Brake Support Control Module Aiming Adjustment”.
Lane Departure Warning System (ON / OFF)
This parameter indicates OFF state of lane departure warning system and vehicle swaying warning system.
Dual Sensor Brake Support System (ON / OFF)
This parameter indicates OFF state of frontal collision warning system, brake assist system and automatic brake system.
High Beam Assist Recommendation (Hi Beam / Low Beam)
This parameter indicates request of headlight beam change by dual sensor brake support when high beam assist system is activated.
Running Compensation Status (OFF / ON)
This parameter indicates possible state of automatic adjustment by driving.
After ignition “ON”, “ON” is indicated and changes to “OFF” if “Aiming Adjustment” under “Dual Sensor Brake Support Control Module Aiming Adjustment” is not completed. If the aiming adjustment is completed, “ON” remains to urge aiming adjustment by driving.
Running Compensation Complete Status (Not complete / Complete)
This parameter indicates completion state of automatic adjustment by driving.
After ignition “ON”, “Not complete” is indicated and changes to “Complete” if “Automatic Adjustment by Driving” under “Dual Sensor Brake Support Control Module Aiming Adjustment” is completed. If not completed, “Not complete” indication remains.
Camera Condition (OK / NG1 / NG2 / NG3 / NG4)
This parameter indicates the state of poor screen visibility in camera detected by dual sensor brake support control module.
Lidar Condition (OK / NG)
This parameter indicates the state of shaded irradiation of laser beam judged by dual sensor brake support control module.
Temperature Condition (OK / NG)
This parameter indicates higher state of internal temperature exceeding the specified value in dual sensor brake support control module.
Voltage Condition (OK / NG)
This parameter indicates the state that power supply voltage to dual sensor brake support control module is out of the specified range.
Distance Camera to Pattern (mm)
This parameter indicates inputted distance from dual sensor brake support control module to the aiming target in “Dual Sensor Brake Support Control Module Aiming Adjustment”.
Pattern Height (mm)
This parameter indicates inputted height of aiming target center in “Dual Sensor Brake Support Control Module Aiming Adjustment”.
Distance Camera to Front Axis (mm)
This parameter indicates inputted distance from dual sensor brake support control module to center of front drive shaft in “Dual Sensor Brake Support Control Module Aiming Adjustment”.
Camera Offset (mm)
This parameter indicates inputted offset value of dual sensor brake support control module in “Dual Sensor Brake Support Control Module Aiming Adjustment”.
Camera Height (mm)
This parameter indicates inputted height of dual sensor brake support control module in “Dual Sensor Brake Support Control Module Aiming Adjustment”.
Distance between Pattern and Center (mm)
This parameter indicates inputted distance from vehicle center line to center of aiming target in “Dual Sensor Brake Support Control Module Aiming Adjustment”.

---

## AENLSB0AAA14008 - Scan Tool Active Test Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14008.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support
Outgoing references: none

Content:
Scan Tool Active Test Table
SUZUKI scan tool has output test function which can force operation of high beam assist system controlled by dual sensor brake support control module. When a malfunction is found in the system controlled by dual sensor brake support control module, execute output test to judge whether the malfunction is at the input or output side of dual sensor brake support control module. For more details of SUZUKI scan tool, refer to its Operator's Manual.
High Beam Assist

---

## AENLSB0AAA14009 - Visual Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14009.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support
Outgoing references:
- AENLSB0A1A14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14001.xml | Battery Inspection:K14C
- AENLSB0A0006002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0006002.xml | Intermittent Connection and Poor Contact Inspection
- AENLSB0AAA11004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA11004.xml | Operation Table of Indicator Light / Information Display / Buzzer:Dual Sensor Brake Support
- AENLSB0A2406002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A2406002.xml | Tire Inspection
- AENLSB0A2106001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A2106001.xml | Suspension System Check

Content:
Visual Inspection
Visually check the following parts and systems.
Inspection item
Referring section
Battery – Fluid level, corrosion of terminal
K14C model:
Battery Inspection:K14C
Connectors of electric wire harness – Disconnection, friction
Intermittent Connection and Poor Contact Inspection
Fuses – Blown
—
Dual sensor brake support indicator light – Operation
Operation Table of Indicator Light / Information Display / Buzzer:Dual Sensor Brake Support
Dual sensor brake support OFF light – Operation
Lane departure warning indicator light – Operation
Lane departure warning OFF light – Operation
Windshield – Soil, damage, adhesion of sticker or film, coloring or painting
—
Windshield wiper – Deterioration, damage
—
Tire – wear
Tire Inspection
Dual sensor brake support control module – Soil, damage, deformation
—
Headlight – Soil, damage, deformation, misalignment
—
Vehicle posture
Suspension System Check
Load on roof – Protrusion
—

---

## AENLSB0AAA14010 - Dual Sensor Brake Support System Symptom Diagnosis
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14010.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support
Outgoing references:
- AENLSB0AA204029 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204029.xml | Inspection of BCM and Its Circuits
- AENLSB0AAA16005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA16005.xml | Dual Sensor Brake Support OFF Switch and Lane Departure Warning OFF Switch Inspection:Dual Sensor Brake Support
- AENLSB0AA204029 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204029.xml | Inspection of BCM and Its Circuits
- AENLSB0AAA14007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14007.xml | Scan Tool Data:Dual Sensor Brake Support
- AENLSB0AA204007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204007.xml | Scan Tool Data
- AENLSB0AAA16005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA16005.xml | Dual Sensor Brake Support OFF Switch and Lane Departure Warning OFF Switch Inspection:Dual Sensor Brake Support
- AENLSB0AA204029 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204029.xml | Inspection of BCM and Its Circuits
- AENLSB0AAA14007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14007.xml | Scan Tool Data:Dual Sensor Brake Support
- AENLSB0AA204007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204007.xml | Scan Tool Data
- AENLSB0AAA16008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA16008.xml | Lane Departure Prevention Switch Inspection (Lane Departure Prevention Model):Dual Sensor Brake Support

Content:
Dual Sensor Brake Support System Symptom Diagnosis
Dual sensor brake support system is controlled by dual sensor brake support control module communicating with the following control modules through CAN communication. Before performing symptom diagnosis, check that no DTC is indicated in these control modules.
ESP ® control module
BCM
ECM
TCM (A/T model)
P/S control module
Lighting and turn signal switch
Combination meter
Dual sensor brake support does not work normally
Dual sensor brake support function are not in execution state
—
Dual sensor brake support control module does not recognize frontal obstacle due to poor visibility
—
Obstacle that is difficult to recognize by dual sensor brake support control module
—
Improper vehicle conditions
Unload the vehicle, remove modification parts for vehicle’s height, wiper blade(s), windshield, etc. and replace with genuine parts.
Running condition is difficult to recognize by dual sensor brake support control module
—
Dual sensor brake support works unexpectedly
Improper vehicle conditions
Unload the vehicle, remove modification parts for vehicle’s height, wiper blade(s), windshield, etc. and replace with genuine parts.
Conditions that dual sensor brake support control module could fail to recognize obstacle
—
Lane departure warning function does not work normally
Lane departure warning function is not in execution state
—
Improper vehicle conditions
Unload the vehicle, remove modification parts for vehicle’s height, wiper blade(s), windshield, etc. and replace with genuine parts.
Road configuration is difficult to recognize by dual sensor brake support control module
—
During operation or immediately after operation of turn signal or hazard warning light
—
Lane departure warning function works unexpectedly
Road configuration that dual sensor brake support control module could fail to recognize correctly
—
Vehicle swaying warning function does not work normally
Vehicle swaying warning function is not in execution state
—
Improper vehicle conditions
Unload the vehicle, remove modification parts for vehicle’s height, wiper blade(s), windshield, etc. and replace with genuine parts.
Road configuration is difficult to recognize by dual sensor brake support control module
—
Immediately after lane change
—
Vehicle swaying warning function work unexpectedly
Road configuration that dual sensor brake support control module could fail to recognize correctly
—
High beam assist function does not work normally
High beam assist function is not in execution state
—
Improper vehicle conditions
Unload the vehicle, remove modification parts for vehicle’s height, wiper blade(s), windshield, etc. and replace with genuine parts.
Dual sensor brake support control module does not detect light source in front of the vehicle due to poor visibility
—
Faulty BCM
Refer to
Inspection of BCM and Its Circuits
.
Running condition is difficult to recognize by dual sensor brake support control module
—
High beam assist function works unexpectedly
Improper vehicle conditions
Unload the vehicle, remove modification parts for vehicle’s height, wiper blade(s), windshield, etc. and replace with genuine parts.
Dual sensor brake support control module could fail to recognize light source in front of the vehicle
—
Lane departure prevention function does not work normally (lane departure prevention model)
Lane departure prevention function is not in execution state
—
Improper vehicle conditions
Unload the vehicle, remove modification parts for vehicle’s height, wiper blade(s), windshield, steering wheel, power steering system related parts, etc. and replace with genuine parts.
Road configuration is difficult to recognize by dual sensor brake support control module
—
During operation or immediately after operation of turn signal light
—
Lane departure prevention function works unexpectedly (lane departure prevention model)
Road configuration that dual sensor brake support control module could fail to recognize correctly
—
Dual sensor brake support cannot be switched ON or OFF
Faulty dual sensor brake support OFF switch circuit
Check dual sensor brake support OFF switch circuit.
Dual Sensor Brake Support OFF Switch and Lane Departure Warning OFF Switch Inspection:Dual Sensor Brake Support
Inspection of BCM and Its Circuits
Check dual sensor brake support OFF switch signal.
Scan Tool Data:Dual Sensor Brake Support
Scan Tool Data
Lane departure warning and vehicle swaying warning cannot be switched ON or OFF
Faulty lane departure warning OFF switch circuit
Check lane departure warning OFF switch circuit.
Dual Sensor Brake Support OFF Switch and Lane Departure Warning OFF Switch Inspection:Dual Sensor Brake Support
Inspection of BCM and Its Circuits
Check lane departure warning OFF switch signal.
Scan Tool Data:Dual Sensor Brake Support
Scan Tool Data
Lane departure prevention function cannot be switched ON or OFF (lane departure prevention model)
Faulty lane departure prevention switch circuit
Refer to
Lane Departure Prevention Switch Inspection (Lane Departure Prevention Model):Dual Sensor Brake Support
.
Traffic sign recognition function does not work normally (if equipped)
Traffic sign recognition function is not in execution state
—
Improper vehicle conditions
Unload the vehicle, remove modification parts for vehicle’s height, wiper blade(s), windshield, etc. and replace with genuine parts.
Conditions that dual sensor brake support control module is difficult to recognize traffic sign
—
Traffic sign recognition function works unexpectedly (if equipped)
Conditions that dual sensor brake support control module could fail to recognize traffic sign
—

---

## AENLSB0AAA14011 - DTC C1680 / C1685 / C1686 / C1688 / C1689
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14011.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support || dtc: 10 - Control Systems > Driving Assist System > Dual Sensor Brake Support > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14001.xml | Dual Sensor Brake Support System Check:Dual Sensor Brake Support
- AENLSB0AAA14011002 -> unresolved | DTC Confirmation Procedure

Content:
DTC C1680 / C1685 / C1686 / C1688 / C1689
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1680: Control Module Performance
Dual sensor brake support control module internal failure.
Dual sensor brake support control module
C1685: Control Module Internal Temperature High
Internal temperature of dual sensor brake support control module is higher than specified value.
C1686: Automatic Brake Signal Mismatch
Automatic brake request signal from dual sensor brake support control module and ESP ® control module receive data disagree.
C1688: Automatic Brake Operation Time
Automatic brake is operated 3 times in 1D/C.
C1689: Control Module Internal Temperature Low
Internal temperature of dual sensor brake support control module is lower than specified value.
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “Dual Sensor Brake Support System Check” performed?
Go to Step 2.
Go to
Dual Sensor Brake Support System Check:Dual Sensor Brake Support
.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC C1680, C1685, C1686, C1688 or C1689 still detected?
Replace dual sensor brake support control module and recheck DTC.
Check for intermittent trouble.

---

## AENLSB0AAA14012 - DTC C1681
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14012.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support || dtc: 10 - Control Systems > Driving Assist System > Dual Sensor Brake Support > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC C1681
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1681: Control Module Mismatch
Verification error between combination meter and dual sensor brake support control module.
Dual sensor brake support control module
Combination meter
System Description
If there is a verification error between vehicle specification information registered in dual sensor brake support control module and combination meter, dual sensor brake support control module recognizes it as a fault. This DTC is detected only when dual sensor brake support control module or combination meter is replaced with another one that has different vehicle specification information.
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
DTC C1681 can be detected as a current DTC but it is not stored as a history DTC.
Check that vehicle specification information registered in combination meter matches the actual vehicle specification.
If the correct combination meter is installed, different vehicle specification information may be registered in dual sensor brake support control module.

---

## AENLSB0AAA14013 - DTC C1687 / C16A0
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14013.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support || dtc: 10 - Control Systems > Driving Assist System > Dual Sensor Brake Support > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14001.xml | Dual Sensor Brake Support System Check:Dual Sensor Brake Support

Content:
DTC C1687 / C16A0
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1687: Engine Torque Control Request Disabled
ECM does not receive torque request signal from dual sensor brake support control module.
ECM
C16A0: CAN Invalid Data From ECM
Dual sensor brake support control module detected abnormal condition in control data transmitted by ECM through CAN communication.
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “Dual Sensor Brake Support System Check” performed?
Go to Step 2.
Go to
Dual Sensor Brake Support System Check:Dual Sensor Brake Support
.
DTC check
Check DTC in ECM.
K14C model:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace ECM and recheck DTC.
K14C model:

---

## AENLSB0AAA14014 - DTC C1690 / C16C1
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14014.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support || dtc: 10 - Control Systems > Driving Assist System > Dual Sensor Brake Support > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14001.xml | Dual Sensor Brake Support System Check:Dual Sensor Brake Support
- AENLSB0AAA16002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA16002.xml | Dual Sensor Brake Support Control Module Aiming Adjustment:Dual Sensor Brake Support
- AENLSB0AAA14014002 -> unresolved | DTC Confirmation Procedure

Content:
DTC C1690 / C16C1
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1690: Sensor Not Aligned
“Dual Sensor Brake Support Control Module Aiming Adjustment” is not performed or not completed.
Dual sensor brake support control module
C16C1: Camera Misaligned
Deviation of beam axis from camera is detected.
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
DTC C1690 can be detected as a current DTC but it is not stored as a history DTC.
Was “Dual Sensor Brake Support System Check” performed?
Go to Step 2.
Go to
Dual Sensor Brake Support System Check:Dual Sensor Brake Support
.
DTC check
Perform
Dual Sensor Brake Support Control Module Aiming Adjustment:Dual Sensor Brake Support
.
Set ignition “OFF”.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC C1690 or C16C1 still detected?
Replace dual sensor brake support control module and recheck DTC.
End.

---

## AENLSB0AAA14015 - DTC C16A1
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14015.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support || dtc: 10 - Control Systems > Driving Assist System > Dual Sensor Brake Support > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14001.xml | Dual Sensor Brake Support System Check:Dual Sensor Brake Support

Content:
DTC C16A1
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C16A1: CAN Invalid Data From TCM
Dual sensor brake support control module detected abnormal condition in control data transmitted by TCM through CAN communication.
TCM
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “Dual Sensor Brake Support System Check” performed?
Go to Step 2.
Go to
Dual Sensor Brake Support System Check:Dual Sensor Brake Support
.
DTC check
Check DTC in TCM.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace TCM and recheck DTC.

---

## AENLSB0AAA14016 - DTC C16A2
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14016.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support || dtc: 10 - Control Systems > Driving Assist System > Dual Sensor Brake Support > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14001.xml | Dual Sensor Brake Support System Check:Dual Sensor Brake Support

Content:
DTC C16A2
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C16A2: CAN Invalid Data From BCM
Dual sensor brake support control module detected abnormal condition in control data transmitted by BCM through CAN communication.
BCM
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “Dual Sensor Brake Support System Check” performed?
Go to Step 2.
Go to
Dual Sensor Brake Support System Check:Dual Sensor Brake Support
.
DTC check
Check DTC in BCM.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace BCM and recheck DTC.

---

## AENLSB0AAA14017 - DTC C16A3
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14017.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support || dtc: 10 - Control Systems > Driving Assist System > Dual Sensor Brake Support > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14001.xml | Dual Sensor Brake Support System Check:Dual Sensor Brake Support

Content:
DTC C16A3
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C16A3: CAN Invalid Data From ABS / ESP ® Control Module
Dual sensor brake support control module detected abnormal condition in control data transmitted by ESP ® control module through CAN communication.
ESP ® control module
Dual sensor brake support control module
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “Dual Sensor Brake Support System Check” performed?
Go to Step 2.
Go to
Dual Sensor Brake Support System Check:Dual Sensor Brake Support
.
DTC check
Check DTC in ESP ® control module.
Is DTC C10A9 or other DTC(s) detected?
DTC C10A9 is detected: Replace dual sensor brake support control module and recheck DTC.
Other than DTC C10A9 is detected: Go to troubleshooting for applicable DTC.
Replace ESP ® control module and recheck DTC.

---

## AENLSB0AAA14018 - DTC C16A8
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14018.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support || dtc: 10 - Control Systems > Driving Assist System > Dual Sensor Brake Support > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14001.xml | Dual Sensor Brake Support System Check:Dual Sensor Brake Support

Content:
DTC C16A8
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C16A8: Communication Error From Dual Sensor Brake Support Control Module To ABS / ESP ® Control Module
ESP ® control module detected abnormal condition in control data transmitted by dual sensor brake support control module through CAN communication.
ESP ® control module
Dual sensor brake support control module
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “Dual Sensor Brake Support System Check” performed?
Go to Step 2.
Go to
Dual Sensor Brake Support System Check:Dual Sensor Brake Support
.
DTC check
Check DTC in ESP ® control module.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace dual sensor brake support control module and recheck DTC.

---

## AENLSB0AAA14019 - DTC C16C0
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA14019.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Dual Sensor Brake Support || dtc: 10 - Control Systems > Driving Assist System > Dual Sensor Brake Support > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA812001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA812001.xml | CAN Communication System Circuit Diagram:CAN (K14C Model)
- AENLSB0AAA14019018 -> unresolved | Diagnosis flow: [d]

Content:
DTC C16C0
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C16C0: Control Temporary Inhibition
This DTC is detected if any one of the following conditions is met.
Power supply voltage to dual sensor brake support control module is higher than specified value.
Power supply voltage to dual sensor brake support control module is lower than specified value.
Poor visibility of camera.
Poor visibility of laser radar.
Internal temperature of dual sensor brake support control module is higher than specified value.
Received abnormal condition in control data from lighting and turn signal switch through CAN communication temporarily.
Received abnormal condition in control data from ESP ® control module through CAN communication temporarily.
Dual sensor brake support control module power supply / ground circuit
Charging system
Lighting and turn signal switch
Windshield
ESP ® control module
Dual sensor brake support control module
Circuit Diagram
[A]:
Dual sensor brake support control module connector (View: [a])
1.
Dual sensor brake support control module
4.
“IG1 SIG3” fuse
A1:
Dual sensor brake support control module power supply circuit
2.
CAN driver
5.
Each control module
K14C model:
CAN Communication System Circuit Diagram:CAN (K14C Model)
B1:
Dual sensor brake support control module ground circuit
3.
IG11 relay
System Description
When dual sensor brake support control module judges that the system impairs the original performance, dual sensor brake support control module suspends each control, and outputs DTC C16C0. However, when the cause of the suspension is eliminated, dual sensor brake support control module turns OFF dual sensor brake support indicator light, clears the DTC and resumes the system function automatically.
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
DTC C16C0 can be detected as a current DTC but it is not stored as a history DTC.
The factor of the malfunction can be checked in “Data List” of SUZUKI scan tool. (except parameters related to steering angle sensor and ESP ® system)
Check each parameter in the table below using SUZUKI scan tool.
Diagnose the defective parameter according to diagnosis flow. If diagnosis flow does not correspond to the parameter, perform
Diagnosis flow: [d]
.
Parameter
Value
Diagnosis flow
Lidar Condition
NG
[a]
Temperature Condition
NG
[b]
Voltage Condition
NG
[c]
Parameters are normal value
OK
[d]
Diagnosis flow: [a]
Even if front of dual sensor brake support is not soiled, dual sensor brake support control module may detect poor visibility on camera and laser radar and output DTC C16C0 because diffused reflection is caused due to road conditions such as inside of tunnel, a road with concrete walls on both sides or weather conditions such as heavy rain or snow.
If the vehicle is driven for about 2 minutes after the above conditions have improved, dual sensor brake support control module clears the DTC and resumes the system function automatically.
Visual inspection for soil on windshield surface
Check windshield surface for soil or damage.
Is check result OK?
Go to Step 2.
Clean or replace windshield and recheck DTC.
Visual inspection for soil on camera and laser radar surface
Check camera and laser radar surface for soil or damage.
Is check result OK?
Check that parameter “Lidar Condition” on SUZUKI scan tool is “OK” after switching ignition from “OFF” to “ON” and recheck DTC.
Replace dual sensor brake support control module and recheck DTC.
Diagnosis flow: [b]
DTC check
Set ignition “OFF” and leave the vehicle for a while avoiding direct sunshine.
Set ignition “ON”.
Recheck DTC.
Is current DTC C16C0 detected?
Replace dual sensor brake support control module and recheck DTC.
Check that parameter “Temperature Condition” on SUZUKI scan tool is “OK”.
Diagnosis flow: [c]
Battery and charging system check
Check battery and charging system.
K14C model
Battery:
Charging system:
Battery:
Charging system:
Is check result OK?
Go to Step 2.
Repair or replace defective part and check that parameter “Voltage Condition” on SUZUKI scan tool is “OK”.
Dual sensor brake support control module power supply circuit check
Check that ignition is “OFF”.
Disconnect “K04” connector.
Check for proper terminal connection to “K04” connector.
If connections are OK, set ignition “ON”.
Check that voltage between “A1” circuit and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective part and check that parameter “Voltage Condition” on SUZUKI scan tool is “OK”.
Dual sensor brake support control module ground circuit check
Set ignition “OFF”.
Check that resistance between “B1” circuit and ground is less than 1 Ω.
Is check result OK?
Replace dual sensor brake support control module and recheck DTC.
Repair or replace defective wire harness and check that parameter “Voltage Condition” on SUZUKI scan tool is “OK”.
Diagnosis flow: [d]
Even if front of dual sensor brake support is not soiled, dual sensor brake support control module may detect poor visibility on camera and laser radar and output DTC C16C0 because diffused reflection is caused due to road conditions such as inside of tunnel, a road with concrete walls on both sides or weather conditions such as heavy rain or snow.
If the vehicle is driven for about 2 minutes after the above conditions have improved, dual sensor brake support control module clears the DTC and resumes the system function automatically.
Visual inspection for soil on windshield surface
Check windshield surface for soil or damage.
Is check result OK?
Go to Step 2.
Clean or replace windshield and recheck DTC.
Visual inspection for soil on camera and laser radar surface
Check camera and laser radar surface for soil or damage.
Is check result OK?
Go to Step 3.
Replace dual sensor brake support control module and recheck DTC.
DTC check
Check ESP ® control module for DTC.
Is DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 4.
Steering angle sensor check
Check steering angle sensor.
Is check result OK?
Replace dual sensor brake support control module and recheck DTC.
Replace lighting and turn signal switch.

---
