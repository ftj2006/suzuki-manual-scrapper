# Content Chunk 0028

Plain-text content extracted from source files with relationship metadata.

## AENLSB0AA127001 - Tightening Torque Specifications
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA127001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10A - Cruise Control System > Specifications > Adaptive Cruise Control
Outgoing references:
- AENLSB0AA126004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA126004.xml | RBS Control Module Components:Adaptive Cruise Control
- AENLSB0A0101006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0101006.xml | Fasteners Information

Content:
Tightening Torque Specifications
Fastening part
Tightening torque
Note
N·m
kgf-m
lbf-ft
RBS control module bracket nut
12
1.2
9.0
Reference:
For the tightening torques of fasteners not specified in this page, refer to:
RBS Control Module Components:Adaptive Cruise Control
Fasteners Information

---

## AENLSB0AA128001 - Special Tool
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA128001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10A - Cruise Control System > Special Tools and Equipment > Adaptive Cruise Control
Outgoing references: none

Content:
Special Tool
09932–36531
09932–36540
Reflector frame
Reflector plate
09932–36550
SUZUKI scan tool (Suzuki SDT-II)
Reflector wire rope (3800mm)
—

---

## AENLSB0AA200001 - Precautions for Diagnosing Trouble
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA200001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Precautions
Outgoing references: none

Content:
Precautions for Diagnosing Trouble
Before using scan tool, read its Operator’s Manual to know how to use it.
BCM controls the following systems. Refer to each of the sections indicated in parenthesis below for maintenance and diagnosis.
Body electrical control system
Immobilizer control system (Section 10C)
Keyless start system (Section 10E)
Keyless start system executes data transmission / reception by means of the radio wave. Therefore, proper operation may not be obtained if door lock function and engine start function of keyless start system are attempted to be used near a place where strong radio wave is emitted (TV and radio broadcasting stations, etc.).
If voltage of vehicle battery is very low, the following symptom may occur. Check power supply / ground circuit of BCM or battery voltage, etc.
Ignition mode cannot be changed from “ON” to “OFF”. (Pressing engine switch for about 2 seconds or 3 times continuously can change the mode to “ACC”.)
Ignition mode repeats “ON” and “OFF”.
When disconnecting BCM connector, disconnect negative (–) cable at battery beforehand.
Clear all DTCs after completing troubleshooting.

---

## AENLSB0AA200002 - Precautions for Replacing Remote Controller
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA200002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Precautions
Outgoing references: none

Content:
Precautions for Replacing Remote Controller
Remote controller incorporates the transponder. Therefore, register the transponder code when remote controller is replaced or added.

---

## AENLSB0AA200003 - Precautions for Remote Controller Disposal
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA200003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Precautions
Outgoing references: none

Content:
Precautions for Remote Controller Disposal
To prevent theft, break remote controller before disposing of it.
Dispose of the used battery properly according to applicable rules or regulations. Do not dispose of lithium batteries with ordinary household trash.

---

## AENLSB0AA200004 - Precautions for Replacing BCM
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA200004.xml
Tree scopes: unscoped
Outgoing references:
- AENLSB0AA306003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA306003.xml | ECM / ISG Registration

Content:
Precautions for Replacing BCM
When replacing the BCM, replace it with new one.
After BCM is replaced with new one, perform “Immobilizer Key Registration” using SUZUKI scan tool.
ECM / ISG Registration
for their registration.
All of remote controllers must be ready for the registration.

---

## AENLSB0AA201001 - BCM General Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA201001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > General Description
Outgoing references: none

Content:
BCM General Description
BCM incorporates relays and controllers to control the following systems.
*: The number of retard flashing times can be set up for momentary switching on and off of turn signal switch in case of necessity such as lane change.
Power door lock
Rearend door opener
Theft deterrent light
Horn (security alarm model)
Seat belt reminder
Warning buzzer (in combination meter)
Outside warning buzzer
Shift lock (A/T model)
Turn signal light*
Interior light
Clearance light
Tail light
License plate light
Headlight
Front fog light
Rear fog light (if equipped)
DRL
Rear wiper
Rear defogger
ACC relay, IG1 relay and IG2 relay (in J/B)

---

## AENLSB0AA201002 - CAN Communication System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA201002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > General Description > Models > K14C
Outgoing references: none

Content:
CAN Communication System Description
BCM uses CAN communication to communicate with other control module. For more detail of CAN communication, refer to “Communication System Description in Section 10H.
K14C model:

---

## AENLSB0AA202001 - BCM Input / Output Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA202001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Schematic and Routing Diagram
Outgoing references: none

Content:
BCM Input / Output Diagram

---

## AENLSB0AA202002 - Body Electrical Control System Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA202002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Schematic and Routing Diagram > Models > K14C
Outgoing references:
- AENLSB0AA812001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA812001.xml | CAN Communication System Circuit Diagram:CAN (K14C Model)
- AENLSB0AA812001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA812001.xml | CAN Communication System Circuit Diagram:CAN (K14C Model)

Content:
Body Electrical Control System Circuit Diagram
Input side
[A]:
M/T model
19.
Rear left seat belt buckle switch (if equipped)
44.
Blower motor relay
[B]:
A/T model
20.
Rear center seat belt buckle switch (if equipped)
45.
Blower motor
[C]:
K14C model
21.
Rear right seat belt buckle switch (if equipped)
46.
Blower motor controller
[D]:
ENG A-STOP model
22.
Brake fluid level switch
47.
Sunload sensor
[E]:
DSBS model
23.
Parking brake switch
48.
Evaporator temperature sensor
[F]:
With seat heater
24.
Oil pressure switch
49.
Inside air temperature sensor
[G]:
Without seat heater
25.
CPP No.2 switch
50.
Outside air temperature sensor
1.
BCM
26.
P position switch
51.
ESP ® control module
2.
CPU
27.
Rearend door opener switch
52.
Rear wiper and washer switch
3.
Antenna
28.
Driver door request switch
53.
Rear washer motor
4.
Power supply circuit
29.
Passenger door request switch
54.
Brake light switch
5.
LIN driver
30.
Rearend door request switch
55.
Starting motor control relay
6.
CAN driver
31.
Driver door lock switch
56.
TCM
7.
Auto-on headlight sensor
32.
Passenger door lock switch
57.
CPP No.1 switch
8.
Hazard warning switch
33.
Hood latch switch
58.
“ST SIG2” fuse
9.
Door key cylinder switch
34.
ENG A-STOP OFF switch
59.
ECM
10.
Power door lock switch
35.
Lane departure warning OFF switch
60.
Starting motor
11.
Driver door switch
36.
Dual sensor brake support OFF switch
61.
“TAIL L” fuse
12.
Passenger door switch
37.
SDM
62.
“TAIL” fuse
13.
Rear door switch (R)
38.
Auto A/C panel
63.
“RR FOG” fuse
14.
Rear door switch (L)
39.
Each control module
K14C model:
CAN Communication System Circuit Diagram:CAN (K14C Model)
64.
“HAZ” fuse
15.
Rearend door switch
40.
Engine switch
65.
“DOME2” fuse
16.
Driver seat belt buckle switch
41.
Push switch 1
66.
“STL” fuse
17.
Passenger seat belt buckle switch
42.
Push switch 2
18.
Seat belt reminder sensor
43.
Steering lock unit
Output side
[A]:
Security alarm model
26.
Headlight high / low beam switching solenoid
54.
Driver side outside antenna
[B]:
A/T model
27.
Tail light (R)
55.
Passenger side outside antenna
[C]:
Deadlock model
28.
Clearance light (R)
56.
Rear outside antenna
1.
BCM
29.
License plate light
57.
Outside warning buzzer
2.
CPU
30.
Each interior illumination
58.
Blower motor relay
3.
Antenna
31.
Front fog light relay
59.
Blower motor
4.
Antenna circuit
32.
Tail light (L)
60.
Blower motor controller
5.
Temperature control actuator driver
33.
Clearance light (L)
61.
Temperature control actuator
6.
Air flow control actuator driver
34.
Rear fog light (if equipped)
62.
Air flow control actuator
7.
Air intake control actuator driver
35.
DRL (L)
63.
Air intake control actuator
8.
ACC, IG1 and IG2 relay drive circuit
36.
DRL (R)
64.
Rear defogger
9.
LIN driver
37.
Theft deterrent light
65.
Door mirror heater (L) (if equipped)
10.
CAN driver
38.
Audio unit or Navigation (if equipped)
66.
Door mirror heater (R) (if equipped)
11.
IG11 relay
39.
Horn switch
67.
“RR DEF” fuse
12.
IG21 relay
40.
Horn relay
68.
“MRR HTR” fuse (if equipped)
13.
IG22 relay
41.
Shift lock solenoid
69.
“IG2 SIG” fuse
14.
IG23 relay
42.
Rear wiper motor
70.
Rear defogger relay
15.
ACC relay
43.
“WIP” fuse
71.
Door lock actuator relay
16.
Front turn signal light (L)
44.
Rear wiper relay
72.
Rearend door opener relay
17.
Door mirror turn signal light (L)
45.
Dome light
73.
Driver door lock actuator
18.
Rear turn signal light (L)
46.
Luggage compartment light
74.
Passenger door lock actuator
19.
Front turn signal light (R)
47.
Auto A/C panel
75.
Rear door lock actuator (R)
20.
Door mirror turn signal light (R)
48.
Each control module
K14C model:
CAN Communication System Circuit Diagram:CAN (K14C Model)
76.
Rear door lock actuator (L)
21.
Rear turn signal light (R)
49.
Engine switch
77.
Rearend door opener actuator
22.
Headlight LO relay (R)
50.
Engine switch illumination
78.
“ACC” fuse
23.
Headlight LO relay (L)
51.
Steering lock unit
79.
“WASH” fuse
24.
Headlight HI relay
52.
Mid inside antenna
80.
“BACK” fuse
25.
Headlight (low beam)
53.
Rear inside antenna
81.
“IG1 SIG” fuse

---

## AENLSB0AA203001 - BCM and Related System Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA203001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Component Location > K14C
Outgoing references: none

Content:
BCM and Related System Component Location
The figure shows LHD. For RHD, parts with (*) are installed at the opposite side.
1.
Oil pressure switch (K14C model)
12.
Rearend door opener switch
23.
Engine switch
2.
Brake fluid level switch
13.
Front door lock actuator (driver side: included in door key cylinder switch)
24.
Steering lock unit
3.
Rear door lock actuator
14.
Rear turn signal light
25.
SDM
4.
Outside warning buzzer
15.
Hazard warning switch
26.
Shift lock solenoid (A/T model)
5.
Horn
16.
Theft deterrent light
27.
Parking brake switch
6.
Outside air temperature sensor
17.
Rear defogger switch
28.
Driver seat belt buckle switch
7.
Front turn signal light
18.
Power door lock switch
29.
Passenger seat belt buckle switch
8.
Door mirror turn signal light
19.
BCM
30.
Rear left seat belt buckle switch (if equipped)
9.
Door switch
20.
Lighting and turn signal switch
31.
Rear center seat belt buckle switch (if equipped)
10.
Dome light
21.
Wiper and washer switch
32.
Rear right seat belt buckle switch (if equipped)
11.
Rearend door opener actuator (included in rearend door switch)
22.
Auto-on headlight sensor

---

## AENLSB0AA203002 - Control Relay Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA203002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Component Location > Models > K14C
Outgoing references: none

Content:
Control Relay Component Location
[A]:
K14C model
3.
Fuel pump relay
10.
Radiator cooling fan relay No.1
[B]:
4.
Horn relay
11.
Starting motor control relay
[C]:
Relay box
5.
Radiator cooling fan relay No.3
12.
Blower motor relay
[D]:
Sub relay box
6.
A/C compressor relay
13.
Headlight LO relay (R)
[E]:
Individual circuit fuse box No.2
7.
Main relay
14.
Headlight HI relay
1.
Radiator cooling fan relay No.2
8.
Front fog light relay
15.
Headlight LO relay (L)
2.
VVT relay
9.
Back up light relay (A/T model)
16.
Rear defogger relay

---

## AENLSB0AA204001 - Body Electrical Control System Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA204001006 -> unresolved | Step 3: Trouble Symptom Confirmation
- AENLSB0AA204001006 -> unresolved | Step 3: Trouble Symptom Confirmation

Content:
Body Electrical Control System Check
Step 1: Customer Complaint Analysis
Record details of problem (failure, complaint) and how it occurred as described by the customer.
For this purpose, such a questionnaire form shown below will facilitate collecting information for proper analysis and diagnosis.
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
Referring to “circuit diagram” and “trouble area” in applicable DTC troubleshooting, check related parts that are prone to cause intermittent trouble (e.g. wire harness, connector, etc.) for detected history DTC.
Check intermittent trouble.
Never perform DTC troubleshooting.
In case that there is no DTC:
Perform
Step 3: Trouble Symptom Confirmation
.
If there is “Symptom Diagnosis” procedure for any possible cause, perform corresponding “Symptom Diagnosis” procedure.
“Symptom Diagnosis” procedures for body electrical control system are described in each section.
Step 3: Trouble Symptom Confirmation
Check if what customer claimed in “Customer Questionnaire” is actually found in vehicle and if that symptom is found. (This step should be shared with customer if possible.) Also, check if DTC is detected or not.
Step 4: Final Confirmation Test
Check that the problem symptom has gone and body electrical control system is free from any abnormal conditions. If what has been repaired is related to malfunction DTC, recheck DTC and check that no DTC is indicated.

---

## AENLSB0AA204002 - BCM Self-Diagnosis Function
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references: none

Content:
BCM Self-Diagnosis Function
Description
BCM monitors conditions of system components and its circuit when ignition is “ON”. When an abnormal condition in the system occurs, BCM performs controls as follows.
Self-Diagnosis Function
BCM is equipped with self-diagnosis function that stores DTC for abnormalities detected in body electrical control system, keyless start system and immobilizer control system. Stored DTC is saved until abnormal condition is corrected.
Warning Function
When a malfunction of body electrical control system, keyless start system or immobilizer control system is detected, BCM turns on theft deterrent light and/or immobilizer indicator light. And, depending on the malfunction, a message is shown in information display to warn the driver.
After detecting a malfunction, theft deterrent light and immobilizer indicator light are turned on. However they are turned off when normal condition is detected.
For details of operations of theft deterrent light and immobilizer indicator light as the warning function, refer to the following items.
Body electrical control system:
Immobilizer control system:
Keyless start system:

---

## AENLSB0AA204003 - DTC Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures > Models > K14C
Outgoing references: none

Content:
DTC Check
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
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

## AENLSB0AA204004 - DTC Clearance
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures > Models > K14C
Outgoing references: none

