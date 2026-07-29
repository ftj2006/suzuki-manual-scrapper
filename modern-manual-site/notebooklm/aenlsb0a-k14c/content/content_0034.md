# Content Chunk 0034

Plain-text content extracted from source files with relationship metadata.

## AENLSB0AAB04019 - Inspection of Auxiliary Power Module (Lithium-Ion Battery) and Its Circuits
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04019.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAB04019004 -> unresolved | CAN communication signal
- AENLSB0AAB04019004 -> unresolved | CAN communication signal

Content:
Inspection of Auxiliary Power Module (Lithium-Ion Battery) and Its Circuits
If you connect a voltmeter or an ohmmeter directly to the auxiliary power module (lithium-ion battery) terminals with the auxiliary power module (lithium-ion battery) connectors disconnected, you can damage the auxiliary power module (lithium-ion battery).
Never connect a voltmeter or an ohmmeter directly to any terminal on the auxiliary power module (lithium-ion battery) with the auxiliary power module (lithium-ion battery) connectors disconnected.
Terminal Voltage Check for Auxiliary Power Module (Lithium-Ion Battery)
As each terminal voltage is affected by battery voltage, check that it is 12 V or more when ignition is “ON”.
Voltage with asterisk (*) cannot be measured using voltmeter because it is pulse signal. Check it using oscilloscope.
[A]:
Auxiliary power module (lithium-ion battery) connector (View: [a])
“L196” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
L196-1
PPL
Power supply for auxiliary power module (lithium-ion battery)
10 – 14 V
Constantly
L196-2
BLU
Ignition signal circuit
10 – 14 V
Ignition: “ON”
Approx. 0 V
Other than above condition
L196-3*
WHT
CAN communication signal (low)
Refer to
CAN communication signal
.
L196-4*
BLU
CAN communication signal (high)
Refer to
CAN communication signal
.
L196-5
BLK
Ground for auxiliary power module (lithium-ion battery)
Approx. 0 V
—
Reference Waveform
Oscilloscope display
Shown below is typical waveform display provided using oscilloscope.
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
CAN (high) communication signal (1):
Channel
Probe
Terminal No.
1
+
L196-4
–
L196-5
CAN (low) communication signal (2):
Channel
Probe
Terminal No.
2
+
L196-3
–
L196-5
Measurement condition
Ignition: “ON”

---

## AENLSB0AAB04020 - DTC P0A7D / P0C30
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04020.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P0A7D / P0C30
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0A7D: Hybrid/EV Battery Pack State of Charge Low
Discharged state of battery is lower than specified charging rate.
Auxiliary power module (lithium-ion battery)
P0C30: Hybrid/EV Battery Pack State of Charge High
Battery is charged is higher than specified charging rate.
DTC Confirmation Procedure
Run engine at idle speed for 5 min.
Set ignition “OFF” for 3 min.
Set ignition “ON” for 5 min.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ECM:
ISG:
DC/DC converter:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0A7E, P0A7F, P1B04, P1B0C, P1B0D, P1B07, P1B17, P1B1E, P1B1F or P1B20 still detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Go to Step 3.
DTC check
Is there any DTC(s) other than P0A7D or P0C30?
Go to troubleshooting for applicable DTC.
Go to Step 4.
Auxiliary power module (lithium-ion battery), ISG and DC/DC converter check
Check following control modules for proper installation.
Auxiliary power module (lithium-ion battery):
ISG:
DC/DC converter:
Is check result OK?
If P0A7D detected, go to Step 5.
If P0C30 detected, go to Step 6.
If P0A7D detected, repair or replace defective parts, then go to Step 5.
If P0C30 detected, repair or replace defective parts, then go to Step 6.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0A7D still detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Intermittent trouble.
DTC recheck
Clear DTC.
Set ignition “OFF” for 3 hour or more.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0C30 still detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Intermittent trouble.

---

## AENLSB0AAB04021 - DTC P0A7E / P1B04 / P1B0C / P1B0D / P1B17 / P1B1E / P1B1F
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04021.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P0A7E / P1B04 / P1B0C / P1B0D / P1B17 / P1B1E / P1B1F
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0A7E: Hybrid/EV Battery Pack Over Temperature
Battery temperature exceeds specified limit which requires replacement of auxiliary power module (lithium-ion battery).
Auxiliary power module (lithium-ion battery)
P1B04: Hybrid/EV Battery Pack Cell Voltage High/Low
Cell voltage in auxiliary power module (lithium-ion battery) rises or drops exceeding specified value which requires replacement of the module.
P1B0C: Hybrid/EV Battery Positive Contactor Diag Failure
Auxiliary power module (lithium-ion battery) fails stuck check of contactor for more than specified number of times.
P1B0D: Hybrid/EV Battery Positive Contactor Current High
More than specified current is supplied to contactor.
P1B17: Hybrid/EV Battery Pack Cell Initial Open Circuit Voltage High/Low
Open Circuit Voltage (OCV) opening voltage at start of auxiliary power module (lithium-ion battery) exceeds or lowers specification.
P1B1E: Hybrid/EV Battery Positive Contactor Open Time Too Long
Contactor opening takes time for more than specification.
P1B1F: Hybrid/EV Battery Positive Contactor Deterioration
Contactor deterioration level becomes lower than specification (judged by number of open time and current at open state).
DTC Confirmation Procedure
P0A7E / P1B04 / P1B17
Set ignition “OFF” for 10 sec.
P1B0C / P1B1E / P1B1F
Run engine at idle speed for 10 sec.
Set ignition “OFF” for 10 sec.
Set ignition “ON” for 10 sec.
P1B0D
Run engine at idle speed for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ECM:
ISG:
DC/DC converter:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0A7E, P0A7F, P1B04, P1B0C, P1B0D, P1B17, P1B1E, P1B1F or P1B20 still detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Go to Step 3.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P1B07 detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Intermittent trouble.

---

## AENLSB0AAB04022 - DTC P0C6E / P0ECB / P1B00 / P1B01 / P1B10 / P1B11 / P1B12 / P1B13 / P1B14 / P1B15 / P1B21 / P1B22
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04022.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P0C6E / P0ECB / P1B00 / P1B01 / P1B10 / P1B11 / P1B12 / P1B13 / P1B14 / P1B15 / P1B21 / P1B22
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0C6E: Hybrid/EV Battery Temperature Sensor “A”/“B” Correlation
Battery temperature cannot be measured correctly due to uneven temperature of 2 battery temperature sensors exceeding specified value.
Auxiliary power module (lithium-ion battery)
P0ECB: Hybrid/EV Battery Voltage Sensor System - Multiple Sensor Correlation
Cell voltage cannot be measured correctly due to malfunction of measurement circuit.
P1B00: Battery Control Module Error 1
Malfunction occurs in CPU.
P1B01: Control Module Initial Error
Malfunction is detected in safety check at start of auxiliary power module (lithium-ion battery).
P1B10: Battery Control Module Error 2
Malfunction occurs in CPU.
P1B11: Battery Control Module Error 3
Malfunction occurs in CPU.
P1B12: Battery Control Module Monitoring Module Error
Malfunction occurs in auxiliary power module (lithium-ion battery) which monitors CPU.
P1B13: Battery Control Module Read Only Memory (ROM) Read Error
Auxiliary power module (lithium-ion battery) fails to read.
P1B14: Battery Control Module Read Only Memory (ROM) Write Error
Auxiliary power module (lithium-ion battery) fails for writing.
P1B15: Battery Control Module Nonvolatile Memory Data Inconsistence Error
Nonvolatile memory data mismatches between previous shut down of auxiliary power module (lithium-ion battery) and start at this time.
P1B21: Battery Control Module Off Time Counter Error
Malfunction of timer in shut down state of auxiliary power module (lithium-ion battery).
P1B22: Battery Control Module Software Reset History
Reset by abnormal software is operated.
DTC Confirmation Procedure
Set ignition “OFF” for 3 min.
Set ignition “ON” for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ECM:
ISG:
DC/DC converter:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0A7E, P0A7F, P1B04, P1B0C, P1B0D, P1B07, P1B17, P1B1E, P1B1F or P1B20 still detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Go to Step 3.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0C6E, P0ECB, P1B00, P1B01, P1B10, P1B11, P1B12, P1B13, P1B14, P1B15, P1B21or P1B22 still detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Go to Step 4.
Auxiliary power module (lithium-ion battery) check
Check auxiliary power module (lithium-ion battery).
Is check result OK?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Repair or replace defective part.

---

## AENLSB0AAB04023 - DTC P0A8D / P0A8E / P1B02 / P1B18
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04023.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P0A8D / P0A8E / P1B02 / P1B18
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0A8D: 14 Volt Power Module System Voltage Low
Supply voltage from lead-acid battery to auxiliary power module (lithium-ion battery) becomes lower than specification.
Auxiliary power module (lithium-ion battery) circuit / connector
Auxiliary power module (lithium-ion battery)
P0A8E: 14 Volt Power Module System Voltage High
Supply voltage from lead-acid battery to auxiliary power module (lithium-ion battery) exceeds specified value.
P1B02: 14 Volt Power Module System Voltage Sensor “A” Circuit Range High
Sensor range in auxiliary power module (lithium-ion battery) gets stuck in high.
P1B18: 14 Volt Power Module System Voltage Sensor “A” Circuit Range Low
Sensor range in auxiliary power module (lithium-ion battery) connected to lead-acid battery gets stuck in low.
DTC Confirmation Procedure
Set ignition “OFF” for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ECM:
ISG:
DC/DC converter:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0A7E, P0A7F, P1B04, P1B0C, P1B0D, P1B07, P1B17, P1B1E, P1B1F or P1B20 still detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Go to Step 3.
Auxiliary power module (lithium-ion battery) power supply and ground circuit check
Check Auxiliary power module (lithium-ion battery) power supply and ground circuits.
Is check result OK?
Go to Step 4.
Repair or replace Auxiliary power module (lithium-ion battery) power supply and/or ground circuit.
Auxiliary power module (lithium-ion battery) check
Check auxiliary power module (lithium-ion battery).
Is check result OK?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Repair or replace defective part.

---

## AENLSB0AAB04024 - DTC P0AA1
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04024.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P0AA1
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0AA1: Hybrid/EV Battery Positive Contactor Circuit Stuck Closed
Contactor in auxiliary power module (lithium-ion battery) gets stuck closed.
Power supply circuit (48V cable)
Auxiliary power module (lithium-ion battery)
DTC Confirmation Procedure
Set ignition “OFF” for 3 min.
Set ignition “ON” for 10 sec.
Run engine at idle speed for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ECM:
ISG:
DC/DC converter:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0A7E, P0A7F, P1B04, P1B0C, P1B0D, P1B07, P1B17, P1B1E, P1B1F or P1B20 still detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Go to Step 3.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0AA1 still detected?
Go to Step 4.
Intermittent trouble.
Terminal voltage check
Servicing SHVS system involves a danger of electric shock.
For precaution, use insulation tool and gloves.
Set ignition “OFF”.
Check terminal voltage between “48V+” terminal and “48V–” terminal is lower than 10 V.
Is check result OK?
Go to Step 5.
Repair defective wire harness.
Auxiliary power module (lithium-ion battery) check
Check auxiliary power module (lithium-ion battery).
Is check result OK?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Repair or replace defective part.

---

## AENLSB0AAB04025 - DTC P0AA2 / P1B03
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04025.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P0AA2 / P1B03
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0AA2: Hybrid/EV Battery Positive Contactor Circuit Stuck Open
Contactor in auxiliary power module (lithium-ion battery) gets stuck open.
Auxiliary power module (lithium-ion battery)
P1B03: Hybrid/EV Battery Pack 48 Volt Sensor “A” Circuit Performance
Voltage of 48V circuit for 48V devices cannot be measured correctly.
DTC Confirmation Procedure
Set ignition “OFF” for 3 min.
Set ignition “ON” for 10 sec.
Run engine at idle speed for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ECM:
ISG:
DC/DC converter:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0A7E, P0A7F, P1B04, P1B0C, P1B0D, P1B07, P1B17, P1B1E, P1B1F or P1B20 still detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Go to Step 3.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0AA2 or P1B03 still detected?
Go to Step 4.
Intermittent trouble.
Auxiliary power module (lithium-ion battery) check
Check auxiliary power module (lithium-ion battery).
Is check result OK?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Repair or replace defective part.

---

## AENLSB0AAB04026 - DTC P0AC0 / P1B0E
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04026.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P0AC0 / P1B0E
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0AC0: Hybrid/EV Battery Pack Current Sensor “A” Circuit Range/Performance
Auxiliary power module (lithium-ion battery) fails current measuring due to measurement circuit malfunction.
Power supply circuit (48V cable)
Auxiliary power module (lithium-ion battery)
P1B0E: Hybrid/EV Battery Positive Contactor Opened With Load
Contactor opens when excessive current more than specified value is supplied.
DTC Confirmation Procedure
P0AC0
Set ignition “OFF” for 3 min.
Set ignition “ON” for 10 sec.
P1B0E
Run engine at idle speed for 10 sec.
Set ignition “OFF” for 10 sec.
Set ignition “ON” for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ECM:
ISG:
DC/DC converter:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0A7E, P0A7F, P1B04, P1B0C, P1B0D, P1B07, P1B17, P1B1E, P1B1F or P1B20 still detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Go to Step 3.
DTC check
Check DTC.
Is DTC P1B07 detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Go to Step 4.
Terminal voltage check
Servicing SHVS system involves a danger of electric shock.
For precaution, use insulation tool and gloves.
Run engine at idle speed.
Check terminal voltage between “48V+” terminal and “48V–” terminal is 24 to 52 V.
Is check result OK?
Go to Step 5.
Repair defective wire harness.
Auxiliary power module (lithium-ion battery) check
Check auxiliary power module (lithium-ion battery).
Is check result OK?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Repair or replace defective part.

---

## AENLSB0AAB04027 - DTC P0AFD / P1B0B
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04027.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P0AFD / P1B0B
Do not directly heat auxiliary power module (lithium-ion battery) using hot air dryer etc.
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0AFD: Hybrid/EV Battery Pack Temperature Low
Battery temperature drops below specification of unusable degrees.
Auxiliary power module (lithium-ion battery)
P1B0B: Hybrid/EV Battery Pack Temperature Too Low
Battery temperature drops below specification of unusable degrees.
DTC Confirmation Procedure
Set ignition “OFF” for 3 min.
Set ignition “ON” for 10 sec.
DTC Troubleshooting
DTC check
Check DTC.
Is DTC P0C6E detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Set ignition “OFF” and leave the vehicle in a warm place for 2 hours or more.
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0AFD or P1B0B detected?
Go to Step 3.
Intermittent trouble.
Auxiliary power module (lithium-ion battery) check
Check auxiliary power module (lithium-ion battery).
Is check result OK?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Repair or replace defective part.

---

## AENLSB0AAB04028 - DTC P1B06
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04028.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P1B06
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1B06: Hybrid/EV Battery System Over Charge Current
Charging current exceeding allowable value is supplied for more than specified time which is necessary to cut off current from 48V circuit.
Power supply circuit (48V cable)
Auxiliary power module (lithium-ion battery)
DTC Confirmation Procedure
Run engine at idle speed for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ECM:
ISG:
DC/DC converter:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0A7E, P0A7F, P1B04, P1B0C, P1B0D, P1B07, P1B17, P1B1E, P1B1F or P1B20 still detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Go to Step 3.
Terminal voltage check
Servicing SHVS system involves a danger of electric shock.
For precaution, use insulation tool and gloves.
Run engine at idle speed.
Check terminal voltage between “48V+” terminal and “48V–” terminal is 24 to 52 V.
Is check result OK?
Go to Step 4.
Repair defective wire harness.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P1B06 still detected?
Go to Step 5.
Intermittent trouble.
Auxiliary power module (lithium-ion battery) check
Check auxiliary power module (lithium-ion battery).
Is check result OK?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Repair or replace defective part.

---

## AENLSB0AAB04029 - DTC P1B05
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04029.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P1B05
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1B05: Hybrid/EV Battery Pack Cell Voltage High/Low Warning
Cell voltage in auxiliary power module (lithium-ion battery) rises or drops exceeding specified value of unusable degree.
Power supply circuit (48V cable)
Auxiliary power module (lithium-ion battery)
DTC Confirmation Procedure
Set ignition “OFF” for 3 min.
Set ignition “ON” for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ECM:
ISG:
DC/DC converter:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0A7E, P0A7F, P1B04, P1B0C, P1B0D, P1B07, P1B17, P1B1E, P1B1F or P1B20 still detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Go to Step 3.
Terminal voltage check
Servicing SHVS system involves a danger of electric shock.
For precaution, use insulation tool and gloves.
Run engine at idle speed.
Check terminal voltage between “48V+” terminal and “48V–” terminal is 24 to 52 V.
Is check result OK?
Go to Step 4.
Repair defective wire harness.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P1B05 still detected?
Go to Step 5.
Intermittent trouble.
Auxiliary power module (lithium-ion battery) check
Check auxiliary power module (lithium-ion battery).
Is check result OK?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Repair or replace defective part.

