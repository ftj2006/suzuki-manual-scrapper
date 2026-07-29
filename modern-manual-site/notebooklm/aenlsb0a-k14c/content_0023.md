# Content Chunk 0023

Plain-text content extracted from source files with relationship metadata.

## AENLSB0A9204012 - DTC B1957 / B1958
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204012.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Diagnostic Information and Procedures || dtc: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A9204012003 -> unresolved | DTC Confirmation Procedure
- AENLSB0A9204012003 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1957 / B1958
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1957: Right Side Headlight Control Circuit / Open
Right side headlight unit diagnosis signal circuit voltage is higher than 1.5 V for specified time.
Headlight unit and/or its circuit
Headlight LO relay
Headlight HI relay
Headlight auto leveling control module
B1958: Left Side Headlight Control Circuit / Open
Left side headlight unit diagnosis signal circuit voltage is higher than 1.5 V for specified time.
Circuit Diagram
[A]:
Headlight auto leveling control module connector (View: [a])
3.
Headlight unit (L)
9.
Headlight LO relay (L)
[B]:
Headlight unit connector (View: [b])
4.
LED control module
10.
To BCM
A1:
Headlight unit (R) diagnosis signal circuit
5.
“H/L HI R” fuse
11.
“H/L HI SOL” fuse
B1:
Headlight unit (L) diagnosis signal circuit
6.
“H/L HI L” fuse
12.
“H/L R” fuse
1.
Headlight auto leveling control module
7.
Headlight HI relay
13.
“H/L L” fuse
2.
Headlight unit (R)
8.
Headlight LO relay (R)
14.
To continuous power supply
DTC Confirmation Procedure
Set ignition “ON”.
Turn lighting switch to headlight position.
DTC Troubleshooting
The following flow shows “DTC B1957: Right Side Headlight Control Circuit / Open”.
Check “DTC B1958” in the same manner as “DTC B1957” referring to the following table.
DTC
Fuse
Relay
Circuit
B1958
“H/L HI SOL” fuse
“H/L L” fuse
“H/L HI L” fuse
Headlight LO relay (L)
Headlight HI relay
“B1” circuit
DTC check
Clear DTC.
Set ignition “OFF”.
Perform
DTC Confirmation Procedure
and recheck DTC.
Is DTC B1957 still detected?
Go to Step 2.
End. (Intermittent trouble.)
Fuse check
Set ignition “OFF”.
Turn lighting switch to OFF position.
Check “H/L HI SOL” fuse, “H/L R” fuse and “H/L HI R” fuse.
Is check result OK?
Go to Step 3.
Replace fuse and check for short circuit to ground.
Headlight relay check
Check headlight LO relay (R) and headlight HI relay.
Is check result OK?
Go to Step 4.
Replace defective relay.
Headlight unit diagnosis signal circuit check
Disconnect “G14” and “E178” connectors.
Check for proper terminal connections to “G14” and “E178” connectors.
If connections are OK, check the following points.
Resistance of “A1” circuit: less than 1 Ω
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and other terminal at “E178” connector: infinity
Voltage of “A1” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
Headlight unit replacement
Replace headlight unit.
Clear DTC.
Set ignition “OFF”.
Perform
DTC Confirmation Procedure
and recheck DTC.
Is DTC B1957 still detected?
Replace headlight auto leveling control module and recheck DTC.
End.

---

## AENLSB0A9204013 - DTC B1967
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204013.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Diagnostic Information and Procedures || dtc: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A9204013002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1967
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1967: Lack of Height Sensor Initial Setting
Rear vehicle height sensor initial setting is not completed.
Rear vehicle height sensor initial setting is not completed
Headlight auto leveling control module
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
DTC check
Is there any DTC(s) other than B1967 detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform
DTC Confirmation Procedure
and recheck DTC.
Is DTC B1967 still detected?
Go to Step 3.
End. (Intermittent trouble.)
Headlight auto leveling system initialization
Initialize headlight auto leveling system.
Check DTC.
Is DTC B1967 still detected?
Replace headlight auto leveling control module and recheck DTC.
End. (Rear vehicle height sensor initial setting was not completed.)

---

## AENLSB0A9204014 - DTC B1970
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204014.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Diagnostic Information and Procedures > Models > K14C || dtc: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A9204014002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1970
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1970: Wheel Speed Sensor and/or Its Circuit Malfunction
Vehicle speed signal is not inputted by CAN communication.
Wheel speed sensor and/or its circuit
Wheel speed sensor encoder
ESP ® control module
ECM
Headlight auto leveling control module
DTC Confirmation Procedure
If you do not select a suitable route and take proper precautions when performing a road test, an accident can occur.
Select a level road with no traffic to minimize the risk of accident.
Perform the test extremely carefully.
Perform the road test with 2 persons, a driver and a tester.
Troubleshoot first unexpected DTCs previously detected in “DTC Confirmation Procedure”.
Drive vehicle at 40 km/h (25 mile/h) constantly for 10 sec. or more.
DTC Troubleshooting
DTC check
Clear DTC.
Set ignition “OFF”.
Perform
DTC Confirmation Procedure
and recheck DTC.
Is DTC B1970 still detected?
Go to Step 2.
End. (Intermittent trouble.)
DTC check
Check DTC in ECM.
K14C model:
Is DTC P0500 detected?
Go to troubleshooting for applicable DTC.
Replace ECM and recheck DTC. If DTC B1970 is still detected, replace headlight auto leveling control module and recheck DTC.
ECM
K14C model:
Headlight auto leveling control module:

---

## AENLSB0A9204015 - DTC B1A80
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204015.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Diagnostic Information and Procedures || dtc: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1A80
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1A80: Lighting and Turn Signal Switch Performance
Lighting and turn signal switch internal failure
Lighting and turn signal switch
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
DTC check
Clear DTC.
Check that ignition is “OFF”.
Set ignition “ON”.
Recheck DTC.
Is DTC B1A80 still detected?
Replace lighting and turn signal switch and recheck DTC.
End. (Intermittent trouble.)

---

## AENLSB0A9204016 - DTC B1A81 / B1A82
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204016.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Diagnostic Information and Procedures > Models > K14C || dtc: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1A81 / B1A82
As each terminal voltage is affected by the battery voltage, check that battery voltage is 12 V or more with ignition “ON”.
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1A81: Battery Voltage Too Low
Power supply circuit voltage from “IG1 SIG” fuse is lower than 8 V for specified time continuously.
Lighting and turn signal switch power supply circuit and/or ground circuit
Lighting and turn signal switch
Charging system
B1A82: Battery Voltage Too High
Power supply circuit voltage from “IG1 SIG” fuse is higher than 16 V for specified time continuously.
Circuit Diagram
[A]:
J/B connector (View: [a])
A2:
Lighting and turn signal switch ground circuit
3.
IG11 relay
[B]:
Lighting and turn signal switch connector (View: [a])
1.
J/B
4.
Lighting and turn signal switch
A1:
Lighting and turn signal switch power supply circuit
2.
“IG1 SIG” fuse
5.
CPU
DTC Confirmation Procedure
Set ignition “ON”.
Start engine, if possible.
DTC Troubleshooting
DTC check
Clear DTC.
Check that ignition is “OFF”.
Set ignition “ON”.
Recheck DTC.
Is DTC B1A81 or B1A82 still detected?
Go to Step 2.
End. (Intermittent trouble.)
Lighting and turn signal switch power supply circuit and ground circuit check
Set ignition “OFF”.
Disconnect “G271” and “G144” connectors.
Check for proper terminal connection to “G271” and “G144” connectors.
If connections are OK, check the following points.
Resistance of “A1” and “A2” circuits: less than 1 Ω
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and other terminal at “G144” connector: infinity
Resistance between “A2” circuit terminal and other terminal at “G144” connector: infinity
Voltage of “A1” and “A2” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 3.
Repair or replace defective wire harness.
Lighting and turn signal switch power supply voltage check
Set ignition “OFF”.
Connect “G271” connector.
Check “A1” circuit voltage with engine speed at 3,000 rpm.
Is voltage 12 – 15 V?
Replace lighting and turn signal switch and recheck DTC.
Check charging system.
K14C model:

---

## AENLSB0A9204017 - DTC B1AA0 / B1AA1 / B1AA2 / B1AA3 / B1AA4
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204017.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Diagnostic Information and Procedures || dtc: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A9204017002 -> unresolved | DTC Confirmation Procedure

Content:
DTC B1AA0 / B1AA1 / B1AA2 / B1AA3 / B1AA4
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1AA0: Lighting Switch Circuit
Any of the following conditions is met.
“AUTO” switch and “HEAD” switch are ON at the same time.
“HEAD” switch is ON even if “CLEARANCE” switch is OFF.
Lighting and turn signal switch
B1AA1: Rear Fog Light Switch Stuck On
Rear fog light switch remains ON for Specified time.
B1AA2: Passing Switch Stuck On
“PASS” switch remains ON for specified time.
B1AA3: Turn Signal Switch Circuit
Turn signal switch (L) and turn signal switch (R) are ON at the same time.
B1AA4: Dimmer/Passing Switch Circuit
Dimmer switch and passing switch are ON at the same time.
DTC Confirmation Procedure
B1AA0
Set ignition “ON”.
Operate lighting switch. (“OFF” → “AUTO” → “CLEARANCE” → “HEAD”)
B1AA1
Set ignition “ON”
Operate rear fog light switch. (OFF → ON)
B1AA2
Set ignition “ON”.
Operate dimmer / passing switch. (“PASS” → “LO” → “HI”)
B1AA3
Set ignition “ON”.
Operate turn signal switch. (left → OFF → right)
B1AA4
Set ignition “ON”.
Operate dimmer / passing switch. (“PASS” → “LO” → “HI”)
DTC Troubleshooting
DTC check
Clear DTC.
Set ignition “OFF”.
Perform
DTC Confirmation Procedure
and then recheck DTC.
Is DTC B1AA0, B1AA2, B1AA3 or B1AA4 still detected?
Replace lighting and turn signal switch and recheck DTC.
End. (Intermittent trouble.)

