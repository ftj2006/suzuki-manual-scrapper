# Content Chunk 0014

Plain-text content extracted from source files with relationship metadata.

## AENLSB0A4601004 - OBD System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4601004.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > General Description
Outgoing references: none

Content:
OBD System Description
ESP ® control module is built in ESP ® hydraulic unit / control module assembly and has the following functions.
Self-Diagnosis Function
ESP ® hydraulic unit / control module assembly monitors each input and output signal. When ESP ® hydraulic unit / control module assembly detects any malfunction, ABS warning light (2), EBD warning light (brake warning light) (1), ESP ® warning light (3), and/or ESP ® OFF light (4) are turned ON to inform the driver of the abnormality.
When ignition is set “ON”, ABS warning light, EBD warning light (brake warning light), ESP ® warning light and ESP ® OFF light turn ON for 2 seconds to check its circuit.
When no abnormality is detected (the system is in good condition), these lights turn OFF after 2 seconds. However, when parking brake is applied, EBD warning light (brake warning light) remains ON.
When an abnormality in the system is detected, ABS warning light, EBD warning light (brake warning light), ESP ® warning light and/or ESP ® OFF light are turned ON and DTC is stored in ESP ® hydraulic unit / control module assembly.
Fail-Safe Mode
If ESP ® hydraulic unit / control module assembly stores a DTC, ESP ® hydraulic unit / control module assembly stops ABS, EBD, traction control function, stability control function, etc. corresponding to the faulty area. It is possible to check the stopped function(s) by the warning / indicator lights in combination meter.

---

## AENLSB0A4601005 - Warning / Indicator Light Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4601005.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > General Description
Outgoing references: none

Content:
Warning / Indicator Light Description
There are three warning and one indicator lights controlled by ESP ® hydraulic unit / control module assembly in combination meter. They give warning and indication to driver by changing their modes: light ON / blinking / light OFF.
1.
EBD warning light (brake warning light)
3.
ESP ® warning light
2.
ABS warning light
4.
ESP ® OFF light
Condition and Operation of Warning Light and Indicator Light
Warning light / Indicator light
Condition and operation
ABS warning light
If ABS control is deactivated by ESP ® system failure, the light turns “ON”.
EBD warning light (brake warning light)
If EBD control is deactivated by ESP ® system failure, the light turns “ON” with ABS warning light.
If brake fluid level in reservoir is lower than minimum level, the light turns “ON”.
If parking brake lever is pulled up, the light turns “ON”.
ESP ® warning light
If traction control and stability control are deactivated by ESP ® system failure, the light turns “ON”.
If traction control and/or stability control is activated, the light blinks.
ESP ® OFF light
ESP ® OFF light turns “ON” to indicate that ESP ® hydraulic unit / control module assembly stops traction control and stability control functions.

---

## AENLSB0A4601006 - Description of Sensor Calibrating Condition
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4601006.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > General Description
Outgoing references:
- AENLSB0A4606002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606002.xml | Sensor Calibration

Content:
Description of Sensor Calibrating Condition
When the following conditions are met, sensor calibration should be performed since the original calibration data are deleted.
Sensor to be calibrated
Condition requiring calibration
Steering angle sensor
Lighting and turn signal switch is replaced.
ESP ® hydraulic unit / control module assembly is replaced.
Brake master cylinder pressure sensor
ESP ® hydraulic unit / control module assembly is replaced.
Yaw rate / G sensor assembly
ESP ® hydraulic unit / control module assembly is replaced or removed.
Perform sensor calibration according to
Sensor Calibration
.

---

## AENLSB0A4601007 - DLC Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4601007.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > General Description > Models > K14C
Outgoing references: none

Content:
DLC Description
Refer to “DLC Description”.
K14C model:

---

## AENLSB0A4601008 - CAN Communication System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4601008.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > General Description > Models > K14C
Outgoing references: none

Content:
CAN Communication System Description
Refer to “Communication System Description”.
K14C model:

---

## AENLSB0A4602001 - ESP&#174; System Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4602001.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Schematic and Routing Diagram
Outgoing references: none

Content:
ESP® System Diagram
1.
ESP ® hydraulic unit / control module assembly
7.
Brake light switch
13.
Back up light switch (M/T model)
2.
ESP ® control module
8.
Brake master cylinder pressure sensor
14.
Electronic signal
3.
Hydraulic unit
9.
Yaw rate / G sensor
15.
CAN signal
4.
ECM
10.
Wheel speed sensor
16.
Hydraulic circuit
5.
Other control modules (if equipped) and steering angle sensor
11.
ESP ® OFF switch
6.
Combination meter
12.
Brake booster pressure sensor (if equipped)

---

## AENLSB0A4602002 - ESP&#174; Input / Output Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4602002.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Schematic and Routing Diagram
Outgoing references: none

Content:
ESP® Input / Output Diagram

---

## AENLSB0A4602003 - ESP&#174; Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4602003.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Schematic and Routing Diagram
Outgoing references: none

Content:
ESP® Circuit Diagram
[A]:
ESP ® hydraulic unit / control module assembly connector (View: [a])
16.
Parking brake switch
34.
Internal memory
[B]:
M/T model
17.
BCM
35.
Pump motor relay
[C]:
DSBS model
18.
ECM
36.
Pump motor
1.
Battery
19.
P/S control module
37.
Wheel speed sensor driver
2.
Relay box
20.
Left-front wheel speed sensor
38.
To other control modules by CAN
3.
J/B
21.
Right-front wheel speed sensor
39.
To BCM
4.
IG11 relay
22.
Left-rear wheel speed sensor
40.
To ECM
5.
CAN driver
23.
Right-rear wheel speed sensor
41.
“ABS MOT” fuse
6.
Combination meter
24.
ESP ® OFF switch
42.
“ABS SOL” fuse
7.
ESP ® OFF light
25.
Back up light switch
43.
“IGN” fuse
8.
ESP ® warning light
26.
Back up light
44.
“BACK” fuse
9.
ABS warning light
27.
Brake booster pressure sensor (if equipped)
45.
“ABS” fuse
10.
EBD warning light (brake warning light)
28.
ESP ® hydraulic unit / control module assembly
46.
“MTR” fuse
11.
CPU (combination meter)
29.
Yaw rate / G sensor
47.
“IG1 SIG” fuse
12.
Brake light switch
30.
Solenoid valve power supply relay
48.
“STOP” fuse
13.
Brake light
31.
Solenoid valve
49.
Engine ground
14.
DLC
32.
Solenoid valve relay
50.
Ground
15.
Brake fluid level switch
33.
CPU
Terminal
Wire color
Circuit
1
GRY
Right-front wheel speed sensor signal circuit
2
GRN
Right-front wheel speed sensor power supply circuit
3
GRN
Brake light drive circuit
4
BRN
Left-rear wheel speed sensor power supply circuit
5
YEL
Left-rear wheel speed sensor signal circuit
7
WHT
ESP ® OFF switch signal circuit
8
PNK
Right-rear wheel speed sensor signal circuit
9
LT BLU
Right-rear wheel speed sensor power supply circuit
11
GRN
Left-front wheel speed sensor power supply circuit
12
BLK
Left-front wheel speed sensor signal circuit
13
RED
Solenoid valve power supply circuit
15
GRN
Brake booster pressure sensor signal circuit
16
BLU
Brake booster pressure sensor power supply circuit
20
BRN
Back up light switch signal circuit
23
GRY
Brake booster pressure sensor ground circuit
24
GRN
Pump motor power supply circuit
25
BLK
ESP ® control module ground circuit
26
LT BLU
Brake light signal circuit
27
PPL
Vehicle speed output circuit
29
YEL
Ignition power supply circuit
30
WHT
CAN communication line (low) for ECM
31
WHT
CAN communication line (low) for BCM
32
RED
CAN communication line (high) for BCM
33
RED
CAN communication line (high) for ECM

---

## AENLSB0A4603001 - ESP&#174; Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4603001.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Component Location
Outgoing references: none

Content:
ESP® Component Location
The figure shows LHD. For RHD, parts with (*) are installed on the opposite side.
1.
Combination meter
7.
ESP ® OFF switch
13.
ESP ® hydraulic unit / control module assembly
2.
EBD warning light (brake warning light)
8.
Front wheel speed sensor
14.
ECM
3.
ABS warning light
9.
Rear wheel speed sensor
15.
BCM
4.
ESP ® warning light
10.
Brake light switch
16.
P/S control module
5.
ESP ® OFF light
11.
Back up light switch (M/T model)
17.
RBS control module (DSBS model)
6.
Lighting and turn signal switch
12.
Brake booster pressure sensor (if equipped)
18.
Dual sensor brake support control module (DSBS model)

---

## AENLSB0A4604001 - ESP&#174; System Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001009 -> unresolved | Customer complaint analysis
- AENLSB0A4604001010 -> unresolved | Problem symptom confirmation
- AENLSB0A4604001011 -> unresolved | DTC check, record and clearance
- AENLSB0A4604001012 -> unresolved | Step 2: Visual Inspection
- AENLSB0A4604001013 -> unresolved | Step 3: Road Test
- AENLSB0A4604001016 -> unresolved | Step 6: Final Confirmation Test
- AENLSB0A4604004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604004.xml | Warning Light Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check
- AENLSB0A4604001013 -> unresolved | Step 3: Road Test
- AENLSB0A4101001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4101001.xml | Brake System Description
- AENLSB0A0006002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0006002.xml | Intermittent Connection and Poor Contact Inspection
- AENLSB0A4604006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604006.xml | DTC Clearance

Content:
ESP® System Check
Refer to the description after the following general flow for details of each step.
Malfunction analysis
Perform
Customer complaint analysis
.
Perform
Problem symptom confirmation
.
Perform
DTC check, record and clearance
and recheck DTC.
Is the same DTC detected again after performing DTC clearance?
Check and repair referring to applicable DTC troubleshooting, and then go to Step 6.
Go to Step 2.
Visual inspection
Perform
Step 2: Visual Inspection
.
Is there any faulty condition?
Repair or replace defective part, and then go to Step 6.
Go to Step 3.
Road test
Perform
Step 3: Road Test
.
Is malfunction detected?
Repair or replace defective part, and then go to Step 6.
Go to Step 4.
Brake diagnosis
Check and repair brake system.
Is malfunction detected?
Repair or replace defective part, and then go to Step 6.
Go to Step 5.
Intermittent problem check
Check for intermittent problems.
Is malfunction detected?
Repair or replace defective part, and then go to Step 6.
Go to Step 6.
Final confirmation test
Perform
Step 6: Final Confirmation Test
.
Is malfunction detected?
Go to Step 4.
End.
Step 1: Malfunction Analysis
Customer complaint analysis
Record details of the problem (failure, complaint) and how it occurred as described by the customer.
For this purpose, use of such a questionnaire form shown below will facilitate collecting information for proper analysis and diagnosis.
Customer questionnaire form (Example)
Problem symptom confirmation
If symptom in “Customer Questionnaire” is found or reproduced in the vehicle, check that the symptom is problem or not. (This step should be done with the customer if possible.) Check warning light related to brake system referring to “EBD Warning Light (Brake Warning Light) Check”, “ABS Warning Light Check” and “ESP ® Warning Light Check” under
Warning Light Check
.
DTC check, record and clearance
Perform
DTC Check
procedure, record it and then clear it.
Recheck DTC.
When DTC which is recorded at DTC check procedure is detected again after performing DTC clearance, go to
DTC Check
to perform the diagnosis.
When DTC which is recorded at DTC check procedure is not detected anymore after performing DTC clearance, ESP ® control module does not perform the system diagnosis, or temporary abnormality may occur, therefore go to
Step 3: Road Test
to perform the diagnosis.
Step 2: Visual Inspection
As a preliminary step, perform visual check of the items that support proper function of the ESP ® system.
Step 3: Road Test
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Perform Road Test as follows to check if each warning light lights up.
Drive at 40 km/h (25 mph) for over two minutes.
Turn right and left at over 10 km/h (6 mph) for over a second by turning steering wheel over 45 degrees.
Drive at 60 km/h (37 mph) for over three seconds.
Stop the vehicle using foot brake from driving at 60 km/h (37 mph).
Step 4: Brake Diagnosis
Check the parts or system suspected as a possible cause referring to
Brake System Description
and based on symptoms appearing on the vehicle (symptoms observed through Step 1 – 3). Repair faulty parts or replace them, if necessary.
Step 5: Intermittent Problem Check
Check parts that are prone to cause intermittent trouble (e.g. wire harness, connector), referring to
Intermittent Connection and Poor Contact Inspection
and the related circuit of which DTC is recorded in Step 1 – 5.
Step 6: Final Confirmation Test
Check that the problem symptom is not observed any more and ESP ® is free from any abnormal conditions. If what has been repaired is related to malfunction DTC, clear the DTC referring to
DTC Clearance
, perform road test and check that the DTC is not indicated.

---

