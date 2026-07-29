# Content Chunk 0018

Plain-text content extracted from source files with relationship metadata.

## AENLSB0A6301003 - Description of Lane Departure Prevention Function
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6301003.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > General Description
Outgoing references:
- AENLSB0AAA11003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA11003.xml | Description of Dual Sensor Brake Support Function:Dual Sensor Brake Support

Content:
Description of Lane Departure Prevention Function
P/S control module controls lane departure prevention. For the details, refer to “Lane Departure Prevention Function” under
Description of Dual Sensor Brake Support Function:Dual Sensor Brake Support
.

---

## AENLSB0A6301004 - P/S Control Module Input / Output Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6301004.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > General Description
Outgoing references: none

Content:
P/S Control Module Input / Output Diagram
Control item
Control function
Steering assist control
Electric current value to assist steering is determined based on steering torque information from torque sensor and vehicle speed information through CAN communication. This is basic control of P/S system.
Steering return control
Friction in steering system affects return feeling of the steering wheel especially at low speed of the vehicle. The compensation current based on signal on the vehicle status is applied to assist the motor rotation in steering return direction and improves return feeling of the steering wheel.
Steering converging control
At high speed running, steering damping performance becomes worse. Therefore, the compensation current is supplied for improvement of vehicle high speed stability.
Maximum electric current limit control
If the steering wheel is kept at fully turned position with engine running, maximum current for full steering assist is continuously being supplied to P/S motor causing the motor and P/S control module to overheat. To prevent this, the control module reduces the current gradually when the maximum current is supplied for specified time continuously.
Steering wheel vibration control
When P/S control module receives “steering vibration request signal” from dual sensor brake support control module through CAN communication, P/S control module drives P/S motor and produces steering vibration for the driver warning.
Lane departure prevention function
When P/S control module receives “camera information” from dual sensor brake support control module through CAN communication, P/S control module drives P/S motor and assists steering force to prevent lane departure.
Fail-safe control
P/S control module is equipped with fail-safe relay in its power supply circuit. When the system is operating normally, the relay is “ON” and the control module can supply electric power to P/S motor. However, once any malfunction is detected by self-diagnosis in P/S control system, the relay is set to “OFF” and the power supply is cut off to stop the power assist system.

---

## AENLSB0A6301005 - OBD System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6301005.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > General Description
Outgoing references:
- AENLSB0A6300001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6300001.xml | Precautions for Diagnosing Trouble
- AENLSB0A6304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304001.xml | P/S System Check

Content:
OBD System Description
The P/S control module has an on-board self-diagnostic function which detects a malfunction in this system. Have full understanding of “OBD System Description” and each item in
Precautions for Diagnosing Trouble
, before executing diagnosis according to
P/S System Check
.
The P/S control module performs on-board diagnosis (self-diagnosis) on the system and operates the P/S warning light (1) as follows.
The P/S warning light turns on when the ignition is “ON” (but the engine at stop) regardless of the condition of the P/S control system. This is only to check if the P/S warning light operates properly.
When the engine is started, on-board diagnosis (self-diagnosis) is performed and the P/S warning light turns off if no trouble is found.
When the P/S control module detects a trouble, the P/S warning light comes on to warn the driver of the trouble. At the same time, a DTC is stored in the module.

---

## AENLSB0A6302001 - P/S System Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6302001.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Schematic and Routing Diagram
Outgoing references:
- AENLSB0A6304033 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304033.xml | Inspection of P/S Control Module and Its Circuits

Content:
P/S System Diagram
1.
P/S control module / motor assembly
8.
Rotation angle sensor exciter circuit
15.
“MTR” fuse
2.
CPU
9.
Rotation angle sensor signal receive circuit
16.
To ignition power supply
3.
CAN driver
10.
Relay box
17.
Combination meter
4.
Torque sensor
11.
“P/S” fuse
18.
P/S warning light
5.
Fail-safe relay
12.
To continuous power supply
19.
Meter driver
6.
P/S motor
13.
J/B
20.
To other control modules by CAN
7.
Rotation angle sensor
14.
“IG1 SIG2” fuse
21.
Torque sensor connector
Terminal Arrangement of P/S Control Module Connector (Viewed from Harness Side)
For circuit name and terminal voltage, refer to
Inspection of P/S Control Module and Its Circuits
.
[A]:
P/S control module connector (View: [a])
[B]:
Torque sensor connector (View: [a])
1.
P/S control module

---

## AENLSB0A6303001 - Power Steering Control System Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6303001.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Component Location
Outgoing references: none

Content:
Power Steering Control System Component Location
The figure shows LHD. For RHD, parts with (*) are installed at the opposite side.
[A]:
DSBS model
5.
BCM
11.
ECM
[B]:
Lane departure prevention model
6.
“MTR” fuse
12.
ESP ® control module
1.
Combination meter
7.
“IG1 SIG2” fuse
13.
Lighting and turn signal switch incorporating steering angle sensor
2.
P/S warning light
8.
P/S control module / motor assembly
14.
Dual sensor brake support control module
3.
“P/S” fuse
9.
Steering column assembly (including P/S control module / motor assembly and torque sensor)
15.
Lane departure prevention switch
4.
Relay box
10.
Steering gear case assembly

---

## AENLSB0A6304001 - P/S System Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304001.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6304001013 -> unresolved | Step 1: Customer Complaint Analysis
- AENLSB0A6304004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304004.xml | DTC Clearance
- AENLSB0A6304001015 -> unresolved | Steps 3 and 4: Visual Inspection
- AENLSB0A6304001015 -> unresolved | Steps 3 and 4: Visual Inspection
- AENLSB0A6104001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6104001.xml | Steering Symptom Diagnosis
- AENLSB0A6304009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304009.xml | P/S System Symptom Diagnosis
- AENLSB0A6304001021 -> unresolved | Step 11: Final Confirmation Test
- AENLSB0A6304003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304003.xml | DTC Check
- AENLSB0A6304004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304004.xml | DTC Clearance
- AENLSB0A6304008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304008.xml | Visual Inspection
- AENLSB0A6304001013 -> unresolved | Step 1: Customer Complaint Analysis
- AENLSB0A6304001014 -> unresolved | Step 2: DTC Check, Record and Clearance
- AENLSB0A6304003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304003.xml | DTC Check
- AENLSB0A6304009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304009.xml | P/S System Symptom Diagnosis
- AENLSB0A0006002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0006002.xml | Intermittent Connection and Poor Contact Inspection

Content:
P/S System Check
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Limit the driving speed permissible in road conditions and regulations.
Refer to the following items for the details of each step.
Customer complaint analysis
Perform
Step 1: Customer Complaint Analysis
.
Was customer complaint analysis performed?
Go to Step 2.
Perform customer complaint analysis.
DTC check, record and clearance
Check for DTC (including pending DTC).
Is there any DTC?
Print DTC or write it down and clear it referring to
DTC Clearance
, and then go to Step 3.
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
Rechecking and record of DTC
Recheck for DTC.
Is there any DTC(s)?
Go to Step 9.
Go to Step 8.
Rechecking and record of DTC
Recheck for DTC.
Is there any DTC(s)?
Go to Step 9.
Go to Step 10.
Steering symptom diagnosis and P/S system symptom diagnosis
Check and repair.
Steering Symptom Diagnosis
P/S System Symptom Diagnosis
Are check and repair complete?
Go to Step 11.
Check and repair defective part, and then go to Step 10.
Troubleshooting for DTC
Check and repair.
Are check and repair complete?
Go to Step 11.
Check and repair defective part, and then go to Step 11.
Intermittent problem check
Check for intermittent problems.
Is there any faulty condition?
Repair or replace defective part, and then go to Step 11.
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
Record details of the problem (failure, complaint) and how it occurred as described by the customer. For this purpose, use of such a questionnaire form shown below will facilitate collecting information for proper analysis and diagnosis. Check if the problem described in “Customer questionnaire” occurs actually in the vehicle if necessary.
(This step should be performed with the customer if possible.)
This form is a standard sample. It should be modified according to conditions characteristic of each market.
Customer questionnaire form (Example)
Step 2: DTC Check, Record and Clearance
Check DTC (current and pending DTC) referring to
DTC Check
.
If DTC is indicated, print or write down the DTC and then clear the DTC referring to
DTC Clearance
.
Steps 3 and 4: Visual Inspection
Visually check P/S warning light for proper operation, connectors for proper condition and each part condition referring to
Visual Inspection
.
Step 5: Trouble Symptom Confirmation
Based on
Step 1: Customer Complaint Analysis
and
Step 2: DTC Check, Record and Clearance
, check trouble symptoms. Also, check trouble symptoms by performing test drive and turning steering wheel fully to right and left with vehicle stopped.
Steps 6 and 7: Rechecking and Record of DTC
Refer to
DTC Check
for checking procedure.
Step 8: Steering Symptom Diagnosis and P/S System Symptom Diagnosis
Perform basic steering system check first.
Near the end of flow, check the parts of the system suspected as a possible cause referring to
P/S System Symptom Diagnosis
and based on symptoms appearing on the vehicle (symptoms obtained through steps of customer complaint analysis, trouble symptom confirmation and/or basic P/S system check). Repair or replace faulty parts.
Step 9: Troubleshooting for DTC
Perform applicable DTC troubleshooting and repair or replace faulty parts.
Step 10: Intermittent Problems Check
Check parts that are prone to cause intermittent problem (e.g. wire harness, connector, etc.), referring to
Intermittent Connection and Poor Contact Inspection
and related circuit of DTC recorded in Step 2.
Step 11: Final Confirmation Test
Check that the problem symptom has disappeared and the P/S system is free from any abnormal conditions. If what has been repaired is related to the DTC, clear the DTC once, perform DTC confirmation procedure and check that no DTC is indicated.

---

## AENLSB0A6304002 - P/S Warning Light Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304002.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6304010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304010.xml | P/S Warning Light Does Not Come ON with Ignition “ON” before Engine Starts
- AENLSB0A6304011 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304011.xml | P/S Warning Light Remains ON Steady after Engine Starts

Content:
P/S Warning Light Check
Set ignition “ON” (without running engine) and check if the P/S warning light (1) comes on. If the P/S warning light does not come on, go to
P/S Warning Light Does Not Come ON with Ignition “ON” before Engine Starts
of the diagnostic flows.
Start engine and check if the P/S warning light turns OFF. If P/S warning light remains ON and no DTC is stored in P/S control module, go to
P/S Warning Light Remains ON Steady after Engine Starts
for troubleshooting.

---

## AENLSB0A6304003 - DTC Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304003.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures > Models > K14C
Outgoing references: none

Content:
DTC Check
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Read DTC according to instructions displayed on SUZUKI scan tool and print it or write it down. Refer to Operator's Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and P/S control module is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
K14C model:
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
K14C model:
Check central gateway control module power supply circuit and ground circuit.
Check P/S control module power circuit and ground circuit.
After completing the check, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0A6304004 - DTC Clearance
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304004.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures > Models > K14C
Outgoing references: none

Content:
DTC Clearance
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Clear DTC according to instructions displayed on SUZUKI scan tool and print it or write it down. Refer to Operator's Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and P/S control module is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
K14C model:
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
K14C model:
Check central gateway control module power supply circuit and ground circuit.
Check P/S control module power circuit and ground circuit.
After completing DTC clearance, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0A6304005 - DTC Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304005.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304001.xml | P/S System Check
- AENLSB0A6304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304001.xml | P/S System Check
- AENLSB0AAA11004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA11004.xml | Operation Table of Indicator Light / Information Display / Buzzer:Dual Sensor Brake Support

Content:
DTC Table
If you do not perform the
P/S System Check
before starting the DTC diagnosis, the diagnosis will show a false result.
Perform
P/S System Check
before starting the diagnosis.
*1: D/C (Driving Cycle) is a duration from engine start to the following engine shutoff.
1 D/C: When a malfunction is detected in 1st driving cycle, DTC is detected as current DTC.
*2: Lane departure prevention system indicator (car pictograph) in the information display is shown in different colors. No indication in OFF state, white for standby in ON state, green for activation in ON state and umber for malfunction in either ON/OFF. Even when the lane departure prevention system is in OFF state, umber may come on for corresponding DTC but white will not appear. (For details, refer to “Operation Table of Information Display” under
Operation Table of Indicator Light / Information Display / Buzzer:Dual Sensor Brake Support
.)
*3: Depending on faulty condition, lane departure prevention indicator is shown differently. No indication, white and green.
DTC
DTC name
DTC detecting condition
D/C *1
P/S warning light
Lane departure prevention warning *2
C1111
Torque Sensor (Main) Circuit Malfunction
Voltage of torque sensor signal (main) circuit is higher than specified value (4.7 V) or lower than specified value (0.3 V) for more than specified time.
1
Lights up
Umber
C1113
Torque Sensor (Main and Sub) Signal Difference
Voltage difference between torque sensor signal (main) circuit and torque sensor signal (sub) circuit remains too large for more than specified time.
1
Lights up
Umber
C1114
Torque Sensor Power Supply (5 V) Circuit Malfunction
Power supply voltage (5 V) for torque sensor circuit is higher than specified value (5.5 V) or lower than specified value (4.5 V) for more than specified time.
1
Lights up
Umber
C1115
Torque Sensor (Sub) Circuit Malfunction
Voltage of torque sensor signal (sub) circuit is higher than specified value (4.7 V) or lower than specified value (0.3 V) for more than specified time.
1
Lights up
Umber
C1131
Rotation Angle Sensor Signal Malfunction
Rotation angle sensor output signal error continues for more than specified period.
1
Lights up
Umber
C1141
P/S Motor Circuit Voltage Malfunction
Measured motor drive circuit voltage is higher than normal voltage by 0.3 V or more, or motor drive circuit is defective.
1
Lights up
Umber
C1142
P/S Motor Circuit Current Malfunction 1
Measured motor drive current is more than target value by 10 A or more.
1
Lights up
Umber
C1143
P/S Motor Circuit Current Too Big
Measured motor drive current is more than 137 A.
1
Lights up
Umber
C1145
P/S Motor Circuit Current Malfunction 2
Target motor drive current is more than 4 A or measured motor drive current is less than 2 A.
1
Lights up
Umber
C1146
P/S Motor Voltage Malfunction
Motor voltage calculated in P/S control module is abnormal.
1
Lights up
Umber
C1152
Fail-Safe Relay Malfunction (Melting Stuck)
Measured voltage at fail-safe relay contact is higher than 5.5 V even though fail-safe relay-off is commanded.
1
Lights up
Umber
C1153
Power Supply Voltage Too Low or Too High
Measured voltage of fail-safe relay contact is lower than 9 V even if engine speed is more than 600 rpm and fail-safe relay ON is commanded, or voltage at fail-safe relay contact is higher than 19.2 V.
1
Lights up
White
C1154
Fail-Safe Relay Malfunction (Contact)
Measured voltage at fail-safe relay contact is lower than 4 V even though fail-safe relay-on is commanded.
1
Lights up
White
C1155
P/S Control Module Internal Failure
P/S control module internal failure.
1
Lights up
Umber
C1160
Assist Map Signal Failure
Assist map data is not set in P/S control module.
1
Lights up
White
C1161
CAN Invalid Data from Vehicle Speed
Invalid vehicle speed data is received from ECM.
1
Lights up
White
C1162
CAN Invalid Data from Engine Speed
Invalid engine speed data is received from ECM.
1
Lights up
White
C1163
CAN Invalid Data from Steering Angle Sensor
Invalid data of steering angle is received from lighting and turn signal switch.
1
Lights up
Umber
C1166
Reliability Defect Of Vehicle Speed Data
Invalid data about vehicle speed reliability is received from ECM.
1
Lights up
White
C116A
Steering Angle Sensor Calibration Incomplete
Incomplete calibration signal of steering angle is received from lighting and turn signal switch.
1
Lights up
White
C1170
Lane Departure Prevention Switch Circuit
P/S control module received ON signal of lane departure prevention switch from dual sensor brake support control module for specified time continuously.
1
Off
White
C1171
Lane Departure Prevention Indication Failure
Display failure of operation state of lane departure prevention in combination meter.
1
Off
White
C1172
Vehicle Speed Data Mismatch
Inconsistency between vehicle speed data from ECM and rear wheel speed data.
1
Off
White
U0073
Control Module Communication Bus Off
Transmitting and receiving error of P/S control module is detected for specified time continuously.
1
Off
White
U0100
Lost Communication With ECM
CAN communication data from ECM cannot be received.
1
Lights up
White
U0121
Lost Communication With ABS / ESP ® Control Module
CAN communication data cannot be received from ESP ® control module.
1
Off
Umber
U0126
Lost Communication With Steering Angle Sensor Module
CAN communication data cannot be received from lighting and turn signal switch.
1
Lights up
Umber
U0140
Lost Communication With Body Control Module
CAN communication data cannot be received from BCM.
1
Off
White
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
CAN communication data cannot be received from combination meter.
1
Off
White
U1082
Lost Communication With ENG A-STOP Control Module
CAN communication data cannot be received from ENG A-STOP control module.
1
Off
*3
U1093
Lost Communication With DSBS Control Module
CAN communication data cannot be received from dual sensor brake support control module.
1
Off
White