---

## AENLSB0A9204018 - DTC B1AB0
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204018.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Diagnostic Information and Procedures || dtc: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1AB0
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1AB0: Can Invalid Data from Instrument Panel Cluster (IPC) Control Module
Lighting and turn signal switch received abnormal CAN communication data from combination meter.
Combination meter
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
DTC check
Is there any DTC(s) other than B1AB0 detected?
Go to troubleshooting for applicable DTC.
End. (Intermittent trouble.)
DTC check
Check DTC in combination meter.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace combination meter and recheck DTC.

---

## AENLSB0A9204019 - DTC B1AB1
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204019.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Diagnostic Information and Procedures || dtc: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1AB1
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1AB1: CAN Invalid Data from ABS / ESP ® Control Module
Lighting and turn signal switch detected an abnormal condition in control data transmitted by ESP ® control module through CAN communication.
ESP ® control module
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
DTC check
Is there any DTC(s) other than B1AB1 detected?
Go to troubleshooting for applicable DTC.
End. (Intermittent trouble.)
DTC check
Check DTC in ESP ® control module.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace ESP ® control module and recheck DTC.

---

## AENLSB0A9204020 - DTC U0073
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204020.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Diagnostic Information and Procedures > Models > K14C || dtc: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814004.xml | Troubleshooting for Communication Bus Off:CAN (K14C Model)

Content:
DTC U0073
K14C model: Refer to
Troubleshooting for Communication Bus Off:CAN (K14C Model)
.
.

---

## AENLSB0A9204021 - DTC U0100
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204021.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Diagnostic Information and Procedures > Models > K14C || dtc: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0100
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0A9204022 - DTC U0121
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204022.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Diagnostic Information and Procedures > Models > K14C || dtc: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0121
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0A9204023 - DTC U0140
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204023.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Diagnostic Information and Procedures > Models > K14C || dtc: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0140
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0A9204024 - DTC U0155
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204024.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Diagnostic Information and Procedures > Models > K14C || dtc: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0155
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0A9204025 - Inspection of Headlight Auto Leveling Control Module and Its Circuits (Headlight Auto Leveling Model)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204025.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A9204025004 -> unresolved | CAN communication signal

Content:
Inspection of Headlight Auto Leveling Control Module and Its Circuits (Headlight Auto Leveling Model)
Voltage and Signal Check
Check voltage and/or pulse signal of headlight auto leveling control module using voltmeter and oscilloscope.
Check that battery voltage is 12 V or more.
Voltage of terminal with asterisk (*) cannot be measured by voltmeter because it is pulse signal. Check it with oscilloscope if necessary.
[A]:
Headlight auto leveling control module connector (View: [a])
“G14” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
G14-1
—
—
—
—
G14-2
—
—
—
—
G14-3
LT BLU
Left side headlight unit diagnosis signal circuit
Approx. 4.7 V
Ignition: “ON”
Headlights: ON
Approx. 0 V
Other than above condition
G14-4
BLU
Headlight ON signal
Approx. 0 V
Headlights: ON
Approx. 12 V
Headlights: OFF
G14-5
—
—
—
—
G14-6
—
—
—
—
G14-7
—
—
—
—
G14-8
GRN
Headlight leveling actuator signal circuit
3.7 – 11.9 V
For about 17 seconds after turning on headlights with ignition “ON”
Approx. 0 V
Other than above condition
G14-9
—
—
—
—
G14-10
—
—
—
—
G14-11
—
—
—
—
G14-12
—
—
—
—
G14-13
BLK
Headlight auto leveling control module ground circuit
Approx. 0 V
—
G14-14
YEL
Headlight auto leveling control module power supply circuit
Approx. 12 V
Ignition: “ON”
Approx. 0 V
Other than above condition
G14-15
PNK
Headlight leveling actuator power supply circuit
Approx. 12 V
Ignition: “ON”
Approx. 0 V
Other than above condition
G14-16
BRN
Headlight leveling actuator ground circuit
Approx. 0 V
—
G14-17
—
—
—
—
G14-18
—
—
—
—
G14-19
—
—
—
—
G14-20
LT GRN
Right side headlight unit diagnosis signal circuit
Approx. 4.7 V
Ignition: “ON”
Headlights: ON
Approx. 0 V
Other than above condition
G14-21
RED
Rear vehicle height sensor signal circuit
0.5 – 4.5 V
Ignition: “ON”
Approx. 0 V
Other than above condition
G14-22
—
—
—
—
G14-23
BLU
Rear vehicle height sensor power supply circuit
5 V
Ignition: “ON”
Approx. 0 V
Other than above condition
G14-24
GRN
Rear vehicle height sensor ground circuit
Approx. 0 V
—
G14-25*
RED
CAN communication line (high)
Refer to
CAN communication signal
.
G14-26*
WHT
CAN communication line (low)
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
CAN communication signal (High) (1):
Channel
Probe
Terminal No.
1
+
G14-25
–
G14-13
CAN communication signal (Low) (2):
Channel
Probe
Terminal No.
2
+
G14-26
–
G14-13
Measurement condition
Ignition: “ON”

---

## AENLSB0A9204026 - Inspection of Lighting and Turn Signal Switch and Its Circuits
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204026.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A9204026004 -> unresolved | CAN communication signal

Content:
Inspection of Lighting and Turn Signal Switch and Its Circuits
Voltage and Signal Check
Check voltage and/or pulse signal of lighting and turn signal switch using voltmeter and oscilloscope.
Check that battery voltage is 12 V or more.
Voltage of terminal with asterisk (*) cannot be measured by voltmeter because it is pulse signal. Check it with oscilloscope if necessary.
[A]:
Lighting and turn signal switch connector (View: [a])
“G144” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
G144-1
WHT
Backup power supply
10 – 14 V
—
G144-3
YEL
Power source (IG)
10 – 14 V
Ignition: “ON”
Approx. 0 V
Other than above condition
G144-4*
RED
CAN communication line (high)
Refer to
CAN communication signal
.
G144-5*
WHT
CAN communication line (low)
G144-14
BLK
Ground for lighting and turn signal switch
Approx. 0 V
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
G144-4
–
G144-14
CAN communication signal (low) (2):
Channel
Probe
Terminal No.
2
+
G144-5
–
G144-14
Measurement condition
Ignition: “ON”

---

## AENLSB0A9204A01 - Low-beam or high-beam headlight(s) does not light up
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204A01.xml
Tree scopes: symptoms: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A9206020 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206020.xml | Lighting and Turn Signal Switch Inspection
- AENLSB0AA204029 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204029.xml | Inspection of BCM and Its Circuits

Content:
Low-beam or high-beam headlight(s) does not light up
Low-beam or high-beam headlight(s) does not light up
Faulty system circuit (including relays and fuses)
Repair circuit and replace relay and/or fuse.
Faulty lighting and turn signal switch
Refer to
Lighting and Turn Signal Switch Inspection
.
Faulty BCM
Refer to
Inspection of BCM and Its Circuits
.
Faulty LED headlight
If the above are all normal, replace LED headlight.

---

## AENLSB0A9204A02 - Headlight manual leveling system does not operate (Headlight manual leveling model)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204A02.xml
Tree scopes: symptoms: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A9206024 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206024.xml | Headlight Leveling Switch Inspection (Headlight Manual Leveling Model)
- AENLSB0A9206014 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206014.xml | Headlight Leveling Actuator Inspection

Content:
Headlight manual leveling system does not operate (Headlight manual leveling model)
Headlight manual leveling system does not operate (Headlight manual leveling model)
Faulty system circuit (including relays and fuses)
Repair circuit and replace relay and/or fuse.
Faulty headlight leveling switch
Refer to
Headlight Leveling Switch Inspection (Headlight Manual Leveling Model)
.
Faulty headlight units (including headlight leveling actuators)
Refer to
Headlight Leveling Actuator Inspection
.

---

## AENLSB0A9204A03 - Headlight auto leveling system does not operate (Headlight auto leveling model)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204A03.xml
Tree scopes: symptoms: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A9206017 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206017.xml | Vehicle Height Sensor Inspection (Headlight Auto Leveling Model)
- AENLSB0A9206014 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206014.xml | Headlight Leveling Actuator Inspection
- AENLSB0A9204025 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204025.xml | Inspection of Headlight Auto Leveling Control Module and Its Circuits (Headlight Auto Leveling Model)

Content:
Headlight auto leveling system does not operate (Headlight auto leveling model)
Headlight auto leveling system does not operate (Headlight auto leveling model)
Faulty system circuit (including relays and fuses)
Repair circuit and replace relay and/or fuse.
Faulty rear vehicle height sensor
Refer to
Vehicle Height Sensor Inspection (Headlight Auto Leveling Model)
.
Faulty headlight units (including headlight leveling actuators)
Refer to
Headlight Leveling Actuator Inspection
.
Faulty headlight auto leveling control module
Refer to
Inspection of Headlight Auto Leveling Control Module and Its Circuits (Headlight Auto Leveling Model)
.

---

## AENLSB0A9204A04 - Auto-on headlight system malfunctions
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204A04.xml
Tree scopes: symptoms: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A9206026 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206026.xml | Auto-On Headlight Sensor Inspection
- AENLSB0A9206020 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206020.xml | Lighting and Turn Signal Switch Inspection
- AENLSB0AA204029 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204029.xml | Inspection of BCM and Its Circuits