## AENLSB0A4604002 - Visual Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604002.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C
Outgoing references:
- AENLSB0A1A11001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A11001.xml | Battery Description:K14C
- AENLSB0A0006002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0006002.xml | Intermittent Connection and Poor Contact Inspection
- AENLSB0A4106001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4106001.xml | Brake Fluid Level Inspection
- AENLSB0A4604004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604004.xml | Warning Light Check

Content:
Visual Inspection
Visually check the following parts and systems.
Inspection item
Referring section
Battery – Fluid level, leakage
K14C model:
Battery Description:K14C
Connectors of electric wire harness – Disconnection, friction
Intermittent Connection and Poor Contact Inspection
Fuses – Burning
—
Brake fluid – Fluid level, leakage
Brake Fluid Level Inspection
ABS warning light – Operation
Warning Light Check
EBD warning light (Brake warning light) – Operation
ESP ® warning light – Operation
Other parts that can be checked visually
—

---

## AENLSB0A4604003 - ESP&#174; Symptom Diagnosis
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604003.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C
Outgoing references: none

Content:
ESP® Symptom Diagnosis
ESP ® warning light remains lit for more than 2 seconds after setting ignition “ON”
Malfunctioning ESP ® function
Perform ESP ® system check.
Malfunctioning ESP ® warning light circuit
Check ESP ® warning light circuit.
ABS warning light remains lit for more than 2 seconds after setting ignition “ON”
Malfunctioning ESP ® function
Perform ESP ® system check.
Malfunctioning ABS warning light circuit
Check ABS warning light circuit.
ABS and/or ESP ® warning light does not turn ON after setting ignition “ON”
Malfunctioning ESP ® function
Perform ESP ® system check.
Malfunctioning CAN communication system function
Check CAN communication system.
K14C model:
Malfunctioning ESP ® warning light circuit
Check ESP ® warning light circuit.
Malfunctioning ABS warning light circuit
Check ABS warning light circuit.
ABS warning light blinks
Brake system is not filled with brake fluid
Fill brake system with brake fluid.
EBD warning light (Brake warning light) remains lit for more than 2 seconds after setting ignition “ON”
Parking brake applied
Release parking brake and check that EBD warning light (brake warning light) turns OFF.
Insufficient amount of brake fluid
Check brake fluid level.
Faulty parking brake switch circuit and/or brake fluid level switch circuit
Check BCM and its circuit.
Faulty parking brake switch and/or brake fluid level switch
Check parking brake switch and/or brake fluid level switch.
Parking brake switch:
Brake fluid level switch:
Malfunctioning ESP ® function
Perform ESP ® system check.
Faulty ESP ® control module power supply and ground circuits
Check ESP ® control module power supply and ground circuits.
Malfunctioning CAN communication system
Check CAN communication system.
K14C model:
Faulty BCM
Check BCM and its circuit.
Faulty ESP ® control module
Replace ESP ® control module.
Malfunctioning EBD warning light circuit
Check EBD warning light circuit.
EBD warning light (Brake warning light) does not turn ON after setting ignition “ON”
Malfunctioning ESP ® function
Perform ESP ® system check.
Malfunctioning CAN communication system
Check CAN communication system.
K14C model:
Malfunctioning EBD warning light circuit
Check EBD warning light circuit.

---

## AENLSB0A4604004 - Warning Light Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604004.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604011 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604011.xml | ESP® Warning Light Does Not Come ON after Setting Ignition “ON”
- AENLSB0A4604012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604012.xml | ESP® Warning Light Comes ON Steady
- AENLSB0A4604013 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604013.xml | ABS Warning Light Does Not Come ON after Setting Ignition “ON”
- AENLSB0A4604014 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604014.xml | ABS Warning Light Comes ON Steady
- AENLSB0A4604015 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604015.xml | EBD Warning Light (Brake Warning Light) Does Not Come ON after Setting Ignition “ON”
- AENLSB0A4604016 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604016.xml | EBD Warning Light (Brake Warning Light) Comes ON Steady

Content:
Warning Light Check
ESP® Warning Light Check
Set ignition “ON”.
Check that ESP ® warning light (1) comes ON for about 2 seconds and then goes OFF.
If ESP ® warning light never lights up, go to
ESP® Warning Light Does Not Come ON after Setting Ignition “ON”
. If ESP ® warning light remains ON and no DTC is stored in ESP ® control module, go to
ESP® Warning Light Comes ON Steady
.
ABS Warning Light
Set ignition “ON”.
Check that ABS warning light (1) comes ON for about 2 seconds and then goes OFF. If ABS warning light never lights up, go to
ABS Warning Light Does Not Come ON after Setting Ignition “ON”
. If ABS warning light remains ON and no DTC is stored in ESP ® control module, go to
ABS Warning Light Comes ON Steady
.
EBD Warning Light (Brake Warning Light)
Perform this check on a level place.
Check brake fluid level.
Pull parking brake lever.
Set ignition “ON”.
Check that EBD warning light (brake warning light) (1) comes ON. If EBD warning light (brake warning light) never lights up, go to
EBD Warning Light (Brake Warning Light) Does Not Come ON after Setting Ignition “ON”
.
Release parking brake lever and check that EBD warning light goes OFF. If EBD warning light (brake warning light) remains ON and no DTC is stored in ESP ® control module, go to
EBD Warning Light (Brake Warning Light) Comes ON Steady
.

---

## AENLSB0A4604005 - DTC Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C
Outgoing references: none

Content:
DTC Check
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Read DTC according to instructions displayed on SUZUKI scan tool and print it or write it down. Refer to Operator’s Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and ESP ® control module is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
Check DLC power circuit and ground circuit.
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
K14C model:
Check central gateway control module power supply circuit and ground circuit.
Check ESP ® control module power supply circuit and ground circuit.
After completing the check, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0A4604006 - DTC Clearance
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604006.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C
Outgoing references:
- AENLSB0A4604008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604008.xml | Fail-Safe Table

Content:
DTC Clearance
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Clear DTC according to instructions displayed on SUZUKI scan tool. Refer to Operator’s Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and ESP ® control module is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
K14C model:
Check central gateway control module power supply circuit and ground circuit.
Check ESP ® control module power circuit and ground circuit.
Current DTCs cannot be cleared as long as current trouble is present. Solve the trouble and check that the system is in normal condition referring to “Fail-safe condition” under
Fail-Safe Table
. Clear DTCs after changing current DTCs to history DTCs.
After completing DTC clearance, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0A4604007 - DTC Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604007.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check

Content:
DTC Table
If you do not perform
ESP® System Check
before starting the diagnosis, the diagnosis will show a false result.
Perform
ESP® System Check
before starting the diagnosis.
*1: Whether ABS warning light, EBD warning light (brake warning light) or ESP ® warning light lights up or not depends on DTC detecting condition.
*2: DTC is cleared automatically when sensor is calibrated.
*3: In case that both DTC C1024 and C1075 are detected, go to DTC C1024 troubleshooting.
*4: EBD warning light lights up when 2 or more wheel speed sensors malfunction.
*5: Without hill hold control
*6: With hill hold control
DTC
DTC name
DTC detecting condition
ABS warning light
EBD warning light
ESP ® warning light
C1015
Longitudinal G Sensor in Yaw Rate / G Sensor Assembly Failure
Longitudinal G sensor signal is out of specified range.
OFF
OFF
OFF *5
Lights up *6
Longitudinal G sensor signal does not change although vehicle is accelerating or decelerating.
C1016
Brake Light Switch Circuit Performance
Brake light switch ON signal is detected for more than specified time while vehicle speed is more than specified value.
OFF
OFF
Lights up
Brake light switch ON signal is not detected although brake master cylinder pressure sensor signal is more than specified value.
C1017
Lateral G Sensor Circuit Performance
Lateral G sensor signal is out of specified range.
OFF
OFF
Lights up
Lateral G sensor signal does not change although vehicle is turning right or left.
C1020
Master Cylinder Pressure Sensor Power Supply Voltage
Power supply voltage to brake master cylinder pressure sensor in ESP ® control module is out of specified range.
OFF
OFF
Lights up
C1021
Right-Front Wheel Speed Sensor Circuit Voltage
Wheel speed sensor signal is out of specified range.
Lights up
*4
Lights up
C1022
Right-Front Wheel Speed Sensor or Encoder Signal Performance
Abnormal wheel speed sensor signal is detected continuously.
Lights up
*4
Lights up
C1023
Yaw Rate Sensor Circuit Performance
Yaw rate sensor signal is out of specified range.
OFF
OFF
Lights up
Although vehicle is in a stop, yaw rate sensor signal is more than specified value.
C1024 *3
Steering Angle Sensor Circuit Performance
CPU in lighting and turn signal switch detects internal defect.
OFF
OFF
Lights up
Steering angle sensor signal is out of specified range.
Steering angle sensor signal does not change although vehicle is turning right or left.
C1025
Left-Front Wheel Speed Sensor Circuit Voltage
Wheel speed sensor signal is out of specified range.
Lights up
*4
Lights up
C1026
Left-Front Wheel Speed Sensor or Encoder Signal Performance
Abnormal wheel speed sensor signal is detected continuously.
Lights up
*4
Lights up
C1027
ESP ® OFF Switch Circuit Failure
ESP ® OFF switch remains “ON” for more than specified time.
OFF
OFF
OFF
C1028
Master Cylinder Pressure Sensor Circuit Voltage
Brake master cylinder pressure sensor signal is out of specified range.
OFF
OFF
Lights up
C102B
Brake Booster Pressure Sensor System Malfunction
Brake booster pressure sensor signal is kept stuck.
OFF
OFF
Lights up
Brake booster pressure sensor signal is out of specified range.
C1031
Right-Rear Wheel Speed Sensor Circuit Voltage
Wheel speed sensor signal is out of specified range.
Lights up
*4
Lights up
C1032
Right-Rear Wheel Speed Sensor or Encoder Signal Performance
Abnormal wheel speed sensor signal is detected continuously.
Lights up
*4
Lights up
C1035
Left-Rear Wheel Speed Sensor Circuit Voltage
Wheel speed sensor signal is out of specified range.
Lights up
*4
Lights up
C1036
Left-Rear Wheel Speed Sensor or Encoder Signal Performance
Abnormal wheel speed sensor signal is detected continuously.
Lights up
*4
Lights up
C1037
Steering Angle Sensor Power Supply Voltage
Steering angle sensor power supply voltage is out of specified range.
OFF
OFF
Lights up
C1038
Steering Angle Sensor Detect Rolling Counter Failure
Lighting and turn signal switch detects invalid CAN data from ESP ® control module.
OFF
OFF
Lights up
C1040
ESP ® Continuous Operation
Stability control is activated for more than specified time.
OFF
OFF
Lights up
C1041
Right-Front Inlet Solenoid Valve Circuit Correlation
Electrical failure of solenoid valve.
Lights up
Lights up
Lights up
C1042
Right-Front Outlet Solenoid Valve Circuit Correlation
Electrical failure of solenoid valve.
Lights up
Lights up
Lights up
C1043
Cut Solenoid No.1 Valve Circuit Correlation
Electrical failure of solenoid valve.
Lights up
Lights up
Lights up
C1044
Cut Solenoid No.2 Valve Circuit Correlation
Electrical failure of solenoid valve.
Lights up
Lights up
Lights up
C1045
Left-Front Inlet Solenoid Valve Circuit Correlation
Electrical failure of solenoid valve.
Lights up
Lights up
Lights up
C1046
Left-Front Outlet Solenoid Valve Circuit Correlation
Electrical failure of solenoid valve.
Lights up
Lights up
Lights up
C104B
Back Up Light Switch System Malfunction
Back up light switch is “ON” (in reverse state) but ESP ® control module recognizes that the vehicle is cornering frontward based of signals from yaw rate sensor, lateral G sensor and steering angle sensor.
OFF
OFF
OFF *5
Lights up *6
C1051
Right-Rear Inlet Solenoid Valve Circuit Correlation
Electrical failure of solenoid valve.
Lights up
Lights up
Lights up
C1052
Right-Rear Outlet Solenoid Valve Circuit Correlation
Electrical failure of solenoid valve.
Lights up
Lights up
Lights up
C1053
Low Pressure Solenoid No.1 Valve Circuit Correlation
Electrical failure of solenoid valve.
Lights up
Lights up
Lights up
C1054
Low Pressure Solenoid No.2 Valve Circuit Correlation
Electrical failure of solenoid valve.
Lights up
Lights up
Lights up
C1055
Left-Rear Inlet Solenoid Valve Circuit Correlation
Electrical failure of solenoid valve.
Lights up
Lights up
Lights up
C1056
Left-Rear Outlet Solenoid Valve Circuit Correlation
Electrical failure of solenoid valve.
Lights up
Lights up
Lights up
C1057
Power Supply Voltage
ESP ® control module power supply voltage is higher than specified value.
Lights up
Lights up
Lights up
ESP ® control module power supply voltage is lower than specified value.
*1
C1061
Pump Motor Circuit Performance
Pump motor power supply voltage is out of specified range.
Lights up
OFF
Lights up
When pump motor is activated, a malfunction in pump motor is detected.
Power supply from CPU to pump motor and pump motor relay monitor data disagree.
C1063
Solenoid Valve Power Supply Driver Circuit Performance
Solenoid valve power supply relay output is “ON”, although monitored output is “OFF”.
Lights up
Lights up
Lights up
Solenoid valve power supply relay output is “OFF”, although monitored output is “ON”.
C1065
Brake Light Relay Circuit Failure
Inconsistency between input voltage to brake light switch and monitored status continues for longer than specified time.
OFF
OFF
OFF
C1069
Steering Angle Sensor Specification Unregistered
Steering angle sensor detects unconfirmed failure.
OFF
OFF
Lights up
C1071
ESP ® Control Module Internal Failure
ESP ® control module internal failure is detected.
Lights up
Lights up
Lights up
C1074 *2
G Sensor Calibration
Yaw rate / G sensor calibration is not completed.
OFF
OFF
OFF *5
Lights up *6
C1075 *2, *3
Steering Angle Sensor Calibration
Steering angle sensor calibration is not completed.
OFF
OFF
Lights up
C1076 *2
Master Cylinder Pressure Sensor Calibration Incomplete
Brake master cylinder pressure sensor calibration is not completed.
OFF
OFF
Lights up
C1078 *2
Lateral G Sensor in Yaw Rate / G Sensor Assembly Calibration Incomplete
Lateral G sensor in yaw rate / G sensor assembly calibration is not completed.
OFF
OFF
Lights up
C1090
ECM Detect Rolling Counter Failure From ESP ® Control Module
ESP ® control module sends invalid CAN data to ECM.
OFF
OFF
Lights up
C1091
CAN Invalid Data from ECM
DTC concerned with ECM is detected.
OFF
OFF
Lights up
C1092
CAN Invalid Data from TCM
DTC concerned with TCM is detected.
OFF
OFF
Lights up
C1094
Torque Request Reject Status
ESP ® control module receives invalid CAN data from ECM (about engine torque control).
OFF
OFF
Lights up
C1099
Invalid Data Received From ENG A-STOP Control Module
DTC concerned with ECM is detected.
OFF
OFF
OFF *5
Lights up *6
C10A0
Invalid Data Received From RBS Control Module
ESP ® control module received invalid CAN data (counter value) from RBS control module.
OFF
OFF
OFF
C10A1
Invalid Data Received From RBS Control Module
ESP ® control module received invalid CAN data (sum value) from RBS control module.
OFF
OFF
OFF
C10A3
Invalid Auto Brake Request Received From RBS Control Module
ESP ® control module received automatic brake activation demand for longer than specified time continuously.
OFF
OFF
OFF
C10A7
Invalid Data Received From DSBS Control Module
ESP ® control module received invalid CAN data (counter value) from dual sensor brake support control module.
OFF
OFF
OFF
C10A8
Invalid Data Received From DSBS Control Module
ESP ® control module received invalid CAN data (sum value) from dual sensor brake support control module.
OFF
OFF
OFF
C10A9
Invalid Auto Brake Request Received From DSBS Control Module
ESP ® control module received automatic brake activation demand for longer than specified time continuously.
OFF
OFF
OFF
U0073
Control Module Communication Bus Off
Impossible to receive and transmit CAN data.
OFF
OFF
Lights up
U0100
Lost Communication With ECM
ECM message data is missing from CAN communication.
OFF
OFF
Lights up
U0101
Lost Communication With TCM
TCM message data is missing from CAN communication.
OFF
OFF
Lights up
U0126
Lost Communication With Steering Angle Sensor Module
Steering angle sensor message data is missing from CAN communication.
OFF
OFF
Lights up
U0140
Lost Communication With Body Control Module
BCM message data is missing from CAN communication.
OFF
OFF
OFF *5
Lights up *6
U1082
Lost Communication With ENG A-STOP Control Module
ECM message data is missing from CAN communication.
OFF
OFF
Lights up
U108A
Lost Communication With RBS Control Module
RBS control module message data is missing from CAN communication.
OFF
OFF
OFF
U1093
Lost Communication With DSBS Control Module
Dual sensor brake support control module message data is missing from CAN communication.
OFF
OFF
OFF