---

## AENLSB0A6304006 - Fail-Safe Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304006.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Fail-Safe Table
When any of the following DTCs is detected, P/S control module enters fail-safe mode as long as malfunction continues to exist but that mode is cancelled when the following cancel conditions are met.
DTC
Fail-safe operation
Fail-safe operation cancel condition
C1111
P/S motor and fail-safe relay turned off.
Ignition is set to “OFF”.
C1113
C1114
C1115
C1131
C1141
C1142
C1143
C1145
C1146
C1152
C1153
P/S motor turned off.
If one of the following conditions is met:
Voltage at fail-safe relay contact is higher than 10 V or lower than 18.2 V.
Ignition is set to “OFF”.
C1154
P/S motor turned off.
Recovery from malfunction or ignition is set to “OFF”.
C1155
P/S motor turned off or P/S motor and fail-safe relay turned off.
C1160
Default assist map is applied.
Setting of correct assist map.
C1161
Receiving invalid data, stops steering return control.
Ignition is set to “OFF”.
Receiving invalid data, decreases the assist value to minimum level.
Normal data is received or ignition is set to “OFF”.
C1162
Assist is stopped.
Normal data is received or ignition is set to “OFF”.
C1163
Receiving vehicle information, stops steering return control.
Ignition is set to “OFF”.
C1166
Receiving invalid data, stops steering return control and decreases the assist value to minimum level.
Normal data is received or ignition is set to “OFF”.
C116A
Receiving vehicle information, stops steering return control.
Corrected calibration signal of steering angle is received or ignition is set to “OFF”.
C1170
Stops lane departure prevention control temporarily.
Normal data is received or ignition is set to “OFF”.
C1171
C1172
Ignition is set to “OFF”.
U0073
—
Normal data is received or ignition is set to “OFF”.
U0100
Stops assist control, or decreases the assist value to minimum level and stops steering return control by signal from ECM.
U0121
—
U0126
Receiving vehicle information, stops steering return control.
Ignition is set to “OFF”.
U0140
Stops lane departure prevention control temporarily.
Normal data is received or ignition is set to “OFF”.
U0155
—
U1082
—
U1093
Stops steering wheel vibration function and lane departure prevention control temporarily.

---

## AENLSB0A6304007 - Scan Tool Data
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304007.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures > Models > K14C
Outgoing references: none

Content:
Scan Tool Data
P/S Control Module
If communication between SUZUKI scan tool and P/S control module is not possible, perform the following checks:
Check communication condition between PC and VCI using SUZUKI scan tool function.
Check DLC power circuit and ground circuit
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
K14C model:
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module)
K14C model:
Check central gateway control module power supply circuit and ground circuit.
Check P/S control module power circuit and ground circuit.
*1: Turn steering wheel fully and hold it with force applied.
*2: The voltage and current of motor decrease gradually after few seconds when steering wheel is turned.
Scan tool data
Normal condition / Reference value
Vehicle condition
Battery Voltage
Approx. 12 to 14 V
Engine running at idle speed
Sensor Power Supply
Approx. 5 V
Engine running at idle speed
Sensor (Main) Torque
Approx. ±0 N·m
Engine running at idle speed
Steering wheel at neutral
8.0 to 12.0 N·m
Engine running at idle speed
Vehicle stationary and steering wheel turned fully to right *1
–8.0 to –12.0 N·m
Engine running at idle speed
Vehicle stationary and steering wheel turned fully to left *1
Sensor (Sub) Torque
Approx. ±0 N·m
Engine running at idle speed
Steering wheel at neutral
–8.0 to –12.0 N·m
Engine running at idle speed
Vehicle stationary and steering wheel turned fully to right *1
8.0 to 12.0 N·m
Engine running at idle speed
Vehicle stationary and steering wheel turned fully to left *1
Control Torque
Approx. ±0 N·m
Engine running at idle speed
Steering wheel at neutral
Approx. 7 N·m
Engine running at idle speed
Vehicle stationary and steering wheel turned fully to right *1
Approx. –7 N·m
Engine running at idle speed
Vehicle stationary and steering wheel turned fully to left *1
Target Motor Current
0.0 A
Engine running at idle speed
Steering wheel at neutral
Approx. 50 A
Engine running at idle speed
Vehicle stationary and steering wheel turned fully to right or left *1, *2
Measured MOT Current
0.0 A
Engine running at idle speed
Steering wheel at neutral
Approx. 50 A
Engine running at idle speed
Vehicle stationary and steering wheel turned fully to right or left *1, *2
Vehicle Speed
Approx. 40 km/h
Drive vehicle at 40 km/h using chassis dynamometer or while checking speedometer
Engine Speed
0 rpm
Set ignition “ON”
Specified idle speed
Engine running at idle speed after warming up
IGN Switch Status
ON
Set ignition “ON”
OFF
Other than above condition
System Power Status
ON
Current flowing to P/S control module power supply
OFF
Other than above condition
Torque Sensor Status
ON
Voltage is outputted from P/S control module to torque sensor
OFF
Other then above condition
Fail Safe FET Status
ON
Power steering system operates normally
OFF
Performing fail-safe operation

---

## AENLSB0A6304008 - Visual Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304008.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures > Models > K14C
Outgoing references:
- AENLSB0A1A11001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A11001.xml | Battery Description:K14C
- AENLSB0A0006002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0006002.xml | Intermittent Connection and Poor Contact Inspection
- AENLSB0A6304002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304002.xml | P/S Warning Light Check

Content:
Visual Inspection
Visually check the following parts and systems.
Inspection item
Referring section
Battery
Fluid level, leakage indicator
K14C model:
Battery Description:K14C
Connectors of electric wire harness
Disconnection, friction
Intermittent Connection and Poor Contact Inspection
Fuses
Blowout
—
P/S warning light
Operation
P/S Warning Light Check
Other parts that can be checked visually
—

---

## AENLSB0A6304009 - P/S System Symptom Diagnosis
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304009.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6104001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6104001.xml | Steering Symptom Diagnosis
- AENLSB0A6304035 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304035.xml | Steering Force Check
- AENLSB0A2206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A2206001.xml | Front Wheel Alignment Inspection and Adjustment

Content:
P/S System Symptom Diagnosis
This section describes trouble diagnosis of the P/S system parts whose troubles are not indicated using SUZUKI scan tool. When no malfunction is indicated by SUZUKI scan tool and steering basic parts as described in
Steering Symptom Diagnosis
are all in good condition, check the following power steering system parts which may be possible causes for each trouble symptom of steering.
Perform
Steering Force Check
and
Front Wheel Alignment Inspection and Adjustment
before diagnosis.
Steering wheel feels heavy
Improper installation of steering wheel
Install steering wheel correctly.
Poor performance of torque sensor
Check torque sensor.
Poor performance of P/S motor
Check P/S motor.
Malfunction of steering gear case assembly
Replace steering gear case assembly.
Vehicle speed data provided through CAN communication
Check vehicle speed data.
Steering wheel feels heavy momentarily when turning it to left or right
Malfunction of steering gear case assembly
Replace steering gear case assembly.
Poor recovery from turns
Poor performance of torque sensor
Check torque sensor.
Malfunction of steering gear case assembly
Replace steering gear case assembly.
Vehicle pulls to one side during straight driving
Poor performance of torque sensor
Check torque sensor.
Malfunction of steering gear case assembly
Replace steering gear case assembly.
Abnormal noise
Malfunction of P/S motor (built in steering column assembly)
Replace steering column.

---

## AENLSB0A6304010 - P/S Warning Light Does Not Come ON with Ignition “ON” before Engine Starts
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304010.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures > Models > K14C || symptoms: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814002.xml | CAN DTC (Lost Communication and Communication Bus Off) Table:CAN (K14C Model)

Content:
P/S Warning Light Does Not Come ON with Ignition “ON” before Engine Starts
Circuit Diagram
[A]:
P/S control module connector “E61” (View: [a])
1.
To ignition power supply
6.
CPU
[B]:
P/S control module connector “G10” (View: [a])
2.
J/B
7.
CAN driver
[C]:
Combination meter connector “G241” (View: [a])
3.
“IG1 SIG2” fuse
8.
Combination meter
A1:
Combination meter power supply circuit
4.
“MTR” fuse
9.
P/S warning light
A2:
Combination meter ground circuit
5.
P/S control module / motor assembly
10.
Meter driver
Troubleshooting
P/S warning light check
Set ignition “ON”.
Do other warning lights come ON?
Go to Step 2.
Go to Step 4.
DTC check
Connect scan tool to DLC with ignition “OFF”.
When ignition is “ON”, check DTC.
Is DTC U0073 or U0155 detected?
K14C model: Refer to
CAN DTC (Lost Communication and Communication Bus Off) Table:CAN (K14C Model)
.
.
Go to Step 3.
Combination meter check
Replace combination meter.
Set ignition “ON”.
Does P/S warning light stay OFF?
Replace steering column assembly.
End.
Fuse check
Is circuit fuse for combination meter in good condition?
Go to Step 5.
Replace fuse and check for short circuit to ground.
CAN communication circuit check
Check CAN communication circuit between combination meter and P/S control module.
K14C model:
Is CAN communication circuit in good condition?
Go to Step 6.
Repair or replace.
Combination meter power supply circuit check
Remove combination meter with ignition “OFF”.
Check for proper connection to combination meter connector.
If check result is OK, set ignition “ON”.
Check voltage between “G241-3” terminal and “G241-5” terminal is battery voltage.
Is check result OK?
Replace combination meter and recheck warning light operation.
Go to Step 7.
Combination meter ground circuit check
Set ignition “OFF”.
Check resistance between “G241-5” terminal and ground is 1 Ω or less.
Is check result OK?
Repair or replace “A1” circuit.
Repair or replace “A2” circuit.

---

## AENLSB0A6304011 - P/S Warning Light Remains ON Steady after Engine Starts
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304011.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures || symptoms: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references: none

Content:
P/S Warning Light Remains ON Steady after Engine Starts
Circuit Diagram
[A]:
P/S control module connector “E61” (View: [a])
1.
To ignition power supply
6.
CPU
[B]:
P/S control module connector “G10” (View: [a])
2.
J/B
7.
CAN driver
[C]:
Combination meter connector “G241” (View: [a])
3.
“IG1 SIG2” fuse
8.
Combination meter
A1:
Combination meter power supply circuit
4.
“MTR” fuse
9.
P/S warning light
A2:
Combination meter ground circuit
5.
P/S control module / motor assembly
10.
Meter driver
Troubleshooting
DTC check
Start engine and recheck DTC of P/S control module.
Is DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
P/S control module check
Replace steering column assembly.
Set ignition “ON”.
Does P/S warning light stay ON?
Replace combination meter.
End.

---

## AENLSB0A6304012 - DTC C1111 / C1113 / C1114 / C1115
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304012.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures || dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304001.xml | P/S System Check

Content:
DTC C1111 / C1113 / C1114 / C1115
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1111: Torque Sensor (Main) Circuit Malfunction
Voltage of torque sensor signal (main) circuit is higher than specified value (4.7 V) or lower than specified value (0.3 V) for more than specified time.
Torque sensor (steering column assembly)
Torque sensor circuit / connector
P/S control module (steering column assembly)
C1113: Torque Sensor (Main and Sub) Signal Difference
Voltage difference between torque sensor signal (main) circuit and torque sensor signal (sub) circuit remains too large for more than specified time.
C1114: Torque Sensor Power Supply (5 V) Circuit Malfunction
Power supply voltage (5 V) for torque sensor circuit is higher than specified value (5.5 V) or lower than specified value (4.5 V) for more than specified time.
C1115: Torque Sensor (Sub) Circuit Malfunction
Voltage of torque sensor signal (sub) circuit is higher than specified value (4.7 V) or lower than specified value (0.3 V) for more than specified time.
Circuit Diagram
[A]:
Torque sensor connector “E11” (View [a])
B1:
P/S control module power supply circuit
5.
To ignition power supply
[B]:
P/S control module connector “E61” (View [a])
B2:
IG1 power supply circuit
6.
Relay box
[C]:
P/S control module connector “G10” (View [a])
B3:
P/S control module ground circuit
7.
“P/S” fuse
A1:
5 V power supply for torque sensor circuit
1.
P/S control module / motor assembly
8.
J/B
A2:
Torque sensor signal (main) circuit
2.
CPU
9.
“IG1 SIG2” fuse
A3:
Torque sensor signal (sub) circuit
3.
Torque sensor
10.
Torque sensor connector
A4:
Torque sensor ground circuit
4.
To continuous power supply
DTC Confirmation Procedure
Upon completion of initial check, turn steering wheel in both directions fully with vehicle stopped, and then handle steering while driving.
DTC Troubleshooting
Was “P/S System Check” performed?
Go to Step 2.
Go to
P/S System Check
.
P/S control module power supply and ground circuit check
Check P/S control module power supply and ground circuits.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Torque sensor power supply circuit check
Start engine.
Check voltage between “E11-6” terminal and “E11-8” terminal is apporox.5V.
Is check result OK?
Go to Step 4.
Replace steering column assembly.
Torque sensor check
Check torque sensor.
Is the sensor in good condition?
Substitute a known-good steering column assembly and recheck DTC.
Repair or replace any of the following items.
Torque sensor harness and connector
Torque sensor (steering column assembly)
P/S control module (steering column assembly)

---

## AENLSB0A6304013 - DTC C1131
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304013.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures || dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304001.xml | P/S System Check

Content:
DTC C1131
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1131: Rotation Angle Sensor Signal Malfunction
Rotation angle sensor output signal error continues for more than specified period.
Rotation angle sensor (steering column assembly)
P/S control module (steering column assembly)
Circuit Diagram
[A]:
P/S control module connector “E61” (View: [a])
2.
To ignition power supply
8.
CPU
[B]:
P/S control module connector “G10” (View: [a])
3.
Relay box
9.
Rotation angle sensor
A1:
P/S control module power supply circuit
4.
“P/S” fuse
10.
Rotation angle sensor exciter circuit
A2:
IG1 power supply circuit
5.
J/B
11.
Rotation angle sensor signal receive circuit
A3:
P/S control module ground circuit
6.
“IG1 SIG2” fuse
1.
To continuous power supply
7.
P/S control module / motor assembly
DTC Troubleshooting
Was “P/S System Check” performed?
Go to Step 2.
Go to
P/S System Check
and recheck DTC.
P/S control module power supply and ground circuit check
Check P/S control module power supply and ground circuits.
Is check result OK?
Substitute a known-good steering column assembly and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0A6304014 - DTC C1141 / C1142 / C1143 / C1145 / C1146
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304014.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures || dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304001.xml | P/S System Check

Content:
DTC C1141 / C1142 / C1143 / C1145 / C1146
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1141: P/S Motor Circuit Voltage Malfunction
Measured motor drive circuit voltage is higher than normal voltage by 0.3 V or more, or motor drive circuit is defective.
P/S motor (steering column assembly)
P/S control module (steering column assembly)
C1142: P/S Motor Circuit Current Malfunction 1
Measured motor drive current is more than target value by 10 A or more.
C1143: P/S Motor Circuit Current Too Big
Measured motor drive current is more than 137 A.
C1145: P/S Motor Circuit Current Malfunction 2
Target motor drive current is more than 4 A or measured motor drive current is less than 2 A.
C1146: P/S Motor Voltage Malfunction
Motor voltage calculated in P/S control module is abnormal.
Circuit Diagram
[A]:
P/S control module connector “E61” (View: [a])
1.
To continuous power supply
6.
“IG1 SIG2” fuse
[B]:
P/S control module connector “G10” (View: [a])
2.
To ignition power supply
7.
P/S control module / motor assembly
A1:
P/S control module power supply circuit
3.
Relay box
8.
CPU
A2:
IG1 power supply circuit
4.
“P/S” fuse
9.
P/S motor
A3:
P/S control module ground circuit
5.
J/B
10.
Fail-safe relay
DTC Troubleshooting
Was “P/S System Check” performed?
Go to Step 2.
Go to
P/S System Check
and recheck DTC.
P/S control module power supply and ground circuit check
Check P/S control module power supply and ground circuits.
Is check result OK?
Substitute a known-good steering column assembly and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0A6304015 - DTC C1152 / C1154
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304015.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures || dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304001.xml | P/S System Check

