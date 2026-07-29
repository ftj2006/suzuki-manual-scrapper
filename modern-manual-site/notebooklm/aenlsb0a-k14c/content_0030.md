# Content Chunk 0030

Plain-text content extracted from source files with relationship metadata.

## AENLSB0AA504024 - DTC B116A
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504024.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B116A
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B116A: Abnormal Vehicle Speed Pulses From ABS / ESP ® Control Module
Vehicle speed signal is not inputted from ESP ® control module.
Vehicle speed signal circuit
ESP ® control module
BCM
Circuit Diagram
[A]:
ESP ® control module connector (View: [a])
A1:
Vehicle speed input signal circuit
2.
BCM
[B]:
BCM connector (View: [b])
1.
ESP ® control module
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Drive vehicle at 10 km/h (6 mile/h) or more for 1 minute.
DTC Troubleshooting
This DTC might be detected when battery is run down or the voltage is very low.
DTC check
Check DTC in ESP ® control module.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
Vehicle speed input signal circuit check
Disconnect negative (–) cable at battery.
Disconnect “E09” and “E05” connectors.
Check for proper terminal connection to “E09” and “E05” connectors.
If connections are OK, check the following points.
Resistance of “A1” circuit: less than 1 Ω
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and each terminal at “E05” connector: infinity
Resistance between “A1” circuit and battery positive (+) cable: infinity
Resistance between “A1” circuit and each fuse in individual circuit fuse box No.2: infinity
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
BCM check
Connect “E05” connector.
Connect negative (–) cable at battery.
Set ignition “ON”.
Check that voltage between “A1” circuit and ground is approx. 12 V.
Is check result OK?
Replace ESP ® control module and recheck DTC.
Replace BCM and recheck DTC.

---

## AENLSB0AA504025 - DTC B1180 / B1181 / B1182
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504025.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA504025003 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1180 / B1181 / B1182
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1180: Driver Side Door Request Switch Malfunction
Driver door request switch signal voltage is lower than specified value for specified time.
Each request switch circuit / connector
Each request switch
BCM
B1181: Passenger Side Door Request Switch Malfunction
Passenger door request switch signal voltage is lower than specified value for specified time.
B1182: Rear End Door / Trunk Lid Request Switch Malfunction
Rearend door request switch signal voltage is lower than specified value for specified time.
Circuit Diagram
[A]:
BCM connector (View: [a])
A3:
Rearend door request switch signal circuit
3.
Rearend door request switch
A1:
Driver door request switch signal circuit
1.
Driver door request switch
4.
BCM
A2:
Passenger door request switch signal circuit
2.
Passenger door request switch
DTC Confirmation Procedure
Set ignition “ON”.
Push request switch related to DTC.
Release request switch.
Keep ignition “ON” for 10 minutes or more.
DTC Troubleshooting
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check “Driver Request SW”, “Passenger Request SW” or “Tailgate Request Switch” displayed on SUZUKI scan tool.
Is check result OK?
End. (Intermittent trouble.)
Go to Step 2.
Request switch signal circuit check
Disconnect negative (–) cable at battery.
Disconnect request switch, “G06” and “L01” connectors.
Check for proper terminal connection to request switch, “G06” and “L01” connectors.
If connections are OK, check that resistance between each of “A1”, “A2” and “A3” circuits and ground is infinity.
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Request switch check
Check request switch.
Is check result OK?
Go to Step 4.
Replace request switch.
Driver / Passenger door request switch:
Rearend door request switch:
DTC check
Connect request switch, “G06” and “L01” connectors.
Connect negative (–) cable at battery.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is current DTC B1180, B1181 or B1182 detected?
Replace BCM and recheck DTC.
End. (Intermittent trouble.)

---

## AENLSB0AA504026 - DTC B1186
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504026.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA504026002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1186
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1186: Antenna Circuit Internal Defect
BCM internal failure.
BCM
DTC Confirmation Procedure
Set ignition “OFF”.
Close all doors.
Open a door for more than 4 sec.
DTC Troubleshooting
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1186 still detected?
Replace BCM and recheck DTC.
End. (Intermittent trouble.)

---

## AENLSB0AA504027 - DTC B1190
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504027.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA504027003 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1190
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1190: Engine Switch Malfunction
Push switch 1 signal voltage and/or push switch 2 signal voltage is not as specified for longer than specified time.
Engine switch circuit / connector
Engine switch
BCM
Circuit Diagram
[A]:
BCM connector (View: [a])
B1:
Push switch ground circuit
3.
Push switch 2
A1:
Push switch 1 signal circuit
1.
Engine switch
4.
BCM
A2:
Push switch 2 signal circuit
2.
Push switch 1
DTC Confirmation Procedure
Check that ignition is “OFF”.
Set ignition “ON”.
Repeat Step 1) – 2) several times.
DTC Troubleshooting
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check “Engine switch 1” and “Engine switch 2” displayed on SUZUKI scan tool.
Is check result OK?
End. (Intermittent trouble.)
Go to Step 2.
Push switch signal circuit and push switch ground circuit check
Disconnect negative (–) cable at battery.
Disconnect engine switch, “G04” and “G05” connectors.
Check for proper terminal connection to engine switch, “G04” and “G05” connectors.
If connections are OK, check the following points.
Resistance of “A1”, “A2” and “B1” circuits: less than 1 Ω
Resistance between each of “A1” and “A2” circuits and ground: infinity
Resistance between each of “A1”, “A2” and “B1” circuit terminals and each terminal at engine switch connector: infinity
Resistance between each of “A1”, “A2” and “B1” circuits and battery positive (+) cable: infinity
Resistance between each of “A1”, “A2” and “B1” circuits and each fuse in individual circuit fuse box No.2: infinity
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Engine switch check
Check engine switch.
Is check result OK?
Go to Step 4.
Replace engine switch.
DTC check
Connect engine switch, “G04” and “G05” connectors.
Connect negative (–) cable at battery.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is current DTC B1190 detected?
Replace BCM and recheck DTC.
End. (Intermittent trouble.)

---

## AENLSB0AA504028 - DTC B1191
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504028.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1191
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1191: Accessory Relay Malfunction
Inconsistency between input voltage via “ACC” fuse and ACC relay control condition continues for longer than specified time.
J/B circuit / connector
J/B
“IGN” fuse
“ACC” fuse
BCM
Circuit Diagram
[A]:
J/B connector (View: [a])
E1:
IG21 power supply circuit
: Terminal connection depends on vehicle specifications.
8.
“WASH” fuse
[B]:
J/B fuse (View: [b], [c]: upward)
F1:
Ground circuit for relay
9.
“BACK” fuse
[C]:
J/B
1.
IG11 relay
10.
“IG1 SIG” fuse
[D]:
BCM
2.
IG21 relay
11.
Relay box
A1:
Relay power supply circuit 1
3.
IG22 relay
12.
“IGN2” fuse
A2:
Relay power supply circuit 2
4.
IG23 relay
13.
“IGN” fuse
B1:
ACC power supply circuit
: Terminal connection depends on vehicle specifications.
5.
ACC relay
14.
To IG22 power supply circuit
C1:
IG11 power supply circuit 1
: Terminal connection depends on vehicle specifications.
6.
ACC, IG1 and IG2 relay drive circuit
15.
To IG23 power supply circuit
D1:
IG11 power supply circuit 2
: Terminal connection depends on vehicle specifications.
7.
“ACC” fuse
DTC Confirmation Procedure
Check that ignition is “OFF”.
Set ignition “ACC”.
Set ignition “ON”.
Repeat Step 1) – 3) several times.
DTC Troubleshooting
This DTC might be detected when battery is run down or the voltage is very low.
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check “Accessory Relay” and “ACC Switch” displayed on SUZUKI scan tool.
Is check result OK?
End. (Intermittent trouble.)
Go to Step 2.
Relay power supply circuit check
Check that voltage between “A1” circuit terminal and “F1” circuit terminal at J/B connector is battery voltage.
Is check result OK?
Go to Step 4.
Go to Step 3.
Relay power supply circuit check
Check that voltage between “A1” circuit terminal at J/B connector and ground is battery voltage.
Is check result OK?
Repair or replace “F1” circuit.
Repair or replace “A1” circuit and “IGN” fuse.
Fuse check
Check “ACC” fuse.
Is check result OK?
Go to Step 5.
Repair or replace “B1” circuit, and then replace “ACC” fuse.
ACC relay check
Set ignition “ACC” or “ON”.
Check that voltage between terminal “1” of “ACC” fuse and ground is battery voltage.
Is check result OK?
Replace BCM and recheck DTC.
Replace J/B and recheck DTC.

---

## AENLSB0AA504029 - DTC B1192
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504029.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1192
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1192: Ignition 1 Relay Malfunction
Inconsistency between input voltage via “IG1 SIG” fuse and IG1 relay control condition continues for longer than specified time.
J/B circuit / connector
J/B
“IGN” fuse
“IG1 SIG” fuse
BCM
Circuit Diagram
[A]:
J/B connector (View: [a])
E1:
IG21 power supply circuit
: Terminal connection depends on vehicle specifications.
8.
“WASH” fuse
[B]:
J/B fuse (View: [b], [c]: upward)
F1:
Ground circuit for relay
9.
“BACK” fuse
[C]:
J/B
1.
IG11 relay
10.
“IG1 SIG” fuse
[D]:
BCM
2.
IG21 relay
11.
Relay box
A1:
Relay power supply circuit 1
3.
IG22 relay
12.
“IGN2” fuse
A2:
Relay power supply circuit 2
4.
IG23 relay
13.
“IGN” fuse
B1:
ACC power supply circuit
: Terminal connection depends on vehicle specifications.
5.
ACC relay
14.
To IG22 power supply circuit
C1:
IG11 power supply circuit 1
: Terminal connection depends on vehicle specifications.
6.
ACC, IG1 and IG2 relay drive circuit
15.
To IG23 power supply circuit
D1:
IG11 power supply circuit 2
: Terminal connection depends on vehicle specifications.
7.
“ACC” fuse
DTC Confirmation Procedure
Check that ignition is “OFF”.
Set ignition “ACC”.
Set ignition “ON”.
Repeat Step 1) – 3) several times.
DTC Troubleshooting
This DTC might be detected when battery is run down or the voltage is very low.
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check “Ignition 1 Relay” displayed on SUZUKI scan tool.
Is check result OK?
End. (Intermittent trouble.)
Go to Step 2.
Relay power supply circuit check
Check that voltage between “A1” circuit terminal and “F1” circuit terminal at J/B connector is battery voltage.
Is check result OK?
Go to Step 4.
Go to Step 3.
Relay power supply circuit check
Check that voltage between “A1” circuit terminal at J/B connector and ground is battery voltage.
Is check result OK?
Repair or replace “F1” circuit.
Repair or replace “A1” circuit and “IGN” fuse.
Fuse check
Check “IG1 SIG” fuse.
Is check result OK?
Go to Step 5.
Repair or replace “C1” circuit, and then replace “IG1 SIG” fuse.
IG11 relay check
Set ignition “ON”.
Check the following points.
Voltage between terminal “1” of “IG1 SIG” fuse and ground: battery voltage
Voltage between terminal “1” of “BACK” fuse and ground: battery voltage
Is check result OK?
Replace BCM and recheck DTC.
Replace J/B and recheck DTC.

---

## AENLSB0AA504030 - DTC B1193
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504030.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1193
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1193: Ignition 2 Relay Malfunction
Inconsistency between input voltage via “WASH” fuse and IG2 relay control condition continues for longer than specified time.
J/B circuit / connector
J/B
“IGN2” fuse
“WASH” fuse
BCM
Circuit Diagram
[A]:
J/B connector (View: [a])
E1:
IG21 power supply circuit
: Terminal connection depends on vehicle specifications.
8.
“WASH” fuse
[B]:
J/B fuse (View: [b], [c]: upward)
F1:
Ground circuit for relay
9.
“BACK” fuse
[C]:
J/B
1.
IG11 relay
10.
“IG1 SIG” fuse
[D]:
BCM
2.
IG21 relay
11.
Relay box
A1:
Relay power supply circuit 1
3.
IG22 relay
12.
“IGN2” fuse
A2:
Relay power supply circuit 2
4.
IG23 relay
13.
“IGN” fuse
B1:
ACC power supply circuit
: Terminal connection depends on vehicle specifications.
5.
ACC relay
14.
To IG22 power supply circuit
C1:
IG11 power supply circuit 1
: Terminal connection depends on vehicle specifications.
6.
ACC, IG1 and IG2 relay drive circuit
15.
To IG23 power supply circuit
D1:
IG11 power supply circuit 2
: Terminal connection depends on vehicle specifications.
7.
“ACC” fuse
DTC Confirmation Procedure
Check that ignition is “OFF”.
Set ignition “ACC”.
Set ignition “ON”.
Repeat Step 1) – 3) several times.
DTC Troubleshooting
This DTC might be detected when battery is run down or the voltage is very low.
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check “Ignition 2 Relay” displayed on SUZUKI scan tool.
Is check result OK?
End. (Intermittent trouble.)
Go to Step 2.
Relay power supply circuit check
Check that voltage between “A2” circuit terminal and “F1” circuit terminal at J/B connector is battery voltage.
Is check result OK?
Go to Step 4.
Go to Step 3.
Relay power supply circuit check
Check that voltage between “A2” circuit terminal at J/B connector and ground is battery voltage.
Is check result OK?
Repair or replace “F1” circuit.
Repair or replace “A2” circuit and “IGN2” fuse.
Fuse check
Check “WASH” fuse.
Is check result OK?
Go to Step 5.
Repair or replace “E1” circuit, and then replace “WASH” fuse.
IG21 relay check
Set ignition “ON”.
Check that voltage between terminal “1” of “WASH” fuse and ground is battery voltage.
Is check result OK?
Replace BCM and recheck DTC.
Replace J/B and recheck DTC.

---

## AENLSB0AA504031 - DTC B1194
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504031.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA504031003 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1194
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1194: Starting Motor Relay Malfunction
Inconsistency between starting motor control relay monitor input voltage and starting motor control relay ON condition for longer than specified time is detected 3 times.
Starting motor control relay circuit / connector
Starting motor control relay
“ST” fuse
“ST SIG2” fuse
BCM
Circuit Diagram
[A]:
M/T model
1.
BCM
5.
“ST” fuse
[B]:
A/T model
2.
CPP No.1 switch
6.
“ST SIG2” fuse
[C]:
BCM connector (View: [a])
3.
TCM
7.
To starting motor
A1:
Starting motor control relay signal circuit
4.
Starting motor control relay
8.
To ECM
DTC Confirmation Procedure
Start engine.
Stop engine.
Repeat Step 1) – 2) 2 times. (3 times in total.)
DTC Troubleshooting
This DTC might be detected when battery is run down or the voltage is very low.
DTC B1194 cannot be cleared by repair of defective part. After completion of repair, operate starting motor once to clear the DTC.
DTC check
Is DTC B1125 detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON”.
Check “Starting Motor Relay” and “Starting Motor Relay (Mon)” displayed on SUZUKI scan tool.
Is check result OK?
End. (Intermittent trouble.)
Go to Step 3.
Fuse check
Check “ST” and “ST SIG2” fuses.
Is check result OK?
Go to Step 4.
Replace “ST” and/or “ST SIG2” fuse.
Starting motor control relay check
Check starting motor control relay.
Is check result OK?
Go to Step 5.
Replace starting motor control relay.
Starting motor control relay signal circuit check
Disconnect negative (–) cable at battery.
Remove starting motor control relay.
Disconnect ECM, “E05” and starting motor connectors.
Check for proper terminal connection to ECM, “E05”, starting motor and starting motor control relay connectors.
If connections are OK, check the following points.
Resistance of “A1” circuit: less than 1 Ω
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and each terminal at “E05” connector: infinity
Resistance between “A1” circuit and battery positive (+) cable: infinity
Resistance between “A1” circuit and each fuse in individual circuit fuse box No.2: infinity
Is check result OK?
Go to Step 6.
Repair or replace defective wire harness.
DTC check
Connect ECM, “E05” and starting motor connectors.
Install starting motor control relay.
Connect negative (–) cable at battery.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is current DTC B1194 detected?
Replace BCM and recheck DTC.
End. (Intermittent trouble.)

