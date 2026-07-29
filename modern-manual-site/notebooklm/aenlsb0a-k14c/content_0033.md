# Content Chunk 0033

Plain-text content extracted from source files with relationship metadata.

## AENLSB0AAA24034 - DTC B11F9-54
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA24034.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Blind Spot Monitor || dtc: 10 - Control Systems > Driving Assist System > Blind Spot Monitor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4606002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606002.xml | Sensor Calibration
- AENLSB0AAA24034002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B11F9-54
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B11F9-54: Steering Angle Sensor Calibration Incomplete
Incomplete calibration signal of steering angle is received from lighting and turn signal switch.
Lighting and turn signal switch
Blind spot monitor control module (main)
Blind spot monitor control module (sub)
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
DTC recheck
Perform
Sensor Calibration
.
Set ignition “OFF”.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B11F9-54 still detected?
Go to Step 2.
End.
Steering angle sensor check
Check steering angle sensor.
Is check result OK?
Replace blind spot monitor control module (main) and recheck DTC. If DTC B11F9-54 still detected, replace blind spot monitor control module (sub) and recheck DTC.
Replace lighting and turn signal switch and recheck DTC.

---

## AENLSB0AAA24A01 - Blind spot monitor function does not work normally
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA24A01.xml
Tree scopes: symptoms: 10 - Control Systems > Driving Assist System > Blind Spot Monitor > Diagnostic Information and Procedures
Outgoing references: none

Content:
Blind spot monitor function does not work normally
Blind spot monitor system is controlled by blind spot monitor control module communicating with the following control modules through CAN communication. Before performing symptom diagnosis, check that no DTC is indicated in these control modules.
ECM
BCM
ESP ® control module
TCM (A/T model)
Combination meter
Lighting and turn signal switch
It is necessary to remove the rear bumper for visual inspection of the blind spot monitor control module.
Blind spot monitor function does not work normally
Blind spot monitor function is not in execution state
—
Vehicle running state that blind spot monitor control module is difficult to recognizes rear cross traffic
—
Improper vehicle conditions
Unload the vehicle, remove modification parts for vehicle’s height, rear bumper, etc. and replace with genuine parts.
Adhesion of water droplets, snow or contaminant on rear bumper around blind spot monitor control module
Clean rear bumper or blind spot monitor control module surface.
Looseness, coming off or damage of rear bumper
Repair or replace.
Damage of blind spot monitor control module bracket or vehicle body
Repair or replace.

---

## AENLSB0AAA24A02 - Blind spot monitor function works unexpectedly
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA24A02.xml
Tree scopes: symptoms: 10 - Control Systems > Driving Assist System > Blind Spot Monitor > Diagnostic Information and Procedures
Outgoing references: none

Content:
Blind spot monitor function works unexpectedly
Blind spot monitor system is controlled by blind spot monitor control module communicating with the following control modules through CAN communication. Before performing symptom diagnosis, check that no DTC is indicated in these control modules.
ECM
BCM
ESP ® control module
TCM (A/T model)
Combination meter
Lighting and turn signal switch
It is necessary to remove the rear bumper for visual inspection of the blind spot monitor control module.
Blind spot monitor function works unexpectedly
Vehicle running state that blind spot monitor control module could fails to recognize rear cross traffic
—
Improper vehicle conditions
Unload the vehicle, remove modification parts for vehicle’s height, rear bumper, etc. and replace with genuine parts.
Looseness, coming off or damage of rear bumper
Repair or replace.
Damage of blind spot monitor control module bracket or vehicle body
Repair or replace.

---

## AENLSB0AAA24A03 - Blind spot monitor indicator light (left / right) do not come ON with ignition “ON”
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA24A03.xml
Tree scopes: symptoms: 10 - Control Systems > Driving Assist System > Blind Spot Monitor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA26003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA26003.xml | Blind Spot Monitor Indicator Light On-Vehicle Inspection:Blind Spot Monitor
- AENLSB0AAA24033 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA24033.xml | Inspection of Blind Spot Monitor Control Module and Its Circuits:Blind Spot Monitor

Content:
Blind spot monitor indicator light (left / right) do not come ON with ignition “ON”
Blind spot monitor system is controlled by blind spot monitor control module communicating with the following control modules through CAN communication. Before performing symptom diagnosis, check that no DTC is indicated in these control modules.
ECM
BCM
ESP ® control module
TCM (A/T model)
Combination meter
Lighting and turn signal switch
It is necessary to remove the rear bumper for visual inspection of the blind spot monitor control module.
Blind spot monitor indicator light (left / right) do not come ON with ignition “ON”
Faulty blind spot monitor indicator light
Refer to
Blind Spot Monitor Indicator Light On-Vehicle Inspection:Blind Spot Monitor
.
Faulty blind spot monitor control module (sub)
Refer to
Inspection of Blind Spot Monitor Control Module and Its Circuits:Blind Spot Monitor
.

---

## AENLSB0AAA24A04 - Rear cross traffic alert function does not work normally
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA24A04.xml
Tree scopes: symptoms: 10 - Control Systems > Driving Assist System > Blind Spot Monitor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A5206008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5206008.xml | Back Up Light Switch Inspection

Content:
Rear cross traffic alert function does not work normally
Blind spot monitor system is controlled by blind spot monitor control module communicating with the following control modules through CAN communication. Before performing symptom diagnosis, check that no DTC is indicated in these control modules.
ECM
BCM
ESP ® control module
TCM (A/T model)
Combination meter
Lighting and turn signal switch
It is necessary to remove the rear bumper for visual inspection of the blind spot monitor control module.
Rear cross traffic alert function does not work normally
Rear cross traffic alert function is not in execution state
—
Vehicle running state that blind spot monitor control module is difficult to recognizes rear cross traffic
—
Improper vehicle conditions
Unload the vehicle, remove modification parts for vehicle’s height, rear bumper, etc. and replace with genuine parts.
Adhesion of water droplets, snow or contaminant on rear bumper around blind spot monitor control module
Clean rear bumper or blind spot monitor control module surface.
Looseness, coming off or damage of rear bumper
Repair or replace.
Damage of blind spot monitor control module bracket or vehicle body
Repair or replace.
Faulty back up light switch (M/T model)
Refer to
Back Up Light Switch Inspection
.

---

## AENLSB0AAA24A05 - Rear cross traffic alert function works unexpectedly
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA24A05.xml
Tree scopes: symptoms: 10 - Control Systems > Driving Assist System > Blind Spot Monitor > Diagnostic Information and Procedures
Outgoing references: none

Content:
Rear cross traffic alert function works unexpectedly
Blind spot monitor system is controlled by blind spot monitor control module communicating with the following control modules through CAN communication. Before performing symptom diagnosis, check that no DTC is indicated in these control modules.
ECM
BCM
ESP ® control module
TCM (A/T model)
Combination meter
Lighting and turn signal switch
It is necessary to remove the rear bumper for visual inspection of the blind spot monitor control module.
Rear cross traffic alert function works unexpectedly
Vehicle running state that blind spot monitor control module could fails to recognize rear cross traffic
—
Improper vehicle conditions
Unload the vehicle, remove modification parts for vehicle’s height, rear bumper, etc. and replace with genuine parts.
Looseness, coming off or damage of rear bumper
Repair or replace.
Damage of blind spot monitor control module bracket or vehicle body
Repair or replace.

---

## AENLSB0AAA26001 - Blind Spot Monitor Control Module Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA26001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Repair Instructions > Blind Spot Monitor
Outgoing references:
- AENLSB0AAA26002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA26002.xml | Millimeter Wave Radar Aiming Adjustment:Blind Spot Monitor

Content:
Blind Spot Monitor Control Module Removal and Installation
Removal
Check that ignition is “OFF”.
Remove rear bumper.
Disconnect connector (1).
Remove nuts (2), and then remove blind spot monitor control module with bracket (3).
[A]:
Blind spot monitor control module (main)
[B]:
Blind spot monitor control module (sub)
Remove bolts (1), and then remove blind spot monitor control module (2) from its bracket.
Disconnect blind spot monitor control module connector (3).
Installation
Reverse removal procedure noting the following points.
Tighten blind spot monitor control module bolts to specified torque.
Blind spot monitor control module bolt
a
3.0
0.31
2.5
Tighten blind spot monitor control module bracket nuts to specified torque.
Blind spot monitor control module bracket nut
b
6.0
0.61
4.5
After installation, perform
Millimeter Wave Radar Aiming Adjustment:Blind Spot Monitor
.

---

## AENLSB0AAA26002 - Millimeter Wave Radar Aiming Adjustment
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA26002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Repair Instructions > Blind Spot Monitor
Outgoing references:
- AENLSB0AAA26002001 -> unresolved | Vehicle Preparation
- AENLSB0AAA26002002 -> unresolved | Inspection of Blind Spot Monitor Control Module Fitting Angle
- AENLSB0AAA26002003 -> unresolved | Aiming Adjustment Preparation
- AENLSB0AAA26002004 -> unresolved | Aiming Adjustment
- AENLSB0AAA26002005 -> unresolved | Inspection of Blind Spot Monitor Control Module Bracket
- AENLSB0AAA26002003 -> unresolved | Aiming Adjustment Preparation

Content:
Millimeter Wave Radar Aiming Adjustment
Perform “Millimeter Wave Radar Aiming Adjustment” as follows.
Remove rear bumper.
Perform
Vehicle Preparation
.
Perform
Inspection of Blind Spot Monitor Control Module Fitting Angle
.
Perform
Aiming Adjustment Preparation
.
Perform
Aiming Adjustment
.
Perform
Inspection of Blind Spot Monitor Control Module Bracket
if necessary.
Install rear bumper.
Vehicle Preparation
Park vehicle on level surface.
Adjust air pressure of all tires to specified value.
Remove any load from vehicle.
It is not necessary to empty the fuel tank.
Clean millimeter wave radar surface and check that there is no adhesion of water droplets etc. or abrasion.
Inspection of Blind Spot Monitor Control Module Fitting Angle
Using a digital angle gauge (1), check blind spot monitor control module for fitting angle at vertical plane.
If check result is not as specified, check deformation and damage of blind spot monitor control module bracket and/or vehicle body.
When using digital angle gauge, refer to the manual attached to the gauge.
Blind spot monitor control module fitting angle
87 ± 4.0°
Aiming Adjustment Preparation
Hang a string with a weight (1) from the vehicle front end and rear end and put marks (2) on the ground at each end.
Center of emblem (3) shows center of the vehicle at the front end.
[A]:
Vehicle front end
[B]:
Vehicle rear end
4.
Rearend door latch striker
Crossing vehicle front end mark (1) and vehicle rear end mark (2), stretch a string (3) about 1.5 m (4.9 ft.) to the rear of the vehicle, and fix the string using adhesive tape or the like. This string indicates vehicle center line.
Crossing mark (1), stretch a string (2) vertically to the vehicle center line and fix the string using adhesive tape or the like.
Using a ruler (1) of 30 cm (11.8 in.) or longer, hang strings with weights (2) at both ends of the ruler.
Bring the ruler (1) hanging weights (2) with strings into close contact with surface of millimeter wave radar (3).
Put marks (4) to positions on ground where the hanged weights point.
Stretch a string (1) passing through marks (2) put in Step 6) to intersect strings placed in Step 2) and 3), and fix the string using adhesive tape or the like.
3.
Vehicle center line
Measure dimensions “a” and “b”.
For millimeter wave radar at the other side, perform the same measurement.
Aiming Adjustment
If DTC(s) other than B11E2-54 and B11F8-81 is detected as current DTC, “Aiming Adjustment” cannot be done. In this case, it is necessary to perform troubleshooting first.
Connect SUZUKI scan tool to DLC (1) with ignition “OFF”.
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Select “Aiming Adjustment” under “Utility” mode.
Enter the “controller default installation angle” value as shown below.
Controller default installation angle
42°
Enter the following values of main side “a”, “b” and sub side “a”, “b”, which are measured during aiming adjustment preparation.
Main side means the right side of vehicle running direction, sub side means the left side of vehicle running direction.
[A]:
Main side
[B]:
Sub side
Upon completion of “Aiming Adjustment”, select “Exit” on display.
If aiming adjustment is failed, perform
Aiming Adjustment Preparation
again from Step 1).
If aiming adjustment is failed again, inspect blind spot monitor control module bracket and/or vehicle body for damage.
Inspection of Blind Spot Monitor Control Module Bracket
Remove blind spot monitor control module bracket (1) from body.
Check blind spot monitor control module bracket for wear, distortion or damage. If any defect is found, replace blind spot monitor control module bracket.

---

## AENLSB0AAA26003 - Blind Spot Monitor Indicator Light On-Vehicle Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA26003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Repair Instructions > Blind Spot Monitor
Outgoing references: none

Content:
Blind Spot Monitor Indicator Light On-Vehicle Inspection
Remove front door trim.
Disconnect power door mirror connector (1).
Check for continuity between terminals “4” and “7”. If check result is not as specified, replace power door mirror.
Set tester at diode range.
[A]:
Door mirror connector (View: [a])

---

## AENLSB0AAA27001 - Tightening Torque Specifications
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA27001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Specifications > Blind Spot Monitor
Outgoing references:
- AENLSB0A0101006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0101006.xml | Fasteners Information