---

## AENLSB0AAB04030 - DTC P1B09
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04030.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P1B09
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1B09: Hybrid/EV Battery Pack Over Temperature Warning
Battery temperature rises exceeding specification of unusable degrees.
Auxiliary power module (lithium-ion battery)
DTC Confirmation Procedure
Set ignition “OFF” for 3 min.
Set ignition “ON” for 10 sec.
DTC Troubleshooting
DTC check
Check DTC.
Is DTC P0C6E detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Check following control modules for DTC.
ECM:
ISG:
DC/DC converter:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
DTC check
Set ignition “OFF” and leave the vehicle for 2 hours or more avoiding direct sunshine.
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P1B09 detected?
Go to Step 4.
Intermittent trouble.
Auxiliary power module (lithium-ion battery) check
Check auxiliary power module (lithium-ion battery).
Is check result OK?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Repair or replace defective part.

---

## AENLSB0AAB04031 - DTC P1B0F
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04031.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P1B0F
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1B0F: Crash Detect Signal Receive History
Auxiliary power module (lithium-ion battery) receives collision detection signal from SDM via ECM as “Collision”.
Power supply circuit (48V cable)
Auxiliary power module (lithium-ion battery) circuit / connector
Auxiliary power module (lithium-ion battery)
DTC Confirmation Procedure
Set ignition “ON” for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ECM:
ISG:
DC/DC converter:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0A7E, P0A7F, P1B04, P1B0C, P1B0D, P1B07, P1B17, P1B1E, P1B1F or P1B20 still detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Go to Step 3.
DTC check
Check SDM for DTC.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 4.
Auxiliary power module (lithium-ion battery) power supply and ground circuit check
Check Auxiliary power module (lithium-ion battery) power supply and ground circuits.
Is check result OK?
Go to Step 5.
Repair or replace Auxiliary power module (lithium-ion battery) power supply and/or ground circuit.
Terminal voltage check
Servicing SHVS system involves a danger of electric shock.
For precaution, use insulation tool and gloves.
Run engine at idle speed.
Check terminal voltage between “48V+” terminal and “48V–” terminal is 24 to 52 V.
Is check result OK?
Go to Step 6.
Repair defective wire harness.
Auxiliary power module (lithium-ion battery) check
Check auxiliary power module (lithium-ion battery).
Is check result OK?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Repair or replace defective part.

---

## AENLSB0AAB04032 - DTC P1B16
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04032.xml
Tree scopes: dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P1B16
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1B16: Battery Control Module CAN Hardware Error
CAN hardware in auxiliary power module (lithium-ion battery) malfunctions.
CAN communication circuit
Auxiliary power module (lithium-ion battery) circuit / connector
Auxiliary power module (lithium-ion battery)
DTC Confirmation Procedure
Set ignition “ON” for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ECM:
ISG:
DC/DC converter:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0A7E, P0A7F, P1B04, P1B0C, P1B0D, P1B07, P1B17, P1B1E, P1B1F or P1B20 still detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Go to Step 3.
DTC check
Check control modules communicating by CAN for DTCs.
Is there any CAN-DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 4.
CAN communication circuit check
Check CAN communication circuit between ECM and central gateway control module referring to
.
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
Auxiliary power module (lithium-ion battery) power supply and ground circuit check
Check Auxiliary power module (lithium-ion battery) power supply and ground circuits.
Is check result OK?
Go to Step 6.
Repair or replace Auxiliary power module (lithium-ion battery) power supply and/or ground circuit.
Auxiliary power module (lithium-ion battery) check
Check auxiliary power module (lithium-ion battery).
Is check result OK?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Repair or replace defective part.

---

## AENLSB0AAB04033 - DTC P1B19 / P1B1A
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04033.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P1B19 / P1B1A
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1B19: Hybrid/EV Battery Pack 48 Volt Sensor “A” Circuit Range
Sensor range in auxiliary power module (lithium-ion battery) connecting 48V devices gets stuck in high.
Auxiliary power module (lithium-ion battery)
B1B1A: Hybrid/EV Battery Pack 48 Volt Sensor “A” Circuit/Open
Voltage measurement is not working properly due to open circuit connected to 48V devices.
DTC Confirmation Procedure
Set ignition “OFF” for 3 min.
Set ignition “ON” for 10 sec.
Run engine at idle speed for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ECM:
ISG:
DC/DC converter:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0A7E, P0A7F, P1B04, P1B0C, P1B0D, P1B07, P1B17, P1B1E, P1B1F or P1B20 still detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Go to Step 3.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P1B19 or P1B1A still detected?
Go to Step 4.
Intermittent trouble.
Auxiliary power module (lithium-ion battery) check
Check auxiliary power module (lithium-ion battery).
Is check result OK?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Repair or replace defective part.

---

## AENLSB0AAB04034 - DTC P1B1B / P1B1C / P1B1D
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04034.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P1B1B / P1B1C / P1B1D
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1B1B: Hybrid/EV Battery System Over Discharge Current
Charging current exceeding allowable value (necessary to limit current) is supplied for more than specified time.
Power supply circuit (48V cable)
Auxiliary power module (lithium-ion battery)
P1B1C: Hybrid/EV Battery System Over Charge Current Warning
Discharging current exceeding allowable value (necessary to cut off battery from 48V circuit) flows for more than specified time.
P1B1D: Hybrid/EV Battery System Over Discharge Current Warning
Discharging current exceeding allowable value (necessary to limit current) flows for more than specified time.
DTC Confirmation Procedure
Run engine at idle speed for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ECM:
ISG:
DC/DC converter:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0A7E, P0A7F, P1B04, P1B0C, P1B0D, P1B07, P1B17, P1B1E, P1B1F or P1B20 still detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Go to Step 3.
Terminal voltage check
Servicing SHVS system involves a danger of electric shock.
For precaution, use insulation tool and gloves.
Run engine at idle speed.
Check terminal voltage between “48V+” terminal and “48V–” terminal is 24 to 52 V.
Is check result OK?
Go to Step 4.
Repair defective wire harness.
Auxiliary power module (lithium-ion battery) check
Check auxiliary power module (lithium-ion battery).
Is check result OK?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Repair or replace defective part.

---

## AENLSB0AAB04035 - DTC U1401 / U1402
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04035.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC U1401 / U1402
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
U1401: Invalid Data Received From ECM - Rolling Counter Error
Invalid CAN data from ECM is detected.
CAN communication line
ECM
Auxiliary power module (lithium-ion battery)
U1402: Invalid Data Received From ECM - Checksum Error
Invalid CAN data from ECM is detected.
DTC Confirmation Procedure
Set ignition “ON” for 10 sec.
DTC Troubleshooting
DTC check
Check DTC related to CAN communication.
Is there any CAN related DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
CAN communication circuit check
Check CAN communication circuit.
Is check result OK?
Replace ECM and recheck DTC. If DTC U1401 or U1402 is still detected, replace the following parts related to DTC and recheck DTC.
ECM:
Auxiliary power module (lithium-ion battery):
Repair or replace defective wire harness.

---

## AENLSB0AAB04036 - DTC P0A7F /P1B20
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04036.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P0A7F /P1B20
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0A7F: Hybrid/EV Battery Pack “A” Deterioration
Battery deterioration level becomes lower than specification in cell voltage decay rate and internal resistance.
Auxiliary power module (lithium-ion battery)
P1B20: Hybrid/EV Battery Pack Current Sensing Resistor Adjustment Value Error
Erroneous setting of shunt resistance.
DTC Confirmation Procedure
Set ignition “OFF” for 3 min.
Set ignition “ON” for 10 sec.
DTC Troubleshooting
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0A7F or P1B20 still detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Intermittent trouble.

---

## AENLSB0AAB04037 - DTC P1B07
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04037.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Diagnostic Information and Procedures || dtc: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P1B07
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1B07: Hybrid/EV Battery Pack Unhealable diagnostics History
Malfunction occurs which requires replacement of auxiliary power module (lithium-ion battery).
Auxiliary power module (lithium-ion battery)
DTC Confirmation Procedure
Set ignition “OFF” for 10 sec.
DTC Troubleshooting
DTC check
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P1B07 still detected?
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Intermittent trouble.

---

## AENLSB0AAB04A01 - Energy flow indication is not indicated
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04A01.xml
Tree scopes: symptoms: 10 - Control Systems > Auxiliary Power Module System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Energy flow indication is not indicated
Auxiliary power module (lithium-ion battery) control system controlled by ECM, ISG, DC/DC converter, etc. using CAN communication system. Before performing symptom diagnosis, check that no DTC is indicated in these control modules.
Using SUZUKI scan tool, state of auxiliary power module (lithium-ion battery) can be checked.
Energy flow indication is not indicated
Faulty combination meter
Check parameter.
Check combination meter circuit.
Faulty ECM
Check ECM.

---

## AENLSB0AAB06001 - Auxiliary Power Module (Lithium-Ion Battery) Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB06001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Repair Instructions
Outgoing references:
- AENLSB0AAB06002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB06002.xml | Auxiliary Power Module (Lithium-Ion Battery) Inspection

Content:
Auxiliary Power Module (Lithium-Ion Battery) Removal and Installation
Servicing SHVS system involves a danger of electric shock.
For precaution, use insulation tool and gloves.
Auxiliary power module (lithium-ion battery) consists of high precision parts and can be easily damaged by large shock.
Handle the auxiliary power module (lithium-ion battery) carefully and do not expose it to large shock.
Removal
Set ignition “OFF”, and keep ignition “OFF” for 3 minutes.
Disconnect negative (–) cable at battery.
Disconnect positive (+) cable at battery.
Remove right side front seat.
Remove right rear duct No.3.
Disconnect harness clamp (1).
Release hooks (2) of auxiliary power module (lithium-ion battery) cover (4) from auxiliary power module (lithium-ion battery) holder (3) in numerical order (“1” – “3”) and remove the cover.
Check terminal voltage between “48V+” terminal (1) and “48V–” terminal (2) is lower than 5V.
If the voltage is still higher than 5 V, check it again in 15 minutes.
Disconnect auxiliary power module (lithium-ion battery) connector (1) as follows.
Move connector lock lever (2) in arrow direction as shown in figure.
Push connector lock lever and disconnect connector from auxiliary power module (lithium-ion battery) (3).
Remove “48V+” terminal nut (1) and “48V–” terminal nut (2), and then remove those cables.
Remove “48V–” cable clamp (3).
Remove auxiliary power module (lithium-ion battery) bracket (1) and remove auxiliary power module (lithium-ion battery) (2) in arrow direction.
Remove auxiliary power module (lithium-ion battery) holder (1), if necessary.
Installation
Auxiliary Power Module (Lithium-Ion Battery) Inspection
Tighten auxiliary power module (lithium-ion battery) holder bolts (1) to specified torque, if removed.
Auxiliary power module (lithium-ion battery) holder bolt
a
9.0
0.92
7.0
Install auxiliary power module (lithium-ion battery) (2) as follows.
Insert auxiliary power module (lithium-ion battery) in arrow direction to auxiliary power module (lithium-ion battery) holder (3).
Align grooves (4) of auxiliary power module (lithium-ion battery) with projections (5) of auxiliary power module (lithium-ion battery) holder.
Tighten auxiliary power module (lithium-ion battery) bracket bolt (1) to specified torque.
Auxiliary power module (lithium-ion battery) bracket bolt
a
9.0
0.92
7.0
Check that auxiliary power module (lithium-ion battery) is no looseness, if loose repeat Step b) – c).
Install “48V+” cable (1) and “48V–” cable (2), and tighten those nuts to specified torque.
“48V+” terminal nut
a
28
2.9
21.0
“48V–” terminal nut
b
28
2.9
21.0
Install “48V–” cable clamp (3).
Connect auxiliary power module (lithium-ion battery) connector.
Install auxiliary power module (lithium-ion battery) cover (1).
After installation, check that hooks (2) is properly fixed to auxiliary power module (lithium-ion battery) holder (3).
Install right rear duct No.3.
Install right side front seat.
Connect positive (+) cable at battery.
Connect negative (–) cable at battery.

---

## AENLSB0AAB06002 - Auxiliary Power Module (Lithium-Ion Battery) Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB06002.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Repair Instructions
Outgoing references:
- AENLSB0AAB06001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB06001.xml | Auxiliary Power Module (Lithium-Ion Battery) Removal and Installation

Content:
Auxiliary Power Module (Lithium-Ion Battery) Inspection
Auxiliary Power Module (Lithium-Ion Battery) Removal and Installation
Check the following points. If any abnormalities are found, correct them.
Accessories are not connected to terminals.
Terminals are not dusty or loose.
Wires are not pinched.
Fixing bolts of auxiliary power module (lithium-ion battery) are not loose.
Cabin floor for auxiliary power module (lithium-ion battery) is not wet.
Ventilation opening of auxiliary power module (lithium-ion battery) is not obstructed.
Auxiliary power module (lithium-ion battery) cover is not detached.
Check auxiliary power module (lithium-ion battery) for crack and deformation. If any abnormality is found, replace it.

---

## AENLSB0AAB07001 - Tightening Torque Specifications
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB07001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Specifications
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
Auxiliary power module (lithium-ion battery) holder bolt
9.0
0.92
7.0
Auxiliary power module (lithium-ion battery) bracket bolt
9.0
0.92
7.0
“48V+” terminal nut
28
2.9
21.0
“48V–” terminal nut
28
2.9
21.0
Reference:
For the tightening torques of fasteners not specified in this page, refer to:
Fasteners Information

---

## AENLSB0AAB08001 - Special Tool
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB08001.xml
Tree scopes: bookmarks: 10 - Control Systems > 10K - Auxiliary Power Module System > Special Tools and Equipment
Outgoing references: none

Content:
Special Tool
SUZUKI scan tool (Suzuki SDT-II)
—

---

## AENLSB0AB000001 - Precautions for SHVS System
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB000001.xml
Tree scopes: unscoped
Outgoing references:
- AENLSB0A0000001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0000001.xml | General Precautions
- AENLSB0A0000002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0000002.xml | Precautions for Electrical Circuit Service
- AENLSB0A0000023 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0000023.xml | Caution for Servicing SHVS System (48V)
- AENLSB0A0000003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0000003.xml | Caution for Fastener
- AENLSB0A0000015 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0000015.xml | Warning for Air Bag
- AENLSB0A0000004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0000004.xml | Warning for ENG A-STOP System
- AENLSB0A910H001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A910H001.xml | Reassembling Note for Wiring Harness

Content:
Precautions for SHVS System
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
Precautions for Replacing ECM
Refer to “Precautions for Replacing ECM” in
.
Warning for Air Bag
Refer to
Warning for Air Bag
.
Warning for ENG A-STOP System
Refer to
Warning for ENG A-STOP System
.
Reassembling Note for Wiring Harness
Observe
Reassembling Note for Wiring Harness
whenever installing wiring harness.
Otherwise, electrical trouble may occur.

---

## AENLSB0AB100001 - Precautions for Diagnosing Trouble
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB100001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Precautions for Diagnosing Trouble
Before using SUZUKI scan tool, read its Operator’s Manual to know how to use it.
SHVS system is controlled by ECM, ISG, DC/DC converter and auxiliary power module (lithium-ion battery). However, DTCs related to SHVS system are detected by ECM, ISG, DC/DC converter and auxiliary power module (lithium-ion battery).
Before diagnosing troubles, refer to “Precautions for Diagnosing Trouble” under
.
Clear all DTCs after completing troubleshooting.

---

## AENLSB0AB100002 - Precautions for Replacing ECM
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB100002.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Precautions for Replacing ECM
Refer to “Precautions for Replacing ECM” under
.

---

## AENLSB0AB100003 - Precautions for Replacing Battery
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB100003.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Precautions for Replacing Battery
Refer to
.

---

## AENLSB0AB100004 - Precaution for Handling Auxiliary Power Module (Lithium-Ion Battery)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB100004.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Precautions
Outgoing references:
- AENLSB0AAB00002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB00002.xml | Precautions for Handling Auxiliary Power Module (Lithium-Ion Battery)

Content:
Precaution for Handling Auxiliary Power Module (Lithium-Ion Battery)
Refer to
Precautions for Handling Auxiliary Power Module (Lithium-Ion Battery)
.

---

## AENLSB0AB100005 - Precautions for Replacing ISG
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB100005.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Precautions
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