Content:
DTC Clearance
Operation before DTC Clearance
After completing repair for some DTC(s), the DTC(s) cannot be cleared until BCM judges the system is normal. Therefore, an operation that BCM recognizes the system normal condition is required.
DTCs which require judgment of system normal condition after repair are shown in the following table.
DTC
DTC name
Operation for judgment of system normal condition
B1103
Mid Inside Antenna Circuit
Ignition: “OFF”
Door: All closed → Open a door for more than 4 sec.
B1104
Luggage Antenna Circuit
B1105
Driver Side Antenna Circuit
B1106
Passenger Side Antenna Circuit
B1107
Rear Outside Antenna Circuit
B1125
Clutch / Shift Switch Malfunction
M/T model:
Ignition: “ON”
Clutch pedal: Depress for more than 2 sec. → Release for more than 2 sec.
A/T model:
Ignition: “ON”
Select lever:
“P” or “N” range for more than 2 sec.
Other than “P” or “N” range for more than 2 sec.
B1126
P Position Switch Malfunction
Ignition: “ON”
Select lever: Other than “P” range for more than 3 sec.
B1134
Remote Controller Battery Low
Perform any of the following.
Using remote controller, repeat lock and unlock doors more than 2 times as keyless entry operation.
Holding remote controller in the vehicle compartment, repeat open and close a door more than 2 times with ignition “ON”.
Keeping remote controller in the outside antenna detection area, repeat lock and unlock doors more than 2 times as door request switch operation.
B1137
Brake Light Switch Malfunction
Ignition: “ON”
Brake pedal: Depress for more than 2 sec. → Release for more than 2 sec.
B1157
Air Bag Impact Signal Input
Ignition: “ON” → “OFF”
B1180
Driver Side Door Request Switch Malfunction
Driver door request switch: ON ↔ OFF
B1181
Passenger Side Door Request Switch Malfunction
Passenger door request switch: ON ↔ OFF
B1182
Rear End Door / Trunk Lid Request Switch Malfunction
Rearend door request switch: ON ↔ OFF
B1186
Antenna Circuit Internal Defect
Ignition: “OFF”
Door: All closed → Open a door for more than 4 sec.
B1189
Immobilizer Antenna Communication Error
Place remote controller on the engine switch and set ignition “ON”.
B1190
Engine Switch Malfunction
Engine switch: ON ↔ OFF
B1194
Starting Motor Relay Malfunction
Engine: Start → Stop
DTC Clearance
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Clear DTC according to instructions displayed on SUZUKI scan tool. Refer to Operator's Manual of SUZUKI scan tool for further details.
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
After completing DTC clearance, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0AA204005 - DTC Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204005.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures > Models > K14C
Outgoing references:
- AENLSB0AA504006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504006.xml | DTC Table
- AENLSB0AA504006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504006.xml | DTC Table
- AENLSB0AA504006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504006.xml | DTC Table
- AENLSB0AA504006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504006.xml | DTC Table
- AENLSB0AA304005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304005.xml | DTC Table
- AENLSB0AA504006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504006.xml | DTC Table
- AENLSB0AA304005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304005.xml | DTC Table
- AENLSB0AA504006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504006.xml | DTC Table
- AENLSB0AA304005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304005.xml | DTC Table
- AENLSB0AA504006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504006.xml | DTC Table
- AENLSB0A7204009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204009.xml | DTC Table
- AENLSB0A7204009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204009.xml | DTC Table
- AENLSB0AA814002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814002.xml | CAN DTC (Lost Communication and Communication Bus Off) Table:CAN (K14C Model)

Content:
DTC Table
*1: Theft deterrent light blinks.
*2: Immobilizer indicator light lights up or blinks.
*3: “KEY FOB LOW BATTERY” is shown in information display.
*4: “AUTO” indicator of auto A/C panel blinks.
*5: High beam assist warning light lights up. (high beam assist model)
DTC
DTC name
DTC detecting condition
Warning
B1103
Mid Inside Antenna Circuit
Refer to
DTC Table
.
Lights up *1
B1104
Luggage Antenna Circuit
Lights up *1
B1105
Driver Side Antenna Circuit
Lights up *1
B1106
Passenger Side Antenna Circuit
Lights up *1
B1107
Rear Outside Antenna Circuit
Lights up *1
B1108
BCM Internal Defect
Lights up *1
B1120
BCM Internal Defect
BCM internal failure.
Lights up *2
B1123
DOME Fuse Circuit / Open
Backup power supply circuit voltage from “DOME2” fuse is lower than specified value.
Off
B1125
Clutch / Shift Switch Malfunction
Refer to
DTC Table
.
Lights up *2
B1126
P Position Switch Malfunction
Lights up *2
B1133
Battery Voltage too High
Backup power supply circuit voltage from “DOME2” fuse is continuously higher than 16.0 V for specified time.
Off
B1134
Remote Controller Battery Low
Refer to
DTC Table
.
Lights up *3
B1137
Brake Light Switch Malfunction
Lights up *2
B1141
Outside Air Temperature (Ambient Temperature) Sensor Circuit Open
Outside air temperature sensor signal circuit voltage is higher than 4.68 V for specified time continuously.
Lights up *4
B1142
Outside Air Temperature (Ambient Temperature) Sensor Circuit Short To Ground
Outside air temperature sensor signal circuit voltage is lower than 0.14 V for specified time continuously.
Lights up *4
B1145
A/C Evaporator Temperature Sensor Circuit High
Evaporator temperature sensor signal circuit voltage is higher than 4.85 V for specified time continuously.
Lights up *4
B1146
A/C Evaporator Temperature Sensor Circuit Low
Evaporator temperature sensor signal circuit voltage is lower than 0.15 V for specified time continuously.
Lights up *4
B1148
Auto Light Sensor Malfunction
Auto-on headlight sensor signal circuit voltage is lower than 0.5 V for specified time continuously.
Off
B1150
Air Bag Communication Circuit Malfunction
After ignition “ON”, abnormal signal is fed from SDM to BCM.
Lights up *1
B1157
Air Bag Impact Signal Input
Collision detection signal is fed from SDM to BCM.
Off
B115C
Steering Lock Unit Actuator Power Supply Circuit (Steering Lock Unit)
Refer to
DTC Table
.
Lights up *2
B115D
Steering Lock Unit Performance
Lights up *2
B115E
Steering Lock Unit Power Supply Circuit (BCM)
Lights up *2
B115F
Steering Lock Unit Actuator Power Supply Circuit (BCM)
Lights up *2
B1160
Steering Lock Unit Communication Error
Lights up *2
B1161
Steering Lock Unit Information Mismatched
Lights up *2
B1162
Steering Lock Unit Internal Defect
Lights up *2
B1163
Steering Lock Unit Unregistered
Off
B1168
Password Mismatched
Refer to
DTC Table
.
Off
B1169
Registration Failure
Off
B116A
Abnormal Vehicle Speed Pulses From ABS / ESP ® Control Module
Refer to
DTC Table
.
Off
B1170
EEPROM Access Error
BCM internal failure. (EEPROM error)
Lights up *2
B1173
Transponder Unregistered
Refer to
DTC Table
.
Lights up *2
B1175
Immobilizer Information Unregistered
Lights up *2
B1176
Specification Information Unregistered
Lights up *2
B1180
Driver Side Door Request Switch Malfunction
Refer to
DTC Table
.
Lights up *1
B1181
Passenger Side Door Request Switch Malfunction
Lights up *1
B1182
Rear End Door / Trunk Lid Request Switch Malfunction
Lights up *1
B1186
Antenna Circuit Internal Defect
Lights up *1
B1189
Immobilizer Antenna Communication Error
Refer to
DTC Table
.
Lights up *2
B1190
Engine Switch Malfunction
Refer to
DTC Table
.
Lights up *2
B1191
Accessory Relay Malfunction
Lights up *2
B1192
Ignition1 Relay Malfunction
Lights up *2
B1193
Ignition2 Relay Malfunction
Lights up *2
B1194
Starting Motor Relay Malfunction
Lights up *2
B1461
Vehicle Speed Signal Inconsistency
Any of the following conditions is met.
Invalid data is received from ECM.
CAN communication error with ECM.
Off
B1508
Inside Air Temperature Sensor Circuit High
Refer to
DTC Table
.
Lights up *4
B1509
Inside Air Temperature Sensor Circuit Low
Lights up *4
B150A
Sunload Sensor Circuit High
Off
B150B
Sunload Sensor Circuit Low
Off
B150C
Temperature Control Actuator Position Sensor Circuit High
Lights up *4
B150D
Temperature Control Actuator Position Sensor Circuit Low
Lights up *4
B1513
Driver Side Temperature Control Actuator (Motor) and/or Its Circuit Malfunction
Lights up *4
B1514
Air Flow Control Actuator (Motor) and/or Its Circuit Malfunction
Lights up *4
B1519
Air Flow Control Actuator Position Sensor Circuit High
Lights up *4
B151A
Air Flow Control Actuator Position Sensor Circuit Low
Lights up *4
B151B
Air Intake Control Actuator Position Sensor Circuit High
Lights up *4
B151C
Air Intake Control Actuator Position Sensor Circuit Low
Refer to
DTC Table
.
Lights up *4
B1531
Air Intake Control Actuator and/or Its Circuit Malfunction
Lights up *4
B1546
A/C Refrigerant Pressure Malfunction
Off
B1549
LIN Invalid Data from BCM to Auto A/C Panel
Lights up *4
B1563
A/C Refrigerant Pressure Sensor and/or Its Circuit Malfunction
Off
U0073
Control Module Communication Bus Off
K14C model: Refer to
CAN DTC (Lost Communication and Communication Bus Off) Table:CAN (K14C Model)
.
.
Lights up *4
U0100
Lost Communication With ECM
Lights up *4
U0101
Lost Communication With TCM
Off
U0121
Lost Communication With ABS / ESP ® Control Module
Off
U0151
Lost Communication With Restraints Control Module
Lights up *1
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Off
U1082
Lost Communication With ENG A-STOP Control Module
Off
U108B
Lost Communication With Lighting and Turn Signal Switch
Lights up *5
U1093
Lost Communication With DSBS Control Module
Lights up *5
U2005
LIN Lost Communication With Auto A/C Panel
Malfunction of LIN communication data from auto A/C panel is detected.
Lights up *4

---

## AENLSB0AA204006 - Fail-Safe Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204006.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Fail-Safe Table
When DTC is detected, BCM enters fail-safe mode as long as malfunction continues to exist but that mode is canceled when BCM recovers normal condition.
DTC
DTC name
Fail-safe operation
B1120
BCM Internal Defect
—
B1123
DOME Fuse Circuit/Open
—
B1133
Battery Voltage too High
—
B1141
Outside Air Temperature (Ambient Temperature) Sensor Circuit Open
BCM outputs outside air temperature –40 °C (–40 °F).
B1142
Outside Air Temperature (Ambient Temperature) Sensor Circuit Short To Ground
BCM outputs outside air temperature 87.5 °C (189.5 °F).
B1145
A/C Evaporator Temperature Sensor Circuit High
BCM outputs evaporator temperature –40 °C (–40 °F).
B1146
A/C Evaporator Temperature Sensor Circuit Low
BCM outputs evaporator temperature 60 °C (140 °F).
B1148
Auto Light Sensor Malfunction
BCM stops auto-on headlight control.
B1150
Air Bag Communication Circuit Malfunction
—
B1157
Air Bag Impact Signal Input
BCM stops lock operation at power door lock switch until ignition is set to “OFF”.
B1170
EEPROM Access Error
—
B1461
Vehicle Speed Signal Inconsistency
—
U0073
Control Module Communication Bus Off
—
U0100
Lost Communication With ECM
—
U0101
Lost Communication With TCM
—
U0121
Lost Communication With ABS / ESP ® Control Module
—
U0151
Lost Communication With Restraints Control Module
—
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
—
U1082
Lost Communication With ENG A-STOP Control Module
—
U108B
Lost Communication With Lighting and Turn Signal Switch
BCM turns on headlights (low beam), clearance lights and tail lights when ignition is “ON”.
U1093
Lost Communication With DSBS Control Module
BCM stops high beam assist function.
U2005
LIN Lost Communication With Auto A/C Panel
—

---