Content:
Tightening Torque Specifications
Fastening part
Tightening torque
Note
N·m
kgf-m
lbf-ft
Blind spot monitor control module bolt
3.0
0.31
2.5
Blind spot monitor control module bracket nut
6.0
0.61
4.5
Reference:
For the tightening torques of fasteners not specified in this page, refer to:
Fasteners Information

---

## AENLSB0AAA28001 - Special Tool
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA28001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Special Tools and Equipment > Blind Spot Monitor
Outgoing references: none

Content:
Special Tool
SUZUKI scan tool (Suzuki SDT-II)
—

---

## AENLSB0AAA30001 - Precautions for Diagnosing Trouble
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA30001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Precautions > Parking Sensor
Outgoing references: none

Content:
Precautions for Diagnosing Trouble
Before using scan tool, read its Operator’s Manual to know how to use it.
Clear all DTCs after completing troubleshooting.

---

## AENLSB0AAA30002 - Precautions for Servicing Parking Sensor System
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA30002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Precautions > Parking Sensor
Outgoing references: none

Content:
Precautions for Servicing Parking Sensor System
Without taking the following precautions, parking sensor system may not work properly.
Do not modify, disassemble and paint parking sensor.
Do not damage parking sensor and keep it clean.
Do not replace parking sensor with other than genuine part.
Do not give impact to peripheral part of parking sensor.
Do not cover parking sensor with sticker or accessory.
Do not modify suspension.
Do not use tires other than specified size.
Do not use worn tires or mix tires of different wear.
Adjust tire pressure as specified.
When washing vehicle with high pressure washing machine, do not splash water on parking sensor directly.
When washing vehicle with steam cleaner, do not blow steam on parking sensor at close range.

---

## AENLSB0AAA31001 - Parking Sensor System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA31001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > General Description > Parking Sensor
Outgoing references: none

Content:
Parking Sensor System Description
Parking sensor system functions to warn the driver sounding buzzer when detecting obstacles behind like wall on condition that the vehicle is stopping or moving backward with gear shift lever in reverse (M/T model) or select lever in “R” (A/T model). 4 parking sensors installed in rear bumper detect obstacles and sound buzzer changing the sounding pattern depending on distances to the obstacle.
The parking sensor system consists of a sonar control module, parking sensors, parking sensor OFF switch, parking sensor buzzer, TCM (A/T model), ESP ® control module, lighting and turn signal switch and combination meter.

---

## AENLSB0AAA31002 - Description of Parking Sensor System Components
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA31002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > General Description > Parking Sensor
Outgoing references: none

Content:
Description of Parking Sensor System Components
Component
Description
Sonar control module
Receiving information from 4 parking sensors, sonar control module controls parking sensor system.
Judging the system operation, sonar control module transmits indication request to combination meter through CAN communication.
Sonar control module communicates with other control module through CAN communication. For CAN communication, refer to “Communication System Description” in Section 10H.
K14C model:
Parking sensor OFF switch
Parking sensor OFF switch is installed on the switch bezel of the instrument panel.
The switch is of a momentary contact type and parking sensor system can be turned OFF (disabled) if the switch is pushed momentarily, and the next push returns the system to ON (active).
When the system is turned OFF, indicator light in parking sensor OFF switch turns off.
When ignition is turned “ON” again, the system comes ON (parking sensor OFF indicator light: on).
Parking sensor
4 parking sensors are installed in rear bumper.
4 parking sensors detect obstacles behind the vehicle and transmit the detected information to sonar control module.
TCM (A/T model)
TCM transmits transmission shift position signal to sonar control module through CAN communication.
ESP ® control module
ESP ® control module transmits wheel speed signal, reverse switch signal, etc. to sonar control module through CAN communication
Lighting and turn signal switch
Steering angle sensor is incorporated, and transmits steering angle signal to sonar control module through CAN communication.
Combination meter
Indicates information display receiving request from sonar control module through CAN communication. At that time, the indication pattern is changed depending on distance to the obstacle.
Parking sensor buzzer
When parking sensor detects obstacles, parking sensor buzzer sounds. At that time, the buzzer changes sound pattern depending on distance to the obstacle.

---

## AENLSB0AAA31003 - Description of Parking Sensor System Function
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA31003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > General Description > Parking Sensor
Outgoing references: none

Content:
Description of Parking Sensor System Function
Sonar control module sounds buzzer (1) when detecting obstacles behind like wall on condition that the vehicle is stopping or moving backward slowly (at 10 km/h (6 mile/h) or less) with gear shift lever in reverse (M/T model) or select lever in “R” (A/T model). Sounding pattern of the buzzer varies depending on distance from sensor to the obstacle.
“a”:
About 600 – 1,500 mm (23.6 – 59.1 in.)
(When obstacles are detected only by center-left and/or center-right parking sensor)
“d”:
About 350 mm (13.8 in.) or less
“b”:
About 450 – 600 mm (17.7 – 23.6 in.)
2.
Obstacle (like wall)
“c”:
About 350 – 450 mm (13.8 – 17.7 in.)
Detection of Obstacle by Parking Sensor
Indication on information display, detecting distance and buzzer sounding pattern are shown below.
Information display indication (*)
Detection distance (reference)
About 600 – 1,500 mm (23.6 – 59.1 in.)
(only by center-left / center-right parking sensor)
About 450 – 600 mm (17.7 – 23.6 in.)
About 350 – 450 mm (13.8 – 17.7 in.)
About 350 mm (13.8 in.) or less
Buzzer sounding pattern
pi..pi..
pi.pi.pi
pipipipipipipi
pi- (Continues)
*: When center-left and/or center-right parking sensor detects, center line is indicated. When left or right parking sensor detects, line of the detected side is indicated.
Operation Principle
Vehicle speed
About 10 km/h (6 mile/h) or less
Parking sensor OFF indicator light
ON
Gear shift lever (M/T model)
Reverse position
Select lever (A/T model)
“R” range
Steering angle
Lower than specified value

---

## AENLSB0AAA32001 - Parking Sensor System Input / Output Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA32001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Schematic and Routing Diagram > Parking Sensor
Outgoing references: none

Content:
Parking Sensor System Input / Output Diagram

---

## AENLSB0AAA32002 - Parking Sensor System Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA32002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Schematic and Routing Diagram > Parking Sensor
Outgoing references:
- AENLSB0AA812001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA812001.xml | CAN Communication System Circuit Diagram:CAN (K14C Model)

Content:
Parking Sensor System Circuit Diagram
[A]:
Sonar control module connector (View: [a])
5.
Parking sensor OFF indicator light
10.
Parking sensor buzzer
1.
J/B
6.
Each control module
K14C model:
CAN Communication System Circuit Diagram:CAN (K14C Model)
11.
Parking sensor (right)
2.
“BACK” fuse
7.
Sonar control module
12.
Parking sensor (center-right)
3.
“IG1 SIG2” fuse
8.
CPU
13.
Parking sensor (center-left)
4.
Parking sensor OFF switch
9.
CAN driver
14.
Parking sensor (left)

---

## AENLSB0AAA33001 - Parking Sensor System Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA33001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Component Location > Parking Sensor
Outgoing references: none

Content:
Parking Sensor System Component Location
The figure shows LHD. For RHD, parts with (*) are installed on the opposite side.
1.
TCM (A/T model)
5.
Parking sensor
9.
Parking sensor OFF switch
2.
ESP ® control module
6.
Combination meter
10.
Parking sensor OFF indicator light
3.
Sonar control module
7.
Information display
4.
Parking sensor buzzer
8.
Lighting and turn signal switch

---

## AENLSB0AAA34001 - Parking Sensor System Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor
Outgoing references:
- AENLSB0AAA34001013 -> unresolved | Step 1: Customer Complaint Analysis
- AENLSB0AAA34004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34004.xml | DTC Clearance:Parking Sensor
- AENLSB0AAA34001015 -> unresolved | Steps 3 and 4: Visual Inspection
- AENLSB0AAA34001015 -> unresolved | Steps 3 and 4: Visual Inspection
- AENLSB0AAA34001018 -> unresolved | Step 8: Parking Sensor System Symptom Diagnosis
- AENLSB0AAA34001023 -> unresolved | Step 11: Final Confirmation Test
- AENLSB0AAA34001013 -> unresolved | Step 1: Customer Complaint Analysis
- AENLSB0AAA34001014 -> unresolved | Step 2: DTC Check, Record and Clearance
- AENLSB0AAA34003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34003.xml | DTC Check:Parking Sensor
- AENLSB0AAA34009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34009.xml | Parking Sensor System Symptom Diagnosis:Parking Sensor

Content:
Parking Sensor System Check
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
DTC Clearance:Parking Sensor
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
Parking sensor system symptom diagnosis
Perform
Step 8: Parking Sensor System Symptom Diagnosis
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
Steps 3 and 4: Visual Inspection
As a preliminary step, perform visual check of the items that support proper function of the parking sensor system for their installation or connector connection.
Step 5: Trouble Symptom Confirmation
Based on information obtained in
Step 1: Customer Complaint Analysis
and
Step 2: DTC Check, Record and Clearance
, check trouble symptoms.
Steps 6 and 7: Rechecking and Recording DTC
Refer to
DTC Check:Parking Sensor
for checking procedure.
Step 8: Parking Sensor System Symptom Diagnosis
Perform
Parking Sensor System Symptom Diagnosis:Parking Sensor
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

## AENLSB0AAA34002 - Sonar Control Module Self-Diagnosis Function
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor
Outgoing references: none

Content:
Sonar Control Module Self-Diagnosis Function
Description
Sonar control module monitors conditions of the system components and circuits. When an abnormal condition in the system occurs, sonar control module performs control as follows.
Self-Diagnosis Function
Sonar control module has self-diagnosis function that stores DTC for abnormalities detected in parking sensor system. Stored DTCs remain in memory of sonar control module unless they are cleared.
Fail-Safe Control
When any abnormality is found, sonar control module disables parking sensor system.

---

## AENLSB0AAA34003 - DTC Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor
Outgoing references: none

Content:
DTC Check
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Read DTC according to instructions displayed on SUZUKI scan tool and print it or write it down. Refer to Operator's Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and sonar control module is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
K14C model:
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
K14C model:
Check central gateway control module power supply circuit and ground circuit.
Check sonar control module power circuit and ground circuit.
After completing the check, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0AAA34004 - DTC Clearance
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor
Outgoing references: none

Content:
DTC Clearance
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Clear DTC according to instructions displayed on SUZUKI scan tool and print it or write it down. Refer to Operator's Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and sonar control module is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
K14C model:
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
K14C model:
Check central gateway control module power supply circuit and ground circuit.
Check sonar control module power circuit and ground circuit.
After completing DTC clearance, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0AAA34005 - DTC Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34005.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor
Outgoing references: none