Content:
DTC C1152 / C1154
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1152: Fail-Safe Relay Malfunction (Melting Stuck)
Measured voltage at fail-safe relay contact is higher than 5.5 V even though fail-safe relay-off is commanded.
P/S control module (steering column assembly)
C1154: Fail-Safe Relay Malfunction (Contact)
Measured voltage at fail-safe relay contact is lower than 4 V even though fail-safe relay-on is commanded.
Circuit Diagram
[A]:
P/S control module connector “E61” (View: [a])
1.
To continuous power supply
6.
“IG1 SIG2” fuse
[B]:
P/S control module connector “G10” (View: [a])
2.
To ignition power supply
7.
P/S control module / motor assembly
A1:
P/S control module power supply circuit
3.
Relay box
8.
CPU
A2:
IG1 power supply circuit
4.
“P/S” fuse
9.
P/S motor
A3:
P/S control module ground circuit
5.
J/B
10.
Fail-safe relay
DTC Confirmation Procedure
Set ignition “ON”.
Start engine.
DTC Troubleshooting
Was “P/S System Check” performed?
Go to Step 2.
Go to
P/S System Check
and recheck DTC.
P/S control module power supply and ground circuit check
Check P/S control module power supply and ground circuits.
Is check result OK?
Substitute a known-good steering column assembly and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0A6304016 - DTC C1153 / C1155
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304016.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures > Models > K14C || dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304001.xml | P/S System Check
- AENLSB0A1A14003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14003.xml | Generator Test:K14C

Content:
DTC C1153 / C1155
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1153: Power Supply Voltage Too Low or Too High
Measured voltage of fail-safe relay contact is lower than 9 V even if engine speed is more than 600 rpm and fail-safe relay ON is commanded, or voltage at fail-safe relay contact is higher than 19.2 V.
Charging system
P/S control module (steering column assembly)
C1155: P/S Control Module Internal Failure
P/S control module internal failure.
Circuit Diagram
[A]:
P/S control module connector “E61” (View [a])
1.
P/S control module / motor assembly
4.
“P/S” fuse
A1:
P/S control module power supply circuit
2.
CPU
5.
To continuous power supply
A2:
P/S control module ground circuit
3.
Relay box
DTC Confirmation Procedure
Run engine at idle speed for more than 5 seconds.
DTC Troubleshooting
Was “P/S System Check” performed?
Go to Step 2.
Go to
P/S System Check
and recheck DTC.
P/S control module power supply and ground circuit check
Check P/S control module power supply and ground circuits.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
P/S control module power supply voltage check
Measure battery voltage with engine running at 3,000 rpm.
Is voltage between 9 V and 15 V?
Substitute a known-good steering column assembly and recheck DTC.
Check charging system.
K14C model:
Generator Test:K14C

---

## AENLSB0A6304017 - DTC C1160
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304017.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures || dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304001.xml | P/S System Check

Content:
DTC C1160
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1160: Assist Map Signal Failure
Assist map data is not set in P/S control module.
P/S control module (steering column assembly)
Circuit Diagram
[A]:
P/S control module connector “E61” (View: [a])
1.
To continuous power supply
6.
“IG1 SIG2” fuse
[B]:
P/S control module connector “G10” (View: [a])
2.
To ignition power supply
7.
P/S control module / motor assembly
A1:
P/S control module power supply circuit
3.
Relay box
8.
CPU
A2:
IG1 power supply circuit
4.
“P/S” fuse
A3:
P/S control module ground circuit
5.
J/B
DTC Confirmation Procedure
Set ignition “ON”.
Set ignition “OFF”.
Set ignition “ON”.
DTC Troubleshooting
Was “P/S System Check” performed?
Go Step 2.
Go to
P/S System Check
and recheck DTC.
P/S control module power supply and ground circuit check
Check P/S control module power supply and ground circuits.
Is check result OK?
Substitute a known-good steering column assembly and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0A6304018 - DTC C1161 / C1162 / C1166
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304018.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures > Models > K14C || dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304001.xml | P/S System Check

Content:
DTC C1161 / C1162 / C1166
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1161: CAN Invalid Data from Vehicle Speed
Invalid vehicle speed data is received from ECM.
CAN communication circuit
ECM
P/S control module (steering column assembly)
C1162: CAN Invalid Data from Engine Speed
Invalid engine speed data is received from ECM.
C1166: Reliability Defect Of Vehicle Speed Data
Invalid data about vehicle speed reliability is received from ECM.
DTC Confirmation Procedure
C1161 / C1166
Refer to “DTC Confirmation Procedure” for DTC P0500 Vehicle Speed Sensor “A”.
K14C model:
C1162
Refer to “DTC Confirmation Procedure” for DTC P0335 Crankshaft Position Sensor “A” Circuit.
K14C model:
DTC Troubleshooting
Was “P/S System Check” performed?
Go to Step 2.
Go to
P/S System Check
and recheck DTC.
DTC check
Check ECM for DTC.
K14C model:
Is DTC(s) detected?
Go to troubleshooting for applicable DTC. (ECM-related faulty)
K14C model:
Substitute a known-good steering column assembly and recheck DTC.

---

## AENLSB0A6304019 - DTC C1163
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304019.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures || dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304001.xml | P/S System Check

Content:
DTC C1163
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1163: CAN Invalid Data from Steering Angle Sensor
Invalid data of steering angle is received from lighting and turn signal switch.
Lighting and turn signal switch
ESP ® control module
P/S control module (steering column assembly)
DTC Confirmation Procedure
Refer to “DTC Confirmation Procedure” for DTC C1038 Steering Angle Sensor Detect Rolling Counter Failure.
DTC Troubleshooting
Was “P/S System Check” performed?
Go to Step 2.
Go to
P/S System Check
and recheck DTC.
DTC check
Check ESP ® control module for DTC.
Is DTC(s) detected?
Go to troubleshooting for applicable DTC.
Substitute a known-good steering column assembly and recheck DTC.

---

## AENLSB0A6304020 - DTC C116A
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304020.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures || dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304001.xml | P/S System Check

Content:
DTC C116A
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C116A: Steering Angle Sensor Calibration Incomplete
Incomplete calibration signal of steering angle is received from lighting and turn signal switch.
Lighting and turn signal switch
ESP ® control module
P/S control module (steering column assembly)
DTC Confirmation Procedure
Refer to “DTC Confirmation Procedure” for DTC C1075 Steering Angle Sensor Calibration.
.
DTC Troubleshooting
Was “P/S System Check” performed?
Go Step 2.
Go to
P/S System Check
and recheck DTC.
DTC check
Check ESP ® control module for DTC.
Is DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Sensor calibration
Perform sensor calibration.
Check DTC.
Is DTC C116A still detected?
Substitute a known-good steering column assembly and recheck DTC.
End.

---

## AENLSB0A6304021 - DTC C1170
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304021.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures || dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304001.xml | P/S System Check

Content:
DTC C1170
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1170: Lane Departure Prevention Switch Circuit
P/S control module received ON signal of lane departure prevention switch from dual sensor brake support control module for specified time continuously.
Lane departure prevention switch circuit / connector
Lane departure prevention switch
P/S control module
Dual sensor brake support control module
Circuit Diagram
[A]:
Dual sensor brake support control module connector (View: [a])
1.
Dual sensor brake support control module
4.
CAN driver
[B]:
Contact coil connector (View: [a])
2.
Lane departure prevention switch
5.
To P/S control module
A1:
Lane departure prevention switch signal circuit
3.
Contact coil
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “P/S System Check” performed?
Go Step 2.
Go to
P/S System Check
and recheck DTC.
Lane departure prevention switch power supply circuit check
Check that ignition is “OFF”.
Disconnect “G376” connector.
Check for proper terminal connection to “G376” connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” and ground is battery voltage.
Is check result OK?
Go to Step 4.
Go to Step 3.
Lane departure prevention switch signal circuit check
Set ignition “OFF”.
Disconnect “K04” connector.
Check for proper terminal connection to “K04” connector.
If connection is OK, check the following points.
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and other terminal at “K04” connector: infinity
Is check result OK?
Replace dual sensor brake support control module and recheck DTC.
Repair or replace defective wire harness.
Contact coil circuit check
Set ignition “OFF”.
Disconnect “S63” connector.
Check that resistance between terminal “2” and other terminal at “S175” connector is infinity
Is check result OK?
Go to Step 5.
Replace contact coil assembly.
Lane departure prevention switch check
Check lane departure prevention switch.
Is check result OK?
Replace P/S control module and recheck DTC.
Replace steering wheel.

---

## AENLSB0A6304022 - DTC C1171
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304022.xml
Tree scopes: dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304001.xml | P/S System Check

Content:
DTC C1171
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1171: Lane Departure Prevention Indication Failure
Display failure of operation state of lane departure prevention in combination meter.
Combination meter
CAN communication circuit
P/S control module (steering column assembly)
DTC Troubleshooting
Was “P/S System Check” performed?
Go Step 2.
Go to
P/S System Check
and recheck DTC.
DTC check
Connect scan tool to DLC with ignition “OFF”.
When ignition is “ON”, check DTC.
Is there any CAN-DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go Step 3.
CAN communication circuit check
Check CAN communication circuit between P/S control module and combination meter referring to
.
Is check result OK?
Go Step 4.
Repair or replace defective wire harness.
DTC check for combination meter
Perform “DTC Check”.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace steering column assembly and recheck DTC.

---

## AENLSB0A6304023 - DTC C1172
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304023.xml
Tree scopes: dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6304001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304001.xml | P/S System Check

Content:
DTC C1172
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1172: Vehicle Speed Data Mismatch
Inconsistency between vehicle speed data from ECM and rear wheel speed data.
Wheel speed sensor circuit
Wheel speed sensor
CAN communication circuit
ECM
ESP ® control module
P/S control module (steering column assembly)
DTC Confirmation Procedure
Refer to “DTC Confirmation Procedure” for DTC P0500 Vehicle Speed Sensor “A”.
DTC Troubleshooting
Was “P/S System Check” performed?
Go Step 2.
Go to
P/S System Check
and recheck DTC.
DTC check
Connect scan tool to DLC with ignition “OFF”.
When ignition is “ON”, check DTC.
Is there any CAN-DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go Step 3.
CAN communication circuit check
Check CAN communication circuit between P/S control module and combination meter referring to
.
Is check result OK?
Go Step 4.
Repair or replace defective wire harness.
DTC check for ECM
Check ECM for DTC.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go Step 5.
DTC check for ESP® control module
Check ESP ® control module for DTC.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace steering column assembly and recheck DTC.

---

## AENLSB0A6304024 - DTC U0073
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304024.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures > Models > K14C || dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814004.xml | Troubleshooting for Communication Bus Off:CAN (K14C Model)

Content:
DTC U0073
K14C model: Refer to
Troubleshooting for Communication Bus Off:CAN (K14C Model)
.
.

---

## AENLSB0A6304025 - DTC U0100
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304025.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures > Models > K14C || dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0100
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0A6304026 - DTC U0121
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304026.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures > Models > K14C || dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0121
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0A6304027 - DTC U0126
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304027.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures > Models > K14C || dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0126
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0A6304028 - DTC U0140
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304028.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures > Models > K14C || dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0140
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0A6304029 - DTC U0155
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304029.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures > Models > K14C || dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0155
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0A6304031 - DTC U1093
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304031.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures > Models > K14C || dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U1093
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0A6304032 - P/S Control Module Power Supply and Ground Circuit Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304032.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references: none

Content:
P/S Control Module Power Supply and Ground Circuit Check
Circuit Diagram
[A]:
P/S control module connector “E61” (View: [a])
1.
To continuous power supply
6.
“IG1 SIG2” fuse
[B]:
P/S control module connector “G10” (View: [a])
2.
To ignition power supply
7.
P/S control module / motor assembly
A1:
P/S control module power supply circuit
3.
Relay box
8.
CPU
A2:
IG1 power supply circuit
4.
“P/S” fuse
A3:
P/S control module ground circuit
5.
J/B
Troubleshooting
Circuit fuse check
Check that ignition is “OFF”.
Disconnect “E61” and “G10” connectors.
Check for proper connection to “G10-3” and “E61-1” terminals.
If connections are OK, check “P/S” fuse and “IG1 SIG2” fuse for blowing.
Is check result OK?
Go to Step 2.
Replace fuse(s) and check for short to ground in circuits connected to fuse(s).
P/S control module power supply circuit check
Check voltage between “E61-1” terminal and ground.
Is voltage 10 – 14 V?
Go to Step 3.
“A1” circuit is open.
IG1 power supply circuit check
Set ignition “ON”.
Check voltage between “G10-3” terminal and ground.
Is voltage 10 – 14 V?
Go to Step 4.
“A2” circuit is open.
P/S control module ground circuit check
Set ignition “OFF”.
Check for proper connection to “E61-2” terminal.
Check resistance between “E61-2” terminal and ground.
Is resistance 1 Ω or less?
P/S control module power supply and ground circuit are in good condition.
“A3” circuit is open or too high in resistance.

---

## AENLSB0A6304033 - Inspection of P/S Control Module and Its Circuits
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304033.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6304033004 -> unresolved | CAN communication signal
- AENLSB0A6304033004 -> unresolved | CAN communication signal
- AENLSB0A6304033004 -> unresolved | CAN communication signal
- AENLSB0A6304033004 -> unresolved | CAN communication signal

Content:
Inspection of P/S Control Module and Its Circuits
P/S control module (1) and its circuits can be checked at P/S control module wiring connectors by measuring voltage and resistance.
If you connect a voltmeter or an ohmmeter directly to the P/S control module with the P/S control module connectors disconnected, the P/S control module will be damaged.
Never connect a voltmeter or an ohmmeter directly to any terminal on the P/S control module with the P/S control module connectors disconnected.
[A]:
P/S control module connector “E61” (View: [a])
[B]:
Torque sensor connector “E11” (View: [a])
[C]:
P/S control module connector “G10” (View: [a])
Voltage Check
Remove steering column hole cover.
Measure voltage at each terminal with connectors connected to the P/S control module.
As each terminal voltage is affected by the battery voltage, check that the battery voltage is 12 V or more when ignition is “ON”.
*1: Turn steering wheel fully and hold it with force applied.
“E61” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
E61-1
GRN
Main power supply for P/S control module
Approx. 12 V
Ignition in any position / mode
E61-2
BLK
Ground for P/S control module
0 V
Ignition in any position / mode
“G10” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
G10-3
YEL
IG1 power supply for P/S control module
Approx. 12 V
Ignition “ON”
G10-5
RED
CAN (HI1) communication circuit
Refer to Oscilloscope Display.
CAN communication signal
G10-6
WHT
CAN (LO1) communication circuit
Refer to Oscilloscope Display.
CAN communication signal
G10-7
RED
CAN (HI2) communication circuit
Refer to Oscilloscope Display.
CAN communication signal
G10-8
WHT
CAN (LO2) communication circuit
Refer to Oscilloscope Display.
CAN communication signal
“E11” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
E11-5
WHT
Torque sensor signal (Main)
Approx. 2.5 V
Engine: Idle speed
Steering wheel at neutral
Approx. 4 V
Engine: Idle speed
Vehicle stationary and steering wheel turned fully to right *1
Approx. 1 V
Engine: Idle speed
Vehicle stationary and steering wheel turned fully to left *1
E11-6
RED
5 V reference power supply for torque sensor
Approx. 5 V
Engine: Idle speed
E11-7
YEL
Torque sensor signal (Sub)
Approx. 2.5 V
Engine: Idle speed
Steering wheel at neutral
Approx. 1 V
Engine: Idle speed
Vehicle stationary and steering wheel turned fully to right *1
Approx. 4 V
Engine: Idle speed
Vehicle stationary and steering wheel turned fully to left *1
E11-8
BLK
Ground for torque sensor
0 V
Ignition in any position / mode
Reference Waveform
Oscilloscope display
Shown below is typical waveform display provided by oscilloscope.
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
CAN communication signal
Channel
Probe
Terminal No.
CH1
+
G10-5
G10-7
–
Ground
CH2
+
G10-6
G10-8
–
Ground
Measurement condition
Ignition: “ON”
[a]:
CH1
1.
CAN communication signal
[b]:
CH2