---

## AENLSB0AA504032 - Inspection of BCM and Its Circuits
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA504032.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA204029 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204029.xml | Inspection of BCM and Its Circuits

Content:
Inspection of BCM and Its Circuits
Refer to
Inspection of BCM and Its Circuits
.

---

## AENLSB0AA506001 - Remote Controller Registration
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Repair Instructions
Outgoing references:
- AENLSB0AA206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206001.xml | Remote Controller Registration

Content:
Remote Controller Registration
Refer to
Remote Controller Registration
.

---

## AENLSB0AA506002 - Switching Procedure for Disabling / Enabling Keyless Start System
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Repair Instructions
Outgoing references: none

Content:
Switching Procedure for Disabling / Enabling Keyless Start System
Select “Keyless Start System” in “Configuration” under “Utility” mode in “BCM” on SUZUKI scan tool.
When the keyless start system function is disabled, the following functions are inactive.
Keyless engine start function
Door lock function with door request switches
Remote controller lock-in vehicle prevention function
When the keyless start system function is disabled, touching remote controller to engine switch can start engine and change ignition mode.

---

## AENLSB0AA506003 - Driver Side / Passenger Side Outside Antenna and Door Request Switch Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Repair Instructions
Outgoing references:
- AENLSB0AA506008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506008.xml | Request Switch Inspection
- AENLSB0AA506009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506009.xml | Antenna Inspection
- AENLSB0A9606001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9606001.xml | Front Door Lock Components

Content:
Driver Side / Passenger Side Outside Antenna and Door Request Switch Removal and Installation
Request Switch Inspection
Antenna Inspection
Driver side and/or passenger side outside antenna and request switch cannot be removed from outside door handle.
Remove and install antenna and request switch referring to
Front Door Lock Components
.

---

## AENLSB0AA506004 - Rearend Door Opener and Request Switch Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Repair Instructions
Outgoing references:
- AENLSB0AA506008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506008.xml | Request Switch Inspection

Content:
Rearend Door Opener and Request Switch Removal and Installation
Removal
Disconnect negative (–) cable at battery.
Remove rearend door trim.
Disconnect rearend door opener and request switch connector (1) and clamps (2).
Remove rearend door opener and request switch holder (1).
Remove screws, and then remove rearend door opener and request switch (1).
Installation
Request Switch Inspection
Reverse removal procedure.

---

## AENLSB0AA506005 - Rear Outside Antenna Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506005.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Repair Instructions
Outgoing references:
- AENLSB0AA506009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506009.xml | Antenna Inspection

Content:
Rear Outside Antenna Removal and Installation
Removal
Disconnect negative (–) cable at battery.
Remove rear bumper.
Disconnect connector (1), and then remove rear outside antenna (2).
Installation
Antenna Inspection
Reverse removal procedure.

---

## AENLSB0AA506006 - Mid Inside Antenna Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506006.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Repair Instructions
Outgoing references:
- AENLSB0AA506009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506009.xml | Antenna Inspection

Content:
Mid Inside Antenna Removal and Installation
Removal
Disconnect negative (–) cable at battery.
Remove floor console box.
Disconnect connector (1), and then remove mid inside antenna (2).
Installation
Antenna Inspection
Reverse removal procedure.

---

## AENLSB0AA506007 - Rear Inside Antenna Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506007.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Repair Instructions
Outgoing references:
- AENLSB0AA506009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506009.xml | Antenna Inspection

Content:
Rear Inside Antenna Removal and Installation
Removal
Disconnect negative (–) cable at battery.
Remove tail end trim.
Disconnect clamp (1), and then remove rear inside antenna (2).
Installation
Antenna Inspection
Reverse removal procedure.

---

## AENLSB0AA506008 - Request Switch Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506008.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Repair Instructions
Outgoing references: none

Content:
Request Switch Inspection
Remove door trim.
Front door:
Rearend door:
Disconnect request switch connector (1).
Check request switch for continuity between terminals at each switch position.
If check result is not as specified, replace request switch.
[A]:
Front door
[D]:
PUSH
[B]:
Rearend door
[E]:
Switch position
[C]:
FREE
[F]:
Terminal

---

## AENLSB0AA506009 - Antenna Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506009.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Repair Instructions
Outgoing references: none

Content:
Antenna Inspection
Referring to the following table, check the function by exchanging each antenna.
Trouble antenna
Exchanging antenna
Driver side outside antenna
Passenger side outside antenna
Passenger side outside antenna
Driver side outside antenna
Rear outside antenna
Mid inside antenna
Mid inside antenna
Rear outside antenna
Rear inside antenna
—
If check result is not as specified, check applicable circuit for open or short.

---

## AENLSB0AA506010 - Driver / Passenger Door Lock Switch Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506010.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Repair Instructions
Outgoing references:
- AENLSB0AA506011 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506011.xml | Driver / Passenger Door Lock Switch Inspection
- AENLSB0A9606002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9606002.xml | Front Door Lock Assembly Removal and Installation

Content:
Driver / Passenger Door Lock Switch Removal and Installation
Driver / Passenger Door Lock Switch Inspection
Refer to
Front Door Lock Assembly Removal and Installation
.

---

## AENLSB0AA506011 - Driver / Passenger Door Lock Switch Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506011.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Repair Instructions
Outgoing references:
- AENLSB0AA506010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506010.xml | Driver / Passenger Door Lock Switch Removal and Installation
- AENLSB0A9606007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9606007.xml | Door Lock Switch and Actuator On-Vehicle Inspection

Content:
Driver / Passenger Door Lock Switch Inspection
Driver / Passenger Door Lock Switch Removal and Installation
Refer to
Door Lock Switch and Actuator On-Vehicle Inspection
.

---

## AENLSB0AA506012 - Engine Switch Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506012.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Repair Instructions
Outgoing references:
- AENLSB0AA506013 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506013.xml | Engine Switch Inspection

Content:
Engine Switch Removal and Installation
Removal
Disconnect negative (–) cable at battery.
For LHD, remove instrument panel driver inside garnish.
For RHD, remove instrument panel driver outside garnish.
Remove engine switch (1) from the garnish.
Installation
Engine Switch Inspection
Reverse removal procedure.

---

## AENLSB0AA506013 - Engine Switch Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506013.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Repair Instructions
Outgoing references:
- AENLSB0AA506012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506012.xml | Engine Switch Removal and Installation

Content:
Engine Switch Inspection
Engine Switch Removal and Installation
Check engine switch (1) for continuity between terminals at each switch position.
If check result is not as specified, replace engine switch.
[A]:
Switch position
[D]:
FREE
[B]:
Terminal
2.
Push switch 1
[C]:
PUSH
3.
Push switch 2

---

## AENLSB0AA506014 - Outside Warning Buzzer Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506014.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Repair Instructions
Outgoing references:
- AENLSB0AA506015 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506015.xml | Outside Warning Buzzer Inspection

Content:
Outside Warning Buzzer Removal and Installation
Removal
Disconnect negative (–) cable at battery.
Remove left side front fender lining.
Disconnect connector, and then remove outside warning buzzer (1).
Installation
Outside Warning Buzzer Inspection
Reverse removal procedure.

---

## AENLSB0AA506015 - Outside Warning Buzzer Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506015.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Repair Instructions
Outgoing references:
- AENLSB0AA506014 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506014.xml | Outside Warning Buzzer Removal and Installation

Content:
Outside Warning Buzzer Inspection
Outside Warning Buzzer Removal and Installation
Connect SUZUKI scan tool to DLC with ignition “OFF”.
Set ignition “ON”.
Select “Warning Exterior Buzzer” function in “Active Test” mode.
Check that outside warning buzzer sounds.
If check result is not as specified, check applicable circuit for open or short. If circuit is normal, replace outside warning buzzer and recheck it.

---

## AENLSB0AA506016 - Remote Controller Battery Replacement
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA506016.xml
Tree scopes: bookmarks: 10 - Control Systems > 10E - Keyless Start System > Repair Instructions
Outgoing references: none

Content:
Remote Controller Battery Replacement
When replacing battery of remote controller, the controller could be damaged affected by static electricity.
Protect the controller from static damage discharging the static electricity built up in your body by touching metal before replacing the battery.
Remove emergency key (1).
Separate upper case (1) and lower case (2) using a flat-bladed screwdriver (3) as shown in figure.
Remove printed circuit board (4).
5.
Shop rag
Remove battery (2) using a flat-bladed screwdriver (1) as shown in figure.
3.
Shop rag
Place battery (lithium disc-type CR 2032 or equivalent) (1) so its “–” terminal faces “–” mark of the printed circuit board (2).
Install printed circuit board to lower case and then fit upper case securely.
Insert the battery all the way into the printed circuit board.
Do not touch any electrical components of the remote controller.
Be careful not to get any oil or foreign material on the remote controller or battery.
Do not replace the battery with wet hands.
Dispose of the used battery properly according to applicable rules or regulations. Do not dispose of lithium batteries with ordinary household trash.

---

## AENLSB0AA810001 - Precautions for Diagnosing Trouble
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA810001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Precautions > CAN (K14C Model)
Outgoing references: none

Content:
Precautions for Diagnosing Trouble
Before using scan tool, read its Operator’s Manual to know how to use it.
Diagnosing target control module / sensor only is not enough to accurately diagnose any trouble of CAN communication system. Check communication conditions of overall system (including control modules and sensors related to CAN communication) and diagnose trouble by putting those information together.
It is possible that CAN system has trouble because of blown fuse or low battery voltage. Before troubleshooting, check that fuse, battery voltage and charging system condition are normal.
CAN communication error is detected if connector of control modules or sensors being connected to CAN communication line or applicable fuse is connected / disconnected when ignition is “ON”.
Check that no equipment or option other than original parts is connected onto CAN bus. If any of those items are connected, disconnect it before troubleshooting.
If any DTCs together with “Lost Communication” (Reception error) and/or “Communication Bus Off” are displayed, start troubleshooting of CAN communication first.
Before diagnosing trouble, check equipment of vehicle being serviced as well as control modules and sensors connected to CAN communication line.
Clear all DTCs after completing troubleshooting.

---

## AENLSB0AA811001 - Communication System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA811001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > General Description > CAN (K14C Model)
Outgoing references: none

Content:
Communication System Description
System Description
Communication between each control module and device is established through continuous input / output of ON/OFF digital signals to exchange various data items. Transmitting / receiving these data is called as serial communication interface.
Types of serial communication interface with protocols (communication standards) such as UART, CAN and LIN have been adopted for in-car communication system.
UART is used for communication between BCM and steering lock unit.
LIN is used for communication between ECM and generator, and for communication between auto A/C panel and BCM.
In addition, the following control devices transmit / receive data through a twist pair of two communication lines (CAN High and CAN Low) connected through CAN communication. Data obtained by a specific control module can be shared with every control module.
Communication speed of CAN system is fast and the system is suitable for high-speed control data processing by ECM, etc.
ECM
TCM (A/T model)
BCM
ESP ® control module
Combination meter
P/S control module
SDM
RBS control module (DSBS model)
Lighting and turn signal switch
Headlight auto leveling control module (headlight auto leveling model)
Dual sensor brake support control module (DSBS model)
Blind spot monitor control module (main) (DSBS model)
Sonar control module (parking sensor model)
Central gateway control module
UART and LIN Communication Signal
UART and LIN communication systems are serial communication systems capable of transmitting multiple types of information using a single communication line.
Each block of data transmitted via the serial communication system is called a frame.
A frame contains multiple bytes, and each byte consists of a start bit, data bits and a stop bit.
The data bit stream consists of 8 data bits that are transmitted in series, and each bit is assigned to a specific information item.
Switching between High and Low in each bit enables transmission of multiple types of information via a single communication line.
When multiple devices are connected, 1 transmission cycle includes more than 1 frame and the frame length varies depending on the protocol used.
CAN Communication Signal
CAN communication system is a serial communication system for transmitting multiple data items (values from sensors, control data and control signals) as ON-OFF digital signals through communication lines. This system uses two lines (CAN High and CAN Low) for the communication circuit to maintain high reliability even when used for high-speed serial communication.
Serial communication is established as shown below with 2.5 V as the reference level for both CAN High signal (1) and CAN Low signal (2). The range of CAN High signal is from 2.5 V to about 3.5 V and that of CAN Low signal is from 2.5 V to about 1.5 V. When both are at 2.5 V, signal is judged as OFF. When CAN High signal is 3.5 V and CAN Low signal is 1.5 V (that is, when the difference between High voltage and Low voltage is more than about 2 V), signal is judged as ON. For this reason, a feature of CAN communication signal is that the signal waveform between CAN High and CAN Low signals is symmetrical with respect to 2.5 V level. CAN communication fails when the symmetrical signal form collapses.

---

## AENLSB0AA811002 - CAN Communication System Diagnosis General Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA811002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > General Description > CAN (K14C Model)
Outgoing references: none

Content:
CAN Communication System Diagnosis General Description
SUZUKI scan tool is used for diagnosis in this section. Communication method between SUZUKI scan tool and each control module and sensor is shown below.
SUZUKI scan tool (Suzuki SDT-II)
Control module / sensor
Communication with scan tool
Monitor of CAN-DTC
Bus check function
1
DLC
—
—
—
2
Central gateway control module
CAN
Available
Not available
3
Blind spot monitor control module (main) (DSBS model)
CAN
Available
Available
4
Dual sensor brake support control module (DSBS model)
CAN
Available
Available
5
Headlight auto leveling control module (headlight auto leveling model)
CAN
Available
Not available
6
P/S control module
CAN
Available
Available
7
Combination meter
CAN
Available
Available
8
SDM
CAN
Available
Available
9
Lighting and turn signal switch
CAN
Available
Available
10
Sonar control module (parking sensor model)
CAN
Available
Not available
11
BCM
CAN
Available
Available
12
RBS control module (DSBS model)
CAN
Available
Available
13
ESP ® control module
CAN
Available
Available
14
ECM
CAN
Available
Available
15
TCM (A/T model)
CAN
Available
Available

---

## AENLSB0AA812001 - CAN Communication System Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA812001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Schematic and Routing Diagram > CAN (K14C Model)
Outgoing references: none

Content:
CAN Communication System Circuit Diagram
[a] to [q]:
CAN communication line (linked with diagnosis flows [a] to [q] of “Diagnosis Flow Selection Table”)
6.
Headlight auto leveling control module (headlight auto leveling model)
13.
RBS control module (DSBS model)
[r]:
Connector view
7.
P/S control module
14.
ESP ® control module
1.
CAN driver
8.
Combination meter
15.
ECM
2.
DLC
9.
SDM
16.
TCM (A/T model)
3.
Blind spot monitor control module (main) (DSBS model)
10.
Lighting and turn signal switch
17.
J/C (G307)
4.
Central gateway control module
11.
Sonar control module (parking sensor model)
18.
J/C (L349 / L350)
5.
Dual sensor brake support control module (DSBS model)
12.
BCM
19.
J/C (E346 / E347)