Content:
DTC Table
If DTC C1001-04 is stored in sonar control module, it is not possible to clear DTC.
*: This DTC can be detected as a current DTC but it is not stored as a history DTC.
DTC
DTC name
DTC detecting condition
C1001-04
Sonar Control Module Internal Failure
Sonar control module internal failure.
C1002-00*
Control Module Mismatch
Verification error between combination meter and sonar control module.
C1003-01
Warning Buzzer Malfunction
This DTC is detected if any one of the following conditions is met.
Parking sensor buzzer drive circuit is shorted to ground, shorted to power supply or open.
Sonar control module internal failure.
C1004-01
Rear Parking Sensor OFF Switch LED Malfunction
Parking sensor OFF indicator light circuit is shorted to ground, shorted to power supply or open.
C1004-07
Rear Parking Sensor OFF Switch Stuck ON
Parking sensor OFF switch ON signal is detected for more than specified time.
C1006-1C*
Sonar Control Module Voltage Low
Power supply circuit voltage is higher than specified value (16 V) or lower than specified value (9.5 V) for specified time.
C1006-81*
Ambient Air Temperature Sensor Temporary Failure
Temporary abnormal condition of outside air temperature sensor is detected.
C1007-81*
Steering Angle Sensor Temporary Failure
Temporary abnormal condition of steering angle sensor is received.
C100C-81*
Wheel Speed Temporary Failure
Invalid data of wheel speed sensor is received.
C100F-12
Rear Sonar Power Supply Circuit Shorted to Power Supply
Parking sensor power supply circuit is shorted to power supply.
C1010-11
Rear Left Outer Sonar Power Supply Circuit Shorted to Ground
Parking sensor (left) power supply circuit is shorted to ground.
C1010-13
Rear Left Outer Sonar Power Supply Circuit Open
Parking sensor (left) power supply circuit is open.
C1011-11
Rear Left Inner Sonar Power Supply Circuit Shorted to Ground
Parking sensor (center-left) power supply circuit is shorted to ground.
C1011-13
Rear Left Inner Sonar Power Supply Circuit Open
Parking sensor (center-left) power supply circuit is open.
C1012-11
Rear Right Inner Sonar Power Supply Circuit Shorted to Ground
Parking sensor (center-right) power supply circuit is shorted to ground.
C1012-13
Rear Right Inner Sonar Power Supply Circuit Open
Parking sensor (center-right) power supply circuit is open.
C1013-11
Rear Right Outer Sonar Power Supply Circuit Shorted to Ground
Parking sensor (right) power supply circuit is shorted to ground.
C1013-13
Rear Right Outer Sonar Power Supply Circuit Open
Parking sensor (right) power supply circuit is open.
C1014-11
Rear Left Outer Sonar Signal Circuit Shorted to Ground
Parking sensor (left) signal circuit is shorted to ground.
C1014-13
Rear Left Outer Sonar Signal Circuit Open / Shorted to Power Supply
Parking sensor (left) signal circuit is open or shorted to power supply.
C1015-11
Rear Left Inner Sonar Signal Circuit Shorted to Ground
Parking sensor (center-left) signal circuit is shorted to ground.
C1015-13
Rear Left Inner Sonar Signal Circuit Open / Shorted to Power Supply
Parking sensor (center-left) signal circuit is open or shorted to power supply.
C1016-11
Rear Right Inner Sonar Signal Circuit Shorted to Ground
Parking sensor (center-right) signal circuit is shorted to ground.
C1016-13
Rear Right Inner Sonar Signal Circuit Open / Shorted to Power Supply
Parking sensor (center-right) signal circuit is open or shorted to power supply.
C1017-11
Rear Right Outer Sonar Signal Circuit Shorted to Ground
Parking sensor (right) signal circuit is shorted to ground.
C1017-13
Rear Right Outer Sonar Signal Circuit Open / Shorted to Power Supply
Parking sensor (right) signal circuit is open or shorted to power supply.
C1018-86*
Rear Left Outer Sonar Noise Detected
Noise from parking sensor (left) is detected.
C1018-91*
Rear Left Outer Sonar Sensitivity Setting Failure
This DTC is detected if any one of the following conditions is met.
Abnormal sensitivity of parking sensor (left) is detected.
Communication error between sonar control module and parking sensor (left) is detected.
C1018-96*
Rear Left Outer Sonar Element Malfunction
Malfunction of sensing element in parking sensor (left) is detected.
C1018-97*
Rear Left Outer Sonar Object Stuck
Adhesion of foreign material on parking sensor (left) is detected.
C1019-86*
Rear Left Inner Sonar Noise Detected
Noise from parking sensor (center-left) is detected.
C1019-91*
Rear Left Inner Sonar Sensitivity Setting Failure
This DTC is detected if any one of the following conditions is met.
Abnormal sensitivity of parking sensor (center-left) is detected.
Communication error between sonar control module and parking sensor (center-left) is detected.
C1019-96*
Rear Left Inner Sonar Element Malfunction
Malfunction of sensing element in parking sensor (center-left) is detected.
C1019-97*
Rear Left Inner Sonar Object Stuck
Adhesion of foreign material on parking sensor (center-left) is detected.
C101A-86*
Rear Right Inner Sonar Noise Detected
Noise from parking sensor (center-right) is detected.
C101A-91*
Rear Right Inner Sonar Sensitivity Setting Failure
This DTC is detected if any one of the following conditions is met.
Abnormal sensitivity of parking sensor (center-right) is detected.
Communication error between sonar control module and parking sensor (center-right) is detected.
C101A-96*
Rear Right Inner Sonar Element Malfunction
Malfunction of sensing element in parking sensor (center-right) is detected.
C101A-97*
Rear Right Inner Sonar Object Stuck
Adhesion of foreign material on parking sensor (center-right) is detected.
C101B-86*
Rear Right Outer Sonar Noise Detected
Noise from parking sensor (right) is detected.
C101B-91*
Rear Right Outer Sonar Sensitivity Setting Failure
This DTC is detected if any one of the following conditions is met.
Abnormal sensitivity of parking sensor (right) is detected.
Communication error between sonar control module and parking sensor (right) is detected.
C101B-96*
Rear Right Outer Sonar Element Malfunction
Malfunction of sensing element in parking sensor (right) is detected.
C101B-97*
Rear Right Outer Sonar Object Stuck
Adhesion of foreign material on parking sensor (right) is detected.
C101C-13
Sonar Sensor Signal Circuits Shorted to Each Other
Short circuit between signal lines of parking sensor is detected.
C1021-81
CAN Invalid Data From TCM
Abnormal CAN communication data from TCM is detected.
C102A-00*
TCM Distinction Not Complete
Transmission specification cannot be received from combination meter.
U0073-88
Control Module Communication Bus Off
Sonar control module fails to transmit and receive the data via CAN for specified time continuously.
U0101-87
Lost Communication With TCM
Receiving error of the data from TCM via CAN for specified time continuously.
U0121-87
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0126-87
Lost Communication With Steering Angle Sensor Module
Receiving error of the data from lighting and turn signal switch via CAN for specified time continuously.
U0155-87
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.

---

## AENLSB0AAA34006 - Fail-Safe Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34006.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor
Outgoing references: none

Content:
Fail-Safe Table
DTC
Fail-safe operation
Fail-safe operation cancel condition
C1001-04
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1002-00
Sonar control module disables parking sensor system.
When inconsistency of data between combination meter and sonar control module is recovered.
C1003-01
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1004-01
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1004-07
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1006-1C
Sonar control module disables parking sensor system.
When cause of temporary failure is resolved.
C1006-81
Sonar control module disables parking sensor system.
When cause of temporary failure is resolved.
C1007-81
Sonar control module disables parking sensor system.
When cause of temporary failure is resolved.
C100C-81
Sonar control module disables parking sensor system.
When cause of temporary failure is resolved.
C100F-12
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1010-11
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1010-13
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1011-11
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1011-13
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1012-11
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1012-13
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1013-11
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1013-13
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1014-11
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1014-13
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1015-11
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1015-13
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1016-11
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1016-13
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1017-11
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1017-13
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1018-86
Sonar control module disables parking sensor system.
When cause of failure is resolved.
C1018-91
Sonar control module disables parking sensor system.
When cause of failure is resolved.
C1018-96
Sonar control module disables parking sensor system.
When cause of failure is resolved.
C1018-97
Sonar control module disables parking sensor system.
When cause of failure is resolved.
C1019-86
Sonar control module disables parking sensor system.
When cause of failure is resolved.
C1019-91
Sonar control module disables parking sensor system.
When cause of failure is resolved.
C1019-96
Sonar control module disables parking sensor system.
When cause of failure is resolved.
C1019-97
Sonar control module disables parking sensor system.
When cause of failure is resolved.
C101A-86
Sonar control module disables parking sensor system.
When cause of failure is resolved.
C101A-91
Sonar control module disables parking sensor system.
When cause of failure is resolved.
C101A-96
Sonar control module disables parking sensor system.
When cause of failure is resolved.
C101A-97
Sonar control module disables parking sensor system.
When cause of failure is resolved.
C101B-86
Sonar control module disables parking sensor system.
When cause of failure is resolved.
C101B-91
Sonar control module disables parking sensor system.
When cause of failure is resolved.
C101B-96
Sonar control module disables parking sensor system.
When cause of failure is resolved.
C101B-97
Sonar control module disables parking sensor system.
When cause of failure is resolved.
C101C-13
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C1021-81
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
C102A-00
Sonar control module disables parking sensor system.
When cause of failure is resolved.
U0073-88
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
U0101-87
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
U0121-87
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
U0126-87
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.
U0155-87
Sonar control module disables parking sensor system.
When sonar control module judges the system to be normal after switching ignition from “OFF” to “ON”.

---

## AENLSB0AAA34007 - Scan Tool Data
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34007.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor
Outgoing references: none

Content:
Scan Tool Data
Sonar Control Module
If communication between SUZUKI scan tool and sonar control module is not possible, perform the following checks:
Check communication condition between PC and VCI using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
K14C model:
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
K14C model:
Check central gateway control module power supply circuit and ground circuit.
Check sonar control module power circuit and ground circuit.
Scan tool data
Normal condition / Reference value
Condition
Battery Voltage
13 – 15 V
Engine: Running
Vehicle Speed
Almost the same as speedometer reading
In driving
Rear Left Outer Sonar Detected Distance
Distance from sensor to obstacle detected by parking sensor (left) is shown.
Rear Left Inner Sonar Detected Distance
Distance from sensor to obstacle detected by parking sensor (center-left) is shown.
Rear Right Inner Sonar Detected Distance
Distance from sensor to obstacle detected by parking sensor (center-right) is shown.
Rear Right Outer Sonar Detected Distance
Distance from sensor to obstacle detected by parking sensor (right) is shown.
Distance of Object behind Vehicle
Longitudinal distance from vehicle to obstacle behind is shown by calculated value based on signals from multiple parking sensors.
Distance of Object on Vehicle sides
Side distance from vehicle to obstacle diagonally behind is shown by calculated value based on signals from multiple parking sensors.
Rear Parking System State
No Failure
When parking sensor system is working normally.
Temporarily Failure
When parking sensor system is malfunctioning temporarily.
Permanently Failure
When parking sensor system is malfunctioning all the time.
Initial Check
During initial check.
Rear Left Outer Sonar Detected State
Not detected
When parking sensor (left) is not detecting obstacle.
Short
When distance from sensor to obstacle detected by parking sensor (left) is 0 – 350 mm (0 – 13.8 in.).
Middle
When distance from sensor to obstacle detected by parking sensor (left) is 350 – 450 mm (13.8 – 17.7 in.).
Long
When distance from sensor to obstacle detected by parking sensor (left) is 450 – 600 mm (17.7 – 23.6 in.).
Rear Left Inner Sonar Detected State
Not detected
When parking sensor (center-left) is not detecting obstacle.
Short
When distance from sensor to obstacle detected by parking sensor (center-left) is 0 – 350 mm (0 – 13.8 in.).
Middle
When distance from sensor to obstacle detected by parking sensor (center-left) is 350 – 450 mm (13.8 – 17.7 in.).
Long
When distance from sensor to obstacle detected by parking sensor (center-left) is 450 – 600 mm (17.7 – 23.6 in.).
Most long
When distance from sensor to obstacle detected by parking sensor (center-left) is 600 – 1,500 mm (23.6 – 59.1 in.).
Rear Right Inner Sonar Detected State
Not detected
When parking sensor (center-right) is not detecting obstacle.
Short
When distance from sensor to obstacle detected by parking sensor (center-right) is 0 – 350 mm (0 – 13.8 in.).
Middle
When distance from sensor to obstacle detected by parking sensor (center-right) is 350 – 450 mm (13.8 – 17.7 in.).
Long
When distance from sensor to obstacle detected by parking sensor (center-right) is 450 – 600 mm (17.7 – 23.6 in.).
Most long
When distance from sensor to obstacle detected by parking sensor (center-right) is 600 – 1,500 mm (23.6 – 59.1 in.).
Rear Right Outer Sonar Detected State
Not detected
When parking sensor (right) is not detecting obstacle.
Short
When distance from sensor to obstacle detected by parking sensor (right) is 0 – 350 mm (0 – 13.8 in.).
Middle
When distance from sensor to obstacle detected by parking sensor (right) is 350 – 450 mm (13.8 – 17.7 in.).
Long
When distance from sensor to obstacle detected by parking sensor (right) is 450 – 600 mm (17.7 – 23.6 in.).
Front Sonar sensor
Not supported
—
Transmission type
Undetermined
Transmission type is not identified.
MT
M/T model
AT/CVT
A/T model
Sonar Control Module Voltage Malfunction
Detected
When DTC C1006-1C is detected.
Not Detected
Other than above condition
Ambient Air Temperature Sensor Malfunction
Detected
When DTC C1006-81 is detected.
Not Detected
Other than above condition
Steering Angle Sensor Malfunction
Detected
When DTC C1007-81 is detected.
Not Detected
Other than above condition
Wheel Speed Sensor Malfunction
Detected
When DTC C100C-81 is detected.
Not Detected
Other than above condition
Scan Tool Data Definitions
Battery Voltage (V)
This parameter indicates battery voltage detected by sonar control module.
Vehicle Speed (km/h, MPH)
The vehicle speed is calculated based on pulse signals from wheel speed sensors.
Rear Left Outer Sonar / Rear Left Inner Sonar / Rear Right Inner Sonar / Rear Right Outer Sonar Detected Distance (mm)
This parameter indicates distance from vehicle to obstacle detected by parking sensors (left / center-left / center-right / right).
Distance of Object behind Vehicle (mm)
This parameter indicates longitudinal distance from vehicle to obstacle behind calculated by sonar control module based on signals from multiple parking sensors.
Distance of Object on Vehicle sides (mm)
This parameter indicates side distance from vehicle to obstacle diagonally behind calculated by sonar control module based on signals from multiple parking sensors.
Rear Parking System State (No Failure / Temporarily Failure / Permanently Failure / Initial Check)
This parameter indicates operating state of parking sensor system.
Rear Left Outer Sonar / Rear Left Inner Sonar / Rear Right Inner Sonar / Rear Right Outer Sonar Detected State (Not detected / Short / Middle / Long / Most long)
This parameter indicates state of vehicle corresponding to distance to the obstacle detected by parking sensors (left / center-left / center-right / right).
Front Sonar sensor (Not supported)
This parameter is indicated all the time without change.
Transmission type (Undetermined / MT / AT/CVT / Auto Gear Shift)
This parameter indicates transmission type identified by sonar control module.
Sonar Control Module Voltage Malfunction (Not detected / Detected)
This parameter indicates whether or not abnormality of sonar control module power supply voltage is detected.
Ambient Air Temperature Sensor Malfunction (Not detected / Detected)
This parameter indicates whether or not temporary abnormality of outside air temperature signal is detected.
Steering Angle Sensor Malfunction (Not detected / Detected)
This parameter indicates whether or not temporary abnormality of steering angle signal is detected.
Wheel Speed Sensor Malfunction (Not detected / Detected)
This parameter indicates whether or not temporary abnormality of wheel speed signal is detected.

---