---

## AENLSB0A4604008 - Fail-Safe Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604008.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check

Content:
Fail-Safe Table
When any of the following DTCs is detected, ESP ® control module changes the control to the fail-safe mode and ABS, EBD, traction control and stability control functions are deactivated until ESP ® control module judges the system is normal.
: Activated
—: Deactivated
*1: Whether ESP ® system is engaged in fail-safe mode or not depends on malfunction part. Fail-safe mode can be checked by lighting status of ABS warning light, EBD warning light (brake warning light) or ESP ® warning light.
When ABS warning light lights up, ABS control is deactivated.
When EBD warning light (brake warning light) lights up, EBD control is deactivated.
When ESP ® warning light lights up, traction control and stability control are deactivated.
*2: Without hill hold control
*3: With hill hold control
DTC
Fail-safe operation
Fail-safe cancel condition
ABS
EBD
Traction control / Stability control
Hill hold control
RBS control / DSBS control
Emergency stop signal control
C1015
*2
— *3
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON” and the vehicle runs at 10 km/h (6 mile/h) or more.
C1016
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON” and normal operation of brake light switch is counted 1 time.
C1017
—
—
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1020
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
C1021
—
*1
—
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
C1022
—
*1
—
—
—
—
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1023
—
—
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1024
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1025
—
*1
—
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
C1026
—
*1
—
—
—
—
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1027
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
C1028
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
C102B
—
—
When any of the following conditions is met, fail-safe operation is canceled.
Ignition is “OFF”.
Brake booster pressure sensor signal is returned to normal.
After switching ignition from “OFF” to “ON”, brake booster vacuum is judged to be normal by depressing brake pedal 1 time or more.
C1031
—
*1
—
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
C1032
—
*1
—
—
—
—
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1035
—
*1
—
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
C1036
—
*1
—
—
—
—
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1037
—
—
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1038
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
C1040
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1041
—
—
—
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1042
—
—
—
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1043
—
—
—
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1044
—
—
—
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1045
—
—
—
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1046
—
—
—
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C104B
*2
— *3
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON” and forward cornering drive is performed for 10 sec.
C1051
—
—
—
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1052
—
—
—
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1053
—
—
—
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1054
—
—
—
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1055
—
—
—
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1056
—
—
—
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1057
—
*1
—
*1
—
—
When ESP ® control module judges the system to be normal.
C1061
—
—
—
—
—
When ESP ® control module judges the system to be normal and “Road Test” under
ESP® System Check
is performed after switching ignition from “OFF” to “ON”.
C1063
—
—
—
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
C1065
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
C1069
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
C1071
—
—
—
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
C1074
*2
— *3
—
—
When yaw rate / G sensor calibration is completed.
C1075
—
—
When steering angle sensor calibration is completed.
C1076
—
—
—
When brake master cylinder pressure sensor calibration is completed.
C1078
—
—
When yaw rate / G sensor calibration is completed.
C1090
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
C1091
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
C1092
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
C1094
—
—
When ESP ® control module judges the system to be normal, after stopping engine and restarting.
C1099
*2
— *3
—
*2
— *3
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
C10A0
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
C10A1
—
C10A3
—
C10A7
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
C10A8
—
C10A9
—
U0073
—
—
—
When ESP ® control module judges the system to be normal, after switching ignition from “OFF” to “ON”.
U0100
—
—
—
U0101
—
—
—
U0126
—
—
U0140
*2
— *3
—
*2
— *3
U1082
—
—
—
U108A
—
U1093
—

---

## AENLSB0A4604009 - Scan Tool Data
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604009.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C
Outgoing references: none

Content:
Scan Tool Data
ESP® Control Module
If communication between SUZUKI scan tool and ESP ® control module is not possible, perform the following checks:
Check communication condition between PC and VCI using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
K14C model:
Check central gateway control module power supply circuit and ground circuit.
Check ESP ® control module power circuit and ground circuit.
Scan tool data
Vehicle condition
Condition / Reference value
RF Wheel Speed
At stop (Stationary vehicle)
0 km/h (0 MPH)
LF Wheel Speed
At stop (Stationary vehicle)
0 km/h (0 MPH)
RR Wheel Speed
At stop (Stationary vehicle)
0 km/h (0 MPH)
LR Wheel Speed
At stop (Stationary vehicle)
0 km/h (0 MPH)
G sensor
Parking (Ignition: “ON”, on level surface)
0 ± 0.1 G
Accelerating
0 ± 0.1 G or more
Decelerating
0 ± 0.1 G or less
Battery Voltage
Ignition: “ON” (Engine stopped)
10.0 – 14.0 V
Pump Motor Driver
Inactive (Pump motor not working)
0.0 V
Active (Pump motor working)
13.0 – 15.0 V
Brake Booster Pressure Sensor
When brake pedal is depressed 3 or more times with engine stopped.
0 kPa
Engine: Idle speed
Brake pedal: Released
60 to 70 kPa
Engine: Idle speed
Brake pedal: Fully depressed
50 to 60 kPa
Master Cyl Press
Brake pedal: Depressed
Over 0 ± 0.9 MPa
Brake pedal: Released
0 ± 0.9 MPa
G Sensor (Lateral)
Parking (Ignition: “ON”, on level surface)
0 ± 0.1 G
Right turning
0 ± 0.1 G or more
Left turning
0 ± 0.1 G or less
Yaw Rate Sensor
Parking (Ignition: “ON”, on level surface)
0 ± 4 deg/s
Right turning
0 ± 5 deg/s or more
Left turning
0 ± 5 deg/s or less
Engine Speed
Engine: Idle speed with no load after warning up
K14C model: 650 – 850 rpm
Steering Angle Sensor
Front wheels in straight ahead position
0 ± 3°
Rotate steering wheel once clockwise
360° ± 3°
Rotate steering wheel once counterclockwise
–360° ± 3°
Hill Hold Control State
Hill hold control: Operating
ON
Other than above condition
OFF
Brake Light Relay
Automatic brake operating
ON
Other than above condition
OFF
Brake Switch
Brake pedal: Depressed
ON
Brake pedal: Released
OFF
Stability Control
Operating
ON
Not operating
OFF
TCS Control (Brake)
Active brake applied to wheel
ON
Other than above condition
OFF
TCS Control (Engine)
Engine torque control: Operating
ON
Other than above condition
OFF
ESP ® OFF SW State
ESP ® OFF switch: Released
OFF
ESP ® OFF switch: Pushed
ON
Steering Angle Signal
Front wheels in straight ahead position (–5° to 5°)
Neutral
Other than above condition, or not calibrated
Not N
Hill Hold Control
Equipped with hill hold control function
With
Not equipped with hill hold control function
Without
IPC Communication State
Equipped with correct steering angle sensor
normal
Other than above condition
abnormal
Scan Tool Data Definition
RF Wheel Speed, LF Wheel Speed, RR Wheel Speed and LR Wheel Speed (km/h / MPH)
Wheel speed is ESP ® control module internal parameter. It is computed by reference pulses from the wheel speed sensor.
G Sensor (G)
Acceleration and deceleration are measured by yaw rate / G sensor in ESP ® control module.
Battery Voltage (V)
Battery voltage is an analog input signal read by ESP ® control module. ESP ® control module functions may be stopped if battery voltage falls below or rises above programmed thresholds.
Pump Motor Driver (V)
This parameter indicates operational condition of pump motor driver (transistor).
Brake Booster Pressure Sensor (kPa)
This parameter indicates negative pressure value in brake booster.
Master Cyl Press (MPa)
This indicates brake fluid pressure from brake master cylinder.
G Sensor (Lateral) (G)
Lateral acceleration is measured by yaw rate / G sensor in ESP ® control module.
Yaw Rate Sensor (Deg/s)
Yaw rate is measured by yaw rate / G sensor in ESP ® control module.
Engine Speed (rpm)
This parameter indicates engine speed sent from ECM through CAN.
Steering Angle Sensor (°)
Steering wheel rotation angle is measured by steering angle sensor (non-auto-on headlight model) or lighting and turn signal switch (auto-on headlight model) and output to ESP ® control module by CAN communication signal.
Hill Hold Control State (ON / OFF)
This informs whether hill hold control is operating or not.
Brake Light Relay (ON / OFF)
This parameter indicates the state of brake light relay.
Brake Switch (ON / OFF)
These switch signals inform ESP ® control module whether brake pedal is depressed or not.
Stability Control (ON / OFF)
This parameter informs whether active brake is operating or not when vehicle is oversteering or understeering.
TCS Control (Brake) (ON / OFF)
This informs whether active brake is operating or not when vehicle is accelerating.
TCS Control (Engine) (ON / OFF)
This informs whether engine torque control is operating or not when vehicle is accelerating.
ESP® OFF SW State (ON / OFF)
This indicates state of ESP ® OFF switch.
Steering Angle Signal (Neutral / Not N)
This indicates whether steering wheel is in straight ahead position or not as detected by steering angle sensor (non-auto-on headlight model) or lighting and turn signal switch (auto-on headlight model).
Hill Hold Control (With / Without)
This informs whether vehicle is equipped with hill hold control function or not.
IPC Communication State (normal / abnormal)
This informs whether steering angle sensor for ESP ® is equipped or not.