## AENLSB0AA204007 - Scan Tool Data
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204007.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures > Models > K14C
Outgoing references:
- AENLSB0A7204011 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204011.xml | Scan Tool Data

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
Check BCM power circuit and ground circuit.
*1: Data with asterisk 1 (*1) in the table below may either be applicable or not applicable depending on the model.
Scan tool data
Normal condition / Reference value
Condition
Temp Cont Switch
Refer to
Scan Tool Data
.
Mode Cont Switch
Fan Cont Switch
Air Intake Mode
Vehicle Speed
ECT
Outside Air Temp
Cabin Temperature
Sun Load
Evaporator Temp
Refrigerant Pressure
Air Mix Pos Sen
Mode Pos Sensor
R/F Pos Sensor
Fan Desired Volt
A/C Cont Sig
Blower Load Sig
Rear DEF Indicator
A/C Comp Clutch
Engine Run Request
Outside Air Temp
The same value as outside air temperature
Measured environmental temperature at front bumper
Battery Voltage
10 – 14 V
Engine: Running
LED Illumi Contrast
100%
Any one of door: Open
100 → 0%
20 seconds have elapsed after all doors are closed
0%
Other than above condition
Auto Light Sensor
Approx. 4.4 V
Light the sensor with an incandescent light of approximately 100 V 100 W or sun shine in a sunny day
Approx. 0.5 V
Shading the sensor
A/C Evaporator Temp
0 – 5 °C (32 – 41 °F)
A/C compressor: ON
Temperature selector: Maximum cool position
Blower speed selector: Low
Vehicle Speed
Almost the same as speedometer reading
In driving
Engine Speed
K14C-M/T model: 650 – 750 rpm
Engine: Idle speed with no load applied after warming up
K14C-A/T model: 750 – 850 rpm
Guide Me Light to Car (*1)
0 s
Guide me light to car setting time: 0 second
10 s
Guide me light to car setting time: 10 seconds
15 s
Guide me light to car setting time: 15 seconds
20 s
Guide me light to car setting time: 20 seconds
25 s
Guide me light to car setting time: 25 seconds
Guide Me Light to Home (*1)
0 s
Guide me light to home setting time: 0 second
10 s
Guide me light to home setting time: 10 seconds
15 s
Guide me light to home setting time: 15 seconds
20 s
Guide me light to home setting time: 20 seconds
25 s
Guide me light to home setting time: 25 seconds
30 s
Guide me light to home setting time: 30 seconds
Ignition Position
IG OFF
Ignition: “OFF”
ACC
Ignition: “ACC”
IG ON
Ignition: “ON”
Cranking
Engine: Cranking
Unclear
Other than above condition
Driv Door SW
ON
Driver door: Opened
OFF
Other than above condition
Pass Door SW
ON
Passenger door: Opened
OFF
Other than above condition
Rear End Door Opener
ON
Rearend door opener switch: Pushed
OFF
Other than above condition
Back Door/Trunk SW
ON
Rearend door: Opened
OFF
Other than above condition
Rear Right Door SW
ON
Right rear door: Opened
OFF
Other than above condition
Rear Left Door SW
ON
Left rear door: Opened
OFF
Other than above condition
Rear Defogger SW
ON
Rear defogger switch: Pushed
OFF
Other than above condition
Maximum Heating Switch
ON
Temperature selector: HI position
Blower motor: ON
OFF
Other than above condition
Passing Switch
ON
Dimmer / Passing switch: “PASS” position
OFF
Other than above condition
Auto Light SW
ON
Lighting switch: “AUTO” position
OFF
Other than above condition
Front Fog Light SW
ON
Front fog light switch: ON
OFF
Other than above condition
Rear Fog Light SW (*1)
ON
Rear fog light switch: ON
OFF
Other than above condition
FAR/NEAR / LDW OFF Switch (*1)
ON
Lane departure warning OFF switch: Pushed
OFF
Other than above condition
RBS / DCBS / DSBS OFF Switch (*1)
ON
Dual sensor brake support OFF switch: Pushed
OFF
Other than above condition
Rear Right Seatbelt SW (*1)
Fasten
Rear right seat belt: Fastened
Unfasten
Other than above condition
Rear Center Seatbelt SW (*1)
Fasten
Rear center seat belt: Fastened
Unfasten
Other than above condition
Rear Left Seatbelt SW (*1)
Fasten
Rear left seat belt: Fastened
Unfasten
Other than above condition
Ignition 1 Relay
ON
Ignition “ON” or engine at cranking
OFF
Other than above condition
Ignition 2 Relay
ON
Ignition: “ON”
OFF
Other than above condition
Accessory Relay
ON
Ignition: “ACC” and “ON”
OFF
Other than above condition
Starting Motor Relay
ON
Engine: Cranking
OFF
Other than above condition
Steering Lock Counter
0 – 5,000 times
Steering lock operation times: 0 – 5,000
5,001 – 7,000 times
Steering lock operation times: 5,001 – 7,000
7,001 – 10,000 times
Steering lock operation times: 7,001 – 10,000
10,001 – 15,000 times
Steering lock operation times: 10,001 – 15,000
15,001 – 50,000 times
Steering lock operation times: 15,001 – 50,000
50,001 – 100,000 times
Steering lock operation times: 50,001 – 100,000
100,001 – 200,000 times
Steering lock operation times: 100,001 – 200,000
Over 200,001 times
Steering lock operation times: Over 200,001
Door Key SW (Lock)
ON
Driver key cylinder switch: “Lock” position
OFF
Other than above condition
Door Key SW (Unlock)
ON
Driver key cylinder switch: “Unlock” position
OFF
Other than above condition
Power door lock SW
ON
Power door lock switch: “Lock” position
OFF
Other than above condition
Power door Unlock SW
ON
Power door lock switch: “Unlock” position
OFF
Other than above condition
Driver Request SW
ON
Driver door request switch: ON
OFF
Other than above condition
Passenger Request SW
ON
Passenger door request switch: ON
OFF
Other than above condition
Tailgate Request Switch
ON
Rearend door request switch: ON
OFF
Other than above condition
P Position / CPP 2 Switch
ON
M/T model:
Clutch pedal: Depressed
A/T model:
Select lever: “P” range
Select lever button: Released
OFF
Other than above condition
Starting Motor Relay (Mon)
ON
Engine: Cranking
OFF
Other than above condition
Shift / Clutch Switch
ON
M/T model:
Clutch pedal: Depressed
A/T model:
Select lever: “P” or “N” range
OFF
Other than above condition
Headlight SW
ON
Lighting switch: “HEAD” position
OFF
Other than above condition
Tail Light SW
ON
Lighting switch: “CLEARANCE” or “HEAD” position
OFF
Other than above condition
Brake Light Switch
ON
Brake pedal: Depressed
OFF
Other than above condition
Headlight HI SW
ON
Dimmer / Passing switch: “HI” position
OFF
Other than above condition
Turn Signal Light R SW
ON
Turn signal switch (R): ON
OFF
Other than above condition
Turn Signal Light L SW
ON
Turn signal switch (L): ON
OFF
Other than above condition
Hazard SW
ON
Hazard warning switch: ON
OFF
Other than above condition
ENG A-STOP OFF SW (*1)
ON
ENG A-STOP OFF switch: Pushed
OFF
ENG A-STOP OFF switch: Released
Driv Seatbelt SW
Fasten
Driver seat belt: Fastened
Unfasten
Other than above condition
Pass Seatbelt SW
Fasten
Passenger seat belt: Fastened
Passenger seat: Someone sits on passenger seat
Unfasten
Passenger seat belt: Unfastened
Passenger seat: Someone sits on passenger seat
Steering Unlock Switch
ON
Ignition: “ACC” and “ON”
OFF
Set ignition “OFF” and open a door
Steering Lock Switch
ON
Set ignition “OFF” and open a door
OFF
Ignition: “ACC” and “ON”
Driver Door Lock SW
ON
Driver door lock: Lock position
OFF
Other than above condition
Passenger Door Lock SW
ON
Passenger door lock: Lock position
OFF
Other than above condition
Brake Fluid Level
Low
Brake fluid level switch: ON (brake fluid level lower than “MIN” level)
Normal
Brake fluid level switch: OFF (brake fluid level at “MIN” level or higher)
Parking Brake SW
ON
Parking brake lever: Pulled
OFF
Parking brake lever: Released
Charge Light
OFF
—
Oil Pressure SW
OFF
Engine: Running (K14C model)
ON
Other than above condition (K14C model)
A/C SW
ON
A/C switch: ON
OFF
Other than above condition
Ignition 1 Switch
ON
Ignition: “ON”
OFF
Other than above condition
Ignition 2 Switch
ON
Ignition: “ON”
OFF
Other than above condition
ACC Switch
ON
Ignition: “ACC” or “ON”
OFF
Other than above condition
Engine switch 1
ON
Engine switch: Pushed
OFF
Other than above condition
Engine switch 2
ON
Engine switch: Pushed
OFF
Other than above condition
Brake Light SW Information
ON
Brake pedal: Depressed
OFF
Other than above condition
Hood SW 1 (*1)
Open
Hood: Opened
Close
Hood: Closed
Hood SW 2 (*1)
Open
Hood: Opened
Close
Hood: Closed
Rear Wiper INT SW
ON
Rear wiper switch: INT position
OFF
Other than above condition
Front Wiper Status (*1)
OFF
—
Rear Washer SW
ON
Rear wiper switch: WASH position
OFF
Other than above condition
High Beam Assist (*1)
Active
High beam assist setting: Active mode
Disabled
High beam assist setting: Disabled mode
Keyless Start System
ON
Keyless start control system: Active
OFF
Keyless start control system: Disabled
Remote Controller Battery Warning
Active
Remote controller battery warning setting: Active mode
Disabled
Remote controller battery warning setting: Disabled mode
Security Alarm (*1)
Active
Security alarm setting: Active mode
Disabled
Security alarm setting: Disabled mode
Daytime Running Light
Active
DRL setting: Active mode
Disabled
DRL setting: Disabled mode
Answer-back (Outside Buzzer)
Active
Answer-back (outside buzzer) setting: Active mode
Disabled
Answer-back (outside buzzer) setting: Disabled mode
Turn Signal Light
0
Flashing setting of turn signal light: 0
+1
Flashing setting of turn signal light: +1
+2
Flashing setting of turn signal light: +2
+3
Flashing setting of turn signal light: +3
Remote Controller Area Warning
Active
Remote controller area warning setting: Active mode
Disabled
Remote controller area warning setting: Disabled mode
Door Unlock
1 Action
Door unlock setting: 1 action
2 Action
Door unlock setting: 2 action

---

## AENLSB0AA204008 - Scan Tool Active Test Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204008.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Scan Tool Active Test Table
SUZUKI scan tool includes output test function which can force operation of the following actuators and relays of systems controlled by BCM. When a malfunction is found in system controlled by BCM, execute output test to facilitate judgment of whether the malfunction is on the input or output side of BCM. For details of SUZUKI scan tool, refer to its Operator's Manual.
*1: Data with asterisk 1 (*1) in the table below may either be applicable or not applicable depending on the model.
Front Fog Light (*1)
Interior (Dome) Light
Warning Buzzer
Auto ON Headlight (*1)
Engine SW Illumination (*1)
Warning Exterior Buzzer (*1)
Hazard Warning Light
Luggage/Trunk Light
Rear Defogger
High Beam (*1)
Door
Horn (*1)
DRL (*1)
Rear End door (trunk) open (*1)
Rear Wiper (*1)
Rear Fog Light (*1)
Alarm Indicator
Shift Lock Solenoid (*1)

---

## AENLSB0AA204009 - Scan Tool Utility Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204009.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Scan Tool Utility Table
SUZUKI scan tool has setting change function of BCM as follows. For details of SUZUKI scan tool, refer to its Operator's Manual.
*1: Data with asterisk 1 (*1) in the table below may either be applicable or not applicable depending on the model.
Item
Setting
Description
Dead Lock Control Test (*1)
—
Deadlock function is performed.
Configuration
Guide Me Light to Car (*1)
0 s / 10 s / 15 s / 20 s / 25 s
Setting times (0 s / 10 s / 15 s / 20 s / 25 s) for guide me light to car can be changed.
Guide Me Light to Home (*1)
0 s / 10 s / 15 s / 20 s / 25 s / 30 s
Setting times (0 s / 10 s / 15 s / 20 s / 25 s / 30 s) for guide me light to home can be changed.
Keyless Start System (*1)
ON / OFF
Setting of each inside and outside antenna (radio wave transmission allowed / not allowed) can be changed.
Remote Controller Battery Warning (*1)
Disabled / Active
Setting (disabled / active) for remote controller battery run down warning can be changed.
Security Alarm (*1)
Disabled / Active
Setting (disabled / active) for security alarm mode can be changed.
Daytime Running Light (*1)
Disabled / Active
Set up of the DRL function (non-operable / operable) can be changed.
Answer-back (Outside buzzer) (*1)
Disabled / Active
Setting (disabled / active) for outside warning buzzer during answer-back can be changed.
Turn Signal Light
0 / +1 / +2 / +3
For situations such as lane changes, it is possible to set the number of times the turn signal lights flash when turn signal switch is momentarily switched on and off.
0: Turn signal lights flash once when turn signal switch is turned on 1 time.
+1: Turn signal lights flash 2 times when turn signal switch is turned on 1 time. (+1 time on and off for 1 time switching on)
+2: Turn signal lights flash 3 times when turn signal switch is turned on 1 time. (+2 time on and off for 1 time switching on)
+3: Turn signal lights flash 4 times when turn signal switch is turned on 1 time. (+3 time on and off for 1 time switching on)
Remote Controller Area Warning (*1)
Disabled / Active
Setting (disabled / active) for warning buzzer (in combination meter) during remote controller out of detection area alarm can be changed.
Door Unlock (*1)
1 Action / 2
Action
Set up of the door unlock function (1 action / 2 action) can be changed.
High Beam Assist (*1)
Disabled / Active
Set up of the high beam assist function (non-operable / operable) can be changed.

---

## AENLSB0AA204010 - DTC B1120 / B1170
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204010.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA204010002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1120 / B1170
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1120: BCM Internal Defect
BCM internal failure.
BCM
B1170: EEPROM Access Error
BCM internal failure. (EEPROM error)
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
This DTC might be detected when battery is run down or the voltage is very low.
DTC recheck
Disconnect negative (–) cable at battery.
Connect negative (–) cable at battery.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1120 or B1170 still detected?
Replace BCM and recheck DTC.
End.

---

## AENLSB0AA204011 - DTC B1123
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204011.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA204011002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1123
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1123: DOME Fuse Circuit / Open
Backup power supply circuit voltage from “DOME2” fuse is lower than specified value.
“DOME2” fuse
J/B circuit / connector
J/B
BCM
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
BCM power supply circuit check
Check BCM power supply circuit.
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
Fuse check
Set ignition “OFF”.
Check “DOME2” fuse.
Is check result OK?
Go to Step 3.
Replace “DOME2” fuse and recheck DTC.
DTC check
Check for proper terminal connection to BCM connector and J/B connector.
If connections are OK, perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1123 still detected?
Replace BCM and recheck DTC.
End.

---

## AENLSB0AA204012 - DTC B1133
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204012.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1133
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1133: Battery Voltage too High
Backup power supply circuit voltage from “DOME2” fuse is continuously higher than 16.0 V for specified time.
Charging system
BCM
DTC Confirmation Procedure
Set ignition “ON”.
Start engine, if possible.
DTC Troubleshooting
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check “Battery Voltage” displayed on SUZUKI scan tool.
Is check result OK?
End. (Intermittent trouble.)
Go to Step 2.
Charging system check
Check charging system.
K14C model:
Is check result OK?
Replace BCM and recheck DTC.
Repair charging system.

---

## AENLSB0AA204013 - DTC B1141 / B1142
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204013.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA204013003 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1141 / B1142
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1141: Outside Air Temperature (Ambient Temperature) Sensor Circuit Open
Outside air temperature sensor signal circuit voltage is higher than 4.68 V for specified time continuously.
Outside air temperature sensor circuit / connector
Outside air temperature sensor
BCM
B1142: Outside Air Temperature (Ambient Temperature) Sensor Circuit Short To Ground
Outside air temperature sensor signal circuit voltage is lower than 0.14 V for specified time continuously.
Circuit Diagram
[A]:
BCM connector (View: [a])
A2:
Outside air temperature sensor ground circuit
2.
BCM
A1:
Outside air temperature sensor signal circuit
1.
Outside air temperature sensor
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check “Outside Air Temp” displayed on SUZUKI scan tool.
Is check result OK?
End. (Intermittent trouble.)
Go to Step 2.
Outside air temperature sensor circuit check
Disconnect negative (–) cable at battery.
Disconnect outside air temperature sensor and “E04” connectors.
Check for proper terminal connection to outside air temperature sensor and “E04” connectors.
If connections are OK, check the following points.
Resistance of “A1” and “A2” circuits: less than 1 Ω
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and each terminal at “E04” connector: infinity
Resistance between “A2” circuit terminal and each terminal at “E04” connector: infinity
Resistance between each of “A1” and “A2” circuits and battery positive (+) cable: infinity
Resistance between “A1” circuit and each fuse in individual circuit fuse box No.2: infinity
Resistance between “A2” circuit and each fuse in individual circuit fuse box No.2: infinity
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Outside air temperature sensor check
Check outside air temperature sensor.
Is check result OK?
Go to Step 4.
Replace outside air temperature sensor.
DTC check
Connect outside air temperature sensor and “E04” connectors.
Connect negative (–) cable at battery.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is current DTC B1141 or B1142 detected?
Replace BCM and recheck DTC.
End. (Intermittent trouble.)

---

## AENLSB0AA204014 - DTC B1145 / B1146
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204014.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA204014003 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1145 / B1146
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1145: A/C Evaporator Temperature Sensor Circuit High
Evaporator temperature sensor signal circuit voltage is higher than 4.85 V for specified time continuously.
Evaporator temperature sensor circuit / connector
Evaporator temperature sensor
BCM
B1146: A/C Evaporator Temperature Sensor Circuit Low
Evaporator temperature sensor signal circuit voltage is lower than 0.15 V for specified time continuously.
Circuit Diagram
[A]:
BCM connector (View: [a])
A2:
Evaporator temperature sensor ground circuit
2.
BCM
A1:
Evaporator temperature sensor signal circuit
1.
Evaporator temperature sensor
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check “A/C Evaporator Temp” displayed on SUZUKI scan tool.
Is check result OK?
End. (Intermittent trouble.)
Go to Step 2.
Evaporator temperature sensor circuit check
Disconnect negative (–) cable at battery.
Disconnect evaporator temperature sensor and “G04” connectors.
Check for proper terminal connection to evaporator temperature sensor and “G04” connectors.
If connections are OK, check the following points.
Resistance of “A1” and “A2” circuits: less than 1 Ω
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and each terminal at “G04” connector: infinity
Resistance between “A2” circuit terminal and each terminal at “G04” connector: infinity
Resistance between each of “A1” and “A2” circuits and battery positive (+) cable: infinity
Resistance between “A1” circuit and each fuse in individual circuit fuse box No.2: infinity
Resistance between “A2” circuit and each fuse in individual circuit fuse box No.2: infinity
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Evaporator temperature sensor check
Check evaporator temperature sensor.
Is check result OK?
Go to Step 4.
Replace evaporator temperature sensor.
DTC check
Connect evaporator temperature sensor and “G04” connectors.
Connect negative (–) cable at battery.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is current DTC B1145 or B1146 detected?
Replace BCM and recheck DTC.
End. (Intermittent trouble.)

---