## AENLSB0AAA34008 - Visual Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34008.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor
Outgoing references:
- AENLSB0A1A14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14001.xml | Battery Inspection:K14C
- AENLSB0A0006002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0006002.xml | Intermittent Connection and Poor Contact Inspection
- AENLSB0A9806005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9806005.xml | Rear Bumper Removal and Installation
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
Rear bumper – Deformation, looseness, coming off
Rear Bumper Removal and Installation
Tire – Wear
Tire Inspection
Parking sensor – Adhesion of foreign material, deformation, damage
—
Vehicle posture
Suspension System Check

---

## AENLSB0AAA34009 - Parking Sensor System Symptom Diagnosis
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34009.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor
Outgoing references:
- AENLSB0AAA36005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA36005.xml | Parking Sensor OFF Switch Inspection:Parking Sensor

Content:
Parking Sensor System Symptom Diagnosis
Parking sensor system is controlled by sonar control module communicating with the following control modules through CAN communication. Before performing symptom diagnosis, check that no DTC is indicated in these control modules.
ESP ® control module
TCM (A/T model)
Combination meter
Lighting and turn signal switch
Parking sensor system does not work normally
Parking sensor system is not in execution state
—
Peripheral condition of vehicle is not appropriate to recognize obstacle by parking sensor
—
Obstacles difficult to recognize by parking sensor
—
Improper vehicle conditions
Unload the vehicle, remove modification parts for vehicle’s height, rear bumper, etc. and replace with genuine parts.
Parking sensor system works unexpectedly
Peripheral condition of vehicle which may cause error to recognize obstacles
—
Improper vehicle conditions
Unload the vehicle, remove modification parts for vehicle’s height, rear bumper, etc. and replace with genuine parts.
Parking sensor system cannot be switched ON or OFF
Faulty parking sensor OFF switch circuit
Refer to
Parking Sensor OFF Switch Inspection:Parking Sensor
.

---

## AENLSB0AAA34024 - DTC U0073-88
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34024.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814004.xml | Troubleshooting for Communication Bus Off:CAN (K14C Model)

Content:
DTC U0073-88
K14C model: Refer to
Troubleshooting for Communication Bus Off:CAN (K14C Model)
.
.

---

## AENLSB0AAA34026 - DTC U0101-87
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34026.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0101-87
Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.

---

## AENLSB0AAA34027 - DTC U0121-87
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34027.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0121-87
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0AAA34028 - DTC U0126-87
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34028.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0126-87
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0AAA34030 - DTC U0155-87
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34030.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0155-87
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0AAA34033 - Inspection of Sonar Control Module and Its Circuits
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34033.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor
Outgoing references:
- AENLSB0AAA34033005 -> unresolved | Parking sensor signal
- AENLSB0AAA34033005 -> unresolved | Parking sensor signal
- AENLSB0AAA34033006 -> unresolved | Parking sensor buzzer signal
- AENLSB0AAA34033004 -> unresolved | CAN communication signal
- AENLSB0AAA34033005 -> unresolved | Parking sensor signal
- AENLSB0AAA34033005 -> unresolved | Parking sensor signal
- AENLSB0AAA34033004 -> unresolved | CAN communication signal

Content:
Inspection of Sonar Control Module and Its Circuits
Voltage and Signal Check
Check voltage and/or pulse signal of sonar control module (1) using voltmeter (2) and oscilloscope (3).
Check that battery voltage is 12 V or more.
Voltage of terminal with asterisk (*) cannot be measured by voltmeter because it is pulse signal. Check it with oscilloscope if necessary.
[A]:
Sonar control module connector (View: [a])
“L29” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
L29-1
GRN
Ground for parking sensors
Approx.0 V
—
L29-2
—
—
—
—
L29-3
—
—
—
—
L29-4*
PNK
Parking sensor (right) signal
Refer to
Parking sensor signal
.
L29-5*
BLU
Parking sensor (center-right) signal
Refer to
Parking sensor signal
.
L29-6
—
—
—
—
L29-7*
LT GRN
Parking sensor buzzer signal
Refer to
Parking sensor buzzer signal
.
L29-8
GRY
Parking sensor OFF indicator light signal
10 – 14 V
Parking sensor OFF indicator light: OFF
Approx.0 V
Parking sensor OFF indicator light: ON
L29-9
—
—
—
—
L29-10*
WHT
CAN communication line (low)
Refer to
CAN communication signal
.
L29-11
BRN
Power supply for parking sensors
10 – 14 V
Ignition: “ON”
L29-12
YEL
Power supply for sonar control module
10 – 14 V
Ignition: “ON”
L29-13
BLK
Ground for sonar control module
Approx.0 V
—
L29-14
—
—
—
—
L29-15
—
—
—
—
L29-16
—
—
—
—
L29-17*
BEG
Parking sensor (left) signal
Refer to
Parking sensor signal
.
L29-18*
PPL
Parking sensor (center-left) signal
Refer to
Parking sensor signal
.
L29-19
—
—
—
—
L29-20
—
—
—
—
L29-21
LT BLU
Parking sensor OFF switch signal
10 – 14 V
Parking sensor OFF switch: Pushed
Approx.0 V
Parking sensor OFF switch: Released
L29-22
—
—
—
—
L29-23*
RED
CAN communication line (high)
Refer to
CAN communication signal
.
L29-24
—
—
—
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
Parking sensor signal
Parking sensor (right) signal:
Channel
Probe
Terminal No.
1
+
L29-4
–
L29-13
Parking sensor (center-right) signal:
Channel
Probe
Terminal No.
1
+
L29-5
–
L29-13
Parking sensor (center-left) signal:
Channel
Probe
Terminal No.
1
+
L29-18
–
L29-13
Parking sensor (left) signal:
Channel
Probe
Terminal No.
1
+
L29-17
–
L29-13
Measurement condition
Ignition: “ON”
Parking sensor: Operating
Parking sensor buzzer signal
Channel
Probe
Terminal No.
1
+
L29-7
–
L29-13
Measurement condition
Ignition: “ON”
Parking sensor: Operating
1.
Sounds
2.
Not sound
CAN communication signal
CAN communication signal (high) (1):
Channel
Probe
Terminal No.
1
+
L29-23
–
L29-13
CAN communication signal (low) (2):
Channel
Probe
Terminal No.
2
+
L29-10
–
L29-13
Measurement condition
Ignition: “ON”

---

## AENLSB0AAA34034 - DTC C1001-04
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34034.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA34001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34001.xml | Parking Sensor System Check:Parking Sensor

Content:
DTC C1001-04
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1001-04: Sonar Control Module Internal Failure
Sonar control module internal failure.
Sonar control module
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
If DTC C1001-04 is stored in sonar control module, it is not possible to clear DTC.
Was “Parking Sensor System Check” performed?
Replace sonar control module and recheck DTC.
Go to
Parking Sensor System Check:Parking Sensor
.

---

## AENLSB0AAA34035 - DTC C1002-00
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34035.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC C1002-00
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1002-00: Control Module Mismatch
Verification error between combination meter and sonar control module.
Combination meter
Sonar control module
System Description
If there is a verification error between vehicle specification information registered in sonar control module and combination meter, sonar control module recognizes it as a fault. This DTC is detected only when sonar control module or combination meter is replaced with another one that has different vehicle specification information.
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Check that vehicle specification information registered in combination meter matches the actual vehicle specification.
If the correct combination meter is installed, different vehicle specification information may be registered in sonar control module.

---

## AENLSB0AAA34036 - DTC C1003-01
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34036.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA34001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34001.xml | Parking Sensor System Check:Parking Sensor

Content:
DTC C1003-01
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1003-01: Warning Buzzer Malfunction
This DTC is detected if any one of the following conditions is met.
Parking sensor buzzer drive circuit is shorted to ground, shorted to power supply or open.
Sonar control module internal failure.
Parking sensor buzzer circuit / connector
Parking sensor buzzer
Sonar control module
Circuit Diagram
[A]:
Sonar control module connector (View: [a])
1.
Sonar control module
A1:
Parking sensor buzzer drive circuit
2.
Parking sensor buzzer
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “Parking Sensor System Check” performed?
Go to Step 2.
Go to
Parking Sensor System Check:Parking Sensor
.
Parking sensor buzzer drive circuit check
Check that ignition is “OFF”.
Disconnect parking sensor buzzer and “L29” connectors.
Check for proper terminal connection to parking sensor buzzer and “L29” connectors.
If connections are OK, check the following points.
Resistance of “A1” circuit: less than 1 Ω
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and each terminal at “L29” connector: infinity
Voltage of “A1” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Parking sensor buzzer check
Check parking sensor buzzer.
Is check result OK?
Replace sonar control module and recheck DTC.
Replace parking sensor buzzer.

---

## AENLSB0AAA34037 - DTC C1004-01
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34037.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA34001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34001.xml | Parking Sensor System Check:Parking Sensor

Content:
DTC C1004-01
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1004-01: Rear Parking Sensor OFF Switch LED Malfunction
Parking sensor OFF indicator light circuit is shorted to ground, shorted to power supply or open.
Parking sensor OFF switch circuit / connector
Parking sensor OFF switch
Circuit Diagram
[A]:
Sonar control module connector (View: [a])
1.
J/B
4.
Parking sensor OFF indicator light
A1:
Parking sensor OFF indicator light power supply circuit
2.
“BACK” fuse
5.
Sonar control module
A2:
Parking sensor OFF indicator light drive circuit
3.
Parking sensor OFF switch
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “Parking Sensor System Check” performed?
Go to Step 2.
Go to
Parking Sensor System Check:Parking Sensor
.
DTC check
Is any DTC other than C1004-01 detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Parking sensor OFF indicator light power supply circuit check
Check that ignition is “OFF”.
Disconnect parking sensor OFF switch connector.
Check for proper terminal connection to parking sensor OFF switch connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” circuit and ground is battery voltage.
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Parking sensor OFF indicator light drive circuit check
Set ignition “OFF”.
Disconnect “L29” connector.
Check for proper terminal connection to “L29” connector.
If connection is OK, check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A2” circuit terminal and each terminal at “L29” connector: infinity
Voltage of “A2” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
Parking sensor OFF switch check
Check parking sensor OFF switch.
Is check result OK?
Check for intermittent trouble.
Replace parking sensor OFF switch.

---

## AENLSB0AAA34038 - DTC C1004-07
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34038.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA34001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34001.xml | Parking Sensor System Check:Parking Sensor

Content:
DTC C1004-07
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1004-07: Rear Parking Sensor OFF Switch Stuck ON
Parking sensor OFF switch ON signal is detected for more than specified time.
Parking sensor OFF switch circuit / connector
Parking sensor OFF switch
Circuit Diagram
[A]:
Sonar control module connector (View: [a])
1.
J/B
3.
Parking sensor OFF switch
A1:
Parking sensor OFF switch signal circuit
2.
“BACK” fuse
4.
Sonar control module
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “Parking Sensor System Check” performed?
Go to Step 2.
Go to
Parking Sensor System Check:Parking Sensor
.
DTC check
Is any DTC other than C1004-07 detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Parking sensor OFF switch signal circuit check
Check that ignition is “OFF”.
Disconnect parking sensor OFF switch and “L29” connectors.
Check for proper terminal connection to parking sensor OFF switch and “L29” connectors.
If connections are OK, check the following points.
Resistance of “A1” circuit: less than 1 Ω
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and each terminal at “L29” connector: infinity
Voltage of “A1” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Parking sensor OFF switch check
Check parking sensor OFF switch.
Is check result OK?
Check for intermittent trouble.
Replace parking sensor OFF switch.

---

## AENLSB0AAA34039 - DTC C1006-1C
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34039.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1A14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14001.xml | Battery Inspection:K14C
- AENLSB0A1A14003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14003.xml | Generator Test:K14C
- AENLSB0AAB06002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB06002.xml | Auxiliary Power Module (Lithium-Ion Battery) Inspection

Content:
DTC C1006-1C
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1006-1C: Sonar Control Module Voltage Low
Power supply circuit voltage is higher than specified value (16 V) or lower than specified value (9.5 V) for specified time.
Charging system
Sonar control module power supply / ground circuit
Sonar control module
Circuit Diagram
[A]:
Sonar control module connector (View: [a])
A2:
Sonar control module ground circuit
2.
“IG1 SIG2” fuse
A1:
Sonar control module power supply circuit
1.
J/B
3.
Sonar control module
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Battery and charging system check
Check battery and charging system.
K14C model
Battery Inspection:K14C
Generator Test:K14C
Auxiliary Power Module (Lithium-Ion Battery) Inspection
Is check result OK?
Go to Step 2.
Repair or replace defective part and recheck DTC.
Sonar control module power supply circuit check
Check that ignition is “OFF”.
Disconnect “L29” connector.
Check for proper terminal connection to “L29” connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1” circuit and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Sonar control module ground circuit check
Check that resistance between “B1” circuit and ground is less than 1 Ω.
Is check result OK?
Replace sonar control module and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0AAA34040 - DTC C1006-81
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34040.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC C1006-81
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1006-81: Ambient Air Temperature Sensor Temporary Failure
Temporary abnormal condition of outside air temperature sensor is detected.
Outside air temperature sensor
Combination meter
BCM
Sonar control module
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
DTC check
Check DTC in combination meter.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Check DTC in BCM.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Outside air temperature sensor check
Check outside air temperature sensor.
Is check result OK?
Replace sonar control module and recheck DTC.
Replace outside air temperature sensor.

---