---

## AENLSB0AA813001 - CAN Communication System Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA813001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Component Location > CAN (K14C Model)
Outgoing references: none

Content:
CAN Communication System Component Location
The figure shows LHD. For RHD, parts with (*) are installed at the opposite side.
1.
ECM
7.
Sonar control module (parking sensor model)
13.
BCM
2.
Dual sensor brake support control module (DSBS model)
8.
Blind spot monitor control module (main) (DSBS model)
14.
J/C (E346 / E347)
3.
ESP ® control module
9.
Central gateway control module
15.
DLC
4.
J/C (L349 / L350)
10.
Combination meter
16.
P/S control module
5.
RBS control module (DSBS model)
11.
Lighting and turn signal switch
17.
Headlight auto leveling control module (headlight auto leveling model)
6.
TCM (A/T model)
12.
J/C (G307)
18.
SDM

---

## AENLSB0AA814001 - CAN Communication Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (K14C Model)
Outgoing references: none

Content:
CAN Communication Check
Check equipment of vehicle being serviced as well as control modules and sensors connected to CAN communication line.
Using SUZUKI scan tool, check the following points.
The system that status “Found” is not displayed on “Vehicle Health” screen.
Control modules shown on screen of “Communication Bus Check”.
CAN-DTC(s) detected by “Communication Bus Check” and “DTC”.
“Communication Bus Check” function is connected to CAN communication bus of diagnosing vehicle and, control module(s) and sensor(s) which cannot detect CAN communication are indicated.
Therefore, a status without any indication on screen is normal.
SUZUKI scan tool (Suzuki SDT-II)
Condition
Action
Reference
All of the following conditions are met.
All systems indicate “Found” in “Vehicle Health” screen.
All of control modules and sensors are not indicated in “Communication Bus Check”. (Nothing indicated on screen)
CAN-DTC cannot be detected.
Normal
—
Any of the following conditions is met.
There is a system(s) that “Found” is not indicated in “Vehicle Health” screen.
There is control module(s) and/or sensor(s) which are indicated in “Communication Bus Check”.
CAN-DTC is detected in either system.
Check all of the control modules and sensors connected with CAN communication system for the following points. If any abnormality is found, repair it.
Power supply (battery power source, ignition power source and fuse) and ground circuit.
Connection and contact of terminal(s).
Clear DTC.
Start the engine and check DTC while idling. If check result is OK, intermittent poor contact of connector or ground circuit is assumed. If malfunction is not resolved, check the following points.
—
“Control Module Bus Off” is detected in either of system (current DTC)
Perform “Troubleshooting for Communication Bus Off”.
Only “Lost Communication” is detected in either of system (current DTC)
Perform “Troubleshooting for Lost Communication”.
No communication with central gateway control module.
All of status is not shown as “Found” in “Vehicle Health” screen.
Check if SUZUKI scan tool is communicable by connecting to another vehicle.
—
Perform “Troubleshooting for Communication Bus Off”.

---

## AENLSB0AA814002 - CAN DTC (Lost Communication and Communication Bus Off) Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (K14C Model)
Outgoing references: none

Content:
CAN DTC (Lost Communication and Communication Bus Off) Table
DTC
DTC name
Detecting condition
ECM
U0073
Control Module Communication Bus Off
ECM fails to transmit and receive the data via CAN for specified time continuously.
U0101
Lost Communication With TCM
Receiving error of the data from TCM via CAN for specified time continuously.
U0121
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0131
Lost Communication With Power Steering Control Module
Receiving error of the data from P/S control module via CAN for specified time continuously.
U0140
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
U108A
Lost Communication With RBS Control Module
Receiving error of the data from RBS control module via CAN for specified time continuously.
U1093
Lost Communication With DSBS Control Module
Receiving error of the data from dual sensor brake support control module via CAN for specified time continuously
TCM (A/T model)
U0073
Control Module Communication Bus Off
TCM fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0121
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
ESP ® control module
U0073
Control Module Communication Bus Off
ESP ® control module fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0101
Lost Communication With TCM
Receiving error of the data from TCM via CAN for specified time continuously.
U0126
Lost Communication With Steering Angle Sensor Module
Receiving error of the data from lighting and turn signal switch via CAN for specified time continuously.
U0140
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U108A
Lost Communication With RBS Control Module
Receiving error of the data from RBS control module via CAN for specified time continuously.
U1093
Lost Communication With DSBS Control Module
Receiving error of the data from dual sensor brake support control module via CAN for specified time continuously
BCM
U0073
Control Module Communication Bus Off
BCM fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0101
Lost Communication With TCM
Receiving error of the data from TCM via CAN for specified time continuously.
U0121
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0151
Lost Communication With Restraints Control Module
Receiving error of the data from SDM via CAN for specified time continuously.
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
U108B
Lost Communication With Lighting and Turn Signal Switch
Receiving error of the data from lighting and turn signal switch via CAN for specified time continuously.
U1093
Lost Communication With DSBS Control Module
Receiving error of the data from dual sensor brake support control module via CAN for specified time continuously
Combination meter
U0073
Control Module Communication Bus Off
Combination meter fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0101
Lost Communication With TCM
Receiving error of the data from TCM via CAN for specified time continuously.
U0121
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0131
Lost Communication With Power Steering Control Module
Receiving error of the data from P/S control module via CAN for specified time continuously.
U0140
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U0151
Lost Communication With Restraints Control Module
Receiving error of the data from SDM via CAN for specified time continuously.
U108A
Lost Communication With RBS Control Module
Receiving error of the data from RBS control module via CAN for specified time continuously.
U1093
Lost Communication With DSBS Control Module
Receiving error of the data from dual sensor brake support control module via CAN for specified time continuously
P/S control module
U0073
Control Module Communication Bus Off
P/S control module fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0121
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0126
Lost Communication With Steering Angle Sensor Module
Receiving error of the data from lighting and turn signal switch via CAN for specified time continuously.
U0140
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
U1093
Lost Communication With DSBS Control Module
Receiving error of the data from dual sensor brake support control module via CAN for specified time continuously
Headlight auto leveling control module (Headlight auto leveling model)
U0073
Control Module Communication Bus Off
Headlight auto leveling control module fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
RBS control module (DSBS model)
U0073
Control Module Communication Bus Off
RBS control module fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0101
Lost Communication With TCM
Receiving error of the data from TCM via CAN for specified time continuously.
U0121
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0126
Lost Communication With Steering Angle Sensor Module
Receiving error of the data from lighting and turn signal switch via CAN for specified time continuously.
U0140
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
U1093
Lost Communication With DSBS Control Module
Receiving error of the data from dual sensor brake support control module via CAN for specified time continuously
Dual sensor brake support control module (DSBS model)
U0073
Control Module Communication Bus Off
Dual sensor brake support control module fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0101
Lost Communication With TCM
Receiving error of the data from TCM via CAN for specified time continuously.
U0121
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0126
Lost Communication With Steering Angle Sensor Module
Receiving error of the data from lighting and turn signal switch via CAN for specified time continuously.
U0131
Lost Communication With Power Steering Control Module
Receiving error of the data from P/S control module via CAN for specified time continuously.
U0140
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
Blind spot monitor control module (main) (DSBS model)
U0073-88
Control Module Communication Bus Off
Blind spot monitor control module (main) fails to transmit and receive the data via CAN for specified time continuously.
U0100-87
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0101-87
Lost Communication With TCM
Receiving error of the data from TCM via CAN for specified time continuously.
U0121-87
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0126-87
Lost Communication With Steering Angle Sensor Module
Receiving error of the data from lighting and turn signal switch via CAN for specified time continuously.
U0140-87
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U0155-87
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
Sonar control module (parking sensor model)
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
Lighting and turn signal switch
U0073
Control Module Communication Bus Off
Lighting and turn signal switch fails to transmit and receive the data via CAN for specified time continuously.
U0121
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0140
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
SDM
U0073-88
Control Module Communication Bus Off
SDM fails to transmit and receive the data via CAN for specified time continuously.
Central gateway control module
U0073-88
Control Module Communication Bus Off
Central gateway control module fails to transmit and receive the data via CAN for specified time continuously.
U0075-88
Control Module Communication Bus “C” Off
Central gateway control module fails to transmit and receive the data via CAN for specified time continuously.
U0100-87
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0101-87
Lost Communication With TCM
Receiving error of the data from TCM via CAN for specified time continuously.
U0121-87
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0126-87
Lost Communication With Steering Angle Sensor Module
Receiving error of the data from lighting and turn signal switch via CAN for specified time continuously.
U0140-87
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U0151-87
Lost Communication With Restraints Control Module
Receiving error of the data from SDM via CAN for specified time continuously.
U0155-87
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
U1096-87
Lost Communication With Blind Spot Monitor Control Module
Receiving error of the data from blind spot monitor control module (main) via CAN for specified time continuously.

---

## AENLSB0AA814003 - Troubleshooting for Lost Communication
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (K14C Model)
Outgoing references:
- AENLSB0AA814001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814001.xml | CAN Communication Check:CAN (K14C Model)
- AENLSB0AA814003003 -> unresolved | Diagnosis Flow Selection Table
- AENLSB0AA814004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814004.xml | Troubleshooting for Communication Bus Off:CAN (K14C Model)
- AENLSB0AA814003001 -> unresolved | Circuit Diagram

Content:
Troubleshooting for Lost Communication
Circuit Diagram
[a] to [q]:
CAN communication line (linked with diagnosis flows [a] to [q] of “Diagnosis Flow Selection Table”)
6.
Headlight auto leveling control module (headlight auto leveling model)
13.
RBS control module (DSBS model)
[r]:
Connector view
7.
P/S control module
14.
ESP ® control module
1.
CAN driver
8.
Combination meter
15.
ECM
2.
DLC
9.
SDM
16.
TCM (A/T model)
3.
Blind spot monitor control module (main) (DSBS model)
10.
Lighting and turn signal switch
17.
J/C (G307)
4.
Central gateway control module
11.
Sonar control module (parking sensor model)
18.
J/C (L349 / L350)
5.
Dual sensor brake support control module (DSBS model)
12.
BCM
19.
J/C (E346 / E347)
Diagnosis Procedure
Perform
CAN Communication Check:CAN (K14C Model)
before performing this flow.
Occurrence of multiple troubles is not included in the scope of this trouble diagnosis.
When “Lost Communication” is detected in any control module, perform diagnosis according to the following procedure.
Connect SUZUKI scan tool to DLC.
Set ignition “ON”.
Select “Communication Bus Check” menu of SUZUKI scan tool and check for communication-disabled control module / sensor.
Based on above check results, select applicable diagnosis flow ([a] to [q]) from
Diagnosis Flow Selection Table
.
Perform troubleshooting according to selected diagnosis flow.
Diagnosis Flow Selection Table
The following control modules are not compatible with “Communication Bus Check” function. However, if system names are indicated on startup screen of “Vehicle Health” on SUZUKI scan tool and the status is indicated “Found”, communication circuit is judged normal. Check related CAN-DTC in each system if necessary.
Central gateway control module
Sonar control module (parking sensor model)
Headlight auto leveling control module (headlight auto leveling model)
If an individual control module or sensor fails to communicate, check whether power supply circuit or ground circuit of control module or sensor is in good condition, referring to system circuit diagram, etc. before diagnosing trouble with flow chart.
If it is not possible to select suitable diagnosis flow from “Diagnosis Flow Selection Table” or “two or more diagnosis flows are selectable”, perform
Troubleshooting for Communication Bus Off:CAN (K14C Model)
.
Diagnosis flows [a] to [q] link with CAN communication lines [a] to [q] of
Circuit Diagram
.
Communication-disabled control module / sensor
Diagnosis flow
All control modules communicating by CAN
[a]
Dual sensor brake support control module (DSBS model)
Headlight auto leveling control module (headlight auto leveling model)
P/S control module
Combination meter
SDM
Lighting and turn signal switch
Sonar control module (parking sensor model)
BCM
RBS control module (DSBS model)
ESP ® control module
ECM
TCM (A/T model)
[b]
P/S control module
Combination meter
SDM
Lighting and turn signal switch
[c]
Combination meter
SDM
Lighting and turn signal switch
[d]
Sonar control module (parking sensor model)
BCM
RBS control module (DSBS model)
ESP ® control module
ECM
TCM (A/T model)
[e]
BCM
RBS control module (DSBS model)
ESP ® control module
ECM
TCM (A/T model)
[f]
RBS control module (DSBS model)
ESP ® control module
ECM
TCM (A/T model)
[g]
ESP ® control module
ECM
TCM (A/T model)
[h]
ECM
TCM (A/T model)
[i]
TCM (A/T model)
[j]
Blind spot monitor control module (main) (DSBS model)
[k]
Dual sensor brake support control module (DSBS model)
[l]
Headlight auto leveling control module (headlight auto leveling model)
[m]
SDM
[n]
Lighting and turn signal switch
[o]
Sonar control module (parking sensor model)
[p]
RBS control module (DSBS model)
[q]
Troubleshooting
Diagnosis flow: [a]
CAN communication check between SUZUKI scan tool and central gateway control module
Perform the following checks.
Check if SUZUKI scan tool is communicable by connecting to another vehicle.
Check DLC power circuit and ground circuit.
Check for proper connection to central gateway control module connector.
Check central gateway control module power supply circuit and ground circuit.
Is check result OK?
Go to Step 2.
Repair or replace defective part.
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60”.
Check for proper connection to DLC and central gateway control module connector.
If connections are OK, check CAN communication circuit [a] between DLC and central gateway control module connector for open circuit.
Is check result OK?
Replace central gateway control module and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [b]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and P/S control module connector “G10”.
Check for proper connection to central gateway control module connector and P/S control module connector.
If connections are OK, check CAN communication circuit [b] between central gateway control module connector and P/S control module connector for open circuit.
Is check result OK?
Replace central gateway control module and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [c]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and P/S control module connector “G10”.
Check for proper connection to central gateway control module connector and P/S control module connector.
If connections are OK, check CAN communication circuit [c] between central gateway control module connector and P/S control module connector for open circuit.
Is check result OK?
Replace P/S control module and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [d]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect P/S control module connector “G10” and combination meter connector “G241”.
Check for proper connection to P/S control module connector and combination meter connector.
If connections are OK, check CAN communication circuit [d] between P/S control module connector and combination meter connector for open circuit.
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
CAN communication circuit resistance check
Connect P/S control module connector.
Measure resistance between “G241-7” and “G241-27” terminals of combination meter connector.
Is resistance 114 – 134 Ω?
Replace combination meter and recheck DTC.
Replace P/S control module and recheck DTC.
Diagnosis flow: [e]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and BCM connector “L01”.
Check for proper connection to central gateway control module connector and BCM connector.
If connections are OK, check CAN communication circuit [e] between central gateway control module connector and BCM connector for open circuit.
Is check result OK?
Check for intermittent trouble.
Repair or replace defective wire harness.
Diagnosis flow: [f]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and BCM connector “L01”.
Check for proper connection to central gateway control module connector and BCM connector.
If connections are OK, check CAN communication circuit [f] between central gateway control module connector and BCM connector for open circuit.
Is check result OK?
Replace BCM and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [g]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect BCM connector “E04” and ESP ® control module connector “E09”.
Check for proper connection to BCM connector and ESP ® control module connector.
If connections are OK, check CAN communication circuit [g] between BCM connector and ESP ® control module connector for open circuit.
Is check result OK?
Replace BCM and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [h]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect BCM connector “E04” and ESP ® control module connector “E09”.
Check for proper connection to BCM connector and ESP ® control module connector.
If connections are OK, check CAN communication circuit [h] between BCM connector and ESP ® control module connector for open circuit.
Is check result OK?
Replace ESP ® control module and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [i]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect ECM connector “E01” and ESP ® control module connector “E09”.
Check for proper connection to ECM connector and ESP ® control module connector.
If connections are OK, check CAN communication circuit [i] between ECM connector and ESP ® control module connector for open circuit.
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
CAN communication circuit resistance check
Connect ESP ® control module connector.
Measure resistance between “E01-59” and “E01-83” terminals of ECM connector.
Is resistance 114 – 134 Ω?
Replace ECM and recheck DTC.
Replace ESP ® control module and recheck DTC.
Diagnosis flow: [j]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect ECM connector “C01” and TCM connector “C06”.
Check for proper connection to ECM connector and TCM connector.
If connections are OK, check CAN communication circuit [j] between ECM connector and TCM connector for open circuit.
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
CAN communication circuit resistance check
Connect ECM connector.
Disconnect ESP ® control module connector “E09”.
Measure resistance between “C06-2” and “C06-4” terminals of TCM connector.
Is resistance 114 – 134 Ω?
Replace TCM and recheck DTC.
Replace ECM and recheck DTC.
Diagnosis flow: [k]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect blind spot monitor control module (main) connector “L531” and central gateway control module connector “G60”.
Check for proper connection to blind spot monitor control module (main) connector and central gateway control module connector.
If connections are OK, check CAN communication circuit [k] between blind spot monitor control module (main) connector and central gateway control module connector for open circuit.
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
Central gateway control module terminating resistance check
Connect central gateway control module connector.
Measure resistance between “L531-3” and “L531-7” terminals of blind spot monitor control module (main) connector.
Is resistance 114 – 134 Ω?
Replace blind spot monitor control module (main) and recheck DTC.
Replace central gateway control module and recheck DTC.
Diagnosis flow: [l]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and dual sensor brake support control module connector “K04”.
Check for proper connection to central gateway control module connector and dual sensor brake support control module connector.
If connections are OK, check CAN communication circuit [l] between central gateway control module connector and dual sensor brake support control module connector for open circuit.
Is check result OK?
Replace dual sensor brake support control module and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [m]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and headlight auto leveling control module connector “G14”.
Check for proper connection to central gateway control module connector and headlight auto leveling control module connector.
If connections are OK, check CAN communication circuit [m] between central gateway control module connector and headlight auto leveling control module connector for open circuit.
Is check result OK?
Replace headlight auto leveling control module and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [n]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect combination meter connector “G241” and SDM connector “G12”.
Check for proper connection to combination meter connector and SDM connector.
If connections are OK, check CAN communication circuit [n] between combination meter connector and SDM connector for open circuit.
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
CAN communication circuit resistance check
Connect combination meter connector.
Disconnect P/S control module connector “G10”.
Measure resistance between “G12-8” and “G12-9” terminals of SDM connector.
Is resistance 114 – 134 Ω?
Replace SDM and recheck DTC.
Replace combination meter and recheck DTC.
Diagnosis flow: [o]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect combination meter connector “G241” and lighting and turn signal switch connector “G144”.
Check for proper connection to combination meter connector and lighting and turn signal switch connector.
If connections are OK, check CAN communication circuit [o] between combination meter connector and lighting and turn signal switch connector for open circuit.
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
CAN communication circuit resistance check
Connect combination meter connector.
Disconnect P/S control module connector “G10”.
Measure resistance between “G144-4” and “G144-5” terminals of lighting and turn signal switch connector.
Is resistance 114 – 134 Ω?
Replace lighting and turn signal switch and recheck DTC.
Replace combination meter and recheck DTC.
Diagnosis flow: [p]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and sonar control module connector “L29”.
Check for proper connection to central gateway control module connector and sonar control module connector.
If connections are OK, check CAN communication circuit [p] between central gateway control module connector and sonar control module connector for open circuit.
Is check result OK?
Replace sonar control module and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [q]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect BCM connector “E04” and RBS control module connector “E490”.
Check for proper connection to BCM connector and RBS control module connector.
If connections are OK, check CAN communication circuit [q] between BCM connector and RBS control module connector for open circuit.
Is check result OK?
Replace RBS control module and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0AA814004 - Troubleshooting for Communication Bus Off
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (K14C Model)
Outgoing references:
- AENLSB0AA814001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814001.xml | CAN Communication Check:CAN (K14C Model)
- AENLSB0AA814004005 -> unresolved | Examples of abnormal waveforms
- AENLSB0AA814006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814006.xml | Judgement of Communication Bus Check:CAN (K14C Model)
- AENLSB0AA814004002 -> unresolved | Diagnosis Procedure (U0073)
- AENLSB0AA814005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814005.xml | Communication Check:CAN (K14C Model)
- AENLSB0AA814004017 -> unresolved | Diagnosis Procedure (U0075)