## AENLSB0AB101001 - Description of SHVS System
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB101001.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > General Description
Outgoing references: none

Content:
Description of SHVS System
SHVS system consists of ISG (1), DC/DC converter (2), auxiliary power module (lithium-ion battery) (3) and ECM (4), and manages the following functions.
ENG A-STOP function
Assist function
Assist engine to derive best thermal efficiency
Filling engine torque
Boosting engine torque
Deceleration energy regeneration function
Compared with conventional ISG of 12V auxiliary power module (lithium-ion battery), new 48V system generates more torque and electric power.
For assisting engine power, 48 V is supplied from auxiliary power module (lithium-ion battery) (1) to 48V ISG (2).
Through improved generating efficiency of ISG, charged capacity of auxiliary power module (lithium-ion battery) has increased compared with the conventional ISG and the power assist covers wide range of engine speed. This powered up system has brought fuel economy and good driving response.
Lead-acid battery (3) and electrical devices (4) function with 12V. Therefore, 48V is stepped down to 12V through DC/DC converter (5) and supplied to 12V system.
Further, during the idling stop, the 12V is supplied to 12V devices as well.
[A]:
48V circuit
[B]:
12V circuit

---

## AENLSB0AB101002 - Description of SHVS System Components
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB101002.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > General Description
Outgoing references:
- AENLSB0AA901002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA901002.xml | Description of ENG A-STOP System Components

Content:
Description of SHVS System Components
The SHVS system consists of the following components.
Component
Description
ECM
ECM transmits ISG control request signal via CAN corresponding to the condition of the vehicle.
ISG
ISG is fitted on the cylinder block at exhaust side since conventional ISG is mounted at the opposite side, and mainly consists of a stator coil, rotor, rotor position sensor and inverter (control circuit, field circuit, power circuit, CAN driver, temperature sensor, voltage sensor and current sensor).
ISG has a generator function to generate electricity mainly during deceleration and a motor function as well to assist engine power or to start the engine.
ISG monitors all internal sensors and, when any malfunction is detected, ISG transmits the information to ECM via CAN and enters the fail-safe mode.
Auxiliary power module (lithium-ion battery)
Auxiliary power module (lithium-ion battery) is installed under right side front seat.
Supplies electricity to ISG and DC/DC converter while assisting engine power controlled by SHVS system.
Supplies electricity to DC/DC converter while engine auto stop controlled by SHVS system.
DC/DC converter
DC/DC converter is installed under left side front seat.
DC/DC converter transforms 48V to 12V and supplies to lead-acid battery and each electrical device.
SDM
This module transmits collision signal to each control module via CAN.
CPP No.1 switch / CPP No.2 switch
These switches are installed on clutch pedal bracket. The switches provide ECM with information on the state of the clutch pedal.
Brake light switch
This switch is installed on the brake pedal assembly. The switch provide the ECM with information on the state of the brake pedal.
Neutral position switch
This switch is installed on transaxle case. ECM determines whether the gear is in neutral based on the signal from this switch.
Combination meter
When any malfunction is detected, ECM controls ENG A-STOP warning light to blink and charge warning light to turn on. The warning lights are turned off when ECM detects normal condition.
Status of SHVS system i.e. each of engine auto restart, power assist and deceleration energy regeneration is indicated on the information display (energy flow indicator), and when the system is in deceleration energy regenerating mode, deceleration energy regeneration indicator light also comes on.
Accelerator pedal (APP sensor)
This sensor detects degree of accelerator pedal depressing and transmits the information to ECM.
Engine coolant temperature sensor (ECT sensor)
This sensor transmits engine coolant temperature signal to ECM.
Brake stroke sensor
The sensor is fitted to brake pedal, and detects the depressing degree of the brake pedal. ECM uses this information to control the deceleration energy regeneration.
ENG A-STOP warning light
Refer to
Description of ENG A-STOP System Components
.

---

## AENLSB0AB101003 - Description of SHVS System Control
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB101003.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > General Description
Outgoing references: none

Content:
Description of SHVS System Control
Engine Power Assist Mode
When motor assist conditions are satisfied, ECM (1) transmits motor assist request to ISG (2).
ISG switches internal circuit to motor drive connection and energizes the stator to generate motor torque from the rotor.
The rotor rotates crankshaft through ISG belt and assist driving force of the engine.
Motor assist torque of ISG for crankshaft depends on state-of-charge of the auxiliary power module (lithium-ion battery) (3).
While ISG is assisting crankshaft rotation, power source from lithium-ion battery incorporated in auxiliary power module (lithium-ion battery) is also supplied to DC/DC converter (4).
DC/DC converter transforms 48V to 12V and supplies to lead-acid battery (5) and each electrical device (6).
While ISG is working as a motor to assist engine, ECM controls combination meter (7) to indicate the state of energy flow and the meter indicates it on information display (8).
[A]:
48V circuit
[C]:
Electric power supply
[B]:
12V circuit
9.
Motor assist
Generating Mode
Receiving demand from ECM (2), ISG (1) controls power generation torque and 48V terminal voltage and charges auxiliary power module (lithium-ion battery) (3).
DC/DC converter (4) transforms 48V from ISG to 12V and supplies to lead-acid battery (5) and each electrical device (6).
Generating electric power during deceleration intensively, fuel economy is obtained. In the deceleration energy regeneration mode, ECM controls combination meter (7) to indicate the state of energy flow on information display (8) and turn on deceleration energy regeneration indicator light (9) lights up.
[A]:
48V circuit
[C]:
Electric power supply
[B]:
12V circuit
10.
Generation and deceleration energy regeneration
Engine Auto Stop Mode
When engine auto stop conditions are satisfied, engine stops automatically controlled by ECM (1) and, at the same time, stepped down 12V from 48V of auxiliary power module (lithium-ion battery) (2) through DC/DC converter (3) is supplied to lead-acid battery (4) and each electrical device (5). And, during the engine auto stop, ECM also controls information display (7) in combination meter (6) to show engine auto stopping indication.
[A]:
48V circuit
[C]:
Electric power supply
[B]:
12V circuit
8.
ISG
Battery Control under Extremely Low Temperature
When the cabin temperature lowers below –35 °C (–31 °F), auxiliary power module (lithium-ion battery) cuts off the charge and discharge circuit for protection of the lithium-ion battery.
If engine starts in such a low temperature, lead-acid battery discharges due to disconnection of charge circuit. Therefore, ECM stops fuel injection not to start the engine.
Further, ENG A-STOP warning light (1) blinks, charging light (2) comes on, “ENGINE START IMPOSSIBLE (LOW TEMP)” is indicated on information display (3) in combination meter and buzzer also sounds.
Even if the temperature lowers below –35 °C (–31 °F) while running the vehicle, fuel injection is kept on and the engine can continue to run. However, ENG A-STOP warning light blinks, charging light comes on and buzzer sounds to warn the driver of the abnormal condition.
[A]:
Buzzer sounding pattern
Active / Inactive Conditions of Engine Power Assist Control
Engine power assist control active / inactive condition
Vehicle condition
Active
Inactive
Gear shift lever
Other than neutral
Neutral
Engine coolant temperature
Higher than 18 °C (64 °F)
Lower than 18 °C (64 °F)
Engine speed
800 to 5,200 rpm
Other than 800 to 5,200 rpm
Clutch pedal
Released
Depressed
Brake pedal
Released
Depressed
Accelerator pedal
Depressed
Released
Auxiliary power module (lithium-ion battery)
State-of-charge
Assist engine to derive best thermal efficiency
4 or more bars are ON in battery display
Filling engine torque
1 or more bars are ON in battery display
Boosting engine torque
1 or more bars are ON in battery display
Assist engine to derive best thermal efficiency
3 or less bars are ON in battery display
Filling engine torque
0 (zero) bar is ON in battery display
Boosting engine torque
0 (zero) bar is ON in battery display
Temperature
Lower than 64 °C (147 °F)
Higher than 64 °C (147 °F)
ISG internal temperature
Lower than specified value
Higher than specified value
DTC detecting condition
Auxiliary power module (lithium-ion battery)
ISG
DC/DC converter
ESP ® control module
ECM
No DTC related to the control is detected
DTC(s) related to the control is detected
Active / Inactive Conditions of Energy Regenerating Control
Deceleration energy regenerating control active / inactive condition
Vehicle condition
Active
Inactive
Gear shift lever
Other than neutral
Neutral
Clutch pedal
Released
Depressed
Accelerator pedal
Released
Depressed
Engine speed
More than 1,000 rpm
Lower than 1,000 rpm
Fuel cut
Operating
Not operating
DTC detecting condition
Auxiliary power module (lithium-ion battery)
ISG
DC/DC converter
ESP ® control module
ECM
No DTC related to the control is detected
DTC(s) related to the control is detected

---

## AENLSB0AB101004 - CAN Communication System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB101004.xml
Tree scopes: unscoped
Outgoing references: none

Content:
CAN Communication System Description
ECM, ISG, DC/DC converter and auxiliary power module (lithium-ion battery) are using CAN communication to communicate with other control module. For more detail of CAN communication, refer to
.

---

## AENLSB0AB101005 - Auxiliary Power Module (Lithium-Ion Battery) Control System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB101005.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > General Description
Outgoing references:
- AENLSB0AAB01001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB01001.xml | Description for Auxiliary Power Module (Lithium-Ion Battery) Control System

Content:
Auxiliary Power Module (Lithium-Ion Battery) Control System Description
Refer to
Description for Auxiliary Power Module (Lithium-Ion Battery) Control System
.

---

## AENLSB0AB101006 - Description of SHVS System Function
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB101006.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > General Description
Outgoing references:
- AENLSB0AA901001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA901001.xml | Description of ENG A-STOP System

Content:
Description of SHVS System Function
Engine Power Assist Function
ENG A-STOP function
ENG A-STOP system is the same with the conventional SHVS system. For more details of ENG A-STOP system, refer to
Description of ENG A-STOP System
.
Assist function
Assist engine to derive best thermal efficiency
Regardless of the engine load, power output of ISG is controlled for the best thermal efficiency of the engine.
Filling engine torque
When driver’s torque demand (1) is higher than actual engine torque (2), ISG supplements engine with the motor torque and compensates the acceleration delay. This torque filling improves acceleration response.
[A]:
Motor assist
[a]:
Torque
[b]:
Time
Boosting engine torque
While the vehicle is running in engine low speed with insufficient torque (1), ISG motor torque (2) is added to improve drivability. This increased low speed torque may also improve fuel economy.
[A]:
Motor assist
[a]:
Torque
[b]:
Engine speed
Deceleration Energy Regeneration Function
While the vehicle is decelerating, ISG generates electric power intensively. This power generation reduces engine load for power generation under normal driving conditions and improves fuel economy.

---

## AENLSB0AB101007 - Description of SHVS System Component Operation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB101007.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > General Description
Outgoing references: none

Content:
Description of SHVS System Component Operation
DC/DC Converter
DC/DC converter (1) steps down 48V from ISG (2) or auxiliary power module (lithium-ion battery) (3) to 12V and supply it to lead-acid battery (4) and each electrical device (5).
Temperature sensor (6) incorporated in DC/DC converter monitors the unit temperature for cooling fan (7).
When DC/DC converter detects internal temperature exceeding threshold, ENG A-STOP warning light blinks and charge warning light lights up to warn the driver of the trouble.
8.
“48V+” terminal
11.
CPU
14.
Current sensor
9.
“GND” terminal
12.
Converter
10.
“12V+” terminal
13.
Voltage sensor
ISG
For switching function between power assist and electric power generation, ISG uses voltage generated by stator coil (1) and field coil (2) controlling it by transistor.
ISG has position sensor (3) to monitor rotor position, current sensor (4) to monitor phase current, voltage sensor (5) to monitor assist / charge voltage and temperature sensor to monitor temperature in each device. When any abnormality is detected, ENG A-STOP warning light blinks and charge warning light lights up to warn the driver of the trouble.
6.
CPU
9.
MOSFET (metal-oxide-semiconductor field-effect transistor) temperature sensor
12.
Auxiliary power module (lithium-ion battery)
7.
Intake air temperature sensor
10.
“48V+” terminal
8.
Control circuit board temperature sensor
11.
“48V–” terminal

---

## AENLSB0AB102001 - SHVS System Input / Output Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB102001.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Schematic and Routing Diagram
Outgoing references: none

Content:
SHVS System Input / Output Diagram

---

## AENLSB0AB102002 - SHVS System Electric Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB102002.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Schematic and Routing Diagram
Outgoing references: none

Content:
SHVS System Electric Circuit Diagram
1.
Auxiliary power module (lithium-ion battery)
5.
CAN driver
9.
“FI” fuse
2.
DC/DC converter
6.
DC/DC converter fan
10.
“FI2” fuse
3.
ISG
7.
“SUB BAT” fuse
11.
Brake stroke sensor
4.
ECM
8.
Main relay
12.
To central gateway control module
Terminal Arrangement of SHVS System Connector
[A]:
Auxiliary power module (lithium-ion battery) connector (View: [a])
[C]:
ISG connector (View: [a])
[B]:
DC/DC converter connector (View: [a])
[D]:
ECM connector (View: [b])

---

## AENLSB0AB103001 - SHVS System Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB103001.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Component Location
Outgoing references: none

Content:
SHVS System Component Location
The figure shows LHD. For RHD, parts with (*) are installed on the opposite side.
1.
ECM
7.
ENG A-STOP warning light
13.
CPP No.2 switch
2.
ECT sensor
8.
Charge warning light
14.
CPP No.1 switch
3.
Neutral position switch
9.
Deceleration energy regeneration indicator light
15.
DC/DC converter
4.
ISG
10.
Accelerator pedal assembly (incorporating APP sensor)
16.
SDM
5.
Combination meter
11.
Brake stroke sensor
17.
Auxiliary power module (lithium-ion battery)
6.
Information display (Energy flow indicator)
12.
Brake light switch

---

## AENLSB0AB104001 - SHVS System Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104001.xml
Tree scopes: unscoped
Outgoing references:
- AENLSB0AB104001012 -> unresolved | Step 1: Customer Complaint Analysis
- AENLSB0AB104005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104005.xml | DTC Clearance
- AENLSB0AB104001014 -> unresolved | Steps 3 and 4: Visual Inspection
- AENLSB0AB104001014 -> unresolved | Steps 3 and 4: Visual Inspection
- AENLSB0AB104001024 -> unresolved | Step 10: Final Confirmation Test
- AENLSB0AB104001012 -> unresolved | Step 1: Customer Complaint Analysis
- AENLSB0AB104001013 -> unresolved | Step 2: DTC Check, Record and Clearance
- AENLSB0AB104004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104004.xml | DTC Check

Content:
SHVS System Check
Customer complaint analysis
Perform
Step 1: Customer Complaint Analysis
.
Was customer complaint analysis performed?
Go to Step 2.
Perform customer complaint analysis.
DTC check, record and clearance
Check for DTC.
Is there any DTC(s)?
Print DTC or write it down and clear it referring to
DTC Clearance
. Then go to Step 3.
Go to Step 4.
Visual inspection
Perform
Steps 3 and 4: Visual Inspection
.
Is there any faulty condition?
Repair or replace defective part, and then go to Step 10.
Go to Step 5.
Visual inspection
Perform
Steps 3 and 4: Visual Inspection
.
Is there any faulty condition?
Repair or replace defective part, and then go to Step 10.
Go to Step 6.
Trouble symptom confirmation
Check trouble symptom.
Is trouble symptom identified?
Go to Step 6.
Go to Step 7.
Charging system check
Perform generator test.
Is check result OK?
Go to Step 9.
Repair or replace defective part, and then go to Step 10.
Rechecking and recording DTC
Recheck for DTC.
Is there any DTC(s)?
Go to Step 8.
Go to Step 9.
Troubleshooting for DTC
Perform troubleshooting for applicable DTC.
Are check and repair completed?
Go to Step 9.
Check and repair defective part, and then go to Step 9.
Intermittent problem check
Check for intermittent problem.
Is there any faulty condition?
Repair or replace defective part, and then go to Step 10.
Go to Step 10.
Final confirmation test
Perform
Step 10: Final Confirmation Test
.
Is there any problem symptom, DTC or abnormal condition?
Go to Step 7.
End.
Step 1: Customer Complaint Analysis
Record details of the problem (failure, complaint) and how it occurred as described by the customer.
For this purpose, such a questionnaire form shown below will facilitate collecting information for proper analysis and diagnosis.
The form is a standard sample. It should be modified according to characteristics of each market.
Customer questionnaire form (Example)
Step 2: DTC Check, Record and Clearance
First, check for DTCs (current and pending DTCs).
If DTCs are indicated, print DTC or write them down and then clear them.
Steps 3 and 4: Visual Inspection
As a preliminary step, perform visual check of the items that support proper function of the SHVS.
Step 5: Trouble Symptom Confirmation
If there is no DTC in Step 2:
Based on information obtained in
Step 1: Customer Complaint Analysis
and
Step 2: DTC Check, Record and Clearance
, check trouble symptoms.
If there is any DTC in Step 2:
Recheck DTC according to “DTC Confirmation Procedure” described in each DTC troubleshooting.
Step 6: Charging System Check
Refer to
for checking procedure.
Step 7: Rechecking and Recording DTC
Refer to
DTC Check
for checking procedure.
Step 8: Troubleshooting for DTC
Perform troubleshooting for applicable DTC and repair or replace faulty parts.
Step 9: Intermittent Problem Check
If there is no DTC in Step 2:
Check for intermittent problem.
If there is any DTC in Step 2:
Check parts related to detected DTC (e.g. wire harness, connector, etc.).
Step 10: Final Confirmation Test
Check that the problem symptom does not recur and the vehicle is free from any abnormal conditions. If what has been repaired is related to DTC, clear DTC once, perform DTC confirmation procedure and check that no DTC is indicated.