## AENLSB0AAA34041 - DTC C1007-81
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34041.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC C1007-81
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1007-81: Steering Angle Sensor Temporary Failure
Temporary abnormal condition of steering angle sensor is received.
Steering angle sensor (incorporated in lighting and turn signal switch)
Sonar control module
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
DTC check
Check DTC in ESP ® control module.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
Steering angle sensor check
Check steering angle sensor.
Is check result OK?
Replace sonar control module and recheck DTC.
Replace lighting and turn signal switch.

---

## AENLSB0AAA34042 - DTC C100C-81
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34042.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4604001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4604001.xml | ESP® System Check

Content:
DTC C100C-81
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C100C-81: Wheel Speed Temporary Failure
Invalid data of wheel speed sensor is received.
ESP ® system
Sonar control module
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
ESP® system check
Perform
ESP® System Check
.
Is system in good condition?
Replace sonar control module and recheck DTC.
Repair defective part(s) of ESP ® system.

---

## AENLSB0AAA34043 - DTC C100F-12 / C1010-11 / C1010-13 / C1011-11 / C1011-13 / C1012-11 / C1012-13 / C1013-11 / C1013-13
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34043.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA34001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34001.xml | Parking Sensor System Check:Parking Sensor

Content:
DTC C100F-12 / C1010-11 / C1010-13 / C1011-11 / C1011-13 / C1012-11 / C1012-13 / C1013-11 / C1013-13
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C100F-12: Rear Sonar Power Supply Circuit Shorted to Power Supply
Parking sensor power supply circuit is shorted to power supply.
Parking sensor circuit / connector
Parking sensor
C1010-11: Rear Left Outer Sonar Power Supply Circuit Shorted to Ground
Parking sensor (left) power supply circuit is shorted to ground.
C1010-13: Rear Left Outer Sonar Power Supply Circuit Open
Parking sensor (left) power supply circuit is open.
C1011-11: Rear Left Inner Sonar Power Supply Circuit Shorted to Ground
Parking sensor (center-left) power supply circuit is shorted to ground.
C1011-13: Rear Left Inner Sonar Power Supply Circuit Open
Parking sensor (center-left) power supply circuit is open.
C1012-11: Rear Right Inner Sonar Power Supply Circuit Shorted to Ground
Parking sensor (center-right) power supply circuit is shorted to ground.
C1012-13: Rear Right Inner Sonar Power Supply Circuit Open
Parking sensor (center-right) power supply circuit is open.
C1013-11: Rear Right Outer Sonar Power Supply Circuit Shorted to Ground
Parking sensor (right) power supply circuit is shorted to ground.
C1013-13: Rear Right Outer Sonar Power Supply Circuit Open
Parking sensor (right) power supply circuit is open.
Circuit Diagram
[A]:
Sonar control module connector (View: [a])
A4:
Parking sensor (left) power supply circuit
4.
Parking sensor (center-left)
A1:
Parking sensor (right) power supply circuit
1.
Sonar control module
5.
Parking sensor (left)
A2:
Parking sensor (center-right) power supply circuit
2.
Parking sensor (right)
A3:
Parking sensor (center-left) power supply circuit
3.
Parking sensor (center-right)
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “Parking Sensor System Check” performed?
Go to Step 2.
Go to
Parking Sensor System Check:Parking Sensor
.
Parking sensor power supply voltage check
Check that ignition is “OFF”.
Disconnect parking sensor connector related to DTC.
Check for proper terminal connection to parking sensor connector.
If connection is OK, set ignition “ON”.
Check that voltage between “A1”, “A2”, “A3” or “A4” circuit and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Parking sensor power supply circuit check
Set ignition “OFF”.
Disconnect all parking sensors and “L29” connectors.
Check for proper terminal connection to parking sensor and “L29” connectors.
If connections are OK, check the following points.
Resistance of “A1”, “A2”, “A3” and “A4” circuits: less than 1 Ω
Resistance between each of “A1”, “A2”, “A3” and “A4” circuits and ground: infinity
Resistance between each of “A1”, “A2”, “A3” and “A4” circuit terminals and each terminal at “L29” connector: infinity
Voltage of “A1”, “A2”, “A3” and “A4” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Parking sensor check
Check parking sensor.
Is check result OK?
Check for intermittent trouble.
Replace defective parking sensor.

---

## AENLSB0AAA34044 - DTC C1014-11 / C1014-13 / C1015-11 / C1015-13 / C1016-11 / C1016-13 / C1017-11 / C1017-13 / C101C-13
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34044.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA34001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34001.xml | Parking Sensor System Check:Parking Sensor

Content:
DTC C1014-11 / C1014-13 / C1015-11 / C1015-13 / C1016-11 / C1016-13 / C1017-11 / C1017-13 / C101C-13
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1014-11: Rear Left Outer Sonar Signal Circuit Shorted to Ground
Parking sensor (left) signal circuit is shorted to ground.
Parking sensor circuit / connector
Parking sensor
C1014-13: Rear Left Outer Sonar Signal Circuit Open / Shorted to Power Supply
Parking sensor (left) signal circuit is open or shorted to power supply.
C1015-11: Rear Left Inner Sonar Signal Circuit Shorted to Ground
Parking sensor (center-left) signal circuit is shorted to ground.
C1015-13: Rear Left Inner Sonar Signal Circuit Open / Shorted to Power Supply
Parking sensor (center-left) signal circuit is open or shorted to power supply.
C1016-11: Rear Right Inner Sonar Signal Circuit Shorted to Ground
Parking sensor (center-right) signal circuit is shorted to ground.
C1016-13: Rear Right Inner Sonar Signal Circuit Open / Shorted to Power Supply
Parking sensor (center-right) signal circuit is open or shorted to power supply.
C1017-11: Rear Right Outer Sonar Signal Circuit Shorted to Ground
Parking sensor (right) signal circuit is shorted to ground.
C1017-13: Rear Right Outer Sonar Signal Circuit Open / Shorted to Power Supply
Parking sensor (right) signal circuit is open or shorted to power supply.
C101C-13: Sonar Sensor Signal Circuits Shorted to Each Other
Short circuit between signal lines of parking sensor is detected.
Circuit Diagram
[A]:
Sonar control module connector (View: [a])
A4:
Parking sensor (left) signal circuit
4.
Parking sensor (center-left)
A1:
Parking sensor (right) signal circuit
1.
Sonar control module
5.
Parking sensor (left)
A2:
Parking sensor (center-right) signal circuit
2.
Parking sensor (right)
A3:
Parking sensor (center-left) signal circuit
3.
Parking sensor (center-right)
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “Parking Sensor System Check” performed?
Go to Step 2.
Go to
Parking Sensor System Check:Parking Sensor
.
Parking sensor signal circuit check
Check that ignition is “OFF”.
Disconnect all parking sensors and “L29” connectors.
Check for proper terminal connection to parking sensor and “L29” connectors.
If connections are OK, check the following points.
Resistance of “A1”, “A2”, “A3” and “A4” circuits: less than 1 Ω
Resistance between each of “A1”, “A2”, “A3” and “A4” circuits and ground: infinity
Resistance between each of “A1”, “A2”, “A3” and “A4” circuit terminals and each terminal at “L29” connector: infinity
Voltage of “A1”, “A2”, “A3” and “A4” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Parking sensor check
Check parking sensor.
Is check result OK?
Check for intermittent trouble.
Replace defective parking sensor.

---

## AENLSB0AAA34045 - DTC C1018-86 / C1018-96 / C1018-97 / C1019-86 / C1019-96 / C1019-97 / C101A-86 / C101A-96 / C101A-97 / C101B-86 / C101B-96 / C101B-97
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34045.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA34001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34001.xml | Parking Sensor System Check:Parking Sensor

Content:
DTC C1018-86 / C1018-96 / C1018-97 / C1019-86 / C1019-96 / C1019-97 / C101A-86 / C101A-96 / C101A-97 / C101B-86 / C101B-96 / C101B-97
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1018-86: Rear Left Outer Sonar Noise Detected
Noise from parking sensor (left) is detected.
Parking sensor circuit / connector
Parking sensor
C1018-96: Rear Left Outer Sonar Element Malfunction
Malfunction of sensing element in parking sensor (left) is detected.
C1018-97: Rear Left Outer Sonar Object Stuck
Adhesion of foreign material on parking sensor (left) is detected.
C1019-86: Rear Left Inner Sonar Noise Detected
Noise from parking sensor (center-left) is detected.
C1019-96: Rear Left Inner Sonar Element Malfunction
Malfunction of sensing element in parking sensor (center-left) is detected.
C1019-97: Rear Left Inner Sonar Object Stuck
Adhesion of foreign material on parking sensor (center-left) is detected.
C101A-86: Rear Right Inner Sonar Noise Detected
Noise from parking sensor (center-right) is detected.
C101A-96: Rear Right Inner Sonar Element Malfunction
Malfunction of sensing element in parking sensor (center-right) is detected.
C101A-97: Rear Right Inner Sonar Object Stuck
Adhesion of foreign material on parking sensor (center-right) is detected.
C101B-86: Rear Right Outer Sonar Noise Detected
Noise from parking sensor (right) is detected.
C101B-96: Rear Right Outer Sonar Element Malfunction
Malfunction of sensing element in parking sensor (right) is detected.
C101B-97: Rear Right Outer Sonar Object Stuck
Adhesion of foreign material on parking sensor (right) is detected.
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “Parking Sensor System Check” performed?
Go to Step 2.
Go to
Parking Sensor System Check:Parking Sensor
.
Peripheral condition of parking sensor check
Check that there is no obstruction (like foreign material, ice, high frequency source, etc.) surrounding sensors to affect detected DTC.
Is check result OK?
Go to Step 3.
Remove obstruction(s) and recheck DTC.
Parking sensor check
Check parking sensor.
Is check result OK?
Check for intermittent trouble.
Replace defective parking sensor.

---

## AENLSB0AAA34046 - DTC C1018-91 / C1019-91 / C101A-91 / C101B-91
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34046.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA34001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34001.xml | Parking Sensor System Check:Parking Sensor

Content:
DTC C1018-91 / C1019-91 / C101A-91 / C101B-91
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1018-91: Rear Left Outer Sonar Sensitivity Setting Failure
This DTC is detected if any one of the following conditions is met.
Abnormal sensitivity of parking sensor (left) is detected.
Communication error between sonar control module and parking sensor (left) is detected.
Parking sensor circuit / connector
Parking sensor
Sonar control module
C1019-91: Rear Left Inner Sonar Sensitivity Setting Failure
This DTC is detected if any one of the following conditions is met.
Abnormal sensitivity of parking sensor (center-left) is detected.
Communication error between sonar control module and parking sensor (center-left) is detected.
C101A-91: Rear Right Inner Sonar Sensitivity Setting Failure
This DTC is detected if any one of the following conditions is met.
Abnormal sensitivity of parking sensor (center-right) is detected.
Communication error between sonar control module and parking sensor (center-right) is detected.
C101B-91: Rear Right Outer Sonar Sensitivity Setting Failure
This DTC is detected if any one of the following conditions is met.
Abnormal sensitivity of parking sensor (right) is detected.
Communication error between sonar control module and parking sensor (right) is detected.
Circuit Diagram
[A]:
Sonar control module connector (View: [a])
A4:
Parking sensor (left) signal circuit
4.
Parking sensor (center-left)
A1:
Parking sensor (right) signal circuit
1.
Sonar control module
5.
Parking sensor (left)
A2:
Parking sensor (center-right) signal circuit
2.
Parking sensor (right)
A3:
Parking sensor (center-left) signal circuit
3.
Parking sensor (center-right)
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “Parking Sensor System Check” performed?
Go to Step 2.
Go to
Parking Sensor System Check:Parking Sensor
.
Parking sensor signal circuit check
Check that ignition is “OFF”.
Disconnect parking sensor related to DTC and “L29” connectors.
Check for proper terminal connection to parking sensor and “L29” connectors.
If connections are OK, check the following points.
Resistance of “A1”, “A2”, “A3” and “A4” circuits: less than 1 Ω
Resistance between each of “A1”, “A2”, “A3” and “A4” circuits and ground: infinity
Resistance between each of “A1”, “A2”, “A3” and “A4” circuit terminals and each terminal at “L29” connector: infinity
Voltage of “A1”, “A2”, “A3” and “A4” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Parking sensor check
Check parking sensor.
Is check result OK?
Replace sonar control module and recheck DTC.
Replace defective parking sensor.

---

## AENLSB0AAA34047 - DTC C1021-81
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34047.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA34001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34001.xml | Parking Sensor System Check:Parking Sensor

Content:
DTC C1021-81
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C1021-81: CAN Invalid Data From TCM
Abnormal CAN communication data from TCM is detected.
TCM
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “Parking Sensor System Check” performed?
Go to Step 2.
Go to
Parking Sensor System Check:Parking Sensor
.
DTC check
Check DTC in TCM.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace TCM and recheck DTC.

---

## AENLSB0AAA34048 - DTC C102A-00
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34048.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Diagnostic Information and Procedures > Parking Sensor || dtc: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA34001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34001.xml | Parking Sensor System Check:Parking Sensor

Content:
DTC C102A-00
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
C102A-00: TCM Distinction Not Complete
Transmission specification cannot be received from combination meter.
Combination meter
Sonar control module
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Was “Parking Sensor System Check” performed?
Go to Step 2.
Go to
Parking Sensor System Check:Parking Sensor
.
DTC check
Check DTC in combination meter.
Is there any DTC(s) detected?
Replace combination meter and recheck DTC.
Replace sonar control module and recheck DTC.