---

## AENLSB0A4604010 - Scan Tool Active Test Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604010.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references: none

Content:
Scan Tool Active Test Table
SUZUKI scan tool includes output test function which can force operation of the following relays of systems controlled by ESP ® control module. When a malfunction is found in system controlled by ESP ® control module, execute output test to facilitate judgment of whether the malfunction is on the input or output side of ESP ® control module.
For details of SUZUKI scan tool, refer to its Operator’s Manual.
Brake Light Relay

---

## AENLSB0A4604011 - ESP&#174; Warning Light Does Not Come ON after Setting Ignition “ON”
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604011.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C || symptoms: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references: none

Content:
ESP® Warning Light Does Not Come ON after Setting Ignition “ON”
System Description
Operation (ON/OFF) of ESP ® warning light is controlled by ESP ® control module through light driver module in combination meter.
If ESP ® system is in good condition, ESP ® control module turns ON ESP ® warning light with ignition “ON”, keeps the light ON for 2 seconds and then turns it OFF. If traction control and stability control are deactivated by ESP ® system failure, ESP ® warning light is turned ON continuously by ESP ® control module. Also, the light is turned ON continuously by light driver module when the connector of ESP ® control module connector is disconnected.
Troubleshooting
Warning light check
Set ignition “ON”.
Do other indicator lights light up within 2 seconds after setting ignition “ON”?
Go to Step 2.
Go to Step 3.
DTC check
Check that ignition is “OFF”.
Connect scan tool to DLC.
Set ignition “ON”.
Check DTC related to CAN communication.
Is there any CAN-DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace combination meter and recheck warning light operation. If ESP ® warning light does not come ON, replace ESP ® hydraulic unit / control module assembly and recheck warning light operation.
Combination meter:
ESP ® hydraulic unit / control module assembly:
Fuse check
Is “MTR” fuse in good condition?
Go to Step 4.
Replace “MTR” fuse and check for short circuit to ground.
CAN communication circuit check
Check CAN communication circuit between ESP ® control module and combination meter referring to “Troubleshooting for Communication Bus Off” in Section 10H.
K14C model:
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
Combination meter power supply and ground circuit check
Check combination meter power supply and ground circuits.
Is check result OK?
Replace combination meter and recheck warning light operation. If ESP ® warning light does not come ON, replace ESP ® hydraulic unit / control module assembly and recheck warning light operation.
Combination meter:
ESP ® hydraulic unit / control module assembly:
Repair or replace defective wire harness.

---

## AENLSB0A4604012 - ESP&#174; Warning Light Comes ON Steady
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604012.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || symptoms: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604011 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604011.xml | ESP® Warning Light Does Not Come ON after Setting Ignition “ON”
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check

Content:
ESP® Warning Light Comes ON Steady
System Description
Refer to “System Description” under
ESP® Warning Light Does Not Come ON after Setting Ignition “ON”
.
Troubleshooting
ESP® control module connector check
Check for proper connection to ESP ® control module connector.
Is connection in good condition?
Go to Step 2.
Connect connector securely.
DTC check
Perform
DTC Check
.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
ESP® control module power supply and ground circuit check
Check ESP ® control module power supply and ground circuits.
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Combination meter check
Replace combination meter.
Set ignition “ON”.
Does ESP ® warning light stay on?
Replace ESP ® hydraulic unit / control module assembly and recheck warning light operation.
End.

---

## AENLSB0A4604013 - ABS Warning Light Does Not Come ON after Setting Ignition “ON”
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604013.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C || symptoms: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references: none

Content:
ABS Warning Light Does Not Come ON after Setting Ignition “ON”
System Description
Operation (ON/OFF) of ABS warning light is controlled by ESP ® control module through light driver module in combination meter.
If ESP ® system is in good condition, ESP ® control module turns ON ABS warning light with ignition “ON”, keeps the light ON for 2 seconds and then turns it OFF. If ABS control is deactivated by ESP ® system failure, ABS warning light is turned ON continuously by ESP ® control module. Also, the light is turned ON continuously by light driver module when the connector of ESP ® control module is disconnected.
Troubleshooting
Warning light check
Set ignition “ON”.
Do other indicator lights light up within 2 seconds after setting ignition “ON”?
Go to Step 2.
Go to Step 3.
DTC check
Check that ignition is “OFF”.
Connect scan tool to DLC.
Set ignition “ON”.
Check DTC related to CAN communication.
Is there any CAN-DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace combination meter and recheck warning light operation. If ABS warning light does not come ON, replace ESP ® hydraulic unit / control module assembly and recheck warning light operation.
Combination meter:
ESP ® hydraulic unit / control module assembly:
Fuse check
Is “MTR” fuse in good condition?
Go to Step 4.
Replace “MTR” fuse and check for short circuit to ground.
CAN communication circuit check
Check CAN communication circuit between ESP ® control module and combination meter referring to “Troubleshooting for Communication Bus Off” in Section 10H.
K14C model:
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
Combination meter power supply and ground circuit check
Check combination meter power supply and ground circuits.
Is check result OK?
Replace combination meter and recheck warning light operation. If ABS warning light does not come ON, replace ESP ® hydraulic unit / control module assembly and recheck warning light operation.
Combination meter:
ESP ® hydraulic unit / control module assembly:
Repair or replace defective wire harness.

---

## AENLSB0A4604014 - ABS Warning Light Comes ON Steady
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604014.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || symptoms: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604013 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604013.xml | ABS Warning Light Does Not Come ON after Setting Ignition “ON”
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check

Content:
ABS Warning Light Comes ON Steady
System Description
Refer to “System Description” under
ABS Warning Light Does Not Come ON after Setting Ignition “ON”
.
Troubleshooting
ESP® control module connector check
Check for proper connection to ESP ® control module connector.
Is connection in good condition?
Go to Step 2.
Connect connector securely.
DTC check
Perform
DTC Check
.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
ESP® control module power supply and ground circuit check
Check ESP ® control module power supply and ground circuits.
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Combination meter check
Replace combination meter.
Set ignition “ON”.
Does ABS warning light stay on?
Replace ESP ® hydraulic unit / control module assembly and recheck warning light operation.
End.

---

## AENLSB0A4604015 - EBD Warning Light (Brake Warning Light) Does Not Come ON after Setting Ignition “ON”
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604015.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || symptoms: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604016 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604016.xml | EBD Warning Light (Brake Warning Light) Comes ON Steady
- AENLSB0A4604012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604012.xml | ESP® Warning Light Comes ON Steady

Content:
EBD Warning Light (Brake Warning Light) Does Not Come ON after Setting Ignition “ON”
System Description
Refer to “System Description” under
EBD Warning Light (Brake Warning Light) Comes ON Steady
.
Troubleshooting
Warning light check
Set ignition “ON”.
Does ABS warning light stay on?
Go to
ESP® Warning Light Comes ON Steady
.
Replace combination meter and recheck warning light operation. If EBD warning light (brake warning light) does not come ON, replace ESP ® hydraulic unit / control module assembly and recheck warning light operation.
Combination meter:
ESP ® hydraulic unit / control module assembly:

---

## AENLSB0A4604016 - EBD Warning Light (Brake Warning Light) Comes ON Steady
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604016.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C || symptoms: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604014 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604014.xml | ABS Warning Light Comes ON Steady
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check
- AENLSB0AA814004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814004.xml | Troubleshooting for Communication Bus Off:CAN (K14C Model)
- AENLSB0AA814004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814004.xml | Troubleshooting for Communication Bus Off:CAN (K14C Model)

Content:
EBD Warning Light (Brake Warning Light) Comes ON Steady
System Description
EBD warning light (brake warning light) is controlled by ESP ® control module and BCM through light driver module in combination meter.
If ESP ® system is in good condition, ESP ® control module turns ON EBD warning light (brake warning light) when ignition is set “ON”, keeps it ON for 2 seconds and then turns it OFF.
EBD warning light (brake warning light) is turned ON continuously in the following conditions.
EBD control is deactivated by ESP ® system failure.
Parking brake lever is pulled up.
Brake fluid level is lower than minimum level.
The information of parking brake switch and brake fluid level is transmitted from BCM to light driver module in combination meter through CAN communication line.
Also, the warning light is turned ON continuously by light driver module when the connector of ESP ® control module is disconnected.
Troubleshooting
ESP® control module connector check
Check for proper connection to ESP ® control module connector.
Is connection in good condition?
Go to Step 2.
Connect connector securely.
Parking brake and brake fluid level check
Check the following points.
Parking brake is completely released.
Brake fluid level is above minimum level.
Is check result OK?
Go to Step 3.
Release parking brake and check brake fluid level.
ABS warning light operation check
Set ignition “ON”.
Does ABS warning light stay on?
Perform
ABS Warning Light Comes ON Steady
.
Go to Step 4.
Parking brake switch signal circuit and brake fluid level switch signal circuit check
Check parking brake switch signal circuit and brake fluid level switch signal circuit.
Is check result OK?
Go to Step 5.
Repair or replace defective part.
CAN communication circuit check
Check that ignition is “OFF”.
Connect scan tool to DLC.
Set ignition “ON”.
Perform
DTC Check
.
Is DTC U0073 detected?
K14C model: Go to
Troubleshooting for Communication Bus Off:CAN (K14C Model)
.
.
Go to Step 6.
DTC check for BCM
Check BCM for DTC.
Is DTC U0073 detected?
K14C model: Go to
Troubleshooting for Communication Bus Off:CAN (K14C Model)
.
.
Go to Step 7.
Combination meter check
Replace combination meter.
Set ignition “ON”.
Does EBD warning light stay on?
Replace ESP ® hydraulic unit / control module assembly and recheck warning light operation.
End.

---

## AENLSB0A4604017 - DTC C1015 / C1017 / C1023
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604017.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check

Content:
DTC C1015 / C1017 / C1023
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1015: Longitudinal G Sensor in Yaw Rate / G Sensor Assembly Failure
Longitudinal G sensor signal is out of specified range.
Longitudinal G sensor signal does not change although vehicle is accelerating or decelerating.
ESP ® control module
Actuator bracket
C1017: Lateral G Sensor Circuit Performance
Lateral G sensor signal is out of specified range.
Lateral G sensor signal does not change although vehicle is turning right or left.
C1023: Yaw Rate Sensor Circuit Performance
Yaw rate sensor signal is out of specified range.
Although vehicle is in a stop, yaw rate sensor signal is more than specified value.
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
ESP® control module and actuator bracket check
Check ESP ® hydraulic unit / control module assembly and actuator bracket.
Is check result OK?
Go to Step 3.
Replace defective parts.
DTC check
Perform
DTC Check
.
Is other DTC(s) than C1015, C1017 and C1023 detected?
Go to troubleshooting for applicable DTC.
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.

---

## AENLSB0A4604018 - DTC C1016
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604018.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check

Content:
DTC C1016
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1016: Brake Light Switch Circuit Performance
Brake light switch ON signal is detected for more than specified time while vehicle speed is more than specified value.
Brake light switch ON signal is not detected although brake master cylinder pressure sensor signal is more than specified value.
Brake light switch circuit
Brake light switch
ECM
ESP ® control module
Circuit Diagram
[A]:
DSBS model
A1:
Brake light switch power supply circuit
3.
J/B
[B]:
Non-DSBS model
A2:
Brake light switch signal circuit 1
4.
ECM
[C]:
ESP ® control module connector (View: [a])
A3:
Brake light switch signal circuit 2
5.
ESP ® control module
[D]:
J/B connector (View: [b])
1.
“STOP” fuse
6.
CAN driver
[E]:
ECM connector (View: [b])
2.
Brake light switch
7.
To brake light
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
DTC check
Perform
DTC Check
.
Is DTC U0073 and/or U0100 detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Brake light switch power supply circuit check
When ignition is “OFF”, disconnect brake light switch connector.
Check for proper terminal connection to brake light switch connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” circuit and ground is battery voltage.
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Brake light switch signal circuit check
Disconnect negative (–) cable at battery.
Disconnect ECM and “E323” connectors.
Check for proper terminal connection to ECM and “E323” connectors.
If connections are OK, check the following points.
Resistance of “A2” and “A3” circuits: less than 1 Ω
Resistance between each of “A2” and “A3” circuits and ground: infinity
Resistance between each of “A2” and “A3” circuit terminals and each terminal at “E323” connector: infinity
Resistance between each of “A2” and “A3” circuits and battery positive (+) cable: infinity
Resistance between each of “A2” and “A3” circuits and each fuse in J/B: infinity
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
Brake light switch check
Check brake light switch.
Is check result OK?
Replace ECM and recheck DTC. If DTC C1016 is still detected, replace ESP ® hydraulic unit / control module assembly and recheck DTC.
ECM
K14C model:
ESP ® hydraulic unit / control module assembly:
Replace brake light switch.