---

## AENLSB0AB104002 - SHVS System Self-Diagnosis Function
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104002.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references: none

Content:
SHVS System Self-Diagnosis Function
Description
ECM, ISG, DC/DC converter and auxiliary power module (lithium-ion battery) monitor conditions of the system components and circuits. When an abnormal condition in the system occurs, ECM, ISG, DC/DC converter and auxiliary power module (lithium-ion battery) perform controls as follows.
Self-Diagnosis Function
ECM, ISG, DC/DC converter and auxiliary power module (lithium-ion battery) have a self-diagnosis function that stores DTCs for abnormalities detected in the SHVS system. Stored DTCs remain in the memory of ECM, ISG, DC/DC converter and auxiliary power module (lithium-ion battery) until they are cleared.
Warning Function
When a malfunction is detected in ECM, ISG, DC/DC converter and/or auxiliary power module (lithium-ion battery), any or all of them blink the ENG A-STOP warning light (1) and turn on the charge warning light (2) causing them to warn the driver. The warning lights are turned off when the normal condition is restored.
Fail-Safe Control
ECM, ISG, DC/DC converter and auxiliary power module (lithium-ion battery) perform fail-safe control when an abnormal condition related to SHVS system is detected and stops some control to protect the system.
There are different fail-safe operations depending on the detected DTC.

---

## AENLSB0AB104003 - ENG A-STOP Warning Light Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104003.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AB104010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104010.xml | ENG A-STOP Warning Light Does Not Come ON with Ignition “ON” and Engine Stopped (but Engine Can Be Started)
- AENLSB0AB104011 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104011.xml | ENG A-STOP Warning Light Remains ON or Blinking with Ignition “ON”

Content:
ENG A-STOP Warning Light Check
Set ignition “ON”.
Check that ENG A-STOP warning light lights for about 2 sec. and then goes OFF. If anything faulty is found, refer to
ENG A-STOP Warning Light Does Not Come ON with Ignition “ON” and Engine Stopped (but Engine Can Be Started)
or
ENG A-STOP Warning Light Remains ON or Blinking with Ignition “ON”
.

---

## AENLSB0AB104004 - DTC Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104004.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC Check
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Read DTC according to instructions displayed on SUZUKI scan tool and print it or write it down. Refer to Operator's Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and ECM, ISG, DC/DC converter or auxiliary power module (lithium-ion battery) is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
Check central gateway control module power supply circuit and ground circuit.
Check ECM power circuit and ground circuit.
Check ISG power supply circuit and ground circuit.
Check DC/DC converter power supply circuit and ground circuit.
Check auxiliary power module (lithium-ion battery) and its circuits.
After completing the check, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0AB104005 - DTC Clearance
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104005.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC Clearance
Set ignition “OFF”.
Connect SUZUKI scan tool to DLC (1).
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON”.
Clear DTC according to instructions displayed on SUZUKI scan tool. Refer to Operator's Manual of SUZUKI scan tool for further details.
If communication between SUZUKI scan tool and ECM, ISG, DC/DC converter or auxiliary power module (lithium-ion battery) is not possible, perform the following checks:
Check communication condition between PC and VCI (2) using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
Check central gateway control module power supply circuit and ground circuit.
Check ECM power circuit and ground circuit.
Check ISG power supply circuit and ground circuit.
Check DC/DC converter power supply circuit and ground circuit.
Check auxiliary power module (lithium-ion battery) and its circuits.
After completing DTC clearance, set ignition “OFF” and disconnect SUZUKI scan tool from DLC.

---

## AENLSB0AB104006 - DTC Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104006.xml
Tree scopes: unscoped
Outgoing references:
- AENLSB0AA304005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA304005.xml | DTC Table
- AENLSB0AAB04005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04005.xml | DTC Table

Content:
DTC Table
DTC(s) relating SHVS is shown in ISG table, DC/DC converter table, ECM table and auxiliary power module (lithium-ion battery) table.
If DTC(s) of ECM not in the following ECM table is shown, refer to the tables below.
Engine control system:
ENG A-STOP system:
For driving cycle (D/C), refer to
.
DTC Detected by ISG
DTC
DTC name
DTC detecting
condition
DTC detection
logic
Charge
warning light
ENG A-STOP
warning light
B1340
ISG ID unregistered
DTC Table
1 D/C
—
—
B1341
ECU Password unregistered
1 D/C
—
—
B1342
ECU Password mismatch
1 D/C
—
—
B1348
IMMO Not-permission
1 D/C
—
—
B134F
EEPROM Error
1 D/C
—
—
P0600
Serial Communication Link
ISG internal failure (communication failure).
1 D/C
Lights
UP
Blinks
P060C
Internal Control Module Main Processor Performance
ISG internal failure (control module failure).
1 D/C
Lights
UP
Blinks
P063B
Generator Voltage Sensor Circuit Range/Performance
ISG internal failure (voltage sensor error).
1 D/C
Lights
UP
Blinks
P0A37
Generator Temperature Sensor Circuit Range/Performance
ISG internal failure (temperature sensor error).
1 D/C
Lights
UP
Blinks
P0A3A
Generator Temperature Sensor Circuit Intermittent
ISG internal failure (temperature sensor error).
1 D/C
Lights
UP
Blinks
P0A4C
Generator Position Sensor Circuit Range/Performance
ISG internal failure (rotation sensor error).
1 D/C
Lights
UP
Blinks
P0A4F
Generator Position Sensor Circuit Intermittent
ISG internal failure (rotation sensor error).
1 D/C
Lights
UP
Blinks
P0BCD
Generator Inverter Temperature Sensor “A” Circuit Range/Performance
ISG internal failure (temperature sensor error).
1 D/C
Lights
UP
Blinks
P0BD0
Generator Inverter Temperature Sensor “A” Circuit Intermittent/Erratic
ISG internal failure (temperature sensor error).
1 D/C
Lights
UP
Blinks
P0DF1
Generator Inverter Temperature Sensor “B” Circuit Intermittent/Erratic
ISG internal failure (temperature sensor error).
1 D/C
Lights
UP
Blinks
P0DF3
Generator Inverter Temperature Sensor “C” Circuit Intermittent/Erratic
ISG internal failure (temperature sensor error).
1 D/C
Lights
UP
Blinks
P0DF4
Generator Inverter Temperature Sensor “B” Circuit Range/Performance
ISG internal failure (temperature sensor error).
1 D/C
Lights
UP
Blinks
P0DF7
Generator Inverter Temperature Sensor “C” Circuit Range/Performance
ISG internal failure (temperature sensor error).
1 D/C
Lights
UP
Blinks
P0DFB
Generator Position Exceeding Learn Limit
ISG internal failure (rotation sensor error).
1 D/C
Lights
UP
Blinks
P0DFC
Generator Position Sensor Not Learned
ISG internal failure (rotation sensor error).
1 D/C
Lights
UP
Blinks
P1A0E
Excitation Current Sensor Correction Factor Error
ISG internal failure (current sensor error).
1 D/C
Lights
UP
Blinks
P1A0F
Excitation Current Sensor Circuit Range/Performance
ISG internal failure (current sensor error).
1 D/C
Lights
UP
Blinks
P1A10
Phase Current Sensor Correction Factor Error
ISG internal failure (current sensor error).
1 D/C
Lights
UP
Blinks
P1A11
Phase Current Sensor Circuit Range/Performance
ISG internal failure (current sensor error).
1 D/C
Lights
UP
Blinks
P1A13
General Inverter Failure
ISG internal failure (control module failure).
1 D/C
Lights
UP
Blinks
P1A14
Supply Voltage Sensor “B” Circuit Range/Performance
ISG internal failure (voltage sensor error).
1 D/C
Lights
UP
Blinks
P1A15
Supply Voltage Sensor “A” Circuit Range/Performance
ISG internal failure (voltage sensor error).
1 D/C
Lights
UP
Blinks
P1A17
Functional safety 2 - Generator Function Error
ISG internal failure (control module failure).
1 D/C
Lights
UP
Blinks
P1A18
Functional safety 3 - Generator Control Error
ISG internal failure (control module failure).
1 D/C
Lights
UP
Blinks
U0073
Control Module Communication Bus Off
1 D/C
—
—
U0100
Lost Communication With ECM
1 D/C
Lights
UP
Blinks
U1401
Invalid Data Received From ECM - Rolling Counter Error
Invalid CAN data from ECM is detected.
1 D/C
Lights
UP
Blinks
U1402
Invalid Data Received From ECM - Checksum Error
Invalid CAN data from ECM is detected.
1 D/C
Lights
UP
Blinks
DTC Detected by DC/DC Converter
DTC
DTC name
DTC detecting
condition
DTC detection
logic
Charge
warning light
ENG A-STOP
warning light
P0A94
DC/DC Converter “A” Performance
DC/DC converter internal failure.
1 D/C
Lights
UP
Blinks
P0C3A
DC/DC Converter Temperature Sensor “A” Low
DC/DC converter internal failure (temperature sensor circuit error).
1 D/C
Lights
UP
Blinks
P0C3B
DC/DC Converter Temperature Sensor “A” High
DC/DC converter internal failure (temperature sensor circuit error).
1 D/C
Lights
UP
Blinks
P0C3F
DC/DC Converter Temperature Sensor “B” Low
DC/DC converter internal failure (temperature sensor circuit error).
1 D/C
Lights
UP
Blinks
P0C40
DC/DC Converter Temperature Sensor “B” High
DC/DC converter internal failure (temperature sensor circuit error).
1 D/C
Lights
UP
Blinks
P0CA2
DC/DC Converter Step Down Voltage Performance
DC/DC converter internal failure.
1 D/C
Lights
UP
Blinks
P0D32
DC/DC Converter “A” Over Temperature
DC/DC converter internal failure (MOSFET error).
1 D/C
Lights
UP
Blinks
P0D33
DC/DC Converter Current High
DC/DC converter internal failure.
1 D/C
Lights
UP
Blinks
P0E33
DC/DC Converter Voltage Sensor “A” Low
DC/DC converter internal failure (voltage sensor circuit error).
1 D/C
Lights
UP
Blinks
P0E34
DC/DC Converter Voltage Sensor “A” High
DC/DC converter internal failure (voltage sensor circuit error).
1 D/C
Lights
UP
Blinks
P0E38
DC/DC Converter Voltage Sensor “B” Low
DC/DC converter internal failure (voltage sensor circuit error).
1 D/C
Lights
UP
Blinks
P0E39
DC/DC Converter Voltage Sensor “B” High
DC/DC converter internal failure (voltage sensor circuit error).
1 D/C
Lights
UP
Blinks
P0E53
DC/DC Converter Current Sensor “A” Circuit Low
DC/DC converter internal failure (current sensor circuit error).
1 D/C
Lights
UP
Blinks
P0E54
DC/DC Converter Current Sensor “A” Circuit High
DC/DC converter internal failure (current sensor circuit error).
1 D/C
Lights
UP
Blinks
P0E56
DC/DC Converter Input Voltage Too Low
Voltage of 48V side is lower than specified value for more than specified time.
1 D/C
Lights
UP
Blinks
P0E57
DC/DC Converter Input Voltage Too High
Voltage of 48V side is higher than specified value for more than specified time.
1 D/C
Lights
UP
Blinks
P0E5A
DC/DC Converter Temperature Sensor “C” Circuit Low
DC/DC converter internal failure (temperature sensor circuit error).
1 D/C
Lights
UP
Blinks
P0E5B
DC/DC Converter Temperature Sensor “C” Circuit High
DC/DC converter internal failure (temperature sensor circuit error).
1 D/C
Lights
UP
Blinks
P0E98
DC/DC Converter Voltage Sensor “C” Circuit Low
DC/DC converter internal failure (voltage sensor circuit error).
1 D/C
Lights
UP
Blinks
P0E99
DC/DC Converter Voltage Sensor “C” Circuit High
DC/DC converter internal failure (voltage sensor circuit error).
1 D/C
Lights
UP
Blinks
P0E9D
DC/DC Converter Current Sensor “B” Circuit Low
DC/DC converter internal failure (current sensor circuit error).
1 D/C
Lights
UP
Blinks
P0E9E
DC/DC Converter Current Sensor “B” Circuit High
DC/DC converter internal failure (current sensor circuit error).
1 D/C
Lights
UP
Blinks
P1C00
DC/DC Converter Safety Switch Failure
DC/DC converter internal failure.
1 D/C
Lights
UP
Blinks
P1C01
DC/DC Converter Shut-off Path
DC/DC converter internal failure.
1 D/C
Lights
UP
Blinks
P1C02
DC/DC Converter Voltage Sensor “D” Low
DC/DC converter internal failure (voltage sensor circuit error).
1 D/C
Lights
UP
Blinks
P1C03
DC/DC Converter Voltage Sensor “D” High
DC/DC converter internal failure (voltage sensor circuit error).
1 D/C
Lights
UP
Blinks
P1C04
DC/DC Converter Current Control Without Energy Transformation
DC/DC converter internal failure.
1 D/C
Lights
UP
Blinks
P1C05
DC/DC Converter Pre-charge Time Out
Impossible to apply 48V side voltage within specified time.
1 D/C
Lights
UP
Blinks
P1C06
DC/DC Converter HV Over Current
DC/DC converter internal failure.
1 D/C
Lights
UP
Blinks
P1C07
DC/DC Converter HV Over Voltage HW
48V side is over voltage.
1 D/C
Lights
UP
Blinks
P1C08
DC/DC Converter LV Under Voltage
Voltage of 12V side is lower than specified value for more than specified time.
1 D/C
Lights
UP
Blinks
P1C09
DC/DC Converter LV Over Voltage
Voltage of 12V side is higher than specified value for more than specified time.
1 D/C
Lights
UP
Blinks
P1C0A
DC/DC Converter LV Over Voltage HW
12V side is over voltage.
1 D/C
Lights
UP
Blinks
P1C0B
DC/DC Converter Current Control In Forward Mode
DC/DC converter internal failure.
1 D/C
Lights
UP
Blinks
P1C0D
DC/DC Converter Temperature Sensor “D” Low
DC/DC converter internal failure (temperature sensor circuit error).
1 D/C
Lights
UP
Blinks
P1C0E
DC/DC Converter Temperature Sensor “D” High
DC/DC converter internal failure (temperature sensor circuit error).
1 D/C
Lights
UP
Blinks
P1C0F
DC/DC Converter Temperature Sensor “E” Low
DC/DC converter internal failure (temperature sensor circuit error).
1 D/C
Lights
UP
Blinks
P1C10
DC/DC Converter Temperature Sensor “E” High
DC/DC converter internal failure (temperature sensor circuit error).
1 D/C
Lights
UP
Blinks
P1C11
DC/DC Converter Temperature Sensor “F” Low
DC/DC converter internal failure (temperature sensor circuit error).
1 D/C
Lights
UP
Blinks
P1C12
DC/DC Converter Temperature Sensor “F” High
DC/DC converter internal failure (temperature sensor circuit error).
1 D/C
Lights
UP
Blinks
P1C13
DC/DC Converter Temperature Sensor “G” Low
DC/DC converter internal failure (temperature sensor circuit error).
1 D/C
Lights
UP
Blinks
P1C14
DC/DC Converter Temperature Sensor “G” High
DC/DC converter internal failure (temperature sensor circuit error).
1 D/C
Lights
UP
Blinks
P1C15
DC/DC Converter 13V5 Power Supply Under Voltage
DC/DC converter internal failure (MOSFET error).
1 D/C
Lights
UP
Blinks
P1C16
DC/DC Converter 13V5 Power Supply Over Voltage
DC/DC converter internal failure (MOSFET error).
1 D/C
Lights
UP
Blinks
P1C17
DC/DC Converter 13V5 Voltage Sensor Low
DC/DC converter internal failure (voltage sensor circuit error).
1 D/C
Lights
UP
Blinks
P1C18
DC/DC Converter 13V5 Voltage Sensor High
DC/DC converter internal failure (voltage sensor circuit error).
1 D/C
Lights
UP
Blinks
P1C19
DC/DC Converter Vdd5V Power Supply Over/Under Voltage
DC/DC converter internal failure (microcomputer or power supply circuit is failure).
1 D/C
Lights
UP
Blinks
P1C1A
DC/DC Converter Cooling FAN Harness Open Circuit
Cooling fan signal circuit is open.
1 D/C
-
Blinks
P1C1B
DC/DC Converter Level 2 SW Failure
DC/DC converter internal failure.
1 D/C
Lights
UP
Blinks
P1C1C
DC/DC Converter LV Current Fusa SW
DC/DC converter internal failure.
1 D/C
Lights
UP
Blinks
P1C1D
DC/DC Converter Auxiliary Voltage
DC/DC converter internal failure.
1 D/C
Lights
UP
Blinks
P1C1E
DC/DC Converter LV Over Voltage Level 2 SW
DC/DC converter internal failure.
1 D/C
Lights
UP
Blinks
P1C1F
DC/DC Converter LV Voltage Fusa SW
DC/DC converter internal failure.
1 D/C
Lights
UP
Blinks
P1C20
DC/DC Converter HV Voltage Fusa SW 1
DC/DC converter internal failure.
1 D/C
Lights
UP
Blinks
P1C21
DC/DC Converter HV Voltage Fusa SW 2
DC/DC converter internal failure.
1 D/C
Lights
UP
Blinks
P1C22
DC/DC Converter LV Current Offset
DC/DC converter internal failure (current sensor circuit error).
1 D/C
Lights
UP
Blinks
P1C23
DC/DC Converter Reverse Error
DC/DC converter internal failure.
1 D/C
Lights
UP
Blinks
P1C24
DC/DC Converter HV Current Offset
DC/DC converter internal failure (current sensor circuit error).
1 D/C
Lights
UP
Blinks
U0073
Control Module Communication Bus Off
1 D/C
Lights
UP
Blinks
U0100
Lost Communication With ECM
1 D/C
Lights
UP
Blinks
U1401
Invalid Data Received From ECM - Rolling Counter Error
Invalid CAN data from ECM is detected.
1 D/C
Lights
UP
Blinks
U1402
Invalid Data Received From ECM - Checksum Error
Invalid CAN data from ECM is detected.
1 D/C
Lights
UP
Blinks
DTC Detected by ECM
DTC
DTC name
DTC detecting condition
DTC detection logic
Charge warning light
ENG A-STOP warning light
P13B0
ISG Belt
ISG is not rotating although engine is running.
1 D/C
Lights up
Blinks
P13D0
Brake Stroke Sensor “A” Circuit Range / Performance
Brake stroke sensor signal does not change although brake master cylinder pressure changes.
1 D/C
—
Blinks
P13D1
Brake Stroke Sensor Circuit High
Voltage of brake stroke sensor signal circuit is higher than 4.7 V for more than specified time.
1 D/C
—
Blinks
P13D2
Brake Stroke Sensor Circuit Low
Voltage of brake stroke sensor signal circuit is lower than 0.3 V for more than specified time.
1 D/C
—
Blinks
P13D3
Brake Stroke Sensor Offset
Correction value for brake stroke sensor zero adjustment is more than specified value.
1 D/C
—
Blinks
P1D00
48V-ISG System
48V-ISG system error with ECM
1 D/C
Lights
UP
Blinks
P1D01
48V-ISG System Voltage
Any of the following conditions is met.
System voltage is lower than 24 V or higher than 52 V with engine running.
System voltage is higher than 58 V.
1 D/C
Lights
UP
Blinks
U1460
Invalid Data Received (ABS/ESP ® Control Module)
Communication error with ESP ® control module
1 D/C
—
Blinks
U1468
Invalid Data Received (Battery Control Module (lithium-ion battery))
Communication error with auxiliary power module (lithium-ion battery)
1 D/C
Lights
UP
Blinks
U1469
Invalid Data Received (Battery Control Module (lithium-ion battery))
Communication error with auxiliary power module (lithium-ion battery)
1 D/C
Lights
UP
Blinks
U1471
Invalid Data Received (ISG Control Module)
Communication error with ISG
1 D/C
Lights
UP
Blinks
U1472
Invalid Data Received (ISG Control Module)
Communication error with ISG
1 D/C
Lights
UP
Blinks
U1478
Invalid Data Received (DC/DC Converter Control Module)
Communication error with DC/DC converter
1 D/C
Lights
UP
Blinks
U1479
Invalid Data Received (DC/DC Converter Control Module)
Communication error with DC/DC converter
1 D/C
Lights
UP
Blinks
DTC Detected by Auxiliary Power Module (Lithium-Ion Battery)
Refer to
DTC Table
.