Content:
Troubleshooting for Communication Bus Off
Perform
CAN Communication Check:CAN (K14C Model)
before performing this flow.
Circuit Diagram
[a] to [q]:
CAN communication line (linked with diagnosis flows [a] to [q] of “Diagnosis Flow Selection Table”)
6.
Headlight auto leveling control module (headlight auto leveling model)
13.
RBS control module (DSBS model)
[r]:
Connector view
7.
P/S control module
14.
ESP ® control module
1.
CAN driver
8.
Combination meter
15.
ECM
2.
DLC
9.
SDM
16.
TCM (A/T model)
3.
Blind spot monitor control module (main) (DSBS model)
10.
Lighting and turn signal switch
17.
J/C (G307)
4.
Central gateway control module
11.
Sonar control module (parking sensor model)
18.
J/C (L349 / L350)
5.
Dual sensor brake support control module (DSBS model)
12.
BCM
19.
J/C (E346 / E347)
Diagnosis Procedure (U0073)
When “CAN Communication Bus Off” (U0073) is detected in any control modules, or when it is not possible to communicate with any control modules / sensors with CAN using SUZUKI scan tool, perform the following procedure.
Connect oscilloscope to combination meter connector when ignition is “OFF”.
Using oscilloscope, observe waveform in the following condition when ignition is “ON”.
Waveform cannot be checked through DLC.
Channel
Probe
Terminal No.
1
+
G241-27
–
Ground
2
+
G241-7
–
Ground
Compare observed signal waveform with waveforms given as “Reference Waveform:”. Find the most similar signal waveform and identify the system in trouble and cause of trouble.
Perform troubleshooting.
Diagnosis Procedure (U0075)
When “CAN Communication Bus Off” (U0075-88) is detected in central gateway control module, perform the following procedure.
Connect oscilloscope to central gateway control module when ignition is “OFF”.
Using oscilloscope, observe waveform in the following condition when ignition is “ON”.
Channel
Probe
Terminal No.
1
+
G60-14
–
Ground
2
+
G60-15
–
Ground
Compare observed signal waveform with waveforms given as “Reference Waveform:”. Find the most similar signal waveform and identify the system in trouble and cause of trouble.
Perform troubleshooting.
Reference Waveform
Waveforms in “Examples of abnormal waveforms” are selected examples of CAN communication waveforms seen when an abnormal condition occurs. However, these waveforms may not be exactly the same in appearance as observed waveforms. Therefore, to identify an abnormal condition, select the waveform that is most similar to the observed waveform from
Examples of abnormal waveforms
.
Normal waveform
Normal waveform
Description
Reference voltages for both CAN High signal and CAN Low signal are 2.5 V. Waveform of CAN High signal is 2.5 – 3.5 V and that of CAN Low signal is 2.5 – 1.5 V.
[A]:
Ground level of each channel
[D]:
Waveform of channel 1 (CAN High signal)
[B]:
VOLT/DIV of each channel
[E]:
Waveform of channel 2 (CAN Low signal)
[C]:
TIME/DIV of each channel
Examples of abnormal waveforms
Possible cause
Characteristic waveform
Description
CAN High signal
CAN Low signal
Shorted to ground
In case CAN High signal wire is shorted to ground circuit
Both of CAN High signal and CAN Low signal are fixed to GND level (0 V).
In case CAN Low signal wire is shorted to ground circuit
Reference voltages for both of CAN High signal and CAN Low signal are GND level (0 V) and CAN High signal waveform oscillates irregularly.
CAN High signal: Between 0 V and 3.5 V
CAN Low signal: Fixed to 0 V
Opened
In case CAN High signal wire is open
Reference voltages for both CAN High signal and CAN Low signal are 2.5 V and these waveforms oscillate irregularly.
CAN High signal: Between 4.0 V and 1.0 V
CAN Low signal: Between 2.5 V and 1.0 V
In case CAN Low signal wire is open
Reference voltages for both of CAN High signal and CAN Low signal are 2.5 V and these waveforms oscillate irregularly.
CAN High signal: Between 2.5 V and 4.0 V
CAN Low signal: Between 1.0 V and 4.0 V
Shorted to power supply circuit (12 V)
In case CAN High signal wire is shorted to power supply circuit (12 V)
CAN High signal is fixed to 12 V and CAN Low signal is fixed to 11 V.
In case CAN Low signal wire is shorted to power supply circuit (12 V)
CAN High signal is fixed to 11 V and CAN Low signal is fixed to 12 V.
Shorted to power supply circuit (5 V)
In case CAN High signal wire is shorted to power supply circuit (5 V)
Reference voltages for both CAN High signal and CAN Low signal are 4.5 V and these waveforms oscillate irregularly.
CAN High signal: Between 5.5 V and 3.5 V
CAN Low signal: Between 5.0 V and 1.0 V
In case CAN Low signal wire is shorted to power supply circuit (5 V)
Reference voltage is 4.5 V and phase is the same for both CAN High signal and CAN Low signal, and waveforms oscillate irregularly between 6.0 V and 1.0 V.
CAN High signal and CAN Low signal wires are shorted to each other
Both of CAN High signal and CAN Low signal are fixed to near 2.5 V.
Troubleshooting (U0073)
Before diagnosing trouble, check equipment of vehicle being serviced as well as control modules and sensors connected to CAN communication line.
Before using scan tool, read its Operator’s Manual to know how to use it.
When performing “Communication Bus Check” using SUZUKI scan tool in this troubleshooting, refer to
Judgement of Communication Bus Check:CAN (K14C Model)
.
The following control modules are not compatible with “Communication Bus Check” function. However, if system names are indicated on startup screen of “Vehicle Health” on SUZUKI scan tool and the status is indicated “Found”, communication circuit is judged normal. Check related CAN-DTC in each system if necessary.
Central gateway control module
Sonar control module (parking sensor model)
Headlight auto leveling control module (headlight auto leveling model)
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect connectors from all the control modules and sensors communicating by CAN.
Check for proper connection to each CAN communication circuit at all control modules / sensors (communicating by CAN) connectors and DLC.
If connections are OK, check the following points of each CAN communication circuit based on results found in Step 3) of
Diagnosis Procedure (U0073)
.
Open circuit
Short to power circuit
Short to ground circuit
Short to CAN communication wire with each other
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
ECM communication check
Connect “E01” and “C01” connectors to ECM.
Measure resistance between “E09-30” and “E09-33” terminals of ESP ® control module connector.
Is resistance 114 – 134 Ω?
Go to Step 3.
Replace ECM and recheck DTC.
ESP® control module communication check
Connect “E09” connector to ESP ® control module.
Measure resistance between “E04-5” and “E04-17” terminals of BCM connector.
Is resistance 114 – 134 Ω?
Go to Step 4.
Replace ESP ® control module and recheck DTC.
BCM communication check
Connect “E04” and “L01” connectors to BCM.
Measure resistance between “G10-7” and “G10-8” terminals of P/S control module connector.
Is resistance 114 – 134 Ω?
Go to Step 5.
Replace BCM and recheck DTC.
P/S control module communication check
Connect “G10” connector to P/S control module.
Measure resistance between “G241-7” and “G241-27” terminals of combination meter connector.
Is resistance 114 – 134 Ω?
Go to Step 6.
Replace P/S control module and recheck DTC.
Combination meter communication check
Connect “G241” connector to combination meter.
Disconnect BCM connector “L01”.
Measure resistance between “G60-20” and “G60-21” terminals of central gateway control module connector.
Is resistance 114 – 134 Ω?
Go to Step 7.
Replace combination meter and recheck DTC.
Other control module and sensor communication check
Perform
Communication Check:CAN (K14C Model)
.
Is check result OK?
Check for intermittent trouble.
Replace defective control module or sensor and recheck DTC.
Troubleshooting (U0075)
Before diagnosing trouble, check equipment of vehicle being serviced as well as control modules and sensors connected to CAN communication line.
Before using scan tool, read its Operator’s Manual to know how to use it.
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect blind spot monitor control module (main) connector “L531” and central gateway control module connector “G60”.
Check for proper connection to blind spot monitor control module (main) connector and central gateway control module connector.
If connections are OK, check the following points of each CAN communication circuit between blind spot monitor control module (main) connector and central gateway control module connector based on results found in Step 3) of
Diagnosis Procedure (U0075)
.
Open circuit
Short to power circuit
Short to ground circuit
Short to CAN communication wire with each other
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
Central gateway control module terminating resistance check
Connect central gateway control module connector.
Measure resistance between “L531-3” and “L531-7” terminals of blind spot monitor control module (main) connector.
Is resistance 114 – 134 Ω?
Replace blind spot monitor control module (main) and recheck DTC.
Replace central gateway control module and recheck DTC.

---

## AENLSB0AA814005 - Communication Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814005.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (K14C Model)
Outgoing references: none

Content:
Communication Check
Check communication conditions of central gateway control module first.
The following control modules are not compatible with “Communication Bus Check” function. However, if system names are indicated on startup screen of “Vehicle Health” on SUZUKI scan tool and the status is indicated “Found”, communication circuit is judged normal. Check related CAN-DTC in each system if necessary.
Central gateway control module
Sonar control module (parking sensor model)
Headlight auto leveling control module (headlight auto leveling model)
Central Gateway Control Module
Set ignition “OFF”.
Connect “G60” connector to central gateway control module.
Set ignition “ON”.
At startup of SUZUKI scan tool, check “Vehicle Health” screen and “Central gateway control module” and each system already connected to CAN communication are shown on the screen, and their status is “Found”.
If any malfunction is found, replace central gateway control module and recheck DTC.
Dual Sensor Brake Support Control Module (DSBS Model)
Set ignition “OFF”.
Connect “K04” connector to dual sensor brake support control module.
Set ignition “ON”.
Select “Communication Bus Check” menu of SUZUKI scan tool.
Check that status of CAN communication with control modules, sensors and dual sensor brake support control module already connected are shown as normal on scan tool.
If any malfunction is found, replace dual sensor brake support control module and recheck DTC.
Headlight Auto Leveling Control Module (Headlight Auto Leveling Model)
Set ignition “OFF”.
Connect “G14” connector to headlight auto leveling control module.
Set ignition “ON”.
At startup of SUZUKI scan tool, check “Vehicle Health” screen and “Headlight auto leveling control module” and each system already connected to CAN communication are shown on the screen, and their status is “Found”.
If any malfunction is found, replace headlight auto leveling control module and recheck DTC.
SDM
Set ignition “OFF”.
Connect “G12” connector to SDM.
Set ignition “ON”.
Select “Communication Bus Check” menu of SUZUKI scan tool.
Check that status of CAN communication with control modules, sensors and SDM already connected are shown as normal on scan tool.
If any malfunction is found, replace SDM and recheck DTC.
Lighting and Turn Signal Switch
Set ignition “OFF”.
Connect “G144” connector to lighting and turn signal switch.
Set ignition “ON”.
Select “Communication Bus Check” menu of SUZUKI scan tool.
Check that status of CAN communication with control modules, sensors and lighting and turn signal switch already connected are shown as normal on scan tool.
If any malfunction is found, replace lighting and turn signal switch and recheck DTC.
Sonar Control Module (Parking Sensor Model)
Set ignition “OFF”.
Connect “L29” connector to sonar control module.
Set ignition “ON”.
At startup of SUZUKI scan tool, check “Vehicle Health” screen and “Sonar control module” and each system already connected to CAN communication are shown on the screen, and their status is “Found”.
If any malfunction is found, replace sonar control module and recheck DTC.
RBS Control Module (DSBS Model)
Set ignition “OFF”.
Connect “E490” connector to RBS control module.
Set ignition “ON”.
Select “Communication Bus Check” menu of SUZUKI scan tool.
Check that status of CAN communication with control modules, sensors and RBS control module already connected are shown as normal on scan tool.
If any malfunction is found, replace RBS control module and recheck DTC.
TCM (A/T Model)
Set ignition “OFF”.
Connect “C06” connector to TCM.
Set ignition “ON”.
Select “Communication Bus Check” menu of SUZUKI scan tool.
Check that status of CAN communication with control modules, sensors and TCM already connected are shown as normal on scan tool.
If any malfunction is found, replace TCM and recheck DTC.