---

## AENLSB0A6304034 - Steering Wheel Play Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304034.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Steering Wheel Play Check
Check steering wheel for looseness or rattle by moving it in axial and lateral directions.
If check result is not OK, repair or replace steering wheel.
Check steering wheel for play, holding vehicle in straight ahead position on the ground with engine stopped.
If steering wheel play is not as specified, check the following components and replace any of them if defective.
Tie-rod end and tie-rod ball joint for wear
Suspension arm joint for wear
Steering shaft joint for wear
Steering pinion or rack gear for wear or breakage
Each part for looseness
Steering wheel play
“a”
0 – 30 mm (0.00 – 1.18 in.)

---

## AENLSB0A6304035 - Steering Force Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304035.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Steering Force Check
Place vehicle on level road and set steering wheel at straight ahead position.
Check that tire inflation pressure is as specified referring to the “Tire Placard”.
Start engine.
With engine idling, measure steering force using spring balance (1).
Steering force
30 N (3.1 kgf, 6.7 lbf) or less

---

## AENLSB0A6304036 - DTC U1082
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304036.xml
Tree scopes: dtc: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC U1082
Refer to
.

---

## AENLSB0A6304A01 - Steering wheel feels heavy
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304A01.xml
Tree scopes: symptoms: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6104001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6104001.xml | Steering Symptom Diagnosis
- AENLSB0A6304035 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304035.xml | Steering Force Check
- AENLSB0A2206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A2206001.xml | Front Wheel Alignment Inspection and Adjustment

Content:
Steering wheel feels heavy
This section describes trouble diagnosis of the P/S system parts whose troubles are not indicated using SUZUKI scan tool. When no malfunction is indicated by SUZUKI scan tool and steering basic parts as described in
Steering Symptom Diagnosis
are all in good condition, check the following power steering system parts which may be possible causes for each trouble symptom of steering.
Perform
Steering Force Check
and
Front Wheel Alignment Inspection and Adjustment
before diagnosis.
Steering wheel feels heavy
Improper installation of steering wheel
Install steering wheel correctly.
Poor performance of torque sensor
Check torque sensor.
Poor performance of P/S motor
Check P/S motor.
Malfunction of steering gear case assembly
Replace steering gear case assembly.
Vehicle speed data provided through CAN communication
Check vehicle speed data.

---

## AENLSB0A6304A02 - Steering wheel feels heavy momentarily when turning it to left or right
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304A02.xml
Tree scopes: symptoms: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6104001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6104001.xml | Steering Symptom Diagnosis
- AENLSB0A6304035 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304035.xml | Steering Force Check
- AENLSB0A2206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A2206001.xml | Front Wheel Alignment Inspection and Adjustment

Content:
Steering wheel feels heavy momentarily when turning it to left or right
This section describes trouble diagnosis of the P/S system parts whose troubles are not indicated using SUZUKI scan tool. When no malfunction is indicated by SUZUKI scan tool and steering basic parts as described in
Steering Symptom Diagnosis
are all in good condition, check the following power steering system parts which may be possible causes for each trouble symptom of steering.
Perform
Steering Force Check
and
Front Wheel Alignment Inspection and Adjustment
before diagnosis.
Steering wheel feels heavy momentarily when turning it to left or right
Malfunction of steering gear case assembly
Replace steering gear case assembly.

---

## AENLSB0A6304A03 - Poor recovery from turns
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304A03.xml
Tree scopes: symptoms: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6104001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6104001.xml | Steering Symptom Diagnosis
- AENLSB0A6304035 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304035.xml | Steering Force Check
- AENLSB0A2206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A2206001.xml | Front Wheel Alignment Inspection and Adjustment

Content:
Poor recovery from turns
This section describes trouble diagnosis of the P/S system parts whose troubles are not indicated using SUZUKI scan tool. When no malfunction is indicated by SUZUKI scan tool and steering basic parts as described in
Steering Symptom Diagnosis
are all in good condition, check the following power steering system parts which may be possible causes for each trouble symptom of steering.
Perform
Steering Force Check
and
Front Wheel Alignment Inspection and Adjustment
before diagnosis.
Poor recovery from turns
Poor performance of torque sensor
Check torque sensor.
Malfunction of steering gear case assembly
Replace steering gear case assembly.

---

## AENLSB0A6304A04 - Vehicle pulls to one side during straight driving
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304A04.xml
Tree scopes: symptoms: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6104001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6104001.xml | Steering Symptom Diagnosis
- AENLSB0A6304035 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304035.xml | Steering Force Check
- AENLSB0A2206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A2206001.xml | Front Wheel Alignment Inspection and Adjustment

Content:
Vehicle pulls to one side during straight driving
This section describes trouble diagnosis of the P/S system parts whose troubles are not indicated using SUZUKI scan tool. When no malfunction is indicated by SUZUKI scan tool and steering basic parts as described in
Steering Symptom Diagnosis
are all in good condition, check the following power steering system parts which may be possible causes for each trouble symptom of steering.
Perform
Steering Force Check
and
Front Wheel Alignment Inspection and Adjustment
before diagnosis.
Vehicle pulls to one side during straight driving
Poor performance of torque sensor
Check torque sensor.
Malfunction of steering gear case assembly
Replace steering gear case assembly.

---

## AENLSB0A6304A05 - Abnormal noise
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304A05.xml
Tree scopes: symptoms: 6 - Steering > Power Assisted Steering System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A6104001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6104001.xml | Steering Symptom Diagnosis
- AENLSB0A6304035 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6304035.xml | Steering Force Check
- AENLSB0A2206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A2206001.xml | Front Wheel Alignment Inspection and Adjustment

Content:
Abnormal noise
This section describes trouble diagnosis of the P/S system parts whose troubles are not indicated using SUZUKI scan tool. When no malfunction is indicated by SUZUKI scan tool and steering basic parts as described in
Steering Symptom Diagnosis
are all in good condition, check the following power steering system parts which may be possible causes for each trouble symptom of steering.
Perform
Steering Force Check
and
Front Wheel Alignment Inspection and Adjustment
before diagnosis.
Abnormal noise
Malfunction of P/S motor (built in steering column assembly)
Replace steering column.

---

## AENLSB0A6306001 - Torque Sensor and Its Circuit Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6306001.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Repair Instructions
Outgoing references: none

Content:
Torque Sensor and Its Circuit Inspection
Using SUZUKI Scan Tool
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
2.
VCI
Start engine and select “Sensor (Main) Torque” and “Sensor (Sub) Torque” in “Data list” mode on SUZUKI scan tool.
Check each of “Sensor (Main) Torque” and “Sensor (Sub) Torque” changes linearly as specified in the following graph.
[A]:
Main signal
[B]:
Sub signal
[C]:
Steering force at left turn
[D]:
Steering force at right turn
[E]:
Steering wheel at straight ahead position
[F]:
“Sensor (Main) Torque” in “Data List” displayed on scan tool
[G]:
“Sensor (Sub) Torque” in “Data List” displayed on scan tool
[H]:
Turn steering wheel fully and hold it with force applied.
If check result is not as specified, repair or replace any of the following items.
Torque sensor harness and connector
Torque sensor (steering column assembly)
P/S control module (steering column assembly)
Using Voltmeter
Remove steering column hole cover.
Start engine and measure voltage between terminals “E11-5” – “E11-8” and “E11-7” – “E11-8” at torque sensor connector (1) connected to P/S control module / motor assembly (2).
[A]:
Torque sensor connector “E11” (View: [a])
Check voltage changes linearly in main signal and sub signal as specified in the following graph.
[A]:
Main signal
[B]:
Sub signal
[C]:
Steering force at left turn
[D]:
Steering force at right turn
[E]:
Steering wheel at straight ahead position
[F]:
“Sensor (Main) Torque” measured voltage by volt meter
[G]:
“Sensor (Sub) Torque” measured voltage by volt meter
[H]:
Turn steering wheel fully and hold it with force applied.
If check result is not as specified, repair or replace any of the following items.
Torque sensor harness and connector
Torque sensor (steering column assembly)
P/S control module (steering column assembly)

---

## AENLSB0A6306002 - Lane Departure Prevention Switch Inspection (If Equipped)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6306002.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Repair Instructions
Outgoing references: none

Content:
Lane Departure Prevention Switch Inspection (If Equipped)
Remove driver air bag (inflator) module.
Disconnect contact coil connector (1).
Check resistance between “2” and “4” terminals.
If check result is not as specified, replace steering wheel.
Use diode range of circuit tester when checking terminals “13” and “5”.
Lane departure prevention switch resistance
Lane departure prevention switch (2) pulled (ON): Less than 2.5 Ω
[A]:
Contact coil connector (View: [a])

---

## AENLSB0A6308001 - Special Tool
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A6308001.xml
Tree scopes: bookmarks: 6 - Steering > 6C - Power Assisted Steering System > Special Tools and Equipment
Outgoing references: none

Content:
Special Tool
SUZUKI scan tool (Suzuki SDT-II)
—

---

## AENLSB0A7000001 - Precautions for HVAC
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7000001.xml
Tree scopes: bookmarks: 7 - HVAC > 7 - Precautions > Precautions
Outgoing references:
- AENLSB0A0000001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0000001.xml | General Precautions
- AENLSB0A0000002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0000002.xml | Precautions for Electrical Circuit Service
- AENLSB0A0000023 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0000023.xml | Caution for Servicing SHVS System (48V)
- AENLSB0A0000003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0000003.xml | Caution for Fastener
- AENLSB0A0000015 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0000015.xml | Warning for Air Bag
- AENLSB0A910H001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A910H001.xml | Reassembling Note for Wiring Harness
- AENLSB0A0101005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0101005.xml | Ignition Modes and Ignition Switch Positions

Content:
Precautions for HVAC
General Precautions
Refer to
General Precautions
.
Precautions for Electrical Circuit Service
Refer to
Precautions for Electrical Circuit Service
.
Caution for Servicing SHVS System (48V)
Refer to
Caution for Servicing SHVS System (48V)
.
Caution for Fastener
Refer to
Caution for Fastener
.
Warning for Air Bag
Refer to
Warning for Air Bag
.
Reassembling Note for Wiring Harness
Observe
Reassembling Note for Wiring Harness
whenever installing wiring harness.
Otherwise, electrical trouble may occur.
Precautions for Ignition Mode
Refer to
Ignition Modes and Ignition Switch Positions
.

---

## AENLSB0A7000002 - A/C System Caution
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7000002.xml
Tree scopes: bookmarks: 7 - HVAC > 7 - Precautions > Precautions
Outgoing references:
- AENLSB0A7201003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7201003.xml | A/C Refrigerant Identification

Content:
A/C System Caution
The A/C system of this vehicle uses HFC-134a (R-134a) or HFO-1234yf (R-1234yf) refrigerant. The compressor oil and parts used in the system are also made of materials compatible with each refrigerant. If this system is serviced using compressor oils or parts that are not appropriate for each refrigerant, refrigerant leakage and damage or other faulty conditions will occur in the A/C system. This will also cause damage to or faulty operation of the servicing equipment.
Check which refrigerant is used before any service work including inspection and maintenance. Use compatible refrigerant, specified compressor oil and replacement parts for respective refrigerant type. In addition, use applicable manifold gauge set, leak detector and refrigerant recovery and recycling equipment respectively.
For identification between these two refrigerant types. Refer to
A/C Refrigerant Identification
.

---

## AENLSB0A7000003 - Precautions for Servicing A/C System (HFC-134a Refrigerant)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7000003.xml
Tree scopes: bookmarks: 7 - HVAC > 7 - Precautions > Precautions
Outgoing references:
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge
- AENLSB0A7206002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206002.xml | A/C System Major Components
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge

Content:
Precautions for Servicing A/C System (HFC-134a Refrigerant)
Handling HFC-134a (R-134a) Refrigerant and Specified Compressor Oil
If HFC-134a (R-134a) is exposed to high temperatures, it turns into a poisonous gas.
Take the following precautions to prevent health problems caused by HFC-134a (R-134a) gas.
Do not handle refrigerant in or near any area where welding or steam cleaning is performed.
Keep refrigerant in a cold and dark place. Avoid storing it under direct sunlight, in a place close to fire or inside a vehicle.
If HFC-134a (R-134a) is burned, avoid breathing fumes.
Contact of liquid HFC-134a (R-134a) refrigerant with skin and eyes will cause frostbite. The refrigerant cools the surface coming in contact with it to a temperature much lower than the freezing point of water.
Avoid contact with HFC-134a (R-134a) refrigerant and wear goggles and gloves whenever handling the refrigerant. Should the refrigerant happen to contact your eyes or skin, immediately take action as described below to prevent aggravating the condition:
If the refrigerant contacts your eye, do not touch the eye with your hand. Instead, pour fresh cold water over the eye to raise gradually the temperature. After washing the eye thoroughly with water, receive medical attention as soon as possible.
If liquid HFC-134a (R-134a) contacts your skin, wash the affected area thoroughly with water. Since the skin may have been frostbitten, receive medical attention.
Do not discharge HFC-134a (R-134a) refrigerant into atmosphere.
The specified compressor oil for HFC-134a (R-134a) is highly hygroscopic. Keep internal parts of air conditioning free from moisture and dirt. When disconnecting any line from system, install a blind plug or cap to the fitting immediately.
If pipes or hoses are replaced, replenish A/C compressor with specified amount of compressor oil from suction side referring to “Replenishing Compressor Oil” in
Operation Procedure for Refrigerant Charge
.
Handling A/C Cycle Parts and Tooling
Route drain hose so that drained water does not adhere to vehicle components.
When connecting hoses and pipes, apply a few drops of compressor oil (refrigerant oil) to O-ring.
Replace O-ring with new one, once hoses, pipes or parts are disconnected.
For locations of high pressure service valve and low pressure service valve, refer to
A/C System Major Components
.
Check local governmental regulations regarding working with refrigerator systems and its tooling.
Refrigerant Recovery
When discharging refrigerant out of A/C system, always recover it using refrigerant recovery and recycling equipment because discharging HFC-134a (R-134a) refrigerant into atmosphere would cause adverse effect to environment. For the method, refer to “Recovery” in
Operation Procedure for Refrigerant Charge
.
Refrigerant Charge
After performing compressor oil replenishment and evacuation, charge the A/C system with a proper amount of refrigerant referring to “Charge” in
Operation Procedure for Refrigerant Charge
.

---

## AENLSB0A7000004 - Precautions for Servicing A/C System (HFO-1234yf Refrigerant)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7000004.xml
Tree scopes: bookmarks: 7 - HVAC > 7 - Precautions > Precautions
Outgoing references:
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge

Content:
Precautions for Servicing A/C System (HFO-1234yf Refrigerant)
Handling HFO-1234yf (R-1234yf) Refrigerant and Specified Compressor Oil
Refrigerant HFO-1234yf (R-1234yf) has characteristic of slight flammable gas though global warming potential (GWP) is extremely low, and may burn if leaked gas is ignited.
Perform the service work in a well-ventilated area and away from any open flames such as gas-fired water heater.
If leakage of HFO-1234yf (R-1234yf) gas is assumed, take the following precautions to prevent health problems caused by the leaked gas.
Do not handle refrigerant in or near any area where welding or steam cleaning is performed.
Keep refrigerant in a cold and dark place. Avoid storing it under direct sunlight, in a place close to fire or inside a vehicle.
If HFO-1234yf (R-1234yf) is burned, avoid breathing fumes.
Contact of liquid HFO-1234yf (R-1234yf) refrigerant with skin and eyes will cause frostbite. The refrigerant cools the surface coming in contact with it to a temperature much lower than the freezing point of water.
Avoid contact with HFO-1234yf (R-1234yf) refrigerant and wear goggles and gloves whenever handling the refrigerant. Should the refrigerant happen to contact your eyes or skin, immediately take action as described below to prevent aggravating the condition:
In the event of eye contact, do not touch the eye with your hand. Instead, pour fresh cold water over the eye to raise gradually the temperature. After washing the eye thoroughly with water, receive medical attention as soon as possible.
If liquid HFO-1234yf (R-1234yf) contacts your skin, wash the affected area thoroughly with water.
Since the skin may have been frostbitten, receive medical attention.
Do not discharge HFO-1234yf (R-1234yf) refrigerant into atmosphere.
The specified compressor oil for HFO-1234yf (R-1234yf) is highly hygroscopic. Keep internal parts of air conditioning free from moisture and dirt. When disconnecting any line from system, install a blind plug or cap to the fitting immediately.
If pipes or hoses are replaced, replenish A/C compressor with specified amount of compressor oil from suction side referring to “Replenishing Compressor Oil” in
Operation Procedure for Refrigerant Charge
.
Handling A/C Cycle Parts and Tooling
Route drain hose so that drained water does not adhere to vehicle components.
When connecting hoses and pipes, apply a few drops of compressor oil (refrigerant oil) to O-ring.
Replace O-ring with new one, once hoses, pipes or parts are disconnected.
Check local governmental regulations regarding working with refrigerator systems and its tooling.
Refrigerant Recovery
When discharging refrigerant out of A/C system, always recover it using refrigerant recovery and recycling equipment because discharging HFO-1234yf (R-1234yf) refrigerant into atmosphere would cause adverse effect to environment. For the method, refer to “Recovery” in
Operation Procedure for Refrigerant Charge
.
Refrigerant Charge
After performing compressor oil replenishment and evacuation, charge the A/C system with a proper amount of refrigerant referring to “Charge” in
Operation Procedure for Refrigerant Charge
.