---

## AENLSB0AAA34A01 - Parking sensor system does not work normally
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34A01.xml
Tree scopes: symptoms: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references: none

Content:
Parking sensor system does not work normally
Parking sensor system is controlled by sonar control module communicating with the following control modules through CAN communication. Before performing symptom diagnosis, check that no DTC is indicated in these control modules.
ESP ® control module
TCM (A/T model)
Combination meter
Lighting and turn signal switch
Parking sensor system does not work normally
Parking sensor system is not in execution state
—
Peripheral condition of vehicle is not appropriate to recognize obstacle by parking sensor
—
Obstacles difficult to recognize by parking sensor
—
Improper vehicle conditions
Unload the vehicle, remove modification parts for vehicle’s height, rear bumper, etc. and replace with genuine parts.

---

## AENLSB0AAA34A02 - Parking sensor system works unexpectedly
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34A02.xml
Tree scopes: symptoms: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references: none

Content:
Parking sensor system works unexpectedly
Parking sensor system is controlled by sonar control module communicating with the following control modules through CAN communication. Before performing symptom diagnosis, check that no DTC is indicated in these control modules.
ESP ® control module
TCM (A/T model)
Combination meter
Lighting and turn signal switch
Parking sensor system works unexpectedly
Peripheral condition of vehicle which may cause error to recognize obstacles
—
Improper vehicle conditions
Unload the vehicle, remove modification parts for vehicle’s height, rear bumper, etc. and replace with genuine parts.

---

## AENLSB0AAA34A03 - Parking sensor system cannot be switched ON or OFF
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA34A03.xml
Tree scopes: symptoms: 10 - Control Systems > Driving Assist System > Parking Sensor > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAA36005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA36005.xml | Parking Sensor OFF Switch Inspection:Parking Sensor

Content:
Parking sensor system cannot be switched ON or OFF
Parking sensor system is controlled by sonar control module communicating with the following control modules through CAN communication. Before performing symptom diagnosis, check that no DTC is indicated in these control modules.
ESP ® control module
TCM (A/T model)
Combination meter
Lighting and turn signal switch
Parking sensor system cannot be switched ON or OFF
Faulty parking sensor OFF switch circuit
Refer to
Parking Sensor OFF Switch Inspection:Parking Sensor
.

---

## AENLSB0AAA36002 - Sonar Control Module Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA36002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Repair Instructions > Parking Sensor
Outgoing references: none

Content:
Sonar Control Module Removal and Installation
Removal
Check that ignition is “OFF”.
Remove left side quarter lower trim.
Disconnect sonar control module connector (1).
Remove screws (2), and then remove sonar control module (3).
Installation
Reverse removal procedure.

---

## AENLSB0AAA36004 - Parking Sensor OFF Switch Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA36004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Repair Instructions > Parking Sensor
Outgoing references:
- AENLSB0AAA36005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA36005.xml | Parking Sensor OFF Switch Inspection:Parking Sensor

Content:
Parking Sensor OFF Switch Removal and Installation
Removal
Remove steering column hole cover.
Disconnect parking sensor OFF switch connector.
Remove parking sensor OFF switch (1) from switch bezel.
Installation
Parking Sensor OFF Switch Inspection:Parking Sensor
Reverse removal procedure.

---

## AENLSB0AAA36005 - Parking Sensor OFF Switch Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA36005.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Repair Instructions > Parking Sensor
Outgoing references:
- AENLSB0AAA36004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA36004.xml | Parking Sensor OFF Switch Removal and Installation:Parking Sensor

Content:
Parking Sensor OFF Switch Inspection
Parking Sensor OFF Switch Removal and Installation:Parking Sensor
Check parking sensor OFF switch for continuity between terminals at each switch position.
If check result is not as specified, replace parking sensor OFF switch.

---

## AENLSB0AAA36006 - Parking Sensor Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA36006.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Repair Instructions > Parking Sensor
Outgoing references:
- AENLSB0AAA36007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA36007.xml | Parking Sensor Inspection:Parking Sensor

Content:
Parking Sensor Removal and Installation
Removal
Remove rear bumper.
Disconnect parking sensor connector.
Release locks (1) expanding parking sensor bracket (2) in arrow direction “1” and remove parking sensor (3) in arrow direction “2”.
Remove parking sensor bracket, if necessary.
Installation
Parking Sensor Inspection:Parking Sensor
Reverse removal procedure noting the following points.
Install new parking sensor bracket (1) according to the following procedure, if removed.
Remove old double-stick tape from rear bumper.
Clean and degrease contact surface of rear bumper for parking sensor bracket.
Avoiding sensor hole, apply primer (3M K-520 or equivalent) to the range of primer application (2) on rear bumper as shown in figure.
Applying primer twice on the same place increases the layer thickness too much and causes the parking sensor bracket to come off.
Apply primer only once.
Wait for 3 minutes or more for drying primer.
Fit parking sensor (3) to the bracket so that connector (4) can be connected in arrow direction (5).
Peel off protective film and stick parking sensor bracket to rear bumper noting the following points.
Do not re-stick the parking sensor bracket to the bumper once it is stuck.
Align sensing part with sensor hole on rear bumper and parking sensor bracket with line (6).
Press parking sensor bracket to rear bumper with 40 N (4.1 kgf, 9.0 lbf) or more for 2 seconds or more.
After sticking the sensor bracket, leave it for 2 – 3 hours and then check its firm fixing.
Position connector of parking sensor (2) aligning with arrow (1) on rear bumper.

---

## AENLSB0AAA36007 - Parking Sensor Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA36007.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Repair Instructions > Parking Sensor
Outgoing references:
- AENLSB0AAA36006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA36006.xml | Parking Sensor Removal and Installation:Parking Sensor

Content:
Parking Sensor Inspection
Parking Sensor Removal and Installation:Parking Sensor
Check parking sensor for damage.
Check parking sensor connector for damage.
Check parking sensor connector terminal for bend, rust or corrosion.
If any defect is found, replace parking sensor.

---

## AENLSB0AAA36008 - Parking Sensor Buzzer Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA36008.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Repair Instructions > Parking Sensor
Outgoing references:
- AENLSB0AAA36009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA36009.xml | Parking Sensor Buzzer Inspection:Parking Sensor

Content:
Parking Sensor Buzzer Removal and Installation
Removal
Check that ignition is “OFF”.
Remove left side quarter lower trim.
Disconnect parking sensor buzzer connector (1).
Remove parking sensor buzzer (2).
Installation
Parking Sensor Buzzer Inspection:Parking Sensor
Reverse removal procedure.

---

## AENLSB0AAA36009 - Parking Sensor Buzzer Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA36009.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Repair Instructions > Parking Sensor
Outgoing references:
- AENLSB0AAA36008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA36008.xml | Parking Sensor Buzzer Removal and Installation:Parking Sensor

Content:
Parking Sensor Buzzer Inspection
Parking Sensor Buzzer Removal and Installation:Parking Sensor
Check that buzzer (1) sounds when battery positive (+) terminal and battery negative (–) terminal are connected to parking sensor buzzer terminals.
Replace parking sensor buzzer if it does not sound.

---

## AENLSB0AAA38001 - Special Tool
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAA38001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10J - Driving Assist System > Special Tools and Equipment > Parking Sensor
Outgoing references: none

Content:
Special Tool
SUZUKI scan tool (Suzuki SDT-II)
—

---

## AENLSB0AAB00001 - Precautions for Diagnosing Trouble
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB00001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Precautions for Diagnosing Trouble
Before using SUZUKI scan tool, read its Operator’s Manual to know how to use it.
Clear all DTCs after completing troubleshooting.
SHVS system is controlled by ECM, ISG, DC/DC converter and auxiliary power module (lithium-ion battery). However, DTCs related to SHVS system are detected by ECM, ISG, DC/DC converter and auxiliary power module (lithium-ion battery).
Before diagnosing troubles, refer to “Precautions for Diagnosing Trouble” under
.
Before troubleshooting, check whether or not aftermarket devices are connected to lead-acid battery and auxiliary power module (lithium-ion battery) directly. These connections may affect SHVS system.

---

## AENLSB0AAB00002 - Precautions for Handling Auxiliary Power Module (Lithium-Ion Battery)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB00002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Precautions
Outgoing references: none

Content:
Precautions for Handling Auxiliary Power Module (Lithium-Ion Battery)
The auxiliary power module (lithium-ion battery) (1) is a precision unit and can be adversely affected. To ensure the safety, avoid the following factors.
Do not disassemble the auxiliary power module (lithium-ion battery).
Do not drop or otherwise expose the auxiliary power module (lithium-ion battery) to large shock.
Do not connect the auxiliary power module (lithium-ion battery) to any connector or terminal other than specified one. (Do not use it for power source for accessories, etc.)
Dispose of the used battery properly according to applicable rules or regulations.
Do not dispose of auxiliary power module (lithium-ion battery) batteries with ordinary household trash.
Discharged auxiliary power module (lithium-ion battery) exceeding the threshold has to be replaced as a unit. When keeping the battery on vehicle over a long period of time, start the engine periodically to charge it.
To maintain removed auxiliary power module (lithium-ion battery) in good condition, keep it in a proper place observing the following precautions.
Protect the connector (2), “48V+” terminal (3) “48V–” terminal (4) of the auxiliary power module (lithium-ion battery) by wrapping them with tape or the like.
5.
Auxiliary power module (lithium-ion battery) label
When placing auxiliary power module (lithium-ion battery), face the label upward.
Do not put anything on the auxiliary power module (lithium-ion battery).
Keep the auxiliary power module (lithium-ion battery) in a well-ventilated place avoiding exposure to direct sunlight, high temperature and high humidity.
Keep the auxiliary power module (lithium-ion battery) in a place where water does not enter.

---

## AENLSB0AAB01001 - Description for Auxiliary Power Module (Lithium-Ion Battery) Control System
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB01001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > General Description
Outgoing references:
- AENLSB0AAB01002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB01002.xml | Description of Auxiliary Power Module (Lithium-Ion Battery) Control System Components

Content:
Description for Auxiliary Power Module (Lithium-Ion Battery) Control System
Auxiliary power module (lithium-ion battery) controlled to improve fuel efficiency.
While the vehicle is decelerating, 48V ISG generates power intensively to charge the lithium-ion battery in the auxiliary power module. And, this 48V is stepped down to 12V through DC/DC converter and supplied to 12V system including the lead-acid battery.
While the vehicle is running normally, the system minimizes or stops the generation when it is not required. Therefore, the engine can reduce load and economize fuel for generating electricity, and thus improves the fuel efficiency.
Sufficiently charged 48V auxiliary power module (lithium-ion battery) supplies the power to ISG for assisting engine power when required.
For details of auxiliary power module (lithium-ion battery) control system components and system operations, refer to
Description of Auxiliary Power Module (Lithium-Ion Battery) Control System Components
.
High power ISG with high efficiency, auxiliary power module (lithium-ion battery) and brake stroke sensor are adopted for SHVS system.
Auxiliary power module (lithium-ion battery) has a high charging efficiency and is able to charge large-capacity electricity in a short time.
Brake stroke sensor detects brake operation accurately and signal from the sensor is effectively used to improve recovery volume of deceleration energy.
Auxiliary power module (lithium-ion battery) (1) has voltage sensor (2) to monitor voltage of lithium-ion battery (3), current sensor (shunt resistance) (4) to monitor electric current of lithium-ion battery and temperature sensor (5) to monitor temperature in lithium-ion battery.
CPU (6) controls power supply from lithium-ion battery by switching ON/OFF of contactor (7).
When the cabin temperature lowers below –35 °C (–31 °F), auxiliary power module (lithium-ion battery) cuts off the charge and discharge circuit by turning OFF the contactor for protection of the lithium-ion battery.
When any abnormality is detected, ENG A-STOP warning light blinks and charge warning light lights up to warn the driver of the trouble.
8.
DC/DC converter
10.
“48V+” terminal
9.
ISG
11.
“48V–” terminal

---

## AENLSB0AAB01002 - Description of Auxiliary Power Module (Lithium-Ion Battery) Control System Components
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB01002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > General Description
Outgoing references:
- AENLSB0AB101003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB101003.xml | Description of SHVS System Control

Content:
Description of Auxiliary Power Module (Lithium-Ion Battery) Control System Components
The auxiliary power module (lithium-ion battery) control system consists of the following components.
Component
Description
Auxiliary Power Module (lithium-ion battery)
Installed under right side front seat and composed of the following devices.
Battery management unit
Battery management unit monitors state-of-charge of lithium-ion battery.
When lithium-ion battery is sufficiently charged, the power is supplied to 48V ISG for assisting engine power and stepped down 12V through DC/DC converter is also supplied to electrical devices.
When poorly charged state of lithium-ion battery is detected, the lithium-ion battery charge request is transmitted to ECM via CAN.
Lithium-ion battery
Lithium-ion battery has advantage in downsizing, weight reduction and charge efficiency over lead-acid battery, and it allows quick charging in large capacity within a short time such as decelerating time. Further, the charge efficiency of this battery is kept high in low temperature (ambient temperature about 0 °C (32 °F)) and, this characteristic improves fuel efficiency even in cold climates.
ECM
Controls ISG to generate power intensively during deceleration.
Regulates the rate of the generation by ISG gradually to restrict rapid increase of the engine load and improves drivability.
In case of the system malfunction, switch internal circuit in the auxiliary power module (lithium-ion battery) to enter fail-safe mode.
Lead-acid battery
While lithium-ion battery is supplying stepped down power, lead-acid battery mainly covers the power for high load devices.
ISG
Equipped with generator function, starting motor function for engine auto start and engine power assist function while driving.
Mainly manages intensive power generation during deceleration and has 250 A of maximum effective current.
Incorporating CAN driver, communicates with each control module.
DC/DC converter
Installed under left side front seat. The DC/DC converter transforms 48V to 12V and supplies to lead-acid battery and each electrical device.
Brake stroke sensor
Detects degree of brake pedal depressing and transmits the information to ECM. Using this information, ECM controls ISG for deceleration energy regeneration.
Combination meter
Indicates state-of-charge of auxiliary power module (lithium-ion battery) and energy flow on information display.
For more details of energy flow indication, refer to
Description of SHVS System Control
.
Electric load current sensor & battery temperature sensor
This sensor detects electric current responding to the load and ambient temperature of lead-acid battery, and transmits these signals to ECM.
SDM
This module transmits collision signal to each control module via CAN.