---

## AENLSB0A4604019 - DTC C1020
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604019.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check

Content:
DTC C1020
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1020: Master Cylinder Pressure Sensor Power Supply Voltage
Power supply voltage to brake master cylinder pressure sensor in ESP ® control module is out of specified range.
ESP ® control module
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
DTC check
Clear DTC.
Set ignition “OFF”.
Set ignition “ON”.
Recheck DTC.
Is DTC C1020 still detected?
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.
End.

---

## AENLSB0A4604020 - DTC C1021 / C1022 / C1025 / C1026 / C1031 / C1032 / C1035 / C1036
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604020.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check

Content:
DTC C1021 / C1022 / C1025 / C1026 / C1031 / C1032 / C1035 / C1036
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1021 / C1025 / C1031 / C1035: Right-Front / Left-Front / Right-Rear / Left-Rear Wheel Speed Sensor Circuit Voltage
Wheel speed sensor signal is out of specified range.
Wheel speed sensor
Wheel speed sensor circuit
Wheel speed sensor encoder
ESP ® control module
C1022 / C1026 / C1032 / C1036: Right-Front / Left-Front / Right-Rear / Left-Rear Wheel Speed Sensor or Encoder Signal Performance
Abnormal wheel speed sensor signal is detected continuously.
When vehicle was placed in any of the following conditions, one of these DTCs may be set although sensor is in good condition. If such possibility is suspected, clear DTC once
and check whether any abnormality exists or not by performing road test as described in Step 3 of
ESP® System Check
.
Vehicle is driven with parking brake lever pulled.
Wheel spins while driving.
Wheel(s) is rotated while vehicle is jacked up.
Circuit Diagram
[A]:
ESP ® control module connector (View: [a])
C1:
Left-rear wheel speed sensor power supply circuit
2.
Right-front wheel speed sensor
A1:
Left-front wheel speed sensor power supply circuit
C2:
Left-rear wheel speed sensor signal circuit
3.
Left-rear wheel speed sensor
A2:
Left-front wheel speed sensor signal circuit
D1:
Right-rear wheel speed sensor power supply circuit
4.
Right-rear wheel speed sensor
B1:
Right-front wheel speed sensor power supply circuit
D2:
Right-rear wheel speed sensor signal circuit
5.
ESP ® control module
B2:
Right-front wheel speed sensor signal circuit
1.
Left-front wheel speed sensor
6.
Wheel speed sensor driver
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Check that the following condition is met in this “DTC Confirmation Procedure”.
DTC C1057 is not detected.
Set ignition “ON”.
Drive vehicle at 20 km/h (12 mile/h) or more for 1 minute or more.
Stop vehicle and set ignition “OFF”.
Repeat Step 1) – 3) 7 times.
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
Tire pressure check
Check that tire pressure is at specified value.
Is check result OK?
Go to Step 3.
Adjust tire pressure or replace tire and recheck DTC.
Wheel speed sensor power supply circuit and signal circuit check
Set ignition “OFF”.
Disconnect “E09” and each of wheel speed sensor connectors.
Check for proper terminal connection to “E09” and each of wheel speed sensor connectors.
If connections are OK, check the following points.
Resistance of “A1”, “A2”, “B1”, “B2”, “C1”, “C2”, “D1” and “D2” circuits: less than 1 Ω
Resistance between each of “A1”, “A2”, “B1”, “B2”, “C1”, “C2”, “D1” and “D2” circuits and ground: infinity
Resistance between each terminal of “A1” – “A2”, “B1” – “B2”, “C1” – “C2” and “D1” – “D2” circuits and each terminal of “E09” connector: infinity
Voltage of “A1”, “A2”, “B1”, “B2”, “C1”, “C2”, “D1” and “D2” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Wheel speed sensor signal check
Check applicable wheel speed sensor for output voltage and waveform.
Is check result OK?
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Go to Step 5.
Wheel speed sensor check
Check applicable wheel speed sensor.
Is check result OK?
Go to Step 6.
Clean or replace wheel speed sensor.
Front wheel speed sensor:
Rear wheel speed sensor:
Wheel speed sensor encoder check
Check applicable wheel speed sensor encoder.
Is check result OK?
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Clean or replace wheel speed sensor encoder.
Front wheel speed sensor encoder:
Rear wheel speed sensor encoder:

---

## AENLSB0A4604021 - DTC C1024
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604021.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check

Content:
DTC C1024
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1024: Steering Angle Sensor Circuit Performance
CPU in lighting and turn signal switch detects internal defect.
Steering angle sensor signal is out of specified range.
Steering angle sensor signal does not change although vehicle is turning right or left.
Lighting and turn signal switch
ESP ® control module
DTC Troubleshooting
Detection of both DTC C1024 and C1075 means internal malfunction of steering angle sensor.
Replace lighting and turn signal switch.
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
DTC check
Perform
DTC Check
.
Is DTC U0073 and/or U0126 detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Are both DTC C1024 and C1075 detected?
Replace lighting and turn signal switch.
Go to Step 4.
Steering angle sensor on-vehicle inspection
Check steering angle sensor.
Is check result OK?
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Replace lighting and turn signal switch.

---

## AENLSB0A4604022 - DTC C1027
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604022.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check

Content:
DTC C1027
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1027: ESP ® OFF Switch Circuit Failure
ESP ® OFF switch remains “ON” for more than specified time.
ESP ® OFF switch
ESP ® OFF switch circuit
ESP ® control module
Circuit Diagram
[A]:
ESP ® control module connector (View: [a])
1.
ESP ® OFF switch
A1:
ESP ® OFF switch signal circuit
2.
ESP ® control module
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
ESP® OFF switch circuit check
Check that ignition is “OFF”.
Disconnect “E09” and ESP ® OFF switch connectors.
Check for proper terminal connection to “E09” and ESP ® OFF switch connectors.
If connections are OK, check that resistance between “A1” circuit and ground is infinity.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
ESP® OFF switch check
Check ESP ® OFF switch.
Is check result OK?
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Replace ESP ® OFF switch.

---

## AENLSB0A4604023 - DTC C1028
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604023.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check

Content:
DTC C1028
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1028: Master Cylinder Pressure Sensor Circuit Voltage
Brake master cylinder pressure sensor signal is out of specified range.
Brake system
ESP ® control module
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
DTC check
Perform
DTC Check
.
Is DTC C1057 detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Brake master cylinder pressure sensor check
Check brake master cylinder pressure sensor.
Is check result OK?
Go to Step 4.
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Brake system check
Check the following points.
Leakage of brake fluid or air in the hydraulic brake system.
Too large front brake pad-to-disc clearance.
Too large rear brake pad-to-disc clearance.
Is check result OK?
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Repair, replace or adjust brake system.

---

## AENLSB0A4604024 - DTC C102B
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604024.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check

Content:
DTC C102B
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C102B: Brake Booster Pressure Sensor System Malfunction
Brake booster pressure sensor signal is kept stuck.
Brake booster pressure sensor signal is out of specified range.
Brake booster pressure sensor
Brake booster pressure sensor circuit
ESP ® control module
Barometric pressure sensor in ECM
Circuit Diagram
[A]:
ESP ® control module connector (View: [a])
A2:
Brake booster pressure sensor signal circuit
1.
Brake booster pressure sensor
A1:
Brake booster pressure sensor power supply circuit
A3:
Brake booster pressure sensor ground circuit
2.
ESP ® control module
DTC Troubleshooting
DTC check for ECM
Check ECM for DTC.
K14C model:
Is DTC P2226 and/or P2227 detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
Was “ESP ® System Check” performed?
Go to Step 3.
Go to
ESP® System Check
.
Brake booster pressure sensor power supply circuit check
With ignition “OFF”, disconnect brake booster pressure sensor connector.
Check for proper terminal connection to brake booster pressure sensor connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and “A3” circuit is approx. 5 V.
Is check result OK?
Go to Step 5.
Go to Step 4.
Brake booster pressure sensor ground circuit check
Check that voltage between “A1” circuit and ground is approx. 5 V.
Is check result OK?
Repair or replace “A3” circuit. If DTC C102B is still detected, replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Repair or replace “A1” circuit. If DTC C102B is still detected, replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Brake booster pressure sensor signal circuit check
With ignition “OFF”, disconnect “E09” connector.
Check for proper terminal connection to “E09” connector.
If connection is OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A2” circuit terminal and other terminal at “E09” connector: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 6.
Repair or replace defective wire harness.
Brake booster pressure sensor check
Check brake booster pressure sensor.
Is check result OK?
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Replace brake booster assembly.

---

## AENLSB0A4604025 - DTC C1037
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604025.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check

Content:
DTC C1037
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1037: Steering Angle Sensor Power Supply Voltage
Steering angle sensor power supply voltage is out of specified range.
Lighting and turn signal switch power supply circuit
Lighting and turn signal switch ground circuit
Lighting and turn signal switch
CAN communication circuit
ESP ® control module
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2
Go to
ESP® System Check
.
DTC check
Perform
DTC Check
.
Is other DTC(s) than C1037 and C1038 detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
DTC check for lighting and turn signal switch
Check lighting and turn signal switch for DTC.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 4.
DTC check for BCM
Check BCM for DTC.
Is any of DTC U0073, U0121 and/or U108B detected?
Go to troubleshooting for applicable DTC.
Go to Step 5.
Steering angle sensor check
Connect lighting and turn signal switch connector.
Check steering angle sensor.
Is check result OK?
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Replace lighting and turn signal switch and recheck DTC.

---

## AENLSB0A4604026 - DTC C1038
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604026.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check

Content:
DTC C1038
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1038: Steering Angle Sensor Detect Rolling Counter Failure
Lighting and turn signal switch detects invalid CAN data from ESP ® control module.
CAN communication circuit
Lighting and turn signal switch
ESP ® control module
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
DTC check
Perform
DTC Check
.
Is other DTC(s) than C1038 detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
CAN communication circuit check
Check CAN communication circuit between ESP ® control module and lighting and turn signal switch referring to “Troubleshooting for Communication Bus Off” in Section 10H.
K14C model:
Is check result OK?
Replace lighting and turn signal switch and recheck DTC. If DTC C1038 is still detected, replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Lighting and turn signal switch:
ESP ® hydraulic unit / control module assembly:
Repair or replace defective wire harness.

---

## AENLSB0A4604027 - DTC C1040
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604027.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check

Content:
DTC C1040
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1040: ESP ® Continuous Operation
Stability control is activated for more than specified time.
ESP ® control module
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
DTC check
Perform
DTC Check
.
Is other DTC(s) than C1040 detected?
Go to troubleshooting for applicable DTC.
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.

---

## AENLSB0A4604028 - DTC C1041 / C1042 / C1043 / C1044 / C1045 / C1046 / C1051 / C1052 / C1053 / C1054 / C1055 / C1056
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604028.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check

Content:
DTC C1041 / C1042 / C1043 / C1044 / C1045 / C1046 / C1051 / C1052 / C1053 / C1054 / C1055 / C1056
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1041 / C1045 / C1051 / C1055: Right-Front / Left-Front / Right-Rear / Left-Rear Inlet Solenoid Valve Circuit Correlation
C1042 / C1046 / C1052 / C1056: Right-Front / Left-Front / Right-Rear / Left-Rear Outlet Solenoid Valve Circuit Correlation
C1043 / C1044: Cut Solenoid No.1 / No.2 Valve Circuit Correlation
C1053 / C1054: Low Pressure Solenoid No.1 / No.2 Valve Circuit Correlation
Electrical failure of solenoid valve.
ESP ® control module (solenoid valve) power supply circuit
ESP ® control module ground circuit
ESP ® control module
Circuit Diagram
[A]:
ESP ® control module connector (View: [a])
2.
Relay box
6.
Solenoid valve
A1:
Solenoid valve power supply circuit
3.
“ABS SOL” fuse
7.
CPU
B1:
ESP control module ground circuit
4.
ESP ® control module
1.
Lead to battery
5.
Solenoid valve power supply relay
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
Solenoid valve power supply and ESP® control module ground circuit check
Check solenoid valve power supply and ESP ® control module ground circuits.
Is check result OK?
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0A4604029 - DTC C104B
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604029.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check