---

## AENLSB0A7200001 - Precautions for Diagnosing Trouble
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7200001.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Precautions
Outgoing references:
- AENLSB0A0000015 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0000015.xml | Warning for Air Bag

Content:
Precautions for Diagnosing Trouble
Do not disconnect connectors from BCM, battery cable from battery, BCM ground wire harness from body or main fuse before checking diagnostic information (diagnostic trouble codes) stored in BCM memory.
Diagnostic trouble codes stored in BCM can be checked on SUZUKI scan tool. Before checking diagnostic trouble codes, read this manual and Operator's Manual of SUZUKI scan tool to know how to read diagnostic trouble codes.
Read
Warning for Air Bag
before inspection.

---

## AENLSB0A7201001 - Auto A/C System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7201001.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > General Description
Outgoing references:
- AENLSB0A7203001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7203001.xml | Auto A/C Control System Component Location
- AENLSB0A7206002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206002.xml | A/C System Major Components
- AENLSB0A7202001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7202001.xml | Auto A/C Electronic Control Input / Output Block Diagram

Content:
Auto A/C System Description
In the automatic air conditioning system (auto A/C), BCM automatically controls inside air temperature, blower fan speed, air inlet and outlet, etc. Once users set desired inside air temperature with the temperature control selector and push “AUTO” switch, BCM starts detecting the inside air temperature, the outside air temperature, sunlight and the engine coolant temperature by means of the inside air temperature sensor, the outside air temperature sensor, the sunload sensor, and the ECT sensor, respectively. In this way, BCM keeps in-car temperature at the desired level at all times.
For further information on the auto A/C system, refer to
Auto A/C Control System Component Location
,
A/C System Major Components
and
Auto A/C Electronic Control Input / Output Block Diagram
.

---

## AENLSB0A7201002 - HVAC Control Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7201002.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > General Description > Models > K14C
Outgoing references: none

Content:
HVAC Control Description
Temperature Control
BCM calculates the target temperature control door position based on signals from the temperature control selector, inside air temperature sensor, outside air temperature sensor and sunload sensor and controls the temperature control actuator so that the current position of the temperature control door matches its target position.
Fan Speed Control
BCM calculates the target blower fan speed based on signals from the temperature control selector, inside air temperature sensor, outside air temperature sensor, ECT sensor and sunload sensor, compares the speed thus calculated with the current blower fan speed inputted from the blower motor controller to adjust the current blower fan speed to the target level.
Air Flow Outlet Control
BCM calculates the target temperature control door position based on signals from the temperature control selector, inside air temperature sensor, outside air temperature sensor, ECT sensor and sunload sensor. Using thus obtained target temperature control door position, it further calculates the target air flow control door position and controls the air flow control actuator so that the current air flow control door position becomes the target position.
Air Intake Position Control
BCM determines the air intake position based on signals from the temperature control selector, inside air temperature sensor and outside air temperature sensor and controls the air intake control actuator.
Furthermore, when the defroster switch is turned on, BCM fixes the position of the air intake control door to the FRESH (FRE) position to clear fog from windshield.
A/C Compressor Relay Control
BCM outputs A/C switch ON signal to ECM when the vehicle state satisfies the conditions described below.
A/C switch is ON
Evaporator temperature is higher than specified value
Evaporator temperature sensor malfunction is not detected
ECM and BCM are using CAN communication system to communicate with other control modules. For more detail of CAN communication, refer to “Communication System Description”.
K14C model:
ECM turns ON the A/C compressor relay when the vehicle state satisfies the conditions described below.
A/C switch ON signal is inputted
A/C refrigerant pressure is within specified range
Engine speed is within specified range
Engine coolant temperature is lower than specified value
Throttle opening is lower than specified value
Vehicle is not in either starting or quick acceleration state
ECT sensor malfunction is not detected
A/C refrigerant pressure sensor malfunction is not detected
Radiator Cooling Fan Relay Control
ECM turns ON the radiator cooling fan relay at the same time when ECM turns ON the A/C compressor relay.
HVAC System Construction
[A]:
Air flow
8.
Expansion valve
18.
Temperature control door
[B]:
Refrigerant flow
9.
Side ventilation air
19.
Air flow control door
[C]:
Engine coolant flow
10.
Center ventilation air
20.
Heater core
1.
HVAC unit
11.
Front foot air
21.
HVAC air filter
2.
Compressor
12.
Defroster air
22.
Engine
3.
Condenser assembly
13.
Demister air
23.
Radiator
4.
Receiver / dryer
14.
Fresh air
24.
Reservoir
5.
Discharge hose
15.
Recirculation air
25.
Rear foot air (if equipped)
6.
Suction hose
16.
Evaporator
7.
Liquid pipe
17.
Air intake door

---

## AENLSB0A7201003 - A/C Refrigerant Identification
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7201003.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > General Description
Outgoing references: none

Content:
A/C Refrigerant Identification
For distinction of refrigerant types, check color of caps (1).
Cap color
HFC-134a model: Light blue
HFO-1234yf model: Black

---

## AENLSB0A7201004 - Sub-Cool A/C System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7201004.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > General Description
Outgoing references: none

Content:
Sub-Cool A/C System Description
In the sub-cool A/C system (condenser incorporating receiver / dryer), the inside of the condenser is divided into the condensation part and the sub-cooler part, and the receiver / dryer is located between these parts. In the receiver / dryer, the refrigerant is separated into vapor refrigerant and liquid refrigerant. Only the liquid refrigerant is delivered to the sub-cooler part of the condenser. The refrigerant is supercooled by the sub-cooler part of the condenser.
[A]:
Liquid
4.
Receiver / dryer
10.
Desiccant
[B]:
Vapor
5.
A/C refrigerant pressure sensor
11.
Filter
[C]:
Superheated vapor
6.
Expansion valve
12.
Vapor refrigerant
1.
Compressor
7.
Evaporator
13.
Liquid refrigerant
2.
Magnet clutch
8.
Condensation part
3.
Condenser
9.
Sub-cooler part

---

## AENLSB0A7201005 - Compressor Drive Belt Description (K14C Model)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7201005.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > General Description > K14C
Outgoing references: none

Content:
Compressor Drive Belt Description (K14C Model)
The compressor drive belt is a stretch-type belt. It stretches itself to maintain the belt tension. Therefore, a tension pulley, which is used to adjust the belt tension, or components for adjusting the clearance between the crankshaft pulley and the magnet clutch pulley are not necessary. When removing or installing the stretch-type belt, use the special tool to prevent the belt from being damaged.

---

## AENLSB0A7201006 - A/C Operation Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7201006.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > General Description > Models > K14C
Outgoing references: none

Content:
A/C Operation Description
Upon receiving A/C switch ON signal from auto A/C panel, ECM control A/C compressor relay and radiator (condenser) cooling fan relay as described in the table below.
The A/C switch ON signal is sent from the auto A/C panel to BCM. Then it is transmitted to ECM as A/C request signal through CAN. For CAN communication system, refer to “Communication System Description”.
K14C model:
Control item
Input sensor (or signal)
Description
A/C compressor relay control
Evaporator temperature
Evaporator temperature sensor
ECM controls compressor by turning A/C compressor relay ON/OFF according to request signal from BCM. BCM sends the signal based on the signal from evaporator temperature sensor to prevent evaporator from freezing.
Control during low engine speed
CKP sensor (engine rpm)
ECM stops compressor by turning A/C compressor relay OFF according to signal from CKP sensor (engine rpm) to prevent engine from stalling while engine speed is low.
Control during high engine speed
ECM stops compressor by turning A/C compressor relay OFF according to signal from CKP sensor (engine rpm) to prevent compressor from over-revolution while engine speed is high.
Control at engine start
ECM stops compressor temporarily by turning A/C compressor relay OFF according to signals from CKP sensor (engine rpm) and others to stabilize engine idling speed immediately after engine start.
Control at abnormal refrigerant pressure
A/C refrigerant pressure sensor
ECM stops compressor by turning A/C compressor relay OFF according to signal from A/C refrigerant pressure sensor to protect system when refrigerant pressure is abnormal.
ECM stops compressor by turning A/C compressor relay OFF when A/C refrigerant pressure sensor malfunctions.
Control during acceleration
APP sensor and wheel speed sensor
ECM stops compressor temporarily by turning A/C compressor relay OFF according to signal from APP sensor to provide enough acceleration while accelerator pedal is fully depressed regardless of vehicle speed.
ECM stops compressor temporarily by turning A/C compressor relay OFF according to signal from throttle position sensor to provide enough acceleration when accelerator pedal is depressed more than specification while vehicle speed is low.
Control at high engine coolant temperature
ECT sensor
ECM stops compressor by turning A/C compressor relay OFF according to signal from ECT sensor to prevent overheating when engine coolant temperature is higher than specified level.
ECM stops compressor by turning A/C compressor relay OFF when ECT sensor malfunctions.
Radiator (condenser) cooling fan relay control
A/C refrigerant pressure sensor and wheel speed sensor
ECM drives radiator cooling fan in low or high speed mode under the following conditions by turning radiator cooling fan relays No.1, No.2 and No.3 ON/OFF according to signals from A/C refrigerant pressure sensor and wheel speed sensor when A/C compressor relay is ON.
Low speed mode (Radiator cooling fan relay No.1 ON)
Vehicle speed is less than specified value.
Vehicle speed is more than specified value and refrigerant pressure more than specified value.
Wheel speed sensor malfunction is not detected.
High speed mode (Radiator cooling fan relays No.1, No.2 and No.3 ON)
Refrigerant pressure more than specified value.

---

## AENLSB0A7201007 - OBD System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7201007.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > General Description
Outgoing references:
- AENLSB0A7204007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204007.xml | DTC Check

Content:
OBD System Description
BCM detects malfunctions, which may occur in the following areas:
Inside air temperature sensor
Sunload sensor
CAN communication line
LIN communication line
Temperature control actuator
Air flow control actuator
Air intake control actuator
Auto A/C panel
BCM
When BCM detects malfunction, the “AUTO” display (1) flashes to warn and the diagnostic trouble code (DTC) is stored in the memory of the module. When diagnosing trouble, the DTC can be checked with
DTC Check
.

---

## AENLSB0A7201008 - CAN Communication System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7201008.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > General Description > Models > K14C
Outgoing references: none

Content:
CAN Communication System Description
BCM communicates with other control modules through CAN communication. For CAN communication, refer to “Communication System Description”.
K14C model:

---

## AENLSB0A7202001 - Auto A/C Electronic Control Input / Output Block Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7202001.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Schematic and Routing Diagram
Outgoing references: none

Content:
Auto A/C Electronic Control Input / Output Block Diagram

---

## AENLSB0A7202002 - Auto A/C System Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7202002.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Schematic and Routing Diagram > Models > K14C
Outgoing references: none

Content:
Auto A/C System Circuit Diagram
[A]:
K14C model
18.
ECM
37.
“MODE” (air flow) switch
[B]:
19.
APP sensor (main)
38.
“AUTO” switch
1.
J/B
20.
APP sensor (sub)
39.
“OFF” switch
2.
Rear defogger relay
21.
ECT sensor
40.
Air intake switch
3.
Rear defogger
22.
A/C refrigerant pressure sensor
41.
Defroster switch
4.
Relay box
23.
CKP sensor
42.
Rear defogger switch
5.
Blower motor relay
24.
CAN driver
43.
BCM
6.
Main relay
25.
Auto A/C panel
44.
Outside air temperature sensor
7.
“FI” fuse
26.
Power supply switch
45.
Inside air temperature sensor
8.
Radiator cooling fan relay No.1
27.
Power supply circuit
46.
Evaporator temperature sensor
9.
Radiator cooling fan relay No.2
28.
Illumination light
47.
Sunload sensor
10.
Radiator cooling fan relay No.3
29.
Indicator light
48.
Temperature control actuator
11.
A/C compressor relay
30.
LCD back light
49.
Air flow control actuator
12.
Blower motor
31.
LIN driver
50.
Air intake control actuator
13.
Diode
32.
CPU
51.
To BCM
14.
Radiator cooling main motor
33.
LCD
52.
To ignition power supply
15.
Radiator cooling sub motor
34.
Temperature control selector
53.
To other control module and DLC connected by CAN
16.
Compressor
35.
Blower speed selector
54.
To combination meter
17.
Blower motor controller
36.
A/C switch
55.
Sub relay box

---

## AENLSB0A7203001 - Auto A/C Control System Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7203001.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Component Location > Models > K14C
Outgoing references: none

Content:
Auto A/C Control System Component Location
This figure shows component location on LHD as an example.
[A]:
K14C model
11.
A/C switch
23.
A/C compressor relay
[B]:
12.
“AUTO” switch
24.
Radiator cooling fan relay No.1
1.
BCM
13.
Defroster switch
25.
Radiator cooling fan relay No.2
2.
Rear defogger relay
14.
Rear defogger switch
26.
Radiator cooling fan relay No.3
3.
Auto A/C panel
15.
HVAC unit
27.
Blower motor relay
4.
Inside air temperature sensor
16.
Compressor
28.
Main relay
5.
Sunload sensor
17.
Radiator cooling fan
29.
Air flow control actuator
6.
Blower speed selector
18.
Outside air temperature sensor
30.
Temperature control actuator
7.
Temperature control selector
19.
Air intake control actuator
31.
ECM
8.
“MODE” (air flow) switch
20.
A/C refrigerant pressure sensor
32.
Evaporator temperature sensor
9.
“OFF” switch
21.
Blower motor
33.
Radiator cooling sub fan
10.
Air intake switch
22.
Blower motor controller

---

## AENLSB0A7204001 - A/C System Performance Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204001.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A7206002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206002.xml | A/C System Major Components
- AENLSB0A7204002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204002.xml | Trouble Diagnosis for Abnormal Pressure
- AENLSB0A7206002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206002.xml | A/C System Major Components
- AENLSB0A7204002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204002.xml | Trouble Diagnosis for Abnormal Pressure