---

## AENLSB0AA814006 - Judgement of Communication Bus Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814006.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (K14C Model)
Outgoing references: none

Content:
Judgement of Communication Bus Check
When performing “Communication Bus Check” using SUZUKI scan tool, refer to the following table for judgement.
Judgement
Display of communication bus check
Normal
All control modules / sensors (communicating by CAN) are not displayed (Nothing displayed on screen).
Abnormal
All or some control modules / sensors already connected with CAN communication are displayed on screen and communication bus is indicated “Error Detected”.

---

## AENLSB0AA818001 - Special Tool
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA818001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Special Tools and Equipment > CAN (K14C Model)
Outgoing references: none

Content:
Special Tool
SUZUKI scan tool (Suzuki SDT-II)
—

---

## AENLSB0AA820001 - Precautions for Diagnosing Trouble
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA820001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Precautions for Diagnosing Trouble
Before using scan tool, read its Operator’s Manual to know how to use it.
Diagnosing target control module / sensor only is not enough to accurately diagnose any trouble of CAN communication system. Check communication conditions of overall system (including control modules and sensors related to CAN communication) and diagnose trouble by putting those information together.
It is possible that CAN system has trouble because of blown fuse or low battery voltage. Before troubleshooting, check that fuse, battery voltage and charging system condition are normal.
CAN communication error is detected if connector of control modules or sensors being connected to CAN communication line or applicable fuse is connected / disconnected when ignition is “ON”.
Check that no equipment or option other than original parts is connected onto CAN bus. If any of those items are connected, disconnect it before troubleshooting.
If any DTCs together with “Lost Communication” (Reception error) and/or “Communication Bus Off” are displayed, start troubleshooting of CAN communication first.
Before diagnosing trouble, check equipment of vehicle being serviced as well as control modules and sensors connected to CAN communication line.
Clear all DTCs after completing troubleshooting.

---

## AENLSB0AA821001 - Communication System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA821001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Communication System Description
System Description
Communication between each control module and device is established through continuous input / output of ON/OFF digital signals to exchange various data items. Transmitting / receiving these data is called as serial communication interface.
Types of serial communication interface with protocols (communication standards) such as UART, CAN and LIN have been adopted for in-car communication system.
UART is used for communication between BCM and steering lock unit.
LIN is used for communication between auto A/C panel and BCM.
In addition, the following control devices transmit / receive data through a twist pair of two communication lines (CAN High and CAN Low) connected through CAN communication. Data obtained by a specific control module can be shared with every control module.
Communication speed of CAN system is fast and the system is suitable for high-speed control data processing by ECM, etc.
ECM
BCM
ESP ® control module
Combination meter
P/S control module
SDM
TPMS control module
RBS control module (DSBS model)
Lighting and turn signal switch
Headlight auto leveling control module
Dual sensor brake support control module (DSBS model)
ISG
Auxiliary power module (lithium-ion battery)
DC/DC converter
Blind spot monitor control module (main) (blind spot monitor model)
Sonar control module
Central gateway control module
UART and LIN Communication Signal
UART and LIN communication systems are serial communication systems capable of transmitting multiple types of information using a single communication line.
Each block of data transmitted via the serial communication system is called a frame.
A frame contains multiple bytes, and each byte consists of a start bit, data bits and a stop bit.
The data bit stream consists of 8 data bits that are transmitted in series, and each bit is assigned to a specific information item.
Switching between High and Low in each bit enables transmission of multiple types of information via a single communication line.
When multiple devices are connected, 1 transmission cycle includes more than 1 frame and the frame length varies depending on the protocol used.
CAN Communication Signal
CAN communication system is a serial communication system for transmitting multiple data items (values from sensors, control data and control signals) as ON-OFF digital signals through communication lines. This system uses two lines (CAN High and CAN Low) for the communication circuit to maintain high reliability even when used for high-speed serial communication.
Serial communication is established as shown below with 2.5 V as the reference level for both CAN High signal (1) and CAN Low signal (2). The range of CAN High signal is from 2.5 V to about 3.5 V and that of CAN Low signal is from 2.5 V to about 1.5 V. When both are at 2.5 V, signal is judged as OFF. When CAN High signal is 3.5 V and CAN Low signal is 1.5 V (that is, when the difference between High voltage and Low voltage is more than about 2 V), signal is judged as ON. For this reason, a feature of CAN communication signal is that the signal waveform between CAN High and CAN Low signals is symmetrical with respect to 2.5 V level. CAN communication fails when the symmetrical signal form collapses.

---

## AENLSB0AA821002 - CAN Communication System Diagnosis General Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA821002.xml
Tree scopes: unscoped
Outgoing references: none

Content:
CAN Communication System Diagnosis General Description
SUZUKI scan tool is used for diagnosis in this section. Communication method between SUZUKI scan tool and each control module and sensor is shown below.
SUZUKI scan tool (Suzuki SDT-II)
Control module / sensor
Communication with scan tool
Monitor of CAN-DTC
Bus check function
1
DLC
—
—
—
2
Central gateway control module
CAN
Available
Not available
3
Blind spot monitor control module (main) (blind spot monitor model)
CAN
Available
Available
4
Dual sensor brake support control module (DSBS model)
CAN
Available
Available
5
TPMS control module
CAN
Available
Available
6
Headlight auto leveling control module
CAN
Available
Not available
7
P/S control module
CAN
Available
Available
8
Combination meter
CAN
Available
Available
9
SDM
CAN
Available
Available
10
Lighting and turn signal switch
CAN
Available
Available
11
Sonar control module
CAN
Available
Not available
12
BCM
CAN
Available
Available
13
RBS control module (DSBS model)
CAN
Available
Available
14
ESP ® control module
CAN
Available
Available
15
ECM
CAN
Available
Available
16
DC/DC converter
CAN
Available
Available
17
Auxiliary power module (lithium-ion battery)
CAN
Available
Available
18
ISG
CAN
Available
Available

---

## AENLSB0AA822001 - CAN Communication System Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA822001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
CAN Communication System Circuit Diagram
[a] to [v]:
CAN communication line (linked with diagnosis flows [a] to [v] of “Diagnosis Flow Selection Table”)
8.
P/S control module
17.
DC/DC converter
[w]:
Connector view
9.
Combination meter
18.
Auxiliary power module (lithium-ion battery)
1.
CAN driver
10.
SDM
19.
ISG
2.
DLC
11.
Lighting and turn signal switch
20.
J/C (G307)
3.
Blind spot monitor control module (main) (blind spot monitor model)
12.
Sonar control module
21.
J/C (L349 / L350)
4.
Central gateway control module
13.
BCM
22.
J/C (E346 / E347)
5.
Dual sensor brake support control module (DSBS model)
14.
RBS control module (DSBS model)
23.
J/C (E348 / E349)
6.
TPMS control module
15.
ESP ® control module
24.
J/C (L347 / L348)
7.
Headlight auto leveling control module
16.
ECM

---

## AENLSB0AA823001 - CAN Communication System Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA823001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
CAN Communication System Component Location
The figure shows LHD. For RHD, parts with (*) are installed at the opposite side.
1.
ECM
9.
Blind spot monitor control module (main) (blind spot monitor model)
17.
BCM
2.
Dual sensor brake support control module (DSBS model)
10.
Combination meter
18.
J/C (E346 / E347)
3.
ESP ® control module
11.
Lighting and turn signal switch
19.
J/C (E348 / E349)
4.
J/C (L349 / L350)
12.
P/S control module
20.
DLC
5.
ISG
13.
J/C (G307)
21.
SDM
6.
RBS control module (DSBS model)
14.
Central gateway control module
22.
DC/DC converter
7.
J/C (L347 / L348)
15.
TPMS control module
23.
Auxiliary power module (lithium-ion battery)
8.
Sonar control module
16.
Headlight auto leveling control module

---

## AENLSB0AA824001 - CAN Communication Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA824001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
CAN Communication Check
Check equipment of vehicle being serviced as well as control modules and sensors connected to CAN communication line.
Using SUZUKI scan tool, check the following points.
The system that status “Found” is not displayed on “Vehicle Health” screen.
Control modules shown on screen of “Communication Bus Check”.
CAN-DTC(s) detected by “Communication Bus Check” and “DTC”.
“Communication Bus Check” function is connected to CAN communication bus of diagnosing vehicle and, control module(s) and sensor(s) which cannot detect CAN communication are indicated.
Therefore, a status without any indication on screen is normal.
SUZUKI scan tool (Suzuki SDT-II)
Condition
Action
Reference
All of the following conditions are met.
All systems indicate “Found” in “Vehicle Health” screen.
All of control modules and sensors are not indicated in “Communication Bus Check”. (Nothing indicated on screen)
CAN-DTC cannot be detected.
Normal
—
Any of the following conditions is met.
There is a system(s) that “Found” is not indicated in “Vehicle Health” screen.
There is control module(s) and/or sensor(s) which are indicated in “Communication Bus Check”.
CAN-DTC is detected in either system.
Check all of the control modules and sensors connected with CAN communication system for the following points. If any abnormality is found, repair it.
Power supply (battery power source, ignition power source and fuse) and ground circuit.
Connection and contact of terminal(s).
Clear DTC.
Start the engine and check DTC while idling. If check result is OK, intermittent poor contact of connector or ground circuit is assumed. If malfunction is not resolved, check the following points.
—
“Control Module Bus Off” is detected in either of system (current DTC)
Perform “Troubleshooting for Communication Bus Off”.
Only “Lost Communication” is detected in either of system (current DTC)
Perform “Troubleshooting for Lost Communication”.
No communication with central gateway control module.
All of status is not shown as “Found” in “Vehicle Health” screen.
Check if SUZUKI scan tool is communicable by connecting to another vehicle.
—
Perform “Troubleshooting for Communication Bus Off”.

---

## AENLSB0AA824002 - CAN DTC (Lost Communication and Communication Bus Off) Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA824002.xml
Tree scopes: unscoped
Outgoing references: none

Content:
CAN DTC (Lost Communication and Communication Bus Off) Table
DTC
DTC name
Detecting condition
ECM
U0073
Control Module Communication Bus Off
ECM fails to transmit and receive the data via CAN for specified time continuously.
U0074
Control Module Communication Bus “B” Off
ECM fails to transmit and receive the data via CAN for specified time continuously.
U0121
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0131
Lost Communication With Power Steering Control Module
Receiving error of the data from P/S control module via CAN for specified time continuously.
U0140
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U0151
Lost Communication With Restraints Control Module
Receiving error of the data from SDM via CAN for specified time continuously.
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
U0298
Lost Communication With DC/DC Converter Control Module “A”
Receiving error of the data from DC/DC converter via CAN for specified time continuously.
U108A
Lost Communication With RBS Control Module
Receiving error of the data from RBS control module via CAN for specified time continuously.
U108C
Lost Communication With ISG
Receiving error of the data from ISG via CAN for specified time continuously
U1092
Lost Communication With Auxiliary Power Module
Receiving error of the data from auxiliary power module (lithium-ion battery) via CAN for specified time continuously.
U1093
Lost Communication With DSBS Control Module
Receiving error of the data from dual sensor brake support control module via CAN for specified time continuously
ESP ® control module
U0073
Control Module Communication Bus Off
ESP ® control module fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0126
Lost Communication With Steering Angle Sensor Module
Receiving error of the data from lighting and turn signal switch via CAN for specified time continuously.
U0140
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U1082
Lost Communication With ENG A-STOP Control Module
Receiving error of the data from ECM via CAN for specified time continuously.
U108A
Lost Communication With RBS Control Module
Receiving error of the data from RBS control module via CAN for specified time continuously.
U1093
Lost Communication With DSBS Control Module
Receiving error of the data from dual sensor brake support control module via CAN for specified time continuously
BCM
U0073
Control Module Communication Bus Off
BCM fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0121
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0151
Lost Communication With Restraints Control Module
Receiving error of the data from SDM via CAN for specified time continuously.
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
U1082
Lost Communication With ENG A-STOP Control Module
Receiving error of the data from ECM via CAN for specified time continuously.
U108B
Lost Communication With Lighting and Turn Signal Switch
Receiving error of the data from lighting and turn signal switch via CAN for specified time continuously.
U1093
Lost Communication With DSBS Control Module
Receiving error of the data from dual sensor brake support control module via CAN for specified time continuously
Combination meter
U0073
Control Module Communication Bus Off
Combination meter fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0121
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0127
Lost Communication With TPMS Control Module
Receiving error of the data from TPMS control module via CAN for specified time continuously.
U0131
Lost Communication With Power Steering Control Module
Receiving error of the data from P/S control module via CAN for specified time continuously.
U0140
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U0151
Lost Communication With Restraints Control Module
Receiving error of the data from SDM via CAN for specified time continuously.
U108A
Lost Communication With RBS Control Module
Receiving error of the data from RBS control module via CAN for specified time continuously.
U1093
Lost Communication With DSBS Control Module
Receiving error of the data from dual sensor brake support control module via CAN for specified time continuously
P/S control module
U0073
Control Module Communication Bus Off
P/S control module fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0121
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0126
Lost Communication With Steering Angle Sensor Module
Receiving error of the data from lighting and turn signal switch via CAN for specified time continuously.
U0140
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
U1082
Lost Communication With ENG A-STOP Control Module
Receiving error of the data from ECM via CAN for specified time continuously.
U1093
Lost Communication With DSBS Control Module
Receiving error of the data from dual sensor brake support control module via CAN for specified time continuously
Headlight auto leveling control module
U0073
Control Module Communication Bus Off
Headlight auto leveling control module fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
TPMS control module
U0073
Control Module Communication Bus Off
TPMS control module fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0121
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0140
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
RBS control module (DSBS model)
U0073
Control Module Communication Bus Off
RBS control module fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0121
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0126
Lost Communication With Steering Angle Sensor Module
Receiving error of the data from lighting and turn signal switch via CAN for specified time continuously.
U0140
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
U1082
Lost Communication With ENG A-STOP Control Module
Receiving error of the data from ECM via CAN for specified time continuously.
U1093
Lost Communication With DSBS Control Module
Receiving error of the data from dual sensor brake support control module via CAN for specified time continuously
Dual sensor brake support control module (DSBS model)
U0073
Control Module Communication Bus Off
Dual sensor brake support control module fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0121
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0126
Lost Communication With Steering Angle Sensor Module
Receiving error of the data from lighting and turn signal switch via CAN for specified time continuously.
U0131
Lost Communication With Power Steering Control Module
Receiving error of the data from P/S control module via CAN for specified time continuously.
U0140
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
ISG
U0073
Control Module Communication Bus Off
ISG fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
Auxiliary power module (lithium-ion battery)
U0073
Control Module Communication Bus Off
Auxiliary power module (lithium-ion battery) fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
DC/DC converter
U0073
Control Module Communication Bus Off
DC/DC converter fails to transmit and receive the data via CAN for specified time continuously.
U0100
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
Blind spot monitor control module (main) (blind spot monitor model)
U0073-88
Control Module Communication Bus Off
Blind spot monitor control module (main) fails to transmit and receive the data via CAN for specified time continuously.
U0100-87
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0121-87
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0126-87
Lost Communication With Steering Angle Sensor Module
Receiving error of the data from lighting and turn signal switch via CAN for specified time continuously.
U0140-87
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U0155-87
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
Sonar control module
U0073-88
Control Module Communication Bus Off
Sonar control module fails to transmit and receive the data via CAN for specified time continuously.
U0121-87
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0126-87
Lost Communication With Steering Angle Sensor Module
Receiving error of the data from lighting and turn signal switch via CAN for specified time continuously.
U0155-87
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
Lighting and turn signal switch
U0073
Control Module Communication Bus Off
Lighting and turn signal switch fails to transmit and receive the data via CAN for specified time continuously.
U0121
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0140
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U0155
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
SDM
U0073-88
Control Module Communication Bus Off
SDM fails to transmit and receive the data via CAN for specified time continuously.
Central gateway control module
U0073-88
Control Module Communication Bus Off
Central gateway control module fails to transmit and receive the data via CAN for specified time continuously.
U0075-88
Control Module Communication Bus “C” Off
Central gateway control module fails to transmit and receive the data via CAN for specified time continuously.
U0077-88
Control Module Communication Bus “E” Off
Central gateway control module fails to transmit and receive the data via CAN for specified time continuously.
U0100-87
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0121-87
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0126-87
Lost Communication With Steering Angle Sensor Module
Receiving error of the data from lighting and turn signal switch via CAN for specified time continuously.
U0140-87
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U0151-87
Lost Communication With Restraints Control Module
Receiving error of the data from SDM via CAN for specified time continuously.
U0155-87
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
U1096-87
Lost Communication With Blind Spot Monitor Control Module
Receiving error of the data from blind spot monitor control module (main) via CAN for specified time continuously.