Content:
DTC C104B
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C104B: Back Up Light Switch System Malfunction
Back up light switch is “ON” (in reverse state) but ESP ® control module recognizes that the vehicle is cornering frontward based of signals from yaw rate sensor, lateral G sensor and steering angle sensor.
Back up light switch
Back up light switch power supply circuit
Back up light switch signal circuit
ESP ® control module
Lighting and turn signal switch
Circuit Diagram
[A]:
ESP ® control module connector (View: [a])
1.
J/B
5.
ESP ® control module
[B]:
J/B connector (View: [b])
2.
Ignition power supply
6.
Back up light
A1:
Back up light switch power supply circuit
3.
“BACK” fuse
7.
To navigation (if equipped)
A2:
Back up light switch signal circuit
4.
Back up light switch
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
Back up light switch signal circuit check
Set ignition “OFF”.
Disconnect “E323” and “E09” connectors.
Check for proper terminal connection to “E323” and “E09” connectors.
If connections are OK, check the following points.
Resistance between “A2” circuit terminal and each terminal of back up light switch, “E323” and “E09” connectors: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Back up light switch check
Check back up light switch.
Is check result OK?
Go to Step 4.
Replace back up light switch.
Steering angle sensor on-vehicle inspection
Check steering angle sensor.
Is check result OK?
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Replace lighting and turn signal switch.

---

## AENLSB0A4604030 - DTC C1057
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604030.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check

Content:
DTC C1057
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1057: Power Supply Voltage
ESP ® control module power supply voltage is higher than specified value.
ESP ® control module power supply voltage is lower than specified value.
ESP ® control module power supply circuit
ESP ® control module ground circuit
Charging system
ESP ® control module
Circuit Diagram
[A]:
ESP ® control module connector (View: [a])
1.
Lead to battery
5.
ESP ® control module
A1:
Solenoid valve power supply circuit
2.
Relay box
6.
Lead to solenoid valve power supply relay
A2:
Pump motor power supply circuit
3.
“ABS SOL” fuse
7.
Lead to pump motor relay
B1:
ESP ® control module ground circuit
4.
“ABS MOT” fuse
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
ESP® control module power supply and ground circuit check
Check ESP ® control module power supply and ground circuits.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
ESP® control module power supply voltage check
Measure battery voltage with engine running at 3,000 rpm.
Is voltage between 9.8 V and 17.4 V?
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Check charging system.
K14C model:

---

## AENLSB0A4604031 - DTC C1061
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604031.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check

Content:
DTC C1061
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1061: Pump Motor Circuit Performance
Pump motor power supply voltage is out of specified range.
When pump motor is activated, a malfunction in pump motor is detected.
Power supply from CPU to pump motor and pump motor relay monitor data disagree.
ESP ® control module (pump motor) power supply circuit
ESP ® control module ground circuit
ESP ® control module
Circuit Diagram
[A]:
ESP ® control module connector (View: [a])
2.
CPU
6.
“ABS MOT” fuse
A1:
Pump motor power supply circuit
3.
Pump motor relay
7.
Relay box
B1:
ESP ® control module ground circuit
4.
Pump motor
1.
ESP ® control module
5.
Lead to battery
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
Pump motor power supply circuit and ESP® control module ground circuit check
Check pump motor power supply circuit and ESP ® control module ground circuits.
Is check result OK?
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0A4604032 - DTC C1063
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604032.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check

Content:
DTC C1063
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1063: Solenoid Valve Power Supply Driver Circuit Performance
Solenoid valve power supply relay output is “ON”, although monitored output is “OFF”.
Solenoid valve power supply relay output is “OFF”, although monitored output is “ON”.
ESP ® control module (solenoid valve) power supply circuit
ESP ® control module ground circuit
ESP ® control module
Circuit Diagram
[A]:
ESP ® control module connector (View: [a])
2.
Relay box
6.
Solenoid valve
A1:
Solenoid valve power supply circuit
3.
“ABS SOL” fuse
7.
CPU
B1:
ESP ® control module ground circuit
4.
ESP ® control module
1.
Lead to battery
5.
Solenoid valve power supply relay
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
DTC check
Perform
DTC Check
.
Is DTC C1057 detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Solenoid valve power supply circuit and ESP® control module ground circuit check
Check solenoid valve power supply circuit and ESP ® control module ground circuits.
Is check result OK?
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0A4604033 - DTC C1065
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604033.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check
- AENLSB0A4604018 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604018.xml | DTC C1016

Content:
DTC C1065
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1065: Brake Light Relay Circuit Failure
Inconsistency between input voltage to brake light switch and monitored status continues for longer than specified time.
Brake light switch
Brake light switch circuit
ESP ® control module
Circuit Diagram
[A]:
ESP ® control module connector (View: [a])
B2:
Brake light signal circuit
2.
Brake light switch
A1:
Brake light switch power supply circuit
C1:
Brake light switch ground circuit
3.
ESP ® control module
B1:
Brake light drive circuit
1.
“STOP” fuse
4.
Brake light
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
DTC check
Perform
DTC Check
.
Is DTC C1016 detected?
Go to
DTC C1016
.
Go to Step 3.
Brake light switch operation check
Check brake light switch for operation by using “Brake Light Relay” function in “Active Test” mode on SUZUKI scan tool.
Is check result OK?
Intermittent trouble.
Go to Step 4.
Brake light switch power supply circuit check
With ignition “OFF”, disconnect brake light switch connector.
Check for proper terminal connection to brake light switch connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and “C1” circuits are battery voltage.
Is check result OK?
Go to Step 6.
Go to Step 5.
Brake light switch ground circuit check
Check that voltage between “A1” circuit and ground is battery voltage.
Is check result OK?
Repair or replace “C1” circuit.
Repair or replace “A1” circuit.
Brake light drive circuit check
With ignition “OFF”, disconnect “E09” connector.
Check for proper terminal connection to “E09” connector.
If connection is OK, check the following points.
Resistance of “B1” circuit: less than 1 Ω
Resistance between “B1” circuit and ground: infinity
Resistance between “B1” circuit terminal and each terminal at brake light switch connector: infinity
Is check result OK?
Go to Step 7.
Repair or replace defective wire harness.
Brake light signal circuit check
Check the following points.
Resistance of “B2” circuit: less than 1 Ω
Resistance between “B2” circuit terminal and each terminal at brake light switch connector: infinity
Voltage of “B2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 8.
Repair or replace defective wire harness.
Brake light switch check
Check brake light switch.
Is check result OK?
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Replace brake light switch.

---

## AENLSB0A4604034 - DTC C1069
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604034.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check

Content:
DTC C1069
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1069: Steering Angle Sensor Specification Unregistered
Steering angle sensor detects unconfirmed failure.
ESP ® control module
Lighting and turn signal switch
DTC Troubleshooting
DTC check
Replace lighting and turn signal switch.
Perform
DTC Check
.
Is DTC C1069 detected?
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.
End.

---

## AENLSB0A4604035 - DTC C1071
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604035.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check

Content:
DTC C1071
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1071: ESP ® Control Module Internal Failure
ESP ® control module internal failure is detected.
ESP ® control module power supply circuit
ESP ® control module ground circuit
ESP ® control module
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
ESP® control module power supply and ground circuit check
Check ESP ® control module power supply and ground circuits.
Is check result OK?
Replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0A4604036 - DTC C1074 / C1075 / C1076 / C1078
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604036.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check

Content:
DTC C1074 / C1075 / C1076 / C1078
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1074: G Sensor Calibration
Yaw rate / G sensor calibration is not completed.
Yaw rate / G sensor calibration is incomplete
ESP ® control module
C1075: Steering Angle Sensor Calibration
Steering angle sensor calibration is not completed.
Lighting and turn signal switch
Steering angle sensor calibration is incomplete
ESP ® control module
C1076: Master Cylinder Pressure Sensor Calibration Incomplete
Brake master cylinder pressure sensor calibration is not completed.
Brake master cylinder pressure sensor calibration is not completed
ESP ® control module
C1078: Lateral G Sensor in Yaw Rate / G Sensor Assembly Calibration Incomplete
Lateral G sensor in yaw rate / G sensor assembly calibration is not completed.
Yaw rate / G sensor calibration is not completed
ESP ® control module
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
DTC check
Perform
DTC Check
.
Is other DTC(s) than C1074, C1075, C1076 and C1078 detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Sensor calibration
Calibrate all sensors.
Perform
DTC Check
.
Is DTC C1074, C1075, C1076 and/or C1078 still detected?
DTC C1074, C1076 and C1078: Replace ESP ® hydraulic unit / control module assembly and recheck DTC.
DTC C1075: Replace lighting and turn signal switch and recheck DTC. If DTC C1075 is still detected, replace ESP ® hydraulic unit / control module assembly and recheck DTC.
Lighting and turn signal switch:
ESP ® hydraulic unit / control module assembly:
End.

---

## AENLSB0A4604037 - DTC C1090
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604037.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check

Content:
DTC C1090
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1090: ECM Detect Rolling Counter Failure From ESP ® Control Module
ESP ® control module sends invalid CAN data to ECM.
CAN communication circuit
ECM
ESP ® control module
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
DTC check
Perform
DTC Check
.
Is other DTC(s) than C1090 detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
DTC check for ECM
Check ECM for DTC.
K14C model:
Is DTC U0073 or U0121 detected?
Go to troubleshooting for applicable DTC.
Go to Step 4.
CAN communication circuit check
Check CAN communication circuit between ECM and ESP ® control module referring to “Troubleshooting for Communication Bus Off” in Section 10H.
K14C model:
Is check result OK?
Replace ECM and recheck DTC. If DTC C1090 is still detected, replace ESP ® hydraulic unit / control module assembly and recheck DTC.
ECM
K14C model:
ESP ® hydraulic unit / control module assembly:
Repair or replace defective wire harness.

---

## AENLSB0A4604038 - DTC C1091 / C1094
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604038.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check

Content:
DTC C1091 / C1094
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1091: CAN Invalid Data from ECM
DTC concerned with ECM is detected.
CAN communication circuit
Engine control system
ECM
ESP ® control module
C1094: Torque Request Reject Status
ESP ® control module receives invalid CAN data from ECM (about engine torque control).
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
DTC check
Perform
DTC Check
.
Is other DTC(s) than C1091 or C1094 detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
DTC check for ECM
Check ECM for DTC.
K14C model:
Is DTC U0073 or U0121 detected?
Go to troubleshooting for applicable DTC.
Go to Step 4.
CAN communication circuit check
Check CAN communication circuit between ECM and ESP ® control module referring to “Troubleshooting for Communication Bus Off” in Section 10H.
K14C model:
Is check result OK?
Replace ECM and recheck DTC. If DTC C1091 or C1094 is still detected, replace ESP ® hydraulic unit / control module assembly and recheck DTC.
ECM
K14C model:
ESP ® hydraulic unit / control module assembly:
Repair or replace defective wire harness.

---

## AENLSB0A4604039 - DTC C1092
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604039.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > K14C || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check
- AENLSB0AA814004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814004.xml | Troubleshooting for Communication Bus Off:CAN (K14C Model)

Content:
DTC C1092
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1092: CAN Invalid Data from TCM
DTC concerned with TCM is detected.
CAN communication circuit
A/T system
TCM
ESP ® control module
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
DTC check
Perform
DTC Check
.
Is other DTC(s) than C1092 detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
DTC check for TCM
Check TCM for DTC.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 4.
CAN communication circuit check
Check CAN communication circuit between TCM and ESP ® control module referring to
Troubleshooting for Communication Bus Off:CAN (K14C Model)
.
Is check result OK?
Replace TCM and recheck DTC. If DTC C1092 is still detected, replace ESP ® hydraulic unit / control module assembly and recheck DTC.
TCM:
ESP ® hydraulic unit / control module assembly:
Repair or replace defective wire harness.

---

## AENLSB0A4604040 - DTC C1099
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604040.xml
Tree scopes: dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check

Content:
DTC C1099
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1099: Invalid Data Received From ENG A-STOP Control Module
DTC concerned with ECM is detected.
CAN communication circuit
ECM
ESP ® control module
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
DTC check
Perform
DTC Check
.
Is other DTC(s) than C1099 detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
DTC check for ECM
Check ECM for DTC.
Is any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 4.
CAN communication circuit check
Check CAN communication circuit between ECM and ESP ® control module referring to
.
Is check result OK?
Replace ECM and recheck DTC. If DTC C1099 is still detected, replace ESP ® hydraulic unit / control module assembly and recheck DTC.
ECM:
ESP ® hydraulic unit / control module assembly:
Repair or replace defective wire harness.

---

## AENLSB0A4604041 - DTC C10A0 / C10A1 / C10A3
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604041.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check