Content:
A/C System Performance Inspection
HFC-134a Model
Check that vehicle and environmental conditions are as follows.
Vehicle is put indoors.
Ambient temperature is within 25 – 35 °C (77 – 95 °F).
Relative humidity is within 30 – 70%.
There is no wind indoors.
HVAC unit is normal.
Blower motor is normal.
There is no air leakage from air ducts.
Condenser fins are clean.
HVAC air filter is not clogged with dirt and dust.
Battery voltage is about 12 V or more (battery in good condition).
Radiator cooling fan operates normally.
Check that high pressure valve (1) and low pressure valve (2) of manifold gauge are firmly closed.
Connect high pressure charging hose (3) to high pressure service valve (4) and low pressure charging hose (5) to low pressure service valve (6).
For locations of high pressure service valve and low pressure service valve, refer to
A/C System Major Components
.
The HVAC system of this vehicle is filled with either of two refrigerant types, HFC-134a (R-134a) or HFO-1234yf (R-1234yf). And, service valves for each refrigerant type have different dimensions. Use manifold gauge set compatible with respective refrigerant.
Warm up engine to normal operating temperature and keep it at specified idle speed.
Turn A/C switch ON, and then set blower speed selector to maximum speed position, temperature selector to maximum cold position, air flow selector to face position, air intake selector to recirculation mode and side ventilation louvers to open position. (Check that compressor and radiator cooling fan are working.)
Wait for ten minutes to stabilize A/C operation.
Open all door windows, front doors and hood.
Put about 20 mm (0.79 in.) of dry-bulb thermometer (1) in front of center ventilation louver (2). Put wet-and-dry-bulb thermometer (3) near air inlet of HVAC unit.
Check for each pressure of low side and high side if it is within shaded range in the cooling inspection graph. If each gauge reading is out of specified pressure, correct defective part referring to the following table.
When diagnosing troubles of abnormal pressure on the low side and high side more specifically, refer to
Trouble Diagnosis for Abnormal Pressure
.
If radiator fan changes speed between Low and High while checking the pressure, wait for another ten minutes to stabilize A/C operation.
Cooling inspection graph shows a measured value under relative humidity of 30 – 70%. Outlet air temperature has a decreasing tendency when the humidity is 30% and an increasing tendency when the humidity is 70%.
Outlet air temperature may vary according to relative humidity under the same conditions of inlet air temperature, low pressure value and high pressure value.
Cooling inspection graph (High and low pressure gauge)
[a]:
Pressure on high pressure gauge
[c]:
Temperature near air inlet of HVAC unit
[e]:
Acceptable range
[b]:
Pressure on low pressure gauge
[d]:
Humidity
An example of normal condition, judged from measurement result and cooling inspection graph (ambient temperature at 30 °C (86 °F))
Pressure on high pressure gauge (HI): 1420 – 1870 kPa (14.5 – 19.1 kgf/cm 2 ) (205 – 271 psi)
Pressure on low pressure gauge (LO): 280 – 380 kPa (2.9 – 3.9 kgf/cm 2 ) (40.6 – 55.1 psi)
High pressure gauge
Condition
Possible cause
Correction
Pressure is higher than acceptable range (“f” area)
Refrigerant overcharged
Recharge.
Expansion valve frozen or clogged
Check expansion valve.
Clogged refrigerant passage of high pressure side
Clean or replace.
Radiator cooling fan malfunction (insufficient cooling of condenser)
Check radiator cooling fan.
Dirty or bent condenser fins (insufficient cooling of condenser)
Clean or repair.
Compressor malfunction (insufficient oil, etc.)
Check compressor.
Engine overheat
Check engine cooling system.
Pressure is lower than acceptable range (“g” area)
Insufficient refrigerant (insufficient charge or leakage)
Check for leakage, repair if necessary and recharge.
Expansion valve malfunction (valve opens too wide)
Check expansion valve.
Compressor malfunction (insufficient compression)
Check compressor.
Low pressure gauge
Condition
Possible cause
Correction
Pressure is higher than acceptable range (“h” area)
Expansion valve malfunction (valve opens too wide)
Check expansion valve.
Compressor malfunction (insufficient compression)
Check compressor.
Pressure is lower than acceptable range (“i” area)
Insufficient refrigerant (insufficient charge or leakage)
Check for leakage, repair if necessary and recharge.
Expansion valve malfunction (valve opens too narrow)
Check expansion valve.
Clogged refrigerant passage (crushed pipe)
Repair or replace.
Check correlation between inlet port temperature and outlet port temperature using the graph. For example, if temperature near air inlet of HVAC unit is 30 °C (86 °F) and the one at air outlet of center ventilation louver is 17 °C (62.6 °F), their crossing point is within acceptable range as shown in the graph. In this case, cooling performance is satisfactory and proper.
If crossing point is out of acceptable range, diagnose trouble referring to the following table.
Cooling inspection graph (Thermometer at center ventilation louver)
[a]:
Temperature at outlet of center ventilation louver
[c]:
Humidity
[e]:
Crossing point
[b]:
Temperature near air inlet of HVAC unit
[d]:
Acceptable range
Thermometer at center ventilation louver
Condition
Possible cause
Correction
Crossing point is higher than acceptable range (“f” area)
Insufficient or excessive charge of refrigerant
Check refrigerant pressure.
Dirty or bent evaporator fins
Clean or repair.
Air leakage from cooling (heater) unit or air duct
Repair or replace.
Malfunctioning, switch over function of door in cooling (heater) unit
Repair or replace.
Compressor malfunction
Check compressor.
Crossing point is lower than acceptable range (“g” area)
Insufficient air volume from center ventilation louver (heater blower malfunction)
Check blower motor and fan.
Compressor malfunction
Check compressor.
After completion of repair, check the system performance again.
HFO-1234yf Model
Check that vehicle and environmental conditions are as follows.
Vehicle is put indoors.
Ambient temperature is within 25 – 35 °C (77 – 95 °F).
Relative humidity is within 30 – 70%.
There is no wind indoors.
HVAC unit is normal.
Blower motor is normal.
There is no air leakage from air ducts.
Condenser fins are clean.
HVAC air filter is not clogged with dirt and dust.
Battery voltage is about 12 V or more (battery in good condition).
Radiator cooling fan operates normally.
Check that high pressure valve (1) and low pressure valve (2) of manifold gauge are firmly closed.
Connect high pressure charging hose (3) to high pressure service valve (4) and low pressure charging hose (5) to low pressure service valve (6).
For locations of high pressure service valve and low pressure service valve, refer to
A/C System Major Components
.
The HVAC system of this vehicle is filled with either of two refrigerant types, HFC-134a (R-134a) or HFO-1234yf (R-1234yf). And, service valves for each refrigerant type have different dimensions. Use manifold gauge set compatible with respective refrigerant.
Warm up engine to normal operating temperature and keep it at specified idle speed.
Turn A/C switch ON, and then set blower speed selector to maximum speed position, temperature selector to maximum cold position, air flow selector to face position, air intake selector to recirculation mode and side ventilation louvers to open position. (Check that compressor and radiator cooling fan are working.)
Wait for ten minutes to stabilize A/C operation.
Open all door windows, front doors and hood.
Put about 20 mm (0.79 in.) of dry-bulb thermometer (1) in front of center ventilation louver (2). Put wet-and-dry-bulb thermometer (3) near air inlet of HVAC unit.
Check for each pressure of low side and high side if it is within shaded range in the cooling inspection graph. If each gauge reading is out of specified pressure, correct defective part referring to the following table.
When diagnosing troubles of abnormal pressure on the low side and high side more specifically, refer to
Trouble Diagnosis for Abnormal Pressure
.
If radiator fan changes speed between Low and High while checking the pressure, wait for another ten minutes to stabilize A/C operation.
Cooling inspection graph shows a measured value under relative humidity of 30 – 70%. Outlet air temperature has a decreasing tendency when the humidity is 30% and an increasing tendency when the humidity is 70%.
Outlet air temperature may vary according to relative humidity under the same conditions of inlet air temperature, low pressure value and high pressure value.
Cooling inspection graph (High and low pressure gauge)
[a]:
Pressure on high pressure gauge
[c]:
Temperature near air inlet of HVAC unit
[e]:
Acceptable range
[b]:
Pressure on low pressure gauge
[d]:
Humidity
An example of normal condition, judged from measurement result and cooling inspection graph (ambient temperature at 30 °C (86 °F))
Pressure on high pressure gauge (HI): 1300 – 1870 kPa (13.3 – 19.1 kgf/cm 2 ) (188 – 271 psi)
Pressure on low pressure gauge (LO): 300 – 420 kPa (3.1 – 4.3 kgf/cm 2 ) (43.5 – 60.9 psi)
High pressure gauge
Condition
Possible cause
Correction
Pressure is higher than acceptable range
(“f” area)
Refrigerant overcharged
Recharge.
Expansion valve frozen or clogged
Check expansion valve.
Clogged refrigerant passage of high pressure side
Clean or replace.
Radiator cooling fan malfunction (insufficient cooling of condenser)
Check radiator cooling fan.
Dirty or bent condenser fins (insufficient cooling of condenser)
Clean or repair.
Compressor malfunction (insufficient oil, etc.)
Check compressor.
Engine overheat
Check engine cooling system.
Pressure is lower than acceptable range
(“g” area)
Insufficient refrigerant (insufficient charge or leakage)
Check for leakage, repair if necessary and recharge.
Expansion valve malfunction (valve opens too wide)
Check expansion valve.
Compressor malfunction (insufficient compression)
Check compressor.
Low pressure gauge
Condition
Possible cause
Correction
Pressure is higher than acceptable range
(“h” area)
Expansion valve malfunction (valve opens too wide)
Check expansion valve.
Compressor malfunction (insufficient compression)
Check compressor.
Pressure is lower than acceptable range
(“i” area)
Insufficient refrigerant (insufficient charge or leakage)
Check for leakage, repair if necessary and recharge.
Expansion valve malfunction (valve opens too narrow)
Check expansion valve.
Clogged refrigerant passage (crushed pipe)
Repair or replace.
Check correlation between inlet port temperature and outlet port temperature using the graph. For example, if temperature near air inlet of HVAC unit is 30 °C (86 °F) and the one at air outlet of center ventilation louver is 17 °C (62.6 °F), their crossing point is within acceptable range as shown in the graph. In this case, cooling performance is satisfactory and proper.
If crossing point is out of acceptable range, diagnose trouble referring to the following table.
Cooling inspection graph (Thermometer at center ventilation louver)
[a]:
Temperature at outlet of center ventilation louver
[c]:
Humidity
[e]:
Crossing point
[b]:
Temperature near air inlet of HVAC unit
[d]:
Acceptable range
Thermometer at center ventilation louver
Condition
Possible cause
Correction
Crossing point is higher than acceptable range (“f” area)
Insufficient or excessive charge of refrigerant
Check refrigerant pressure.
Dirty or bent evaporator fins
Clean or repair.
Air leakage from cooling (heater) unit or air duct
Repair or replace.
Malfunctioning, switch over function of door in cooling (heater) unit
Repair or replace.
Compressor malfunction
Check compressor.
Crossing point is lower than acceptable range (“g” area)
Insufficient air volume from center ventilation louver (heater blower malfunction)
Check blower motor and fan.
Compressor malfunction
Check compressor.
After completion of repair, check the system performance again.

---

## AENLSB0A7204002 - Trouble Diagnosis for Abnormal Pressure
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204002.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A7204001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204001.xml | A/C System Performance Inspection

Content:
Trouble Diagnosis for Abnormal Pressure
Normal pressure for high pressure gauge (HI) and low pressure gauge (LO) in the following table are those measured when the ambient temperature is about 30 °C (86 °F). As normal pressure for both gauges vary depending on the ambient temperature, perform the following steps before starting diagnosis of troubles.
Measure the ambient temperature and using that temperature, read the normal high and low pressure from the graph given in Step 9 of
A/C System Performance Inspection
.
Use these values in place of the normal pressure in the following table.
HFC-134a Model
Condition
Possible cause
Correction
Manifold gauge (kPa (kgf/cm 2 ) (psi))
Detail
LO
HI
280 – 380 (2.9 – 3.9) (40.6 – 55.1)
1420 – 1870 (14.5 – 19.1) (205 – 271)
Normal condition
—
—
Negative pressure
500 – 600
(5.1 – 6.1)
(72.6 – 87.0)
LO gauge reads negative pressure, while HI gauge reads extremely low pressure.
Presence of frost around tubing to and from condenser assembly and expansion valve.
Dust particles accumulate or water droplets are frozen inside expansion valve, preventing refrigerant from flowing.
Replace expansion valve.
Replace condenser assembly.
Evacuate A/C system and recharge system with fresh refrigerant.
Normal condition:
280 – 380 (2.9 – 3.9) (40.6 – 55.1)
↑ ↓
Abnormal condition:
Negative pressure
Normal condition:
1420 – 1870 (14.5 – 19.1) (205 – 271)
↑ ↓
Abnormal condition:
700 – 1000 (7.2 – 10.2) (102 – 145)
During A/C operation, LO gauge sometimes indicates negative pressure, and sometimes normal pressure. Also HI gauge reading fluctuates between abnormal and normal pressures.
Expansion valve is frozen due to moisture in system, temporarily shutting off refrigeration cycle.
Replace expansion valve.
Replace condenser assembly.
Evacuate A/C system and recharge system with fresh refrigerant.
50 – 150
(0.5 – 1.5)
(7.26 – 21.7)
700 – 1000
(7.2 – 10.2)
(102 – 145)
Both LO and HI gauges indicate low readings.
Output air is slightly cold.
Insufficient refrigerant in system (refrigerant leakage).
Using leak detector, check for leakage and repair if necessary.
Recharge system with refrigerant to specified amount.
If pressure reading is almost 0 when manifold gauges are attached, check for any leakage, repair them, and evacuate system.
400 – 600
(4.1 – 6.1)
(58.1 – 87.0)
Pressure on LO gauge is high.
Pressure on HI gauge is low.
Both pressures become equal right after A/C is turned OFF.
Internal leakage in compressor.
Check compressor and repair or replace if necessary.
400 – 450
(4.1 – 4.6)
(58.1 – 65.2)
2000 – 2500 (20.4 – 25.5) (290 – 362)
High pressure readings on both LO and HI gauges.
Overcharged A/C system.
Adjust refrigerant to specified amount.
Faulty radiator cooling operation.
Clean condenser.
Faulty radiator cooling fan operation.
Check and repair radiator cooling fan.
High pressure reading on both LO and HI gauges.
Low pressure tubing is not cold when touched.
Presence of air in A/C system (improperly evacuated).
Replace condenser.
Check quantity of compressor oil and presence of contaminants in oil.
Evacuate system and recharge system with fresh refrigerant.
450 – 550 (4.6 – 5.6) (65.3 – 79.7)
High pressure reading on both LO and HI gauges.
Large amount of frost or dew on low pressure tubing.
Faulty expansion valve.
Refrigerant flow is not regulated properly.
Replace expansion valve.
HFO-1234yf Model
Condition
Possible cause
Correction
Manifold gauge (kPa (kgf/cm 2 ) (psi))
Detail
LO
HI
300 – 420 (3.1 – 4.3) (43.5 – 60.9)
1300 – 1870 (13.3 – 19.1) (188 – 271)
Normal condition
—
—
Negative pressure
500 – 600
(5.1 – 6.1)
(72.6 – 87.0)
LO gauge reads negative pressure, while HI gauge reads extremely low pressure.
Presence of frost around tubing to and from condenser assembly and expansion valve.
Dust particles accumulate or water droplets are frozen inside expansion valve, preventing refrigerant from flowing.
Replace expansion valve.
Replace condenser assembly.
Evacuate A/C system and recharge system with fresh refrigerant.
Normal condition:
300 – 420 (3.1 – 4.3) (43.5 – 60.9)
↑ ↓
Abnormal condition:
Negative pressure
Normal condition:
1300 – 1870 (13.3 – 19.1) (188 – 271)
↑ ↓
Abnormal condition:
700 – 1000 (7.2 – 10.2) (102 – 145)
During A/C operation, LO gauge sometimes indicates negative pressure, and sometimes normal pressure. Also HI gauge reading fluctuates between abnormal and normal pressures.
Expansion valve is frozen due to moisture in system, temporarily shutting off refrigeration cycle.
Replace expansion valve.
Replace condenser assembly.
Evacuate A/C system and recharge system with fresh refrigerant.
50 – 150
(0.5 – 1.5)
(7.26 – 21.7)
700 – 1000
(7.2 – 10.2)
(102 – 145)
Both LO and HI gauges indicate low readings.
Output air is slightly cold.
Insufficient refrigerant in system
(refrigerant leakage).
Using leak detector, check for leakage and repair if necessary.
Recharge system with refrigerant to specified amount.
If pressure reading is almost 0 when manifold gauges are attached, check for any leakage, repair them, and evacuate system.
400 – 600
(4.1 – 6.1)
(58.1 – 87.0)
Pressure on LO gauge is high.
Pressure on HI gauge is low.
Both pressures become equal right after A/C is turned OFF.
Internal leakage in compressor.
Check compressor and repair or replace if necessary.
400 – 450
(4.1 – 4.6)
(58.1 – 65.2)
2000 – 2500 (20.4 – 25.5) (290 – 362)
High pressure readings on both LO and HI gauges.
Overcharged A/C system.
Adjust refrigerant to specified amount.
Faulty radiator cooling operation.
Clean condenser.
Faulty radiator cooling fan operation.
Check and repair radiator cooling fan.
High pressure reading on both LO and HI gauges.
Low pressure tubing is not cold when touched.
Presence of air in A/C system
(improperly evacuated).
Replace condenser.
Check quantity of compressor oil and presence of contaminants in oil.
Evacuate system and recharge system with fresh refrigerant.
450 – 550 (4.6 – 5.6) (65.3 – 79.7)
High pressure reading on both LO and HI gauges.
Large amount of frost or dew on low pressure tubing.
Faulty expansion valve.
Refrigerant flow is not regulated properly.
Replace expansion valve.