Content:
Auto-on headlight system malfunctions
Auto-on headlight system malfunctions
Faulty system circuit (including relays and fuses)
Repair circuit and replace relay and/or fuse.
Faulty auto-on headlight sensor
Refer to
Auto-On Headlight Sensor Inspection
.
Faulty lighting and turn signal switch
Refer to
Lighting and Turn Signal Switch Inspection
.
Faulty BCM
Refer to
Inspection of BCM and Its Circuits
.

---

## AENLSB0A9204A05 - Front or rear fog light(s) does not light up (If equipped)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204A05.xml
Tree scopes: symptoms: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A9206020 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206020.xml | Lighting and Turn Signal Switch Inspection
- AENLSB0AA204029 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204029.xml | Inspection of BCM and Its Circuits

Content:
Front or rear fog light(s) does not light up (If equipped)
Front or rear fog light(s) does not light up (If equipped)
Blown bulb(s)
Replace bulb(s).
Faulty system circuit (including relays and fuses)
Repair circuit and replace relay and/or fuse.
Faulty lighting and turn signal switch
Refer to
Lighting and Turn Signal Switch Inspection
.
Faulty BCM
Refer to
Inspection of BCM and Its Circuits
.

---

## AENLSB0A9204A06 - Dome light or luggage compartment light does not light up
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204A06.xml
Tree scopes: symptoms: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A9606008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9606008.xml | Front and Rear Door Switch Inspection
- AENLSB0A9606011 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9606011.xml | Rearend Door Latch On-Vehicle Inspection
- AENLSB0AA204029 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204029.xml | Inspection of BCM and Its Circuits

Content:
Dome light or luggage compartment light does not light up
Dome light or luggage compartment light does not light up
Blown bulb
Replace bulb.
Faulty system circuit (including relays and fuses)
Repair circuit and replace relay and/or fuse.
Faulty door switch
Refer to
Front and Rear Door Switch Inspection
.
Faulty rearend door switch
Refer to
Rearend Door Latch On-Vehicle Inspection
.
Faulty BCM
Refer to
Inspection of BCM and Its Circuits
.

---

## AENLSB0A9204A07 - Clearance light(s), tail light(s) or license plate light(s) does not light up
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204A07.xml
Tree scopes: symptoms: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A9206020 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206020.xml | Lighting and Turn Signal Switch Inspection
- AENLSB0AA204029 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204029.xml | Inspection of BCM and Its Circuits

Content:
Clearance light(s), tail light(s) or license plate light(s) does not light up
Clearance light(s), tail light(s) or license plate light(s) does not light up
Blown bulb(s) (bulb type)
Replace bulb(s).
Faulty system circuit (including relays and fuses)
Repair circuit and replace relay and/or fuse.
Faulty lighting and turn signal switch
Refer to
Lighting and Turn Signal Switch Inspection
.
Faulty BCM
Refer to
Inspection of BCM and Its Circuits
.
Faulty headlight unit / license plate light (LED type) / rear combination light
If the above are all normal, replace headlight unit / license plate light (LED type) / rear combination light.

---

## AENLSB0A9204A08 - Intensity of LED in headlight unit is not changed
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204A08.xml
Tree scopes: symptoms: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A9206020 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206020.xml | Lighting and Turn Signal Switch Inspection
- AENLSB0AA204029 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204029.xml | Inspection of BCM and Its Circuits

Content:
Intensity of LED in headlight unit is not changed
Intensity of LED in headlight unit is not changed
Faulty system circuit (including relays and fuses)
Repair circuit and replace relay and/or fuse.
Faulty lighting and turn signal switch
Refer to
Lighting and Turn Signal Switch Inspection
.
Faulty BCM
Refer to
Inspection of BCM and Its Circuits
.
Faulty headlight unit
If the above are all normal, replace headlight unit.

---

## AENLSB0A9204A09 - Back up light(s) does not light up
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204A09.xml
Tree scopes: symptoms: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A5206008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5206008.xml | Back Up Light Switch Inspection
- AENLSB0A5104050 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A5104050.xml | Inspection of TCM and Its Circuits

Content:
Back up light(s) does not light up
Back up light(s) does not light up
Blown bulb(s)
Replace bulb(s).
Faulty system circuit (including relays and fuses)
Repair circuit and replace relay and/or fuse.
Faulty back up light switch (M/T model)
Refer to
Back Up Light Switch Inspection
.
Faulty TCM (A/T model)
Refer to
Inspection of TCM and Its Circuits
.

---

## AENLSB0A9204A10 - Brake light(s) does not light up
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204A10.xml
Tree scopes: symptoms: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A4106012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4106012.xml | Brake Light Switch Inspection

Content:
Brake light(s) does not light up
Brake light(s) does not light up
Faulty system circuit (including relays and fuses)
Repair circuit and replace relay and/or fuse.
Faulty brake light switch
Refer to
Brake Light Switch Inspection
.
Faulty rear combination light
If the above are all normal, replace rear combination light.

---

## AENLSB0A9204A11 - Turn signal / hazard warning light(s) does not flash
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204A11.xml
Tree scopes: symptoms: 9 - Body, Cab and Accessories > Lighting Systems > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A9206020 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206020.xml | Lighting and Turn Signal Switch Inspection
- AENLSB0A9206022 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206022.xml | Hazard Warning Switch Inspection
- AENLSB0AA204029 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204029.xml | Inspection of BCM and Its Circuits

Content:
Turn signal / hazard warning light(s) does not flash
Turn signal / hazard warning light(s) does not flash
Blown bulb(s)
Replace bulb(s).
Faulty system circuit (including relays and fuses)
Repair circuit and replace relay and/or fuse.
Faulty lighting and turn signal switch
Refer to
Lighting and Turn Signal Switch Inspection
.
Faulty hazard warning switch
Refer to
Hazard Warning Switch Inspection
.
Faulty BCM
Refer to
Inspection of BCM and Its Circuits
.

---

## AENLSB0A9206001 - Headlight Unit Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206001.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references: none

Content:
Headlight Unit Removal and Installation
Touching a hot bulb may cause a burn.
Do not touch any bulb when it is hot.
If you touch the glass surface of a bulb with your bare hand, the oils from your skin can cause the bulb to overheat and burst when the lights are on.
Do not touch any bulb when removing the headlight housing.
The headlight unit bolts are pre-coated with adhesive. If the bolts are reused, they may work loose.
Replace the bolts with new ones.
Bulb(s) can be replaced with headlight unit installed on vehicle.
Headlight and clearance light are LED.
Replace headlight unit assembly if headlight and/or clearance light is defective.
After any of the following services, aim headlights.
Headlight bulb replacement (halogen headlight model)
Headlight unit removal and installation
Removal
Disconnect negative (–) cable at battery.
Remove front bumper.
Disconnect headlight unit connectors.
Remove headlight unit bolts (1) and clip (2) and then remove headlight unit (3).
Remove front bumper holder (4), if necessary.
Remove bulbs, if necessary.
1.
Turn signal light bulb
2.
Turn signal light bulb socket
Installation
Reverse removal procedure noting the following points.
Install headlight unit clip (1).
Tighten new headlight unit bolts (2) in numerical order (“1” – “4”).
3.
Headlight unit

---

## AENLSB0A9206002 - Headlight Aiming and Light Intensity Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206002.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references: none

Content:
Headlight Aiming and Light Intensity Check
Unless otherwise required by local regulations, perform headlight aiming using either of the procedures described below.
After any of the following services, aim headlights.
Headlight bulb replacement (halogen headlight model)
Headlight unit removal and installation
Preparation
Adjust air pressure of all tires to specified value.
Remove any load from vehicle.
Have one person of 75 kg (165 lb) sit on driver seat.
Start engine to fully charge battery.
Aiming Adjustment Screw
Use aiming adjustment screws as shown in figure.
Procedure Using Tester
Follow tester manufacturer’s instructions.
Procedure Using Adjustment Screen
Prepare aiming screen as shown in figure.
“a”:
About 420 mm (16.5 in.)
1.
Light center (Make a ø 10 mm (ø 0.4 in.) hole.)
“b”:
About 350 mm (13.8 in.)
Park vehicle on a level floor with vehicle front facing vertical wall (1).
Put a mark (3) on wall at the same height as headlight center position (2).
Align light center hole made in screen (4) with mark on wall and fix screen with its horizontal edges parallel with floor surface.
[a]:
Headlight center height
Locate vehicle 10 m (33 ft.) away from screen (1) with its front directly against screen ([a] = [b]).
“a”:
10 m (33 ft.)
2.
Vehicle center
Block light from headlight not being adjusted by placing light shield in front of the light.
Turn on headlights (low beams).
Adjust low beam axis as shown in figure.
[A]:
Dark portion
“b”:
130 mm (5.11 in.)
[B]:
Bright portion
1.
Elbow point
[C]:
RHD
2.
Bright / dark boundary
[D]:
LHD
3.
Headlight center
“a”:
100 mm (3.94 in.)

---

## AENLSB0A9206003 - Front Fog Light Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206003.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references: none

Content:
Front Fog Light Removal and Installation
After any of the following services, aim fog lights.
Front fog light bulb replacement
Front fog light removal and installation
Removal
Remove front fender lining.
Disconnect connector from front fog light.
Remove screws (1) and then remove front fog light (2).
Turn socket (3) counterclockwise to remove bulb, if necessary.
Installation
Reverse removal procedure.

---

