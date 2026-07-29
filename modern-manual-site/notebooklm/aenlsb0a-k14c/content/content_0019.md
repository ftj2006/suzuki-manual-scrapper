# Content Chunk 0019

Plain-text content extracted from source files with relationship metadata.

## AENLSB0A7204017 - DTC B150D / B151A / B151C
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204017.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures || dtc: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B150D / B151A / B151C
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B150D: Temperature Control Actuator Position Sensor Circuit Low
Signal voltage of position sensor in temperature control actuator is lower than specified value (0.1 V) for specified time continuously.
Temperature control actuator circuit
Temperature control actuator
BCM
B151A: Air Flow Control Actuator Position Sensor Circuit Low
Signal voltage of position sensor in air flow control actuator is lower than specified value (0.1 V) for specified time continuously.
Air flow control actuator circuit
Air flow control actuator
BCM
B151C: Air Intake Control Actuator Position Sensor Circuit Low
Signal voltage of position sensor in air intake control actuator is lower than specified value (0.1 V) for specified time continuously.
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
The following flow shows “DTC B150D: Temperature Control Actuator Position Sensor Circuit Low”.
Check “DTC B151A / B151C” in the same manner as “DTC B150D” referring to the following table.
DTC
Parameter
Circuit
B151A
Mode Pos Sensor
“B3” and “B4” circuit
B151C
R/F Pos Sensor
”C3” and “C4” circuit
Scan tool parameter check
Check “Air Mix Pos Sen” using “Data list” mode on SUZUKI scan tool.
Is voltage below 0.1 V?
Go to Step 2.
Intermittent trouble.
Temperature control actuator position sensor signal circuit check
Disconnect temperature control actuator connector.
Check “Air Mix Pos Sen” using “Data list” mode on SUZUKI scan tool.
Is voltage below 0.1 V?
Go to Step 3.
Replace temperature control actuator.
Temperature control actuator position sensor signal circuit check
Set ignition “ON”.
Measure voltage between “A3” circuit terminal of temperature control actuator connector and ground.
Is voltage 5 V?
Go to Step 5.
Go to Step 4.
Temperature control actuator position sensor signal circuit check
Disconnect “G05” connector.
Check the following points.
Resistance of “A3” circuit: less than 1 Ω
Resistance between “A3” circuit and ground: infinity
Are resistances as specified?
Replace BCM and recheck DTC.
Replace instrument panel harness.
Temperature control actuator position sensor signal circuit check
Check that resistance between “A4” circuit and ground is infinity.
Is resistance as specified?
Replace BCM and recheck DTC.
Replace instrument panel harness.

---

## AENLSB0A7204018 - DTC B1513 / B1514 / B1531
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204018.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures || dtc: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1513 / B1514 / B1531
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1513: Temperature Control Actuator (Motor) and/or Its Circuit Malfunction
Difference between target opening and actual opening is more than specified value even though temperature control actuator has operated for specified time.
Temperature control actuator circuit
Temperature control actuator
BCM
B1514: Air Flow Control Actuator (Motor) and/or Its Circuit Malfunction
Difference between target opening and actual opening is more than specified value even though air flow control actuator has operated for specified time.
Air flow control actuator circuit
Air flow control actuator
BCM
B1531: Air Intake Control Actuator and/or Its Circuit Malfunction
Difference between target opening and actual opening is more than specified value even though air intake control actuator has operated for specified time.
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
B1513
Start engine and operate A/C system.
Change position of temperature control selector from “LO” to “HI” gradually.
B1514
Start engine and operate A/C system.
Push “MODE” (air flow) switch to change position from “VENT” to “DEF”.
B1531
Start engine and operate A/C system.
Push air intake switch to change position from “REC” to “FRE”.
DTC Troubleshooting
When DTC B1513, B1514 and/or B1531 is detected, check that there is any obstruction in opening range of actuator linkage.
The following flow shows “DTC B1513: Temperature Control Actuator (Motor) and/or Its Circuit Malfunction”.
Check “DTC B1514 / B1531” in the same manner as “DTC B1513” referring to the following table.
DTC
Parameter
Circuit
B1514
Mode Pos Sensor
“B1” and “B2” circuit
B1531
R/F Pos Sensor
“C1” and “C2” circuit
Scan tool parameter check
Check “Air Mix Pos Sen” using “Data list” mode on SUZUKI scan tool.
Is check result OK?
Intermittent trouble.
Go to Step 2.
Temperature control actuator circuit check
Disconnect “G04” and temperature control actuator connectors.
Check the following points.
Resistance of “A1” and “A2” circuits: less than 1 Ω
Resistance between each of “A1” and “A2” circuits and ground: infinity
Are resistances as specified?
Go to Step 3.
Replace instrument panel harness.
Temperature control actuator check
Check temperature control actuator.
Is actuator in good condition?
Replace BCM and recheck DTC.
Replace temperature control actuator.

---

## AENLSB0A7204019 - DTC B1546
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204019.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures || dtc: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A7204002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204002.xml | Trouble Diagnosis for Abnormal Pressure

Content:
DTC B1546
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1546: A/C Refrigerant Pressure Malfunction
A/C refrigerant pressure is less than specified value, though outside air temperature is more than specified value.
A/C refrigerant pressure sensor
Outside air temperature sensor
Insufficient of refrigerant
BCM
DTC Confirmation Procedure
Start engine and operate A/C system.
DTC Troubleshooting
A/C refrigerant pressure check
Turn on A/C switch and operate compressor.
Check “Refrigerant Pressure” using “Data list” mode on SUZUKI scan tool.
Is pressure over 0.34 MPa?
Go to Step 2.
Charge refrigerant and recheck DTC.
A/C refrigerant pressure sensor check
Check A/C refrigerant pressure sensor.
Is sensor in good condition?
Go to Step 3.
Replace A/C refrigerant pressure sensor.
Outside air temperature sensor check
Check outside air temperature sensor.
Is sensor in good condition?
Go to Step 4.
Replace outside air temperature sensor.
A/C system check
Check A/C system.
Is system in good condition?
Replace BCM and recheck DTC.
Perform
Trouble Diagnosis for Abnormal Pressure
and recheck DTC.

---

## AENLSB0A7204020 - DTC B1549 / U2005
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204020.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures || dtc: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1549 / U2005
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1549: LIN Invalid Data from BCM to Auto A/C Panel
Transmitted data from BCM to auto A/C panel via LIN is faulty.
LIN communication circuit
BCM
Auto A/C panel
U2005: LIN Lost Communication With Auto A/C Panel
Received data from auto A/C panel via LIN is faulty.
Circuit Diagram
[A]:
BCM connector (View: [a])
A1:
LIN communication signal circuit
2.
BCM
[B]:
Auto A/C panel connector (View: [a])
1.
Auto A/C panel
3.
LIN driver
DTC Confirmation Procedure
Start engine and operate A/C system.
DTC Troubleshooting
DTC check
Set ignition “ON”.
Set ignition “OFF”.
Set ignition “ON” and check for DTC.
Is DTC B1549 or U2005 still detected?
Go to Step 2.
Intermittent trouble.
LIN communication signal circuit check
Disconnect “G05” and “G227” connectors.
Check the following points.
Resistance of “A1” circuit: less than 1 Ω
Resistance between “A1” circuit and ground: infinity
Resistance between “A1” circuit terminal and other terminal at BCM connector: infinity
Resistance between “A1” circuit and battery positive (+) cable: infinity
Resistance between “A1” circuit and each fuse in J/B: infinity
Is check result OK?
Replace auto A/C panel and recheck DTC. If DTC B1549 or DTC U2005 is still detected, replace BCM and recheck DTC.
BCM:
Auto A/C panel:
Replace instrument panel harness.

---

## AENLSB0A7204021 - DTC B1563
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204021.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures > Models > K14C || dtc: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
DTC B1563
DTC Detecting Condition and Trouble Area
DTC detecting condition
Trouble area
B1563: A/C Refrigerant Pressure Sensor and/or Its Circuit Malfunction
BCM receives invalid data of A/C refrigerant pressure signal from ECM.
A/C refrigerant pressure sensor
ECM
BCM
DTC Confirmation Procedure
Check that the following condition is satisfied in this procedure.
U0073 and/or U0100 are not detected
Start engine and operate A/C system.
DTC Troubleshooting
DTC check
Check DTC of ECM.
K14C model:
Is there any DTC(s) detected?
Go to applicable DTC diagnosis flow.
K14C model:
Replace BCM and recheck DTC.

---

## AENLSB0A7204022 - DTC U0073
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204022.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures > Models > K14C || dtc: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814004.xml | Troubleshooting for Communication Bus Off:CAN (K14C Model)

Content:
DTC U0073
K14C model: Refer to
Troubleshooting for Communication Bus Off:CAN (K14C Model)
.
.

---

## AENLSB0A7204023 - DTC U0100
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204023.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures > Models > K14C || dtc: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0100
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0A7204024 - DTC U0155
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204024.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures > Models > K14C || dtc: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA814003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA814003.xml | Troubleshooting for Lost Communication:CAN (K14C Model)

Content:
DTC U0155
K14C model: Refer to
Troubleshooting for Lost Communication:CAN (K14C Model)
.
.

---

## AENLSB0A7204025 - Inspection of Auto A/C Panel and Its Circuit
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204025.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0A7206010 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206010.xml | Auto A/C Panel Removal and Installation
- AENLSB0A7204025002 -> unresolved | Reference Waveform