## AENLSB0AA204015 - DTC B1148
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204015.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA204015003 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1148
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1148: Auto Light Sensor Malfunction
Auto-on headlight sensor signal circuit voltage is lower than 0.5 V for specified time continuously.
Auto-on headlight sensor circuit / connector
Auto-on headlight sensor
BCM
Circuit Diagram
[A]:
BCM connector (View: [a])
A2:
Auto-on headlight sensor signal circuit
1.
Auto-on headlight sensor
A1:
Auto-on headlight sensor power supply circuit
A3:
Auto-on headlight sensor ground circuit
2.
BCM
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check “Auto Light Sensor” displayed on SUZUKI scan tool.
Is check result OK?
End. (Intermittent trouble.)
Go to Step 2.
Auto-on headlight sensor power supply circuit check
Disconnect negative (–) cable at battery.
Disconnect auto-on headlight sensor, “G04” and “G05” connectors.
Check for proper terminal connection to auto-on headlight sensor, “G04” and “G05” connectors.
If connections are OK, check the following points.
Resistance of “A1” circuit: less than 1 Ω
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and each terminal at “G05” connector: infinity
Resistance between “A1” circuit and battery positive (+) cable: infinity
Resistance between “A1” circuit and each fuse in individual circuit fuse box No.2: infinity
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Auto-on headlight sensor ground circuit check
Check the following points.
Resistance of “A3” circuit: less than 1 Ω
Resistance between “A3” circuit terminal and each terminal at “G04” connector: infinity
Resistance between “A3” circuit and battery positive (+) cable: infinity
Resistance between “A3” circuit and each fuse in individual circuit fuse box No.2: infinity
Is check result OK?
Go to Step 4.
Repair or replace defective wire harness.
Auto-on headlight sensor signal circuit check
Check the following points.
Resistance of “A2” circuit: less than 1 Ω
Resistance between “A2” circuit and ground: infinity
Resistance between “A2” circuit terminal and each terminal at “G05” connector: infinity
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
Auto-on headlight sensor check
Check auto-on headlight sensor.
Is check result OK?
Go to Step 6.
Replace auto-on headlight sensor.
DTC check
Connect auto-on headlight sensor, “G04” and “G05” connectors.
Connect negative (–) cable at battery.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is current DTC B1148 detected?
Replace BCM and recheck DTC.
End. (Intermittent trouble.)

---

## AENLSB0AA204016 - DTC B1150
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204016.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1150
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1150: Air Bag Communication Circuit Malfunction
After ignition “ON”, abnormal signal is fed from SDM to BCM.
Between SDM and BCM circuit / connector
SDM
BCM
Circuit Diagram
[A]:
SDM connector (View: [a])
A1:
Air bag communication signal circuit
2.
BCM
[B]:
BCM connector (View: [b])
1.
SDM
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
This DTC might be detected when battery is run down or the voltage is very low.
Air bag communication signal circuit check
Disconnect negative (–) cable at battery.
Disconnect “G12” and “L01” connectors.
Check for proper terminal connection to “G12” and “L01” connectors.
If connections are OK, check the following points.
Resistance of “A1” circuit: less than 1 Ω
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and each terminal at “L01” connector: infinity
Resistance between “A1” circuit and battery positive (+) cable: infinity
Resistance between “A1” circuit and each fuse in individual circuit fuse box No.2: infinity
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
BCM check
Connect “L01” connector.
Connect negative (–) cable at battery.
Set ignition “ON”.
Check that voltage between “A1” and ground is battery voltage.
Is check result OK?
Replace SDM and recheck DTC.
Replace BCM and recheck DTC.

---

## AENLSB0AA204017 - DTC B1157
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204017.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA204017002 -> unresolved | DTC Confirmation Procedure
- AENLSB0AA204017002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1157
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1157: Air Bag Impact Signal Input
Collision detection signal is fed from SDM to BCM.
SDM
BCM
DTC Confirmation Procedure
Set ignition “ON”.
Set ignition “OFF”.
Set ignition “ON”.
DTC Troubleshooting
DTC recheck
Clear DTC.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1157 still detected?
Go to Step 2.
End. (Air bag has deployed in past. (DTC is not cleared))
DTC recheck
Replace SDM.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1157 still detected?
Replace BCM and recheck DTC.
End. (SDM was faulty)

---

## AENLSB0AA204018 - DTC B1461
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204018.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA204020 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204020.xml | DTC U0100

Content:
DTC B1461
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1461: Vehicle Speed Signal Inconsistency
Any of the following conditions is met.
Invalid data is received from ECM.
CAN communication error with ECM.
CAN communication line
Wheel speed sensor
ESP ® control module
ECM
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Drive vehicle at 60 km/h (37 mile/h) or more for 1 minute.
DTC Troubleshooting
DTC check
Check DTC.
Is DTC U0100 detected?
Go to troubleshooting in
DTC U0100
.
Go to Step 2.
DTC check
Check DTC in ECM.
K14C model:
Is DTC P0500 detected?
Go to troubleshooting in “DTC P0500”.
K14C model:
Go to Step 3.
DTC check
Check DTC in ESP ® control module.
Is DTC(s) related to wheel speed sensor detected?
Go to troubleshooting for applicable DTC.
Replace ESP ® control module and recheck DTC.

---

## AENLSB0AA204019 - DTC U0073
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204019.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814004.xml | Troubleshooting for Communication Bus Off:CAN (K14C Model)

Content:
DTC U0073
K14C model: Refer to
Troubleshooting for Communication Bus Off:CAN (K14C Model)
.
.

---

## AENLSB0AA204020 - DTC U0100
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204020.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0100
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0AA204021 - DTC U0101
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204021.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures > K14C || dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0101
Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.

---

## AENLSB0AA204022 - DTC U0121
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204022.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0121
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0AA204023 - DTC U0151
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204023.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0151
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0AA204024 - DTC U0155
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204024.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0155
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0AA204025 - DTC U1082
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204025.xml
Tree scopes: dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC U1082
Refer to
.

---

## AENLSB0AA204026 - DTC U108B
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204026.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U108B
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0AA204027 - DTC U1093
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204027.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U1093
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0AA204028 - DTC U2005
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204028.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A7204020 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204020.xml | DTC B1549 / U2005

Content:
DTC U2005
Refer to
DTC B1549 / U2005
.

---

## AENLSB0AA204029 - Inspection of BCM and Its Circuits
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204029.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures > K14C
Outgoing references:
- AENLSB0AA204029004 -> unresolved | CAN communication signal
- AENLSB0AA204029005 -> unresolved | Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
- AENLSB0AA204029006 -> unresolved | Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
- AENLSB0AA204029006 -> unresolved | Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
- AENLSB0AA204029004 -> unresolved | CAN communication signal
- AENLSB0AA204029005 -> unresolved | Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
- AENLSB0AA204029006 -> unresolved | Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
- AENLSB0AA204029007 -> unresolved | Vehicle speed input signal
- AENLSB0AA204029005 -> unresolved | Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
- AENLSB0AA204029005 -> unresolved | Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
- AENLSB0AA204029008 -> unresolved | Hazard warning switch signal and door key cylinder switch signal
- AENLSB0AA204029008 -> unresolved | Hazard warning switch signal and door key cylinder switch signal
- AENLSB0AA204029006 -> unresolved | Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
- AENLSB0AA204029005 -> unresolved | Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
- AENLSB0AA204029005 -> unresolved | Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
- AENLSB0AA204029008 -> unresolved | Hazard warning switch signal and door key cylinder switch signal
- AENLSB0AA204029006 -> unresolved | Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
- AENLSB0AA204029009 -> unresolved | Engine switch signal
- AENLSB0AA204029010 -> unresolved | Vehicle speed output signal
- AENLSB0AA204029011 -> unresolved | LIN communication signal
- AENLSB0AA204029009 -> unresolved | Engine switch signal
- AENLSB0AA204029012 -> unresolved | Engine switch illumination signal and dome light (DOOR) control signal
- AENLSB0AA204029005 -> unresolved | Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
- AENLSB0AA204029013 -> unresolved | Driver side outside antenna signal and passenger side outside antenna signal
- AENLSB0AA204029013 -> unresolved | Driver side outside antenna signal and passenger side outside antenna signal
- AENLSB0AA204029005 -> unresolved | Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
- AENLSB0AA204029005 -> unresolved | Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
- AENLSB0AA204029005 -> unresolved | Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
- AENLSB0AA204029013 -> unresolved | Driver side outside antenna signal and passenger side outside antenna signal
- AENLSB0AA204029013 -> unresolved | Driver side outside antenna signal and passenger side outside antenna signal
- AENLSB0AA204029005 -> unresolved | Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
- AENLSB0AA204029005 -> unresolved | Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
- AENLSB0AA204029014 -> unresolved | Air bag communication signal
- AENLSB0AA204029006 -> unresolved | Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
- AENLSB0AA204029015 -> unresolved | Mid inside antenna signal, rear outside antenna signal and rear inside antenna signal
- AENLSB0AA204029015 -> unresolved | Mid inside antenna signal, rear outside antenna signal and rear inside antenna signal
- AENLSB0AA204029015 -> unresolved | Mid inside antenna signal, rear outside antenna signal and rear inside antenna signal
- AENLSB0AA204029005 -> unresolved | Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
- AENLSB0AA204029006 -> unresolved | Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
- AENLSB0AA204029006 -> unresolved | Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
- AENLSB0AA204029004 -> unresolved | CAN communication signal
- AENLSB0AA204029005 -> unresolved | Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
- AENLSB0AA204029006 -> unresolved | Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
- AENLSB0AA204029006 -> unresolved | Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
- AENLSB0AA204029015 -> unresolved | Mid inside antenna signal, rear outside antenna signal and rear inside antenna signal
- AENLSB0AA204029015 -> unresolved | Mid inside antenna signal, rear outside antenna signal and rear inside antenna signal
- AENLSB0AA204029015 -> unresolved | Mid inside antenna signal, rear outside antenna signal and rear inside antenna signal
- AENLSB0AA204029005 -> unresolved | Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
- AENLSB0AA204029005 -> unresolved | Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
- AENLSB0AA204029005 -> unresolved | Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
- AENLSB0AA204029006 -> unresolved | Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
- AENLSB0AA204029004 -> unresolved | CAN communication signal
- AENLSB0AA204029012 -> unresolved | Engine switch illumination signal and dome light (DOOR) control signal