## AENLSB0A9206004 - Front Fog Light Aiming Adjustment (If Equipped)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206004.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references: none

Content:
Front Fog Light Aiming Adjustment (If Equipped)
After any of the following services, aim fog lights.
Front fog light bulb replacement
Front fog light removal and installation
Adjust air pressure of all tires to specified value.
Have one person sit on driver seat.
Turn on fog lights.
Place screen (1) 3 m (9.8 ft.) ahead of vehicle.
Adjust with aiming screw so that bright / dark boundary is 60 mm (2.4 in.) below fog light center.
“a”:
3 m (9.8 ft.)
3.
Downward adjustment
2.
Upward adjustment

---

## AENLSB0A9206006 - Rear Fog Light Removal and Installation (If Equipped)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206006.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references: none

Content:
Rear Fog Light Removal and Installation (If Equipped)
Removal
Remove screws and clips and then open lower plate (1) of rear bumper downward.
Disconnect connector (1) and clamps (2).
Remove nuts and then remove rear fog light (3).
Turn socket (4) counterclockwise to remove bulb, if necessary.
Installation
Reverse removal procedure.

---

## AENLSB0A9206008 - Door Mirror Turn Signal Light Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206008.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references:
- AENLSB0A9506020 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9506020.xml | Door Mirror Removal and Installation

Content:
Door Mirror Turn Signal Light Removal and Installation
Refer to
Door Mirror Removal and Installation
.

---

## AENLSB0A9206009 - License Plate Light Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206009.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references: none

Content:
License Plate Light Removal and Installation
Non-LED Type
Removal
For replacement of license plate light bulb (1), remove license plate light lens (2).
Remove rear bumper.
Remove license plate light while releasing lock (3).
Remove bulb, if necessary.
Installation
Reverse removal procedure.
LED Type
Removal
License plate light bulb is LED.
Replace license plate light assembly if the bulb is defective.
Remove license plate light (1) while releasing lock (2).
Disconnect license plate light connector.
Installation
Reverse removal procedure.

---

## AENLSB0A9206010 - Rear Combination Light Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206010.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references: none

Content:
Rear Combination Light Removal and Installation
Check stud pin (1) and grommet (2) for damage. If any damage is found, replace damaged part with new one.
Brake light bulb and tail light bulb are LED.
Replace rear combination light assembly if the bulb is defective.
Removal
Remove rear combination light bolts.
Pull rear combination light (3) in arrow direction shown in figure to disengage stud pin and remove rear combination light.
Disconnect rear combination light connector.
4.
Boss
5.
Fastener (if equipped)
Remove bulbs, if necessary.
Installation
Reverse removal procedure.

---

## AENLSB0A9206011 - High Mount Stop Light Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206011.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references: none

Content:
High Mount Stop Light Removal and Installation
High mount stop light bulb is LED.
Replace high mount stop light assembly if the bulb is defective.
Removal
Remove cap (1).
Disconnect high mount stop light connector (1) from high mount stop light harness (2).
Remove screws (1) and pull out high mount stop light (2) from rear spoiler.
Remove adhesive sealer (1) and then remove high mount stop light (2).
Installation
Reverse removal procedure noting the following points.
Wrap rear washer hose (3) and high mount stop light harness (2) at end of the protective tube with adhesive sealer (1).
Insert the wrapped portion into hole in rear spoiler.
Tighten high mount stop light screws to specified torque.
High mount stop light screw
a
2.0
0.20
1.5
Open rearend door and draw out rear washer hose (3) and high mount stop light harness (2) until end of the adhesive sealer (1) becomes flash with spoiler panel as shown in figure.

---

## AENLSB0A9206012 - Dome Light Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206012.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references: none

Content:
Dome Light Removal and Installation
Removal
For replacement of dome light bulb, remove dome light lens (2).
Remove dome light (1) while releasing locks (3).
Disconnect connector from dome light.
Remove bulb, if necessary.
Installation
Reverse removal procedure.

---

## AENLSB0A9206013 - Luggage Compartment Light Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206013.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references: none

Content:
Luggage Compartment Light Removal and Installation
Removal
Remove luggage compartment light (1) pulling it in arrow direction while releasing lock (2).
Disconnect connector from luggage compartment light.
Remove bulb (3), if necessary.
Installation
Reverse removal procedure.

---

## AENLSB0A9206014 - Headlight Leveling Actuator Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206014.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references:
- AENLSB0A9206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206001.xml | Headlight Unit Removal and Installation

Content:
Headlight Leveling Actuator Inspection
Headlight Unit Removal and Installation
Disconnect headlight leveling actuator connector.
Arrange 3 new 1.5 V batteries (1) in series (check that total voltage is 4.5 – 5.0 V), and connect them as shown in figure. Check that reflector of headlight moves downward.
Arrange 5 new 1.5 V batteries (1) in series (check that total voltage is 7.5 – 8.0 V) and connect them as shown in figure. Check that reflector of headlight moves upward.

---

## AENLSB0A9206015 - Headlight Auto Leveling Control Module Removal and Installation (Headlight Auto Leveling Model)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206015.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references: none

Content:
Headlight Auto Leveling Control Module Removal and Installation (Headlight Auto Leveling Model)
After any of the following services, initialize headlight auto leveling system.
Replacement of the headlight auto leveling control module
Replacement of the rear vehicle height sensor
Removal of the rear vehicle height sensor
Removal
Set ignition “OFF”.
Remove audio / navigation unit.
Remove screws and then remove headlight auto leveling control module (1).
Disconnect headlight auto leveling control module connector.
Installation
Reverse removal procedure.

---

## AENLSB0A9206016 - Rear Vehicle Height Sensor Removal and Installation (Headlight Auto Leveling Model)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206016.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references:
- AENLSB0A9206017 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206017.xml | Vehicle Height Sensor Inspection (Headlight Auto Leveling Model)

Content:
Rear Vehicle Height Sensor Removal and Installation (Headlight Auto Leveling Model)
Touching a hot exhaust system component will cause a burn.
Do not perform any service work on the exhaust system until the exhaust system is cool.
Headlight auto leveling control module cannot adjust optical axis of headlights properly.
Do not remove bracket (1), arm (2) and link (3) from rear vehicle height sensor.
After any of the following services, initialize headlight auto leveling system.
Replacement of the headlight auto leveling control module
Replacement of the rear vehicle height sensor
Removal of the rear vehicle height sensor
Removal
Set ignition “OFF”.
Disconnect rear vehicle height sensor connector.
Remove rear vehicle height sensor bolts (1) and then remove rear vehicle height sensor (2).
Installation
Vehicle Height Sensor Inspection (Headlight Auto Leveling Model)
Reverse removal procedure noting the following point.
Tighten rear vehicle height sensor bolts to specified torque in numerical order (“1” – “3”).
Rear vehicle height sensor bolt
a
10
1.0
7.5

---

## AENLSB0A9206017 - Vehicle Height Sensor Inspection (Headlight Auto Leveling Model)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206017.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references: none

Content:
Vehicle Height Sensor Inspection (Headlight Auto Leveling Model)
After any of the following services, initialize headlight auto leveling system.
Replacement of the headlight auto leveling control module
Replacement of the rear vehicle height sensor
Removal of the rear vehicle height sensor
Remove rear vehicle height sensor.
Arrange 3 new 1.5 V batteries (1) in series (check that total voltage is 4.5 – 5.0 V), and connect them as shown in figure.
Move link (1) and arm (2) of rear vehicle height sensor as shown in figure to check output voltages at lowest position [a] and highest position [b]. Also check that output voltage gradually increases when arm and link set is moved slowly from lowest position to highest position. If check result is not as specified, replace rear vehicle height sensor.
[a]:
Lowest position
[c]:
Voltage (V)
[b]:
Highest position

---

## AENLSB0A9206018 - Headlight Auto Leveling System Initialization (Headlight Auto Leveling Model)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206018.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references: none

Content:
Headlight Auto Leveling System Initialization (Headlight Auto Leveling Model)
Bounce vehicle up and down several times to stabilize suspension.
Before headlight auto leveling system initialization, check the following points.
Park vehicle on level surface.
Adjust air pressure of all tires to specified value.
Remove any load from vehicle.
Turn lighting switch to “OFF” position.
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON” and select “Height Sensor Initial Setting” under “Utility” mode of SUZUKI scan tool. Refer to Operator's Manual of SUZUKI scan tool for further details.

---

## AENLSB0A9206019 - Lighting and Turn Signal Switch Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206019.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references:
- AENLSB0A9206020 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206020.xml | Lighting and Turn Signal Switch Inspection
- AENLSB0A4606002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A4606002.xml | Sensor Calibration

Content:
Lighting and Turn Signal Switch Removal and Installation
If you rotate the rotor (1) of the steering angle sensor with lighting and turn signal switch removed, DTC may be set in ESP ® control module even though the steering angle sensor status is normal.
Do not rotate the rotor when removing and installing the lighting and turn signal switch.
Removal
Remove steering wheel.
Remove steering column covers.
Remove contact coil assembly.
Disconnect lighting and turn signal switch connector and wiper and washer switch connector.
Release clamp (5) using pliers or the like, pull up lock (4) and then remove lighting and turn signal switch (1) together with wiper and washer switch (3) from steering column assembly (2).
Remove wiper and washer switch from lighting and turn signal switch.
Installation
Lighting and Turn Signal Switch Inspection
Reverse removal procedure noting the following point.
If lighting and turn signal switch is replaced with new one, perform steering angle sensor calibration referring to
Sensor Calibration
.

---

## AENLSB0A9206020 - Lighting and Turn Signal Switch Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206020.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references:
- AENLSB0A9204006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9204006.xml | Scan Tool Data