---

## AENLSB0AAB01004 - Description of SHVS System Control
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB01004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > General Description
Outgoing references:
- AENLSB0AB101003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB101003.xml | Description of SHVS System Control

Content:
Description of SHVS System Control
Refer to
Description of SHVS System Control
.

---

## AENLSB0AAB01005 - CAN Communication System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB01005.xml
Tree scopes: unscoped
Outgoing references: none

Content:
CAN Communication System Description
Auxiliary power module (lithium-ion battery) is using CAN communication to communicate with other control module. For more detail of CAN communication, refer to
.

---

## AENLSB0AAB02001 - Auxiliary Power Module (Lithium-Ion Battery) Control System Electric Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB02001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Schematic and Routing Diagram
Outgoing references:
- AENLSB0AB102002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB102002.xml | SHVS System Electric Circuit Diagram

Content:
Auxiliary Power Module (Lithium-Ion Battery) Control System Electric Circuit Diagram
Refer to
SHVS System Electric Circuit Diagram
.

---

## AENLSB0AAB03001 - Auxiliary Power Module (Lithium-Ion Battery) Control System Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB03001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Component Location
Outgoing references: none

Content:
Auxiliary Power Module (Lithium-Ion Battery) Control System Component Location
The figure shows LHD. For RHD, parts with asterisk (*) are installed at the opposite side.
1.
ECM
5.
Combination meter
9.
Brake stroke sensor
2.
Lead-acid battery
6.
Information display (Energy flow indicator)
10.
DC/DC converter
3.
Electric load current sensor & battery temperature sensor
7.
ENG A-STOP warning light
11.
SDM
4.
ISG
8.
Charge warning light
12.
Auxiliary power module (lithium-ion battery)

---

## AENLSB0AAB04001 - Auxiliary Power Module (Lithium-Ion Battery) Control System Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Auxiliary Power Module (Lithium-Ion Battery) Control System Check
Step 1: DTC Check
Check DTC related to auxiliary power module (lithium-ion battery).
Check DTC related to ECM.
In case that current DTC is detected:
Perform troubleshoot with flow chart for applicable current DTC and detect the trouble area in sensor, actuator, wire harness, connector, auxiliary power module (lithium-ion battery), ECM, etc., and repair or replace faulty part.
In case that history DTC is detected:
Record DTC and then clear DTC once.
Referring to “Circuit Diagram” and “Trouble Area” in applicable DTC troubleshooting, check related parts that are prone to cause intermittent trouble (e.g. wire harness, connector, etc.) for detected history DTC.
Check intermittent trouble.
Step 2: Final Confirmation Test
Check that the problem symptom does not recur and the vehicle is free from any abnormal conditions. If what has been repaired is related to DTC, clear DTC once, perform DTC confirmation procedure and check that no DTC is indicated.

---

## AENLSB0AAB04002 - Auxiliary Power Module (Lithium-Ion Battery) Self-Diagnosis Function
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Auxiliary Power Module (Lithium-Ion Battery) Self-Diagnosis Function
Description
Auxiliary power module (lithium-ion battery) monitors conditions of the system components and circuits. When an abnormal condition in the system occurs, auxiliary power module (lithium-ion battery) performs control as follows.
Self-Diagnosis Function
Auxiliary power module (lithium-ion battery) has self-diagnosis function that stores DTC for abnormalities detected in auxiliary power module (lithium-ion battery) control system. Stored DTCs remain in memory of auxiliary power module (lithium-ion battery) unless they are cleared.
Warning Function
When a malfunction is detected in auxiliary power module (lithium-ion battery), auxiliary power module (lithium-ion battery) blink the ENG A-STOP warning light (1) and turn on the charge warning light (2) causing them to warn the driver. The warning lights are turned off when normal condition is restored.
Fail-Safe Control
Auxiliary power module (lithium-ion battery) performs fail-safe control when an abnormal condition related to ENG A-STOP system is detected and stops all control to protect the system.
Details of fail-safe control vary with detected DTC.

---

## AENLSB0AAB04003 - DTC Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC Check
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Read DTC according to instructions displayed on SUZUKI scan tool and print it or write it down. Refer to Operator's Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and auxiliary power module (lithium-ion battery) is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
Check central gateway control module power supply circuit and ground circuit.
Check auxiliary power module (lithium-ion battery) and its circuits.
After completing the check, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0AAB04004 - DTC Clearance
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC Clearance
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Clear DTC according to instructions displayed on SUZUKI scan tool and print it or write it down. Refer to Operator's Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and auxiliary power module (lithium-ion battery) is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
Check central gateway control module power supply circuit and ground circuit.
Check auxiliary power module (lithium-ion battery) and its circuits.
After completing DTC clearance, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0AAB04005 - DTC Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04005.xml
Tree scopes: unscoped
Outgoing references: none

Content:
DTC Table
DTC
DTC name
DTC detecting condition
DTC detection logic
Charge warning light
ENG A-STOP warning light
P0A7D
Hybrid/EV Battery Pack State of Charge Low
Discharged state of battery is lower than specified charging rate.
1 D/C
Lights UP
Blinks
P0A7E
Hybrid/EV Battery Pack Over Temperature
Battery temperature exceeds specified limit which requires replacement of auxiliary power module (lithium-ion battery).
1 D/C
Lights UP
Blinks
P0A7F
Hybrid/EV Battery Pack “A” Deterioration
Battery deterioration level becomes lower than specification in cell voltage decay rate and internal resistance.
1 D/C
—
Blinks
P0A8D
14 Volt Power Module System Voltage Low
Supply voltage from lead-acid battery to auxiliary power module (lithium-ion battery) becomes lower than specification.
1 D/C
Lights UP
—
P0A8E
14 Volt Power Module System Voltage High
Supply voltage from lead-acid battery to auxiliary power module (lithium-ion battery) exceeds specified value.
1 D/C
Lights UP
—
P0AA1
Hybrid/EV Battery Positive Contactor Circuit Stuck Closed
Contactor in auxiliary power module (lithium-ion battery) gets stuck closed.
1 D/C
Lights UP
Blinks
P0AA2
Hybrid/EV Battery Positive Contactor Circuit Stuck Open
Contactor in auxiliary power module (lithium-ion battery) gets stuck open.
1 D/C
Lights UP
Blinks
P0AC0
Hybrid/EV Battery Pack Current Sensor “A” Circuit Range/Performance
Auxiliary power module (lithium-ion battery) fails current measuring due to measurement circuit malfunction.
1 D/C
Lights UP
Blinks
P0AFD
Hybrid/EV Battery Pack Temperature Low
Battery temperature drops below specification of unusable degrees.
1 D/C
Lights UP
Blinks
P0C30
Hybrid/EV Battery Pack State of Charge High
Battery is charged is higher than specified charging rate.
1 D/C
Lights UP
Blinks
P0C6E
Hybrid/EV Battery Temperature Sensor “A”/“B” Correlation
Battery temperature cannot be measured correctly due to uneven temperature of 2 battery temperature sensors exceeding specified value.
1 D/C
Lights UP
Blinks
P0ECB
Hybrid/EV Battery Voltage Sensor System - Multiple Sensor Correlation
Cell voltage cannot be measured correctly due to malfunction of measurement circuit.
1 D/C
Lights UP
Blinks
P1B00
Battery Control Module Error 1
Malfunction occurs in CPU.
1 D/C
—
Blinks
P1B01
Control Module Initial Error
Malfunction is detected in safety check at start of auxiliary power module (lithium-ion battery).
1 D/C
Lights UP
Blinks
P1B02
14 Volt Power Module System Voltage Sensor “A” Circuit Range High
Sensor range in auxiliary power module (lithium-ion battery) gets stuck in high.
1 D/C
Lights UP
Blinks
P1B03
Hybrid/EV Battery Pack 48 Volt Sensor “A” Circuit Performance
Voltage of 48V circuit for 48V devices cannot be measured correctly.
1 D/C
—
Blinks
P1B04
Hybrid/EV Battery Pack Cell Voltage High/Low
Cell voltage in auxiliary power module (lithium-ion battery) rises or drops exceeding specified value which requires replacement of the module.
1 D/C
Lights UP
Blinks
P1B05
Hybrid/EV Battery Pack Cell Voltage High/Low Warning
Cell voltage in auxiliary power module (lithium-ion battery) rises or drops exceeding specified value of unusable degree.
1 D/C
Lights UP
Blinks
P1B06
Hybrid/EV Battery System Over Charge Current
Charging current exceeding allowable value is supplied for more than specified time which is necessary to cut off current from 48V circuit.
1 D/C
Lights UP
Blinks
P1B07
Hybrid/EV Battery Pack Unhealable diagnostics History
Malfunction occurs which requires replacement of auxiliary power module (lithium-ion battery).
1 D/C
Lights UP
Blinks
P1B09
Hybrid/EV Battery Pack Over Temperature Warning
Battery temperature rises exceeding specification of unusable degrees.
1 D/C
Lights UP
Blinks
P1B0B
Hybrid/EV Battery Pack Temperature Too Low
Battery temperature drops below specification of unusable degrees.
1 D/C
Lights UP
Blinks
P1B0C
Hybrid/EV Battery Positive Contactor Diag Failure
Auxiliary power module (lithium-ion battery) fails stuck check of contactor for more than specified number of times.
5 D/C
Lights UP
Blinks
P1B0D
Hybrid/EV Battery Positive Contactor Current High
More than specified current is supplied to contactor.
1 D/C
Lights UP
Blinks
P1B0E
Hybrid/EV Battery Positive Contactor Opened With Load
Contactor opens when excessive current more than specified value is supplied.
1 D/C
—
—
P1B0F
Crash Detect Signal Receive History
Auxiliary power module (lithium-ion battery) receives collision detection signal from SDM via ECM as “Collision”.
1 D/C
Lights UP
Blinks
P1B10
Battery Control Module Error 2
Malfunction occurs in CPU.
1 D/C
—
Blinks
P1B11
Battery Control Module Error 3
Malfunction occurs in CPU.
1 D/C
—
Blinks
P1B12
Battery Control Module Monitoring Module Error
Malfunction occurs in auxiliary power module (lithium-ion battery) which monitors CPU.
1 D/C
Lights UP
Blinks
P1B13
Battery Control Module Read Only Memory (ROM) Read Error
Auxiliary power module (lithium-ion battery) fails to read.
1 D/C
—
Blinks
P1B14
Battery Control Module Read Only Memory (ROM) Write Error
Auxiliary power module (lithium-ion battery) fails for writing.
1 D/C
—
Blinks
P1B15
Battery Control Module Nonvolatile Memory Data Inconsistence Error
Nonvolatile memory data mismatches between previous shut down of auxiliary power module (lithium-ion battery) and start at this time.
1 D/C
Lights UP
Blinks
P1B16
Battery Control Module CAN Hardware Error
CAN hardware in auxiliary power module (lithium-ion battery) malfunctions.
1 D/C
Lights UP
Blinks
P1B17
Hybrid/EV Battery Pack Cell Initial Open Circuit Voltage High/Low
Open Circuit Voltage (OCV) opening voltage at start of auxiliary power module (lithium-ion battery) exceeds or lowers specification.
1 D/C
Lights UP
Blinks
P1B18
14 Volt Power Module System Voltage Sensor “A” Circuit Range Low
Sensor range in auxiliary power module (lithium-ion battery) connected to lead-acid battery gets stuck in low.
1 D/C
Lights UP
Blinks
P1B19
Hybrid/EV Battery Pack 48 Volt Sensor “A” Circuit Range
Sensor range in auxiliary power module (lithium-ion battery) connecting 48V devices gets stuck in high.
1 D/C
Lights UP
Blinks
P1B1A
Hybrid/EV Battery Pack 48 Volt Sensor “A” Circuit/Open
Voltage measurement is not working properly due to open circuit connected to 48V devices.
1 D/C
Lights UP
Blinks
P1B1B
Hybrid/EV Battery System Over Discharge Current
Charging current exceeding allowable value (necessary to limit current) is supplied for more than specified time.
1 D/C
Lights UP
Blinks
P1B1C
Hybrid/EV Battery System Over Charge Current Warning
Discharging current exceeding allowable value (necessary to cut off battery from 48V circuit) flows for more than specified time.
1 D/C
—
—
P1B1D
Hybrid/EV Battery System Over Discharge Current Warning
Discharging current exceeding allowable value (necessary to limit current) flows for more than specified time.
1 D/C
—
—
P1B1E
Hybrid/EV Battery Positive Contactor Open Time Too Long
Contactor opening takes time for more than specification.
5 D/C
Lights UP
Blinks
P1B1F
Hybrid/EV Battery Positive Contactor Deterioration
Contactor deterioration level becomes lower than specification (judged by number of open time and current at open state).
1 D/C
Lights UP
Blinks
P1B20
Hybrid/EV Battery Pack Current Sensing Resistor Adjustment Value Error
Erroneous setting of shunt resistance.
1 D/C
—
Blinks
P1B21
Battery Control Module Off Time Counter Error
Malfunction of timer in shut down state of auxiliary power module (lithium-ion battery).
1 D/C
—
Blinks
P1B22
Battery Control Module Software Reset History
Reset by abnormal software is operated.
1 D/C
—
Blinks
U0073
Control Module Communication Bus Off
Refer to
.
1 D/C
Lights UP
Blinks
U0100
Lost Communication With ECM
1 D/C
—
Blinks
U1401
Invalid Data Received From ECM - Rolling Counter Error
Invalid CAN data from ECM is detected.
1 D/C
—
Blinks
U1402
Invalid Data Received From ECM - Checksum Error
Invalid CAN data from ECM is detected.
1 D/C
—
Blinks