---

## AENLSB0AB104007 - Fail-Safe Table
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104007.xml
Tree scopes: unscoped
Outgoing references:
- AENLSB0AAB04006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04006.xml | Fail-Safe Table

Content:
Fail-Safe Table
When any of the following DTCs is detected, ECM control enters the fail-safe mode as long as the failure condition associated with the DTC continues. The fail-safe mode is canceled when ECM, ISG, DC/DC converter and auxiliary power module (lithium-ion battery) detects normal condition.
DTC Detected by ISG
DTC
DTC name
Fail-safe operation
B1340
ISG ID unregistered
—
B1341
ECU Password unregistered
B1342
ECU Password mismatch
B1348
IMMO Not-permission
B134F
EEPROM Error
P0600
Serial Communication Link
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P060C
Internal Control Module Main Processor Performance
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P063B
Generator Voltage Sensor Circuit Range/Performance
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P0A37
Generator Temperature Sensor Circuit Range/Performance
ISG stops control of ISG.
ISG limits power generation.
P0A3A
Generator Temperature Sensor Circuit Intermittent
ISG stops control of ISG.
ISG limits power generation.
P0A4C
Generator Position Sensor Circuit Range/Performance
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P0A4F
Generator Position Sensor Circuit Intermittent
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P0BCD
Generator Inverter Temperature Sensor “A” Circuit Range/Performance
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P0BD0
Generator Inverter Temperature Sensor “A” Circuit Intermittent/Erratic
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P0DF1
Generator Inverter Temperature Sensor “B” Circuit Intermittent/Erratic
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P0DF3
Generator Inverter Temperature Sensor “C” Circuit Intermittent/Erratic
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P0DF4
Generator Inverter Temperature Sensor “B” Circuit Range/Performance
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P0DF7
Generator Inverter Temperature Sensor “C” Circuit Range/Performance
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P0DFB
Generator Position Exceeding Learn Limit
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P0DFC
Generator Position Sensor Not Learned
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P1A0E
Excitation Current Sensor Correction Factor Error
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P1A0F
Excitation Current Sensor Circuit Range/Performance
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P1A10
Phase Current Sensor Correction Factor Error
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P1A11
Phase Current Sensor Circuit Range/Performance
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P1A13
General Inverter Failure
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P1A14
Supply Voltage Sensor “B” Circuit Range/Performance
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P1A15
Supply Voltage Sensor “A” Circuit Range/Performance
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P1A17
Functional safety 2 - Generator Function Error
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
P1A18
Functional safety 3 - Generator Control Error
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
U0073
Control Module Communication Bus Off
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
U0100
Lost Communication With ECM
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
U1401
Invalid Data Received From ECM - Rolling Counter Error
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
U1402
Invalid Data Received From ECM - Checksum Error
ISG stops control of ISG.
ISG stops the power supply to auxiliary power module (lithium-ion battery).
DTC Detected by DC/DC Converter
DTC
DTC name
Fail-safe operation
P0A94
DC/DC Converter “A” Performance
DC/DC converter stops the power supply to 12V electrical load and battery.
P0C3A
DC/DC Converter Temperature Sensor “A” Low
DC/DC converter stops the power supply to 12V electrical load and battery.
P0C3B
DC/DC Converter Temperature Sensor “A” High
DC/DC converter stops the power supply to 12V electrical load and battery.
P0C3F
DC/DC Converter Temperature Sensor “B” Low
DC/DC converter stops the power supply to 12V electrical load and battery.
P0C40
DC/DC Converter Temperature Sensor “B” High
DC/DC converter stops the power supply to 12V electrical load and battery.
P0CA2
DC/DC Converter Step Down Voltage Performance
DC/DC converter stops the power supply to 12V electrical load and battery.
P0D32
DC/DC Converter “A” Over Temperature
DC/DC converter stops the power supply to 12V electrical load and battery.
P0D33
DC/DC Converter Current High
DC/DC converter stops the power supply to 12V electrical load and battery.
P0E33
DC/DC Converter Voltage Sensor “A” Low
DC/DC converter stops the power supply to 12V electrical load and battery.
P0E34
DC/DC Converter Voltage Sensor “A” High
DC/DC converter stops the power supply to 12V electrical load and battery.
P0E38
DC/DC Converter Voltage Sensor “B” Low
DC/DC converter stops the power supply to 12V electrical load and battery.
P0E39
DC/DC Converter Voltage Sensor “B” High
DC/DC converter stops the power supply to 12V electrical load and battery.
P0E53
DC/DC Converter Current Sensor “A” Circuit Low
DC/DC converter stops the power supply to 12V electrical load and battery.
P0E54
DC/DC Converter Current Sensor “A” Circuit High
DC/DC converter stops the power supply to 12V electrical load and battery.
P0E56
DC/DC Converter Input Voltage Too Low
DC/DC converter stops the power supply to 12V electrical load and battery.
P0E57
DC/DC Converter Input Voltage Too High
DC/DC converter stops the power supply to 12V electrical load and battery.
P0E5A
DC/DC Converter Temperature Sensor “C” Circuit Low
DC/DC converter stops the power supply to 12V electrical load and battery.
P0E5B
DC/DC Converter Temperature Sensor “C” Circuit High
DC/DC converter stops the power supply to 12V electrical load and battery.
P0E98
DC/DC Converter Voltage Sensor “C” Circuit Low
DC/DC converter stops the power supply to 12V electrical load and battery.
P0E99
DC/DC Converter Voltage Sensor “C” Circuit High
DC/DC converter stops the power supply to 12V electrical load and battery.
P0E9D
DC/DC Converter Current Sensor “B” Circuit Low
DC/DC converter stops the power supply to 12V electrical load and battery.
P0E9E
DC/DC Converter Current Sensor “B” Circuit High
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C00
DC/DC Converter Safety Switch Failure
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C01
DC/DC Converter Shut-off Path
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C02
DC/DC Converter Voltage Sensor “D” Low
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C03
DC/DC Converter Voltage Sensor “D” High
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C04
DC/DC Converter Current Control Without Energy Transformation
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C05
DC/DC Converter Pre-charge Time Out
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C06
DC/DC Converter HV Over Current
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C07
DC/DC Converter HV Over Voltage HW
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C08
DC/DC Converter LV Under Voltage
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C09
DC/DC Converter LV Over Voltage
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C0A
DC/DC Converter LV Over Voltage HW
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C0B
DC/DC Converter Current Control In Forward Mode
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C0D
DC/DC Converter Temperature Sensor “D” Low
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C0E
DC/DC Converter Temperature Sensor “D” High
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C0F
DC/DC Converter Temperature Sensor “E” Low
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C10
DC/DC Converter Temperature Sensor “E” High
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C11
DC/DC Converter Temperature Sensor “F” Low
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C12
DC/DC Converter Temperature Sensor “F” High
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C13
DC/DC Converter Temperature Sensor “G” Low
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C14
DC/DC Converter Temperature Sensor “G” High
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C15
DC/DC Converter 13V5 Power Supply Under Voltage
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C16
DC/DC Converter 13V5 Power Supply Over Voltage
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C17
DC/DC Converter 13V5 Voltage Sensor Low
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C18
DC/DC Converter 13V5 Voltage Sensor High
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C19
DC/DC Converter Vdd5V Power Supply Over/Under Voltage
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C1A
DC/DC Converter Cooling FAN Harness Open Circuit
DC/DC converter operates cooling fan at maximum speed.
P1C1B
DC/DC Converter Level 2 SW Failure
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C1C
DC/DC Converter LV Current Fusa SW
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C1D
DC/DC Converter Auxiliary Voltage
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C1E
DC/DC Converter LV Over Voltage Level 2 SW
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C1F
DC/DC Converter LV Voltage Fusa SW
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C20
DC/DC Converter HV Voltage Fusa SW 1
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C21
DC/DC Converter HV Voltage Fusa SW 2
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C22
DC/DC Converter LV Current Offset
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C23
DC/DC Converter Reverse Error
DC/DC converter stops the power supply to 12V electrical load and battery.
P1C24
DC/DC Converter HV Current Offset
DC/DC converter stops the power supply to 12V electrical load and battery.
U0073
Control Module Communication Bus Off
DC/DC converter continuously supplies 12V power to electrical devices and battery.
DC/DC converter operates cooling fan at maximum speed.
U0100
Lost Communication With ECM
DC/DC converter continuously supplies 12V power to electrical devices and battery.
DC/DC converter operates cooling fan at maximum speed.
U1401
Invalid Data Received From ECM - Rolling Counter Error
DC/DC converter continuously supplies 12V power to electrical devices and battery.
DC/DC converter operates cooling fan at maximum speed.
U1402
Invalid Data Received From ECM - Checksum Error
DC/DC converter continuously supplies 12V power to electrical devices and battery.
DC/DC converter operates cooling fan at maximum speed.
DTC Detected by ECM
DTC
DTC name
Fail-safe operation
P13B0
ISG Belt
Refer to
.
P13D0
Brake Stroke Sensor “A” Circuit Range / Performance
P13D1
Brake Stroke Sensor Circuit High
P13D2
Brake Stroke Sensor Circuit Low
P13D3
Brake Stroke Sensor Offset
P1D00
48V-ISG System
P1D01
48V-ISG System Voltage
U1460
Invalid Data Received (ABS/ESP ® Control Module)
U1468
Invalid Data Received (Battery Control Module (lithium-ion battery))
U1469
Invalid Data Received (Battery Control Module (lithium-ion battery))
U1471
Invalid Data Received (ISG Control Module)
U1472
Invalid Data Received (ISG Control Module)
U1478
Invalid Data Received (DC/DC Converter Control Module)
U1479
Invalid Data Received (DC/DC Converter Control Module)
DTC Detected by Auxiliary Power Module (Lithium-Ion Battery)
Refer to
Fail-Safe Table
.

---

## AENLSB0AB104008 - Scan Tool Data
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104008.xml
Tree scopes: unscoped
Outgoing references:
- AENLSB0AAB04007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04007.xml | Scan Tool Data