---

## AENLSB0AA824003 - Troubleshooting for Lost Communication
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA824003.xml
Tree scopes: unscoped
Outgoing references:
- AENLSB0AA824003003 -> unresolved | Diagnosis Flow Selection Table
- AENLSB0AA824003001 -> unresolved | Circuit Diagram
- AENLSB0AA824003001 -> unresolved | Circuit Diagram

Content:
Troubleshooting for Lost Communication
Circuit Diagram
[a] to [v]:
CAN communication line (linked with diagnosis flows [a] to [v] of “Diagnosis Flow Selection Table”)
8.
P/S control module
17.
DC/DC converter
[w]:
Connector view
9.
Combination meter
18.
Auxiliary power module (lithium-ion battery)
1.
CAN driver
10.
SDM
19.
ISG
2.
DLC
11.
Lighting and turn signal switch
20.
J/C (G307)
3.
Blind spot monitor control module (main) (blind spot monitor model)
12.
Sonar control module
21.
J/C (L349 / L350)
4.
Central gateway control module
13.
BCM
22.
J/C (E346 / E347)
5.
Dual sensor brake support control module (DSBS model)
14.
RBS control module (DSBS model)
23.
J/C (E348 / E349)
6.
TPMS control module
15.
ESP ® control module
24.
J/C (L347 / L348)
7.
Headlight auto leveling control module
16.
ECM
Diagnosis Procedure
Perform
before performing this flow.
Occurrence of multiple troubles is not included in the scope of this trouble diagnosis.
When “Lost Communication” is detected in any control module, perform diagnosis according to the following procedure.
Connect SUZUKI scan tool to DLC.
Set ignition “ON”.
Select “Communication Bus Check” menu of SUZUKI scan tool and check for communication-disabled control module / sensor.
Based on above check results, select applicable diagnosis flow ([a] to [v]) from
Diagnosis Flow Selection Table
.
Perform troubleshooting according to selected diagnosis flow.
Diagnosis Flow Selection Table
The following control modules are not compatible with “Communication Bus Check” function. However, if system names are indicated on startup screen of “Vehicle Health” on SUZUKI scan tool and the status is indicated “Found”, communication circuit is judged normal. Check related CAN-DTC in each system if necessary.
Central gateway control module
Sonar control module
Headlight auto leveling control module
Even if CAN communication circuit [v] of
Circuit Diagram
is defective, it is possible to communicate with all control modules and sensors in “Communication Bus Check” function. In such a case, check CAN-DTC in ECM, ISG, auxiliary power module (lithium-ion battery) and DC/DC converter.
If an individual control module or sensor fails to communicate, check whether power supply circuit or ground circuit of control module or sensor is in good condition, referring to system circuit diagram, etc. before diagnosing trouble with flow chart.
If it is not possible to select suitable diagnosis flow from “Diagnosis Flow Selection Table” or “two or more diagnosis flows are selectable”, perform
.
Diagnosis flows [a] to [v] link with CAN communication lines [a] to [v] of
Circuit Diagram
.
Communication-disabled control module / sensor
Diagnosis flow
All control modules communicating by CAN
[a]
Dual sensor brake support control module (DSBS model)
TPMS control module
Headlight auto leveling control module
P/S control module
Combination meter
SDM
Lighting and turn signal switch
Sonar control module
BCM
RBS control module (DSBS model)
ESP ® control module
ECM
[b]
P/S control module
Combination meter
SDM
Lighting and turn signal switch
[c]
Combination meter
SDM
Lighting and turn signal switch
[d]
Sonar control module
BCM
RBS control module (DSBS model)
ESP ® control module
ECM
[e]
BCM
RBS control module (DSBS model)
ESP ® control module
ECM
[f]
RBS control module (DSBS model)
ESP ® control module
ECM
[g]
ESP ® control module
ECM
[h]
ECM
[i]
Blind spot monitor control module (main) (blind spot monitor model)
[j]
Dual sensor brake support control module (DSBS model)
[k]
TPMS control module
[l]
Headlight auto leveling control module
[m]
SDM
[n]
Lighting and turn signal switch
[o]
Sonar control module
[p]
RBS control module (DSBS model)
[q]
DC/DC converter
Auxiliary power module (lithium-ion battery)
ISG
[r]
DC/DC converter
[s]
Auxiliary power module (lithium-ion battery)
[t]
ISG
[u]
All control modules and sensors can communicate
[v]
Troubleshooting
Diagnosis flow: [a]
CAN communication check between SUZUKI scan tool and central gateway control module
Perform the following checks.
Check if SUZUKI scan tool is communicable by connecting to another vehicle.
Check DLC power circuit and ground circuit.
Check for proper connection to central gateway control module connector.
Check central gateway control module power supply circuit and ground circuit.
Is check result OK?
Go to Step 2.
Repair or replace defective part.
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60”.
Check for proper connection to DLC and central gateway control module connector.
If connections are OK, check CAN communication circuit [a] between DLC and central gateway control module connector for open circuit.
Is check result OK?
Replace central gateway control module and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [b]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and P/S control module connector “G10”.
Check for proper connection to central gateway control module connector and P/S control module connector.
If connections are OK, check CAN communication circuit [b] between central gateway control module connector and P/S control module connector for open circuit.
Is check result OK?
Replace central gateway control module and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [c]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and P/S control module connector “G10”.
Check for proper connection to central gateway control module connector and P/S control module connector.
If connections are OK, check CAN communication circuit [c] between central gateway control module connector and P/S control module connector for open circuit.
Is check result OK?
Replace P/S control module and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [d]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect P/S control module connector “G10” and combination meter connector “G241”.
Check for proper connection to P/S control module connector and combination meter connector.
If connections are OK, check CAN communication circuit [d] between P/S control module connector and combination meter connector for open circuit.
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
CAN communication circuit resistance check
Connect P/S control module connector.
Measure resistance between “G241-7” and “G241-27” terminals of combination meter connector.
Is resistance 114 – 134 Ω?
Replace combination meter and recheck DTC.
Replace P/S control module and recheck DTC.
Diagnosis flow: [e]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and BCM connector “L01”.
Check for proper connection to central gateway control module connector and BCM connector.
If connections are OK, check CAN communication circuit [e] between central gateway control module connector and BCM connector for open circuit.
Is check result OK?
Check for intermittent trouble.
Repair or replace defective wire harness.
Diagnosis flow: [f]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and BCM connector “L01”.
Check for proper connection to central gateway control module connector and BCM connector.
If connections are OK, check CAN communication circuit [f] between central gateway control module connector and BCM connector for open circuit.
Is check result OK?
Replace BCM and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [g]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect BCM connector “E04” and ESP ® control module connector “E09”.
Check for proper connection to BCM connector and ESP ® control module connector.
If connections are OK, check CAN communication circuit [g] between BCM connector and ESP ® control module connector for open circuit.
Is check result OK?
Replace BCM and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [h]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect BCM connector “E04” and ESP ® control module connector “E09”.
Check for proper connection to BCM connector and ESP ® control module connector.
If connections are OK, check CAN communication circuit [h] between BCM connector and ESP ® control module connector for open circuit.
Is check result OK?
Replace ESP ® control module and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [i]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect ECM connector “E01” and ESP ® control module connector “E09”.
Check for proper connection to ECM connector and ESP ® control module connector.
If connections are OK, check CAN communication circuit [i] between ECM connector and ESP ® control module connector for open circuit.
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
CAN communication circuit resistance check
Connect ESP ® control module connector.
Measure resistance between “E01-59” and “E01-83” terminals of ECM connector.
Is resistance 114 – 134 Ω?
Replace ECM and recheck DTC.
Replace ESP ® control module and recheck DTC.
Diagnosis flow: [j]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect blind spot monitor control module (main) connector “L531” and central gateway control module connector “G60”.
Check for proper connection to blind spot monitor control module (main) connector and central gateway control module connector.
If connections are OK, check CAN communication circuit [j] between blind spot monitor control module (main) connector and central gateway control module connector for open circuit.
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
Central gateway control module terminating resistance check
Connect central gateway control module connector.
Measure resistance between “L531-3” and “L531-7” terminals of blind spot monitor control module (main) connector.
Is resistance 114 – 134 Ω?
Replace blind spot monitor control module (main) and recheck DTC.
Replace central gateway control module and recheck DTC.
Diagnosis flow: [k]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and dual sensor brake support control module connector “K04”.
Check for proper connection to central gateway control module connector and dual sensor brake support control module connector.
If connections are OK, check CAN communication circuit [k] between central gateway control module connector and dual sensor brake support control module connector for open circuit.
Is check result OK?
Replace dual sensor brake support control module and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [l]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and TPMS control module connector “G452”.
Check for proper connection to central gateway control module connector and TPMS control module connector.
If connections are OK, check CAN communication circuit [l] between central gateway control module connector and TPMS control module connector for open circuit.
Is check result OK?
Replace TPMS control module and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [m]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and headlight auto leveling control module connector “G14”.
Check for proper connection to central gateway control module connector and headlight auto leveling control module connector.
If connections are OK, check CAN communication circuit [m] between central gateway control module connector and headlight auto leveling control module connector for open circuit.
Is check result OK?
Replace headlight auto leveling control module and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [n]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect combination meter connector “G241” and SDM connector “G12”.
Check for proper connection to combination meter connector and SDM connector.
If connections are OK, check CAN communication circuit [n] between combination meter connector and SDM connector for open circuit.
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
CAN communication circuit resistance check
Connect combination meter connector.
Disconnect P/S control module connector “G10”.
Measure resistance between “G12-8” and “G12-9” terminals of SDM connector.
Is resistance 114 – 134 Ω?
Replace SDM and recheck DTC.
Replace combination meter and recheck DTC.
Diagnosis flow: [o]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect combination meter connector “G241” and lighting and turn signal switch connector “G144”.
Check for proper connection to combination meter connector and lighting and turn signal switch connector.
If connections are OK, check CAN communication circuit [o] between combination meter connector and lighting and turn signal switch connector for open circuit.
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
CAN communication circuit resistance check
Connect combination meter connector.
Disconnect P/S control module connector “G10”.
Measure resistance between “G144-4” and “G144-5” terminals of lighting and turn signal switch connector.
Is resistance 114 – 134 Ω?
Replace lighting and turn signal switch and recheck DTC.
Replace combination meter and recheck DTC.
Diagnosis flow: [p]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and sonar control module connector “L29”.
Check for proper connection to central gateway control module connector and sonar control module connector.
If connections are OK, check CAN communication circuit [p] between central gateway control module connector and sonar control module connector for open circuit.
Is check result OK?
Replace sonar control module and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [q]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect BCM connector “E04” and RBS control module connector “E490”.
Check for proper connection to BCM connector and RBS control module connector.
If connections are OK, check CAN communication circuit [q] between BCM connector and RBS control module connector for open circuit.
Is check result OK?
Replace RBS control module and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [r]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and DC/DC converter connector “L191”.
Check for proper connection to central gateway control module connector and DC/DC converter connector.
If connections are OK, check CAN communication circuit [r] between central gateway control module connector and DC/DC converter connector for open circuit.
Is check result OK?
Replace central gateway control module and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [s]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and DC/DC converter connector “L191”.
Check for proper connection to central gateway control module connector and DC/DC converter connector.
If connections are OK, check CAN communication circuit [s] between central gateway control module connector and DC/DC converter connector for open circuit.
Is check result OK?
Replace DC/DC converter and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [t]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and auxiliary power module (lithium-ion battery) connector “L196”.
Check for proper connection to central gateway control module connector and auxiliary power module (lithium-ion battery) connector.
If connections are OK, check CAN communication circuit [t] between central gateway control module connector and auxiliary power module (lithium-ion battery) connector for open circuit.
Is check result OK?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [u]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and ISG connector “C75”.
Check for proper connection to central gateway control module connector and ISG connector.
If connections are OK, check CAN communication circuit [u] between central gateway control module connector and ISG connector for open circuit.
Is check result OK?
Replace ISG and recheck DTC.
Repair or replace defective wire harness.
Diagnosis flow: [v]
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect central gateway control module connector “G60” and ECM connector “E01”.
Check for proper connection to central gateway control module connector and ECM connector.
If connections are OK, check CAN communication circuit [v] between central gateway control module connector and ECM connector for open circuit.
Is check result OK?
Replace ECM and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0AA824004 - Troubleshooting for Communication Bus Off
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA824004.xml
Tree scopes: unscoped
Outgoing references:
- AENLSB0AA824004005 -> unresolved | Examples of abnormal waveforms
- AENLSB0AA824004002 -> unresolved | Diagnosis Procedure (Except U0075)
- AENLSB0AA824004016 -> unresolved | Diagnosis Procedure (U0075)