Content:
Inspection of BCM and Its Circuits
Voltage and Signal Check
Check voltage and/or pulse signal of BCM (1) and J/B (2) using voltmeter (3) and oscilloscope (4).
Check that battery voltage is 12 V or more.
The voltage of terminal with asterisk (*) cannot be measured by voltmeter because it is pulse signal.
Check it with oscilloscope if necessary.
*1: Without seat heater
*2: With seat heater
[A]:
BCM connector / J/B connector (View: [a])
7.
“RR FOG” fuse
12.
“BACK” fuse
[B]:
BCM connector / J/B connector (View: [b])
8.
“DOME2” fuse
13.
“ACC” fuse
[C]:
Individual circuit fuse box No.2 (In J/B)
9.
“TAIL L” fuse
14.
“IG2 SIG” fuse
5.
“STL” fuse
10.
“TAIL” fuse
15.
“WASH” fuse
6.
“HAZ” fuse
11.
“IG1 SIG” fuse
16.
Rear defogger relay
“E04” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
E04-1
—
—
—
—
E04-2
—
—
—
—
E04-3
—
—
—
—
E04-4
—
—
—
—
E04-5*
RED
CAN communication line (high)
Refer to
CAN communication signal
.
E04-6
BRN
Ground for outside air temperature sensor
Approx. 0 V
—
E04-7*
LT BLU
Hood latch switch 1 signal (ENG A-STOP model)
Refer to
Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
.
Approx. 0 V
Ignition: “ON”
Hood latch: Fully latched
E04-8*
BLU
Oil pressure switch signal (K14C model)
Refer to
Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
.
Approx. 0 V
Ignition: “ON”
Engine: Stopped
E04-9
—
—
—
—
E04-10
BLU
Front turn signal light signal (L)
0 ↔ 14 V
Left turn signal light: Blinks
E04-11
LT GRN
Outside air temperature sensor signal
Approx. 2.7 V
Ignition: “ON”
Outside air temperature: 0 °C (32 °F)
Approx. 1.6 V
Ignition: “ON”
Outside air temperature: 20 °C (68 °F)
E04-12
GRY
Power supply for starting motor control relay
10 – 14 V
Engine: Cranking
Approx. 0 V
Other than above condition
E04-13
—
—
—
—
E04-14
—
—
—
—
E04-15*
PPL
CPP No.2 switch signal (M/T model)
10 – 14 V
Ignition: “ON”
Clutch pedal: Released
Approx. 0 V
Ignition: “ON”
Clutch pedal: Depressed
P position switch signal (A/T model)
Refer to
Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
.
Approx. 0 V
Ignition: “ON”
Select lever: “P” range
E04-16
—
—
—
—
E04-17*
WHT
CAN communication line (low)
Refer to
CAN communication signal
.
E04-18
—
—
—
—
E04-19
BLU
Horn relay control (security alarm model)
Approx. 0 V
Horn: Sounds
10 – 14 V
Other than above condition
E04-20*
GRY
Brake fluid level switch signal
Refer to
Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
.
Approx. 0 V
Ignition: “ON”
Brake fluid level: Lower than “MIN” level
E04-21
—
—
—
—
E04-22
GRN
Front turn signal light signal (R)
0 ↔ 14 V
Right turn signal light: Blinks
E04-23
—
—
—
—
E04-24*
YEL
Hood latch switch 2 signal (ENG A-STOP model)
Refer to
Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
.
Approx. 0 V
Ignition: “ON”
Hood latch: Latch released
“E05” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
E05-1
BLU
Headlight LO relay (L) control
Approx. 0 V
Ignition: “ON”
Lighting switch: “AUTO” or “HEAD” position
Headlight: Lights up
10 – 14 V
Ignition: “ON”
Lighting switch: “OFF”, “AUTO” or “CLEARANCE” position
Headlight: OFF
E05-2
—
—
—
—
E05-3
GRY
DRL (L) control
10 – 14 V
DRL: ON
Approx. 0 V
Other than above condition
E05-4
LT BLU
Front fog light relay control
Approx. 0 V
Ignition: “ON”
Lighting switch: “AUTO”, “CLEARANCE” or “HEAD” position
Front fog light switch: ON
Front fog light: Lights up
Lighting switch: “OFF” position
10 – 14 V
Other than above condition
E05-5
GRN
CPP No.1 switch signal (M/T model)
Approx. 0 V
Ignition: “ON”
Clutch pedal: Depressed
10 – 14 V
Ignition: “ON”
Clutch pedal: Released
Transmission range sensor signal (A/T model)
Approx. 0 V
Ignition: “ON”
Select lever: “P” or “N” range
10 – 14 V
Other than above condition
E05-6
RED
Clearance light (L) control
10 – 14 V
Ignition: “ON”
Lighting switch: “AUTO”, “CLEARANCE” or “HEAD” position
Clearance light: Lights up
Approx. 0 V
Ignition: “ON”
Lighting switch: “OFF” or “AUTO” position
Clearance light: OFF
E05-7*
PPL
Vehicle speed input signal
Refer to
Vehicle speed input signal
.
E05-8
—
—
—
—
E05-9
LT GRN
Headlight LO relay (R) control
Approx. 0 V
Ignition: “ON”
Lighting switch: “AUTO” or “HEAD” position
Headlight: Lights up
10 – 14 V
Ignition: “ON”
Lighting switch: “OFF”, “AUTO” or “CLEARANCE” position
Headlight: OFF
E05-10
—
—
—
—
E05-11
RED
DRL (R) control
10 – 14 V
DRL: ON
Approx. 0 V
Other than above condition
E05-12
BLU
Clearance light (R) control
10 – 14 V
Ignition: “ON”
Lighting switch: “AUTO”, “CLEARANCE” or “HEAD” position
Clearance light: Lights up
Approx. 0 V
Ignition: “ON”
Lighting switch: “OFF” or “AUTO” position
Clearance light: OFF
E05-13
PNK
Headlight HI relay control
Approx. 0 V
Headlight high beam: Lights up
10 – 14 V
Other than above condition
E05-14
YEL
Outside warning buzzer
0 ↔ 4 V
Outside warning buzzer: Sounding
E05-15
LT GRN
Starting motor control relay signal
10 – 14 V
Engine: Cranking
Approx. 0 V
Other than above condition
E05-16
—
—
—
—
“G04” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
G04-1
BLK
Ground for BCM
Approx. 0 V
—
G04-2*
BEG
Rear wiper switch signal (INT)
Refer to
Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
.
Approx. 0 V
Ignition: “ON”
Rear wiper switch: INT position
G04-3
—
—
—
—
G04-4*
GRN
Lane departure warning OFF switch signal (DSBS model)
Refer to
Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
.
Approx. 0 V
Ignition: “ON”
Lane departure warning OFF switch: Pushed
G04-5
—
—
—
—
G04-6
PNK
Rear wiper switch signal (WASH)
10 – 14 V
Ignition: “ON”
Rear wiper switch: OFF
Approx. 0 V
Ignition: “ON”
Rear wiper switch: WASH position
G04-7
—
—
—
—
G04-8*
WHT
Hazard warning switch signal
Refer to
Hazard warning switch signal and door key cylinder switch signal
.
Approx. 0 V
Ignition: “ON”
Hazard warning switch: ON
G04-9*
BRN
Door key cylinder switch signal (unlock)
Refer to
Hazard warning switch signal and door key cylinder switch signal
.
Approx. 0 V
Door key cylinder switch: “Unlock” position
G04-10*
GRY
Power door lock switch signal (unlock)
Refer to
Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
.
Approx. 0 V
Power door lock switch: “Unlock” position
G04-11
—
—
—
—
G04-12*
BEG
Dual sensor brake support OFF switch signal (DSBS model)
Refer to
Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
.
Approx. 0 V
Ignition: “ON”
Duel sensor brake support OFF switch: Pushed
G04-13
—
—
—
—
G04-14
—
—
—
—
G04-15
LT BLU
Evaporator temperature sensor signal
Approx. 3.2 V
Ignition: “ON”
A/C outlet port temperature: 0 °C (32 °F)
Approx. 1.8 V
Ignition: “ON”
A/C outlet port temperature: 25 °C (77 °F)
G04-16
BLU
Temperature control actuator control (COOL)
Approx. 0 V
Ignition: “ON”
Temperature control actuator: COOL to HOT position
10 – 14 V
Other than above condition
G04-17
—
—
—
—
G04-18
—
—
—
—
G04-19*
BRN
ENG A-STOP OFF switch signal (ENG A-STOP model)
Refer to
Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
.
Approx. 0 V
Ignition: “ON”
ENG A-STOP OFF switch: Pushed
G04-20
LT GRN
Theft deterrent light signal
0 ↔ 14 V
Theft deterrent light: Blinks
10 – 14 V
Theft deterrent light: OFF
G04-21
—
—
—
—
G04-22
YEL
Ground for sensors
Approx. 0 V
—
G04-23
—
—
—
—
G04-24
—
—
—
—
G04-25*
BLU
Door key cylinder switch signal (lock)
Refer to
Hazard warning switch signal and door key cylinder switch signal
.
Approx. 0 V
Door key cylinder switch: “Lock” position
G04-26*
GRN
Power door lock switch signal (lock)
Refer to
Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
.
Approx. 0 V
Power door lock switch: “Lock” position
G04-27
—
—
—
—
G04-28*
PNK
Push switch 1 signal
Refer to
Engine switch signal
.
Approx. 0 V
Engine switch: Pushed
G04-29
—
—
—
—
G04-30*
PPL
Vehicle speed output signal (if equipped)
Refer to
Vehicle speed output signal
.
G04-31
LT GRN
Engine switch
—
—
G04-32
GRY
Temperature control actuator control (HOT)
Approx. 0 V
Ignition: “ON”
Temperature control actuator: HOT to COOL position
10 – 14 V
Other than above condition
“G05” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
G05-1
BEG
Air flow control actuator control (DEF)
Approx. 0 V
Ignition: “ON”
Air flow control actuator: “DEF” to “FACE” position
10 – 14 V
Other than above condition
G05-2
BRN
Air intake control actuator position sensor signal
Approx. 4 V
Ignition: “ON”
Air intake switch: “REC” position
Approx. 1 V
Ignition: “ON”
Air intake switch: “FRE” position
G05-3
YEL
Blower motor controller signal
Approx. 12 V
Ignition: “ON”
Blower speed selector: OFF position
Approx. 7.0 V
Ignition: “ON”
Blower speed selector: 1st position
Approx. 5.5 V
Ignition: “ON”
Blower speed selector: 2nd position
Approx. 4.5 V
Ignition: “ON”
Blower speed selector: 3rd position
Approx. 3.0 V
Ignition: “ON”
Blower speed selector: 4th position
Approx. 2.0 V
Ignition: “ON”
Blower speed selector: 5th position
Approx. 1.0 V
Ignition: “ON”
Blower speed selector: 6th position
Approx. 0.5 V
Ignition: “ON”
Blower speed selector: 7th position
Below 0.5 V
Ignition: “ON”
Blower speed selector: 8th position
G05-4
GRN
Output of 5 V power source for actuator position sensors
Approx. 5 V
Ignition: “ON”
G05-5
WHT
Air intake control actuator control (RECIRCULATION AIR)
Approx. 0 V
Ignition: “ON”
Air intake control actuator: “REC” to “FRE” position
10 – 14 V
Other than above condition
G05-6
BEG
Inside air temperature sensor signal
Approx. 2.4 V
Ignition: “ON”
Interior temperature: 25 °C (77 °F)
G05-7
—
—
—
—
G05-8
—
—
—
—
G05-9
—
—
—
—
G05-10
—
—
—
—
G05-11*
BRN
LIN communication signal (auto A/C panel)
Refer to
LIN communication signal
.
G05-12
PPL
Power supply for auto-on headlight sensor
4 – 6 V
Ignition: “ON”
G05-13
—
—
—
—
G05-14
—
—
—
—
G05-15
—
—
—
—
G05-16
—
—
—
—
G05-17
LT GRN
Air flow control actuator control (FACE)
Approx. 0 V
Ignition: “ON”
Air flow control actuator: “FACE” to “DEF” position
10 – 14 V
Other than above condition
G05-18
PNK
Air intake control actuator control (FRESH AIR)
Approx. 0 V
Ignition: “ON”
Air intake control actuator: “FRE” to “REC” position
10 – 14 V
Other than above condition
G05-19
RED
Blower motor control signal
Approx. 0 V
Ignition: “ON”
Blower speed selector: OFF position
Approx. 4.5 V
Ignition: “ON”
Blower speed selector: at either of 1st to 6th positions
Approx. 8.0 V
Ignition: “ON”
Blower speed selector: 7th or 8th positions
G05-20
PPL
Temperature control actuator position sensor signal
Approx. 4.0 V
Ignition: “ON”
Temperature selector: “MAX COOL” position
Approx. 1.5 V
Ignition: “ON”
Temperature selector: “MAX HOT” position
G05-21
GRY
Air flow control actuator position sensor signal
Approx. 4.0 V
Ignition: “ON”
“MODE” (air flow) switch: “FACE” position
Approx. 1.5 V
Ignition: “ON”
Defroster switch: ON
G05-22
LT BLU
Sunload sensor signal
Approx. 5 V
Ignition: “ON”
Amount of sun load: 0 W/m 2
Approx. 0 V
Ignition: “ON”
Amount of sun load: 500 W/m 2
G05-23
—
—
—
—
G05-24
—
—
—
—
G05-25
—
—
—
—
G05-26
GRN
Auto-on headlight sensor signal
Approx. 4.4 V
Ignition: “ON”
Auto-on headlight sensor: Light lens with 100 W light or sun shine in a sunny day
Approx. 0.5 V
Ignition: “ON”
Auto-on headlight sensor: Cover lens by hand
G05-27
BLK
Ground for BCM
Approx. 0 V
—
G05-28
—
—
—
—
G05-29*
RED
Push switch 2 signal
Refer to
Engine switch signal
.
Approx. 0 V
Engine switch: Pushed
G05-30
—
—
—
—
G05-31*
BLU
Engine switch illumination signal
Except the following condition, refer to
Engine switch illumination signal and dome light (DOOR) control signal
.
10 – 14 V
Engine switch illumination: OFF
Approx. 0 V
Engine switch illumination: ON
G05-32
—
—
—
—
“G06” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
G06-1
PNK
Steering lock unit
—
—
G06-2
YEL
Engine switch
—
—
G06-3
PPL
Steering lock unit
—
—
G06-4*
RED
Passenger door request switch signal
Refer to
Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
.
Approx. 0 V
Passenger door request switch: Pushed
G06-5*
BEG
Driver side outside antenna (–) signal
Refer to
Driver side outside antenna signal and passenger side outside antenna signal
.
Approx. 0 V
All door: 30 seconds after closed
G06-6*
LT GRN
Passenger side outside antenna (–) signal
Refer to
Driver side outside antenna signal and passenger side outside antenna signal
.
Approx. 0 V
All door: 30 seconds after closed
G06-7
WHT
Steering lock unit
—
—
G06-8*
GRY
Driver door request switch signal
Refer to
Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
.
Approx. 0 V
Driver door request switch: Pushed
G06-9*
LT BLU
Driver door lock switch signal
Refer to
Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
.
Approx. 0 V
Driver door lock switch: Unlocked
G06-10*
BLU
Passenger door lock switch signal
Refer to
Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
.
Approx. 0 V
Passenger door lock switch: Unlocked
G06-11*
GRN
Driver side outside antenna (+) signal
Refer to
Driver side outside antenna signal and passenger side outside antenna signal
.
Approx. 0 V
All door: 30 seconds after closed
G06-12*
WHT
Passenger side outside antenna (+) signal
Refer to
Driver side outside antenna signal and passenger side outside antenna signal
.
Approx. 0 V
All door: 30 seconds after closed
“L01” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
L01-1
BLU
Luggage compartment light control
10 – 14 V
Luggage compartment light switch: “ON” position
Rearend door: Closed
Approx. 0 V
Other than above condition
L01-2*
LT BLU
Rear left seat belt buckle switch signal (if equipped)
Refer to
Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
.
Approx. 0 V
Ignition: “ON”
Rear left seat belt: Unfastened
L01-3*
PNK
Rear right seat belt buckle switch signal (if equipped)
Refer to
Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
.
Approx. 0 V
Ignition: “ON”
Rear right seat belt: Unfastened
L01-4*
PPL
Air bag communication signal (DSBS model)
Refer to
Air bag communication signal
.
L01-5*
BEG
Rear door switch signal (R)
Refer to
Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
.
Approx. 0 V
Rear door (R): Open
L01-6*
GRN
Mid inside antenna (–) signal
Refer to
Mid inside antenna signal, rear outside antenna signal and rear inside antenna signal
.
L01-7*
BLU
Rear outside antenna (–) signal
Refer to
Mid inside antenna signal, rear outside antenna signal and rear inside antenna signal
.
Approx. 0 V
All door: 30 seconds after closed
L01-8*
RED
Rear inside antenna (–) signal
Refer to
Mid inside antenna signal, rear outside antenna signal and rear inside antenna signal
.
Approx. 0 V
All door: 30 seconds after closed
L01-9*
GRY
Driver seat belt buckle switch signal
Refer to
Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
.
Approx. 0 V
Ignition: “ON”
Driver seat belt: Unfastened
L01-10*
GRN
Rearend door switch signal
Refer to
Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
.
Approx. 0 V
Rearend door: Open
L01-11
RED
License plate light control
10 – 14 V
Ignition: “ON”
Lighting switch: “AUTO”, “CLEARANCE” or “HEAD” position
License plate light: Lights up
Approx. 0 V
Ignition: “ON”
Lighting switch: “OFF” or “AUTO” position
License plate light: OFF
L01-12*
PNK
Driver door switch signal
Refer to
Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
.
Approx. 0 V
Driver door: Open
L01-13
PPL
Tail light (R) control
10 – 14 V
Ignition: “ON”
Lighting switch: “AUTO”, “CLEARANCE” or “HEAD” position
Tail light: Lights up
Approx. 0 V
Ignition: “ON”
Lighting switch: “OFF” or “AUTO” position
Tail light: OFF
L01-14
GRN
Rear and door mirror turn signal light signal (R)
0 ↔ 14 V
Right turn signal light: Blinks
L01-15*
RED
CAN communication line (high)
Refer to
CAN communication signal
.
L01-16
BLK
Ground for BCM
Approx. 0 V
—
L01-17
BEG
Rear fog light control (if equipped)
10 – 14 V
Lighting switch: “HEAD” position
Rear fog light switch: ON
Approx. 0 V
Other than above condition
L01-18
WHT
Shift lock solenoid control (A/T model)
10 – 14 V
Ignition: “ON”
Select lever: “P” range
Brake pedal: Depressed
Approx. 0 V
Other than above condition
L01-19*
YEL
Rear center seat belt buckle switch signal (if equipped)
Refer to
Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
.
Approx. 0 V
Ignition: “ON”
Rear center seat belt: Unfastened
L01-20*
LT GRN
Parking brake switch signal
Refer to
Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
.
Approx. 0 V
Ignition: “ON”
Parking brake lever: Pulled up
L01-21*
WHT
Rear door switch signal (L)
Refer to
Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
.
Approx. 0 V
Rear door (L): Open
L01-22*
BLK
Mid inside antenna (+) signal
Refer to
Mid inside antenna signal, rear outside antenna signal and rear inside antenna signal
.
L01-23*
WHT
Rear outside antenna (+) signal
Refer to
Mid inside antenna signal, rear outside antenna signal and rear inside antenna signal
.
L01-24*
LT GRN
Rear inside antenna (+) signal
Refer to
Mid inside antenna signal, rear outside antenna signal and rear inside antenna signal
.
L01-25*
PPL (*1) / GRN (*2)
Passenger seat belt buckle switch signal
Refer to
Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
.
Approx. 0 V
Ignition: “ON”
Passenger seat belt: Unfastened
Passenger seat: Someone sits on passenger seat
L01-26*
YEL
Rearend door request switch signal
Refer to
Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
.
Approx. 0 V
Rearend door request switch: Pushed
L01-27*
BRN
Rearend door opener switch signal
Refer to
Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
.
Approx. 0 V
Rearend door opener switch: Pushed
L01-28*
LT BLU
Passenger door switch signal
Refer to
Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
.
Approx. 0 V
Passenger door: Open
L01-29
YEL
Tail light (L) control
10 – 14 V
Ignition: “ON”
Lighting switch: “AUTO”, “CLEARANCE” or “HEAD” position
Tail light: Lights up
Approx. 0 V
Ignition: “ON”
Lighting switch: “OFF” or “AUTO” position
Tail light: OFF
L01-30
BLU
Rear and door mirror turn signal light signal (L)
0 ↔ 14 V
Left turn signal light: Blinks
L01-31*
WHT
CAN communication line (low)
Refer to
CAN communication signal
.
L01-32
BLK
Ground for BCM
Approx. 0 V
—
“E323” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
E323-13
YEL
Power supply for front fog light relay
10 – 14 V
Ignition: “ON”
Lighting switch: “AUTO”, “CLEARANCE” or “HEAD” position
Tail light, clearance light: Lights up
Approx. 0 V
Ignition: “ON”
Lighting switch: “OFF” or “AUTO” position
Tail light, clearance light: OFF
E323-24
PPL
Brake light switch signal
Approx. 0 V
Brake pedal: Released
10 – 14 V
Brake pedal: Depressed
“G271” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
G271-15
GRN
Door mirror heater (L) control (if equipped)
10 – 14 V
Engine: Running
Rear defogger: ON
Approx. 0 V
Other than above condition
G271-28
GRN
Passenger door lock actuator control (unlock)
10 – 14 V
Unlock signal is output to passenger door lock actuator.
Approx. 0 V
Other than above condition
G271-29
BRN
Passenger door lock actuator control (lock)
10 – 14 V
Lock signal is output to passenger door lock actuator.
Approx. 0 V
Other than above condition
G271-30
PPL
Front door lock actuator control (deadlock lock) (deadlock model)
10 – 14 V
Deadlock lock signal is output to front door lock actuators.
Approx. 0 V
Other than above condition
G271-37
BEG
Door mirror heater (R) control (if equipped)
10 – 14 V
Engine: Running
Rear defogger: ON
Approx. 0 V
Other than above condition
G271-50
BEG
Driver door lock actuator control (unlock)
10 – 14 V
Unlock signal is output to driver door lock actuator.
Approx. 0 V
Other than above condition
G271-51
LT BLU
Driver door lock actuator control (lock)
10 – 14 V
Lock signal is output to driver door lock actuator.
Approx. 0 V
Other than above condition
G271-52
RED
Front door lock actuator control (deadlock unlock) (deadlock model)
10 – 14 V
Deadlock unlock signal is output to front door lock actuators.
Approx. 0 V
Other than above condition
“L314” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
L314-7
YEL
Rear door lock actuator control (deadlock lock) (deadlock model)
10 – 14 V
Deadlock lock signal is output to rear door lock actuators.
Approx. 0 V
Other than above condition
L314-8
LT GRN
Rear door lock actuator control (lock)
10 – 14 V
Lock signal is output to rear door lock actuators.
Approx. 0 V
Other than above condition
L314-11
PNK
Rear defogger control
10 – 14 V
Engine: Running
Rear defogger: ON
Approx. 0 V
Other than above condition
L314-18
GRN
Rear door lock actuator control (unlock)
10 – 14 V
Unlock signal is output to rear door lock actuators.
Approx. 0 V
Other than above condition
L314-19
BLU
Rearend door opener actuator control
10 – 14 V
Rearend door opener actuator: In operation
Approx. 0 V
Other than above condition
L314-23
RED
Rear door lock actuator control (deadlock unlock) (deadlock model)
10 – 14 V
Deadlock unlock signal is output to rear door lock actuators.
Approx. 0 V
Other than above condition
L314-24
PNK
Rear wiper control
10 – 14 V
Ignition: “ON”
Approx. 0 V
Ignition: “ON”
Rear wiper: In operation
“K131” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
K131-1*
LVN/BLU
Dome light control (DOOR)
Except the following conditions, refer to
Engine switch illumination signal and dome light (DOOR) control signal
.
10 – 14 V
Dome light switch: “DOOR” position
Dome light: Not lights up
Approx. 0 V
Dome light switch: “DOOR” position
Dome light: Lights up
K131-5
BEG
Dome light (ON) control
10 – 14 V
Dome light switch: “ON” position
Dome light: 15 minutes after lighting up
Approx. 0 V
Other than above condition
Fuse
Terminal
Normal voltage
Condition
“ACC” fuse
1
10 – 14 V
Ignition: “ACC” or “ON”
Approx. 0 V
Other than above condition
“WASH” fuse
1
10 – 14 V
Ignition: “ON”
Approx. 0 V
Other than above condition
“BACK” fuse
1
10 – 14 V
Ignition: “ON”
Approx. 0 V
Other than above condition
“IG1 SIG” fuse
1
10 – 14 V
Ignition: “ON”
Approx. 0 V
Other than above condition
“TAIL L” fuse
2
10 – 14 V
—
“TAIL” fuse
2
10 – 14 V
—
“RR FOG” fuse
1
10 – 14 V
Ignition: “ON”
Approx. 0 V
Other than above condition
“HAZ” fuse
1
10 – 14 V
—
“DOME2” fuse
2
10 – 14 V
—
“STL” fuse
1
10 – 14 V
—
“IG2 SIG” fuse
1
10 – 14 V
Ignition: “ON”
Approx. 0 V
Other than above condition
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
E04-5
L01-15
–
G04-1
CAN communication signal (low) (2):
Channel
Probe
Terminal No.
2
+
E04-17
L01-31
–
G04-1
Measurement condition
Ignition: “ON”
Hood latch switch 1 signal, brake fluid level switch signal, rear wiper switch (INT) signal, lane departure warning OFF switch signal, dual sensor brake support OFF switch signal, ENG A-STOP OFF switch signal, door request switch signal, door lock switch signal, seat belt buckle switch signal and rearend door opener switch signal
Hood latch switch 1 signal:
Channel
Probe
Terminal No.
1
+
E04-7
–
G04-1
Measurement condition
Ignition: “ON”
Hood latch: Latch released
Brake fluid level switch signal:
Channel
Probe
Terminal No.
1
+
E04-20
–
G04-1
Measurement condition
Ignition: “ON”
Brake fluid level switch: OFF (brake fluid level: higher than “MIN” level)
Rear wiper switch (INT) signal:
Channel
Probe
Terminal No.
1
+
G04-2
–
G04-1
Measurement condition
Ignition: “ON”
Rear wiper switch: OFF
Lane departure warning OFF switch signal:
Channel
Probe
Terminal No.
1
+
G04-4
–
G04-1
Measurement condition
Ignition: “ON”
Lane departure warning OFF switch: Released
Dual sensor brake support OFF switch signal:
Channel
Probe
Terminal No.
1
+
G04-12
–
G04-1
Measurement condition
Ignition: “ON”
Dual sensor brake support OFF switch: Released
ENG A-STOP OFF switch signal:
Channel
Probe
Terminal No.
1
+
G04-19
–
G04-1
Measurement condition
Ignition: “ON”
ENG A-STOP OFF switch: Released
Driver door request switch signal:
Channel
Probe
Terminal No.
1
+
G06-8
–
G04-1
Measurement condition
Driver door request switch: OFF
Passenger door request switch signal:
Channel
Probe
Terminal No.
1
+
G06-4
–
G04-1
Measurement condition
Passenger door request switch: OFF
Rearend door request switch signal:
Channel
Probe
Terminal No.
1
+
L01-26
–
G04-1
Measurement condition
Rearend door request switch: OFF
Driver door lock switch signal:
Channel
Probe
Terminal No.
1
+
G06-9
–
G04-1
Measurement condition
Driver door lock switch: Locked
Passenger door lock switch signal:
Channel
Probe
Terminal No.
1
+
G06-10
–
G04-1
Measurement condition
Passenger door lock switch: Locked
Driver seat belt buckle switch signal:
Channel
Probe
Terminal No.
1
+
L01-9
–
G04-1
Measurement condition
Ignition: “ON”
Driver seat belt: Fastened
Passenger seat belt buckle switch signal:
Channel
Probe
Terminal No.
1
+
L01-25
–
G04-1
Measurement condition
Ignition: “ON”
Passenger seat belt: Fastened
Passenger seat: Someone sits on passenger seat
Rear left seat belt buckle switch signal:
Channel
Probe
Terminal No.
1
+
L01-2
–
G04-1
Measurement condition
Ignition: “ON”
Rear left seat belt: Fastened
Rear center seat belt buckle switch signal:
Channel
Probe
Terminal No.
1
+
L01-19
–
G04-1
Measurement condition
Ignition: “ON”
Rear center seat belt: Fastened
Rear right seat belt buckle switch signal:
Channel
Probe
Terminal No.
1
+
L01-3
–
G04-1
Measurement condition
Ignition: “ON”
Rear right seat belt: Fastened
Rearend door opener switch signal:
Channel
Probe
Terminal No.
1
+
L01-27
–
G04-1
Measurement condition
Rearend door opener switch: OFF
Oil pressure switch signal, P position switch signal, hood latch switch 2 signal, power door lock switch signal, door switch signal and parking brake switch signal
Oil pressure switch signal:
Channel
Probe
Terminal No.
1
+
E04-8
–
G04-1
Measurement condition
Engine: Running
P position switch signal:
Channel
Probe
Terminal No.
1
+
E04-15
–
G04-1
Measurement condition
Ignition: “ON”
Select lever: Other than “P” range
Hood latch switch 2 signal:
Channel
Probe
Terminal No.
1
+
E04-24
–
G04-1
Measurement condition
Ignition: “ON”
Hood latch: Fully latched
Power door lock switch signal (unlock):
Channel
Probe
Terminal No.
1
+
G04-10
–
G04-1
Measurement condition
Power door lock switch (unlock): OFF
Power door lock switch signal (lock):
Channel
Probe
Terminal No.
1
+
G04-26
–
G04-1
Measurement condition
Power door lock switch (lock): OFF
Driver door switch signal:
Channel
Probe
Terminal No.
1
+
L01-12
–
G04-1
Measurement condition
Driver door: Closed
Passenger door switch signal:
Channel
Probe
Terminal No.
1
+
L01-28
–
G04-1
Measurement condition
Passenger door: Closed
Rear door switch signal (R):
Channel
Probe
Terminal No.
1
+
L01-5
–
G04-1
Measurement condition
Rear door (R): Closed
Rear door switch signal (L):
Channel
Probe
Terminal No.
1
+
L01-21
–
G04-1
Measurement condition
Rear door (L): Closed
Rearend door switch signal:
Channel
Probe
Terminal No.
1
+
L01-10
–
G04-1
Measurement condition
Rearend door: Closed
Parking brake switch signal:
Channel
Probe
Terminal No.
1
+
L01-20
–
G04-1
Measurement condition
Ignition: “ON”
Parking brake lever: Released
Vehicle speed input signal
Channel
Probe
Terminal No.
1
+
E05-7
–
G04-1
Measurement condition
Vehicle speed: 40 km/h (25 mile/h)
Hazard warning switch signal and door key cylinder switch signal
Hazard warning switch signal:
Channel
Probe
Terminal No.
1
+
G04-8
–
G04-1
Measurement condition
Hazard warning switch: OFF
Door key cylinder switch signal (unlock):
Channel
Probe
Terminal No.
1
+
G04-9
–
G04-1
Measurement condition
Door key cylinder switch (unlock): OFF
Door key cylinder switch signal (lock):
Channel
Probe
Terminal No.
1
+
G04-25
–
G04-1
Measurement condition
Door key cylinder switch (lock): OFF
Engine switch signal
Push switch 1 signal (1):
Channel
Probe
Terminal No.
1
+
G04-28
–
G04-1
Push switch 2 signal (2):
Channel
Probe
Terminal No.
2
+
G05-29
–
G04-1
Measurement condition
Engine switch: Released
Vehicle speed output signal
Channel
Probe
Terminal No.
1
+
G04-30
–
G04-1
Measurement condition
Vehicle speed: 40 km/h (25 mile/h)
LIN communication signal
Channel
Probe
Terminal No.
1
+
G05-11
–
G04-1
Measurement condition
Ignition: “ON”
Engine switch illumination signal and dome light (DOOR) control signal
Engine switch illumination signal
Channel
Probe
Terminal No.
1
+
G05-31
–
G04-1
Measurement condition
At engine switch illumination light OFF process after closing driver side door
Dome light (DOOR) control signal:
Channel
Probe
Terminal No.
1
+
K131-1
–
G04-1
Measurement condition
At dome light OFF process after closing all doors
1.
Start of illumination light OFF
2.
Completion of illumination light OFF
Driver side outside antenna signal and passenger side outside antenna signal
Driver side outside antenna (+) signal (1):
Channel
Probe
Terminal No.
1
+
G06-11
–
G04-1
Driver side outside antenna (–) signal (2):
Channel
Probe
Terminal No.
2
+
G06-5
–
G04-1
Measurement condition
Door: All closed → Open driver’s door.
Passenger side outside antenna (+) signal (1):
Channel
Probe
Terminal No.
1
+
G06-12
–
G04-1
Passenger side outside antenna (–) signal (2):
Channel
Probe
Terminal No.
2
+
G06-6
–
G04-1
Measurement condition
Door: All closed → Open driver’s door
Air bag communication signal
Channel
Probe
Terminal No.
1
+
L01-4
–
G04-1
Measurement condition
Ignition: “ON”
Mid inside antenna signal, rear outside antenna signal and rear inside antenna signal
Mid inside antenna (+) signal (1):
Channel
Probe
Terminal No.
1
+
L01-22
–
G04-1
Mid inside antenna (–) signal (2):
Channel
Probe
Terminal No.
2
+
L01-6
–
G04-1
Measurement condition
Door: All closed → Open driver’s door.
Rear outside antenna (+) signal (1):
Channel
Probe
Terminal No.
1
+
L01-23
–
G04-1
Rear outside antenna (–) signal (2):
Channel
Probe
Terminal No.
2
+
L01-7
–
G04-1
Measurement condition
Door: All closed → Open driver’s door.
Rear inside antenna (+) signal (1):
Channel
Probe
Terminal No.
1
+
L01-24
–
G04-1
Rear inside antenna (–) signal (2):
Channel
Probe
Terminal No.
2
+
L01-8
–
G04-1
Measurement condition
Door: All closed → Open driver’s door.