Content:
Inspection of Auto A/C Panel and Its Circuit
Auto A/C panel and its circuits can be checked at auto A/C panel wiring connector by measuring voltage.
If you connect a voltmeter or an ohmmeter directly to the auto A/C panel with the auto A/C panel connector disconnected, you can damage the auto A/C panel.
Never connect a voltmeter or an ohmmeter directly to any terminal on the auto A/C panel with the auto A/C panel connector disconnected.
Voltage and Signal Check
Remove auto A/C panel referring to
Auto A/C Panel Removal and Installation
.
Connect “G227” connector.
Check voltage and signal at each terminal.
As each terminal voltage is affected by the battery voltage, check that battery voltage is 11 V or more with ignition “ON”.
Normal voltage of circuits with asterisk (*1) cannot be measured correctly with voltmeter because they are pulse signals. Check them with oscilloscope.
[A]:
Auto A/C panel connector (View: [a])
1.
Auto A/C panel
“G227” connector
Terminal
Wire color
Circuit
Normal voltage
Condition
G227-2
RED
Illumination switch
Approx. 0 V
Ignition: “ON”
Lighting switch: OFF position
Approx. 12 V
Ignition: “ON”
Lighting switch: ON position
G227-4
PPL
Ground for illumination
Approx. 0 V
Ignition: “ON”
G227-5
YEL
Power supply
Approx. 12 V
Ignition: “ON”
Approx. 0 V
Ignition: “OFF”
G227-7
BRN
LIN communication signal *1
Refer to
Reference Waveform
.
G227-8
BLK
Ground for auto A/C panel
Approx. 0 V
Ignition: “ON”
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
LIN communication signal
Channel
Probe
Terminal No.
1
+
G227-7
–
G227-8
1.
LIN communication signal

---

## AENLSB0A7204026 - Inspection of A/C System Circuits at BCM
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204026.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures
Outgoing references:
- AENLSB0AA204029 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA204029.xml | Inspection of BCM and Its Circuits

Content:
Inspection of A/C System Circuits at BCM
Refer to
Inspection of BCM and Its Circuits
.

---

## AENLSB0A7204027 - Inspection of A/C System Circuits at ECM
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204027.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Diagnostic Information and Procedures > Models > K14C
Outgoing references: none

Content:
Inspection of A/C System Circuits at ECM
Check the voltage related to A/C system at ECM terminals.
K14C model:

---

## AENLSB0A7204A01 - Blower motor does not operate
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A01.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Blower motor does not operate
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

---

## AENLSB0A7204A02 - No cool air comes out (A/C system does not operate)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A02.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
No cool air comes out (A/C system does not operate)
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

---

## AENLSB0A7204A03 - No cool air comes out (Radiator cooling fan motor does not operate)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A03.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
No cool air comes out (Radiator cooling fan motor does not operate)
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

---

## AENLSB0A7204A04 - Cool air does not come out or insufficient cooling (Compressor in normal operation)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A04.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Cool air does not come out or insufficient cooling (Compressor in normal operation)
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

---

## AENLSB0A7204A05 - Cool air does not come out intermittently
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A05.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Cool air does not come out intermittently
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

---

## AENLSB0A7204A06 - Cool air comes out only at high speed
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A06.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Cool air comes out only at high speed
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

---

## AENLSB0A7204A07 - Cool air does not come out only at high speed
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A07.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Cool air does not come out only at high speed
Cool air does not come out only at high speed
Excessive amount of refrigerant
Check the amount of refrigerant.
Frosted evaporator
Check evaporator and evaporator temperature sensor.
Evaporator:
Evaporator temperature sensor:

---

## AENLSB0A7204A08 - Insufficient cool air flow
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A08.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Insufficient cool air flow
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

## AENLSB0A7204A09 - During compressor operation, a rumbling noise is heard as to engine speed increases
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A09.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
During compressor operation, a rumbling noise is heard as to engine speed increases
Abnormal Noise from Compressor
During compressor operation, a rumbling noise is heard as to engine speed increases
Inadequate clearance in scroll area
Replace compressor.

---

## AENLSB0A7204A10 - Loud noise is heard at certain rpm, irrespective of greatness of speed
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A10.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Loud noise is heard at certain rpm, irrespective of greatness of speed
Abnormal Noise from Compressor
Loud noise is heard at certain rpm, irrespective of greatness of speed
Loose or faulty compressor drive belt
Check compressor drive belt.
Loose compressor mounting bolts
Retighten mounting bolts.

---

## AENLSB0A7204A11 - Loud rattle is heard at low engine rpm
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A11.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Loud rattle is heard at low engine rpm
Abnormal Noise from Compressor
Loud rattle is heard at low engine rpm
Loose compressor armature plate bolt
Replace compressor if it has operated in rattling condition for a long time.
Retighten armature plate bolt.

---

## AENLSB0A7204A12 - Rumbling noise is heard when compressor is not in operation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A12.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Rumbling noise is heard when compressor is not in operation
Abnormal Noise from Magnet Clutch
Rumbling noise is heard when compressor is not in operation
Worn or damaged bearings
Replace magnet clutch assembly.

---

## AENLSB0A7204A13 - Chattering noise is heard when compressor is in operation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A13.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Chattering noise is heard when compressor is in operation
Abnormal Noise from Magnet Clutch
Chattering noise is heard when compressor is in operation
Faulty magnet clutch clearance (excessive clearance)
Adjust magnet clutch clearance.
Worn magnet clutch friction surface
Replace magnet clutch assembly.
Compressor oil leakage from shaft seal, contaminating friction surface
Replace compressor body assembly.

---

## AENLSB0A7204A14 - Droning noise is heard from inside of the vehicle, but not particularly noticeable in engine compartment
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A14.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Droning noise is heard from inside of the vehicle, but not particularly noticeable in engine compartment
Abnormal Noise from Tubing
Droning noise is heard from inside of the vehicle, but not particularly noticeable in engine compartment
Faulty tubing clamps
Reposition clamps or increase number of clamps.
Resonance caused by pulsation from variations in refrigerant pressure
Attach a silencer to tubing, or modify its position and length.

---

## AENLSB0A7204A15 - Considerable vibration in condenser assembly
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A15.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Considerable vibration in condenser assembly
Abnormal Noise from Condenser Assembly
Considerable vibration in condenser assembly
Resonance from condenser assembly bracket and body
Firmly insert a silencer between condenser assembly bracket and body.

---

## AENLSB0A7204A16 - Large rattling noise is heard at idle or sudden acceleration
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A16.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Large rattling noise is heard at idle or sudden acceleration
Abnormal Noise from Crankshaft Pulley
Large rattling noise is heard at idle or sudden acceleration
Loosen crankshaft pulley bolt
Retighten bolt.
K14C model:

---

## AENLSB0A7204A17 - Clattering noise is heard from pulley
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A17.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Clattering noise is heard from pulley
Abnormal Noise from Tension Pulley
Clattering noise is heard from pulley
Worn or damaged bearing
Replace tension pulley.

---

## AENLSB0A7204A18 - Pulley cranks upon contact
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A18.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Pulley cranks upon contact
Abnormal Noise from Tension Pulley
Pulley cranks upon contact
Cracked or loose bracket
Replace or retighten bracket.

---

## AENLSB0A7204A19 - Whistling sound is heard from evaporator
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A19.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Whistling sound is heard from evaporator
Abnormal Noise from Evaporator
Whistling sound is heard from evaporator
Depending on the combination of the interior / exterior temperatures, engine rpm and refrigerant pressure, the refrigerant flowing out of the expansion valve may generate whistling sound.
Slightly decreasing amount of refrigerant may stop this noise.
Check expansion valve and replace it if faulty.

---

## AENLSB0A7204A20 - Blower motor emits a chirping sound in proportion to its speed of rotation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A20.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Blower motor emits a chirping sound in proportion to its speed of rotation
Abnormal Noise from Blower Motor
Blower motor emits a chirping sound in proportion to its speed of rotation
Worn or damaged motor brushes or commutator
Replace blower motor.

---

## AENLSB0A7204A21 - Fluttering noise or large droning noise is heard from blower motor
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204A21.xml
Tree scopes: symptoms: 7 - HVAC > HVAC System > Diagnostic Information and Procedures
Outgoing references: none

Content:
Fluttering noise or large droning noise is heard from blower motor
Abnormal Noise from Blower Motor
Fluttering noise or large droning noise is heard from blower motor
Leaves or other debris introduced from fresh air inlet to blower motor
Remove debris and check that screen at fresh air inlet is intact.

---

## AENLSB0A7206001 - Operation Procedure for Refrigerant Charge
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206002.xml | A/C System Major Components