Content:
Lighting and Turn Signal Switch Inspection
Refer to
Scan Tool Data
.

---

## AENLSB0A9206021 - Hazard Warning Switch Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206021.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references:
- AENLSB0A9206022 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206022.xml | Hazard Warning Switch Inspection

Content:
Hazard Warning Switch Removal and Installation
Removal
Remove instrument panel upper garnish.
Remove hazard warning switch (2) from instrument panel upper garnish (1) while releasing locks (3).
Installation
Hazard Warning Switch Inspection
Reverse removal procedure.

---

## AENLSB0A9206022 - Hazard Warning Switch Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206022.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references:
- AENLSB0A9206021 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206021.xml | Hazard Warning Switch Removal and Installation

Content:
Hazard Warning Switch Inspection
Hazard Warning Switch Removal and Installation
Check continuity between terminals at each switch position. If check result is not as specified, replace hazard warning switch.
Set tester to diode range when checking continuity between terminals at each switch position.
[A]:
Illumination light
[D]:
Passenger air bag ON light (if equipped)
[B]:
Theft deterrent light
(1).
BCM
[C]:
Passenger air bag OFF light (if equipped)
(2).
SDM
Hazard warning switch continuity
[A]:
Terminal
[B]:
Switch position

---

## AENLSB0A9206023 - Headlight Leveling Switch Removal and Installation (Headlight Manual Leveling Model)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206023.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references:
- AENLSB0A9206024 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206024.xml | Headlight Leveling Switch Inspection (Headlight Manual Leveling Model)

Content:
Headlight Leveling Switch Removal and Installation (Headlight Manual Leveling Model)
Removal
Remove steering column hole cover.
Disconnect headlight leveling switch connector.
Remove headlight leveling switch (1) from instrument panel switch bezel while holding claws (2) pressed in arrow directions.
Installation
Headlight Leveling Switch Inspection (Headlight Manual Leveling Model)
Reverse removal procedure.

---

## AENLSB0A9206024 - Headlight Leveling Switch Inspection (Headlight Manual Leveling Model)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206024.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references:
- AENLSB0A9206023 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206023.xml | Headlight Leveling Switch Removal and Installation (Headlight Manual Leveling Model)

Content:
Headlight Leveling Switch Inspection (Headlight Manual Leveling Model)
Headlight Leveling Switch Removal and Installation (Headlight Manual Leveling Model)
Check resistance between terminals at each switch position.
If check result is not as specified, replace headlight leveling switch.
When measuring resistance between terminals “3” and “5”, set circuit tester in diode mode, because there is a diode between these terminals.
Switch position
Terminal
Resistance (Ω)
—
1 – 4
Approx. 2,200
0
2 – 4
Approx. 440
0.5
2 – 4
Approx. 572
1
2 – 4
Approx. 704
1.5
2 – 4
Approx. 836
2
2 – 4
Approx. 968
2.5
2 – 4
Approx. 1,100
3
2 – 4
Approx. 1,232
3.5
2 – 4
Approx. 1,364
4
2 – 4
Approx. 1,496
4.5
2 – 4
Approx. 1,628
5
2 – 4
Approx. 1,760
—
3 – 5
Continuity

---

## AENLSB0A9206025 - Auto-On Headlight Sensor Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206025.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references:
- AENLSB0A9206026 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206026.xml | Auto-On Headlight Sensor Inspection

Content:
Auto-On Headlight Sensor Removal and Installation
Removal
Remove auto-on headlight sensor (1) from instrument panel while releasing lock (2).
Installation
Auto-On Headlight Sensor Inspection
Reverse removal procedure.

---

## AENLSB0A9206026 - Auto-On Headlight Sensor Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206026.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references:
- AENLSB0A9206025 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206025.xml | Auto-On Headlight Sensor Removal and Installation

Content:
Auto-On Headlight Sensor Inspection
Auto-On Headlight Sensor Removal and Installation
Connect auto-on headlight sensor connector.
Measure voltage between terminals in the following condition.
If measured voltage is out of specification, replace auto-on headlight sensor.
Auto-on headlight sensor voltage specifications
Cover the sensor lens with hand: 0.5 V
Light the sensor lens with incandescent lamp 100 W: 4.1 – 4.6 V

---

## AENLSB0A9206027 - Lighting System Relay Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9206027.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Repair Instructions
Outgoing references:
- AENLSB0AA206009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206009.xml | Control Relay Inspection

Content:
Lighting System Relay Inspection
Refer to
Control Relay Inspection
.

---

## AENLSB0A9207001 - Electric Bulb Capacity
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9207001.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Specifications
Outgoing references: none

Content:
Electric Bulb Capacity
Name
Capacity
Name
Capacity
Headlight
LED
Rear turn signal light
21 W
Front turn signal light
21 W
Rear fog light
21 W
Clearance light
LED
High mount stop light
LED
DRL
LED
License plate light
Bulb
5 W
Front fog light
55 W (H11)
LED
LED
Door mirror turn signal light
LED
Dome light
10 W
Tail light and brake light
LED
Luggage compartment light
5 W
Back up light
16 W

---

## AENLSB0A9207002 - Tightening Torque Specifications
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9207002.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Specifications
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
High mount stop light screw
2.0
0.20
1.5
Rear vehicle height sensor bolt
10
1.0
7.5
Reference:
For the tightening torques of fasteners not specified in this page, refer to:
Fasteners Information

---

## AENLSB0A9208001 - Special Tool
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9208001.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9B - Lighting Systems > Special Tools and Equipment
Outgoing references: none

Content:
Special Tool
SUZUKI scan tool (Suzuki SDT-II)
—

---

## AENLSB0A9301001 - Combination Meter Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9301001.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > General Description > Models > K14C
Outgoing references: none

Content:
Combination Meter Description
Combination meter (1) uses signals (information) sent from each control module by CAN communication to control speedometer, tachometer, ECT meter and indicator light (other than low fuel warning light).
For more information on CAN communication data received by combination meter, refer to “Communication System Description”.
K14C model:
The combination meter is equipped with the oil life monitoring system.
[A]:
K14C model
3.
Tachometer
6.
Information display
[B]:
4.
ECT meter
7.
Indicator selector knob
2.
Speedometer
5.
Fuel meter
8.
Trip meter selector knob
Speedometer
ECM calculates vehicle speed using wheel speed sensor signal from ESP ® control module and sends vehicle speed signal through CAN communication to combination meter.
Tachometer
ECM calculates engine speed using signal from CKP sensor and sends engine speed signal through CAN communication to combination meter. Then combination meter drives tachometer based on engine speed signal.
ECT Meter
ECM calculates engine coolant temperature using signal from ECT sensor and sends engine coolant temperature signal through CAN communication to combination meter. Then combination meter drives ECT meter based on engine coolant temperature signal.
Fuel Meter
Fuel level sensor sends fuel level signal to combination meter. Using this fuel level signal, combination meter calculates current fuel level and drives fuel meter.
When remaining fuel is less than about 5.6 liters (11.83/9.85 US/Imp. pt.) low fuel warning light lights up.
Information Display
The information display indicates various items of information including odometer, selector position (A/T model), trip meter, clock and date, outside air temperature, instantaneous fuel consumption, average fuel consumption, driving range, average speed (if equipped), driving time (if equipped), total idling stop time (if equipped), total idling fuel saved (if equipped), motion (G position history graph), torque and power (if equipped), accelerator and brake (if equipped), boost pressure and engine oil temperature (if equipped), energy flow (if equipped), vehicle speed and brightness of instrument panel.
User Customization Function
When the vehicle is stationary with the ignition “ON”, pushing the indicator selector knob at the combination meter right corner for more than 3 seconds activates the following functions. And, each function can be set by turning the selector knob.
The inputted setting can be shown in turn by pushing the selector knob.
Distance unit
Either “km” or “Miles” indication is selectable.
Fuel economy
Unit of average fuel consumption can be set to “Km/L”, “L/100 km” or “MPG (UK)”.
Language
“English”, “French”, “Spanish”, “German”, “Italian”, “Russian” or “Turkish” can be selected.
Fuel reset
Start of calculation for average fuel consumption can be set to “After refuel”, “With Trip A” or “Manually”.
Temperature
Outside air temperature can be set to “°C” or “°F”.
Clock setting
Time can be set as follows.
“Adjust Clock”: Hour and minute can be adjusted.
“12H/24H”: 12H or 24H mode can be selected.
“Adjust date”: Year, month and day can be set.
Door lock (If equipped)
Door lock setting can be selected from the following modes.
“Door Unlock”: Unlock function for “All doors” or “Driver Door” only is selectable.
“Outside Buz.”: “ON” (answer-back buzzer sounds) or “OFF” is selectable. (keyless push start model)
Lights
“Lane Change”: “ON” (turn signal light blinks 3 times when the switch is turned on) or “OFF” (turn signal light blinks while the switch is turned on) is selectable.
Guide me light (If equipped)
“Guide Me Light”: “To car” and “To home” are available.
“To car”: When “UNLOCK” button of the remote controller is pressed while the lighting switch is positioned in “AUTO” and it is dark outside, front position lights and low-beam headlights are turned on for specified time. The lighting time can be adjusted on information display from OFF to 25 seconds every 5 seconds.
“To home”: When ignition is set to “OFF”, front position lights and low-beam headlights are turned on for specified time. The lighting time can be adjusted on information display from OFF to 30 seconds every 5 seconds.
Antitheft (If equipped)
Security setting in “Mode Select” is selectable between “Mode A” (inactive) and “Mode D” (active) by pushing or turning indicator selector knob.
Oil change (If equipped)
The oil life monitoring system must be reset after changing the engine oil and oil filter.
IS A/C (ISG model)
Engine auto stop setting for auto A/C system can be selected from the following modes.
“Economy”: Engine auto stop will occur more frequently and the stopping time will be longer. This mode is effective for fuel economy.
“Comfort”: Engine auto stop will occur less frequently and the stopping time will be shorter. This mode is effective for more comfortable cabin condition by the air conditioner.
“Standard”: Engine auto stop conditions are just between the “Economy” and “Comfort”.
TPMS (If equipped)
The current tire inflation pressure is indicated on the information display.
Pressure for “Comfort Mode” or “Load Mode” can be selected.
Sign recog. (if equipped)
“ON”: The traffic sign recognition function is activated.
“OFF”: The traffic sign recognition function is not activated.
BSM setting (if equipped)
“BSM ON/OFF”: ON (active) or OFF (inactive) is selectable.
“RCTA ON/OFF”: ON (active) or OFF (inactive) is selectable.
Display item
Information display can be set in the following modes.
“Calendar dis”: “Calendar ON” or “Calendar OFF” is selectable.
“Calendar form”: “DD,MM,YYYY”, “YYYY,MM,DD” or “MM,DD,YYYY” is selectable.
“Fuel eco hist”: “Time disp” or “Drive cycle” is selectable. (average fuel consumption is displayed)
“Motion hist”: “Display ON” (G position history graph is displayed) or “Display OFF” is selectable.
“Idling disp”: “Display ON” (Eco-driving is displayed) or “Display OFF” is selectable.
“Idling warn”: “Display ON” (warning and indicator messages are displayed) or “Display OFF” is selectable.
“Pedal op dsp”: “Display ON” (depressing status of accelerator pedal and brake pedal is displayed) or “Display OFF” is selectable.
“Regen disp”: “Display ON” (deceleration energy regenerating indicator light is displayed) or “Display OFF” is selectable.
Default
All the settings can be reset to default settings.
“No”: Inputted data remain in information display.
“Yes”: Settings are initialized.
[A]:
Push indicator selector knob
[B]:
Turn indicator selector knob
[C]:
Automatic transition