---

## AENLSB0AA204030 - BCM Power Supply and Ground Circuit Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204030.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Diagnostic Information and Procedures
Outgoing references: none

Content:
BCM Power Supply and Ground Circuit Check
Circuit Diagram
[A]:
J/B connector (View: [a])
2.
ACC, IG1 and IG2 relay drive circuit
11.
“BACK” fuse
[B]:
BCM connector (View: [a])
3.
Power supply circuit
12.
“IG1 SIG” fuse
A1:
Backup power supply circuit 1
4.
IG11 relay
13.
“TAIL L” fuse
A2:
Backup power supply circuit 2
5.
IG21 relay
14.
“TAIL” fuse
C1:
BCM ground circuit 1
6.
IG22 relay
15.
“RR FOG” fuse
C2:
BCM ground circuit 2
7.
IG23 relay
16.
“HAZ” fuse
C3:
BCM ground circuit 3
8.
ACC relay
17.
“DOME2” fuse
C4:
BCM ground circuit 4
9.
“ACC” fuse
18.
“STL” fuse
1.
BCM
10.
“WASH” fuse
Troubleshooting
Check that battery voltage is 12 V or more.
Measure voltage between each terminal of J/B connector and ground in the following table. If each measured voltage is out of specified range, repair or replace related part.
Terminal
Specified voltage
Related part
Ignition: OFF
Ignition: “ACC”
Ignition: “ON”
“E323-22” to ground
Battery voltage
Backup power supply circuit 1 (A1)
“E324-2” to ground
Battery voltage
Backup power supply circuit 2 (A2)
Measure voltage between each terminal of backup power supply circuit and BCM ground terminal in the following table.
If each measured voltage is out of specified range, repair or replace related part.
Terminal
Specified voltage
Related part
Ignition: OFF
Ignition: “ON”
“E323-22” to “G04-1”
Battery voltage
BCM ground circuit 1 (C1)
“E323-22” to “L01-32”
BCM ground circuit 2 (C2)
“E323-22” to “G05-27”
BCM ground circuit 3 (C3)
“E323-22” to “L01-16”
BCM ground circuit 4 (C4)

---

## AENLSB0AA206001 - Remote Controller Registration
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Repair Instructions
Outgoing references: none

Content:
Remote Controller Registration
Refer to Operator’s Manual of SUZUKI scan tool immobilizer system for the immobilizer registration.
Register remote controller ID code using “Immobilizer Key Registration” function in SUZUKI scan tool.
Remote controller registration is performed through “Immobilizer Key Registration”, and this registers the immobilizer transponder code.
Performing “Immobilizer Key Registration” clears all of the ID codes already registered. Prepare all of the remote controllers.
It is possible to register 4 remote controllers in BCM.
If the BCM is replaced, register all of the remote controllers.
If all of remote controllers are lost, register remote controllers after replacing BCM.

---

## AENLSB0AA206002 - BCM Registration
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206002.xml
Tree scopes: unscoped
Outgoing references: none

Content:
BCM Registration
After BCM is replaced with new one, register remote controller ID code in BCM using SUZUKI scan tool and security device.
Prepare all of remote controllers ready for registration.
Perform “Immobilizer Key Registration” in “Immobilizer” menu on SUZUKI scan tool. Refer to Operator’s Manual of SUZUKI scan tool immobilizer system.

---

## AENLSB0AA206003 - BCM Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Repair Instructions
Outgoing references:
- AENLSB0AA206002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206002.xml | BCM Registration