Content:
Operation Procedure for Refrigerant Charge
For locations of high pressure service valve and low pressure service valve, refer to
A/C System Major Components
.
Check local governmental regulations regarding working with refrigerator systems and its tooling.
Recovery
HFC-134a model
When discharging refrigerant out of A/C system, always recover it using refrigerant recovery and recycling equipment because discharging refrigerant HFC-134a (R-134a) into atmosphere would cause adverse effect to environment.
After recovering refrigerant from system, measure the amount of removed compressor oil to determine the amount of compressor oil for replenishment.
When handling recovery and recycling equipment, follow the instruction manual for the equipment.
HFO-1234yf model
When discharging refrigerant out of A/C system, always recover it using refrigerant recovery and recycling equipment because discharging refrigerant HFO-1234yf (R-1234yf) into atmosphere would cause adverse effect to environment.
After recovering refrigerant from system, measure the amount of removed compressor oil to determine the amount of compressor oil for replenishment.
When handling recovery and recycling equipment, follow the instruction manual for the equipment.
Replenishing Compressor Oil
HFC-134a model
It is necessary to replenish compressor with specified amount of compressor oil from compressor suction side hole (1) before evacuating system and charging it with refrigerant.
When charging refrigerant only
When charging refrigerant without replacing any component, replenish compressor with compressor oil of the same amount measured when recovering refrigerant. If lost oil is not measured, add 30 cm 3 (30 ml, 1.02 US.oz, 1.05 Imp.oz) of oil.
When replacing compressor
Use of a compressor oil other than the specified oil is inappropriate for the components of the A/C system and may cause problems with operation of the system.
Use only the specified compressor oil or equivalent.
Compressor oil is sealed in each new compressor by the amount required for A/C system. Therefore, when using a new compressor, drain the calculated amount of oil from it.
“C” = “A” –“B”
“C”: Amount of oil to be drained
“A”: Amount of oil in a new compressor
“B”: Amount of oil in removed compressor
Compressor assembly supplied from factory is filled up with the following amount of oil.
Both ND-OIL8 and ND-OIL12 are applicable.
Compressor oil
99000–990B7–00A
Compressor oil (ND-12)
Compressor oil
95590–58D30
Compressor oil (ND-OIL8)
Amount of oil in compressor
90 – 100 cm 3 (90 – 100 ml, 3.04 – 3.38 US.oz, 3.17 – 3.57 Imp.oz)
1.
New compressor
2.
Removed compressor
When replacing other parts
Replenish compressor with the following amount of oil.
Amount of compressor oil for replenishment
Evaporator: 15 cm 3 (15 ml, 0.51 US.oz, 0.53 Imp.oz)
Condenser (with receiver / dryer): 20 cm 3 (20 ml, 0.68 US.oz, 0.70 Imp.oz)
Hoses: 5 cm 3 (5 ml, 0.17 US.oz, 0.18 Imp.oz) each
Pipes: 5 cm 3 (5 ml, 0.17 US.oz, 0.18 Imp.oz) each
HFO-1234yf model
It is necessary to replenish compressor with specified amount of compressor oil from compressor suction side hole (1) before evacuating system and charging it with refrigerant.
When charging refrigerant only
When charging refrigerant without replacing any component, replenish compressor with compressor oil of the same amount measured when recovering refrigerant. If lost oil is not measured, add 30 cm 3 (30 ml, 1.02 US.oz, 1.05 Imp.oz) of oil.
When replacing compressor
Use of a compressor oil other than the specified oil is inappropriate for the components of the A/C system and may cause problems with operation of the system.
Use only the specified compressor oil or equivalent.
Compressor oil is sealed in each new compressor by the amount required for A/C system. Therefore, when using a new compressor, drain the calculated amount of oil from it.
“C” = “A” – “B”
“C”: Amount of oil to be drained
“A”: Amount of oil in a new compressor
“B”: Amount of oil in removed compressor
Compressor assembly supplied from factory is filled up with the following amount of oil.
Compressor oil
99000–990B7–00A
Compressor oil (ND-12)
Amount of oil in compressor
90 – 100 cm 3 (90 – 100 ml, 3.04 – 3.38 US.oz, 3.17 – 3.57 Imp.oz)
1.
New compressor
2.
Removed compressor
When replacing other parts
Replenish compressor with the following amount of oil.
Amount of compressor oil for replenishment
Evaporator: 15 cm 3 (15 ml, 0.51 US.oz, 0.53 Imp.oz)
Condenser (with receiver / dryer): 20 cm 3 (20 ml, 0.68 US.oz, 0.70 Imp.oz)
Hoses: 5 cm 3 (5 ml, 0.17 US.oz, 0.18 Imp.oz) each
Pipes: 5 cm 3 (5 ml, 0.17 US.oz, 0.18 Imp.oz) each
Evacuation
Attempting to evacuate the A/C system when refrigerant remains in the system will damage the vacuum pump.
Do not evacuate the A/C system before completely recovering the refrigerant from the system.
If A/C system circuit is opened (exposed) to atmosphere, system must be evacuated using a vacuum pump. The A/C system should be fitted with manifold gauge set, and should be evacuated for approximately 15 minutes.
Connect high pressure charging hose (1) and low pressure charging hose (2) of manifold gauge set (3) as follows:
High pressure charging hose → High pressure charging valve (4) on discharge hose
Low pressure charging hose → Low pressure charging valve (5) on suction pipe
Attach center charging hose (6) of manifold gauge set to vacuum pump (7).
Operate vacuum pump, and then open discharge side valve (HI) (8) of manifold gauge set.
If there is no blockage in the system, there will be an indication on high pressure gauge (9).
When this occurs, open the other side valve (LO) (10) of the gauge set.
Approximately 10 minutes later, low pressure gauge (11) should show a vacuum lower than –100 kPa (–1.0 kgf/cm 2 , –750 mmHg, –14.5 psi), indicating that no leakage exists.
If the system does not show a vacuum below –100 kPa (–1.0 kgf/cm 2 , –750 mmHg, –14.5 psi), close both valves, stop vacuum pump and watch change in reading of low pressure gauge.
Increase in gauge reading suggests leakage. In this case, repair the system before continuing its evacuation.
If the gauge shows a stable reading (suggesting no leakage), continue evacuation.
Carry out evacuation for a total of at least 15 minutes.
Continue evacuation until lower pressure gauge indicates a vacuum less than –100 kPa (–1.0 kgf/cm 2 , –750 mmHg, –14.5 psi), and then close both valves.
Stop vacuum pump. Disconnect center charging hose from pump inlet. Now, the system is ready for charging refrigerant.
Checking A/C System for Pressure Leakage
After completing the evacuation, close manifold gauge high pressure valve and low pressure valve and wait for 10 minutes. Check that low pressure gauge reading has not changed.
If gauge reading moves closer to “0”, there is leakage somewhere. Check the tubing connections and make necessary corrections.
Then, evacuate system once again and check that there is no leakage.
Charge
HFC-134a model
There is a risk of personal injury or health problems if the A/C system is charged with refrigerant incorrectly or if refrigerant containers are improperly handled.
Take the following precautions to reduce the risk of injury or health problems.
Perform the refrigerant charge operation with the engine stopped. Charge the high-pressure side first and then the low-pressure side. If you do not, the refrigerant may flow backward and cause the hose or refrigerant container to burst.
Install the tap valve carefully following the instructions on the refrigerant container to prevent contact with the refrigerant.
Empty the refrigerant container before discarding it to prevent possible health problems and other dangerous consequences.
Never expose the refrigerant container to a heat higher than 40 °C (104 °F). Liquid refrigerant will turn into a toxic gas.
Failure to take proper precautions when charging the A/C system can result in charging the system with the incorrect amount of refrigerant and can lead to poor system operation or damage to system components.
Since the A/C system has no sight glass, first recover refrigerant and evacuate the system, and then fill the system with the specified amount of refrigerant.
Charge the system only when the compressor is not hot to assure that you have used the correct amount of refrigerant.
Check the pressure gauges before and during charging to assure that there is the correct amount of refrigerant in the system.
Do not turn the refrigerant container upside down during charging. Doing so will cause liquid refrigerant to enter the compressor and damage it.
The A/C system contains HFC-134a (R134a).
Described here is a method for charging the A/C system with refrigerant from the refrigerant service container.
When charging the system with the refrigerant recovered using the refrigerant recycling equipment, follow the procedure described in the equipment manufacturer’s instruction manual.
Perform initial charge through high pressure side with the engine stopped.
Next, charge the system with refrigerant as follows from low pressure side with engine running.
Check if hoses are routed properly after evacuating system.
Connect low charging hose (1) and high charging hose (2) of manifold gauge set (3) in position. Then, open refrigerant container valve (4) to purge charging line.
Open high pressure side valve (5) to charge system with refrigerant.
After a while, open low pressure side valve (6) and close high pressure side valve.
If the high-pressure side valve is not closed securely, the refrigerant may flow backwards and cause the hose or refrigerant container to burst, possibly resulting in a personal injury.
Close the high-pressure side valve securely.
Start engine and keep engine speed at 1500 r/min, and then operate A/C system.
Charge A/C system with vapor refrigerant. At this time, refrigerant container should be held upright.
When refrigerant container (1) is emptied, use the following procedure to replace it with a new refrigerant container.
Close low pressure valve.
Replace empty container with a refrigerant container which has been charged with refrigerant. When using refrigerant container tap valve (2), use the following procedure for replacement.
Turn handle of tap valve counterclockwise to retract needle (3), and then remove refrigerant container tap valve by loosening its plate nut (4).
Install refrigerant container tap valve to new refrigerant container.
Purge any air from center charging hose.
When using refrigerant container tap valve, use the following procedure to purge air.
Fully tighten refrigerant container tap valve (1), and then loosen (open) plate nut (2) slightly.
Open low pressure side valve (3) of manifold gauge set (4) a little.
As soon as refrigerant comes out with a “hiss” through a clearance between refrigerant container and tap valve, tighten plate nut as well as low pressure side valve.
Turn handle of tap valve clockwise so that its needle is screwed into the new container to make a hole for refrigerant flow.
After the system is charged with specified amount of refrigerant or when low pressure gauge (1) and high pressure gauge (2) have indicated the following specified values, close low pressure side valve (3) on manifold gauge set (4).
Specified amount of refrigerant
390 ± 20 g (13.7 ± 0.705 oz)
Low pressure side and high pressure side example
Gauges should read as follows when ambient temperature is 30 °C (86 °F).
Pressure on high pressure gauge
1420 – 1870 kPa (14.5 – 19.1 kgf/cm 2 ) (205 – 271 psi)
Pressure on low pressure gauge
280 – 380 kPa (2.9 – 3.9 kgf/cm 2 ) (40.6 – 55.1 psi)
HFO-1234yf model
There is a risk of personal injury or health problems if the A/C system is charged with refrigerant incorrectly or if refrigerant containers are improperly handled.
Take the following precautions to reduce the risk of injury or health problems.
Perform the refrigerant charge operation with the engine stopped. Charge the high-pressure side first and then the low-pressure side. If you do not, the refrigerant may flow backward and cause the hose or refrigerant container to burst.
Install the tap valve carefully following the instructions on the refrigerant container to prevent contact with the refrigerant.
Empty the refrigerant container before discarding it to prevent possible health problems and other dangerous consequences.
Never expose the refrigerant container to a heat higher than 40 °C (104 °F). Liquid refrigerant will turn into a toxic gas.
Failure to take proper precautions when charging the A/C system can result in charging the system with the incorrect amount of refrigerant and can lead to poor system operation or damage to system components.
Since the A/C system has no sight glass, first recover refrigerant and evacuate the system, and then fill the system with the specified amount of refrigerant.
Charge the system only when the compressor is not hot to assure that you have used the correct amount of refrigerant.
Check the pressure gauges before and during charging to assure that there is the correct amount of refrigerant in the system.
Do not turn the refrigerant container upside down during charging. Doing so will cause liquid refrigerant to enter the compressor and damage it.
The A/C system contains HFO-1234yf (R-1234yf).
Described here is a method for charging the A/C system with refrigerant from the refrigerant service container.
When charging the system with the refrigerant recovered using the refrigerant recycling equipment, follow the procedure described in the equipment manufacturer’s instruction manual.
Perform initial charge through high pressure side with the engine stopped.
Next, charge the system with refrigerant as follows from low pressure side with engine running.
Check if hoses are routed properly after evacuating system.
Connect low charging hose (1) and high charging hose (2) of manifold gauge set (3) in position. Then, open refrigerant container valve (4) to purge charging line.
Open high pressure side valve (5) to charge system with refrigerant.
After a while, open low pressure side valve (6) and close high pressure side valve.
If the high-pressure side valve is not closed securely, the refrigerant may flow backwards and cause the hose or refrigerant container to burst, possibly resulting in a personal injury.
Close the high-pressure side valve securely.
Start engine and keep engine speed at 1500 r/min, and then operate A/C system.
Charge A/C system with vapor refrigerant. At this time, refrigerant container should be held upright.
When refrigerant container (1) is emptied, use the following procedure to replace it with a new refrigerant container.
Close low pressure valve.
Replace empty container with a refrigerant container which has been charged with refrigerant. When using refrigerant container tap valve (2), use the following procedure for replacement.
Turn handle of tap valve counterclockwise to retract needle (3), and then remove refrigerant container tap valve by loosening its plate nut (4).
Install refrigerant container tap valve to new refrigerant container.
Purge any air from center charging hose.
When using refrigerant container tap valve, use the following procedure to purge air.
Fully tighten refrigerant container tap valve (1), and then loosen (open) plate nut (2) slightly.
Open low pressure side valve (3) of manifold gauge set (4) a little.
As soon as refrigerant comes out with a “hiss” through a clearance between refrigerant container and tap valve, tighten plate nut as well as low pressure side valve.
Turn handle of tap valve clockwise so that its needle is screwed into the new container to make a hole for refrigerant flow.
After the system is charged with specified amount of refrigerant or when low pressure gauge (1) and high pressure gauge (2) have indicated the following specified values, close low pressure side valve (3) on manifold gauge set (4).
Specified amount of refrigerant
400 ± 20 g (14.1 ± 0.705 oz)
Low pressure side and high pressure side example
Gauges should read as follows when ambient temperature is 30 °C (86 °F).
Pressure on high pressure gauge
1300 – 1870 kPa (13.3 – 19.1 kgf/cm 2 ) (188 – 271 psi)
Pressure on low pressure gauge
300 – 420 kPa (3.1 – 4.3 kgf/cm 2 ) (43.5 – 60.9 psi)
Removal of Manifold Gauge Set
If the manifold gauge set is removed carelessly, refrigerant under pressure may spray out of the high-pressure side of the A/C system. The refrigerant could contact your eyes or skin, causing injury.
Remove the manifold gauge set carefully, following the instructions provided below.
For A/C system charged with specified amount of refrigerant, remove manifold gauge set as follows:
Close low pressure side valve of manifold gauge set. (High pressure side valve has already been closed during charging process.)
Close refrigerant container valve.
Stop engine.
Using shop rag, remove charging hoses from service valves. Perform this operation quickly.
Put caps on service valves.
Checking A/C System for Refrigerant Leakage
Whenever refrigerant leakage is suspected in the system or any service operation has been performed which may result in malfunction of lines and connections, it is important to perform check for leakage.
Common sense should be used during refrigerant leakage test, since the need and extent of any such test will, in general, depend upon the nature of a complaint and the type of a service performed on the system.
Liquid leak detector
If the refrigerant is exposed to a fire, it turns to a poisonous gas (phosgene).
Do not inhale the gas that is produced if refrigerant is exposed to a fire.
There is a number of fittings and places throughout the A/C system where liquid leak detector solution may be used to pinpoint refrigerant leakage.
By applying the solution to the area in question with a swab, bubbles will form within seconds if there is leakage.
For connections in such confined areas, as those around evaporator and condenser, electronic (refrigerant) leak detector (1) is more practical for determining leakage.
The HVAC system of this vehicle uses either of two refrigerant types, HFC-134a or HFO-1234yf. Use leak detector compatible with respective refrigerant.