Content:
Scan Tool Data
If communication between SUZUKI scan tool and ECM, ISG, DC/DC converter or auxiliary power module (lithium-ion battery) is not possible, perform the following checks:
Check communication condition between PC and VCI using SUZUKI scan tool function.
Check DLC power circuit and ground circuit.
Check CAN communication circuit and connectors between DLC and central gateway control module. (Refer to “Diagnosis flow: [a]” in “Troubleshooting” of “Troubleshooting for Lost Communication”.)
Check DLC cable. If necessary, check DLC cable by substituting a known-good DLC cable.
Check CAN communication system. (“Control Module Communication Bus Off” is detected in any control module.)
Check central gateway control module power supply circuit and ground circuit.
Check ECM power circuit and ground circuit.
Check ISG power supply circuit and ground circuit.
Check DC/DC converter power supply circuit and ground circuit.
Check auxiliary power module (lithium-ion battery) and its circuits.
ISG
Scan tool data
Normal condition / Reference value
Condition
Mileage Information
Total mileage is displayed.
—
Mileage Information Validity
Valid
Engine: Idle speed
Received total mileage data: Correct
Invalid
Engine: Idle speed
Received total mileage data: Incorrect
Pb Battery On Accumulated Day
Total operating days of lead-acid battery is displayed.
—
Pb Battery On Accumulated Time
Total operating time of lead-acid battery is displayed.
—
B-terminal Voltage Target Value
Target voltage value of “48V+” terminal is displayed.
—
ISG Torque Target Value
Target torque value of ISG is displayed.
—
Field Current Target Value
Target field current of ISG is displayed.
—
B-terminal Current Actual Value
Actual current value of “48V+” terminal is displayed.
—
B-terminal Voltage Actual Value
Battery voltage is displayed.
Ignition: “ON”
24 to 54 V
Engine: Idle speed
ISG Field Current Actual Value
Actual field current value of ISG is displayed.
—
ISG Torque Actual Value
Actual torque value of ISG is displayed.
—
12V Supply Voltage Actual Value
10 to 14 V
Ignition: “ON”
IMGU Rotation Speed Actual Value
Approx. 1,600 to 2,000 rpm
Engine: Idle speed with no load after warming up
Power MOSFET Temperature
–39 to 180 °C (–38.2 °F to 356 °F)
Engine: Idle speed with no load after warming up
Control Board Temperature
–39 to 140 °C (–38.2 °F to 284 °F)
Engine: Idle speed with no load after warming up
Scan Tool Data Definitions
Mileage Information (km)
This parameter indicates total mileage.
Mileage Information Validity (Valid / Invalid)
This parameter indicates the state of total mileage sent from meter.
Pb Battery On Accumulated Day (days)
This parameter indicates total operating days of lead-acid battery.
Pb Battery On Accumulated Time (sec)
This parameter indicates total operating time of lead-acid battery.
B-terminal Voltage Target Value (V)
This parameter indicates target voltage of “48V+” terminal.
ISG Torque Target Value (Nm) (V)
This parameter indicates target torque value of ISG.
Field Current Target Value (A)
This parameter indicates target field current value of ISG.
B-terminal Current Actual Value (A)
This parameter indicates actual current value of “48V+” terminal.
B-terminal Voltage Actual Value (V)
This parameter indicates actual voltage of “48V+” terminal.
ISG Field Current Actual Value (A)
This parameter indicates actual field current value of ISG.
ISG Torque Actual Value (Nm)
This parameter indicates actual torque value of ISG.
12V Supply Voltage Actual Value (V)
This parameter indicates actual 12 V supply voltage.
MGU Rotation Speed Actual Value (rpm)
This parameter indicates actual rotation speed of ISG.
Power MOSFET Temperature (°C, °F)
This parameter indicates temperature of power MOSFET.
Control Board Temperature (°C, °F)
This parameter indicates temperature of control board.
DC/DC Converter
Scan tool data
Normal condition / Reference value
Condition
LV derating by temperature
False
Other than conditions below
True
Engine: Idle speed
Stepped down current: limited
LV derating by power
False
Other than conditions below
True
Engine: Idle speed
Stepped down current: limited
LV derating by HV voltage
False
Other than conditions below
True
Engine: Idle speed
Stepped down current: limited
LV derating by minimum HV voltage
False
Other than conditions below
True
Engine: Idle speed
Stepped down current: limited
LV derating by HV current limit
False
Other than conditions below
True
Engine: Idle speed
Stepped down current: limited
LV derating by LV current limit
False
Other than conditions below
True
Engine: Idle speed
Stepped down current: limited
Internal Temperature
DC/DC converter internal temperature is displayed.
—
HV Voltage
24 to 54 V
Engine: Idle speed
LV Voltage
10 to 14 V
Ignition: “ON”
HV Current
Lower than 44 A
Engine: Idle speed
LV Current
Lower than 110 A
Engine: Idle speed
HV Voltage Maximum Value from MRL ON
Lower than 54 V
Engine: Idle speed
HV Voltage Minimum Value from Buck mode start
Higher than 24 V
Engine: Idle speed
LV Voltage Maximum Value from MRL ON
Lower than 16 V
Engine: Idle speed
LV Voltage Minimum Value from MRL ON
Higher than 6 V
Engine: Idle speed
HV Current Maximum Value from MRL ON
Lower than 44 A
Engine: Idle speed
HV Current Minimum Value from MRL ON
Minimum current value of 48 V circuit is displayed.
—
LV Current Maximum Value from MRL ON
Lower than 110 A
Engine: Idle speed
LV Current Minimum Value from MRL ON
Minimum current value of 12 V circuit is displayed.
—
Scan Tool Data Definitions
LV derating by temperature (False / True)
This parameter indicates the state of current limiting of DC/DC converter due to voltage drop of the converter caused by temperature conditions.
LV derating by power (False / True)
This parameter indicates the state of current limiting of DC/DC converter due to voltage drop of the converter caused by output conditions.
LV derating by HV voltage (False / True)
This parameter indicates the state of current limiting of DC/DC converter due to voltage drop of the converter caused by 48 V circuit voltage conditions.
LV derating by minimum HV voltage (False / True)
This parameter indicates the state of current limiting of DC/DC converter due to voltage drop of the converter caused by detection of voltage drop of 48 V circuit.
LV derating by HV current limit (False / True)
This parameter indicates the state of current limiting of DC/DC converter due to voltage drop of the converter caused by current condition of 48 V circuit.
LV derating by LV current limit (False / True)
This parameter indicates the state of current limiting of DC/DC converter due to voltage drop of the converter caused by current condition of 12 V circuit.
Internal Temperature (°C, °F)
This parameter indicates internal temperature of DC/DC converter.
HV Voltage (V)
This parameter indicates voltage of 48 V circuit.
LV Voltage (V)
This parameter indicates voltage of 12 V circuit.
HV Current (A)
This parameter indicates current value of 48 V circuit.
LV Current (A)
This parameter indicates current value of 12 V circuit.
HV Voltage Maximum Value from MRL ON (V)
This parameter indicates the maximum voltage of 48 V circuit.
HV Voltage Minimum Value from Buck mode start (V)
This parameter indicates the minimum voltage of 48 V circuit after start of voltage drop mode.
LV Voltage Maximum Value from MRL ON (V)
This parameter indicates the maximum voltage of 12 V circuit.
LV Voltage Minimum Value from MRL ON (V)
This parameter indicates the minimum voltage of 12 V circuit.
HV Current Maximum Value from MRL ON (A)
This parameter indicates the maximum current value of 48 V circuit.
HV Current Minimum Value from MRL ON (A)
This parameter indicates the minimum current value of 48 V circuit.
LV Current Maximum Value from MRL ON (A)
This parameter indicates the maximum current value of 12 V circuit.
LV Current Minimum Value from MRL ON (A)
This parameter indicates the minimum current value of 12 V circuit.
ECM
Refer to
.
Auxiliary Power Module (Lithium-Ion Battery)
Refer to
Scan Tool Data
.

---

## AENLSB0AB104009 - Visual Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104009.xml
Tree scopes: unscoped
Outgoing references:
- AENLSB0AAB06002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB06002.xml | Auxiliary Power Module (Lithium-Ion Battery) Inspection
- AENLSB0A0006002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0006002.xml | Intermittent Connection and Poor Contact Inspection
- AENLSB0AB106003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106003.xml | Accessory Drive Belt Inspection
- AENLSB0AB106013 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106013.xml | DC/DC Converter Inspection
- AENLSB0AB104010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104010.xml | ENG A-STOP Warning Light Does Not Come ON with Ignition “ON” and Engine Stopped (but Engine Can Be Started)
- AENLSB0AB104011 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104011.xml | ENG A-STOP Warning Light Remains ON or Blinking with Ignition “ON”

Content:
Visual Inspection
Visually check the following parts and systems.
Inspection item
Referring section
Battery (lead-acid battery) – Fluid level, corrosion of terminal
Auxiliary power module (lithium-ion battery)
Auxiliary Power Module (Lithium-Ion Battery) Inspection
Connectors of electric wire harness – Disconnection, friction
Intermittent Connection and Poor Contact Inspection
Fuses – Blown
—
ISG
Accessory drive belt
Accessory Drive Belt Inspection
Accessory drive belt tensioner and idler pulley
DC/DC converter
DC/DC Converter Inspection
Additionally check the following items at engine start, if possible.
Inspection item
Referring section
Charge warning light – Operation
ENG A-STOP warning light – Operation
ENG A-STOP Warning Light Does Not Come ON with Ignition “ON” and Engine Stopped (but Engine Can Be Started)
ENG A-STOP Warning Light Remains ON or Blinking with Ignition “ON”
MIL – Operation

---

## AENLSB0AB104010 - ENG A-STOP Warning Light Does Not Come ON with Ignition “ON” and Engine Stopped (but Engine Can Be Started)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104010.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || symptoms: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA904009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904009.xml | ENG A-STOP Warning Light Does Not Come ON with Ignition “ON” and Engine Stopped (but Engine Can Be Started)

Content:
ENG A-STOP Warning Light Does Not Come ON with Ignition “ON” and Engine Stopped (but Engine Can Be Started)
Refer to
ENG A-STOP Warning Light Does Not Come ON with Ignition “ON” and Engine Stopped (but Engine Can Be Started)
.

---

## AENLSB0AB104011 - ENG A-STOP Warning Light Remains ON or Blinking with Ignition “ON”
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104011.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || symptoms: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA904010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA904010.xml | ENG A-STOP Warning Light Remains ON or Blinking with Ignition “ON”

Content:
ENG A-STOP Warning Light Remains ON or Blinking with Ignition “ON”
Refer to
ENG A-STOP Warning Light Remains ON or Blinking with Ignition “ON”
.

---

## AENLSB0AB104013 - DTC P13B0
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104013.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P13B0
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P13B0: ISG Belt
ISG is not rotating although engine is running.
Accessory drive belt
Accessory drive belt idler pulley
Accessory drive belt auto tensioner
ISG
ECM
DTC Confirmation Procedure
Run engine at idle speed for 1 min.
DTC Troubleshooting
Accessory drive belt check
Check accessory drive belt.
Is check result OK?
Go to Step 3.
Go to Step 2.
Accessory drive belt tensioner and idler pulley check
Remove accessory drive belt.
Remove accessory drive belt auto tensioner and idler pulley.
Check ISG, accessory drive belt auto tensioner and idler pulley.
ISG:
Accessory drive belt auto tensioner and idler pulley:
Is check result OK?
Replace accessory drive belt.
Repair or replace defective parts.
ISG:
Accessory drive belt auto tensioner and / or idler pulley:
DTC recheck
Replace ISG.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P13B0 still detected?
Replace ECM and recheck DTC.
End.

---

## AENLSB0AB104015 - DTC P13D0
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104015.xml
Tree scopes: dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P13D0
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P13D0: Brake Stroke Sensor “A” Range / Performance
Brake stroke sensor signal does not change although brake master cylinder pressure changes.
Brake stroke sensor and/or its circuit
ECM
ESP ® control module
DTC Confirmation Procedure
Set ignition “ON”.
Depress brake pedal fully.
Release brake pedal.
Repeat Step 2) – 3) 3 times.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
DTC check
Check DTC in ESP ® control module.
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 3.
Parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON” and select “Data list” mode of ESP ® control module.
Check “Master Cyl Press” displayed on SUZUKI scan tool.
Is check result OK?
Go to Step 4.
Go to troubleshooting for C1028.
Brake stroke sensor check
Check brake stroke sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace brake stroke sensor.

---

## AENLSB0AB104016 - DTC P13D1 / P13D2
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104016.xml
Tree scopes: dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P13D1 / P13D2
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P13D1: Brake Stroke Sensor Circuit High
Voltage of brake stroke sensor signal circuit is higher than 4.7 V for more than specified time.
Brake stroke sensor and/or its circuit
ECM
P13D2: Brake Stroke Sensor Circuit Low
Voltage of brake stroke sensor signal circuit is lower than 0.3 V for more than specified time.
Circuit Diagram
[A]:
ECM connector (View: [a])
B1:
Brake stroke sensor signal circuit
1.
Brake stroke sensor
A1:
Brake stroke sensor power supply circuit
C1:
Brake stroke sensor ground circuit
2.
ECM
DTC Confirmation Procedure
Set ignition “ON” for 10 sec.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
Brake stroke sensor power supply circuit check
Check that ignition is “OFF”.
Disconnect brake stroke sensor connector.
Check for proper terminal connection to brake stroke sensor connector.
If connections are OK, set ignition “ON”.
Check that voltage between “A1” circuit and “C1” circuit is approx. 5 V.
Is check result OK?
Go to Step 4.
Go to Step 3.
Brake stroke sensor ground circuit check
Check that voltage between “A1” circuit and ground is approx. 5 V.
Is check result OK?
Repair or replace “C1” circuit.
If DTC is detected again, replace ECM and recheck DTC.
Repair or replace “A1” circuit.
If DTC is detected again, replace ECM and recheck DTC.
Brake stroke sensor signal circuit check
Check that ignition is “OFF”.
Disconnect “E01” connector.
Check for proper terminal connection to “E01” connector.
If connections are OK, check the following points.
Resistance of “B1” circuit: less than 1 Ω
Resistance between “B1” circuit and ground: infinity
Resistance between “B1” circuit terminal and other terminal at “E01” connector: infinity
Voltage of “B1” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair or replace defective wire harness.
Brake stroke sensor check
Check brake stroke sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace brake stroke sensor.

---

## AENLSB0AB104017 - DTC P13D3
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104017.xml
Tree scopes: dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P13D3
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P13D3: Brake Stroke Sensor Offset
Correction value for brake stroke sensor zero adjustment is more than specified value.
Brake stroke sensor
ECM
DTC Confirmation Procedure
Release brake pedal.
Set ignition “ON” for 10 sec.
DTC Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
Brake stroke sensor mounting check
Check that brake stroke sensor is mounted to brake pedal assembly properly.
Is check result OK?
Go to Step 3.
Reinstall brake stroke sensor properly.
Brake stroke sensor check
Check brake stroke sensor.
Is check result OK?
Replace ECM and recheck DTC.
Replace brake stroke sensor.

---

## AENLSB0AB104018 - DTC U0073
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104018.xml
Tree scopes: dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC U0073
Refer to
.

---

## AENLSB0AB104019 - DTC U0100
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104019.xml
Tree scopes: dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC U0100
Refer to
.

---

## AENLSB0AB104020 - Inspection of ECM and Its Circuits
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104020.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Inspection of ECM and Its Circuits
Refer to
.

---

## AENLSB0AB104021 - ECM Power Supply and Ground Circuit Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104021.xml
Tree scopes: unscoped
Outgoing references: none

Content:
ECM Power Supply and Ground Circuit Check
Refer to
.

---

## AENLSB0AB104023 - Inspection of ISG and Its Circuits
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104023.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AB104023004 -> unresolved | CAN communication signal
- AENLSB0AB104023004 -> unresolved | CAN communication signal

Content:
Inspection of ISG and Its Circuits
Voltage and Signal Check
Voltage of terminal with asterisk (*) cannot be measured by voltmeter because it is pulse signal. Check it with oscilloscope if necessary.
[A]:
ISG connector (View: [a])
“C75” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
C75-1*
WHT
CAN communication signal (low)
Refer to
CAN communication signal
.
C75-2*
BLU
CAN communication signal (high)
Refer to
CAN communication signal
.
C75-3
—
—
—
—
C75-4
BLK
Ground for ISG
Approx. 0 V
—
C75-5
—
—
—
—
C75-6
YEL
Main relay signal circuit
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
C75-2
–
C75-4
CAN communication signal (low) (2):
Channel
Probe
Terminal No.
2
+
C75-1
–
C75-4
Measurement condition
Ignition: “ON”

---

## AENLSB0AB104024 - Inspection of DC/DC Converter and Its Circuits
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104024.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AB104024004 -> unresolved | CAN communication signal
- AENLSB0AB104024004 -> unresolved | CAN communication signal

Content:
Inspection of DC/DC Converter and Its Circuits
Voltage and Signal Check
Voltage of terminal with asterisk (*) cannot be measured by voltmeter because it is pulse signal. Check it with oscilloscope if necessary.
[A]:
DC/DC converter connector (View: [a])
“L191” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
L191-1
PPL
Power supply for DC/DC converter
10 – 14 V
Constantly
L191-2*
WHT
CAN communication signal (low)
Refer to
CAN communication signal
.
L191-3
BLU
Main relay signal circuit
10 – 14 V
Ignition: “ON”
Approx. 0 V
Other than above condition
L191-4
BRN
DC/DC converter fan ground circuit
Approx. 0 V
—
L191-5
—
—
—
—
L191-6
PNK
DC/DC converter fan signal circuit
—
—
L191-7
—
—
—
—
L191-8*
BLU
CAN communication signal (high)
Refer to
CAN communication signal
.
L191-9
YEL
DC/DC converter fan power supply circuit
10 – 14 V
Ignition: “ON”
Approx. 0 V
Other than above condition
L191-10
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
CAN communication signal
CAN communication signal (high) (1):
Channel
Probe
Terminal No.
1
+
L191-8
–
Ground
CAN communication signal (low) (2):
Channel
Probe
Terminal No.
2
+
L191-2
–
Ground
Measurement condition
Ignition: “ON”

---

## AENLSB0AB104025 - Inspection of Auxiliary Power Module (Lithium-Ion Battery) and Its Circuits
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104025.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AAB04019 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AAB04019.xml | Inspection of Auxiliary Power Module (Lithium-Ion Battery) and Its Circuits