---

## AENLSB0A9301002 - Oil Life Monitoring System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9301002.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > General Description
Outgoing references:
- AENLSB0A9306006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9306006.xml | Oil Life Monitoring System Reset (If Equipped)
- AENLSB0A9304005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304005.xml | Scan Tool Utility Table
- AENLSB0A9306001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9306001.xml | Combination Meter Removal and Installation
- AENLSB0A9306007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9306007.xml | Oil Life Monitoring System Function Setting (If Equipped)

Content:
Oil Life Monitoring System Description
System Description
Engine oil change interval is provided according to the vehicle destination, engine type, engine oil and driving condition like “Normal” or “Severe”. Therefore, failure to follow the appropriate interval may cause damage to the engine.
Select an optimum interval for the vehicle referring to the instructions in the “Periodic Maintenance Schedule” under “INSPECTION AND MAINTENANCE” section of the Owner’s Manual.
Prior to shipment, oil life monitoring system (if equipped) is initialized in the factory. After the shipment, only reset is possible.
Engine oil change intervals are determined by two factors, odometer reading (distance covered) or elapsed time (period) whichever comes first since the last engine oil change. The oil life monitoring system warns the driver that the engine oil needs replacement in accordance with scheduled distance or period.
On the other hand, ECM calculates distance for the oil change monitoring degree of oil deterioration based on the driving pattern and transmits the distance information to combination meter. Receiving the information from ECM, combination meter integrates distance and corrects the scheduled distance to shorten.
The oil life monitoring system must be reset before the first delivery of the vehicle to the customer to clear the elapsed time during storage in the dealer.
For details of the reset operation, refer to
Oil Life Monitoring System Reset (If Equipped)
. Once the combination meter starts counting the distance and period, the oil life monitoring system needs to be reset every engine oil change.
The engine oil change intervals can be selected from three types of oil change conditions, “Normal”, “Severe” and “Optional”, and state of the oil change request light can be set in “Active” or “Disabled” using SUZUKI scan tool. Refer to Operator’s Manual of SUZUKI scan tool for further details.
“Normal” and “Severe” can be assigned by the scan tool as follows.
“Normal”: 20,000 km (12,500 miles) or 8,760 h (12 months)
“Severe”: 10,000 km (6,250 miles) or 4,380 h (6 months)
When “Optional” is selected, the engine oil change distance and period can be configured in the preference of the user.
When the oil change request light is set in “Disabled”, the oil change request light goes out and the distance / period counter stops.
For details of the settings, refer to
Scan Tool Utility Table
.
After engine oil change is completed, cumulative distance and period need to be reset regardless of the lighting state of the oil change request light.
The cumulative distance and period cannot be reset even if the battery has been disconnected.
The period while the battery is disconnected is not added to the count.
When combination meter is replaced with a new one, cumulative distance and period are reset. For details of the settings, refer to
Combination Meter Removal and Installation
.
Oil life monitoring system
Operation
Reset
Distance / Period starts counting from zero, but distance / period before resetting are stored.
Function Setting
Oil Change Interval: Normal / Severe / Optional can be set in the preference of the user.
For detail, refer to
Oil Life Monitoring System Function Setting (If Equipped)
.
Flow chart from initialization to reset
Oil Change Request Light Operation
When the engine oil change is due, “CHANGE ENGINE OIL” is indicated on the information display (1) in the combination meter.
The indication operates as follows depending on the setting and condition.
Oil life monitoring system initialization
Function of oil change request light
Oil change interval
Information display
Complete
Disabled
—
—
Active
Not reached
—
Reached

---

## AENLSB0A9302001 - Combination Meter Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9302001.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Schematic and Routing Diagram
Outgoing references: none

Content:
Combination Meter Circuit Diagram
[A]:
A/T model
6.
Speedometer
15.
Fuel level sensor
[B]:
If equipped
7.
Tachometer
16.
P/S control module
[C]:
DSBS model
8.
Fuel meter
17.
SDM
[D]:
TPMS model
9.
ECT meter
18.
Lighting and turn signal switch
1.
“DOME2” fuse
10.
Combination meter
19.
Bulb illumination signal
2.
“MTR” fuse
11.
LCD
20.
LED illumination signal
3.
Buzzer
12.
Trip switch
21.
Hazard switch
4.
Voltage regulator circuit
13.
Mode switch
22.
Steering switch
5.
CPU
14.
CAN driver

---

## AENLSB0A9304001 - Combination Meter Diagnosis Function Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304001.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures
Outgoing references: none

Content:
Combination Meter Diagnosis Function Description
SUZUKI scan tool provides the following functions about the combination meter.
DTC check:
DTC clearance:
DTC list display:
Parameter display:
Active tests:

---

## AENLSB0A9304002 - DTC Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304002.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures > Models > K14C
Outgoing references: none

Content:
DTC Table
DTC
DTC name
DTC detecting condition
Fail-safe
B1802
Power Source Voltage Too Low
Voltage across “MTR” fuse is less than lower limit voltage (8.0 V) for specified or longer time.
—
B1810
Fuel Level Sensor Circuit / Open
Fuel level signal has not been input for specified or longer time.
—
B1811
Fuel Level Sensor Circuit / Short
Fuel level signal circuit voltage is lower than specified value for specified time.
—
B1820
Internal Control Module EEPROM Error
Memory in combination meter is faulty.
—
B1840
Vehicle Speed Invalid Data
Combination meter received abnormal vehicle speed data from ECM.
—
B1841
Outside Air Temperature Invalid Data
Combination meter received abnormal outside air temperature data from BCM.
—
B1842
Fuel Consumption Invalid Data
Combination meter received abnormal fuel consumption data from ECM.
—
U0073
Control Module Communication Bus Off
Refer to “CAN DTC (Lost Communication and Communication Bus Off) Table” in Section 10H.
K14C model:
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
U0127
Lost Communication With TPMS Control Module
—
U0131
Lost Communication With Power Steering Control Module
Refer to “CAN DTC (Lost Communication and Communication Bus Off) Table” in Section 10H.
K14C model:
—
U0140
Lost Communication With Body Control Module
—
U0151
Lost Communication With Restraints Control Module
—
U108A
Lost Communication With RBS Control Module
—
U1093
Lost Communication with DSBS
—

---

## AENLSB0A9304003 - Scan Tool Data
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304003.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures > Models > K14C
Outgoing references: none

Content:
Scan Tool Data
Combination Meter
If communication between SUZUKI scan tool and combination meter is not possible, perform the following checks:
Check communication condition between PC and VCI using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
K14C model:
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
K14C model:
Check central gateway control module power supply circuit and ground circuit.
Check combination meter power circuit and ground circuit.
Scan tool data
Normal condition / Reference value
Condition
Battery voltage
10 – 14 V
Engine: Running
Oil Change Request Light
Active / Disabled
Oil change request light is selectable between “Active” and “Disabled”.
Idling Stop Fuel Conservation / Duration
ON / OFF
Idling Stop Fuel Conservation / Duration is selectable between “ON” and “OFF”.
Oil Change Conditions
Normal
Oil change interval is set in “Normal”.
Severe
Oil change interval is set in “Severe”.
Optional
Oil change interval is set in “Optional”.
Distance from Oil Change Request Light Reset
—
Oil change distance interval is not set.
XX,XXX km
This shows present distance from reset of oil change request light.
Period from Oil Change Request Light Reset
—
Oil change period interval is not set.
XXXX days
This shows present elapsed time (period) from reset of oil change request light.

---

## AENLSB0A9304004 - Scan Tool Active Test
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304004.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures
Outgoing references: none