---

## AENLSB0A7204003 - A/C System Symptom Diagnosis
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204003.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures > Models > K14C
Outgoing references: none

Content:
A/C System Symptom Diagnosis
Blower motor does not operate
Blown fuse
Check related fuses, and then check for short circuit to ground.
Faulty blower motor relay
Check blower motor relay.
Faulty blower motor
Check blower motor.
Faulty blower motor controller
Check blower motor controller.
Faulty auto A/C panel
Check auto A/C panel.
Faulty BCM
Check BCM.
Faulty wiring or grounding
Repair wiring.
No cool air comes out (A/C system does not operate)
Blown fuse
Check related fuses, and then check for short circuit to ground.
Faulty A/C compressor relay
Check A/C compressor relay.
Faulty auto A/C panel
Check auto A/C panel.
Faulty ESP ®
Check ESP ® control module.
Faulty ECM and its circuit
Check ECM.
Faulty magnet clutch
Check magnet clutch.
Loose or broken compressor drive belt
Check compressor drive belt.
Faulty compressor
Check compressor.
Faulty ECT sensor
Check ECT sensor.
K14C model:
No refrigerant
Check amount of refrigerant and system for leakage.
Recover refrigerant, evacuate and charge A/C system.
Faulty A/C refrigerant pressure sensor
Check A/C refrigerant pressure sensor.
Faulty evaporator temperature sensor
Check evaporator temperature sensor.
Faulty BCM
Check BCM.
Faulty wiring or grounding
Repair wiring.
No cool air comes out (Radiator cooling fan motor does not operate)
Blown fuse
Check related fuses, and then check for short circuit to ground.
Faulty radiator cooling fan relay
Check radiator cooling fan relay.
Faulty radiator cooling fan motor
Check radiator cooling fan motor.
K14C model:
Faulty ECM
Check ECM.
Faulty BCM
Check BCM.
Faulty wiring or grounding
Repair wiring.
Cool air does not come out or insufficient cooling (Compressor in normal operation)
Faulty blower motor
Check blower motor.
Faulty temperature control actuator
Check temperature control actuator.
Air leakage from HVAC unit or air duct
Repair HVAC unit or air duct.
Loose or broken compressor drive belt
Check compressor drive belt.
Faulty magnet clutch
Check magnet clutch.
Faulty compressor
Check compressor.
Faulty expansion valve
Check expansion valve.
Faulty heater and ventilation system
Check HVAC unit.
Insufficient or excessive charge of refrigerant
Check amount of refrigerant and system for leakage.
Excessive compressor oil in A/C system
Drain excessive compressor oil from A/C system circuit and compressor.
Clogged condenser
Check condenser.
Clogged or frosted evaporator
Check evaporator and evaporator temperature sensor.
Evaporator:
Evaporator temperature sensor:
Faulty evaporator temperature sensor
Check evaporator temperature sensor.
Air in A/C system
Replace condenser, and then evacuate and charge A/C system with refrigerant.
Cool air does not come out intermittently
Faulty magnet clutch
Check magnet clutch.
Excessive amount of refrigerant
Check the amount of refrigerant.
Faulty expansion valve
Check expansion valve.
Faulty evaporator temperature sensor
Check evaporator temperature sensor.
Excessive moisture in A/C system
Replace condenser, and then evacuate and charge A/C system.
Faulty wiring connection
Repair wiring if necessary.
Cool air comes out only at high speed
Loose or broken compressor drive belt
Check compressor drive belt.
Faulty compressor
Check compressor.
Clogged condenser
Check condenser.
Insufficient charge of refrigerant
Check the amount of refrigerant and system for leakage.
Air in A/C system
Replace condenser, and then evacuate and charge A/C system with refrigerant.
Cool air does not come out only at high speed
Excessive amount of refrigerant
Check the amount of refrigerant.
Frosted evaporator
Check evaporator and evaporator temperature sensor.
Evaporator:
Evaporator temperature sensor:
Insufficient cool air flow
Faulty blower motor
Check blower motor.
Air leakage from HVAC unit or air duct
Repair HVAC unit or air duct.
Clogged or frosted evaporator
Check evaporator and evaporator temperature sensor.
Evaporator:
Evaporator temperature sensor:
Faulty wiring or grounding
Repair wiring if necessary.

---

## AENLSB0A7204004 - Abnormal Noise Symptom Diagnosis of A/C System
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204004.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures > Models > K14C
Outgoing references: none

Content:
Abnormal Noise Symptom Diagnosis of A/C System
Abnormal Noise from Compressor
During compressor operation, a rumbling noise is heard as to engine speed increases
Inadequate clearance in scroll area
Replace compressor.
Loud noise is heard at certain rpm, irrespective of greatness of speed
Loose or faulty compressor drive belt
Check compressor drive belt.
Loose compressor mounting bolts
Retighten mounting bolts.
Loud rattle is heard at low engine rpm
Loose compressor armature plate bolt
Replace compressor if it has operated in rattling condition for a long time.
Retighten armature plate bolt.
Abnormal Noise from Magnet Clutch
Rumbling noise is heard when compressor is not in operation
Worn or damaged bearings
Replace magnet clutch assembly.
Chattering noise is heard when compressor is in operation
Faulty magnet clutch clearance (excessive clearance)
Adjust magnet clutch clearance.
Worn magnet clutch friction surface
Replace magnet clutch assembly.
Compressor oil leakage from shaft seal, contaminating friction surface
Replace compressor body assembly.
Abnormal Noise from Tubing
Droning noise is heard from inside of the vehicle, but not particularly noticeable in engine compartment
Faulty tubing clamps
Reposition clamps or increase number of clamps.
Resonance caused by pulsation from variations in refrigerant pressure
Attach a silencer to tubing, or modify its position and length.
Abnormal Noise from Condenser Assembly
Considerable vibration in condenser assembly
Resonance from condenser assembly bracket and body
Firmly insert a silencer between condenser assembly bracket and body.
Abnormal Noise from Crankshaft Pulley
Large rattling noise is heard at idle or sudden acceleration
Loosen crankshaft pulley bolt
Retighten bolt.
K14C model:
Abnormal Noise from Tension Pulley
Clattering noise is heard from pulley
Worn or damaged bearing
Replace tension pulley.
Pulley cranks upon contact
Cracked or loose bracket
Replace or retighten bracket.
Abnormal Noise from Evaporator
Whistling sound is heard from evaporator
Depending on the combination of the interior / exterior temperatures, engine rpm and refrigerant pressure, the refrigerant flowing out of the expansion valve may generate whistling sound.
Slightly decreasing amount of refrigerant may stop this noise.
Check expansion valve and replace it if faulty.
Abnormal Noise from Blower Motor
Blower motor emits a chirping sound in proportion to its speed of rotation
Worn or damaged motor brushes or commutator
Replace blower motor.
Fluttering noise or large droning noise is heard from blower motor
Leaves or other debris introduced from fresh air inlet to blower motor
Remove debris and check that screen at fresh air inlet is intact.

---

## AENLSB0A7204005 - Air Conditioning System Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204005.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A7204005010 -> unresolved | Step 1: Customer Complaint Analysis
- AENLSB0A7204005011 -> unresolved | Step 2: Visual Inspection
- AENLSB0A7204005012 -> unresolved | Step 3: DTC Check
- AENLSB0A7204005013 -> unresolved | Step 4: DTC Troubleshooting
- AENLSB0A7204005014 -> unresolved | Step 5: A/C System Performance Inspection
- AENLSB0A7204005017 -> unresolved | Step 8: Final Confirmation Test
- AENLSB0A7204006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204006.xml | Visual Inspection
- AENLSB0A7204007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204007.xml | DTC Check
- AENLSB0A7204001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204001.xml | A/C System Performance Inspection
- AENLSB0A7204003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204003.xml | A/C System Symptom Diagnosis
- AENLSB0A0006002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0006002.xml | Intermittent Connection and Poor Contact Inspection

Content:
Air Conditioning System Check
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
Repair or replace defective part.
Go to Step 3.
DTC check
Perform
Step 3: DTC Check
.
Is there any DTC?
Go to Step 4.
Go to Step 5.
DTC troubleshooting
Perform
Step 4: DTC Troubleshooting
.
Is there any faulty condition?
Repair or replace defective part, and then go to Step 7.
Go to Step 5.
A/C system performance inspection
Perform
Step 5: A/C System Performance Inspection
.
Is there any faulty condition?
Repair or replace defective part, and then go to Step 8.
Go to Step 6.
A/C system symptom diagnosis
Check and repair A/C system.
Is there any faulty condition?
Repair or replace defective part, and then go to Step 8.
Go to Step 7.
Check for intermittent problem
Check for intermittent problems.
Is there any faulty condition?
Repair or replace defective part, and then go to Step 8.
Go to Step 8.
Final confirmation test
Perform
Step 8: Final Confirmation Test
.
Is there any malfunction code?
Go to Step 4.
End.
Step 1: Customer Complaint Analysis
Talk to customer, and then record details of the problem.
The form is a standard sample. It should be modified according to conditions characteristic of each market.
Customer questionnaire form (Example)
Step 2: Visual Inspection
As a preliminary step, perform visual check of the items that support proper function of the air conditioning system referring to
Visual Inspection
.
Step 3: DTC Check
Check DTC referring to
DTC Check
.
Step 4: DTC Troubleshooting
Based on the DTC, perform an applicable DTC diagnostic flow and locate the cause of the trouble, namely in a sensor, wire harness, connector, actuator, ECM or other part and repair faulty parts.
Step 5: A/C System Performance Inspection
Check A/C system suspected to be a possible cause referring to
A/C System Performance Inspection
.
Step 6: A/C System Symptom Diagnosis
Check any part or system suspected to be a possible cause referring to
A/C System Symptom Diagnosis
.
Step 7: Intermittent Problem Check
Check parts that are prone to cause intermittent problem (e.g. wire harness, connector, etc.), referring to
Intermittent Connection and Poor Contact Inspection
and related circuit of trouble code recorded.
Step 8: Final Confirmation Test
Check that trouble symptom has disappeared and A/C system is free from abnormal conditions. Clear recorded DTCs, check that the same DTC is not detected and check if any other DTC is detected.

---

## AENLSB0A7204006 - Visual Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204006.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures > Models > K14C
Outgoing references:
- AENLSB0A1A11001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A11001.xml | Battery Description:K14C
- AENLSB0A0006002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0006002.xml | Intermittent Connection and Poor Contact Inspection
- AENLSB0A0006002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0006002.xml | Intermittent Connection and Poor Contact Inspection

Content:
Visual Inspection
Visually check the following parts and systems.
Inspection item
Referring section
Battery – Fluid level and corrosion of terminals
K14C model:
Battery Description:K14C
Connections of electric wire harness – Disconnection and friction
Intermittent Connection and Poor Contact Inspection
Fuses – Blowout
Intermittent Connection and Poor Contact Inspection
Parts – Installation and damage
—
Other parts that can be checked visually
—

---

## AENLSB0A7204007 - DTC Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204007.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures > Models > K14C
Outgoing references: none

Content:
DTC Check
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Light sunload sensor with an incandescent light or sun shine in a sunny day.
DTC B150A is detected even though there is not any malfunction if sunload sensor is not lit by an incandescent light or sun shine. Light the sunload sensor with an incandescent light or sun shine.
Set ignition “ON”.
Read DTC according to instructions displayed on SUZUKI scan tool and print it or write it down. Refer to Operator's Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and BCM is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
K14C model:
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
K14C model:
Check central gateway control module power supply circuit and ground circuit.
Check BCM power circuit and ground circuit.
After completing the check, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0A7204008 - DTC Clearance
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204008.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA204004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204004.xml | DTC Clearance

Content:
DTC Clearance
Refer to
DTC Clearance
.

---

## AENLSB0A7204009 - DTC Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204009.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A7204005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204005.xml | Air Conditioning System Check
- AENLSB0AA204005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204005.xml | DTC Table

Content:
DTC Table
Perform
Air Conditioning System Check
before starting DTC troubleshooting.
DTC
DTC name
DTC detecting condition
“AUTO” indicator
Display SUZUKI scan tool
B1141
Outside Air Temperature (Ambient Temperature) Sensor Circuit Open
Refer to
DTC Table
.
Blinking
B1142
Outside Air Temperature (Ambient Temperature) Sensor Circuit Short To Ground
Blinking
B1145
A/C Evaporator Temperature Sensor Circuit High
Blinking
B1146
A/C Evaporator Temperature Sensor Circuit Low
Blinking
B1508
Inside Air Temperature Sensor Circuit High
Inside air temperature sensor signal voltage is higher than specified value (4.9 V) for specified time continuously.
Blinking
B1509
Inside Air Temperature Sensor Circuit Low
Inside air temperature sensor signal voltage is lower than specified value (0.1 V) for specified time continuously.
Blinking
B150A
Sunload Sensor Circuit High
Sunload sensor signal voltage is higher than specified value (4.9 V) for specified time continuously.
Off
B150B
Sunload Sensor Circuit Low
Sunload sensor signal voltage is lower than specified value (0.1 V) for specified time continuously.
Off
B150C
Temperature Control Actuator Position Sensor Circuit High
Signal voltage of position sensor in temperature control actuator is higher than specified value (4.9 V) for specified time continuously.
Blinking
B150D
Temperature Control Actuator Position Sensor Circuit Low
Signal voltage of position sensor in temperature control actuator is lower than specified value (0.1 V) for specified time continuously.
Blinking
B1513
Temperature Control Actuator (Motor) and/or Its Circuit Malfunction
Difference between target opening and actual opening is more than specified value even though temperature control actuator has operated for specified time.
Blinking
B1514
Air Flow Control Actuator (Motor) and/or Its Circuit Malfunction
Difference between target opening and actual opening is more than specified value even though air flow control actuator has operated for specified time.
Blinking
B1519
Air Flow Control Actuator Position Sensor Circuit High
Signal voltage of position sensor in air flow control actuator is higher than specified value (4.9 V) for specified time continuously.
Blinking
B151A
Air Flow Control Actuator Position Sensor Circuit Low
Signal voltage of position sensor in air flow control actuator is lower than specified value (0.1 V) for specified time continuously.
Blinking
B151B
Air Intake Control Actuator Position Sensor Circuit High
Signal voltage of position sensor in air intake control actuator is higher than specified value (4.9 V) for specified time continuously.
Blinking
B151C
Air Intake Control Actuator Position Sensor Circuit Low
Signal voltage of position sensor in air intake control actuator is lower than specified value (0.1 V) for specified time continuously.
Blinking
B1531
Air Intake Control Actuator and/or Its Circuit Malfunction
Difference between target opening and actual opening is more than specified value even though air intake control actuator has operated for specified time.
Blinking
B1546
A/C Refrigerant Pressure Malfunction
A/C refrigerant pressure is less than specified value, though outside air temperature is more than specified value.
Off
B1549
LIN Invalid Data from BCM to Auto A/C Panel
Transmitted data from BCM to auto A/C panel via LIN is faulty.
Blinking
B1563
A/C Refrigerant Pressure Sensor and/or Its Circuit Malfunction
BCM receives invalid data of A/C refrigerant pressure signal from ECM.
Off
U0073
Control Module Communication Bus Off
Transmitting and receiving error of BCM for specified time continuously.
Blinking
U0100
Lost Communication With ECM
Receiving error of BCM from ECM for specified time continuously.
Blinking
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of BCM from combination meter for specified time continuously.
Off
U2005
LIN Lost Communication With Auto A/C Panel
Received data from auto A/C panel via LIN is faulty.
Blinking

---

## AENLSB0A7204010 - Fail-Safe Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204010.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Fail-Safe Table
DTC
Fail-safe operation
B1141
BCM controls actuators assuming that outside air temperature is 20 °C (68 °F).
B1142
B1145
BCM controls actuators assuming that evaporator temperature is 0 °C (32 °F).
B1146
B1508
/ B1509
BCM controls actuators assuming that inside air temperature is 25 °C (77 °F).
B1549 / U2005
BCM controls actuators assuming the following points.
Temperature control selector is at 25 °C (77 °F) position.
Mode switch is in “DEF” mode.
Air intake switch is in “FRE” mode.
Blower fan speed is “Auto”.
A/C system is ON.
Rear defogger is OFF.
U0100
BCM controls actuators assuming that water temperature is 80 °C (77 °F).
BCM controls actuators assuming that speed is 255 km/h (158 MPH).

---