Content:
Inspection of Auxiliary Power Module (Lithium-Ion Battery) and Its Circuits
Refer to
Inspection of Auxiliary Power Module (Lithium-Ion Battery) and Its Circuits
.

---

## AENLSB0AB104026 - DTC P0600 / P060C / P1A17 / P1A18
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104026.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AB106004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106004.xml | ISG Removal and Installation

Content:
DTC P0600 / P060C / P1A17 / P1A18
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0600: Serial Communication Link
ISG internal failure (communication failure).
ISG
P060C: Internal Control Module Main Processor Performance
ISG internal failure (control module failure).
P1A17: Functional safety 2 - Generator Function Error
ISG internal failure (control module failure).
P1A18: Functional safety 3 - Generator Control Error
ISG internal failure (control module failure).
DTC Confirmation Procedure
Set ignition “ON” for 1 sec.
Run engine at idle speed for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ECM:
DC/DC converter:
Auxiliary power module (lithium-ion battery):
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
ISG check
Check ISG for proper installation referring to
ISG Removal and Installation
.
Is check result OK?
Go to Step 3.
Repair or replace defective parts, then go to Step 3.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Set ignition “ON” for 1 sec.
Check DTC.
Is DTC P0600, P060C, P1A17 or P1A18 still detected?
Replace ISG and recheck DTC.
Go to Step 4.
DTC recheck
Clear DTC.
Run engine at idle speed for 10 sec.
Check DTC.
Is DTC P0600, P060C, P1A17 or P1A18 still detected?
Replace ISG and recheck DTC.
Intermittent trouble.

---

## AENLSB0AB104027 - DTC P063B / P1A14 / P1A15
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104027.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AB106004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106004.xml | ISG Removal and Installation

Content:
DTC P063B / P1A14 / P1A15
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P063B: Generator Voltage Sensor Circuit Range/Performance
ISG internal failure (voltage sensor error).
ISG
P1A14: Supply Voltage Sensor “B” Circuit Range/Performance
ISG internal failure (voltage sensor error).
P1A15: Supply Voltage Sensor “A” Circuit Range/Performance
ISG internal failure (voltage sensor error).
DTC Confirmation Procedure
Set ignition “ON” for 1 sec.
Run engine at idle speed for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ECM:
DC/DC converter:
Auxiliary power module (lithium-ion battery):
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
ISG check
Check ISG for proper installation referring to
ISG Removal and Installation
.
Is check result OK?
Go to Step 3.
Repair or replace defective parts, then go to Step 3.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Set ignition “ON” for 1 sec.
Check DTC.
Is DTC P063B, P1A14 or P1A15 still detected?
Replace ISG and recheck DTC.
Go to Step 4.
DTC recheck
Clear DTC.
Run engine at idle speed for 10 sec.
Check DTC.
Is DTC P063B, P1A14 or P1A15 still detected?
Replace ISG and recheck DTC.
Intermittent trouble.

---

## AENLSB0AB104028 - DTC P0A37 / P0A3A / P0BCD / P0BD0 / P0DF1 / P0DF3 / P0DF4 / P0DF7
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104028.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AB106004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106004.xml | ISG Removal and Installation

Content:
DTC P0A37 / P0A3A / P0BCD / P0BD0 / P0DF1 / P0DF3 / P0DF4 / P0DF7
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0A37: Generator Temperature Sensor Circuit Range/Performance
ISG internal failure (temperature sensor error).
ISG
P0A3A: Generator Temperature Sensor Circuit Intermittent
ISG internal failure (temperature sensor error).
P0BCD: Generator Inverter Temperature Sensor “A” Circuit Range/Performance
ISG internal failure (temperature sensor error).
P0BD0: Generator Inverter Temperature Sensor “A” Circuit Intermittent/Erratic
ISG internal failure (temperature sensor error).
P0DF1: Generator Inverter Temperature Sensor “B” Circuit Intermittent/Erratic
ISG internal failure (temperature sensor error).
P0DF3: Generator Inverter Temperature Sensor “C” Circuit Intermittent/Erratic
ISG internal failure (temperature sensor error).
P0DF4: Generator Inverter Temperature Sensor “B” Circuit Range/Performance
ISG internal failure (temperature sensor error).
P0DF7: Generator Inverter Temperature Sensor “C” Circuit Range/Performance
ISG internal failure (temperature sensor error).
DTC Confirmation Procedure
Set ignition “ON” for 1 sec.
Run engine at idle speed for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ECM:
DC/DC converter:
Auxiliary power module (lithium-ion battery):
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
ISG check
Check ISG for proper installation referring to
ISG Removal and Installation
.
Is check result OK?
Go to Step 3.
Repair or replace defective parts, then go to Step 3.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Set ignition “ON” for 1 sec.
Check DTC.
Is DTC P0A37, P0A3A, P0BCD, P0BD0, P0DF1, P0DF3, P0DF4 or P0DF7 still detected?
Replace ISG and recheck DTC.
Go to Step 4.
DTC recheck
Clear DTC.
Run engine at idle speed for 10 sec.
Check DTC.
Is DTC P0A37, P0A3A, P0BCD, P0BD0, P0DF1, P0DF3, P0DF4 or P0DF7 still detected?
Replace ISG and recheck DTC.
Intermittent trouble.

---

## AENLSB0AB104029 - DTC P0A4C / P0A4F / P0DFB / P0DFC
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104029.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AB106004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106004.xml | ISG Removal and Installation

Content:
DTC P0A4C / P0A4F / P0DFB / P0DFC
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0A4C: Generator Position Sensor Circuit Range/Performance
ISG internal failure (rotation sensor error).
ISG
P0A4F: Generator Position Sensor Circuit Intermittent
ISG internal failure (rotation sensor error).
P0DFB: Generator Position Exceeding Learn Limit
ISG internal failure (rotation sensor error).
P0DFC: Generator Position Sensor Not Learned
ISG internal failure (rotation sensor error).
DTC Confirmation Procedure
Set ignition “ON” for 1 sec.
Run engine at idle speed for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ECM:
DC/DC converter:
Auxiliary power module (lithium-ion battery):
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
ISG check
Check ISG for proper installation referring to
ISG Removal and Installation
.
Is check result OK?
Go to Step 3.
Repair or replace defective parts, then go to Step 3.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Set ignition “ON” for 1 sec.
Check DTC.
Is DTC P0A4C, P0A4F, P0DFB or P0DFC still detected?
Replace ISG and recheck DTC.
Go to Step 4.
DTC recheck
Clear DTC.
Run engine at idle speed for 10 sec.
Check DTC.
Is DTC P0A4C, P0A4F, P0DFB or P0DFC still detected?
Replace ISG and recheck DTC.
Intermittent trouble.

---

## AENLSB0AB104030 - DTC P0A94 / P0CA2 / P1C05 / P1C0B / P1C1B / P1C1C / P1C1D / P1C1E / P1C1F / P1C20 / P1C21 / P1C23
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104030.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AB106012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106012.xml | DC/DC Converter Removal and Installation

Content:
DTC P0A94 / P0CA2 / P1C05 / P1C0B / P1C1B / P1C1C / P1C1D / P1C1E / P1C1F / P1C20 / P1C21 / P1C23
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0A94: DC/DC Converter “A” Performance
DC/DC converter internal failure.
DC/DC converter
P0CA2: DC/DC Converter Step Down Voltage Performance
DC/DC converter internal failure.
P1C05: DC/DC Converter Pre-charge Time Out
Impossible to apply 48V side voltage within specified time.
P1C0B: DC/DC Converter Current Control In Forward Mode
DC/DC converter internal failure.
P1C1B: DC/DC Converter Level 2 SW Failure
DC/DC converter internal failure.
P1C1C: DC/DC Converter LV Current Fusa SW
DC/DC converter internal failure.
P1C1D: DC/DC Converter Auxiliary Voltage
DC/DC converter internal failure.
P1C1E: DC/DC Converter LV Over Voltage Level 2 SW
DC/DC converter internal failure.
P1C1F: DC/DC Converter LV Voltage Fusa SW
DC/DC converter internal failure.
P1C20: DC/DC Converter HV Voltage Fusa SW 1
DC/DC converter internal failure.
P1C21: DC/DC Converter HV Voltage Fusa SW 2
DC/DC converter internal failure.
P1C23: DC/DC Converter Reverse Error
DC/DC converter internal failure.
DTC Confirmation Procedure
Run engine at idle speed for 10 sec.
DTC Troubleshooting
DC/DC converter check
Check DC/DC converter for proper installation referring to
DC/DC Converter Removal and Installation
.
Is check result OK?
Go to Step 2.
Repair or replace defective parts, then go to Step 2.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0A94, P0CA2, P1C05, P1C0B, P1C1B, P1C1C, P1C1D, P1C1E, P1C1F, P1C20, P1C21 or P1C23 still detected?
Replace DC/DC converter and recheck DTC.
Intermittent trouble.

---

## AENLSB0AB104031 - DTC P0C3A / P0C3B / P0C3F / P0C40 / P0E5A / P0E5B / P1C0D / P1C0E / P1C0F / P1C10 / P1C11 / P1C12 / P1C13 / P1C14
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104031.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AB106012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106012.xml | DC/DC Converter Removal and Installation

Content:
DTC P0C3A / P0C3B / P0C3F / P0C40 / P0E5A / P0E5B / P1C0D / P1C0E / P1C0F / P1C10 / P1C11 / P1C12 / P1C13 / P1C14
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0C3A: DC/DC Converter Temperature Sensor “A” Low
DC/DC converter internal failure (temperature sensor circuit error).
DC/DC converter
P0C3B: DC/DC Converter Temperature Sensor “A” High
DC/DC converter internal failure (temperature sensor circuit error).
P0C3F: DC/DC Converter Temperature Sensor “B” Low
DC/DC converter internal failure (temperature sensor circuit error).
P0C40: DC/DC Converter Temperature Sensor “B” High
DC/DC converter internal failure (temperature sensor circuit error).
P0E5A: DC/DC Converter Temperature Sensor “C” Circuit Low
DC/DC converter internal failure (temperature sensor circuit error).
P0E5B: DC/DC Converter Temperature Sensor “C” Circuit High
DC/DC converter internal failure (temperature sensor circuit error).
P1C0D: DC/DC Converter Temperature Sensor “D” Low
DC/DC converter internal failure (temperature sensor circuit error).
P1C0E: DC/DC Converter Temperature Sensor “D” High
DC/DC converter internal failure (temperature sensor circuit error).
P1C0F: DC/DC Converter Temperature Sensor “E” Low
DC/DC converter internal failure (temperature sensor circuit error).
P1C10: DC/DC Converter Temperature Sensor “E” High
DC/DC converter internal failure (temperature sensor circuit error).
P1C11: DC/DC Converter Temperature Sensor “F” Low
DC/DC converter internal failure (temperature sensor circuit error).
P1C12: DC/DC Converter Temperature Sensor “F” High
DC/DC converter internal failure (temperature sensor circuit error).
P1C13: DC/DC Converter Temperature Sensor “G” Low
DC/DC converter internal failure (temperature sensor circuit error).
P1C14: DC/DC Converter Temperature Sensor “G” High
DC/DC converter internal failure (temperature sensor circuit error).
DTC Confirmation Procedure
Set ignition “ON” for 10 sec.
DTC Troubleshooting
DC/DC converter check
Check DC/DC converter for proper installation referring to
DC/DC Converter Removal and Installation
.
Is check result OK?
Go to Step 2.
Repair or replace defective parts, then go to Step 2.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0C3A, P0C3B, P0C3F, P0C40, P0E5A, P0E5B, P1C0D, P1C0E, P1C0F, P1C10, P1C11, P1C12, P1C13 or P1C14 still detected?
Replace DC/DC converter and recheck DTC.
Intermittent trouble.

---

## AENLSB0AB104032 - DTC P0D32 / P1C1A
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104032.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AB106012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106012.xml | DC/DC Converter Removal and Installation

Content:
DTC P0D32 / P1C1A
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0D32: DC/DC Converter “A” Over Temperature
DC/DC converter internal failure (MOSFET error).
DC/DC converter
P1C1A: DC/DC Converter Cooling FAN Harness Open Circuit
Cooling fan signal circuit is open.
DTC Confirmation Procedure
Set ignition “ON” for 10 sec.
DTC Troubleshooting
DC/DC converter check
Check DC/DC converter.
Is check result OK?
Go to Step 2.
Repair or replace defective part, then go to Step 2.
DC/DC converter check
Check DC/DC converter for proper installation referring to
DC/DC Converter Removal and Installation
.
Is check result OK?
Go to Step 3.
Repair or replace defective parts, then go to Step 3.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0D32 or P1C1A still detected?
Replace DC/DC converter and recheck DTC.
Intermittent trouble.

---

## AENLSB0AB104033 - DTC P0D33 / P0E33 / P0E34 / P0E38 / P0E39 / P0E53 / P0E54 / P0E98 / P0E99
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104033.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AB106012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106012.xml | DC/DC Converter Removal and Installation

Content:
DTC P0D33 / P0E33 / P0E34 / P0E38 / P0E39 / P0E53 / P0E54 / P0E98 / P0E99
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0D33: DC/DC Converter Current High
DC/DC converter internal failure.
Power supply circuit (12V cable)
DC/DC converter
P0E33: DC/DC Converter Voltage Sensor “A” Low
DC/DC converter internal failure (voltage sensor circuit error).
P0E34: DC/DC Converter Voltage Sensor “A” High
DC/DC converter internal failure (voltage sensor circuit error).
P0E38: DC/DC Converter Voltage Sensor “B” Low
DC/DC converter internal failure (voltage sensor circuit error).
P0E39: DC/DC Converter Voltage Sensor “B” High
DC/DC converter internal failure (voltage sensor circuit error).
P0E53: DC/DC Converter Current Sensor “A” Circuit Low
DC/DC converter internal failure (current sensor circuit error).
P0E54: DC/DC Converter Current Sensor “A” Circuit High
DC/DC converter internal failure (current sensor circuit error).
P0E98: DC/DC Converter Voltage Sensor “C” Circuit Low
DC/DC converter internal failure (voltage sensor circuit error).
P0E99: DC/DC Converter Voltage Sensor “C” Circuit High
DC/DC converter internal failure (voltage sensor circuit error).
DTC Confirmation Procedure
Set ignition “ON” for 10 sec.
DTC Troubleshooting
DC/DC converter check
Check DC/DC converter for proper installation referring to
DC/DC Converter Removal and Installation
.
Is check result OK?
Go to Step 2.
Repair or replace defective parts, then go to Step 2.
Terminal voltage check
Set ignition “ON”.
Check terminal voltage between”12V+” terminal and “GND” terminal.
Is voltage between 6 and 16 V?
Go to Step 3.
Repair defective wire harness.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0D33, P0E33, P0E34, P0E38, P0E39, P0E53, P0E54, P0E98 or P0E99 still detected?
Replace DC/DC converter and recheck DTC.
Intermittent trouble.

---

## AENLSB0AB104034 - DTC P0E56 / P0E57 / P0E9D / P0E9E / P1C02 / P1C03 / P1C06
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104034.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AB106012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106012.xml | DC/DC Converter Removal and Installation

Content:
DTC P0E56 / P0E57 / P0E9D / P0E9E / P1C02 / P1C03 / P1C06
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P0E56: DC/DC Converter Input Voltage Too Low
Voltage of 48V side is lower than specified value for more than specified time.
Power supply circuit (48V cable)
DC/DC converter
P0E57: DC/DC Converter Input Voltage Too High
Voltage of 48V side is higher than specified value for more than specified time.
P0E9D: DC/DC Converter Current Sensor “B” Circuit Low
DC/DC converter internal failure (current sensor circuit error).
P0E9E: DC/DC Converter Current Sensor “B” Circuit High
DC/DC converter internal failure (current sensor circuit error).
P1C02: DC/DC Converter Voltage Sensor “D” Low
DC/DC converter internal failure (voltage sensor circuit error).
P1C03: DC/DC Converter Voltage Sensor “D” High
DC/DC converter internal failure (voltage sensor circuit error).
P1C06: DC/DC Converter HV Over Current
DC/DC converter internal failure.
DTC Confirmation Procedure
Run engine at idle speed for 10 sec.
DTC Troubleshooting
DTC check
Check DTC in auxiliary power module (lithium-ion battery).
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DC/DC converter check
Check DC/DC converter for proper installation referring to
DC/DC Converter Removal and Installation
.
Is check result OK?
Go to Step 3.
Repair or replace defective parts, then go to Step 2.
Terminal voltage check
Servicing SHVS system involves a danger of electric shock.
For precaution, use insulation tool and gloves.
Set ignition “ON”.
Check terminal voltage between “48V+” terminal and “GND” terminal is battery voltage.
Is check result OK?
Go to Step 4.
Repair defective wire harness.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P0E56, P0E57, P0E9D, P0E9E, P1C02, P1C03 or P1C06 still detected?
Replace DC/DC converter and recheck DTC.
Intermittent trouble.