---

## AENLSB0A7206002 - A/C System Major Components
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206002.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions > Models > K14C
Outgoing references:
- AENLSB0A7206043 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206043.xml | Compressor Assembly Removal and Installation
- AENLSB0A7206006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206006.xml | Condenser Assembly Removal and Installation
- AENLSB0A7206043 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206043.xml | Compressor Assembly Removal and Installation
- AENLSB0A7206006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206006.xml | Condenser Assembly Removal and Installation

Content:
A/C System Major Components
K14C Model
1.
HVAC unit
10.
Liquid hose
19.
Filter cap
2.
Compressor
11.
Expansion valve
20.
Circlip
3.
Condenser with receiver / dryer
12.
A/C refrigerant pressure sensor
21.
Radiator cooling sub fan
4.
Radiator cooling main fan
13.
High pressure charging valve
:
11 N·m (1.1 kgf-m, 8.5 lbf-ft)
5.
Compressor mounting bolt
: For tightening procedure of compressor mounting bolt, refer to
Compressor Assembly Removal and Installation
.
14.
Low pressure charging valve
:
25 N·m (2.5 kgf-m, 18.5 lbf-ft)
6.
Discharge hose
15.
Condenser bolt
: For tightening procedure of condenser bolt, refer to
Condenser Assembly Removal and Installation
.
:
6.0 N·m (0.61 kgf-m, 4.5 lbf-ft)
7.
Suction hose
16.
Cap
:
Do not reuse.
8.
Suction pipe
17.
Suction hose stay
9.
O-ring
: Apply compressor oil.
18.
Desiccant
1.
HVAC unit
10.
Liquid hose
19.
Filter cap
2.
Compressor
11.
Expansion valve
20.
Circlip
3.
Condenser with receiver / dryer
12.
A/C refrigerant pressure sensor
21.
Radiator cooling sub fan
4.
Radiator cooling main fan
13.
High pressure charging valve
:
11 N·m (1.1 kgf-m, 8.5 lbf-ft)
5.
Compressor mounting bolt
: For tightening procedure of compressor mounting bolt, refer to
Compressor Assembly Removal and Installation
.
14.
Low pressure charging valve
:
50 N·m (5.1 kgf-m, 37.0 lbf-ft)
6.
Discharge hose
15.
Condenser bolt
: For tightening procedure of condenser bolt, refer to
Condenser Assembly Removal and Installation
.
:
6.0 N·m (0.61 kgf-m, 4.5 lbf-ft)
7.
Suction hose
16.
Cap
:
Do not reuse.
8.
Suction pipe
17.
Suction hose stay
9.
O-ring
: Apply compressor oil.
18.
Desiccant

---

## AENLSB0A7206003 - Radiator Cooling Fan Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206003.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions > Models > K14C
Outgoing references:
- AENLSB0A7206004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206004.xml | Radiator Cooling Fan Inspection

Content:
Radiator Cooling Fan Removal and Installation
Radiator Cooling Fan Inspection
Refer to “Radiator Cooling Fan Assembly Removal and Installation”.
K14C model:

---

## AENLSB0A7206004 - Radiator Cooling Fan Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206004.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions > Models > K14C
Outgoing references:
- AENLSB0A7206003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206003.xml | Radiator Cooling Fan Removal and Installation

Content:
Radiator Cooling Fan Inspection
Radiator Cooling Fan Removal and Installation
Refer to “Radiator Cooling Fan Assembly On-Vehicle Inspection”.
K14C model:

---

## AENLSB0A7206005 - Condenser Assembly On-Vehicle Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206005.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references: none

Content:
Condenser Assembly On-Vehicle Inspection
Check the following items.
Condenser fins for clogging.
If clogged, wash condenser with water and dry it with compressed air.
Condenser fins for leakage and breakage.
If any defects are found, repair or replace condenser.
Condenser fittings for leakage.
If any defects are found, repair or replace condenser.

---

## AENLSB0A7206006 - Condenser Assembly Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206006.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206005.xml | Condenser Assembly On-Vehicle Inspection
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge

Content:
Condenser Assembly Removal and Installation
Condenser Assembly On-Vehicle Inspection
Condenser and radiator fins can easily be bent during removal of the condenser assembly.
Remove the condenser assembly carefully not to damage the condenser and radiator fins. If any of them is bent, straighten it using a flat-bladed screwdriver or pliers.
Removal
Recover refrigerant from A/C system referring to “Recovery” in
Operation Procedure for Refrigerant Charge
.
Measure the amount of removed compressor oil to determine how much compressor oil is required for replenishment.
Hoist vehicle.
Remove front bumper.
Remove front end upper cover.
Remove discharge hose bolt (1) and liquid hose bolt (2).
Disconnect discharge hose (3) and liquid hose (4) from condenser assembly (5).
Remove condenser bolts (1), and then remove condenser assembly (2).
Installation
Reverse removal procedure noting the following points.
Apply compressor oil to new O-rings of discharge hose and liquid hose.
For HFC-134a model, both ND-OIL8 and ND-OIL12 are applicable.
For HFO-1234yf model, only ND-OIL12 is applicable.
Compressor oil
99000–990B7–00A
Compressor oil (ND-12)
Compressor oil
95590–58D30
Compressor oil (ND-OIL8)
Replenish compressor with specified amount of compressor oil from compressor suction side referring to “Replenishing Compressor Oil” in
Operation Procedure for Refrigerant Charge
.
Tighten condenser bolts (1) in numerical order (“1” –“4”).
Tighten discharge hose bolt (1) and liquid hose bolt (2) to specified torque.
Discharge hose bolt
a
11
1.1
8.5
Liquid hose bolt
b
11
1.1
8.5
Evacuate and charge A/C system referring to “Evacuation” and “Charge” in
Operation Procedure for Refrigerant Charge
.

---

## AENLSB0A7206007 - Desiccant Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206007.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206002.xml | A/C System Major Components
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge

Content:
Desiccant Removal and Installation
A/C System Major Components
Removal
Recover refrigerant from A/C system referring to “Recovery” in
Operation Procedure for Refrigerant Charge
.
Remove condenser assembly.
Using snap ring pliers, remove circlip (1).
Pull out filter cap (2) with O-rings (3) from receiver / dryer (4).
Remove desiccant (5).
Installation
Reverse removal procedure noting the following points.
Use new desiccant (1), new O-rings (2), new filter cap (3) and new circlip (4).
Do not take new desiccant out from plastic bag until just before inserting it into receiver / dryer.
Apply compressor oil to O-rings.
For HFC-134a model, both ND-OIL8 and ND-OIL12 are applicable.
For HFO-1234yf model, only ND-OIL12 is applicable.
Compressor oil
99000–990B7–00A
Compressor oil (ND-12)
Compressor oil
95590–58D30
Compressor oil (ND-OIL8)
Using snap ring pliers, install circlip to groove securely.
Replenish compressor with specified amount of compressor oil from compressor suction side referring to “Replenishing Compressor Oil” in
Operation Procedure for Refrigerant Charge
.
Evacuate and charge A/C system referring to “Evacuation” and “Charge” in
Operation Procedure for Refrigerant Charge
.

---

## AENLSB0A7206008 - HVAC Unit Components
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206008.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206038 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206038.xml | HVAC Air Filter Removal and Installation
- AENLSB0A7206016 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206016.xml | Evaporator Temperature Sensor Removal and Installation

Content:
HVAC Unit Components
This figure shows LHD as an example.
[A]:
Forward
11.
Air flow control door assembly
22.
Air flow control lever
1.
Air intake right care
12.
Heater core
23.
Air flow control actuator
2.
Air intake left case
13.
Evaporator
24.
Air intake control lever
3.
Air filter
: For installation, refer to
HVAC Air Filter Removal and Installation
.
14.
Cover
25.
Air intake control actuator
4.
Filter cover
15.
Expansion valve
26.
Temperature control lever
5.
Blower upper case
16.
Temperature control door assembly
27.
Temperature control actuator
6.
Blower lower case
17.
Evaporator temperature sensor
: For installation, refer to
Evaporator Temperature Sensor Removal and Installation
.
28.
Aspirator
7.
Blower motor
18.
Foot duct
29.
Heater pipe clamp
8.
Right case
19.
Blower motor controller
30.
Evaporator plate
9.
Left case
20.
O-ring
: Apply compressor oil.
:
3.5 N·m (0.36 kgf-m, 2.5 lbf-ft)
10.
Packing
21.
Air intake control door assembly
:
Do not reuse.

---

## AENLSB0A7206009 - HVAC Unit Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206009.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions > Models > K14C
Outgoing references:
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge
- AENLSB0A7206015 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206015.xml | Evaporator Inspection
- AENLSB0A7206017 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206017.xml | Evaporator Temperature Sensor Inspection
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge

Content:
HVAC Unit Removal and Installation
Removal
Disable air bag system.
Recover refrigerant from A/C system using recovery and recycling equipment referring to “Recovery” in
Operation Procedure for Refrigerant Charge
.
Drain engine coolant.
K14C model:
Remove air cleaner assembly.
K14C model:
Disconnect heater hoses (1) from HVAC unit.
Remove suction pipe bolt (1), and then remove liquid hose and suction pipe from expansion valve (2).
Remove instrument panel from vehicle body.
Remove HVAC unit (1) from vehicle by removing cap (3) and nuts (2).
When removing HVAC unit, be careful not to spill engine coolant and compressor oil on vehicle floor.
Installation
Evaporator Inspection
Evaporator Temperature Sensor Inspection
Reverse removal procedure noting the following points.
Replenish compressor with specified amount of compressor oil from compressor suction side referring to “Replenishing Compressor Oil” in
Operation Procedure for Refrigerant Charge
.
Install drain hose (1) as follows.
Align groove (2) of drain hose with protrusion (3) of HVAC unit (4).
Fit hose grommet (5) to dash panel hole so that lower lip of the grommet is positioned under the panel.
6.
Vehicle downward
Install new packing (1) to installation hole uniformly.
Tighten the following bolt and nuts to specified torque.
Suction pipe bolt
HVAC unit mounting nuts
Evacuate and charge A/C system referring to “Evacuation” and “Charge” in
Operation Procedure for Refrigerant Charge
.
Refill cooling system with coolant.
K14C model:

---

## AENLSB0A7206010 - Auto A/C Panel Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206010.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references: none

Content:
Auto A/C Panel Removal and Installation
Removal
Disconnect negative (–) cable at battery.
Remove audio unit or radio hole cover.
Remove auto A/C panel (1) from instrument panel.
Disconnect auto A/C panel connector.
Installation
Reverse removal procedure.

---

## AENLSB0A7206011 - Blower Motor Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206011.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206012 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206012.xml | Blower Motor Inspection

Content:
Blower Motor Removal and Installation
Removal
Disconnect negative (–) cable at battery.
Remove glove box.
Disconnect connector and clamp from blower motor (1).
Remove screws (2).
Remove blower motor from HVAC unit.
Installation
Blower Motor Inspection
Reverse removal procedure.

---

## AENLSB0A7206012 - Blower Motor Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206012.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206011 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206011.xml | Blower Motor Removal and Installation

Content:
Blower Motor Inspection
Blower Motor Removal and Installation
Check resistance between two blower motor terminals as shown.
If there is no continuity, replace blower motor.
Check blower motor for operation and current.
Put blower motor (1) in a soft jawed vise.
Connect battery to blower motor as shown.
Check if blower motor operates smoothly without noise.
Check that the ammeter indicates specified current when the voltage is applied for 1 min.
If check result is not as specified, replace blower motor.
Blower motor specified current at 12 V
16 A maximum at 20 – 25 °C (68 – 77 °F)

---

## AENLSB0A7206013 - Blower Motor Controller Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206013.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206014 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206014.xml | Blower Motor Controller Inspection

Content:
Blower Motor Controller Removal and Installation
Removal
Disconnect negative (–) cable at battery.
Disconnect connector from blower motor controller (1).
Release claws (2) and then remove blower motor controller from HVAC unit (3).
Installation
Blower Motor Controller Inspection
Reverse removal procedure.

---

## AENLSB0A7206014 - Blower Motor Controller Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206014.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206013 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206013.xml | Blower Motor Controller Removal and Installation

Content:
Blower Motor Controller Inspection
Blower Motor Controller Removal and Installation
Check internal circuit of controller for resistance as follows.
Measure resistance between terminals “2” and “4” of blower motor controller.
Blower motor controller resistance
“2” – “4”: approximately 10 kΩ at 25 °C (77 °F)
If check result is not as specified, replace blower motor controller.
Connect positive (+) terminal of an ohmmeter to terminal “1” of blower motor controller and negative (–) terminal to terminal “2” of the controller. The result should indicate no continuity.
Check controller for operation as follows.
Using bulb (3.4 W) (5) and service wire, connect battery positive (+) terminal to terminal “1” of blower motor controller as shown in figure.
Using service wire, connect battery negative (–) terminal to terminal “2” of blower motor controller.
Arrange 3 new 1.5 V batteries (6) in series (check that total voltage is 4.5 – 5.0 V) and connect its positive (+) terminal to terminal “4” of blower motor controller and negative (–) terminal to terminal “2” of the controller.
The bulb should light. If bulb does not light, replace blower motor controller.