Content:
BCM Removal and Installation
Removal
Disable air bag system.
Disconnect negative (–) cable at battery.
For LHD, remove steering column hole cover.
For RHD, remove glove box.
Disconnect connectors (1) from BCM (2).
Release lock (1) by pushing it and pull BCM in arrow direction.
Installation
Reverse removal procedure noting the following points.
Insert protrusions (1) at left and right to holes of J/B (2).
Push BCM at upper part and fix it securely.
Enable air bag system.
If BCM is replaced, perform
BCM Registration
.

---

## AENLSB0AA206004 - Outside Air Temperature Sensor Removal and Installation (If Equipped)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Repair Instructions
Outgoing references:
- AENLSB0AA206005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206005.xml | Outside Air Temperature Sensor Inspection (If Equipped)

Content:
Outside Air Temperature Sensor Removal and Installation (If Equipped)
Removal
Disconnect negative (–) cable at battery.
Remove front bumper.
Disconnect connector (1) from outside air temperature sensor.
Remove outside air temperature sensor (2) from front end lower cover.
Installation
Outside Air Temperature Sensor Inspection (If Equipped)
Reverse removal procedure.

---

## AENLSB0AA206005 - Outside Air Temperature Sensor Inspection (If Equipped)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206005.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Repair Instructions
Outgoing references:
- AENLSB0AA206004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206004.xml | Outside Air Temperature Sensor Removal and Installation (If Equipped)

Content:
Outside Air Temperature Sensor Inspection (If Equipped)
Outside Air Temperature Sensor Removal and Installation (If Equipped)
Measure resistance of outside air temperature sensor using ohmmeter.
If check result is not as specified, replace outside air temperature sensor.
Outside air temperature sensor resistance
0 °C (32 °F): 4.928 – 6.125 kΩ
25 °C (77 °F): 1.615 – 1.785 kΩ
40 °C (104 °F): 0.838 – 0.986 kΩ
[A]:
Resistance
[B]:
Temperature

---

## AENLSB0AA206006 - Security Alarm Mode Selection Procedure (If Equipped)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206006.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Repair Instructions
Outgoing references:
- AENLSB0AA204009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204009.xml | Scan Tool Utility Table
- AENLSB0A9301001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9301001.xml | Combination Meter Description

Content:
Security Alarm Mode Selection Procedure (If Equipped)
Security alarm mode can be selected by performing the following procedure.
Security alarm mode can also be selected by setting change function, refer to
Scan Tool Utility Table
or “User Customization Function” under
Combination Meter Description
.
Check that all doors are closed, all doors are unlocked and lighting switch is in OFF position.
Perform the following steps within 15 seconds.
Turn lighting switch to “CLEARANCE” position.
Turn lighting switch to “OFF” position.
Repeat Step a) – b) 3 times.
Push “LOCK” switch of power door lock switch (1).
Release “LOCK” switch of power door lock switch.
Repeat Step d) and e) 2 times.
Warning buzzer (in combination meter) sounds by the specified number for each mode as follows.
Changed from “Disabled” mode to “Active” mode: Buzzer sounds 4 times.
Changed from “Active” mode to “Disabled” mode: Buzzer sounds once.

---

## AENLSB0AA206008 - Remote Controller Battery Replacement
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206008.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Repair Instructions
Outgoing references:
- AENLSB0AA506016 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506016.xml | Remote Controller Battery Replacement

Content:
Remote Controller Battery Replacement
Refer to
Remote Controller Battery Replacement
.

---

## AENLSB0AA206009 - Control Relay Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206009.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Repair Instructions
Outgoing references: none

Content:
Control Relay Inspection
4-Pin Relay
Disconnect relay(s) to be checked.
Check that there is no continuity between terminals “3” and “4”.
If there is faulty condition, replace relay.
Measure resistance between terminals “1” and “2” of relay.
If check result is not as specified, replace relay.
Relay resistance
Between terminals “1” and “2”: Approx. 170 Ω at 20 °C (68 °F)
Connect battery positive (+) terminal and negative (–) terminal to relay as shown in figure, and check for continuity between terminals “3” and “4”.
If there is no continuity when relay is connected to the battery, replace relay.
[A]:
Main relay
[B]:
Other than main relay
5-Pin Relay
Disconnect relay(s) to be checked.
Check that there is no continuity between terminals “3” and “4”.
If there is faulty condition, replace relay.
Check that there is continuity between terminals “4” and “5”.
If there is faulty condition, replace relay.
Measure resistance between terminals “1” and “2” of relay.
If check result is not as specified, replace relay.
Relay resistance
Between terminals “1” and “2”: Approx. 110 Ω at 20 °C (68 °F)
Connect battery positive (+) terminal and negative (–) terminal to relay as shown in figure, and check for continuity between terminals “3” and “4”.
If there is no continuity when relay is connected to the battery, replace relay.
Connect battery positive (+) terminal and negative (–) terminal to relay as shown in figure, and check for no continuity between terminals “4” and “5”.
If there is continuity when relay is connected to the battery, replace relay.

---

## AENLSB0AA208001 - Special Tool
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA208001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10B - Body Electrical Control System > Special Tools and Equipment
Outgoing references: none

Content:
Special Tool
SUZUKI scan tool (Suzuki SDT-II)
—

---

## AENLSB0AA300001 - Precautions for Diagnosing Trouble
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA300001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Precautions
Outgoing references:
- AENLSB0AA200001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA200001.xml | Precautions for Diagnosing Trouble

Content:
Precautions for Diagnosing Trouble
Immobilizer control system is controlled by BCM and ECM. Before diagnosing troubles, refer to
Precautions for Diagnosing Trouble
.
Before using scan tool, read its Operator’s Manual to know how to use it.
Clear all DTCs after completing troubleshooting.

---

## AENLSB0AA301001 - Immobilizer Control System Introduction
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA301001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > General Description
Outgoing references: none

Content:
Immobilizer Control System Introduction
The engine can be started only when the remote controller ID code corresponds with the registered code in BCM.
The immobilizer control system on some models includes an ID controller.
When the engine switch is pushed to change ignition mode to “ON”, BCM and ECM executes verification with the ID controller at the same time as the above operation and judges whether to start up the engine or not. (In addition to the above operation, BCM also turns the immobilizer indicator light ON and OFF when some trouble is detected in the immobilizer control system including the ID controller.)
In the case that remote controller battery is flat, there is system trouble, and/or the keyless push start system has brought functioning to a stop, touching remote controller to engine switch enables changing of ignition mode to “ON” and “Engine Starting”.

---

## AENLSB0AA301002 - Description of Ignition Mode Switching Procedure
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA301002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > General Description
Outgoing references: none

Content:
Description of Ignition Mode Switching Procedure
Push the engine switch without depressing the brake pedal (A/T model) or clutch pedal (M/T model), and while information display indicates “PLACE KEY FOB ON START SWITCH” for about 10 seconds, place remote controller on the engine switch for about 2 seconds. Through this process, BCM checks remote controller ID code, and permits switching of ignition mode according to operational state of the engine switch only when the code corresponds with the registered code.

---

## AENLSB0AA301003 - Description of Engine Starting Procedure
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA301003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > General Description
Outgoing references: none

Content:
Description of Engine Starting Procedure
In the case that remote controller battery is flat, there is system trouble, and/or the keyless push start system is disabled, engine starting procedure is as follows.
When depressing brake pedal with shift position “P” or “N” (A/T model) or depressing clutch pedal (M/T model), BCM outputs an information display request signal (“PUSH START SWITCH”) through CAN communication.
Push engine switch.
BCM outputs an immobilizer indicator light signal and an information display request signal (“PLACE KEY FOB ON START SWITCH”) through CAN communication.
Place remote controller on the engine switch for about 2 seconds while information display indicates “PLACE KEY FOB ON START SWITCH”.
BCM reads transponder code of remote controller through immobilizer coil antenna equipped in engine switch.
The starting motor control relay turns ON and the starting motor starts, a steering lock release request is outputted to the steering lock unit through serial communication, and a message is sent to the ECM to permit engine starting only when transponder code corresponds with the registered code.
When the transponder code does not correspond with the registered code, BCM does not turn on the starting motor control relay to inhibit the starting motor operation.

---

## AENLSB0AA301004 - CAN Communication System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA301004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > General Description > Models > K14C
Outgoing references: none

Content:
CAN Communication System Description
ECM and BCM use CAN communication to communicate with other control modules. For more detail of CAN communication, refer to “Communication System Description” in Section 10H.
K14C model:

---

## AENLSB0AA302001 - Immobilizer Control System Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA302001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Schematic and Routing Diagram
Outgoing references:
- AENLSB0AA202002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA202002.xml | Body Electrical Control System Circuit Diagram

Content:
Immobilizer Control System Circuit Diagram
Refer to
Body Electrical Control System Circuit Diagram
.

---

## AENLSB0AA303001 - Immobilizer Control System Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA303001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Immobilizer Control System Component Location
The figure shows LHD. For RHD, parts with (*) are installed at the opposite side.
1.
Remote controller
6.
Combination meter
11.
Brake light switch
2.
ECM
7.
Immobilizer indicator light
12.
Steering lock unit
3.
Starting motor control relay
8.
Information display
13.
Engine switch
4.
ID controller (if equipped)
9.
BCM
5.
10.
CPP No.1 switch (M/T model)

---

## AENLSB0AA304001 - Immobilizer Control System Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures > Models > K14C
Outgoing references: none

Content:
Immobilizer Control System Check
Engine start check
Start engine.
Does engine start?
Immobilizer control system is in good condition.
Go to Step 2.
Communication check of SUZUKI scan tool
Connect SUZUKI scan tool to DLC.
Check that SUZUKI scan tool can communicate with vehicle.
Is check result OK?
Go to Step 3.
Perform “CAN Communication Check”.
K14C model:
DTC check
Check DTC.
Is there any DTC detected?
Go to troubleshooting for applicable DTC.
Go to “Engine Basic Inspection” in Section 1A.
K14C model:

---

## AENLSB0AA304002 - Immobilizer Control System Self-Diagnosis Function
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Immobilizer Control System Self-Diagnosis Function
ECM and BCM monitor each of the input and output signals of the immobilizer system, and they are equipped with a self-diagnosis function which displays DTC when an abnormal condition is detected.
Also, when an abnormal condition is detected, immobilizer indicator light blinks or lights up to warn the driver.
Conditions vary depending on the details of the abnormal condition, but the basic lighting patterns are as follows.
Lighting: Engine can be started
Blinking: Engine cannot be started

---

## AENLSB0AA304003 - DTC Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures > Models > K14C
Outgoing references:
- AENLSB0AA204003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204003.xml | DTC Check
- AENLSB0AB104004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104004.xml | DTC Check

Content:
DTC Check
ECM: Refer to “DTC Check” in Section 1A.
K14C model:
BCM: Refer to
DTC Check
.
DTC Check
.

---

## AENLSB0AA304004 - DTC Clearance
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures > Models > K14C
Outgoing references:
- AENLSB0AA204004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204004.xml | DTC Clearance
- AENLSB0AB104005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104005.xml | DTC Clearance

Content:
DTC Clearance
ECM: Refer to “DTC Clearance” in Section 1A.
K14C model:
BCM: Refer to
DTC Clearance
.
DTC Clearance
.

---

## AENLSB0AA304005 - DTC Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304005.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures > Models > K14C
Outgoing references: none

Content:
DTC Table
*1: Whether immobilizer indicator light comes on or not depends on the trouble condition.
ECM (K14C model)
DTC
DTC name
DTC detecting condition
Immobilizer indicator light
P1610
Immobilizer ID and/or Password Not Registered
Immobilizer ID code is not registered.
Blinking
P1611
Password Not Matched
Stored password is incorrect.
Off
P1622
EEPROM Reading / Writing Error
EEPROM in ECM is corrupted.
Blinking *1
P1642
Immobilizer Communication Line Error
Communication error with BCM.
Blinking
P1644
Immobilizer ID Mismatched
Verification error between ECM and BCM.
Blinking
P1645
ID Code Communication Error
Communication error with ID controller.
Blinking or lighting
P1646
ID Code Incorrectness
CAN communication error or verification error between ECM and ID controller.
Blinking or lighting
DTC
DTC name
DTC detecting condition
Immobilizer indicator light
B1320
ID (key code) immobilizer not registered
Immobilizer ID code is not registered.
Blinking
B1321
ECU Password mismatch
Stored password is incorrect.
Off
B1328
Immobilizer failed due to BCM communication error
Communication error with BCM.
Blinking
B1329
Immobilizer failed due to wrong response
Verification error between ECM and BCM.
Blinking
B132A
Immobilizer failed due to IDC communication error
Communication error with ID controller.
Blinking or lighting
B132B
Immobilizer failed due to wrong response
CAN communication error or verification error between ECM and ID controller.
Blinking or lighting
B132F
EEPROM read/write error
EEPROM in ECM is corrupted.
Blinking *1
BCM
DTC
DTC name
DTC detecting condition
Immobilizer indicator light
B1168
Password Mismatched
Wrong password is inputted.
Off
B1169
Registration Failure
Registration failure of ECM or remote controller.
Off
B1173
Transponder Unregistered
Transponder code in the transponder built in the remote controller is not registered.
Lighting
B1175
Immobilizer Information Unregistered
Immobilizer ID code is not registered in BCM.
Lighting
B1176
Specification Information Unregistered
Vehicle specification is not registered in BCM.
Lighting
B1189
Immobilizer Antenna Communication Error
Communication error with engine switch (incorporating immobilizer coil antenna).
Lighting
DTC
DTC name
DTC detecting condition
Immobilizer indicator light
B1340
ISG ID unregistered
Immobilizer ID code is not registered.
Lighting
B1341
ECU Password unregistered
Immobilizer password is not registered.
Lighting
B1342
ECU Password mismatch
Stored password is incorrect.
Off
B1348
IMMO Not- permission
Verification error between ECM and ISG.
Lighting
B134F
EEPROM Error
EEPROM in ISG is corrupted.
Lighting *1

---

## AENLSB0AA304006 - DTC P1610 / B1320
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304006.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Immobilizer Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA306003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA306003.xml | ECM / ISG Registration

Content:
DTC P1610 / B1320
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1610: Immobilizer ID and/or Password Not Registered
Immobilizer ID code is not registered.
Immobilizer ID code is not registered in ECM
ECM
CAN communication circuit / connector
Control module connected with CAN communication line
B1320: ID (key code) immobilizer not registered
Immobilizer ID code is not registered.
DTC Troubleshooting
DTC check
Check DTC in BCM.
Is DTC B1173, B1175 or B1176 detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
ECM registration
Perform
ECM / ISG Registration
.
Recheck DTC.
Is DTC P1610 or B1320 still detected?
Go to Step 3.
End. (ECM was not registered)
DTC check
Check DTC related to CAN communication.
Is there any CAN-DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 4.
CAN communication circuit check
Check CAN communication circuit referring to “Troubleshooting for Communication Bus Off” in Section 10H.
K14C model:
Is check result OK?
Replace ECM and recheck DTC. If DTC P1610 or B1320 is still detected, replace BCM and recheck DTC.
ECM
K14C model:
BCM:
Repair or replace defective wire harness.

---

## AENLSB0AA304007 - DTC P1611 / B1321
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304007.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Immobilizer Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA306003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA306003.xml | ECM / ISG Registration

Content:
DTC P1611 / B1321
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1611: Password Not Matched
Stored password is incorrect.
BCM or ECM which was used in another vehicle has been installed
ECM
BCM
B1321: ECU Password mismatch
Stored password is incorrect.
DTC Troubleshooting
ECM registration
Perform
ECM / ISG Registration
.
Recheck DTC.
Is DTC P1611 or B1321 still detected?
Replace ECM and recheck DTC. If DTC P1611 or B1321 is still detected, replace BCM and recheck DTC.
ECM
K14C model:
BCM:
End. (ECM was not registered)

---