## AENLSB0A7204011 - Scan Tool Data
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204011.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures > Models > K14C
Outgoing references:
- AENLSB0A7204001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204001.xml | A/C System Performance Inspection

Content:
Scan Tool Data
BCM
If communication between SUZUKI scan tool and BCM is not possible, perform the following checks:
Check communication condition between PC and VCI using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
K14C model:
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
K14C model:
Check central gateway control module power supply circuit and ground circuit.
Check BCM power supply circuit and ground circuit.
Scan tool data
Condition
Normal condition / Reference value
Temp Cont Switch
Ignition: “ON”
Temperature control selector: “LO” position
MAX COOL
Ignition: “ON”
Each reference value is relative to the selected position according to temperature control selector.
15 °C (59.0 °F) – 32 °C (89.6 °F)
Ignition: “ON”
Temperature control selector: “HI” position
MAX HOT
Mode Cont Switch
Ignition: “ON”
“MODE” switch: “VENT” position
VENT
Ignition: “ON”
“MODE” switch: “VENT” + “FOOT” position
VENT + FOOT
Ignition: “ON”
“MODE” switch: “FOOT” position
FOOT
Ignition: “ON”
“MODE” switch: “FOOT” + “DEF” position
FOOT + DEF
Ignition: “ON”
Defroster switch: ON
DEF
Ignition: “ON”
“AUTO” switch: ON
AUTO
Fan Cont Switch
Ignition: “ON”
Blower speed selector: OFF
OFF
Ignition: “ON”
Each reference value is relative to the selected position according to blower speed selector.
1st – 8th
Ignition: “ON”
“AUTO” switch: ON
AUTO
Air Intake Mode
Ignition: “ON”
Air intake switch: “REC” position
REC
Ignition: “ON”
Air intake switch: “FRE” position
FRE
Ignition: “ON”
“AUTO” switch: ON
AUTO
Vehicle Speed
Vehicle stops
0 km/h (0 MPH)
ECT
At specified idle speed after warming up
Approx. 80 °C (176 °F) – 100 °C (212 °F)
Outside Air Temp
Ignition: “ON”
Each reference value is relative to outside air temperature.
–40 °C – 87.5 °C (–40 °F – 189.5 °F)
Cabin Temperature
Ignition: “ON”
Each reference value is relative to in-car temperature.
–40 °C – 87.5 °C (–40 °F – 189.5 °F)
Sun Load
Ignition: “ON”
Each reference value depends on the situation.
0 W/m 2 – 1275 W/m 2
Evaporator Temp
A/C switch: ON
Temperature control selector: “LO” position
Blower speed selector: 1st position
0 °C – 5 °C (32 °F – 41 °F)
Refrigerant Pressure
Ignition: “ON”
A/C system: ON (compressor is operating)
Ambient temperature: 30 °C (86 °F)
K14C model (HFC-134a): 1420 – 1870 kPa
(For details, refer to pressure of high pressure gauge under
A/C System Performance Inspection
.)
Engine running
After compressor is turned off, more than 10 min.
Ambient temperature: 30 °C (86 °F)
ECT: 90 °C (194 °F) – 100 °C (212 °F)
Approx. 1250 – 1350 kPa
Air Mix Pos Sen
Ignition: “ON”
Temperature control selector: “LO” position
Approx. 4.3 V
Ignition: “ON”
Temperature control selector: “HI” position
Approx. 0.65 V
Mode Pos Sensor
Ignition: “ON”
“MODE” switch: “VENT” position
Approx. 4.3 V
Ignition: “ON”
Defroster switch: ON
Approx. 0.7 V
R/F Pos Sensor
Ignition: “ON”
Air intake switch: “REC” position
Approx. 3.65 V
Ignition: “ON”
Air intake switch: “FRE” position
Approx. 1.4 V
Fan Desired Volt
Ignition: “ON”
Blower speed selector: 1st position
Approx. 4.0 V
Ignition: “ON”
Blower speed selector: 2nd position
Approx. 5.4 V
Ignition: “ON”
Blower speed selector: 3rd position
Approx. 6.6 V
Ignition: “ON”
Blower speed selector: 4th position
Approx. 7.7 V
Ignition: “ON”
Blower speed selector: 5th position
Approx. 8.9 V
Ignition: “ON”
Blower speed selector: 6th position
Approx. 10.0 V
Ignition: “ON”
Blower speed selector: 7th position
Approx. 11.2 V
Ignition: “ON”
Blower speed selector: 8th position
Approx. 12.6 V
A/C Cont Sig
Ignition: “ON”
A/C switch: ON
ON
Ignition: “ON”
A/C switch: OFF
OFF
Blower Load Sig
Ignition: “ON”
Blower speed selector: 4th or higher speed position
ON
Ignition: “ON”
Blower speed selector: Other than above position
OFF
Rear DEF Indicator
Rear defogger switch: ON
ON
Rear defogger switch: OFF
OFF
A/C Comp Clutch (A/C Comp Clutch
A/C switch: ON
Blower speed selector: Other than OFF position with engine running
ON
A/C switch: OFF with engine running
OFF
Scan Tool Data Definitions
Temp Cont Switch (Temperature control selector position, Max cool, °C / °F, Max hot)
This parameter indicates the selected position of temperature control selector.
Mode Cont Switch (Air flow switch position, AUTO, VENT, VENT + FOOT, FOOT, FOOT + DEF, DEF)
This parameter indicates the selected position of “MODE” switch.
Fan Cont Switch (Blower speed selector, AUTO, OFF, 1st – 8th)
This parameter indicates the selected position of blower speed selector.
Air Intake Mode (Air intake switch position, AUTO, FRE, REC)
This parameter indicates the selected position of air intake switch.
Vehicle Speed (km/h, MPH)
This parameter indicates the vehicle speed calculated by ECM.
ECT (Engine coolant temperature °C, °F)
This parameter indicates the engine coolant temperature calculated by ECM.
Outside Air Temp (Outside air temperature, °C, °F)
This parameter indicates the outside air temperature detected by outside air temperature sensor.
Cabin Temperature (In-car temperature, °C, °F)
This parameter indicates the in-car temperature detected by inside air temperature sensor.
Sun Load (W/m2)
This parameter indicates the amount of sunlight detected by sunload sensor.
Evaporator Temp (Evaporator temperature, °C, °F)
This parameter indicates the temperature of evaporator detected by evaporator temperature sensor.
Refrigerant Pressure (A/C refrigerant absolute pressure, kPa)
This parameter indicates the A/C refrigerant absolute pressure detected by A/C refrigerant pressure sensor.
Air Mix Pos Sen (Temperature control actuator position sensor, V)
This parameter indicates the input signal from position sensor in temperature control actuator.
Mode Pos Sensor (Air flow control actuator position sensor, V)
This parameter indicates the input signal from position sensor in air flow control actuator.
R/F Pos Sensor (Air intake control actuator position sensor, V)
This parameter indicates the input signal from position sensor in air intake control actuator.
Fan Desired Volt (Fan desired voltage, V)
This parameter indicates the desired voltage of blower motor.
A/C Cont Sig (A/C control signal, ON, OFF)
This parameter indicates the state of A/C indicator.
Blower Load Sig (Blower fan load signal, ON, OFF)
ON: Blower speed selector is in 4th or higher position.
OFF: Blower speed selector is in OFF position.
Rear DEF Indicator (Rear defogger indicator, ON, OFF)
This parameter indicates the state of rear defogger indicator light.
A/C Comp Clutch (Compressor magnet clutch, ON, OFF)
This parameter indicates the state of the compressor magnet clutch.

---

## AENLSB0A7204012 - DTC B1508
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204012.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures || dtc: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1508
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1508: Inside Air Temperature Sensor Circuit High
Inside air temperature sensor signal voltage is higher than specified value (4.9 V) for specified time continuously.
Inside air temperature sensor circuit
Inside air temperature sensor
BCM
Circuit Diagram
[A]:
BCM connector (View: [a])
A2:
Ground for sensors circuit
2.
BCM
A1:
Inside air temperature sensor signal circuit
1.
Inside air temperature sensor
DTC Confirmation Procedure
Start engine and operate A/C system.
DTC Troubleshooting
When DTC B150A, B150C, B1519 and/or B151B is indicated together, it is possible that sensor ground circuit is open.
Scan tool parameter check
Check “Cabin Temperature” using “Data list” mode on SUZUKI scan tool.
Is temperature below –40 °C (–40 °F)?
Go to Step 2.
Intermittent trouble.
Inside air temperature sensor signal circuit check
Disconnect inside air temperature sensor connector.
Connect “A1” and “A2” circuit terminals of inside air temperature sensor connector using service wire.
Check “Cabin Temperature” using “Data list” mode on SUZUKI scan tool.
Is temperature below –40 °C (–40 °F)?
Go to Step 3.
Replace inside air temperature sensor.
Inside air temperature sensor signal circuit check
Connect “A1” and “A2” circuit terminals of “G04” and “G05” connectors using service wire.
Check “Cabin Temperature” using “Data list” mode on SUZUKI scan tool.
Is temperature below –40 °C (–40 °F)?
Replace BCM and recheck DTC.
Replace instrument panel harness.

---

## AENLSB0A7204013 - DTC B1509
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204013.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures || dtc: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1509
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1509: Inside Air Temperature Sensor Circuit Low
Inside air temperature sensor signal voltage is lower than specified value (0.1 V) for specified time continuously.
Inside air temperature sensor circuit
Inside air temperature sensor
BCM
Circuit Diagram
[A]:
BCM connector (View: [a])
A2:
Ground for sensors circuit
2.
BCM
A1:
Inside air temperature sensor signal circuit
1.
Inside air temperature sensor
DTC Confirmation Procedure
Start engine and operate A/C system.
DTC Troubleshooting
Scan tool parameter check
Check “Cabin Temperature” using “Data list” mode on SUZUKI scan tool.
Is temperature over 87.5 °C (189.5 °F)?
Go to Step 2.
Intermittent trouble.
Inside air temperature sensor signal circuit check
Disconnect inside air temperature sensor connector.
Check “Cabin Temperature” using “Data list” mode on SUZUKI scan tool.
Is temperature over 87.5 °C (189.5 °F)?
Go to Step 3.
Replace inside air temperature sensor.
Inside air temperature sensor signal circuit check
Disconnect “G05” connector.
Check that resistance between “A1” circuit and ground is infinity.
Is check result OK?
Replace BCM and recheck DTC.
Replace instrument panel harness.

---

## AENLSB0A7204014 - DTC B150A
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204014.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures || dtc: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B150A
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B150A: Sunload Sensor Circuit High
Sunload sensor signal voltage is higher than specified value (4.9 V) for specified time continuously.
Sunload sensor circuit
Sunload sensor
BCM
Circuit Diagram
[A]:
BCM connector (View: [a])
A2:
Ground for sensors circuit
2.
BCM
A1:
Sunload sensor signal circuit
1.
Sunload sensor
DTC Confirmation Procedure
Start engine and operate A/C system.
DTC Troubleshooting
When DTC B1508, B150C, B1519 and/or B151B is indicated together, it is possible that sensor ground circuit is open.
DTC B150A is detected even though there is not any malfunction if sunload sensor is not lit by an incandescent light or sun shine. Light the sunload sensor with an incandescent light or sun shine.
Scan tool parameter check
Apply incandescent light or sun shine in a sunny day to sunload sensor vertically.
Check “Sun Load” using “Data list” mode on SUZUKI scan tool.
Is sun load value 0 W/m 2 ?
Go to Step 2.
Intermittent trouble.
Sunload sensor signal circuit check
Disconnect sunload sensor connector.
Connect the “A1” and “A2” circuit terminals of sunload sensor connector using service wire.
Check “Sun Load” using “Data list” mode on SUZUKI scan tool.
Is sun load value 0 W/m 2 ?
Go to Step 3.
Replace sunload sensor.
Sunload sensor signal circuit check
Connect the “A1” and “A2” circuit terminals of “G04” and “G05” connectors using service wire.
Check “Sun Load” using “Data list” mode on SUZUKI scan tool.
Is sun load value 0 W/m 2 ?
Replace BCM and recheck DTC.
Replace instrument panel harness.

---

## AENLSB0A7204015 - DTC B150B
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204015.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures || dtc: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B150B
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B150B: Sunload Sensor Circuit Low
Sunload sensor signal voltage is lower than specified value (0.1 V) for specified time continuously.
Sunload sensor circuit
Sunload sensor
BCM
Circuit Diagram
[A]:
BCM connector (View: [a])
A2:
Ground for sensors circuit
2.
BCM
A1:
Sunload sensor signal circuit
1.
Sunload sensor
DTC Confirmation Procedure
Start engine and operate A/C system.
DTC Troubleshooting
Scan tool parameter check
Check “Sun Load” using “Data list” mode on SUZUKI scan tool.
Is sun load value over 1275 W/m 2 ?
Go to Step 2.
Intermittent trouble.
Sunload sensor signal circuit check
Disconnect sunload sensor connector.
Check “Sun Load” using “Data list” mode on SUZUKI scan tool.
Is sun load value over 1275 W/m 2 ?
Go to Step 3.
Replace sunload sensor.
Sunload sensor signal circuit check
Disconnect “G05” connector.
Check that resistance between “A1” circuit and ground is infinity.
Is voltage as specified?
Replace BCM and recheck DTC.
Replace instrument panel harness.

---

## AENLSB0A7204016 - DTC B150C / B1519 / B151B
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204016.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures || dtc: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B150C / B1519 / B151B
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B150C: Temperature Control Actuator Position Sensor Circuit High
Signal voltage of position sensor in temperature control actuator is higher than specified value (4.9 V) for specified time continuously.
Temperature control actuator circuit
Temperature control actuator
BCM
B1519: Air Flow Control Actuator Position Sensor Circuit High
Signal voltage of position sensor in air flow control actuator is higher than specified value (4.9 V) for specified time continuously.
Air flow control actuator circuit
Air flow control actuator
BCM
B151B: Air Intake Control Actuator Position Sensor Circuit High
Signal voltage of position sensor in air intake control actuator is higher than specified value (4.9 V) for specified time continuously.
Air intake control actuator circuit
Air intake control actuator
BCM
Circuit Diagram
[A]:
BCM connector (View: [a])
B2:
Air flow control actuator circuit (“VENT”)
C4:
Air intake control actuator position sensor signal circuit
A1:
Temperature control actuator circuit (“COOL”)
B3:
Air flow control actuator position sensor power supply circuit
C5:
Air intake control actuator position sensor ground circuit
A2:
Temperature control actuator circuit (“HOT”)
B4:
Air flow control actuator position sensor signal circuit
1.
Temperature control actuator
A3:
Temperature control actuator position sensor power supply circuit
B5:
Air flow control actuator position sensor ground circuit
2.
Air flow control actuator
A4:
Temperature control actuator position sensor signal circuit
C1:
Air intake control actuator circuit (“FRE”)
3.
Air intake control actuator
A5:
Temperature control actuator position sensor ground circuit
C2:
Air intake control actuator circuit (“REC”)
4.
BCM
B1:
Air flow control actuator circuit (“DEF”)
C3:
Air intake control actuator position sensor power supply circuit
DTC Confirmation Procedure
Start engine and operate A/C system.
DTC Troubleshooting
When DTC B1508, B150A, B150C, B1519 and/or B151B is indicated together, it is possible that sensor ground circuit is open.
The following flow shows “DTC B150C: Temperature Control Actuator Position Sensor Circuit High”.
Check “DTC B1519 / B151B” in the same manner as “DTC B150C” referring to the following table.
DTC
Parameter
Circuit
B1519
Mode Pos Sensor
“B4” and “B5” circuit
B151B
R/F Pos Sensor
“C4” and “C5” circuit
Scan tool parameter check
Check “Air Mix Pos Sen” using “Data list” mode on SUZUKI scan tool.
Is voltage over 4.8 V?
Go to Step 2.
Intermittent trouble.
Temperature control actuator position sensor signal circuit check
Disconnect temperature control actuator connector.
Connect the “A4” and “A5” circuit terminals of temperature control actuator connector using service wire.
Check “Air Mix Pos Sen” using “Data list” mode on SUZUKI scan tool.
Is voltage over 4.8 V?
Go to Step 3.
Replace temperature control actuator.
Temperature control actuator position sensor signal circuit check
Connect the “A4” and “A5” circuit terminals of “G04” and “G05” connectors using service wire.
Check “Air Mix Pos Sen” using “Data list” mode on SUZUKI scan tool.
Is voltage over 4.8 V?
Replace BCM and recheck DTC.
Replace instrument panel harness.

---