Content:
Scan Tool Active Test
Active control is possible for the following items using active test function of SUZUKI scan tool.
Test item
Test content
ECT Meter (Sweep)
Water temperature meter is forcedly operated from MIN to MAX.
Fuel Meter (Sweep)
Fuel meter is forcedly operated from MIN to MAX.
Tachometer (Sweep)
Tachometer is forcedly operated from MIN to MAX.
Speedometer (Sweep)
Speedometer is forcedly operated from MIN to MAX.
ECT Meter (Direct)
Water temperature meter is forcedly operated to specified level.
Fuel Meter (Direct)
Fuel meter is forcedly operated to specified level.
Tachometer (Direct)
Tachometer is forcedly operated to specified level.
Speedometer (Direct)
Speedometer is forcedly operated to specified level.
Illumination
Information display can be illuminated in white, amber or red color.
Color Pattern
With “Color ON” command, color pattern can be indicated on information display in all-dot.
Warning Buzzer
Buzzer in combination meter is forcedly operated.

---

## AENLSB0A9304005 - Scan Tool Utility Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304005.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures
Outgoing references: none

Content:
Scan Tool Utility Table
SUZUKI scan tool has setting change function of combination meter as follows. For details of SUZUKI scan tool, refer to its Operator's Manual.
Item
Setting
Description
Meter Configuration
Idling Stop Fuel Conservation /Duration
ON / OFF
Idling Stop Fuel Conservation /Duration is selectable between “ON” and “OFF”.
Oil Change Request Light Reset
—
Cumulative distance and period can be reset.
Oil Change Request Light Configuration
Oil Change Request Light
Active / Disabled
Oil change request light is selectable between “Active” and “Disabled”.
Oil Change Condition
Normal / Severe / Optional
Oil change interval is selectable between “Normal”, “Severe” and “Optional”.
Oil Change Distance Condition
2,500 – 30,000 km
When oil change interval is set in “Optional”, oil change distance interval is selectable between 2,500 and 20,000km (1,500 and 12,500 miles) in 500 km (300 miles) increments.
Oil Change Period Condition
90 – 1,095 days
When oil change interval is set in “Optional”, oil change period interval is selectable between 90 and 1,095 days in 5-day increments.

---

## AENLSB0A9304006 - Combination Meter Diagnosis
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304006.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures
Outgoing references: none

Content:
Combination Meter Diagnosis
Combination meter operates meters, indicators and information display according to input signals and CAN communication data from control modules. Conduct diagnosis as follows if there are problems with combination meter.
Check combination meter power supply and ground circuits.
Using SUZUKI scan tool, check every DTC of all systems concerned.
If any DTC is found during inspection in Step 2), go to applicable DTC troubleshooting referring to the section for the system (control module) in question.
If any of troubles has occurred independently even though display shows no abnormal DTC during inspection in Step 2), check concerned item according to instructions given below.
When checking each circuit, perform diagnosis of the circuit referring to “Circuit Diagram”.

---

## AENLSB0A9304007 - DTC B1802
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304007.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures > Models > K14C || dtc: 9 - Body, Cab and Accessories > Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1802
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1802: Power Source Voltage Too Low
Voltage across “MTR” fuse is less than lower limit voltage (8.0 V) for specified or longer time.
Combination meter power supply circuit
Combination meter ground circuit
Combination meter
Circuit Diagram
[A]:
Combination meter connector (View: [a])
2.
“MTR” fuse
4.
Voltage regulator circuit
1.
“DOME” fuse
3.
Combination meter
5.
CPU
DTC Troubleshooting
DTC check
Clear DTC.
Check that ignition is “OFF”.
Set ignition “ON”.
Check DTC.
Is DTC B1802 still detected?
Go to Step 2.
Check for intermittent trouble.
Combination meter power supply and ground circuit check
Check combination meter power supply and ground circuits.
Is check result OK?
Go to Step 3.
Repair defective wire harness.
Combination meter power supply voltage check
Check power supply voltage with engine speed at 3,000 rpm.
Is voltage 10 – 15 V?
Replace combination meter and recheck DTC.
Check charging system.
K14C model:

---

## AENLSB0A9304008 - DTC B1810 / B1811
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304008.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures > Models > K14C || dtc: 9 - Body, Cab and Accessories > Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1810 / B1811
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1810: Fuel Level Sensor Circuit / Open
Fuel level signal has not been input for specified or longer time.
Combination meter
Fuel level sensor
Fuel level sensor circuit
B1811: Fuel Level Sensor Circuit / Short
Fuel level signal circuit voltage is lower than specified value for specified time.
Circuit Diagram
[A]:
Combination meter connector (View: [a])
2.
CPU
1.
Combination meter
3.
Fuel level sensor
DTC Troubleshooting
DTC check
Clear DTC.
Check that ignition is “OFF”.
Set ignition “ON”.
Check DTC.
Is DTC B1810 / B1811 still detected?
Go to Step 2.
Check for intermittent trouble.
Fuel level sensor check
Check fuel level sensor.
K14C model:
Is check result OK?
Go to Step 3.
Replace fuel level sensor and recheck DTC.
K14C model:
Fuel level sensor circuit check
Check that ignition is “OFF”.
Disconnect combination meter and fuel level sensor connectors.
Check for proper connection to combination meter and fuel level sensor terminals.
If connections are OK, check circuit between combination meter connector and fuel level sensor for open circuit, short to ground or short to power supply.
Is check result OK?
Replace combination meter and recheck DTC.
Repair defective wire harness and recheck DTC.

---

## AENLSB0A9304009 - DTC B1820
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304009.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures || dtc: 9 - Body, Cab and Accessories > Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1820
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1820: Internal Control Module EEPROM Error
Memory in combination meter is faulty.
Combination meter
DTC Troubleshooting
DTC check
Clear DTC.
Check that ignition is “OFF”.
Set ignition “ON”.
Check DTC.
Is DTC B1820 still detected?
Replace combination meter and recheck DTC.
Check for intermittent trouble.

---

## AENLSB0A9304010 - DTC B1840
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304010.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures > Models > K14C || dtc: 9 - Body, Cab and Accessories > Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1840
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1840: Vehicle Speed Invalid Data
Combination meter received abnormal vehicle speed data from ECM.
Wheel speed sensor
ESP ® control module
ECM
Combination meter
DTC Troubleshooting
DTC check
Clear DTC.
Check that ignition is “OFF”.
Set ignition “ON”.
Check DTC.
Is DTC B1840 still detected?
Go to Step 2.
Check for intermittent trouble.
DTC check
Check DTC in ESP ® control module.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
DTC check
Check DTC in ECM.
K14C model:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace combination meter and recheck DTC.

---

## AENLSB0A9304011 - DTC B1841
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304011.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures || dtc: 9 - Body, Cab and Accessories > Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1841
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1841: Outside Air Temperature Invalid Data
Combination meter received abnormal outside air temperature data from BCM.
Outside air temperature sensor
BCM
Combination meter
DTC Troubleshooting
DTC check
Check DTC in BCM.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace combination meter and recheck DTC.

---

## AENLSB0A9304012 - DTC B1842
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304012.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures > Models > K14C || dtc: 9 - Body, Cab and Accessories > Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1842
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1842: Fuel Consumption Invalid Data
Combination meter received abnormal fuel consumption data from ECM.
ECM
Combination meter
DTC Troubleshooting
DTC check
Check DTC in ECM.
K14C model:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Replace combination meter and recheck DTC.

---

## AENLSB0A9304013 - DTC U0073
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304013.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures > Models > K14C || dtc: 9 - Body, Cab and Accessories > Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC U0073
Refer to “Troubleshooting for Communication Bus Off”.
K14C model:

---

## AENLSB0A9304014 - DTC U0100 / U0101 / U0121 / U0127 / U0131 / U0140 / U0151 / U108A / U1093
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304014.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures > Models > K14C || dtc: 9 - Body, Cab and Accessories > Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC U0100 / U0101 / U0121 / U0127 / U0131 / U0140 / U0151 / U108A / U1093
Refer to “CAN DTC (Lost Communication and Communication Bus Off) Table:” in Section 10H.
K14C model:

---

## AENLSB0A9304015 - Inspection of Combination Meter and Its Circuit
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304015.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A9304015004 -> unresolved | CAN communication signal
- AENLSB0A9304015005 -> unresolved | Fuel level sensor signal
- AENLSB0A9304015006 -> unresolved | Illumination control signal
- AENLSB0A9304015004 -> unresolved | CAN communication signal