---

## AENLSB0AAB04006 - Fail-Safe Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04006.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Fail-Safe Table
When any of the following DTC(s) is detected, auxiliary power module (lithium-ion battery) control enters the fail-safe mode as long as the failure condition associated with the DTC(s) continues. The fail-safe mode is canceled when auxiliary power module (lithium-ion battery) detects normal condition.
If ignition mode is changed to “ON” automatically while the engine is auto stopping, it is possible to restart the engine by driver’s operation shifting the gear shift lever in “Neutral”, depressing the clutch pedal and pressing the engine switch.
DTC
DTC name
Fail-safe operation
P0A7D
Hybrid/EV Battery Pack State of Charge Low
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P0A7E
Hybrid/EV Battery Pack Over Temperature
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P0A7F
Hybrid/EV Battery Pack “A” Deterioration
Auxiliary power module (lithium-ion battery) limits the following functions.
ENG A-STOP control
Power assist control
Deceleration energy regeneration control
P0A8D
14 Volt Power Module System Voltage Low
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P0A8E
14 Volt Power Module System Voltage High
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P0AA1
Hybrid/EV Battery Positive Contactor Circuit Stuck Closed
Auxiliary power module (lithium-ion battery) cuts off 48V circuit (if possible).
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P0AA2
Hybrid/EV Battery Positive Contactor Circuit Stuck Open
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P0AC0
Hybrid/EV Battery Pack Current Sensor “A” Circuit Range/Performance
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P0AFD
Hybrid/EV Battery Pack Temperature Low
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P0C30
Hybrid/EV Battery Pack State of Charge High
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P0C6E
Hybrid/EV Battery Temperature Sensor “A”/“B” Correlation
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P0ECB
Hybrid/EV Battery Voltage Sensor System - Multiple Sensor Correlation
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B00
Battery Control Module Error 1
Auxiliary power module (lithium-ion battery) limits the following functions.
ENG A-STOP control
Power assist control
Deceleration energy regeneration control
P1B01
Control Module Initial Error
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B02
14 Volt Power Module System Voltage Sensor “A” Circuit Range High
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B03
Hybrid/EV Battery Pack 48 Volt Sensor “A” Circuit Performance
Auxiliary power module (lithium-ion battery) limits the following functions.
ENG A-STOP control
Power assist control
Deceleration energy regeneration control
P1B04
Hybrid/EV Battery Pack Cell Voltage High/Low
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B05
Hybrid/EV Battery Pack Cell Voltage High/Low Warning
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B06
Hybrid/EV Battery System Over Charge Current
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B07
Hybrid/EV Battery Pack Unhealable diagnostics History
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B09
Hybrid/EV Battery Pack Over Temperature Warning
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B0B
Hybrid/EV Battery Pack Temperature Too Low
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B0C
Hybrid/EV Battery Positive Contactor Diag Failure
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B0D
Hybrid/EV Battery Positive Contactor Current High
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B0E
Hybrid/EV Battery Positive Contactor Opened With Load
—
P1B0F
Crash Detect Signal Receive History
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B10
Battery Control Module Error 2
Auxiliary power module (lithium-ion battery) limits the following functions.
ENG A-STOP control
Power assist control
Deceleration energy regeneration control
P1B11
Battery Control Module Error 3
Auxiliary power module (lithium-ion battery) limits the following functions.
ENG A-STOP control
Power assist control
Deceleration energy regeneration control
P1B12
Battery Control Module Monitoring Module Error
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B13
Battery Control Module Read Only Memory (ROM) Read Error
Auxiliary power module (lithium-ion battery) limits the following functions.
ENG A-STOP control
Power assist control
Deceleration energy regeneration control
P1B14
Battery Control Module Read Only Memory (ROM) Write Error
Auxiliary power module (lithium-ion battery) limits the following functions.
ENG A-STOP control
Power assist control
Deceleration energy regeneration control
P1B15
Battery Control Module Nonvolatile Memory Data Inconsistence Error
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B16
Battery Control Module CAN Hardware Error
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B17
Hybrid/EV Battery Pack Cell Initial Open Circuit Voltage High/Low
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B18
14 Volt Power Module System Voltage Sensor “A” Circuit Range Low
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B19
Hybrid/EV Battery Pack 48 Volt Sensor “A” Circuit Range
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B1A
Hybrid/EV Battery Pack 48 Volt Sensor “A” Circuit/Open
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B1B
Hybrid/EV Battery System Over Discharge Current
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B1C
Hybrid/EV Battery System Over Charge Current Warning
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B1D
Hybrid/EV Battery System Over Discharge Current Warning
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B1E
Hybrid/EV Battery Positive Contactor Open Time Too Long
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B1F
Hybrid/EV Battery Positive Contactor Deterioration
Auxiliary power module (lithium-ion battery) cuts off 48V circuit to stop the power supply.
Auxiliary power module (lithium-ion battery) limits current for power assist and regeneration.
P1B20
Hybrid/EV Battery Pack Current Sensing Resistor Adjustment Value Error
Auxiliary power module (lithium-ion battery) limits the following functions.
ENG A-STOP control
Power assist control
Deceleration energy regeneration control
P1B21
Battery Control Module Off Time Counter Error
Auxiliary power module (lithium-ion battery) limits the following functions.
ENG A-STOP control
Power assist control
Deceleration energy regeneration control
P1B22
Battery Control Module Software Reset History
Auxiliary power module (lithium-ion battery) limits the following functions.
ENG A-STOP control
Power assist control
Deceleration energy regeneration control
U0073
Control Module Communication Bus Off
—
U0100
Lost Communication With ECM
—
U1401
Invalid Data Received From ECM - Rolling Counter Error
Auxiliary power module (lithium-ion battery) shuts off activation request for contactor by ECM.
U1402
Invalid Data Received From ECM - Checksum Error
Auxiliary power module (lithium-ion battery) shuts off activation request for contactor by ECM.

---

## AENLSB0AAB04007 - Scan Tool Data
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04007.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Scan Tool Data
Auxiliary Power Module (Lithium-Ion Battery)
If communication between SUZUKI scan tool and auxiliary power module (lithium-ion battery) is not possible, perform the following checks:
Check communication condition between PC and VCI using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
Check central gateway control module power supply circuit and ground circuit.
Check auxiliary power module (lithium-ion battery) and its circuits.
Scan tool data
Normal condition / Reference value
Condition
Battery Module Current
–250 to 250 A
Vehicle: Running
Battery Module Voltage
24 to 51 V
Engine: Idle speed
48V Terminal Voltage
24 to 51 V
Engine: Idle speed
Battery Module Maximum Temperature
Auxiliary control module (lithium-ion battery) maximum temperature is displayed.
Ignition: “ON”
Battery Module Minimum Temperature
Auxiliary control module (lithium-ion battery) minimum temperature is displayed.
Ignition: “ON”
Maximum Predict Charge Current
0 to 291 A
Engine: Idle speed
Maximum Predict Discharge Current
0 to 291 A
Engine: Idle speed
Maximum Predict Charge Voltage
Maximum predicted charging voltage is displayed.
Engine: Idle speed
Maximum Predict Discharge Voltage
Maximum predicted discharging voltage is displayed.
Engine: Idle speed
Maximum Cell Voltage
2.06 to 4.29 V
Ignition: “ON”
Minimum Cell Voltage
2.06 to 4.29 V
Ignition: “ON”
Maximum Cell State Of Charge
Maximum state-of-charge of cell is displayed.
Ignition: “ON”
Minimum Cell State Of Charge
Minimum state-of-charge of cell is displayed.
Ignition: “ON”
Minimum Cell State Of Health Capacity
0 to 100%
Ignition: “ON”
Minimum Cell State Of Health Power
0 to 100%
Ignition: “ON”
Total Discharge Current Integration
Integrated total discharge current value is displayed.
Ignition: “ON”
48Volt Relay State
OFF
Ignition: “ON”
ON
Engine: Running
Contactor Error State
No Error
Other than condition below
Error (Welded Relay)
Contactor: Abnormal condition (DTC P0AA1 and/or P0AA2 is detected)
Number of Battery Module
0
—
Serial Number
Serial number is displayed.
—
Scan Tool Data Definitions
Battery Module Current (A)
This parameter indicates output current value of the auxiliary power module (lithium-ion battery).
Battery Module Voltage (V)
This parameter indicates auxiliary power module (lithium-ion battery) side voltage.
48V Terminal Voltage (V)
This parameter indicates 48V terminal voltage.
Battery Module Maximum Temperature (°C, °F)
This parameter indicates the maximum auxiliary power module (lithium-ion battery) temperature.
Battery Module Minimum Temperature (°C, °F)
This parameter indicates the minimum auxiliary power module (lithium-ion battery) temperature.
Maximum Predict Charge Current (A)
This parameter indicates the maximum predicted charging current value.
Maximum Predict Discharge Current (A)
This parameter indicates the maximum predicted discharging current value.
Maximum Predict Charge Voltage (V)
This parameter indicates the maximum predicted charging voltage.
Maximum Predict Discharge Voltage (V)
This parameter indicates the maximum predicted discharging voltage.
Maximum Cell Voltage (V)
This parameter indicates the maximum cell voltage.
Minimum Cell Voltage (V)
This parameter indicates the minimum cell voltage.
Maximum Cell State Of Charge (%)
This parameter indicates the maximum SOC (state-of-charge) of cell.
Minimum Cell State Of Charge (%)
This parameter indicates the minimum SOC (state-of-charge) of cell.
Minimum Cell State Of Health Capacity (%)
This parameter indicates the minimum SOH (state-of-health: remaining capacity %) of cell.
Minimum Cell State Of Health Power (%)
This parameter indicates the minimum SOH (state-of-health: remaining power %) of cell.
Total Discharge Current Integration (Ah)
This parameter indicates integrated total discharging current value.
48Volt Relay State (OFF / ON)
This parameter indicates the state of 48 V relay.
Contactor Error State (No Error / Error (Welded Relay))
This parameter indicates the state of contactor error.
Number of Battery Module
This parameter indicates the number of auxiliary power module (lithium-ion battery).
Serial Number
This parameter indicates the serial number of auxiliary power module (lithium-ion battery).

---

## AENLSB0AAB04008 - Auxiliary Power Module (Lithium-Ion Battery) Control System Symptom Diagnosis
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04008.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Auxiliary Power Module (Lithium-Ion Battery) Control System Symptom Diagnosis
Auxiliary power module (lithium-ion battery) control system controlled by ECM, ISG, DC/DC converter, etc. using CAN communication system. Before performing symptom diagnosis, check that no DTC is indicated in these control modules.
Using SUZUKI scan tool, state of auxiliary power module (lithium-ion battery) can be checked.
Energy flow indication is not indicated
Faulty combination meter
Check parameter.
Check combination meter circuit.
Faulty ECM
Check ECM.

---

## AENLSB0AAB04009 - ENG A-STOP Warning Light Does Not Come ON with Ignition “ON” and Engine Stopped (but Engine Can Be Started)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04009.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || symptoms: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA904009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904009.xml | ENG A-STOP Warning Light Does Not Come ON with Ignition “ON” and Engine Stopped (but Engine Can Be Started)

Content:
ENG A-STOP Warning Light Does Not Come ON with Ignition “ON” and Engine Stopped (but Engine Can Be Started)
Refer to
ENG A-STOP Warning Light Does Not Come ON with Ignition “ON” and Engine Stopped (but Engine Can Be Started)
.

---

## AENLSB0AAB04010 - ENG A-STOP Warning Light Remains ON or Blinking with Ignition “ON”
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04010.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || symptoms: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA904010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904010.xml | ENG A-STOP Warning Light Remains ON or Blinking with Ignition “ON”

Content:
ENG A-STOP Warning Light Remains ON or Blinking with Ignition “ON”
Refer to
ENG A-STOP Warning Light Remains ON or Blinking with Ignition “ON”
.

---

## AENLSB0AAB04017 - DTC U0073
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04017.xml
Tree scopes: dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC U0073
Refer to
.

---

## AENLSB0AAB04018 - DTC U0100
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04018.xml
Tree scopes: dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC U0100
Refer to
.

---