Content:
DTC C10A0 / C10A1 / C10A3
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C10A0: Invalid Data Received From RBS Control Module
ESP ® control module received invalid CAN data (counter value) from RBS control module.
Adaptive cruise control system
RBS control module
ESP ® control module
C10A1: Invalid Data Received From RBS Control Module
ESP ® control module received invalid CAN data (sum value) from RBS control module.
C10A3: Invalid Auto Brake Request Received From RBS Control Module
ESP ® control module received automatic brake activation demand for longer than specified time continuously.
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
DTC check
Perform
DTC Check
.
Is other DTC(s) than C10A0, C10A1 and C10A3 detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
DTC check for RBS control module
Check RBS control module for DTC.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace RBS control module and recheck DTC.
If DTC C10A0, C10A1 or C10A3 is still detected, replace ESP ® hydraulic unit / control module assembly and recheck DTC.

---

## AENLSB0A4604042 - DTC C10A7 / C10A8 / C10A9
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604042.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check
- AENLSB0A4604005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604005.xml | DTC Check

Content:
DTC C10A7 / C10A8 / C10A9
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C10A7: Invalid Data Received From DSBS Control Module
ESP ® control module received invalid CAN data (counter value) from dual sensor brake support control module.
DSBS system
Adaptive cruise control system
Dual sensor brake support control module
ESP ® control module
C10A8: Invalid Data Received From DSBS Control Module
ESP ® control module received invalid CAN data (sum value) from dual sensor brake support control module.
C10A9: Invalid Auto Brake Request Received From DSBS Control Module
ESP ® control module received automatic brake activation demand for longer than specified time continuously.
DTC Troubleshooting
Was “ESP ® System Check” performed?
Go to Step 2.
Go to
ESP® System Check
.
DTC check
Perform
DTC Check
.
Is other DTC(s) than C10A7, C10A8 and C10A9 detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
DTC check for dual sensor brake support control module
Check dual sensor brake support control module for DTC.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace dual sensor brake support control module and recheck DTC.
If DTC C10A7, C10A8 or C10A9 is still detected, replace ESP ® hydraulic unit / control module assembly and recheck DTC.

---

## AENLSB0A4604043 - DTC U0073
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604043.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814004.xml | Troubleshooting for Communication Bus Off:CAN (K14C Model)

Content:
DTC U0073
K14C model: Refer to
Troubleshooting for Communication Bus Off:CAN (K14C Model)
.
.

---

## AENLSB0A4604044 - DTC U0100
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604044.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0100
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0A4604045 - DTC U0101
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604045.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > K14C || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0101
Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.

---

## AENLSB0A4604046 - DTC U0126
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604046.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0126
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0A4604047 - DTC U0140
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604047.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0140
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0A4604048 - DTC U1082
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604048.xml
Tree scopes: dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC U1082
Refer to
.

---

## AENLSB0A4604049 - DTC U108A
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604049.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U108A
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0A4604050 - DTC U1093
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604050.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures > Models > K14C || dtc: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U1093
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0A4604051 - ESP&#174; Control Module Power Supply and Ground Circuit Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604051.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references: none

Content:
ESP® Control Module Power Supply and Ground Circuit Check
Circuit Diagram
[A]:
ESP ® control module connector (View: [a])
1.
Lead to battery
6.
J/B
A1:
Solenoid valve power supply circuit
2.
Ignition power supply
7.
“ABS” fuse
A2:
Pump motor power supply circuit
3.
Relay box
8.
ESP ® control module
B1:
Ignition power supply circuit
4.
“ABS SOL” fuse
9.
Lead to solenoid valve power supply relay
C1:
ESP ® control module ground circuit
5.
“ABS MOT” fuse
10.
Lead to pump motor relay
Circuit Description
When the ignition is set “ON”, power is supplied to ESP ® control module. Then power is supplied to pump motor and solenoid valve in other line by the switching function in ESP ® control module.
Troubleshooting
Fuse check
Are “ABS SOL” fuse, “ABS MOT” fuse and “ABS ” fuse in good condition?
Go to Step 2.
Replace fuse and check for short circuit to ground.
Ignition power supply circuit check
Check that ignition is “OFF”.
Disconnect “E09” connector.
Check for proper terminal connection to “E09” connector.
If connection is OK, set ignition “ON”.
Check that voltage between “B1” circuit and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Pump motor and solenoid valve power supply circuit check
Set ignition “OFF”.
Check the following points.
Voltage between “A1” circuit and ground is battery voltage.
Voltage between “A2” circuit and ground is battery voltage.
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
ESP® control module ground circuit check
Check that ignition is “OFF”.
Check that resistance between “C1” circuit and ground is less than 1 Ω.
Is check result OK?
ESP ® control module power supply and ground circuits are in good condition.
Repair or replace defective wire harness.

---

## AENLSB0A4604A01 - ESP&#174; warning light remains lit for more than 2 seconds after setting ignition “ON”
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604A01.xml
Tree scopes: symptoms: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references: none

Content:
ESP® warning light remains lit for more than 2 seconds after setting ignition “ON”
ESP ® warning light remains lit for more than 2 seconds after setting ignition “ON”
Malfunctioning ESP ® function
Perform ESP ® system check.
Malfunctioning ESP ® warning light circuit
Check ESP ® warning light circuit.

---

## AENLSB0A4604A02 - ABS warning light remains lit for more than 2 seconds after setting ignition “ON”
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604A02.xml
Tree scopes: symptoms: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references: none

Content:
ABS warning light remains lit for more than 2 seconds after setting ignition “ON”
ABS warning light remains lit for more than 2 seconds after setting ignition “ON”
Malfunctioning ESP ® function
Perform ESP ® system check.
Malfunctioning ABS warning light circuit
Check ABS warning light circuit.

---

## AENLSB0A4604A03 - ABS and/or ESP&#174; warning light does not turn ON after setting ignition “ON”
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604A03.xml
Tree scopes: symptoms: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references: none

Content:
ABS and/or ESP® warning light does not turn ON after setting ignition “ON”
ABS and/or ESP ® warning light does not turn ON after setting ignition “ON”
Malfunctioning ESP ® function
Perform ESP ® system check.
Malfunctioning CAN communication system function
Check CAN communication system.
K14C model:
Malfunctioning ESP ® warning light circuit
Check ESP ® warning light circuit.
Malfunctioning ABS warning light circuit
Check ABS warning light circuit.

---

## AENLSB0A4604A04 - ABS warning light blinks
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604A04.xml
Tree scopes: symptoms: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references: none

Content:
ABS warning light blinks
ABS warning light blinks
Brake system is not filled with brake fluid
Fill brake system with brake fluid.

---

## AENLSB0A4604A05 - EBD warning light (Brake warning light) remains lit for more than 2 seconds after setting ignition “ON”
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604A05.xml
Tree scopes: symptoms: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references: none

Content:
EBD warning light (Brake warning light) remains lit for more than 2 seconds after setting ignition “ON”
EBD warning light (Brake warning light) remains lit for more than 2 seconds after setting ignition “ON”
Parking brake applied
Release parking brake and check that EBD warning light (brake warning light) turns OFF.
Insufficient amount of brake fluid
Check brake fluid level.
Faulty parking brake switch circuit and/or brake fluid level switch circuit
Check BCM and its circuit.
Faulty parking brake switch and/or brake fluid level switch
Check parking brake switch and/or brake fluid level switch.
Parking brake switch:
Brake fluid level switch:
Malfunctioning ESP ® function
Perform ESP ® system check.
Faulty ESP ® control module power supply and ground circuits
Check ESP ® control module power supply and ground circuits.
Malfunctioning CAN communication system
Check CAN communication system.
K14C model:
Faulty BCM
Check BCM and its circuit.
Faulty ESP ® control module
Replace ESP ® control module.
Malfunctioning EBD warning light circuit
Check EBD warning light circuit.

---

## AENLSB0A4604A06 - EBD warning light (Brake warning light) does not turn ON after setting ignition “ON”
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604A06.xml
Tree scopes: symptoms: 4 - Brakes > Electronic Stability Program > Diagnostic Information and Procedures
Outgoing references: none

Content:
EBD warning light (Brake warning light) does not turn ON after setting ignition “ON”
EBD warning light (Brake warning light) does not turn ON after setting ignition “ON”
Malfunctioning ESP ® function
Perform ESP ® system check.
Malfunctioning CAN communication system
Check CAN communication system.
K14C model:
Malfunctioning EBD warning light circuit
Check EBD warning light circuit.

---

## AENLSB0A4606001 - ESP&#174; Hydraulic Unit Operation Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606001.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Repair Instructions
Outgoing references: none

Content:
ESP® Hydraulic Unit Operation Check
A false diagnosis may result if operation check of the ESP ® hydraulic unit is performed without satisfying all of the specified conditions below.
Check that all the following conditions are met before performing operation check of the ESP ® hydraulic unit.
Battery voltage is 12 V or more.
No air is trapped in the brake system.
Brakes do not drag.
No DTC is stored in ESP ® hydraulic unit / control module.
Operation check must be performed by 2 persons.
DTC C1074, C1075, C1076 and C1078 are detected, and ESP ® warning light and ABS warning light light up when ESP ® hydraulic unit / control module assembly (hydraulic unit) is replaced. Perform ESP ® hydraulic unit operation check after sensor calibration. (Sensor calibration of ESP ® )
Lighting or blinking of warning light stops when ignition is set “ON” after completing ESP ® hydraulic unit operation check.
Check that ignition is “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Hoist vehicle until tire can be rotated.
Set transmission to neutral and release parking brake.
Set ignition “ON”, and select “Depressurization check” / “Pressurization check” in “Hydraulic control test” under “Utility” mode of SUZUKI scan tool.
Refer to Operator’s Manual of SUZUKI scan tool for further details.
Perform the following checks with help of another person.
Depressurization check
Step on brake pedal and then select testing wheel by SUZUKI scan tool and the wheel should be turned by another person’s hand. At this time, check whether the wheel rotates freely due to brake depressurization.
Pressurization check
Step off brake pedal and then select testing wheel by SUZUKI scan tool and the wheel should be turned by another person’s hand. At this time, check whether the wheel is locked due to brake pressurization.
Pressurization / Depressurization by SUZUKI scan tool is available for 0.5 seconds.
Check all 4 wheels respectively.
Check that ABS warning light and ESP ® warning light are turned off after switching ignition from “OFF” to “ON”. Check for DTC and repair problem if lights are still lit.
If any faulty condition is found in Step 6) – 7), replace ESP ® hydraulic unit /control module assembly.
After completing the check, check that ignition is “OFF” and then disconnect SUZUKI scan tool from DLC.

---

## AENLSB0A4606002 - Sensor Calibration
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606002.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Repair Instructions
Outgoing references: none

Content:
Sensor Calibration
If any DTC other than C1074, C1075, C1076 and C1078 is detected, repair the cause of the detected DTC first.
ESP ® hydraulic unit / control module assembly has reference values for master cylinder pressure sensor and yaw rate / G sensor stored. Also steering angle sensor has its own reference point stored.
Traction control and stability control are performed according to the variation of these sensors from their reference points. If a reference value is lost or shifted due to the following maintenance, calibration is needed.
Sensor
Condition requiring calibration
Steering angle sensor
Replacement of lighting and turn signal switch (C1075).
Replacement of ESP ® hydraulic unit / control module assembly (C1075).
Master cylinder pressure sensor
Replacement of ESP ® hydraulic unit / control module assembly (C1076).
Yaw rate / G sensor
Replacement or removal of ESP ® hydraulic unit / control module assembly (C1074 / C1078).
All sensors are calibrated at once when calibration is performed.
Park vehicle on level surface, apply parking brake, set steering wheel in straight ahead position, stop engine and release brake pedal.
Keep condition of Step 1) until sensor calibration is completed, in order to calibrate sensor correctly.
Connect SUZUKI scan tool to DLC (1) with ignition “OFF”.
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON” and check that no DTC is detected except C1074, C1075, C1076 and C1078. If any DTC is detected, repair or replace trouble area.
Select menu “Sensor Calibration” under “Utility” mode of SUZUKI scan tool and calibrate sensor with ignition “ON”. Refer to Operator’s Manual of SUZUKI scan tool for further details.
After completing the calibration, check DTC(s) is not stored in ESP ® hydraulic unit / control module assembly.
Check that ignition is “OFF” and then disconnect SUZUKI scan tool from DLC.

---

## AENLSB0A4606003 - ESP&#174; Hydraulic Unit / Control Module Assembly Components
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606003.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Repair Instructions
Outgoing references: none

Content:
ESP® Hydraulic Unit / Control Module Assembly Components
[A]:
LHD
4.
To master cylinder primary
9.
To Left-rear brake
[B]:
RHD
5.
To master cylinder secondary
:
16 N·m (1.6 kgf-m, 12.0 lbf-ft)
1.
ESP ® hydraulic unit / control module assembly
6.
To Right-front brake
:
21 N·m (2.1 kgf-m, 15.5 lbf-ft)
2.
Actuator bracket
7.
To Left-front brake
:
9.0 N·m (0.92 kgf-m, 7.0 lbf-ft)
3.
Actuator mount bolt
8.
To Right-rear brake
:
26 N·m (2.7 kgf-m, 19.5 lbf-ft)