Content:
Troubleshooting for Communication Bus Off
Perform
before performing this flow.
Circuit Diagram
[a] to [v]:
CAN communication line (linked with diagnosis flows [a] to [v] of “Diagnosis Flow Selection Table”)
8.
P/S control module
17.
DC/DC converter
[w]:
Connector view
9.
Combination meter
18.
Auxiliary power module (lithium-ion battery)
1.
CAN driver
10.
SDM
19.
ISG
2.
DLC
11.
Lighting and turn signal switch
20.
J/C (G307)
3.
Blind spot monitor control module (main) (blind spot monitor model)
12.
Sonar control module
21.
J/C (L349 / L350)
4.
Central gateway control module
13.
BCM
22.
J/C (E346 / E347)
5.
Dual sensor brake support control module (DSBS model)
14.
RBS control module (DSBS model)
23.
J/C (E348 / E349)
6.
TPMS control module
15.
ESP ® control module
24.
J/C (L347 / L348)
7.
Headlight auto leveling control module
16.
ECM
Diagnosis Procedure (Except U0075)
When “CAN Communication Bus Off” (except U0075) is detected in any control modules, or when it is not possible to communicate with any control modules / sensors with CAN using SUZUKI scan tool, perform the following procedure.
Connect oscilloscope to combination meter connector when ignition is “OFF”.
Using oscilloscope, observe waveform in the following condition when ignition is “ON”.
Waveform cannot be checked through DLC.
Channel
Probe
Terminal No.
1
+
G241-27
–
Ground
2
+
G241-7
–
Ground
Compare observed signal waveform with waveforms given as “Reference Waveform”. Find the most similar signal waveform and identify the system in trouble and cause of trouble.
Perform troubleshooting.
Diagnosis Procedure (U0075)
When “CAN Communication Bus Off” (U0075-88) is detected in central gateway control module, perform the following procedure.
Connect oscilloscope to central gateway control module when ignition is “OFF”.
Using oscilloscope, observe waveform in the following condition when ignition is “ON”.
Channel
Probe
Terminal No.
1
+
G60-14
–
Ground
2
+
G60-15
–
Ground
Compare observed signal waveform with waveforms given as “Reference Waveform”. Find the most similar signal waveform and identify the system in trouble and cause of trouble.
Perform troubleshooting.
Reference Waveform
Waveforms in “Examples of abnormal waveforms” are selected examples of CAN communication waveforms seen when an abnormal condition occurs. However, these waveforms may not be exactly the same in appearance as observed waveforms. Therefore, to identify an abnormal condition, select the waveform that is most similar to the observed waveform from
Examples of abnormal waveforms
.
Normal waveform
Normal waveform
Description
Reference voltages for both CAN High signal and CAN Low signal are 2.5 V. Waveform of CAN High signal is 2.5 – 3.5 V and that of CAN Low signal is 2.5 – 1.5 V.
[A]:
Ground level of each channel
[D]:
Waveform of channel 1 (CAN High signal)
[B]:
VOLT/DIV of each channel
[E]:
Waveform of channel 2 (CAN Low signal)
[C]:
TIME/DIV of each channel
Examples of abnormal waveforms
Possible cause
Characteristic waveform
Description
CAN High signal
CAN Low signal
Shorted to ground
In case CAN High signal wire is shorted to ground circuit
Both of CAN High signal and CAN Low signal are fixed to GND level (0 V).
In case CAN Low signal wire is shorted to ground circuit
Reference voltages for both of CAN High signal and CAN Low signal are GND level (0 V) and CAN High signal waveform oscillates irregularly.
CAN High signal: Between 0 V and 3.5 V
CAN Low signal: Fixed to 0 V
Opened
In case CAN High signal wire is open
Reference voltages for both CAN High signal and CAN Low signal are 2.5 V and these waveforms oscillate irregularly.
CAN High signal: Between 4.0 V and 1.0 V
CAN Low signal: Between 2.5 V and 1.0 V
In case CAN Low signal wire is open
Reference voltages for both of CAN High signal and CAN Low signal are 2.5 V and these waveforms oscillate irregularly.
CAN High signal: Between 2.5 V and 4.0 V
CAN Low signal: Between 1.0 V and 4.0 V
Shorted to power supply circuit (12 V)
In case CAN High signal wire is shorted to power supply circuit (12 V)
CAN High signal is fixed to 12 V and CAN Low signal is fixed to 11 V.
In case CAN Low signal wire is shorted to power supply circuit (12 V)
CAN High signal is fixed to 11 V and CAN Low signal is fixed to 12 V.
Shorted to power supply circuit (5 V)
In case CAN High signal wire is shorted to power supply circuit (5 V)
Reference voltages for both CAN High signal and CAN Low signal are 4.5 V and these waveforms oscillate irregularly.
CAN High signal: Between 5.5 V and 3.5 V
CAN Low signal: Between 5.0 V and 1.0 V
In case CAN Low signal wire is shorted to power supply circuit (5 V)
Reference voltage is 4.5 V and phase is the same for both CAN High signal and CAN Low signal, and waveforms oscillate irregularly between 6.0 V and 1.0 V.
CAN High signal and CAN Low signal wires are shorted to each other
Both of CAN High signal and CAN Low signal are fixed to near 2.5 V.
Troubleshooting (Except U0075)
Before diagnosing trouble, check equipment of vehicle being serviced as well as control modules and sensors connected to CAN communication line.
Before using scan tool, read its Operator’s Manual to know how to use it.
When performing “Communication Bus Check” using SUZUKI scan tool in this troubleshooting, refer to
.
The following control modules are not compatible with “Communication Bus Check” function. However, if system names are indicated on startup screen of “Vehicle Health” on SUZUKI scan tool and the status is indicated “Found”, communication circuit is judged normal. Check related CAN-DTC in each system if necessary.
Central gateway control module
Sonar control module
Headlight auto leveling control module
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect connectors from all the control modules and sensors communicating by CAN.
Check for proper connection to each CAN communication circuit at all control modules / sensors (communicating by CAN) connectors and DLC.
If connections are OK, check the following points of each CAN communication circuit based on results found in Step 3) of
Diagnosis Procedure (Except U0075)
.
Open circuit
Short to power circuit
Short to ground circuit
Short to CAN communication wire with each other
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
ECM communication check
Connect “E01” connector to ECM.
Measure resistance between the following terminals.
Between “E08-3” and “E08-16” terminals of ESP ® control module connector
Between “G60-2” and “G60-12” terminals of central gateway control module connector
Is resistance 114 – 134 Ω?
Go to Step 3.
Replace ECM and recheck DTC.
ESP® control module communication check
Connect “E09” connector to ESP ® control module.
Measure resistance between “E04-5” and “E04-17” terminals of BCM connector.
Is resistance 114 – 134 Ω?
Go to Step 4.
Replace ESP ® control module and recheck DTC.
BCM communication check
Connect “E04” and “L01” connectors to BCM.
Measure resistance between “G10-7” and “G10-8” terminals of P/S control module connector.
Is resistance 114 – 134 Ω?
Go to Step 5.
Replace BCM and recheck DTC.
P/S control module communication check
Connect “G10” connector to P/S control module.
Measure resistance between “G241-7” and “G241-27” terminals of combination meter connector.
Is resistance 114 – 134 Ω?
Go to Step 6.
Replace P/S control module and recheck DTC.
Combination meter communication check
Connect “G241” connector to combination meter.
Disconnect BCM connector “L01”.
Measure resistance between “G60-20” and “G60-21” terminals of central gateway control module connector.
Is resistance 114 – 134 Ω?
Go to Step 7.
Replace combination meter and recheck DTC.
Other control module and sensor communication check
Perform
.
Is check result OK?
Check for intermittent trouble.
Replace defective control module or sensor and recheck DTC.
Troubleshooting (U0075)
Before diagnosing trouble, check equipment of vehicle being serviced as well as control modules and sensors connected to CAN communication line.
Before using scan tool, read its Operator’s Manual to know how to use it.
CAN communication circuit check
Disconnect negative (–) cable at battery.
Disconnect blind spot monitor control module (main) connector “L531” and central gateway control module connector “G60”.
Check for proper connection to blind spot monitor control module (main) connector and central gateway control module connector.
If connections are OK, check the following points of each CAN communication circuit between blind spot monitor control module (main) connector and central gateway control module connector based on results found in Step 3) of
Diagnosis Procedure (U0075)
.
Open circuit
Short to power circuit
Short to ground circuit
Short to CAN communication wire with each other
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
Central gateway control module terminating resistance check
Connect central gateway control module connector.
Measure resistance between “L531-3” and “L531-7” terminals of blind spot monitor control module (main) connector.
Is resistance 114 – 134 Ω?
Replace blind spot monitor control module (main) and recheck DTC.
Replace central gateway control module and recheck DTC.

---

## AENLSB0AA824005 - Communication Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA824005.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Communication Check
Check communication conditions of central gateway control module first.
The following control modules are not compatible with “Communication Bus Check” function. However, if system names are indicated on startup screen of “Vehicle Health” on SUZUKI scan tool and the status is indicated “Found”, communication circuit is judged normal. Check related CAN-DTC in each system if necessary.
Central gateway control module
Sonar control module
Headlight auto leveling control module
Central Gateway Control Module
Set ignition “OFF”.
Connect “G60” connector to central gateway control module.
Set ignition “ON”.
At startup of SUZUKI scan tool, check “Vehicle Health” screen and “Central gateway control module” and each system already connected to CAN communication are shown on the screen, and their status is “Found”.
If any malfunction is found, replace central gateway control module and recheck DTC.
Dual Sensor Brake Support Control Module (DSBS Model)
Set ignition “OFF”.
Connect “K04” connector to dual sensor brake support control module.
Set ignition “ON”.
Select “Communication Bus Check” menu of SUZUKI scan tool.
Check that status of CAN communication with control modules, sensors and dual sensor brake support control module already connected are shown as normal on scan tool.
If any malfunction is found, replace dual sensor brake support control module and recheck DTC.
TPMS Control Module
Set ignition “OFF”.
Connect “G452” connector to TPMS control module.
Set ignition “ON”.
Select “Communication Bus Check” menu of SUZUKI scan tool.
Check that status of CAN communication with control modules, sensors and TPMS control module already connected are shown as normal on scan tool.
If any malfunction is found, replace TPMS control module and recheck DTC.
Headlight Auto Leveling Control Module
Set ignition “OFF”.
Connect “G14” connector to headlight auto leveling control module.
Set ignition “ON”.
At startup of SUZUKI scan tool, check “Vehicle Health” screen and “Headlight auto leveling control module” and each system already connected to CAN communication are shown on the screen, and their status is “Found”.
If any malfunction is found, replace headlight auto leveling control module and recheck DTC.
SDM
Set ignition “OFF”.
Connect “G12” connector to SDM.
Set ignition “ON”.
Select “Communication Bus Check” menu of SUZUKI scan tool.
Check that status of CAN communication with control modules, sensors and SDM already connected are shown as normal on scan tool.
If any malfunction is found, replace SDM and recheck DTC.
Lighting and Turn Signal Switch
Set ignition “OFF”.
Connect “G144” connector to lighting and turn signal switch.
Set ignition “ON”.
Select “Communication Bus Check” menu of SUZUKI scan tool.
Check that status of CAN communication with control modules, sensors and lighting and turn signal switch already connected are shown as normal on scan tool.
If any malfunction is found, replace lighting and turn signal switch and recheck DTC.
Sonar Control Module
Set ignition “OFF”.
Connect “L29” connector to sonar control module.
Set ignition “ON”.
At startup of SUZUKI scan tool, check “Vehicle Health” screen and “Sonar control module” and each system already connected to CAN communication are shown on the screen, and their status is “Found”.
If any malfunction is found, replace sonar control module and recheck DTC.
RBS Control Module (DSBS Model)
Set ignition “OFF”.
Connect “E490” connector to RBS control module.
Set ignition “ON”.
Select “Communication Bus Check” menu of SUZUKI scan tool.
Check that status of CAN communication with control modules, sensors and RBS control module already connected are shown as normal on scan tool.
If any malfunction is found, replace RBS control module and recheck DTC.
DC/DC Converter
Set ignition “OFF”.
Connect “L191” connector to DC/DC converter.
Set ignition “ON”.
Select “Communication Bus Check” menu of SUZUKI scan tool.
Check that status of CAN communication with control modules, sensors and DC/DC converter already connected are shown as normal on scan tool.
If any malfunction is found, replace DC/DC converter and recheck DTC.
Auxiliary Power Module (Lithium-Ion Battery)
Set ignition “OFF”.
Connect “L196” connector to auxiliary power module (lithium-ion battery).
Set ignition “ON”.
Select “Communication Bus Check” menu of SUZUKI scan tool.
Check that status of CAN communication with control modules, sensors and auxiliary power module (lithium-ion battery) already connected are shown as normal on scan tool.
If any malfunction is found, replace auxiliary power module (lithium-ion battery) and recheck DTC.
ISG
Set ignition “OFF”.
Connect “C75” connector to ISG.
Set ignition “ON”.
Select “Communication Bus Check” menu of SUZUKI scan tool.
Check that status of CAN communication with control modules, sensors and ISG already connected are shown as normal on scan tool.
If any malfunction is found, replace ISG and recheck DTC.

---

## AENLSB0AA824006 - Judgement of Communication Bus Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA824006.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Judgement of Communication Bus Check
When performing “Communication Bus Check” using SUZUKI scan tool, refer to the following table for judgement.
Judgement
Display of communication bus check
Normal
All control modules / sensors (communicating by CAN) are not displayed (Nothing displayed on screen).
Abnormal
All or some control modules / sensors already connected with CAN communication are displayed on screen and communication bus is indicated “Error Detected”.

---

## AENLSB0AA828001 - Special Tool
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA828001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Special Tool
SUZUKI scan tool (Suzuki SDT-II)
—

---

## AENLSB0AA830001 - Precautions for Diagnosing Trouble
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA830001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Precautions > CAN (Central Gateway)
Outgoing references:
- AENLSB0A0000002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0000002.xml | Precautions for Electrical Circuit Service

Content:
Precautions for Diagnosing Trouble
Check that no equipment or option other than original parts is connected onto CAN bus. If any of those items are connected, disconnect it before troubleshooting.
Read
Precautions for Electrical Circuit Service
before troubleshooting central gateway control module, and understand well what is written there.
Clear all DTCs after completing troubleshooting.

---

## AENLSB0AA830002 - Precautions for Replacing Central Gateway Control Module
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA830002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Precautions > CAN (Central Gateway)
Outgoing references: none

Content:
Precautions for Replacing Central Gateway Control Module
When replacing central gateway control module, replace it with a new one.

---

## AENLSB0AA832001 - Central Gateway Control System Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA832001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Schematic and Routing Diagram > CAN (Central Gateway)
Outgoing references: none

Content:
Central Gateway Control System Circuit Diagram
[A]:
ENG A-STOP model
3.
CAN driver
8.
Battery
[B]:
Blind spot monitor model
4.
DLC
9.
“IG1 SIG” fuse
[C]:
Central gateway control module connector (view: [a])
5.
Each control module
10.
IG11 relay
1.
Central gateway control module
6.
Blind spot monitor control module (main)
2.
Power supply circuit
7.
“CONT” fuse

---