---

## AENLSB0AB104035 - DTC P1A0E / P1A0F / P1A10 / P1A11 / P1A13
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104035.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AB106004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106004.xml | ISG Removal and Installation

Content:
DTC P1A0E / P1A0F / P1A10 / P1A11 / P1A13
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1A0E: Excitation Current Sensor Correction Factor Error
ISG internal failure (current sensor error).
ISG
P1A0F: Excitation Current Sensor Circuit Range/Performance
ISG internal failure (current sensor error).
P1A10: Phase Current Sensor Correction Factor Error
ISG internal failure (current sensor error).
P1A11: Phase Current Sensor Circuit Range/Performance
ISG internal failure (current sensor error).
P1A13: General Inverter Failure
ISG internal failure (control module failure).
DTC Confirmation Procedure
Set ignition “ON” for 1 sec.
Run engine at idle speed for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ECM:
DC/DC converter:
Auxiliary power module (lithium-ion battery):
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
ISG check
Check ISG for proper installation referring to
ISG Removal and Installation
.
Is check result OK?
Go to Step 3.
Repair or replace defective parts, then go to Step 3.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Set ignition “ON” for 1 sec.
Check DTC.
Is DTC P1A0E, P1A0F, P1A10, P1A11 or P1A13 still detected?
Replace ISG and recheck DTC.
Go to Step 4.
DTC recheck
Clear DTC.
Run engine at idle speed for 10 sec.
Check DTC.
Is DTC P1A0E, P1A0F, P1A10, P1A11 or P1A13 still detected?
Replace ISG and recheck DTC.
Intermittent trouble.

---

## AENLSB0AB104036 - DTC P1C00 / P1C01 / P1C08 / P1C09 / P1C0A / P1C15 / P1C16 / P1C17 / P1C18 / P1C19
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104036.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AB106012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106012.xml | DC/DC Converter Removal and Installation

Content:
DTC P1C00 / P1C01 / P1C08 / P1C09 / P1C0A / P1C15 / P1C16 / P1C17 / P1C18 / P1C19
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1C00: DC/DC Converter Safety Switch Failure
DC/DC converter internal failure.
DC/DC converter
P1C01: DC/DC Converter Shut-off Path
DC/DC converter internal failure.
P1C08: DC/DC Converter LV Under Voltage
Voltage of 12V side is lower than specified value for more than specified time.
P1C09: DC/DC Converter LV Over Voltage
Voltage of 12V side is higher than specified value for more than specified time.
P1C0A: DC/DC Converter LV Over Voltage HW
12V side is over voltage.
P1C15: DC/DC Converter 13V5 Power Supply Under Voltage
DC/DC converter internal failure (MOSFET error).
P1C16: DC/DC Converter 13V5 Power Supply Over Voltage
DC/DC converter internal failure (MOSFET error).
P1C17: DC/DC Converter 13V5 Voltage Sensor Low
DC/DC converter internal failure (voltage sensor circuit error).
P1C18: DC/DC Converter 13V5 Voltage Sensor High
DC/DC converter internal failure (voltage sensor circuit error).
P1C19: DC/DC Converter Vdd5V Power Supply Over/Under Voltage
DC/DC converter internal failure (microcomputer or power supply circuit is failure).
DTC Confirmation Procedure
Set ignition “ON” for 10 sec.
DTC Troubleshooting
DC/DC converter check
Check DC/DC converter for proper installation referring to
DC/DC Converter Removal and Installation
.
Is check result OK?
Go to Step 2.
Repair or replace defective parts, then go to Step 2.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P1C00, P1C01, P1C08, P1C09, P1C0A, P1C15, P1C16, P1C17, P1C18 or P1C19 still detected?
Replace DC/DC converter and recheck DTC.
Intermittent trouble.

---

## AENLSB0AB104037 - DTC P1C04
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104037.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AB106012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106012.xml | DC/DC Converter Removal and Installation

Content:
DTC P1C04
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1C04: DC/DC Converter Current Control Without Energy Transformation
DC/DC converter internal failure.
Power supply circuit (12V cable)
Power supply circuit (48V cable)
DC/DC converter
DTC Confirmation Procedure
Run engine at idle speed for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ISG:
Auxiliary power module (lithium-ion battery):
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DC/DC converter check
Check DC/DC converter for proper installation referring to
DC/DC Converter Removal and Installation
.
Is check result OK?
Go to Step 3.
Repair or replace defective parts, then go to Step 3.
Terminal voltage check
Set ignition “ON”.
Check terminal voltage between “12V+” terminal and “GND” terminal.
Is voltage between 6 and 16 V?
Go to Step 4.
Repair defective wire harness.
Terminal voltage check
Servicing SHVS system involves a danger of electric shock.
For precaution, use insulation tool and gloves.
Set ignition “ON”.
Check terminal voltage between “48V+” terminal and “GND” terminal is battery voltage.
Is check result OK?
Go to Step 5.
Repair defective wire harness.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P1C04 still detected?
Replace DC/DC converter and recheck DTC.
Intermittent trouble.

---

## AENLSB0AB104038 - DTC P1C07
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104038.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AB106012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106012.xml | DC/DC Converter Removal and Installation

Content:
DTC P1C07
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1C07: DC/DC Converter HV Over Voltage HW
48V side is over voltage.
Power supply circuit (48V cable)
DC/DC converter
DTC Confirmation Procedure
Run engine at idle speed for 10 sec.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
ISG:
Auxiliary power module (lithium-ion battery):
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DC/DC converter check
Check DC/DC converter for proper installation referring to
DC/DC Converter Removal and Installation
.
Is check result OK?
Go to Step 3.
Repair or replace defective parts, then go to Step 3.
Scan tool parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON” and select “Data list” mode of DC/DC converter.
Run engine at idle speed.
Check “HV Voltage” using “Data list” mode on SUZUKI scan tool.
Is voltage over 56 V?
Replace DC/DC converter and recheck DTC.
Go to Step 4.
Terminal voltage check
Servicing SHVS system involves a danger of electric shock.
For precaution, use insulation tool and gloves.
Set ignition “ON”.
Check terminal voltage between “48V+” terminal and “GND” terminal is battery voltage.
Is check result OK?
Go to Step 5.
Repair defective wire harness.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P1C07 still detected?
Replace DC/DC converter and recheck DTC.
Intermittent trouble.

---

## AENLSB0AB104039 - DTC P1C22
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104039.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AB106012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106012.xml | DC/DC Converter Removal and Installation

Content:
DTC P1C22
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1C22: DC/DC Converter LV Current Offset
DC/DC converter internal failure (current sensor circuit error).
Power supply circuit (12V cable)
DC/DC converter
DTC Confirmation Procedure
Set ignition “ON” for 10 sec.
DTC Troubleshooting
DC/DC converter check
Check DC/DC converter for proper installation referring to
DC/DC Converter Removal and Installation
.
Is check result OK?
Go to Step 2.
Repair or replace defective parts, then go to Step 2.
Scan tool parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON” and select “Data list” mode of DC/DC converter.
Set ignition “ON”.
Check “LV Current” using “Data list” mode on SUZUKI scan tool.
Is current less than –10 A or more than 10 A?
Replace DC/DC converter and recheck DTC.
Go to Step 3.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P1C22 still detected?
Replace DC/DC converter and recheck DTC.
Intermittent trouble.

---

## AENLSB0AB104040 - DTC P1C24
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104040.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AB106012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB106012.xml | DC/DC Converter Removal and Installation

Content:
DTC P1C24
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1C24: DC/DC Converter HV Current Offset
DC/DC converter internal failure (current sensor circuit error).
Power supply circuit (48V cable)
DC/DC converter
DTC Confirmation Procedure
Set ignition “ON” for 10 sec.
DTC Troubleshooting
DTC check
Check DTC in auxiliary power module (lithium-ion battery).
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
DC/DC converter check
Check DC/DC converter for proper installation referring to
DC/DC Converter Removal and Installation
.
Is check result OK?
Go to Step 3.
Repair or replace defective parts, then go to Step 3.
Scan tool parameter check
Connect SUZUKI scan tool to DLC when ignition is “OFF”.
Set ignition “ON” and select “Data list” mode of DC/DC converter.
Set ignition “ON”.
Check “HV Current” using “Data list” mode on SUZUKI scan tool.
Is current less than –10 A or more than 10 A?
Replace DC/DC converter and recheck DTC.
Go to Step 4.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P1C24 still detected?
Replace DC/DC converter and recheck DTC.
Intermittent trouble.

---

## AENLSB0AB104041 - DTC U1401 / U1402
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104041.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC U1401 / U1402
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
U1401: Invalid Data Received From ECM – Rolling Counter Error
Invalid CAN data from ECM is detected.
CAN communication line
ECM
ISG
DC/DC converter
U1402: Invalid Data Received From ECM - Checksum Error
Invalid CAN data from ECM is detected.
DTC Confirmation Procedure
Set ignition “ON”.
DTC Troubleshooting
DTC check
Check DTC related to CAN communication.
Is there any CAN related DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
CAN communication circuit check
Check CAN communication circuit.
Is check result OK?
Replace ECM and recheck DTC. If DTC U1401 or U1402 is still detected, replace the following parts related to DTC and recheck DTC.
ECM:
ISG:
DC/DC converter:
Repair or replace defective wire harness.

---

## AENLSB0AB104042 - DTC P1D00
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104042.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P1D00
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1D00: 48V-ISG System
48V-ISG system error with ECM
Auxiliary power module (lithium-ion battery)
DC/DC converter
ISG
ECM
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
DTC P1D01, U0298, U108C, U1092, U1468, U1469, U1471, U1472, U1478 or U1479 is not detected.
Run engine at idle speed for 2 min.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
Auxiliary power module (lithium-ion battery):
ISG:
DC/DC converter:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
Lead-acid battery check
Check lead-acid battery.
Is check result OK?
Go to Step 3.
Repair or replace defective part and recheck DTC.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P1D00 still detected?
Go to Step 4.
Intermittent trouble.
Auxiliary power module (lithium-ion battery), ISG and DC/DC converter check
Check following control modules for proper installation.
Auxiliary power module (lithium-ion battery):
ISG:
DC/DC converter:
Is check result OK?
Go to Step 5.
Repair or replace defective parts, then go to Step 5.
DTC recheck
Perform “DTC Confirmation Procedure”.
Set ignition “OFF”, and keep ignition “OFF” for 3 min.
Disconnect negative (–) cable at battery, and wait for 10 sec.
Connect negative (–) cable, and wait for 10 sec. or more.
Recheck DTC.
Is DTC P1D00 still detected?
Go to Step 6.
Intermittent trouble.
Scan tool parameter check
Connect SUZUKI scan tool to DLC with ignition “OFF”.
Start engine at idle speed and select “Data list” mode of ISG.
Check “B-terminal Voltage Actual Value” using “Data list” mode on SUZUKI scan tool.
Is voltage below 24 V?
Go to Step 7.
Go to Step 10.
Scan tool parameter check
Connect SUZUKI scan tool to DLC with ignition “OFF”.
Start engine at idle speed and select “Data list” mode of DC/DC converter.
Check “HV Voltage” using “Data list” mode on SUZUKI scan tool.
Is voltage between 24 and 54 V?
Go to Step 8.
Go to Step 10.
Scan tool parameter check
Connect SUZUKI scan tool to DLC with ignition “OFF”.
Start engine at idle speed and select “Data list” mode of auxiliary power module (lithium-ion battery).
Check “48V Terminal Voltage” using “Data list” mode on SUZUKI scan tool.
Is voltage below 24 V?
Go to Step 9.
Go to Step 10.
Terminal voltage check
Servicing SHVS system involves a danger of electric shock.
For precaution, use insulation tool and gloves.
Check voltage within 60 sec. after engine start.
Start engine at idle speed.
Check terminal voltage between “48V+” terminal and “GND” terminal of DC/DC converter.
Is voltage below 24 V?
Replace DC/DC converter and recheck DTC.
Go to Step 10.
Scan tool parameter check
Connect SUZUKI scan tool to DLC with ignition “OFF”.
Start engine at idle speed and select “Data list” mode of auxiliary power module (lithium-ion battery).
Check “48V Terminal Voltage” using “Data list” mode on SUZUKI scan tool.
Select “Data list” mode of DC/DC converter.
Check “HV Voltage” using “Data list” mode on SUZUKI scan tool.
Check that electric potential difference between auxiliary power module (lithium-ion battery) and DC/DC converter is below 2 V.
Is check result OK?
Go to Step 11.
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
Scan tool parameter check
Connect SUZUKI scan tool to DLC with ignition “OFF”.
Start engine at idle speed and select “Data list” mode of ISG.
Check “B-terminal Voltage Actual Value” using “Data list” mode on SUZUKI scan tool.
Select “Data list” mode of DC/DC converter.
Check “HV Voltage” using “Data list” mode on SUZUKI scan tool.
Check that electric potential difference between auxiliary power module (lithium-ion battery) and DC/DC converter is below 2 V.
Is check result OK?
Replace ECM and recheck DTC.
Replace ISG and recheck DTC.

---

## AENLSB0AB104043 - DTC P1D01
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AB104043.xml
Tree scopes: bookmarks: 11 - Electric Power Train > 11A - Hybrid / EV Controls > Diagnostic Information and Procedures || dtc: 11 - Electric Power Train > Hybrid / EV Controls > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC P1D01
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
P1D01: 48V-ISG System Voltage
Any of the following conditions is met.
System voltage is lower than 24 V or higher than 52 V with engine running.
System voltage is higher than 58 V.
Power supply circuit (48V cable)
Auxiliary power module (lithium-ion battery)
DC/DC converter
ISG
ECM
DTC Confirmation Procedure
Check that the following condition is met in this “DTC Confirmation Procedure”.
DTC P1D00 is not detected.
Run engine at idle speed for 2 min.
DTC Troubleshooting
DTC check
Check following control modules for DTC.
Auxiliary power module (lithium-ion battery):
ISG:
DC/DC converter:
Is there any DTC(s) detected?
Go to troubleshooting for applicable DTC.
Go to Step 2.
Auxiliary power module (lithium-ion battery), ISG and DC/DC converter check
Check following control modules for proper installation.
Auxiliary power module (lithium-ion battery):
ISG:
DC/DC converter:
Is check result OK?
Go to Step 3.
Repair or replace defective parts, then go to Step 3.
Terminal voltage check
Servicing SHVS system involves a danger of electric shock.
For precaution, use insulation tool and gloves.
Set ignition “ON”.
Check terminal voltage between “48V+” terminal and “48V–” terminal of ISG.
Is voltage between 6 and 16 V?
Go to Step 4.
Repair or replace defective wire harness.
Terminal voltage check
Servicing SHVS system involves a danger of electric shock.
For precaution, use insulation tool and gloves.
Set ignition “ON”.
Check terminal voltage between “48V+” terminal and “GND” terminal of DC/DC converter.
Is voltage between 6 and 16 V?
Go to Step 5.
Repair or replace defective wire harness.
Terminal voltage check
Set ignition “ON”.
Check terminal voltage between “12V+” terminal and “GND” terminal of DC/DC converter.
Is voltage between 6 and 16 V?
Go to Step 6.
Repair or replace defective wire harness.
Scan tool parameter check
Connect SUZUKI scan tool to DLC with ignition “OFF”.
Set ignition “ON” and select “Data list” mode of ISG.
Check “ISG Actual Voltage” using “Data list” mode on SUZUKI scan tool.
Is voltage over 54 V?
Replace ISG and recheck DTC.
Go to Step 7.
Scan tool parameter check
Connect SUZUKI scan tool to DLC with ignition “OFF”.
Set ignition “ON” and select “Data list” mode of DC/DC converter.
Check “HV Voltage” using “Data list” mode on SUZUKI scan tool.
Is voltage over 54 V?
Replace DC/DC converter and recheck DTC.
Go to Step 8.
Scan tool parameter check
Connect SUZUKI scan tool to DLC with ignition “OFF”.
Set ignition “ON” and select “Data list” mode of auxiliary power module (lithium-ion battery).
Check “48V Terminal Voltage” using “Data list” mode on SUZUKI scan tool.
Is voltage between 24 and 54 V?
Go to Step 9.
Replace auxiliary power module (lithium-ion battery) and recheck DTC.
DTC recheck
Clear DTC.
Set ignition “OFF”.
Perform “DTC Confirmation Procedure”, and check DTC.
Is DTC P1D01 still detected?
Replace ECM and recheck DTC.
Intermittent trouble.

---