---

## AENLSB0A4606004 - ESP&#174; Hydraulic Unit / Control Module Assembly On-Vehicle Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606004.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Repair Instructions
Outgoing references: none

Content:
ESP® Hydraulic Unit / Control Module Assembly On-Vehicle Inspection
Check ESP ® hydraulic unit / control module assembly (1) for dents, crack, deformation and leakage.
Check actuator bracket (2) and its mounting surface for dents, crack and deformation.
Check actuator mount bolts and actuator bracket nuts for looseness.
Check ESP ® control module connector (ESP ® control module side and harness side) and its connector lock mechanism for damage or crack.
Check connector terminals for bend, corrosion or rust.
Repair or replace defective parts.

---

## AENLSB0A4606005 - ESP&#174; Hydraulic Unit / Control Module Assembly Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606005.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Repair Instructions > Models > K14C
Outgoing references:
- AENLSB0A4606003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606003.xml | ESP® Hydraulic Unit / Control Module Assembly Components
- AENLSB0A4606004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606004.xml | ESP® Hydraulic Unit / Control Module Assembly On-Vehicle Inspection

Content:
ESP® Hydraulic Unit / Control Module Assembly Removal and Installation
ESP® Hydraulic Unit / Control Module Assembly Components
ESP® Hydraulic Unit / Control Module Assembly On-Vehicle Inspection
Performing the following prohibited operations will affect the original performance of ESP ® hydraulic unit / control module assembly.
Do not disassemble the ESP ® hydraulic unit / control module assembly.
Do not loosen the blind plug.
Do not remove the motor.
Regarding ESP ® hydraulic unit / control module assembly removal and installation, check specified torque and do not use impact tool.
Use care not to allow dust to enter ESP ® hydraulic unit / control module.
Do not place ESP ® hydraulic unit / control module on its side or upside down.
Do not give an impact to hydraulic unit.
Brake fluid is extremely damaging to painted surfaces. If brake fluid contacts painted surfaces, immediately wipe it off and flush the surfaces with water thoroughly.
The bracket of the ESP ® hydraulic unit / control module assembly may have some burrs at the edge and may damage or deform the bushing, resulting in abnormal operation of the ESP ® system.
Be careful not to scratch bushings with the burr of the bracket when removing / installing the ESP ® hydraulic unit / control module assembly from / to the bracket.
Removal
Remove battery and battery tray.
K14C model:
Disconnect ESP ® control module connector (1) by pulling down the lock lever (2).
[a]:
Pull down to unlock
Loosen flare nuts (1) using special tool and disconnect brake pipes from ESP ® hydraulic unit / control module assembly (2).
Put bleeder plug cap or the like onto pipe to prevent fluid from spilling.
(A)
09950–78220
Remove actuator mount bolt (3).
Remove ESP ® hydraulic unit / control module assembly from actuator bracket.
Remove actuator bracket, if necessary.
Installation
Reverse removal procedure noting the following points.
Tighten brake pipe flare nuts (1), actuator mount bolt (2) and actuator bracket nuts (3) (if removed) to specified torque.
Brake pipe flare nut (M10)
a
16
1.6
12.0
Brake pipe flare nut (M12)
b
21
2.1
15.5
Actuator mount bolt
c
9.0
0.92
7.0
Actuator bracket nut
d
26
2.7
19.5
Bleed brake system.
Check for leakage of brake fluid and perform ESP ® hydraulic unit operation check.

---

## AENLSB0A4606006 - Front and Rear Wheel Speed Sensor On-Vehicle Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606006.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Repair Instructions
Outgoing references: none

Content:
Front and Rear Wheel Speed Sensor On-Vehicle Inspection
Incorrect voltage or mis-connection will damage the wheel speed sensor.
Check that the power supply voltage and test connections are both correct before connecting battery.
Output Voltage Inspection
Disconnect negative (–) cable at battery.
Hoist vehicle until tire can be rotated.
Disconnect wheel speed sensor connector (1).
Set up measuring devices as shown in figure.
[A]:
Wheel speed sensor connector (View: [a])
2.
Resistance (100 Ω)
3.
Power supply (12 V)
Measure voltage at both ends of resistance without wheel rotation. If check result is not as specified, check sensor, mating encoder and their installation conditions.
Voltage at resistance (100 Ω) without wheel rotation
600 to 800 mV or 1200 to 1600 mV
Measure voltage at both ends of resistance with rotating wheel. Check that high (1) and low (2) voltages are as specified. Check that waveform is not discord.
Voltage at resistance (100 Ω) with wheel rotating
High voltage: 1200 to 1600 mV
Low voltage: 600 to 800 mV

---

## AENLSB0A4606007 - Front Wheel Speed Sensor Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606007.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Repair Instructions
Outgoing references:
- AENLSB0A4606006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606006.xml | Front and Rear Wheel Speed Sensor On-Vehicle Inspection
- AENLSB0A4606009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606009.xml | Front and Rear Wheel Speed Sensor Inspection

Content:
Front Wheel Speed Sensor Removal and Installation
Front and Rear Wheel Speed Sensor On-Vehicle Inspection
Removal
Disconnect negative (–) cable at battery.
Hoist vehicle a little and remove front wheel.
Remove front fender lining.
Remove clips (1) and grommets (2), and disconnect front wheel speed sensor connector (3).
Remove front wheel speed sensor bolt (4).
Remove front wheel speed sensor (5) from steering knuckle.
Installation
Front and Rear Wheel Speed Sensor Inspection
Reverse removal procedure noting the following points.
Check that no iron powder is stuck to sensing area of wheel speed sensor (1).
Tighten front wheel speed sensor bolt (2) to specified torque.
Front wheel speed sensor bolt
a
11
1.1
8.5
Check that there is no space between front wheel speed sensor and steering knuckle (3).
[A]:
OK
[B]:
NG

---

## AENLSB0A4606008 - Rear Wheel Speed Sensor Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606008.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Repair Instructions
Outgoing references:
- AENLSB0A4606006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606006.xml | Front and Rear Wheel Speed Sensor On-Vehicle Inspection
- AENLSB0A4606009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606009.xml | Front and Rear Wheel Speed Sensor Inspection

Content:
Rear Wheel Speed Sensor Removal and Installation
Front and Rear Wheel Speed Sensor On-Vehicle Inspection
Removal
Disconnect negative (–) cable at battery.
Remove rear quarter inner lower trim.
Hoist vehicle a little and remove rear wheel.
Disconnect rear wheel speed sensor connector (1).
Remove grommets (2) and clips (3).
Remove rear wheel hub assembly.
Remove rear wheel speed sensor (1) from rear wheel hub assembly.
Installation
Front and Rear Wheel Speed Sensor Inspection
Reverse removal procedure noting the following points.
Check that no iron powder is stuck to sensing area of wheel speed sensor (2).
Tighten rear wheel speed sensor bolt (1) to specified torque.
When installing rear wheel speed sensor, damaged O-ring may cause water to enter into bearing.
Be careful not to damage O-ring when installing rear wheel speed sensor.
Rear wheel speed sensor bolt
a
11
1.1
8.5
Check that there is no space between rear wheel speed sensor and rear wheel hub assembly (3).
[A]:
OK
[B]:
NG

---

## AENLSB0A4606009 - Front and Rear Wheel Speed Sensor Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606009.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Repair Instructions
Outgoing references:
- AENLSB0A4606007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606007.xml | Front Wheel Speed Sensor Removal and Installation
- AENLSB0A4606008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606008.xml | Rear Wheel Speed Sensor Removal and Installation

Content:
Front and Rear Wheel Speed Sensor Inspection
Front Wheel Speed Sensor Removal and Installation
Rear Wheel Speed Sensor Removal and Installation
Replace or clean wheel speed sensor if sensing area of front and rear wheel speed sensor(s) is damaged or covered with iron powder.

---

## AENLSB0A4606010 - Front Wheel Speed Sensor Encoder Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606010.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Repair Instructions
Outgoing references:
- AENLSB0A4606012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606012.xml | Front and Rear Wheel Speed Sensor Encoder Inspection
- AENLSB0A3116007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A3116007.xml | Front Wheel Hub Assembly and Steering Knuckle Removal and Installation:Front

Content:
Front Wheel Speed Sensor Encoder Removal and Installation
Front and Rear Wheel Speed Sensor Encoder Inspection
Front wheel speed sensor encoder is included in front wheel hub assembly. If front wheel speed sensor encoder needs to be replaced, replace front wheel hub assembly.
For removal and installation of front wheel speed sensor encoder (included in front wheel hub assembly), refer to
Front Wheel Hub Assembly and Steering Knuckle Removal and Installation:Front
.

---

## AENLSB0A4606011 - Rear Wheel Speed Sensor Encoder Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606011.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Repair Instructions
Outgoing references:
- AENLSB0A4606012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606012.xml | Front and Rear Wheel Speed Sensor Encoder Inspection
- AENLSB0A3126003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A3126003.xml | Rear Wheel Hub Assembly Removal and Installation:Rear

Content:
Rear Wheel Speed Sensor Encoder Removal and Installation
Front and Rear Wheel Speed Sensor Encoder Inspection
Rear wheel speed sensor encoder is included in rear wheel hub assembly. If rear wheel speed sensor encoder needs to be replaced, replace rear wheel hub assembly.
For removal and installation of rear wheel speed sensor encoder (included in rear wheel hub assembly), refer to
Rear Wheel Hub Assembly Removal and Installation:Rear
.

---

## AENLSB0A4606012 - Front and Rear Wheel Speed Sensor Encoder Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606012.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Repair Instructions
Outgoing references:
- AENLSB0A4606010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606010.xml | Front Wheel Speed Sensor Encoder Removal and Installation
- AENLSB0A4606011 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606011.xml | Rear Wheel Speed Sensor Encoder Removal and Installation

Content:
Front and Rear Wheel Speed Sensor Encoder Inspection
Front Wheel Speed Sensor Encoder Removal and Installation
Rear Wheel Speed Sensor Encoder Removal and Installation
Wheel speed sensor encoder is included in wheel hub assembly. If wheel speed sensor encoder needs to be replaced, replace wheel hub assembly.
Check front and rear wheel speed sensor encoders for crack, damage, or deformation.
Replace wheel hub assembly if defective.

---

## AENLSB0A4606013 - Brake Master Cylinder Pressure Sensor On-Vehicle Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606013.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Repair Instructions
Outgoing references: none

Content:
Brake Master Cylinder Pressure Sensor On-Vehicle Inspection
Check basic brake system other than ESP ® .
Check that ignition is “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON” and select “Data List” of SUZUKI scan tool.
Refer to Operator’s Manual of SUZUKI scan tool for further details.
Check “Master Cyl Press” under “Data List” of SUZUKI scan tool with brake pedal released.
If check result is not as specified, replace ESP ® hydraulic unit / control module assembly.
Master cylinder pressure specification
Brake pedal released: 0 ± 0.9 MPa (0 ± 9.2 kgf/cm 2 , 0 ± 131 psi)
Hoist vehicle and remove left-side front wheel.
Remove bleeder plug from left-side front caliper and install special tool to left-side front caliper.
(A)
09956–02311
With brake pedal depressed up to special tool gauge reading 10 MPa (102.0 kgf/cm 2 , 1450 psi), check “Master Cyl Press” under “Data List” of SUZUKI scan tool.
If check result displayed on SUZUKI scan tool is not as specified, replace ESP ® hydraulic unit / control module assembly.
Master cylinder pressure specification
Brake pedal depressed 10 MPa (102.0 kgf/cm 2 , 1450 psi): 10 ± 1.2 MPa (102.0 ± 12.2 kgf/cm 2 , 1450 ± 174 psi)
After completing the check, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.
Remove special tool, tighten bleeder plug and bleed brake system.
Bleeder plug
8.4
0.86
6.5

---

## AENLSB0A4606014 - Steering Angle Sensor On-Vehicle Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606014.xml
Tree scopes: bookmarks: 4 - Brakes > 4F - Electronic Stability Program > Repair Instructions
Outgoing references: none

Content:
Steering Angle Sensor On-Vehicle Inspection
Connect SUZUKI scan tool to DLC (1) with ignition “OFF”.
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON” and select “Data List” of SUZUKI scan tool.
Refer to Operator’s Manual of SUZUKI scan tool for further details.
Check “Steering Angle Sensor” under “Data List” of SUZUKI scan tool in the following steering wheel conditions.
Front wheels are in straight ahead position.
Rotate steering wheel once clockwise from straight ahead position.
Rotate steering wheel once counterclockwise from straight ahead position.
Replace lighting and turn signal switch if check result is not as specified.
Steering angle specification
Vehicle condition
Steering angle
Front wheels in straight ahead position
0 ± 3°
Rotate steering wheel once clockwise
360 ± 3°
Rotate steering wheel once counterclockwise
–360 ± 3°

---