## AENLSB0AA304008 - DTC P1622 / B132F
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304008.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Immobilizer Control System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P1622 / B132F
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1622: EEPROM Reading / Writing Error
EEPROM in ECM is corrupted.
ECM
B132F: EEPROM read/write error
EEPROM in ECM is corrupted.
DTC Troubleshooting
DTC check
Set ignition “OFF” and leave ignition “OFF” for 1 minute or more.
Set ignition “ON”.
Recheck DTC.
Is DTC P1622 or B132F still detected?
Replace ECM and recheck DTC.
K14C model:
End. (Intermittent trouble)

---

## AENLSB0AA304009 - DTC P1642 / B1328
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304009.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Immobilizer Control System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P1642 / B1328
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1642: Immobilizer Communication Line Error
Communication error with BCM.
CAN communication circuit / connector
Control module connected with CAN communication line
BCM power supply / ground circuit
Immobilizer ID code is not registered in BCM
Remote controller is not registered
ECM
BCM
B1328: Immobilizer failed due to BCM communication error
Communication error with BCM.
DTC Troubleshooting
BCM power supply / ground circuit check
Check BCM power supply and ground circuits.
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
DTC check
Set ignition “OFF” and leave ignition “OFF” for 5 seconds or more.
Set ignition “ON”.
Recheck DTC.
Is current DTC P1642 or B1328 detected?
Go to Step 3.
End. (Intermittent trouble)
DTC check
Check DTC related to CAN communication.
Is there any CAN-DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 4.
CAN communication circuit check
Check CAN communication circuit referring to “Troubleshooting for Communication Bus Off” in Section 10H.
K14C model:
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
DTC check
Check DTC in BCM.
Is DTC B1173, B1175 or B1176 detected?
Go to troubleshooting for applicable DTC.
Replace ECM and recheck DTC. If DTC P1642 or B1328 is still detected, replace BCM and recheck DTC.
ECM
K14C model:
BCM:

---

## AENLSB0AA304010 - DTC P1644 / B1329
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304010.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Immobilizer Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA304017 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304017.xml | DTC B1189
- AENLSB0AA306003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA306003.xml | ECM / ISG Registration

Content:
DTC P1644 / B1329
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1644: Immobilizer ID Mismatched
Verification error between ECM and BCM.
Remote controller
Engine switch circuit / connector
Engine switch
ECM
BCM
B1329: Immobilizer failed due to wrong response
Verification error between ECM and BCM.
DTC Troubleshooting
DTC check
Check DTC in BCM.
Is DTC B1173, B1175 or B1176 detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Set ignition “OFF” and leave ignition “OFF” for 5 seconds or more.
Set ignition “ON”.
Recheck DTC.
Is current DTC P1644 or B1329 detected?
Go to Step 3.
End. (Intermittent trouble)
DTC check
Check DTC in BCM.
Is DTC B1189 still detected?
Go to
DTC B1189
.
Go to Step 4.
DTC recheck
Check remote controller is in keyless engine start function operation area.
Set ignition “OFF” and leave ignition “OFF” for 5 seconds or more.
Set ignition “ON”.
Recheck DTC.
Is DTC P1644 or B1329 still detected?
Go to Step 5.
End. (A possibility of taking out remote controller to outside of the operation area)
ECM registration
Perform
ECM / ISG Registration
.
Set ignition “OFF” and leave ignition “OFF” for 5 seconds or more.
Set ignition “ON”.
Recheck DTC.
Is DTC P1644 or B1329 still detected?
Go to Step 6.
End. (ECM was not registered)
Remote controller registration
Perform “Immobilizer Key Registration”.
Set ignition “OFF” and leave ignition “OFF” for 5 seconds or more.
Set ignition “ON”.
Recheck DTC.
Is DTC P1644 or B1329 still detected?
Replace ECM and recheck DTC. If DTC P1644 or B1329 is still detected, replace BCM and recheck DTC.
ECM
K14C model:
BCM:
End. (Remote controller was not registered)

---

## AENLSB0AA304011 - DTC P1645 / P1646 / B132A / B132B
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304011.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Immobilizer Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA306003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA306003.xml | ECM / ISG Registration

Content:
DTC P1645 / P1646 / B132A / B132B
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1645: ID Code Communication Error
Communication error with ID controller.
CAN communication circuit
ID controller and/or its circuit
ECM
BCM
P1646: ID Code Incorrectness
CAN communication error or verification error between ECM and ID controller.
B132A: Immobilizer failed due to IDC communication error
Communication error with ID controller.
B132B: Immobilizer failed due to wrong response
CAN communication error or verification error between ECM and ID controller.
DTC Troubleshooting
DTC check
Set ignition “OFF” and leave ignition “OFF” for 5 seconds or more.
Set ignition “ON”.
Recheck DTC.
Is current DTC P1645, P1646, B132A or B132B detected?
Go to Step 2.
End. (Intermittent trouble)
DTC check
Check DTC related to CAN communication.
Is there any CAN-DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
ID controller power supply and ground circuit check
Check power supply and ground circuits of ID controller for open circuit, short circuit and high resistance.
Is check result OK?
Go to Step 4.
Repair or replace defective parts.
CAN communication circuit check
Check CAN communication circuit referring to “Troubleshooting for Communication Bus Off” in Section 10H.
K14C model:
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
ECM registration
Perform
ECM / ISG Registration
.
Set ignition “OFF”.
Set ignition “ON”.
Recheck DTC.
Is DTC P1645, P1646, B132A or B132B still detected?
Replace ECM and recheck DTC. If DTC P1645, P1646, B132A or B132B is still detected, replace BCM and recheck DTC.
ECM
K14C model:
BCM:
End. (ECM was not registered)

---

## AENLSB0AA304012 - DTC B1168
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304012.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Immobilizer Control System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1168
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1168: Password Mismatched
Wrong password is inputted.
Wrong password is inputted
DTC Troubleshooting
Wait for 10 seconds or more when immobilizer password is inputted again.
Immobilizer password input
Input immobilizer password again.
Set ignition “OFF” and leave ignition “OFF” for 10 seconds or more.
Set ignition “ON”.
Recheck DTC.
Is DTC B1168 still detected?
Recheck immobilizer password.
End. (Wrong password is inputted)

---

## AENLSB0AA304013 - DTC B1169
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304013.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures > Models > K14C || dtc: 10 - Control Systems > Immobilizer Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA306003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA306003.xml | ECM / ISG Registration

Content:
DTC B1169
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1169: Registration Failure
Registration failure of ECM or remote controller.
ECM
BCM
ID controller (if equipped)
DTC Troubleshooting
DTC check
Is there any DTC(s) other than B1169 detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
ECM registration
Perform
ECM / ISG Registration
.
Set ignition “OFF” and leave ignition “OFF” for 5 seconds or more.
Set ignition “ON”.
Recheck DTC.
Is DTC B1169 still detected?
Replace ECM and recheck DTC.
K14C model:
Without ID controller: Replace BCM and recheck DTC.
With ID controller: Go to Step 3.
Remote controller registration
Replace ID controller.
Perform “Immobilizer Key Registration”.
Set ignition “OFF”.
Set ignition “ON”.
Recheck DTC.
Is DTC B1169 still detected?
Replace BCM and recheck DTC.
End. (ID controller was faulty)

---

## AENLSB0AA304014 - DTC B1173
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304014.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Immobilizer Control System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1173
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1173: Transponder Unregistered
Transponder code in the transponder built in the remote controller is not registered.
Remote controller is not registered
CAN communication circuit / connector
Remote controller
BCM
DTC Troubleshooting
An inability to register the immobilizer normally may be caused by remote controller malfunction.
DTC check
Is there any DTC(s) other than B1173 detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Check DTC related to CAN communication.
Is there any CAN-DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Remote controller registration
Perform “Immobilizer Key Registration”.
Set ignition “OFF” and leave ignition “OFF” for 5 seconds or more.
Set ignition “ON”.
Recheck DTC.
Is DTC B1173 still detected?
Go to Step 4.
End. (Remote controller was not registered)
Remote controller registration
Replace remote controller.
Perform “Immobilizer Key Registration”.
Set ignition “OFF” and leave ignition “OFF” for 5 seconds or more.
Set ignition “ON”.
Recheck DTC.
Is DTC B1173 still detected?
Replace BCM and recheck DTC.
End. (Remote controller was faulty)

---

## AENLSB0AA304015 - DTC B1175
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304015.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Immobilizer Control System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1175
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1175: Immobilizer Information Unregistered
Immobilizer ID code is not registered in BCM.
CAN communication circuit / connector
ECM
BCM
DTC Troubleshooting
If immobilizer registration is not performed normally, check whether or not ECM suits the specification or CAN communication DTC is not shown.
DTC check
Is there any DTC(s) other than B1175 detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Check DTC related to CAN communication.
Is there any CAN-DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Remote controller registration
Perform “Immobilizer Key Registration”.
Set ignition “OFF” and leave ignition “OFF” for 5 seconds or more.
Set ignition “ON”.
Recheck DTC.
Is DTC B1175 still detected?
Replace BCM and recheck DTC.
End. (Remote controller was not registered)

---

## AENLSB0AA304016 - DTC B1176
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304016.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Immobilizer Control System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1176
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1176: Specification Information Unregistered
Vehicle specification is not registered in BCM.
Remote controller is not registered
CAN communication circuit / connector
BCM
DTC Troubleshooting
If immobilizer registration is not performed normally, check whether the specification information was loaded incorrectly.
DTC check
Is there any DTC(s) other than B1176 detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Check DTC related to CAN communication.
Is there any CAN-DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Remote controller registration
Perform “Immobilizer Key Registration”.
Set ignition “OFF” and leave ignition “OFF” for 5 seconds or more.
Set ignition “ON”.
Recheck DTC.
Is DTC B1176 still detected?
Replace BCM and recheck DTC.
End. (Remote controller was not registered)

---

## AENLSB0AA304017 - DTC B1189
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304017.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Immobilizer Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA304017003 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1189
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1189: Immobilizer Antenna Communication Error
Communication error with engine switch (incorporating immobilizer coil antenna).
Engine switch circuit / connector
Engine switch
BCM
Circuit Diagram
[A]:
BCM connector (View: [a])
A2:
Engine switch signal circuit 2
2.
BCM
[B]:
Engine switch connector (View: [a])
B1:
Engine switch ground circuit
A1:
Engine switch signal circuit 1
1.
Engine switch (including immobilizer coil antenna)
DTC Confirmation Procedure
Remove remote controller battery.
Touch remote controller to engine switch and set ignition “ON”.
DTC Troubleshooting
Engine switch signal circuit check
Disconnect negative (–) cable at battery.
Disconnect “G140”, “G04” and “G06” connectors.
Check for proper terminal connection to “G140”, “G04” and “G06” connectors.
If connections are OK, check the following points.
Resistance of “A1” and “A2” circuits: less than 1 Ω
Resistance between each of “A1” and “A2” circuits and ground: infinity
Resistance between each of “A1” and “A2” circuits and battery positive (+) cable: infinity
Resistance between “A1” circuit and each fuse in individual circuit fuse box No.2: infinity
Resistance between “A2” circuit and each fuse in individual circuit fuse box No.2: infinity
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
Engine switch ground circuit check
Check that resistance between “B1” circuit and ground is less than 1 Ω.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
DTC check
Replace engine switch.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1189 still detected?
Replace BCM and recheck DTC.
End. (Engine switch was faulty)

---

## AENLSB0AA304018 - Inspection of ID Controller and Its Circuits (If Equipped)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304018.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA304018004 -> unresolved | CAN communication signal

Content:
Inspection of ID Controller and Its Circuits (If Equipped)
Voltage and Signal Check
Check voltage and/or pulse signal of ID controller using voltmeter and oscilloscope.
Check that battery voltage is 12 V or more.
The voltage of terminal with asterisk (*) cannot be measured by voltmeter because it is pulse signal.
Check it with oscilloscope if necessary.
[A]:
ID controller connector (View: [a])
“E481” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
E481-1
BLK
Ground
Below 0.3 V
Ignition: “ON”
E481-2*
WHT
CAN communication (low)
Refer to
CAN communication signal
.
E481-3*
RED
CAN communication (high)
E481-4*
RED
CAN communication (high)
E481-5*
WHT
CAN communication (low)
E481-6
—
—
—
—
E481-7
—
—
—
—
E481-8
WHT
Power source
10 – 14 V
Ignition: “ON”
Approx. 0 V
Other than above condition
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
E481-3
E481-4
–
E481-1
CAN communication signal (low) (2):
Channel
Probe
Terminal No.
2
+
E481-2
E481-5
–
E481-1
Measurement condition
Ignition: “ON”

---

## AENLSB0AA304019 - DTC B1340 / B1341
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304019.xml
Tree scopes: dtc: 10 - Control Systems > Immobilizer Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA306003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA306003.xml | ECM / ISG Registration

Content:
DTC B1340 / B1341
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1340: ISG ID unregistered
Immobilizer ID code is not registered.
Immobilizer ID code is not registered in ISG
ISG
CAN communication circuit / connector
B1341: ECU Password unregistered
Immobilizer password is not registered.
Immobilizer password is not registered in ISG
ISG
CAN communication circuit / connector
DTC Troubleshooting
DTC check
Check DTC in ECM.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Check DTC in BCM.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
ISG registration
Perform
ECM / ISG Registration
.
Recheck DTC.
Is DTC B1340 or B1341 still detected?
Go to Step 4.
End. (ISG was not registered)
DTC check
Check DTC related to CAN communication.
Is there any CAN-DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 5.
CAN communication circuit check
Check CAN communication circuit referring to
.
Is check result OK?
Replace ISG and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0AA304020 - DTC B1342
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304020.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Immobilizer Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA306003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA306003.xml | ECM / ISG Registration

Content:
DTC B1342
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1342: ECU Password mismatch
Stored password is incorrect.
ISG
ECM
DTC Troubleshooting
DTC check
Check DTC in ECM.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Check DTC in BCM.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
ISG registration
Perform
ECM / ISG Registration
.
Recheck DTC.
Is DTC B1342 still detected?
Replace ISG and recheck DTC. If DTC B1342 is still detected, replace ECM and recheck DTC.
ISG:
ECM:
End.

---

## AENLSB0AA304021 - DTC B1348
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304021.xml
Tree scopes: dtc: 10 - Control Systems > Immobilizer Control System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA306003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA306003.xml | ECM / ISG Registration

Content:
DTC B1348
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1348: IMMO Not- permission
Verification error between ECM and ISG.
CAN communication circuit / connector
ISG
Immobilizer ID code is not registered in ECM
ECM
BCM
DTC Troubleshooting
DTC check
Check DTC in ECM.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Check DTC in BCM.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
DTC check
Set ignition “OFF” and leave ignition “OFF” for 5 seconds or more.
Set ignition “ON”.
Recheck DTC.
Is current DTC B1348 detected?
Go to Step 4.
End. (Intermittent trouble)
DTC check
Check DTC related to CAN communication.
Is there any CAN-DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 5.
CAN communication circuit check
Check CAN communication circuit referring to
.
Is check result OK?
Go to Step 6.
Repair or replace defective wire harness.
ISG registration
Perform
ECM / ISG Registration
.
Recheck DTC.
Is DTC B1348 still detected?
Replace ECM and recheck DTC. If DTC B1348 is still detected, replace ISG and recheck DTC.
ECM:
ISG:
End.

---

## AENLSB0AA304022 - DTC B134F
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304022.xml
Tree scopes: bookmarks: 10 - Control Systems > 10C - Immobilizer Control System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Immobilizer Control System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B134F
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B134F: EEPROM Error
EEPROM in ISG is corrupted.
ISG
DTC Troubleshooting
DTC check
Set ignition “OFF” and leave ignition “OFF” for 5 seconds or more.
Set ignition “ON”.
Recheck DTC.
Is DTC B134F still detected?
Replace ISG and recheck DTC.
End. (Intermittent trouble)

---