Content:
Inspection of Combination Meter and Its Circuit
Voltage and Signal Check
Remove combination meter (with connectors connected).
Check voltage and/or pulse signal using voltmeter and oscilloscope.
Check that battery voltage is 12 V or more.
Outputs from terminals marked with asterisk (*) cannot be measured with voltmeter because they are pulse signals. Use oscilloscope for measuring these outputs.
[A]:
Combination meter connector (View: [a])
“G241” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
G241-1
PNK
Passenger air bag indicator dimmer control (if equipped)
Approx. 12.0 V
Ignition: “ON”
Lighting switch: Other than OFF position
0 V
Ignition: “ON”
Lighting switch: OFF position
G241-2
GRN
Backup power supply
Approx. 12.0 V
Ignition: “OFF”, “ACC” or “ON”
G241-3
YEL
Power supply
Approx. 12.0 V
Ignition: “ON”
G241-5
BLK
GND
0 V
Ignition: Any position
G241-7*
WHT
CAN communication signal (low)
Refer to reference waveform.
CAN communication signal
G241-9*
WHT
CAN communication signal (low)
G241-10*
WHT
CAN communication signal (low)
G241-22*
YEL
Fuel level sensor signal (power supply)
Refer to reference waveform.
Fuel level sensor signal
G241-23
GRY
Ground for fuel level sensor signal (GND)
0 V
Ignition: Any position
G241-24*
PPL
LED illumination signal
Refer to reference waveform.
Illumination control signal
G241-25*
LT GRN
Bulb illumination signal
G241-26
BLK
GND
0 V
Ignition: Any position
G241-27*
RED
CAN communication signal (high)
Refer to reference waveform.
CAN communication signal
G241-29*
RED
CAN communication signal (high)
G241-30*
RED
CAN communication signal (high)
G241-33
GRY
Information switch signal (if equipped)
Approx. 12.0 V
Information switch: ON position
0 V
Information switch: OFF position
Reference Waveform
Oscilloscope display
Shown below is typical waveform display provided by oscilloscope.
Display includes the following types of data:
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
CAN communication signal (high):
Channel
Probe
Terminal No.
1
+
G241-27
G241-29
G241-30
–
G241-5
CAN communication signal (low):
Channel
Probe
Terminal No.
2
+
G241-7
G241-9
G241-10
–
G241-5
Measurement condition
Ignition: “ON”
1.
CAN communication signal (high)
2.
CAN communication signal (low)
Fuel level sensor signal
Channel
Probe
Terminal No.
1
+
G241-22
–
G241-23
Measurement condition
Ignition: “ON”
Fuel: Full
1.
Fuel level sensor signal
Ignition: “ON”
Fuel: Empty
1.
Fuel level sensor signal
Illumination control signal
Channel
Probe
Terminal No.
1
+
G241-24
G241-25
–
G241-5
Measurement condition
Ignition: “ON”
Lighting switch: Other than OFF position
Illumination control: 7th position (Brightest)
1.
Illumination control signal
Ignition: “ON”
Lighting switch: Other than OFF position
Illumination control: 4th position
1.
Illumination control signal
Ignition: “ON”
Lighting switch: Other than OFF position
Illumination control: 1st position (Dimmest)
1.
Illumination control signal

---

## AENLSB0A9306001 - Combination Meter Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9306001.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Repair Instructions
Outgoing references:
- AENLSB0A9304003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304003.xml | Scan Tool Data
- AENLSB0A9304005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304005.xml | Scan Tool Utility Table

Content:
Combination Meter Removal and Installation
When combination meter is replaced with a new one, the oil life monitoring system starts from the initial state. If oil life monitoring system is in operation, check the current distance and period from previous reset of oil change request light shown in the combination meter to be removed and oil change condition displayed in
Scan Tool Data
, and then calculate distance and period for next alert by the oil change request light. After installing new combination meter, select “Optional” in
Scan Tool Utility Table
and set the rest of distance and period for next alert which will be brought by the new combination meter.
For DSBS model, when replacing combination meter, use new one. If used one is installed, DTC could be detected due to mismatch of each registration.
Removal
Disconnect negative (–) cable at battery.
Remove instrument panel center ornament as follows.
Remove glove box (1).
Protect panel and garnish sticking masking tape (1) as shown in figure.
From glove box side, push up and release hook (1) on instrument panel center ornament (2).
[a]:
Vehicle forward
Insert a flat-bladed screwdriver wrapped with masking tape (1) or the like into opening at hook position raised in Step c), pry the instrument panel center ornament (2) open with the tool and release the lower hook.
Insert the resin remover into openings of the instrument panel center ornament (1) in numerical order (“1” – “3”) and release the lower hooks in the same manner as in Step d).
Insert finger into opening of the instrument panel center ornament (1) and remove it in arrow direction.
Remove audio / navigation unit.
Remove steering column hole cover (1).
Remove instrument panel driver outside garnish (1) and instrument panel driver inside garnish (2).
Remove instrument panel cluster panel (1).
Disconnect combination meter connector.
Remove combination meter (2) from instrument panel.
Installation
Reverse removal procedure.

---

## AENLSB0A9306002 - Instrument Panel Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9306002.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Repair Instructions
Outgoing references:
- AENLSB0A9306003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9306003.xml | Instrument Panel Disassembly and Reassembly

Content:
Instrument Panel Removal and Installation
Removal
Disable air bag system.
Disconnect negative (–) cable at battery.
Remove glove box (1).
Remove steering column hole cover (1).
Remove front pillar trims, front side sill scuffs and dash side trims.
Remove steering column assembly.
Remove center console box.
Disconnect instrument panel harness connectors, clamps and inside air temperature sensor aspirator hose from HVAC unit.
Remove claws (2) and hood lock release cable (1).
Disconnect connectors (1), clamps and ground wires (2) as shown in figure.
Disconnect SDM connector (1).
Remove steering support member lower bolt (2).
Remove windshield wiper motor.
Remove steering support member side bolts (1), cowl upper cap (2), cowl upper stiffener bolt (3) and pillar bracket bolt (4).
Check that there is no harness or ground wire connected between instrument panel and vehicle while slightly raising and supporting instrument panel (5).
Remove instrument panel, steering support member and instrument panel harness as assembly.
Installation
Instrument Panel Disassembly and Reassembly
Reverse removal procedure noting the following points.
Do not let cables or wire harnesses be pinched when installing parts.
Tighten steering support member side bolts in specified torque.
Steering support member side bolt
a
23
2.3
17.0
Enable air bag system.

---

## AENLSB0A9306003 - Instrument Panel Disassembly and Reassembly
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9306003.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Repair Instructions
Outgoing references:
- AENLSB0A9306002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9306002.xml | Instrument Panel Removal and Installation

Content:
Instrument Panel Disassembly and Reassembly
Instrument Panel Removal and Installation
Disassembly
Remove combination meter.
For LHD, remove engine switch from instrument panel driver inside garnish.
For RHD, remove engine switch from instrument panel driver outside garnish.
Remove instrument panel upper garnish (1).
Remove center ventilation louver (2).
Remove hazard switch (3) from instrument panel upper garnish.
Remove auto A/C panel.
Disconnect harness clamps from defroster nozzle (1) and demister ducts (2), and then remove defroster nozzle and demister ducts from instrument panel.
Remove ventilator duct (1) from instrument panel.
Remove sunload sensor.
Remove side ventilation louver.
Remove central gateway control module.
Disconnect passenger air bag (inflator) module connector.
Remove instrument panel harness assembly.
Remove the following parts.
Inside air temperature sensor:
Headlight leveling switch (if equipped):
Auto-on headlight sensor:
GPS antenna (if equipped):
USB and AUX socket (if equipped):
Accessory socket:
Parking sensor OFF switch (if equipped):
Dual sensor brake support OFF switch and lane departure warning OFF switch (DSBS model):
ESP ® OFF switch:
ENG A-STOP OFF switch (ISG model):
TPMS control module (if equipped):
Remove instrument main lower panel (1) from steering support member (2).
Remove glove box side covers (1) and glove box upper reinforcement (2) from instrument main lower panel (3).
Remove instrument main upper panel (1) from steering support member (2).
Remove claws, and then remove passenger air bag (inflator) module (3) from instrument main upper panel.
Reassembly
Reverse disassembly procedure noting the following points.
Tighten passenger air bag (inflator) module bolts to specified torque.
Align longitudinal line of instrument panel top silencer (1) with tips of ribs (2) on instrument panel (3).
Cover edge of instrument panel with the silencer by bending and sticking it as shown in figure.
4.
Cowl top panel
5.
Windshield glass

---

## AENLSB0A9306004 - Horn Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9306004.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Repair Instructions
Outgoing references:
- AENLSB0A9306005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9306005.xml | Horn On-Vehicle Inspection

Content:
Horn Removal and Installation
Horn On-Vehicle Inspection
Removal
Remove front bumper, front end upper cover and front end lower cover.
Disconnect horn connector.
Remove horn (1) from front bumper upper member.
Installation
Reverse removal procedure noting the following point.
Tighten horn bolt to specified torque.
Horn bolt
a
21
2.1
15.5

---

## AENLSB0A9306005 - Horn On-Vehicle Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9306005.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Repair Instructions
Outgoing references: none

Content:
Horn On-Vehicle Inspection
Disconnect horn connectors (2) from horn (1).
Check that horn sounds when horn connector is connected to battery positive (+) terminal and battery negative (–) terminal is connected to ground. Replace horn if it does not sound.

---

## AENLSB0A9306006 - Oil Life Monitoring System Reset (If Equipped)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9306006.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Repair Instructions
Outgoing references: none

Content:
Oil Life Monitoring System Reset (If Equipped)
Set ignition “ON”.
Push and hold indicator selector knob (1) for 3 seconds or more so that “Setting mode” is displayed on the information display (2) in the combination meter, and then select “Oil Change” turning the knob.
Turning indicator selector knob, select “Reset OC” and push and hold the knob for a while.
Upon completion of reset, “Successful” is indicated on the information display.

---

## AENLSB0A9306007 - Oil Life Monitoring System Function Setting (If Equipped)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9306007.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Repair Instructions
Outgoing references:
- AENLSB0A9304005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9304005.xml | Scan Tool Utility Table

Content:
Oil Life Monitoring System Function Setting (If Equipped)
Refer to
Scan Tool Utility Table
.

---

## AENLSB0A9307001 - Tightening Torque Specifications
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A9307001.xml
Tree scopes: bookmarks: 9 - Body, Cab and Accessories > 9C - Instrumentation / Driver Info. / Horn > Specifications
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
Steering support member side bolt
23
2.3
17.0
Horn bolt
21
2.1
15.5
Reference:
For the tightening torques of fasteners not specified in this page, refer to:
Fasteners Information

---