---

## AENLSB0A7206015 - Evaporator Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206015.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206009.xml | HVAC Unit Removal and Installation
- AENLSB0A7206008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206008.xml | HVAC Unit Components

Content:
Evaporator Inspection
HVAC Unit Removal and Installation
HVAC Unit Components
Check the following items.
Evaporator fins for clogging
If clogged, wash evaporator fins with water, and then dry it with compressed air.
Evaporator fins for leakage and breakage
If evaporator fins are leaky or broken, repair or replace evaporator.
Evaporator fittings for leakage
If evaporator fittings are leaky, repair or replace evaporator.

---

## AENLSB0A7206016 - Evaporator Temperature Sensor Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206016.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206017 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206017.xml | Evaporator Temperature Sensor Inspection

Content:
Evaporator Temperature Sensor Removal and Installation
Removal
Remove HVAC unit from vehicle.
Remove evaporator temperature sensor (1) from evaporator (2) by disassembling HVAC unit.
Installation
Evaporator Temperature Sensor Inspection
Reverse removal procedure noting the following point.
Install evaporator temperature sensor (1) onto evaporator (2) as shown.
3.
30.0 mm (1.18 in.)
4.
Holding parts fixed to 5th fin from the right
5.
Sensor parts fixed to 7th fin from the right

---

## AENLSB0A7206017 - Evaporator Temperature Sensor Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206017.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206016 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206016.xml | Evaporator Temperature Sensor Removal and Installation

Content:
Evaporator Temperature Sensor Inspection
Evaporator Temperature Sensor Removal and Installation
Check resistance between terminals of evaporator temperature sensor (1).
If check result is not as specified, replace evaporator temperature sensor.
Evaporator temperature sensor resistance
0 °C (32 °F): 6.7 – 6.8 kΩ
25 °C (77 °F): 2.0 – 2.1 kΩ
[A}:
Resistance
[B]:
Temperature

---

## AENLSB0A7206018 - Expansion Valve Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206018.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions > Models > K14C
Outgoing references:
- AENLSB0A7206008 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206008.xml | HVAC Unit Components
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge
- AENLSB0A7206019 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206019.xml | Expansion Valve Inspection
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge

Content:
Expansion Valve Removal and Installation
HVAC Unit Components
Removal
Recover refrigerant from A/C system using recovery and recycling equipment referring to “Recovery” in
Operation Procedure for Refrigerant Charge
.
Remove air cleaner assembly.
K14C model:
Remove suction pipe bolt (1), and then remove liquid hose and suction pipe from expansion valve (2).
Remove expansion valve bolts (3) and remove expansion valve.
Installation
Expansion Valve Inspection
Reverse removal procedure noting the following points.
For HFC-134a model, both ND-OIL8 and ND-OIL12 are applicable.
For HFO-1234yf model, only ND-OIL12 is applicable.
Apply compressor oil to O-rings of expansion valve and pipes.
Compressor oil
99000–990B7–00A
Compressor oil (ND-12)
Compressor oil
95590–58D30
Compressor oil (ND-OIL8)
Tighten expansion valve bolts (1) and suction pipe bolt (2) to specified torque.
Expansion valve bolt
a
3.5
0.36
2.5
Suction pipe bolt
b
11
1.1
8.5
Evacuate and charge A/C system referring to “Evacuation” and “Charge” in
Operation Procedure for Refrigerant Charge
.

---

## AENLSB0A7206019 - Expansion Valve Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206019.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206018 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206018.xml | Expansion Valve Removal and Installation
- AENLSB0A7204001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204001.xml | A/C System Performance Inspection

Content:
Expansion Valve Inspection
Expansion Valve Removal and Installation
Refer to
A/C System Performance Inspection
.

---

## AENLSB0A7206020 - A/C Refrigerant Pressure Sensor and Its Circuit Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206020.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions > Models > K14C
Outgoing references:
- AENLSB0A7206021 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206021.xml | A/C Refrigerant Pressure Sensor Removal and Installation

Content:
A/C Refrigerant Pressure Sensor and Its Circuit Inspection
A/C Refrigerant Pressure Sensor Removal and Installation
Disconnect A/C refrigerant pressure sensor connector.
Set ignition “ON”.
Check that voltage between “GRY” wire terminal and “BLU” wire terminal of A/C refrigerant pressure sensor connector is 4.75 V to 5.25 V.
If check result is not as specified, check A/C refrigerant pressure sensor circuit.
Connect A/C refrigerant pressure sensor connector with ignition “OFF”.
Connect manifold gauge set to charging valves.
Check A/C refrigerant pressure sensor voltage of ECM connector.
K14C model:
If voltage is not as specified, replace A/C refrigerant pressure sensor.
A/C refrigerant pressure sensor voltage specifications (A/C refrigerant pressure measured by manifold gauge)
[A]:
Voltage
[B]:
Pressure on high pressure gauge

---

## AENLSB0A7206021 - A/C Refrigerant Pressure Sensor Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206021.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions > Models > K14C
Outgoing references:
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge
- AENLSB0A7206020 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206020.xml | A/C Refrigerant Pressure Sensor and Its Circuit Inspection
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge

Content:
A/C Refrigerant Pressure Sensor Removal and Installation
Removal
Recover refrigerant from A/C system using recovery and recycling equipment referring to “Recovery” in
Operation Procedure for Refrigerant Charge
.
Disconnect negative (–) cable at battery.
Disconnect A/C refrigerant pressure sensor connector.
While holding liquid pipe or hose (1) using backup wrench, remove A/C refrigerant pressure sensor (2).
K14C model
Installation
A/C Refrigerant Pressure Sensor and Its Circuit Inspection
Reverse removal procedure noting the following points.
For HFC-134a model, both ND-OIL8 and ND-OIL12 are applicable.
For HFO-1234yf model, only ND-OIL12 is applicable.
Apply compressor oil to new O-ring of A/C refrigerant pressure sensor.
Compressor oil
99000–990B7–00A
Compressor oil (ND-12)
Compressor oil
95590–58D30
Compressor oil (ND-OIL8)
Tighten A/C refrigerant pressure sensor (1) to specified torque.
A/C refrigerant pressure sensor
a
11
1.1
8.5
K14C model
Evacuate and charge A/C system referring to “Evacuation” and “Charge” in
Operation Procedure for Refrigerant Charge
.

---

## AENLSB0A7206022 - Temperature Control Actuator Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206022.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206023 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206023.xml | Temperature Control Actuator Inspection

Content:
Temperature Control Actuator Removal and Installation
Removal
Disconnect negative (–) cable at battery.
Remove steering column hole cover.
Disconnect temperature control actuator connector.
Remove temperature control actuator (1) from HVAC unit by removing screws (2).
Installation
Temperature Control Actuator Inspection
Reverse removal procedure noting the following points.
Check that protrusion (1) on temperature control actuator fits into corresponding hole (2) on HVAC unit respectively.
Check that protrusion (3) on HVAC unit fits into hole (4) on temperature control actuator.

---

## AENLSB0A7206023 - Temperature Control Actuator Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206023.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206022 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206022.xml | Temperature Control Actuator Removal and Installation

Content:
Temperature Control Actuator Inspection
Temperature Control Actuator Removal and Installation
Check if protrusion operates smoothly when battery voltage is applied to terminals of actuator connector (1).
Temperature control actuator operation
Using ohmmeter, measure resistance between terminal “3” and terminal “4” of actuator connector (1) at each protrusion position.
Temperature control actuator resistance
Protrusion position
Resistance (25 °C (77 °F))
MAX COOL [a]
Approx. 5.23 kΩ
MAX HOT [b]
Approx. 0.78 kΩ
Using ohmmeter, measure resistance between terminal “4” and terminal “5”.
If check result is not as specified, replace temperature control actuator (2).
Temperature control actuator resistance (Total resistance)
6 kΩ
“a”:
88.9°
3.
Protrusion

---

## AENLSB0A7206024 - Air Flow Control Actuator Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206024.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206025 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206025.xml | Air Flow Control Actuator Inspection

Content:
Air Flow Control Actuator Removal and Installation
Removal
Disconnect negative (–) cable at battery.
For LHD model, remove brake pedal assembly.
For RHD model, remove steering column assembly.
Disconnect air flow control actuator connector.
Remove air flow control actuator (1) from HVAC unit by removing screws (2).
Installation
Air Flow Control Actuator Inspection
Reverse removal procedure noting the following points.
Check that protrusion (1) on air flow control actuator fits into corresponding hole (2) on HVAC unit respectively.
Check that protrusion (3) on HVAC unit fits into hole (4) on air flow control actuator.

---

## AENLSB0A7206025 - Air Flow Control Actuator Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206025.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206024 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206024.xml | Air Flow Control Actuator Removal and Installation