## AENLSB0AA833001 - CAN Communication System Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA833001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Component Location > CAN (Central Gateway)
Outgoing references:
- AENLSB0AA813001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA813001.xml | CAN Communication System Component Location:CAN (K14C Model)

Content:
CAN Communication System Component Location
K14C model: Refer to
CAN Communication System Component Location:CAN (K14C Model)
.
.

---

## AENLSB0AA834001 - Central Gateway Control System Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway)
Outgoing references: none

Content:
Central Gateway Control System Check
Step 1: DTC Check
Check DTC stored in central gateway control module memory.
In case that current DTC is detected:
Perform applicable DTC troubleshooting for current DTC and repair or replace faulty parts.
In case that history DTC is detected:
Record DTC and then clear DTC once.
Referring to “circuit diagram” and “trouble area” in applicable DTC troubleshooting, check related parts that are prone to cause intermittent trouble (e.g. wire harness, connector, etc.) for detected history DTC.
Step 2: Final Confirmation Test
Check that the problem symptom has gone and CAN communication system is free from any abnormal conditions. If what has been repaired is related to malfunction DTC, recheck DTC and check that no DTC is indicated.

---

## AENLSB0AA834002 - Central Gateway Control Module Self-Diagnosis Function
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway)
Outgoing references: none

Content:
Central Gateway Control Module Self-Diagnosis Function
Central gateway control module monitors conditions of system components and its circuit when ignition is “ON”. When an abnormal condition in the system occurs, central gateway control module performs controls as follow.
Self-Diagnosis Function
Central gateway control module is equipped with self-diagnosis function that stores DTC for abnormalities detected in central gateway control system. Stored DTC is saved until abnormal condition is corrected.
Central gateway control module does not store history DTC of B1150-16.

---

## AENLSB0AA834003 - DTC Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834003.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway)
Outgoing references: none

Content:
DTC Check
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Read DTC according to instructions displayed on SUZUKI scan tool and print it or write it down. Refer to Operator’s Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and central gateway control module is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
K14C model:
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
K14C model:
Check central gateway control module power supply circuit and ground circuit.
After completing the check, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0AA834004 - DTC Clearance
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway)
Outgoing references: none

Content:
DTC Clearance
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Clear DTC according to instructions displayed on SUZUKI scan tool and print it or write it down. Refer to Operator’s Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and central gateway control module is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
K14C model:
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
K14C model:
Check central gateway control module power supply circuit and ground circuit.
After completing DTC clearance, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0AA834005 - DTC Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834005.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway)
Outgoing references: none

Content:
DTC Table
*: This DTC can be detected as a current DTC but it is not stored as a history DTC.
DTC
DTC name
DTC detecting condition
B1140-04
Control Module Internal Failure 1
Central gateway control module internal failure.
B1141-04
Control Module Internal Failure 2
Central gateway control module internal failure.
B1142-04
External Non-Volatile Memory Error
External non-volatile memory failure.
B1150-16*
Power Source Voltage Too Low
Power supply voltage of central gateway control module is lower than specified value for specified time.
B1150-17
Power Source Voltage Too High
Power supply voltage of central gateway control module is higher than specified value for specified time.
U0073-88
Control Module Communication Bus Off
Central gateway control module fails to transmit and receive the data via CAN for specified time continuously.
U0075-88
Control Module Communication Bus “C” Off
Central gateway control module fails to transmit and receive the data via CAN for specified time continuously.
U0077-88
Control Module Communication Bus “E” Off
Central gateway control module fails to transmit and receive the data via CAN for specified time continuously.
U0100-87
Lost Communication With ECM
Receiving error of the data from ECM via CAN for specified time continuously.
U0101-87
Lost Communication With TCM
Receiving error of the data from TCM via CAN for specified time continuously.
U0121-87
Lost Communication With ABS / ESP ® Control Module
Receiving error of the data from ESP ® control module via CAN for specified time continuously.
U0126-87
Lost Communication With Steering Angle Sensor Module
Receiving error of the data from lighting and turn signal switch via CAN for specified time continuously.
U0140-87
Lost Communication With Body Control Module
Receiving error of the data from BCM via CAN for specified time continuously.
U0151-87
Lost Communication With Restraints Control Module
Receiving error of the data from SDM via CAN for specified time continuously.
U0155-87
Lost Communication With Instrument Panel Cluster (IPC) Control Module
Receiving error of the data from combination meter via CAN for specified time continuously.
U1096-87
Lost Communication With Blind Spot Monitor Control Module
Receiving error of the data from blind spot monitor control module (main) via CAN for specified time continuously.

---

## AENLSB0AA834006 - Scan Tool Data
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834006.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway)
Outgoing references: none

Content:
Scan Tool Data
Central Gateway Control Module
If communication between SUZUKI scan tool and central gateway control module is not possible, perform the following checks:
Check communication condition between PC and VCI using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
K14C model:
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
K14C model:
Check central gateway control module power supply circuit and ground circuit.
Scan tool data
Normal condition / Reference value
Condition
Battery Voltage
13 – 15 V
Engine: Running
IG1 Signal State
ON
Ignition: “ON”
OFF
Other than above condition

---

## AENLSB0AA834007 - DTC B1140-04 / B1141-04 / B1142-04
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834007.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway) || dtc: 10 - Control Systems > Communication System > CAN (Central Gateway) > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1140-04 / B1141-04 / B1142-04
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1140-04: Control Module Internal Failure 1
Central gateway control module internal failure.
Central gateway control module
B1141-04: Control Module Internal Failure 2
Central gateway control module internal failure.
B1142-04: External Non-Volatile Memory Error
External non-volatile memory failure.
DTC Confirmation Procedure
Set ignition “OFF”.
Disconnect negative (–) cable at battery.
Connect negative (–) cable at battery.
Set ignition “ON”.
DTC Troubleshooting
DTC recheck
Disconnect negative (–) cable at battery.
Connect negative (–) cable at battery.
Clear DTC.
Set ignition “ON”.
Is DTC B1140-04, B1141-04 or B1142-04 still detected?
Replace central gateway control module and recheck DTC.
End.

---

## AENLSB0AA834008 - DTC B1150-16 / B1150-17
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834008.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway) || dtc: 10 - Control Systems > Communication System > CAN (Central Gateway) > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A1A14001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14001.xml | Battery Inspection:K14C
- AENLSB0A1A14003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1A14003.xml | Generator Test:K14C

Content:
DTC B1150-16 / B1150-17
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1150-16: Power Source Voltage Too Low
Power supply voltage of central gateway control module is lower than specified value for specified time.
Charging system
Central gateway control module power supply / ground circuit
Central gateway control module
B1150-17: Power Source Voltage Too High
Power supply voltage of central gateway control module is higher than specified value for specified time.
Circuit Diagram
[A]:
Central gateway control module connector (View: [a])
1.
Central gateway control module
5.
“IG1 SIG” fuse
A1:
Central gateway control module power supply circuit
2.
Power supply circuit
6.
IG11 relay
B1:
Central gateway control module ground circuit 1
3.
“CONT” fuse
B2:
Central gateway control module ground circuit 2
4.
Battery
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
Battery and charging system check
Check battery and charging system.
K14C model:
Battery Inspection:K14C
Generator Test:K14C
Is check result OK?
Go to Step 2.
Repair or replace defective part and recheck DTC.
Central gateway control module power supply circuit check
Disconnect negative (–) cable at battery.
Disconnect “G60” connector.
Check for proper terminal connection to “G60” connector.
If connections are OK, check the following points.
Resistance of “A1” circuit: less than 1 Ω
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and each terminal at “G60” connector: infinity
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Central gateway control module ground circuit check
Check that resistance between each of “B1” and “B2” circuits and ground is less than 1 Ω.
Is check result OK?
Replace central gateway control module and recheck DTC.
Repair or replace defective wire harness.

---

## AENLSB0AA834009 - DTC U0073-88
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834009.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway) || dtc: 10 - Control Systems > Communication System > CAN (Central Gateway) > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814004.xml | Troubleshooting for Communication Bus Off:CAN (K14C Model)

Content:
DTC U0073-88
K14C model: Refer to
Troubleshooting for Communication Bus Off:CAN (K14C Model)
.
.

---

## AENLSB0AA834010 - DTC U0075-88
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834010.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway) || dtc: 10 - Control Systems > Communication System > CAN (Central Gateway) > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814004.xml | Troubleshooting for Communication Bus Off:CAN (K14C Model)

Content:
DTC U0075-88
K14C model: Refer to
Troubleshooting for Communication Bus Off:CAN (K14C Model)
.
.

---

## AENLSB0AA834011 - DTC U0100-87
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834011.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway) || dtc: 10 - Control Systems > Communication System > CAN (Central Gateway) > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0100-87
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0AA834012 - DTC U0101-87
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834012.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway) || dtc: 10 - Control Systems > Communication System > CAN (Central Gateway) > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0101-87
Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.

---

## AENLSB0AA834013 - DTC U0121-87
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834013.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway) || dtc: 10 - Control Systems > Communication System > CAN (Central Gateway) > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0121-87
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0AA834014 - DTC U0126-87
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834014.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway) || dtc: 10 - Control Systems > Communication System > CAN (Central Gateway) > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0126-87
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0AA834015 - DTC U0140-87
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834015.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway) || dtc: 10 - Control Systems > Communication System > CAN (Central Gateway) > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0140-87
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0AA834016 - DTC U0151-87
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834016.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway) || dtc: 10 - Control Systems > Communication System > CAN (Central Gateway) > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0151-87
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0AA834017 - DTC U0155-87
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834017.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway) || dtc: 10 - Control Systems > Communication System > CAN (Central Gateway) > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0155-87
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0AA834018 - DTC U1096-87
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834018.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway) || dtc: 10 - Control Systems > Communication System > CAN (Central Gateway) > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U1096-87
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0AA834020 - Inspection of Central Gateway Control Module and Its Circuits
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834020.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway)
Outgoing references:
- AENLSB0AA834020004 -> unresolved | CAN communication signal
- AENLSB0AA834020004 -> unresolved | CAN communication signal
- AENLSB0AA834020004 -> unresolved | CAN communication signal
- AENLSB0AA834020004 -> unresolved | CAN communication signal
- AENLSB0AA834020004 -> unresolved | CAN communication signal
- AENLSB0AA834020004 -> unresolved | CAN communication signal

Content:
Inspection of Central Gateway Control Module and Its Circuits
Voltage and Signal Check
Check Voltage and/or pulse signal of central gateway control module (1) using voltmeter (2) and oscilloscope (3).
Check that battery voltage is 12 V or more.
The voltage of terminal with asterisk (*) cannot be measured by voltmeter because it is pulse signal. Check it with oscilloscope if necessary.
[A]:
Central gateway control module connector (View: [a])
“G60”connector
Terminal
Wire color
Circuit
Normal voltage
Condition
G60-1
BLK
Ground for central gateway control module
Approx.0 V
—
G60-2*
BLU
CAN communication line (high) (ENG A-STOP model)
Refer to
CAN communication signal
.
G60-3
—
—
—
—
G60-4
—
—
—
—
G60-5
—
—
—
—
G60-6
—
—
—
—
G60-7
WHT
CAN communication line (low)
Approx. 2.5 V
Ignition: “ON”
G60-8
RED
CAN communication line (high)
Approx. 2.5 V
Ignition: “ON”
G60-9
—
—
—
—
G60-10
BLU
Power supply for central gateway control
10 – 14 V
—
G60-11
BLK
Ground for central gateway control module
Approx.0 V
—
G60-12*
WHT
CAN communication line (low) (ENG A-STOP model)
Refer to
CAN communication signal
.
G60-13
—
—
—
—
G60-14*
BLK
CAN communication line (high) (blind spot monitor model)
Refer to
CAN communication signal
.
G60-15*
WHT
CAN communication line (low) (blind spot monitor model)
Refer to
CAN communication signal
.
G60-16
—
—
—
—
G60-17
—
—
—
—
G60-18
—
—
—
—
G60-19
—
—
—
—
G60-20*
RED
CAN communication line (high)
Refer to
CAN communication signal
.
G60-21*
WHT
CAN communication line (low)
Refer to
CAN communication signal
.
G60-22
—
—
—
—
G60-23
—
—
—
—
G60-24
YEL
Ignition power supply
10 – 14 V
Ignition: “ON”
0 – 1 V
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
G60-2
G60-14
G60-20
–
G60-1
CAN communication signal (low) (1):
Channel
Probe
Terminal No.
2
+
G60-12
G60-15
G60-21
–
G60-1
Measurement condition
Ignition: “ON”

---

## AENLSB0AA834021 - DTC U0077-88
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA834021.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Diagnostic Information and Procedures > CAN (Central Gateway) || dtc: 10 - Control Systems > Communication System > CAN (Central Gateway) > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC U0077-88
Refer to
.

---

## AENLSB0AA836001 - Central Gateway Control Module Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA836001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Repair Instructions > CAN (Central Gateway)
Outgoing references: none

Content:
Central Gateway Control Module Removal and Installation
LHD
Removal
Disconnect negative (–) cable at battery.
Remove steering column hole cover and instrument panel driver outside garnish.
Remove nut (1), and then remove central gateway control module (2).
Disconnect central gateway control module connector.
Installation
Reverse removal procedure noting the following points.
Insert protrusion (1) of central gateway control module into hole in steering support member.
Tighten central gateway control module nut to special torque.
Central gateway control module nut
a
9.5
0.97
7.0
RHD
Removal
Remove instrument panel from vehicle body.
Remove ventilator duct from instrument panel.
Disconnect central gateway control module connector.
Remove nut (1), and then remove central gateway control module (2).
Installation
Reverse removal procedure noting the following points.
Insert protrusion (1) of central gateway control module into hole in steering support member.
Tighten central gateway control module nut to special torque.
Central gateway control module nut
a
9.5
0.97
7.0

---

## AENLSB0AA837001 - Tightening Torque Specifications
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA837001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Specifications > CAN (Central Gateway)
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
Central gateway control module nut
9.5
0.97
7.0
Reference:
For the tightening torques of fasteners not specified in this page, refer to:
Fasteners Information

---

## AENLSB0AA838001 - Special Tool
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA838001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10H - Communication System > Special Tools and Equipment > CAN (Central Gateway)
Outgoing references: none

Content:
Special Tool
SUZUKI scan tool (Suzuki SDT-II)
—

---

## AENLSB0AA900001 - Precautions for Diagnosing Trouble
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA900001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Precautions for Diagnosing Trouble
Before using SUZUKI scan tool, read its Operator’s Manual to know how to use it.
ENG A-STOP system is controlled by ECM. Therefore, before diagnosing trouble, refer to “Precautions for Diagnosing Trouble” under
.
Clear all DTCs after completing troubleshooting.

---

## AENLSB0AA900002 - Precautions for Replacing ECM
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA900002.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Precautions for Replacing ECM
Refer to “Precautions for Replacing ECM” under
.

---

## AENLSB0AA900003 - Precautions for Replacing Battery
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA900003.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Precautions for Replacing Battery
Refer to
.

---

## AENLSB0AA900004 - Precautions for Handling Auxiliary Power Module (Lithium-Ion Battery)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA900004.xml
Tree scopes: bookmarks: 10 - Control Systems > 10I - Engine Auto Stop Start System > Precautions
Outgoing references:
- AENLSB0AAB00002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB00002.xml | Precautions for Handling Auxiliary Power Module (Lithium-Ion Battery)

Content:
Precautions for Handling Auxiliary Power Module (Lithium-Ion Battery)
Refer to
Precautions for Handling Auxiliary Power Module (Lithium-Ion Battery)
.

---