Content:
Air Flow Control Actuator Inspection
Air Flow Control Actuator Removal and Installation
Check if protrusion operates smoothly when battery voltage is applied to terminals of actuator connector (1).
Air flow control actuator operation
Using ohmmeter, measure resistance between terminal “3” and terminal “4” of actuator connector (1) at each actuator protrusion position.
Air flow control actuator resistance
Protrusion position
Resistance (25 °C (77 °F))
VENT [a]
Approx. 5.13 kΩ
VENT + FOOT [b]
Approx. 4.11 kΩ
FOOT [c]
Approx. 3.14 kΩ
FOOT + DEF [d]
Approx. 2.08 kΩ
DEF [e]
Approx. 0.87 kΩ
Using ohmmeter, measure resistance between terminal “4” and terminal “5” of actuator connector.
If check result is not as specified, replace air flow control actuator (2).
Air flow control actuator resistance (Total resistance)
6 kΩ
“a”:
24.2°
“d”:
85.3°
“b”:
45.3°
3.
Protrusion
“c”:
64.9°

---

## AENLSB0A7206026 - Air Intake Control Actuator Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206026.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206027 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206027.xml | Air Intake Control Actuator Inspection

Content:
Air Intake Control Actuator Removal and Installation
Removal
Disconnect negative (–) cable at battery.
Remove glove box.
Disconnect air intake control actuator connector.
Remove air intake control actuator (1) by removing screws (2).
Installation
Air Intake Control Actuator Inspection
Reverse removal procedure noting the following points.
Check that protrusion (1) on air intake control actuator fits into corresponding hole (2) on HVAC unit respectively.
Check that protrusion (3) on HVAC unit fits into hole (4) on air intake control actuator.

---

## AENLSB0A7206027 - Air Intake Control Actuator Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206027.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206026 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206026.xml | Air Intake Control Actuator Removal and Installation

Content:
Air Intake Control Actuator Inspection
Air Intake Control Actuator Removal and Installation
Check if protrusion operates smoothly when battery voltage is applied to terminals of actuator connector (1).
Air intake control actuator operation
Using ohmmeter, measure resistance between terminal “3” and terminal “5” of actuator connector (1) at each protrusion position.
Air intake control actuator resistance
Protrusion position
Resistance (25 °C (77 °F))
FRE [a]
Approx. 1.6 kΩ
REC [b]
Approx. 4.4 kΩ
Using ohmmeter, measure resistance between terminal “4” and terminal “5” of actuator connector (1).
If check result is not as specified, replace air intake control actuator (2).
Air intake control actuator resistance (Total resistance)
6 kΩ
“a”:
54.4°
3.
Protrusion

---

## AENLSB0A7206028 - Actuator Linkage Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206028.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references: none

Content:
Actuator Linkage Inspection
Check that each actuator linkage operates smoothly.
Check each actuator linkage for breakage.
Check that there is not any obstruction in operating range of actuator linkage.
If check result is not OK, repair or replace faulty part(s).

---

## AENLSB0A7206029 - Sunload Sensor Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206029.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206030 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206030.xml | Sunload Sensor Inspection

Content:
Sunload Sensor Removal and Installation
Removal
Remove combination meter.
Remove sunload sensor (1) from instrument panel by depressing tab and pushing sensor upward from underneath.
Disconnect sunload sensor connector (2).
Installation
Sunload Sensor Inspection
Reverse removal procedure noting the following point.
Install sunload sensor (1) to instrument panel, fitting tabs (2) of sunload sensor into grooves (3) in instrument panel as shown in figure.
[A]:
Vehicle forward

---

## AENLSB0A7206030 - Sunload Sensor Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206030.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206029 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206029.xml | Sunload Sensor Removal and Installation

Content:
Sunload Sensor Inspection
Sunload Sensor Removal and Installation
Light sunload sensor vertically with an incandescent light or sun shine in a sunny day.
Measure voltage between terminals “1” and “2” of sunload sensor as shown in figure.
If check result is not as specified, replace sunload sensor.
In case of using incandescent light, prepare light of approximately 100 W and light sunload sensor approximately 100 mm (3.94 in.) away from the sensor.
Sunload sensor voltage specification (High)
Higher than 0.4 V
Cover sunload sensor with black cloth and measure voltage between terminals “1” and “2” of sunload sensor as shown in figure.
If check result is not as specified, replace sunload sensor.
Sunload sensor voltage specification (Low)
Lower than 0.1 V

---

## AENLSB0A7206031 - Outside Air Temperature Sensor Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206031.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206032 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206032.xml | Outside Air Temperature Sensor Inspection
- AENLSB0AA206004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206004.xml | Outside Air Temperature Sensor Removal and Installation (If Equipped)

Content:
Outside Air Temperature Sensor Removal and Installation
Outside Air Temperature Sensor Inspection
Refer to
Outside Air Temperature Sensor Removal and Installation (If Equipped)
.

---

## AENLSB0A7206032 - Outside Air Temperature Sensor Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206032.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206031 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206031.xml | Outside Air Temperature Sensor Removal and Installation
- AENLSB0AA206005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206005.xml | Outside Air Temperature Sensor Inspection (If Equipped)

Content:
Outside Air Temperature Sensor Inspection
Outside Air Temperature Sensor Removal and Installation
Refer to
Outside Air Temperature Sensor Inspection (If Equipped)
.

---

## AENLSB0A7206033 - Inside Air Temperature Sensor Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206033.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206034 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206034.xml | Inside Air Temperature Sensor Inspection

Content:
Inside Air Temperature Sensor Removal and Installation
Removal
Disconnect negative (–) cable at battery.
Remove steering column hole cover from instrument panel.
Remove steering column lower cover.
Remove inside air temperature sensor connector and aspirator hose (1) from inside air temperature sensor (2).
Release tabs (3), and then remove inside air temperature sensor from instrument panel.
Installation
Inside Air Temperature Sensor Inspection
Reverse removal procedure.

---

## AENLSB0A7206034 - Inside Air Temperature Sensor Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206034.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206033 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206033.xml | Inside Air Temperature Sensor Removal and Installation

Content:
Inside Air Temperature Sensor Inspection
Inside Air Temperature Sensor Removal and Installation
Blow hot air to inside air temperature sensor (1), and measure resistance using ohmmeter (2).
Check that the resistance decreases as temperature rises as shown.
If check result is not as specified, replace inside air temperature sensor.
Inside air temperature sensor specification
25 °C (77 °F): 1.61 – 1.79 kΩ

---

## AENLSB0A7206035 - Center Ventilation Louver Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206035.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references: none

Content:
Center Ventilation Louver Removal and Installation
Removal
Remove instrument panel upper garnish.
Release claws (3) and then remove center ventilation louvers (1) from instrument panel upper garnish (2).
Installation
Reverse removal procedure noting the following point.
Install center ventilation louvers facing arrows (1) upward.

---

## AENLSB0A7206036 - Side Ventilation Louver Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206036.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references: none

Content:
Side Ventilation Louver Removal and Installation
Driver-Side Side Ventilation Louver
Removal
Remove steering column hole cover.
Remove instrument panel driver outside garnish.
Release claws (3) and then remove driver-side side ventilation louver (1) from instrument panel driver outside garnish (2).
Installation
Reverse removal procedure.
Passenger-Side Side Ventilation Louver
Removal
Remove instrument main lower panel from steering support member.
Release claws (3) and then remove passenger-side side ventilation louver (1) from instrument main lower panel (2).
Installation
Reverse removal procedure.

---

## AENLSB0A7206037 - Rear Duct Removal and Installation (If Equipped)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206037.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Rear Duct Removal and Installation (If Equipped)
Removal
Disable air bag system.
Remove front seats.
Remove floor console rear box and floor console front covers.
Remove front side sill scuffs and dash side trims.
Take off carpet till rear ducts are totally exposed.
Remove right and left rear ducts (1).
Remove center rear duct (2) if necessary.
[A]:]
Installation
Reverse removal procedure.

---

## AENLSB0A7206038 - HVAC Air Filter Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206038.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206039 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206039.xml | HVAC Air Filter Inspection

Content:
HVAC Air Filter Removal and Installation
Removal
Remove glove box.
Remove HVAC air filter cover (1) from HVAC unit.
Remove air filter (2) from HVAC unit.
Installation
HVAC Air Filter Inspection
Reverse removal procedure noting the following point.
Position air filter (1) and HVAC air filter cover (2) directing its arrow mark (3) upward.

---

## AENLSB0A7206039 - HVAC Air Filter Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206039.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206038 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206038.xml | HVAC Air Filter Removal and Installation

Content:
HVAC Air Filter Inspection
HVAC Air Filter Removal and Installation
Check that filter is not excessively dirty, damaged or oily.
Clean filter with compressed air from its air outlet side.

---

## AENLSB0A7206040 - HVAC System Relay Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206040.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0AA206009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206009.xml | Control Relay Inspection
- AENLSB0AA206009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206009.xml | Control Relay Inspection
- AENLSB0AA206009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206009.xml | Control Relay Inspection

Content:
HVAC System Relay Inspection
A/C Compressor Relay
Refer to
Control Relay Inspection
.
Blower Motor Relay
Refer to
Control Relay Inspection
.
Radiator Cooling Fan Motor Relay
Refer to
Control Relay Inspection
.

---

## AENLSB0A7206041 - Compressor Drive Belt Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206041.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions > Models > K14C
Outgoing references: none

Content:
Compressor Drive Belt Inspection
K14C Model
Check compressor drive belt (1) for wear, cracks, deformation and contamination. If any defect is found, replace the belt with new one.
Start engine and stop it after 2 or 3 seconds to stabilize compressor drive belt tension.
Hoist vehicle and remove right side front wheel.
Remove right side engine under side cover.
Check compressor drive belt tension by tension meter following the instructions mentioned in the tension meter manual. If compressor drive belt tension is not as specified, replace the belt with new one.
Compressor drive belt tension
Standard
407 – 787 N (41.5 – 80.3 kgf or 91.5 – 176.9 lbf)
Limit
172 N (17.5 kgf or 38.7 lbf)
Recommended belt tension meter specification
Gates Corporation “508” or equivalent
Setting value for belt tension meter “508”
MASS
57.2
WIDTH
1.0
SPAN
178
For using general belt tension meter (other than Gates Corporation “508”) refer to the following belt specification values.
Length: 728 mm
Weight: 41 g
Distance between the contact points of belt and pulley: 178 mm
For the setting of the belt tension meter, follow the operation manual of belt tension meter.
2.
Crankshaft pulley
3.
Magnet clutch pulley
Refer to
.

---

## AENLSB0A7206042 - Compressor Drive Belt Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206042.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions > Models > K14C
Outgoing references: none

Content:
Compressor Drive Belt Removal and Installation
K14C Model
Removal
Hoist vehicle and remove right side front wheel.
Remove right side engine under side cover.
Place special tool between crankshaft pulley (1) and compressor drive belt (2) as shown in figure.
(A)
09991–07450
Turn crankshaft pulley (1) clockwise until special tool is held between crankshaft pulley and compressor drive belt (2).
Lift special tool 90° in arrow direction “1”.
While holding special tool in position, turn crankshaft pulley (1) clockwise, and then remove compressor drive belt (2).
Installation
Fit ribs of compressor drive belt (1) into grooves of magnet clutch pulley (2).
Fit compressor drive belt into groove in special tool as shown in figure.
(A)
09991–07420
Fit ribs of special tool and compressor drive belt into grooves of crankshaft pulley (3) as shown in figure.
Turn crankshaft pulley (1) clockwise until ribs of compressor drive belt (2) fit into grooves of crankshaft pulley and magnet clutch pulley (3) completely.
Turn crankshaft clockwise 720° and check that all ribs of the belt fit into grooves of pulleys.
Check compressor drive belt tension.
Install right side engine under side cover.
Install right side front wheel.
Refer to
.

---

## AENLSB0A7206043 - Compressor Assembly Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206043.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions > Models > K14C
Outgoing references:
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge
- AENLSB0A7206045 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206045.xml | Magnet Clutch Inspection
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge

Content:
Compressor Assembly Removal and Installation
Removal
Recover refrigerant from A/C system using recovery and recycling equipment referring to “Recovery” in
Operation Procedure for Refrigerant Charge
.
Disconnect negative (–) cable at battery.
Remove compressor drive belt.
Disconnect magnet clutch lead wire connector.
Disconnect discharge hose (1) and suction hose (2) from compressor (3).
Cap open fittings immediately to keep moisture out of the system.
Remove compressor mounting bolts (4), and then remove compressor.
K14C model
Installation
Magnet Clutch Inspection
Reverse removal procedure noting the following points.
For HFC-134a model, both ND-OIL8 and ND-OIL12 are applicable.
For HFO-1234yf model, only ND-OIL12 is applicable.
If compressor is replaced, replenish A/C system with new compressor oil referring to “Replenishing Compressor Oil” in
Operation Procedure for Refrigerant Charge
.
Apply compressor oil to new O-rings of discharge hose and suction hose.
Compressor oil
99000–990B7–00A
Compressor oil (ND-12)
Compressor oil
95590–58D30
Compressor oil (ND-OIL8)
Tighten compressor mounting bolts in numerical order (“1” – “3”) to specified torque as shown in figure.
Tighten discharge hose bolt (1) and suction hose bolt (2) to specified torque.
Compressor mounting bolt (K14C model)
a
25
2.5
18.5
Discharge hose bolt
b
11
1.1
8.5
Suction hose bolt
c
11
1.1
8.5
d
50
5.1
37.0
K14C model
Check compressor drive belt tension.
Evacuate and charge A/C system referring to “Evacuation” and “Charge” in
Operation Procedure for Refrigerant Charge
.

---

## AENLSB0A7206044 - Compressor Assembly Components
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206044.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions > Models > K14C
Outgoing references: none

Content:
Compressor Assembly Components
K14C Model
1.
Clutch set
4.
Screw
:
13 N·m (1.3 kgf-m, 9.5 lbf-ft)
2.
Clip set
5.
Relief valve set
O-ring: Apply compressor oil.
:
Do not reuse.
3.
Bracket
:
18 N·m (1.8 kgf-m, 13.5 lbf-ft)
1.
Clutch set
4.
Screw
:
13 N·m (1.3 kgf-m, 9.5 lbf-ft)
2.
Clip set
5.
Relief valve set
O-ring: Apply compressor oil.
:
Do not reuse.
3.
Bracket
:
18 N·m (1.8 kgf-m, 13.5 lbf-ft)

---

## AENLSB0A7206045 - Magnet Clutch Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206045.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions > Models > K14C
Outgoing references: none

Content:
Magnet Clutch Inspection
Check armature plate for wear and magnet clutch pulley for oil soak respectively.
Check magnet clutch pulley bearing for noise, wear and grease leakage.
Using ohmmeter (1), measure resistance of stator coil between clutch lead wire (2) and compressor body.
If check result is not as specified, replace magnet clutch assembly.
Magnet clutch coil resistance
3.9 – 4.3 Ω (at 20 °C (68 °F))
[A]:
K14C model
[B]:

---

## AENLSB0A7206046 - Magnet Clutch Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206046.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references: none

Content:
Magnet Clutch Removal and Installation
Removal
Remove compressor from vehicle.
Fix armature plate (1) with special tool and remove armature plate bolt (2).
(A)
09917–68222
Remove armature plate.
Remove washer.
Remove snap ring (1) using snap ring pliers.
Remove magnet clutch pulley (2).
Remove snap ring (2) using snap ring pliers.
Remove magnet clutch lead wire screw (1).
Remove magnet clutch coil (3) from compressor.
Installation
Install magnet clutch coil (1) by fitting protrusion (2) of magnet clutch coil onto hole (3) in compressor.
Install new snap ring (1), directing the plane side downward using snap ring pliers, and then install magnet clutch lead wire screw (2).
Install magnet clutch pulley (1).
Install new snap ring (2), directing the plane side downward using snap ring pliers.
Install the same amount of removing washers.
Install armature plate (1) and then tighten armature plate bolt (2) to specified torque.
(A)
09917–68222
Armature plate bolt
a
18
1.8
13.5
Check clearance between armature plate (1) and magnet clutch pulley (2) as follows. If clearance is out of specified range, adjust it by putting washer(s) on compressor.
Put compressor in a soft jawed vise (3).
Set dial gauge (4) on armature plate, and then adjust its pointer at 0.
Connect battery positive (+) terminal to magnet clutch coil lead wire.
Connect battery negative (–) terminal to compressor body assembly. (At this point, armature plate and magnet clutch pulley are kept in contact.)
Disconnect battery negative (–) terminal from compressor body assembly. (At this point, armature plate and magnet clutch pulley are not in contact.)
Read stroke of armature plate from dial gauge by performing Step d) – e) repeatedly. (Stroke of armature plate indicates clearance between armature plate and magnet clutch pulley.)
Three shims in different thickness are included in clip set of supply parts. Using the three pieces at the maximum, adjust the clearance.
Standard clearance between armature plate and magnet clutch pulley
“a”: 0.30 – 0.55 mm (0.0118 – 0.0216 in.)

---

## AENLSB0A7206047 - Relief Valve Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206047.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions > Models > K14C
Outgoing references:
- AENLSB0A7204002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204002.xml | Trouble Diagnosis for Abnormal Pressure
- AENLSB0A7204002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7204002.xml | Trouble Diagnosis for Abnormal Pressure

Content:
Relief Valve Inspection
K14C Model
Check A/C system referring to
Trouble Diagnosis for Abnormal Pressure
.
Check relief valve for refrigerant leakage using leak detector (1).
If there is refrigerant leakage, replace relief valve.
Check A/C system referring to
Trouble Diagnosis for Abnormal Pressure
.
Hoist vehicle and remove engine undercover.
Check relief valve for refrigerant leakage using leak detector (1).
If there is refrigerant leakage, replace relief valve.

---

## AENLSB0A7206048 - Relief Valve Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206048.xml
Tree scopes: bookmarks: 7 - HVAC > 7B - HVAC System > Repair Instructions
Outgoing references:
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge
- AENLSB0A7206001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A7206001.xml | Operation Procedure for Refrigerant Charge

Content:
Relief Valve Removal and Installation
Removal
Recover refrigerant from A/C system using recovery and recycling equipment referring to “Recovery” in
Operation Procedure for Refrigerant Charge
.
Remove compressor assembly.
Remove relief valve (1) from compressor.
Installation
Reverse removal procedure noting the following points.
For HFC-134a model, both ND-OIL8 and ND-OIL12 are applicable.
For HFO-1234yf model, only ND-OIL12 is applicable.
Use new O-ring.
Apply compressor oil to O-ring.
Compressor oil
99000–990B7–00A
Compressor oil (ND-12)
Compressor oil
95590–58D30
Compressor oil (ND-OIL8)
Tighten relief valve (1) to specified torque.
Relief valve
a
13
1.3
9.5
Evacuate and charge A/C system referring to “Evacuation” and “Charge” in
Operation Procedure for Refrigerant Charge
.

---
