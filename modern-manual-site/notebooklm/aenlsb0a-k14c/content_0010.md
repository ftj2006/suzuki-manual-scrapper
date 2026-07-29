# Content Chunk 0010

Plain-text content extracted from source files with relationship metadata.

## AENLSB0A1722003 - Fuel Pump Control System Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1722003.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Pump Control System Circuit Diagram
[A]:
ECM connector (View: [a])
B3:
Fuel pump ground circuit
5.
Fuel pump relay
A1:
Fuel pump relay power supply circuit (coil side)
1.
To main relay
6.
Fuel pump
A2:
Fuel pump relay power supply circuit (switch side)
2.
To IG11 relay
7.
ECM
B1:
Fuel pump relay drive circuit
3.
“IG” fuse
B2:
Fuel pump power supply circuit
4.
“F/P” fuse

---

## AENLSB0A1724001 - Fuel System Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1724001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel System Inspection
Fuel pump inspection
Remove fuel filler cap and set ignition “ON”.
Check that fuel pump operating sound can be heard from fuel filler port for about 2 seconds.
Is check result OK?
Go to Step 2.
Check fuel pump circuit.
Fuel low pressure check
Check fuel pressure.
Is check result OK?
Go to Step 3.
Replace defective part.
Fuel high pressure check
Check fuel pressure.
Is check result OK?
End.
Replace defective part.

---

## AENLSB0A1724002 - Power Balance Test
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1724002.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Power Balance Test
The engine could be damaged if it is accelerated to a high rpm with a fuel injector connector disconnected.
Always perform power balance test with engine running at an idle speed.
Place gear shift lever in “Neutral” and apply parking brake.
Connect scan tool to DLC (1) with ignition “OFF”.
(A)
SUZUKI scan tool (Suzuki SDT-II)
Clear DTC.
Warm up engine to normal operating temperature.
Using SUZUKI scan tool, select “Fuel Injector” in “Active Test” and turn off each fuel injector.
With each fuel injector turned off, check that engine speed decreases from specified idle speed.
If decreasing rates of engine speed are not in scale, check the following items.
Fuel injector circuit:
Fuel injector:
Spark plug:
Ignition coil circuit:
Ignition coil:
Engine compression:

---

## AENLSB0A1724003 - Fuel Injector Circuit Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1724003.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Injector Circuit Check
This procedure is to troubleshoot only open, short to ground circuit and short to power supply circuit of fuel injector circuit. If it is necessary to troubleshoot for injector operation, perform
.
Circuit Diagram
[A]:
ECM connector (View: [a])
C2:
Fuel injector No.3 drive circuit (low side)
4.
Fuel injector No.4
A1:
Fuel injector No.1 drive circuit (high side)
D1:
Fuel injector No.4 drive circuit (high side)
5.
To IG11 relay
A2:
Fuel injector No.1 drive circuit (low side)
D2:
Fuel injector No.4 drive circuit (low side)
6.
“IG” fuse
B1:
Fuel injector No.2 drive circuit (high side)
1.
Fuel injector No.1
7.
ECM
B2:
Fuel injector No.2 drive circuit (low side)
2.
Fuel injector No.2
C1:
Fuel injector No.3 drive circuit (high side)
3.
Fuel injector No.3
Troubleshooting
Fuel injector drive circuit (high side) and (low side) circuit check
Remove intake manifold.
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM and all fuel injector connectors.
Check for proper terminal connection to “C01” and “E01” connectors and all fuel injector connectors.
If connections are OK, check the following points.
Resistance of “A1”, “A2”, “B1”, “B2”, “C1”, “C2”, “D1” and “D2”: less than 1 Ω
Resistance between each of “A1”, “A2”, “B1”, “B2”, “C1”, “C2”, “D1” and “D2” circuits and ground: infinity
Resistance between “A1” circuit terminal and “A2” circuit terminal at fuel injector connector: infinity
Resistance between “B1” circuit terminal and “B2” circuit terminal at fuel injector connector: infinity
Resistance between “C1” circuit terminal and “C2” circuit terminal at fuel injector connector: infinity
Resistance between “D1” circuit terminal and “D2” circuit terminal at fuel injector connector: infinity
Voltage of “A1”, “A2”, “B1”, “B2”, “C1”, “C2”, “D1” and “D2”: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
Fuel injector check
Check fuel injector.
Is check result OK?
End.
Replace fuel injector.

---

## AENLSB0A1724004 - Fuel Pump and Its Circuit Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1724004.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Pump and Its Circuit Check
Circuit Diagram
[A]:
ECM connector (View: [a])
B3:
Fuel pump ground circuit
5.
Fuel pump relay
A1:
Fuel pump relay power supply circuit (coil side)
1.
To main relay
6.
Fuel pump
A2:
Fuel pump relay power supply circuit (switch side)
2.
To IG11 relay
7.
ECM
B1:
Fuel pump relay drive circuit
3.
“IG” fuse
B2:
Fuel pump power supply circuit
4.
“F/P” fuse
Troubleshooting
Fuel pump control system check
Remove fuel filler cap.
Set ignition “ON”.
Check that fuel pump operating sound is heard from fuel filler for about 2 seconds.
Is check result OK?
Fuel pump circuit is in good condition. Reinstall fuel filler cap.
Go to Step 2.
Fuel pump relay power supply circuit check
Reinstall fuel filler cap.
Set ignition “OFF”.
Remove fuel pump relay from individual circuit fuse box No.1.
Check for proper terminal connection to fuel pump relay connector.
If connection is OK, set ignition “ON”.
Check that voltage between each of “A1” and “A2” and ground is battery voltage.
Is check result OK?
Go to Step 3.
Repair fuel pump relay power supply circuit.
Fuel pump relay check
Check fuel pump relay.
Is check result OK?
Go to Step 4.
Replace fuel pump relay.
Fuel pump relay drive circuit check
Set ignition “OFF”.
Disconnect “C01” and “E01” connectors from ECM.
Check for proper terminal connection to “C01” and “E01” connectors.
If connections are OK, check the following points.
Resistance of “B1” circuit: less than 1 Ω
Resistance between “B1” circuit and ground: infinity
Voltage of “B1” circuit: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 5.
Repair fuel pump relay drive circuit.
Fuel pump relay drive circuit signal check
Set ignition “OFF”.
Connect “C01” and “E01” connectors to ECM.
Using service wire, connect fuel pump relay.
Check that voltage between “B1” and ground is approx. 0 V for 2 seconds. after the ignition is “ON”.
Is check result OK?
Go to Step 6.
Replace ECM and recheck fuel pump operation.
Fuel pump power supply circuit check 1
Check that ignition is “OFF”.
Remove fuel tank.
Disconnect fuel pump connector.
Check that resistance between “B2” and ground is infinity.
Is check result OK?
Go to Step 7.
Repair fuel pump power supply circuit.
Fuel pump power supply circuit check 2
Connect service wire between “B1” and ground.
Set ignition “ON”.
Check that voltage between “B2” and ground is battery voltage.
Is check result OK?
Go to Step 8.
Repair fuel pump power supply circuit.
Fuel pump ground circuit check
Set ignition “OFF”.
Check that resistance between “B3” and ground is less than 1 Ω.
Is check result OK?
Replace fuel pump.
Repair fuel pump ground circuit.

---

## AENLSB0A1724005 - High Pressure Fuel Pump and Its Circuit Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1724005.xml
Tree scopes: unscoped
Outgoing references: none

Content:
High Pressure Fuel Pump and Its Circuit Check
This procedure is to troubleshoot only open, short to ground circuit and short to power supply circuit of fuel injector circuit. If it is necessary to troubleshoot for injector operation, perform
.
Circuit Diagram
[A]:
ECM connector (View: [a])
A2:
High pressure fuel pump drive circuit
2.
ECM
A1:
High pressure fuel pump power supply circuit
1.
High pressure fuel pump
Troubleshooting
High pressure fuel pump power supply circuit and drive circuit check
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM and high pressure fuel pump connector.
Check for proper terminal connection to “C01” and “E01” connectors and high pressure fuel pump connector.
If connections are OK, check the following points.
Resistance of “A1” and “A2” circuits: less than 1 Ω
Resistance between each of “A1” and “A2” circuits and ground: infinity
Resistance between “A1” circuit terminal and “A2” circuit terminal at high pressure fuel pump connector: infinity
Voltage of “A1” and “A2” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
High pressure fuel pump check
Check high pressure fuel pump.
Resistance:
Wear or damage:
Is check result OK?
End.
Replace high pressure fuel pump.

---

## AENLSB0A1724006 - Fuel Pressure Sensor and Its Circuit Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1724006.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Pressure Sensor and Its Circuit Check
This procedure is to troubleshoot only open, short to ground circuit and short to power supply circuit of fuel injector circuit. If it is necessary to troubleshoot for injector operation, perform
.
Circuit Diagram
[A]:
ECM connector (View: [a])
A3:
Fuel pressure sensor ground circuit
3.
To MAP sensor
A1:
Fuel pressure sensor and MAP sensor power supply circuit
1.
Fuel pressure sensor
A2:
Fuel pressure sensor signal circuit
2.
ECM
Troubleshooting
Fuel pressure sensor circuit check
Remove intake manifold.
Set ignition “OFF”, disconnect “C01” and “E01” connectors from ECM and fuel pressure sensor connector.
Check for proper terminal connection to “C01” and “E01” connectors and fuel pressure sensor connector.
If connections are OK, check the following points.
Resistance of “A1”, “A2” and “A3” circuits: less than 1 Ω
Resistance between each of “A1”, “A2” and “A3” circuits and ground: infinity
Resistance between “A1” circuit terminal and other terminal at fuel pressure sensor connector: infinity
Resistance between “A2” circuit terminal and other terminal at fuel pressure sensor connector: infinity
Voltage of “A1”, “A2” and “A3” circuits: approx. 0 V (When ignition is “ON”)
Is check result OK?
Go to Step 2.
Repair or replace defective wire harness.
Fuel pressure sensor check
Check fuel pressure sensor.
Is check result OK?
End.
Replace fuel delivery pipe (incorporating fuel pressure sensor).

---

## AENLSB0A1724007 - Low-Pressure Fuel Supply Circuit Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1724007.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Low-Pressure Fuel Supply Circuit Check
System Diagram
(A)
09912–58442
(B)
09912–58432
(C)
09912–58490
1.
Fuel injector
3.
Fuel pump assembly
5.
Fuel pressure sensor
2.
Fuel delivery pipe
4.
High pressure fuel pump
Troubleshooting
Before using the following flow chart, check that battery voltage is 11 V or more. If it is lower, fuel pressure becomes lower than specification even if fuel pump and line are in good condition.
Was “Fuel Pump and Its Circuit Check” performed?
Go to Step 2.
Go to
.
Fuel pressure check 1
Check fuel pressure.
Is check result OK?
Go to Step 3.
Go to Step 5.
Fuel pressure check 2
Start engine and warm it up to normal operating temperature.
Keep engine speed at 4,000 rpm.
Does fuel pressure show about the same value as Step 2?
Go to Step 4.
Fuel pressure regulator is in faulty condition. Replace fuel pump assembly.
Fuel line check
Check fuel pipe and joint for fuel leakage, damage or deformation.
Is check result OK?
Low pressure fuel supply circuit is in good condition.
Replace defective part.
Fuel line check
Check fuel pipe and joint for damage or deformation.
Is check result OK?
Clogged fuel filter, faulty fuel pump, faulty fuel pressure regulator or fuel leakage from pipe connection in fuel tank.
Replace defective part.

---

## AENLSB0A1724008 - High-Pressure Fuel Supply Circuit Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1724008.xml
Tree scopes: unscoped
Outgoing references: none

Content:
High-Pressure Fuel Supply Circuit Check
Troubleshooting
Before using the following flow chart, check that battery voltage is 11 V or more.
Was “Low-Pressure Fuel Supply Circuit Check” performed?
Go to Step 2.
Go to
.
Fuel line check
Check high pressure pipe, fuel delivery pipe and joint for fuel leakage, damage or deformation.
Is check result OK?
Go to Step 3.
Replace defective part.
Was “High Pressure Fuel Pump and Its Circuit Check” performed?
Go to Step 4.
Go to
.
Was “Fuel Pressure Sensor and Its Circuit Check” performed?
Go to Step 5.
Go to
.
Power balance test
Check power balance.
Is check result OK?
Fuel system is in good condition.
Go to Step 6.
Fuel injector check
Check fuel injector.
Is check result OK?
Check fuel injector circuit.
Fuel injector is in faulty condition. Replace fuel Injector.

---

## AENLSB0A1724009 - Fuel Low-Pressure Basic Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1724009.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Low-Pressure Basic Check
Before performing the following procedure, observe
.
Relieve fuel pressure from fuel feed line.
Remove inter cooler outlet pipe No.2.
Disconnect fuel feed hose from fuel feed pipe.
Connect special tools and hose between fuel feed hose (1) and fuel feed pipe (2) as shown in figure, and clamp hoses securely to check that no leakage occurs during check.
(A)
09912–58442
(B)
09912–58432
(C)
09912–58490
3.
High pressure fuel pump
Check that battery voltage is 11 V or more.
Measure fuel pressure as follows.
If measured pressure is out of specification, refer to
and check each possible defective part. Replace if found defective.
Set ignition “ON” to operate fuel pump and turn it “OFF” after 2 seconds. Repeat this 3 or 4 times and then check fuel pressure.
Fuel pressure specification
485 – 515 kPa (4.9 – 5.3 kgf/cm 2 , 70.3 – 74.6 psi, 4.85 – 5.15 bar)
Relieve fuel pressure.
Remove special tools from fuel feed pipe and fuel feed hose.
Connect fuel feed hose to fuel feed pipe and clamp it securely.
With engine stopped, set ignition “ON” and check for fuel leakage.
Install inter cooler outlet pipe No.2.

---

## AENLSB0A1724010 - Fuel High-Pressure Basic Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1724010.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel High-Pressure Basic Check
Refer to
.

---

## AENLSB0A1726001 - Fuel System Components
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel System Components
1.
Fuel tank
14.
Air suction filter
27.
Fuel injector
: Apply a bit of fuel to install.
2.
Fuel pump assembly
15.
Fuel filler cap
28.
Clamp
3.
O-ring
16.
Fuel feed pipe (fuel pump side)
29.
Clip
4.
Fuel pump lock nut
: For tightening procedure, refer to
.
17.
Fuel feed pipe (engine side)
30.
To EVAP canister
5.
Fuel tank baffle plate
: For removal and installation, refer to
.
18.
Fuel feed hose
:
55 N·m (5.6 kgf-m, 40.5 lbf-ft)
6.
Fuel tank pad
19.
Fuel pipe protector
:
33 N·m (3.4 kgf-m, 24.5 lbf-ft)
7.
Fuel tank belt
20.
High pressure fuel pump
: For installation, refer to
.
:
25 N·m (2.5 kgf-m, 18.5 lbf-ft)
8.
Breather hose
21.
High pressure fuel pump O-ring
: Apply engine oil.
:
14 N·m (1.4 kgf-m, 10.5 lbf-ft)
9.
Fuel tank filler hose
22.
Fuel pump tappet
: Apply engine oil to roller and periphery of tappet.
:
11 N·m (1.1 kgf-m, 8.5 lbf-ft)
10.
Fuel EVAP hose
23.
High pressure pipe
: For tightening order, refer to
.
:
6.0 N·m (0.61 kgf-m, 4.5 lbf-ft)
11.
Fuel filler neck
24.
Fuel delivery pipe
: For installation, refer to
.
:
3.0 N·m (0.31 kgf-m, 2.5 lbf-ft)
12.
Fuel filler neck cover
25.
Fuel pressure sensor
: Incorporated in fuel delivery pipe.
:
Do not reuse.
13.
Fuel filler packing
26.
Fuel injector clip

---

## AENLSB0A1726002 - Fuel Hose Disconnection and Reconnection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726002.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Hose Disconnection and Reconnection
Before performing the following procedure, observe
.
Non-Quick Joint Connections
Install hose in the raised part of pipe securely.
“a”:
3 – 7 mm (0.12 – 0.27 in.)
“f”:
45°
3.
Clamp
“b”:
2 – 6 mm (0.07 – 0.23 in.)
“g”:
22.5°
4.
Vehicle leftward
“c”:
0 – 8 mm (0 – 0.31 in.)
“h”:
0°
5.
Vehicle rightward
“d”:
5 – 12 mm (0.20 – 0.47 in.)
1.
Pipe
6.
Vehicle forward
“e”:
1 mm (0.04 in.) or less
2.
Hose
Fuel Tank Filler Hose
Disconnection
Remove fuel filler cap.
Insert hose of hand operated pump into fuel tank through fuel filler neck.
The hose of the hand operated pump could damage the fuel tank inlet valve if excessive force is applied when inserting or removing it to or from the fuel tank.
Do not apply excessive force when inserting or removing the hose of the hand operated pump.
Pump out fuel in space “a” shown in figure.
There is a risk of fire or explosion due to static electricity if the drained fuel is stored in an open container or plastic container.
Store the fuel in a sealed metal container.
1.
Fuel tank filler hose
Remove hose of hand operated pump from fuel filler neck.
Hoist vehicle.
Move position of fuel tank filler hose clamps (1).
Remove fuel tank filler hose (2).
Reconnection
Install fuel tank filler hose (1) to fuel tank (2).
Install the fuel tank filler hose with identification marks on the hose end facing up (approximately).
Position fuel tank filler hose clamp (3) as specified.
Clearance between fuel tank and fuel tank filler hose clamp
“a”: 2 – 6 mm (0.07 – 0.23 in.)
Clearance between fuel tank and fuel tank filler hose
“b”: 1 mm (0.04 in.) or less
Position of clamp mid-point within range
“c”: 0°
Rotate plastic clamp (1) in arrow direction.
Apply fuel to all around the outer circumference of fuel tank filler hose attachment section of the fuel filler neck.
Remaining lint from cloth may cause fuel leakage.
Use lint-free cloth to apply fuel.
Apply fuel to insert fuel tank filler hose into proper position.
Insert fuel tank filler hose (1) to fuel filler neck.
Position fuel tank filler hose clamp (2) as specified.
Clearance between spool and fuel filler hose end
“a”: 0 – 8 mm (0 – 0.31 in.)
Clearance between fuel tank filler hose clamp and fuel filler hose end
“b”: 5 – 12 mm (0.20 – 0.47 in.)
Position of clamp mid-point within range
“c”: 22.5°
Visually check bulge on fuel tank filler hose. Repeat Step 4) – 6) if check result is not as specified.
Fuel tank filler hose bulge is in good shape
Bulge “A” = “B”: In uniform contact with pipe
Fuel tank filler hose bulge is not in good shape
Bulge “C”: In excess contact with pipe
Bulge “D”: In poor contact with pipe
Turn the plastic clamp, and clamp the hoses.
Lower vehicle.
If fuel is drained, return fuel to fuel tank.
Install fuel filler cap.
Clamp other than around fuel tank
[A]:
With short pipe, fit hose as far as it reaches the end of pipe joint as shown.
1.
Pipe
[B]:
With the above type pipe, fit hose as far as it reaches bulge on fuel pipe.
2.
Hose
“a”:
3 – 7 mm (0.12 – 0.28 in.)
3.
Clamp
Quick Joint Connections
Type A (Lock button type)
Disconnection
Remove mud, dust and/or foreign material between pipe (1) and quick joint (2) using compressed air.
Disconnect quick joint from fuel pipe while pushing lock button (3) on joint.
Reconnection
Insert quick joint to fuel pipe until they lock securely (a click is heard), and check that quick joint is not disconnected by hand.
Type B (Special tool inserting type)
Disconnection
Remove mud, dust and/or foreign material between pipe (1) and quick joint (2) by blowing compressed air.
Unlock joint lock by inserting special tool between pipe and quick joint.
(A)
09919–47020
Disconnect quick joint from pipe.
Reconnection
Insert quick joint to fuel pipe until they lock securely (a click is heard), and check that quick joint is not disconnected by hand.

---

## AENLSB0A1726003 - Fuel Pressure Relief Procedure
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726003.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Pressure Relief Procedure
Performing this procedure when the engine is still hot can damage the catalyst.
Wait until the engine has cooled down before performing this procedure.
Check that engine is cold.
Place gear shift lever in “Neutral”, apply parking brake and block drive wheels.
Remove fuel pump relay (1) from individual circuit fuse box No.1.
Remove fuel filler cap to relieve fuel vapor pressure from fuel tank, and then reinstall fuel filler cap.
Start engine and run it until engine stops for lack of fuel. Repeat cranking engine 2 – 3 times for about 3 seconds each time to dissipate fuel pressure in lines. Fuel connections are now safe for servicing.
After servicing, install fuel pump relay to individual circuit fuse box No.1 and install individual circuit fuse box No.1 cover.

---

## AENLSB0A1726004 - Fuel Leakage Check Procedure
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726004.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Leakage Check Procedure
Fuel in high pressure fuel circuit is pressurized to maximum 35 MPa (356.9 kgf/cm 2 , 5,076 psi, 350 bar) and spurted fuel from leaky point, if any, has a hazard to be ignited.
When fuel leakage is found, perform
before repairing the leakage.
After performing any service on fuel system, check that there is no fuel leakage as follows.
Set ignition “ON”.
Check for fuel leakage in each part, which was serviced.
Start the engine, and then check for fuel leakage in each part, which was serviced.
Run engine at 4,000 rpm for about 30 seconds and then stop engine.
Check for fuel leakage in each part, which was serviced.

---

## AENLSB0A1726005 - Fuel Line On-Vehicle Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726005.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Line On-Vehicle Inspection
Visually check fuel lines for evidence of fuel leakage, hose crack and deterioration or damage.
Check that all clamps are secure.
Replace parts if necessary.

---

## AENLSB0A1726006 - Fuel Pipe Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726006.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Pipe Removal and Installation
Before performing the following procedure, observe
.
Removal
Relieve fuel pressure from fuel feed line.
Disconnect negative (–) cable at battery.
Hoist vehicle and remove left side main floor undercover.
For LHD, remove inter cooler outlet pipe No.2.
For LHD, remove front suspension frame.
Disconnect fuel hoses (1) from fuel pipes (2) at both front and rear ends of each fuel pipe.
Mark the location of clamps (3) on fuel pipes, so that the clamps can be reinstalled to the original position.
Remove clamps from vehicle body and fuel pipes.
Fuel pipes may be bent or damaged if you are not careful when unclamping them.
Properly support fuel pipes when removing clamps.
[A]:
Engine side (LHD)
[C]:
Fuel tank side
[B]:
Engine side (RHD)
Remove fuel pipes.
Installation
Install pipes to vehicle.
Install clamps to marked position on pipes. If clamp is deformed or has bent or broken claws, replace it with new one.
Connect fuel hoses to pipes.
For LHD, install front suspension frame.
For LHD, install inter cooler outlet pipe No.2.
Connect negative (–) cable at battery.
With engine stopped, set ignition “ON” and check for fuel leakage.
Install left side main floor undercover.

---

## AENLSB0A1726007 - Fuel Pressure Sensor On-Vehicle Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726007.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Pressure Sensor On-Vehicle Inspection
Place gear shift lever in “Neutral”, apply parking brake and block drive wheels.
Connect SUZUKI scan tool to DLC (1) with ignition “OFF”.
(A)
SUZUKI scan tool (Suzuki SDT-II)
Set ignition “ON” and select “Data List” mode.
Check “Fuel Rail Pressure” varies in response to “Vehicle condition”.
Right after engine stop, fuel pressure remains high.
Vehicle condition
Fuel pressure
Engine: Idle speed after warming up
Approx. 5,000 – 35,000 kPa (51.0 – 356.9 kgf/cm 2 , 725 – 5,076 psi)
Engine: 4,000 – 5,000 rpm
Approx. 10,000 – 35,000 kPa (102.0 – 356.9 kgf/cm 2 , 1,450 – 5,076 psi)

---

## AENLSB0A1726008 - High Pressure Pipe Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726008.xml
Tree scopes: unscoped
Outgoing references: none

Content:
High Pressure Pipe Removal and Installation
Before performing the following procedure, observe
.
Removal
Hoist vehicle and remove engine undercover and right side engine under side cover.
Relieve fuel pressure.
Remove EGR cooler.
Remove electric throttle body assembly.
Remove air cleaner bracket (1).
Remove high pressure pipe (1).
Installation
Failure to take proper precautions when installing the high pressure pipe can cause damage to the high pressure pipe and may lead to fuel leakage.
Take the following precautions when removing and installing the high pressure pipe.
Never reuse high pressure pipe.
When the union nut is tightened using extension (claw foot) until the torque wrench reads the specified torque, the nut will actually be tightened to a torque much more than the specified torque. This could damage the thread.
Use the formula shown below to determine the correct reading of the torque wrench for its length. Then tighten the union nut of high pressure pipe until the torque wrench indicates the value thus determined.
Tightening torque formula
M = T x L / (L + “a”)
M: Value indicated on torque wrench
T: Specified tightening torque
L: Effective length of torque wrench
“a”: Effective length of extension
“b”:
Handle center line (power point)
“c”:
Pivot point (fulcrum)
Install new high pressure pipe according to the following procedure.
Check that notch (1) on crankshaft pulley is positioned within range “b”.
“a”:
110°
“b”:
20°
Loosen high pressure fuel pump bolts (1) 90 – 120°.
Tighten high pressure pipe union nuts (2) by hand until seated and temporarily tighten high pressure pipe bolt (3).
Tighten high pressure pipe union nuts (1) to specified torque in numerical order (“1” – “2”) as shown in figure.
High pressure pipe union nut*
a
33
3.4
24.5
Tighten high pressure fuel pump bolts (2) to specified torque.
High pressure fuel pump bolt*
b
25
2.5
18.5
Tighten high pressure pipe bolt (3) to specified torque.
High pressure pipe bolt*
c
11
1.1
8.5
Install electric throttle body assembly.
Install EGR cooler.
Positioning air cleaner bracket (1) to specified position as shown, tighten air cleaner bracket bolt (2) to specified torque.
Air cleaner bracket bolt
a
11
1.1
8.5
With engine stopped, set ignition “ON” and check for fuel leakage.
Install engine undercover and right side engine under side cover.

---

## AENLSB0A1726009 - High Pressure Fuel Pump On-Vehicle Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726009.xml
Tree scopes: unscoped
Outgoing references: none

Content:
High Pressure Fuel Pump On-Vehicle Inspection
Set ignition “OFF”.
Disconnect high pressure fuel pump connector.
Check resistance between terminals of high pressure fuel pump solenoid.
If check result is not as specified, replace high pressure fuel pump.
High pressure fuel pump solenoid resistance
0.49 – 0.59 Ω at 20 °C (68 °F)
Connect high pressure fuel pump connector.

---

## AENLSB0A1726010 - High Pressure Fuel Pump Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726010.xml
Tree scopes: unscoped
Outgoing references: none

Content:
High Pressure Fuel Pump Removal and Installation
Before performing the following procedure, observe
.
Removal
Relieve fuel pressure.
Remove high pressure pipe.
Disconnect high pressure fuel pump connector.
Disconnect fuel feed hose (1) from high pressure fuel pump.
Remove high pressure fuel pump (2) with high pressure fuel pump O-ring and fuel pump tappet (3).
Installation
Clean mating surfaces of high pressure fuel pump and camshaft rear housing.
Turn crankshaft so that notch (1) on crankshaft pulley is positioned within range “b” and check that base circle (heel) of high pressure fuel pump cam is aligned with center line of high pressure fuel pump.
“a”:
110°
“b”:
20°
Install fuel pump tappet noting the following points.
Apply engine oil to roller and periphery of tappet.
Insert tappet (1) aligning protrusion (2) with groove (3) in camshaft rear housing hole.
Apply engine oil to new O-ring and then fit it to high pressure fuel pump.
Install high pressure fuel pump (1) and tighten high pressure fuel pump bolts (2) as follows.
Tighten high pressure fuel pump bolts evenly until the pump is seated on the housing.
Tighten high pressure fuel pump bolts to 5.0 N·m (0.51 kgf-m, 4.0 lbf-ft).
Connect fuel feed hose to high pressure fuel pump as it was.
Connect high pressure fuel pump connector.
Install new high pressure pipe and tighten high pressure fuel pump bolts to specified torque.
With engine stopped, set ignition “ON” and check for fuel leakage.

---

## AENLSB0A1726011 - High Pressure Fuel Pump Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726011.xml
Tree scopes: unscoped
Outgoing references: none

Content:
High Pressure Fuel Pump Inspection
Check the following points.
Fuel passages for inlet (1) with mesh filter and outlet (2) are clean.
Plunger (3) does not wobble.
High pressure fuel pump tappet (4) is not badly worn and roller (5) rotates smoothly.

---

## AENLSB0A1726012 - Fuel Injector On-Vehicle Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726012.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Injector On-Vehicle Inspection
Refer to
.

---

## AENLSB0A1726013 - Fuel Injector Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726013.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Injector Removal and Installation
Before performing the following procedure, observe
.
Removal
Relieve fuel pressure.
Disconnect negative (–) cable at battery.
Remove intake manifold.
Disconnect fuel injector connectors (1) and fuel pressure sensor connector (2).
Remove injector knock wire bolt (3).
Remove high pressure pipe.
Remove fuel delivery pipe (1) together with fuel pressure sensor (2).
Remove fuel injector clips (1).
Remove fuel injectors.
If it is hard to remove, use special tool as follows.
Removal of fuel injector using special tool may damage the injector.
Replace the fuel injector removed by special tool with new one.
Set special tool on fuel injector (1) and fix it tightening bolt (2) by hand.
(A)
09918–35811
Giving impact to fuel injector with special tool, pull it out of cylinder head.
Installation
If the fuel injector is reused, it may cause high pressure fuel leakage.
Never reused the fuel injector.
Apply a bit of fuel to O-ring (1) of new fuel injector (2).
Set new fuel injector clip (3).
Set fuel injectors to new fuel delivery pipe (4).
Install fuel delivery pipe with fuel injectors to cylinder head.
Loosen high pressure fuel pump bolts 90° – 120°.
Tighten fuel delivery pipe bolts (1) as follows.
Tighten the bolts evenly and carefully until fuel injectors (2) are inserted in the holes of cylinder head (3) fully.
Tighten fuel delivery pipe bolts to specified torque.
If reinstallation of fuel injectors is necessary, replace them with new ones again.
Fuel delivery pipe bolt
a
55
5.6
40.5
Install new high pressure pipe.
Tighten high pressure fuel pump bolts to specified torque.
Connect fuel injector connectors (1) and fuel pressure sensor connector (2).
Tighten injector knock wire bolts (3) to specified torque.
Injector knock wire bolt
a
11
1.1
8.5
Install intake manifold.
With engine stopped, set ignition “ON” and check for fuel leakage.

---

## AENLSB0A1726014 - Fuel Injector Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726014.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Injector Inspection
Fuel Injector Check
If engine speed does not decrease with a particular fuel injector off in
check that injector as follows.
Remove intake manifold.
Disconnect connector (1) from fuel injector, connect ohmmeter between terminals of fuel injector and check resistance.
If resistance is out of reference value greatly, replace injector.
Reference resistance of fuel injector
1.7 – 1.9 Ω at 20 °C (68 °F)
If resistance of the injector is normal, check power supply circuit.
Connect connector to fuel injector securely.
Install intake manifold.

---

## AENLSB0A1726017 - Fuel Filler Cap Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726017.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Filler Cap Inspection
Failure to use correct cap can result in EVAP leakage.
If cap requires replacement, use a cap with genuine SUZUKI parts.
Remove cap (1), and check gasket for even filler neck imprint, deterioration or any damage. If gasket (2) is defective, replace cap.

---

## AENLSB0A1726018 - Fuel Tank Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726018.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Tank Removal and Installation
Before performing the following procedure, observe
.
Removal
Relieve fuel pressure from fuel feed line.
Disconnect negative (–) cable at battery.
Remove fuel filler cap.
Insert hose of a hand operated pump into fuel filler hose (1) and pump out fuel in space “a” shown in figure.
There is a risk of fire or explosion due to static electricity if the drained fuel is stored in an open container or plastic container.
Store the fuel in a sealed metal container.
The hose of the hand operated pump could damage the fuel tank inlet valve if excessive force is applied when inserting or removing it to or from the fuel tank.
Do not apply excessive force when inserting or removing the hose of the hand operated pump.
Hoist vehicle.
Remove clamps (1).
Disconnect breather hose (2) and air suction hose (3) and turn plastic clamp (4).
The plastic clamp could be damaged if excessive force is applied when turning it.
Turn plastic clamp carefully.
Remove clamp (1) and fuel filler hose (2) from fuel tank.
Remove exhaust center pipe.
Remove parking brake cable nut (1).
Disconnect quick joints (2) from fuel pipes (3).
Support fuel tank (1) with jack (2) and remove its mounting bolts.
Lower fuel tank a little to disconnect fuel pump connector (1), and then remove fuel tank.
Applying tension to the fuel pump harness will cause damage to the fuel pump and the fuel pump harness when lowering the fuel tank.
Disconnect the fuel pump connector with the fuel tank lowered to a height at which tension is not applied to the fuel pump harness.
Remove EVAP canister, if necessary.
If necessary, remove fuel tank components as follows.
Remove fuel pump.
Drain fuel.
Remove fuel tank baffle plate (1) in numerical order (“1” – “2”).
Remove fuel tank belt.
Installation
Failure to take proper precautions when reinstalling the fuel tank connections can result in fuel leakage or damage.
Clean the outside surface of the pipe where each quick joint is to be installed, push the pipe into the joint until the joint lock clicks, and then check that the pipe is connected securely.
If removed, install fuel tank components as follows.
Install fuel tank baffle plate (1) in numerical order (“1” – “2”).
Install fuel pump.
Install fuel tank belt.
Install EVAP canister, if removed.
Raise fuel tank with jack and connect fuel pump connector.
Install fuel tank (1) to vehicle and tighten new fuel tank bolts (2) to specified torque.
The fuel tank bolts are pre-coated with friction stabilizer. If the bolts are reused, they may work loose.
Use the new fuel tank bolts.
Fuel tank bolt
a
14
1.4
10.5
Connect fuel filler hose (2) to fuel tank and clamp (1) them securely.
For proper installation, refer to
.
Turn plastic clamp (1).
The plastic clamp could be damaged if excessive force is applied when turning it.
Turn plastic clamp carefully.
Connect breather hose (2) and air suction hose (3) and clamps (4) them securely.
For proper installation, refer to
.
Connect quick joints (2) to fuel pipes (3).
Tighten parking brake cable nut (1) to specified torque.
Install exhaust center pipe.
Install fuel filler cap.
Connect negative (–) cable at battery.
With engine stopped, set ignition “ON” and check for fuel leakage.

---

## AENLSB0A1726019 - Fuel Tank Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726019.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Tank Inspection
Check fuel tank for crack, deformation or damage.
Check fuel tank inlet valve for damage, smooth opening and closing.
If faulty condition is found, replace fuel tank.
Check fuel pump O-ring for fuel leakage.
If faulty condition is found, replace O-ring and fuel pump lock nut.
Check hoses and pipes connected to fuel tank for leakage, loose connections, deterioration or damage.
If faulty condition is found, replace hoses and/or pipes.

---

## AENLSB0A1726020 - Fuel Tank Flushing Procedure
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726020.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Tank Flushing Procedure
This flushing procedure cannot remove all fuel vapors in the fuel tank completely, so using a flame or electric heater to dry the fuel tank will increase the risk of an explosion which may cause human injury.
Do not use a flame and/or electric heater to dry the fuel tank.
Before performing the following procedure, observe
.
After removing fuel tank, remove all hoses, pipes and fuel pump assembly from fuel tank.
Drain all remaining fuel from tank.
Place fuel tank to flushing area.
Fill tank with warm water or tap water, agitate water vigorously, and drain water out of tank. Repeat this process until inside of tank is clean.
Completely flush out remaining water.
Dry fuel tank assembly thoroughly in a place free of direct sunlight.

---

## AENLSB0A1726021 - Fuel Pump On-Vehicle Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726021.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Pump On-Vehicle Inspection
Fuel pressure regulator is an integral part of fuel pump assembly.
Fuel pressure regulator cannot be individually checked.
Remove fuel filler cap and set ignition “ON”. Fuel pump operation sound should be heard from fuel filler (1) for about 2 seconds. Reinstall fuel filler cap.
If check result is not as specified, go to
.
Set ignition “OFF” and leave it over 10 seconds as it is.
Fuel pressure should be felt at fuel feed hose (1) for about 2 seconds after setting ignition “ON”.
If fuel pressure is not felt, go to
.

---

## AENLSB0A1726022 - Fuel Pump Assembly Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726022.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Pump Assembly Removal and Installation
The fuel pump assembly components except the fuel level sensor will lose their original performance if each part is removed from the fuel pump assembly.
Do not remove each of the fuel pump assembly components except the fuel level sensor. If any faulty condition is found, replace the fuel pump assembly with a new one.
Removal
Remove fuel tank from vehicle.
Disconnect quick joint (1) from fuel pump assembly (2).
Remove fuel pump lock nut (1) from fuel tank (2) using special tool.
(A)
09941–51013
Remove fuel pump assembly (1) and O-ring (2) from fuel tank (3).
Installation
Failure to take proper precautions when reinstalling the fuel tank connections can result in fuel leakage or damage.
Clean the outside surface of the pipe where each quick joint is to be installed, push the pipe into the joint until the joint lock clicks, and then check that the pipe is connected securely.
Clean mating surfaces of fuel pump assembly and fuel tank.
Install new O-ring (1) to fuel tank (2).
Install fuel pump assembly (1) to fuel tank (2) as follows.
Align arrow mark (3) on fuel pump assembly with cutout (4) of fuel tank.
Push fuel pump assembly down by hand until fuel pump assembly comes into contact with fuel tank as shown in figure.
5.
O-ring
In the state of Step b), tighten new fuel pump lock nut (1) by hand.
Removed fuel pump lock nut cannot assure adequate sealing. If the fuel pump lock nut is reused, it may cause fuel leakage.
Never reuse the fuel pump lock nut.
Tighten lock nut while pressing straight on it so that it will not tilt.
2.
Fuel pump assembly
4.
O-ring
3.
Fuel tank
Using special tool, tighten fuel pump lock nut (1) until indexes (3) of fuel pump lock nut and fuel tank (2) are aligned.
Indexes are aligned when fuel pump lock nut is tightened by approx.1 rotation.
After tightening fuel pump lock nut, check for loosening and play.
(A)
09941–51013
Connect quick joint (1) to fuel pump assembly (2).
Install fuel tank to vehicle.

---

## AENLSB0A1726023 - Fuel Pump Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726023.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Pump Inspection
Check fuel pump assembly for damage.
Check fuel pump filter for contamination.
If contaminated, replace or clean the filter and check fuel tank inside for presence of dirt.

---

## AENLSB0A1726024 - Fuel Level Sensor Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726024.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Level Sensor Removal and Installation
Failure to take proper precautions when removing or installing the fuel level sensor can result in damage.
To prevent failure of the fuel level sensor, be careful not to touch the resistor plate (1) or deform the arm (2) when performing the service operations described below.
Removal
Remove fuel pump assembly from fuel tank.
Disconnect fuel level sensor connector (1).
Remove fuel level sensor (2) from fuel pump (3) by sliding it in arrow direction as shown in figure.
Installation
Reverse removal procedure.

---

## AENLSB0A1726025 - Fuel Level Sensor Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1726025.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Fuel Level Sensor Inspection
Check that resistance between terminals “1” and “2” of fuel level sensor changes depending on float position.
Check resistance between terminals “1” and “2” at each float position in the following table.
If check result is not as specified, replace fuel level sensor.
Fuel level sensor specifications
Float position
Resistance
“a”
130.4 – 134.4 mm
(5.134 – 5.291 in.)
40 ± 1.0 Ω
“b”
78.0 – 82.0 mm
(3.071 – 3.228 in.)
160 ± 1.6 Ω
“c”
13.6 – 18.4 mm
(0.535 – 0.724 in.)
280 ± 2.8 Ω

---

## AENLSB0A1727001 - Tightening Torque Specifications
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1727001.xml
Tree scopes: unscoped
Outgoing references:
- AENLSB0A0101006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0101006.xml | Fasteners Information

Content:
Tightening Torque Specifications
For fastener(s) with * (asterisk) below, refer to the specified procedure in “Repair Instructions”.
Fastening part
Tightening torque
Note
N·m
kgf-m
lbf-ft
High pressure pipe union nut*
33
3.4
24.5
High pressure fuel pump bolt*
25
2.5
18.5
High pressure pipe bolt*
11
1.1
8.5
Air cleaner bracket bolt
11
1.1
8.5
Fuel delivery pipe bolt
55
5.6
40.5
Injector knock wire bolt
11
1.1
8.5
Fuel tank bolt
14
1.4
10.5
Reference:
For the tightening torques of fasteners not specified in this page, refer to:
Fasteners Information

---

## AENLSB0A1728001 - Recommended Service Material
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1728001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Recommended Service Material
Required service material(s) is also described in:

---

## AENLSB0A1728002 - Special Tool
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1728002.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Special Tool
09912–58432
09912–58442
Fuel pressure gauge hose
Fuel pressure gauge
This tool is included in fuel pressure gauge set (09912-58413).
This tool is included in fuel pressure gauge set (09912-58413).
09912–58490
09918–35811
3-way joint & hose
Injector remover
09919–47020
09941–51013
Quick joint remover
Lock ring wrench
SUZUKI scan tool (Suzuki SDT-II)
—

---

## AENLSB0A1811001 - Ignition System Construction
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1811001.xml
Tree scopes: bookmarks: 1 - Engine > 1H - Ignition System > General Description > K14C
Outgoing references: none

Content:
Ignition System Construction
The ignition system is of an electronic ignition type which consists of the following components.
ECM
It monitors the engine and vehicle conditions through the signals from the sensors, determines the most suitable ignition timing and duration and sends a signal to the ignition coil assembly.
Ignition coil assembly
One ignition coil assembly is provided for each cylinder.
The ignition coil assembly turns on and off the current to the primary coil according to the signal from ECM. When the current flow to the primary coil is turned off, a high voltage is induced in the secondary coil.
Spark plugs
CMP sensor and CKP sensor
Using signals from these sensors, ECM identifies the specific cylinder whose piston is in the compression stroke, detects the crank angle and adjusts initial ignition timing automatically.
TP sensor, ECT sensor, MAP sensor, MAF sensor with IAT sensor -1, knock sensor and other sensors / switches
Using signals from these sensors / switches, the ECM corrects the initial ignition timing and sets the optimum timing according to the engine conditions.

---

## AENLSB0A1812001 - Ignition System Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1812001.xml
Tree scopes: bookmarks: 1 - Engine > 1H - Ignition System > Schematic and Routing Diagram > K14C
Outgoing references: none

Content:
Ignition System Circuit Diagram
[A]:
ECM connector (View: [a])
2.
Ignition coil assembly No.2
7.
Spark plug No.3
A1 – A4:
Ignition coil assembly power supply circuits
3.
Ignition coil assembly No.3
8.
Spark plug No.4
B1 – B4:
Ignition coil assembly drive circuits
4.
Ignition coil assembly No.4
9.
CMP sensor
C1 – C4:
Ignition coil assembly ground circuits
5.
Spark plug No.1
10.
CKP sensor
1.
Ignition coil assembly No.1
6.
Spark plug No.2
11.
ECM

---

## AENLSB0A1813001 - Ignition System Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1813001.xml
Tree scopes: bookmarks: 1 - Engine > 1H - Ignition System > Component Location > K14C
Outgoing references: none

Content:
Ignition System Component Location
1.
ECM
4.
Ignition coil assembly No.1
7.
Ignition coil assembly No.4
2.
CKP sensor
5.
Ignition coil assembly No.2
8.
CMP sensor
3.
DLC
6.
Ignition coil assembly No.3

---

## AENLSB0A1814001 - Ignition System Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1814001.xml
Tree scopes: bookmarks: 1 - Engine > 1H - Ignition System > Diagnostic Information and Procedures > K14C
Outgoing references:
- AENLSB0A1114001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1114001.xml | Engine and Emission Control System Check:K14C

Content:
Ignition System Check
Circuit Diagram
[A]:
ECM connector (View: [a])
2.
Ignition coil assembly No.2
7.
Spark plug No.3
A1 – A4:
Ignition coil assembly power supply circuits
3.
Ignition coil assembly No.3
8.
Spark plug No.4
B1 – B4:
Ignition coil assembly drive circuits
4.
Ignition coil assembly No.4
9.
CMP sensor
C1 – C4:
Ignition coil assembly ground circuits
5.
Spark plug No.1
10.
CKP sensor
1.
Ignition coil assembly No.1
6.
Spark plug No.2
11.
ECM
Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
Engine and Emission Control System Check:K14C
.
Ignition spark test 1
Perform ignition spark test.
Is test result OK?
Go to Step 3.
Go to Step 4.
Ignition timing check
Check ignition timing.
Is check result OK?
Ignition system is in good condition.
Repair or replace defective part.
Confirmation of malfunctioning cylinder
Check cylinder(s) that failed in ignition spark test.
Did all cylinders fail in ignition spark test?
Go to Step 7.
Go to Step 5.
Ignition spark test 2
Replace spark plug of each malfunctioning cylinder with normal cylinder’s one.
Perform ignition spark test.
Is test result OK?
Replace spark plug.
Go to Step 6.
Ignition spark test 3
Replace ignition coil of each malfunctioning cylinder with normal cylinder’s one.
Perform ignition spark test.
Is test result OK?
Replace ignition coil.
Go to Step 7.
Ignition coil assembly power supply and ground circuit check
Set ignition “OFF”.
Disconnect “C01” and “E01” connectors from ECM, and all connectors from ignition coil assemblies.
Check for proper terminal connections to “C01” and “E01” connectors and ignition coil connectors.
If connections are OK, check power supply (“A1”, “A2”, “A3” and “A4”) and ground (“C1”, “C2”, “C3” and “C4”) circuits of each ignition coil assembly for open, short and poor connection.
Is check result OK?
Go to Step 8.
Repair or replace defective part.
Ignition coil assembly drive circuit check
Set ignition “OFF”, check the following points.
Resistance of “B1”, “B2”, “B3” and “B4” circuits: less than 1 Ω
Resistance between each of “B1”, “B2”, “B3” and “B4” circuits and ground: infinity
Resistance between “B1” circuit terminal and other terminal at ignition coil connector: infinity
Resistance between “B2” circuit terminal and other terminal at ignition coil connector: infinity
Resistance between “B3” circuit terminal and other terminal at ignition coil connector: infinity
Resistance between “B4” circuit terminal and other terminal at ignition coil connector: infinity
Voltage of “B1”, “B2”, “B3” and “B4” circuits: 0 to 1 V (When ignition is “ON”)
Is check result OK?
Go to Step 9.
Repair or replace defective part.
CKP sensor and CMP sensor check
Check CKP sensor and CMP sensor.
CKP sensor:
CMP sensor:
Is check result OK?
Replace ECM and recheck ignition spark.
Replace CKP sensor or CMP sensor.
CKP sensor:
CMP sensor:

---

## AENLSB0A1814002 - Ignition Spark Test
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1814002.xml
Tree scopes: bookmarks: 1 - Engine > 1H - Ignition System > Diagnostic Information and Procedures > K14C
Outgoing references:
- AENLSB0A1716003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1716003.xml | Fuel Pressure Relief Procedure:K14C

Content:
Ignition Spark Test
If this test is performed when the injectors are activated, a spark from a plug may ignite fuel vapor coming out of the spark plug holes during the test, causing a fire or explosion.
Inactivated the injectors before performing this test.
Relieve fuel pressure referring to
Fuel Pressure Relief Procedure:K14C
and leave the fuel pump relay removed.
Remove spark plugs.
Check spark plugs.
Connect ignition coil connector to ignition coil assembly (1).
Connect spark plug (2) to ignition coil assembly, and ground spark plug.
Crank engine and check if each spark plug sparks.
If no spark is emitted, check the related parts.
Install spark plugs.
Install fuel pump relay.
Install individual circuit fuse box No.1 cover.

---

## AENLSB0A1816001 - Spark Plug Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1816001.xml
Tree scopes: bookmarks: 1 - Engine > 1H - Ignition System > Repair Instructions > K14C
Outgoing references:
- AENLSB0A1816002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1816002.xml | Spark Plug Inspection:K14C

Content:
Spark Plug Removal and Installation
Removal
Remove ignition coil assemblies.
Remove spark plugs.
Installation
Spark Plug Inspection:K14C
Install spark plugs and tighten them to specified torque.
Spark plug
18
1.8
13.5
Install ignition coil assemblies.

---

## AENLSB0A1816002 - Spark Plug Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1816002.xml
Tree scopes: bookmarks: 1 - Engine > 1H - Ignition System > Repair Instructions > K14C
Outgoing references:
- AENLSB0A1816001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1816001.xml | Spark Plug Removal and Installation:K14C

Content:
Spark Plug Inspection
Spark Plug Removal and Installation:K14C
The iridium spark plug has a slender center electrode that is made of a material sensitive to mechanical forces. It may be damaged if handled carelessly.
Do not touch the center electrode of an iridium spark plug. Avoid cleaning it or adjusting its electrode gap.
Check spark plug for:
Electrode wear
Carbon deposits
Insulator damage
Spark plug air gap
Check spark plug air gap “a” using special tool.
If out of specification of the air gap or any other abnormality is found with iridium spark plug, replace it with new plug.
(A)
09930–77410
Spark plug air gap
“a”
0.7 to 0.8 mm (0.028 to 0.031 in.)
Spark plug type
NGK
ILZKR7D8 (Iridium)

---

## AENLSB0A1816003 - Ignition Coil Assembly Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1816003.xml
Tree scopes: bookmarks: 1 - Engine > 1H - Ignition System > Repair Instructions > K14C
Outgoing references:
- AENLSB0A1816004 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1816004.xml | Ignition Coil Assembly Inspection:K14C

Content:
Ignition Coil Assembly Removal and Installation
Removal
Disconnect negative (–) cable at battery.
Remove air cleaner assembly.
Disconnect ignition coil connectors.
Remove ignition coil bolts (1) and then pull out ignition coil assemblies (2).
Installation
Ignition Coil Assembly Inspection:K14C
Reverse removal procedure.

---

## AENLSB0A1816004 - Ignition Coil Assembly Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1816004.xml
Tree scopes: bookmarks: 1 - Engine > 1H - Ignition System > Repair Instructions > K14C
Outgoing references:
- AENLSB0A1816003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1816003.xml | Ignition Coil Assembly Removal and Installation:K14C

Content:
Ignition Coil Assembly Inspection
Ignition Coil Assembly Removal and Installation:K14C
Check ignition coil assembly for the following points.
Damage
Deterioration
Corrosion on terminals
If check result is not OK, replace ignition coil assembly.

---

## AENLSB0A1816005 - Ignition Timing Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1816005.xml
Tree scopes: bookmarks: 1 - Engine > 1H - Ignition System > Repair Instructions > K14C
Outgoing references:
- AENLSB0A1813001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1813001.xml | Ignition System Component Location:K14C
- AENLSB0A1116001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1116001.xml | Idle Speed Inspection:K14C

Content:
Ignition Timing Inspection
For identification of each cylinder, refer to
Ignition System Component Location:K14C
.
Connect SUZUKI scan tool to DLC (1) with ignition “OFF”.
(A)
SUZUKI scan tool (Suzuki SDT-II)
Start engine and warm it up to normal operating temperature.
Check that all electrical loads except ignition system are switched off.
Check that idle speed is within specification referring to
Idle Speed Inspection:K14C
.
Remove engine cover.
Grip ignition coil No.1 harness (green) (3) by probe of timing light (1) directing arrow (2) at ignition coil side, and check that ignition timing is within specification.
(A)
09930–76311
Fix ignition timing using “Fixed Spark” function in “Active Test” mode on scan tool.
Initial ignition timing
Fixed with SUZUKI scan tool
–5 to 15° BTDC (at specified idle speed)
Ignition order
1 – 3 – 4 – 2
4.
0°
5.
10°
If check result is not as specified, check the following points.
CKP sensor:
CKP sensor plate:
ECM and its circuit:
CMP sensor:
CMP sensor rotor teeth of camshaft:
Crankshaft:
Crankshaft pulley key
After checking initial ignition timing, release ignition timing fixation using scan tool.
With engine idling (throttle opening at default position and vehicle stopped), check that ignition timing is about –5 to 15° BTDC (Constant variation within a few degrees from –5 to 15° BTDC indicates no abnormality but proves operation of ignition timing control system.) Also, check that increasing engine speed advances ignition timing.
If check result is not as specified, check the following points.
ECM and its circuit:
TP sensor:
APP sensor:
Install engine cover.

---

## AENLSB0A1817001 - Tightening Torque Specifications
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1817001.xml
Tree scopes: bookmarks: 1 - Engine > 1H - Ignition System > Specifications > K14C
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
Spark plug
18
1.8
13.5
Reference:
For the tightening torques of fasteners not specified in this page, refer to:
Fasteners Information

---

## AENLSB0A1818001 - Special Tool
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1818001.xml
Tree scopes: bookmarks: 1 - Engine > 1H - Ignition System > Special Tools and Equipment > K14C
Outgoing references: none

Content:
Special Tool
09930–76311
09930–77410
Timing light
Plug gap gauge
SUZUKI scan tool (Suzuki SDT-II)
—

---

## AENLSB0A1821001 - Ignition System Construction
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1821001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Ignition System Construction
The ignition system is of an electronic ignition type which consists of the following components.
ECM
It monitors the engine and vehicle conditions through the signals from the sensors, determines the most suitable ignition timing and duration and sends a signal to the ignition coil assembly.
Ignition coil assembly
One ignition coil assembly is provided for each cylinder.
The ignition coil assembly turns on and off the current to the primary coil according to the signal from ECM. When the current flow to the primary coil is turned off, a high voltage is induced in the secondary coil.
Spark plugs
CMP sensor and CKP sensor
Using signals from these sensors, ECM identifies the specific cylinder whose piston is in the compression stroke, detects the crank angle and adjusts initial ignition timing automatically.
TP sensor, ECT sensor, MAP sensor, MAF sensor with IAT sensor -1, knock sensor and other sensors / switches
Using signals from these sensors / switches, the ECM corrects the initial ignition timing and sets the optimum timing according to the engine conditions.

---

## AENLSB0A1822001 - Ignition System Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1822001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Ignition System Circuit Diagram
[A]:
ECM connector (View: [a])
3.
Ignition coil assembly No.3
9.
Intake CMP sensor
A1 – A4:
Ignition coil assembly power supply circuits
4.
Ignition coil assembly No.4
10.
Exhaust CMP sensor
B1 – B4:
Ignition coil assembly drive circuits
5.
Spark plug No.1
11.
CKP sensor
C1 – C4:
Ignition coil assembly ground circuits
6.
Spark plug No.2
12.
ECM
1.
Ignition coil assembly No.1
7.
Spark plug No.3
2.
Ignition coil assembly No.2
8.
Spark plug No.4

---

## AENLSB0A1823001 - Ignition System Component Location
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1823001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Ignition System Component Location
1.
ECM
4.
Ignition coil assembly No.2
7.
Intake CMP sensor
2.
CKP sensor
5.
Ignition coil assembly No.3
8.
Exhaust CMP sensor
3.
Ignition coil assembly No.1
6.
Ignition coil assembly No.4

---

## AENLSB0A1824001 - Ignition System Check
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1824001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Ignition System Check
Circuit Diagram
[A]:
ECM connector (View: [a])
3.
Ignition coil assembly No.3
9.
Intake CMP sensor
A1 – A4:
Ignition coil assembly power supply circuits
4.
Ignition coil assembly No.4
10.
Exhaust CMP sensor
B1 – B4:
Ignition coil assembly drive circuits
5.
Spark plug No.1
11.
CKP sensor
C1 – C4:
Ignition coil assembly ground circuits
6.
Spark plug No.2
12.
ECM
1.
Ignition coil assembly No.1
7.
Spark plug No.3
2.
Ignition coil assembly No.2
8.
Spark plug No.4
Troubleshooting
Was “Engine and Emission Control System Check” performed?
Go to Step 2.
Go to
.
Ignition spark test 1
Perform ignition spark test.
Is test result OK?
Go to Step 3.
Go to Step 4.
Ignition timing check
Check ignition timing.
Is check result OK?
Ignition system is in good condition.
Repair or replace defective part.
Confirmation of malfunctioning cylinder
Check cylinder(s) that failed in ignition spark test.
Did all cylinders fail in ignition spark test?
Go to Step 7.
Go to Step 5.
Ignition spark test 2
Replace spark plug of each malfunctioning cylinder with normal cylinder’s one.
Perform ignition spark test.
Is test result OK?
Replace spark plug.
Go to Step 6.
Ignition spark test 3
Replace ignition coil of each malfunctioning cylinder with normal cylinder’s one.
Perform ignition spark test.
Is test result OK?
Replace ignition coil.
Go to Step 7.
Ignition coil assembly power supply and ground circuit check
Set ignition “OFF”.
Disconnect “C01” and “E01” connectors from ECM, and all connectors from ignition coil assemblies.
Check for proper terminal connections to “C01” and “E01” connectors and ignition coil connectors.
If connections are OK, check power supply (“A1”, “A2”, “A3” and “A4”) and ground (“C1”, “C2”, “C3” and “C4”) circuits of each ignition coil assembly for open, short and poor connection.
Is check result OK?
Go to Step 8.
Repair or replace defective part.
Ignition coil assembly drive circuit check
Set ignition “OFF”, check the following points.
Resistance of “B1”, “B2”, “B3” and “B4” circuits: less than 1 Ω
Resistance between each of “B1”, “B2”, “B3” and “B4” circuits and ground: infinity
Resistance between “B1” circuit terminal and other terminal at ignition coil connector: infinity
Resistance between “B2” circuit terminal and other terminal at ignition coil connector: infinity
Resistance between “B3” circuit terminal and other terminal at ignition coil connector: infinity
Resistance between “B4” circuit terminal and other terminal at ignition coil connector: infinity
Voltage of “B1”, “B2”, “B3” and “B4” circuits: 0 to 1 V (When ignition is “ON”)
Is check result OK?
Go to Step 9.
Repair or replace defective part.
CKP sensor and CMP sensor check
Check CKP sensor and CMP sensor.
CKP sensor:
CMP sensor:
Is check result OK?
Replace ECM and recheck ignition spark.
Replace CKP sensor or CMP sensor.
CKP sensor:
CMP sensor:

---

## AENLSB0A1824002 - Ignition Spark Test
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1824002.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Ignition Spark Test
If this test is performed when the injectors are activated, a spark from a plug may ignite fuel vapor coming out of the spark plug holes during the test, causing a fire or explosion.
Inactivated the injectors before performing this test.
Relieve fuel pressure referring to
and leave the fuel pump relay removed.
Remove spark plugs.
Check spark plugs.
Connect ignition coil connector to ignition coil assembly (1).
Connect spark plug (2) to ignition coil assembly, and ground spark plug.
Crank engine and check if each spark plug sparks.
If no spark is emitted, check the related parts.
Install spark plugs.
Install fuel pump relay.
Install individual circuit fuse box No.1 cover.

---

## AENLSB0A1826001 - Spark Plug Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1826001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Spark Plug Removal and Installation
Removal
Remove ignition coil assemblies.
Remove spark plugs.
Installation
Install spark plugs and tighten them to specified torque.
Spark plug
18
1.8
13.5
Install ignition coil assemblies.

---

## AENLSB0A1826002 - Spark Plug Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1826002.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Spark Plug Inspection
The iridium spark plug has a slender center electrode that is made of a material sensitive to mechanical forces. It may be damaged if handled carelessly.
Do not touch the center electrode of an iridium spark plug. Avoid cleaning it or adjusting its electrode gap.
Check spark plug for:
Electrode wear
Carbon deposits
Insulator damage
Spark plug air gap
Check spark plug air gap “a” using special tool.
If out of specification of the air gap or any other abnormality is found with iridium spark plug, replace it with new plug.
(A)
09930–77410
Spark plug air gap
“a”
0.7 to 0.8 mm (0.028 to 0.031 in.)
Spark plug type
NGK
ILZKR7N8S (Iridium)

---

## AENLSB0A1826003 - Ignition Coil Assembly Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1826003.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Ignition Coil Assembly Removal and Installation
Removal
Disconnect negative (–) cable at battery.
Remove air cleaner assembly.
Disconnect ignition coil connectors.
Remove ignition coil bolts (1) and then pull out ignition coil assemblies (2).
Installation
Reverse removal procedure noting the following point.
Tighten ignition coil bolts to specified torque.
Ignition coil bolt
11
1.1
8.5

---

## AENLSB0A1826004 - Ignition Coil Assembly Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1826004.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Ignition Coil Assembly Inspection
Check ignition coil assembly for the following points.
Damage
Deterioration
Corrosion on terminals
If check result is not OK, replace ignition coil assembly.

---

## AENLSB0A1826005 - Ignition Timing Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1826005.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Ignition Timing Inspection
For identification of each cylinder, refer to
.
Connect SUZUKI scan tool to DLC (1) with ignition “OFF”.
(A)
SUZUKI scan tool (Suzuki SDT-II)
Start engine and warm it up to normal operating temperature.
Check that all electrical loads except ignition system are switched off.
Check that idle speed is within specification referring to
.
Select “Ignition Advance” under “Data List” mode on scan tool.
With engine idling (throttle opening at default position and vehicle stopped), check that ignition timing is within specification. (Constant variation within a few degrees from –10 to 10° BTDC indicates no abnormality but proves operation of ignition timing control system.) Also, check that increasing engine speed advances ignition timing.
If check result is not as specified, check the following points.
Initial ignition timing
–10 to 10° BTDC (at specified idle speed)
Ignition order
1 – 3 – 4 – 2
CKP sensor:
Sensor plate:
CMP sensor:
Signal rotor teeth of camshaft:
ECM and its circuit:
TP sensor:
APP sensor:
Crankshaft:
Crankshaft pulley key

---

## AENLSB0A1827001 - Tightening Torque Specifications
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1827001.xml
Tree scopes: unscoped
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
Spark plug
18
1.8
13.5
Ignition coil bolt
11
1.1
8.5
Reference:
For the tightening torques of fasteners not specified in this page, refer to:
Fasteners Information

---

## AENLSB0A1828001 - Special Tool
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1828001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Special Tool
09930–77410
SUZUKI scan tool (Suzuki SDT-II)
Plug gap gauge
—

---

## AENLSB0A1911001 - Cranking System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1911001.xml
Tree scopes: bookmarks: 1 - Engine > 1I - Starting System > General Description > K14C
Outgoing references:
- AENLSB0A1912001 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1912001.xml | Cranking System Circuit Diagram:K14C

Content:
Cranking System Description
Cranking Circuit
The cranking circuit consists of the battery, starting motor, starting motor control relay, BCM, engine switch, CPP No.1 switch (M/T model), TCM (A/T model) and related electrical wiring.
Starting Motor Circuit
In the circuit shown in
Cranking System Circuit Diagram:K14C
, the coil of the magnetic switch in starting motor is energized when the engine starts. The resulting movement of the plunger and pinion drive lever causes the pinion to engage with the flywheel (M/T model) or drive plate (A/T model), while closing the contacts of the magnetic switch. This causes the starting motor to rotate to crank the engine.
When the engine starts, the pinion overrunning clutch protects the armature from excessive speed until the switch is opened, at which time the return spring causes the pinion to disengage.

---

## AENLSB0A1912001 - Cranking System Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1912001.xml
Tree scopes: bookmarks: 1 - Engine > 1I - Starting System > Schematic and Routing Diagram > K14C
Outgoing references: none

Content:
Cranking System Circuit Diagram
[A]:
ECM connector (View: [a])
3.
Starting motor
8.
“ST SIG2” fuse
[B]:
M/T model
4.
“ST” fuse
9.
ECM
[C]:
A/T model
5.
BCM
10.
CPP No.1 switch
1.
Battery
6.
Engine switch
11.
TCM
2.
Main fuse box
7.
Starting motor control relay

---

## AENLSB0A1914001 - Cranking System Symptom Diagnosis
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1914001.xml
Tree scopes: bookmarks: 1 - Engine > 1I - Starting System > Diagnostic Information and Procedures > K14C
Outgoing references: none

Content:
Cranking System Symptom Diagnosis
Possible symptoms of starting system trouble are as follows:
Starting motor does not run (or runs slowly).
Starting motor runs but fails to crank engine.
Abnormal noise is heard.
Proper diagnosis must be made to determine in which of the battery, wiring harness, starting motor (including magnetic switch) and engine the cause of each trouble lies.
Before removing the starting motor, check the following items to identify the most possible cause of trouble.
Condition of trouble
Tightness of battery terminals (including ground cable connection on engine) and starting motor terminals
Discharge of battery
Mounting of starting motor
Starting motor not running (No operating sound of magnetic switch)
Malfunction of CPP No.1 switch (M/T model)
Check CPP No.1 switch.
Malfunction of TCM (A/T model)
Check TCM.
Battery voltage is too low
Check battery.
Impossible charging due to deteriorated battery
Replace battery.
Poor battery terminal connection
Check terminal connection or replace battery.
Poor ground cable connection
Tighten ground cable.
Blown fuse
Replace fuse and check its circuit.
Faulty magnetic switch
Check magnetic switch.
Poor magnetic switch lead wire connector connection
Check connector connection.
Open circuit in pull-in coil
Check pull-in coil circuit.
Defective brushes and/or brush springs
Check brushes and brush springs.
Poor sliding of plunger and/or pinion
Check plunger and pinion.
Faulty starting motor control relay
Check starting motor control relay.
Faulty keyless push start system
Check keyless push start system.
Starting motor not running (Operating sound of magnetic switch heard)
Battery voltage is too low
Check battery.
Impossible charging due to deteriorated battery
Replace battery.
Poor battery terminal connection
Check terminal connection or replace battery.
Poor ground terminal connection
Tighten ground cable.
Faulty magnetic switch
Check magnetic switch.
Defective brushes and/or brush springs
Check brushes and brush springs.
Defective brush holder
Check brush holder.
Burnt commutator
Check commutator.
Short circuit between commutator and armature
Check commutator.
Poor starting motor cable connection
Check starting motor cable connection.
Open circuit between battery and magnetic switch
Repair circuit.
Obstructed crankshaft rotation
Repair engine assembly.
Starting motor running but too slow (small torque)
Faulty magnetic switch
Check magnetic switch.
Low battery voltage
Check battery.
Impossible charging due to deteriorated battery
Replace battery.
Poor battery terminal connection
Check terminal connection or replace battery.
Short circuit between commutator and armature
Check commutator.
Burnt commutator
Check commutator.
Defective brushes and/or brush springs
Check brushes and brush springs.
Defective brush holder
Check brush holder.
Defective rear bracket bushing
Check rear bracket bushing.
Starting motor running, but not cranking engine
Worn pinion tip
Replace overrunning clutch.
Poor sliding of overrunning clutch
Check overrunning clutch.
Slipping overrunning clutch
Replace overrunning clutch.
Worn teeth of ring gear
Replace flywheel (M/T model) or drive plate (A/T model).
Noise
Abnormally worn bushing
Replace bushing.
Worn teeth of pinion
Replace overrunning clutch.
Worn teeth of ring gear
Replace flywheel (M/T model) or drive plate (A/T model).

---

## AENLSB0A1914A01 - Starting motor not running (No operating sound of magnetic switch)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1914A01.xml
Tree scopes: symptoms: 1 - Engine > Starting System > K14C > Diagnostic Information and Procedures
Outgoing references: none

Content:
Starting motor not running (No operating sound of magnetic switch)
Possible symptoms of starting system trouble are as follows:
Starting motor does not run (or runs slowly).
Starting motor runs but fails to crank engine.
Abnormal noise is heard.
Proper diagnosis must be made to determine in which of the battery, wiring harness, starting motor (including magnetic switch) and engine the cause of each trouble lies.
Before removing the starting motor, check the following items to identify the most possible cause of trouble.
Condition of trouble
Tightness of battery terminals (including ground cable connection on engine) and starting motor terminals
Discharge of battery
Mounting of starting motor
Starting motor not running (No operating sound of magnetic switch)
Malfunction of CPP No.1 switch (M/T model)
Check CPP No.1 switch.
Malfunction of TCM (A/T model)
Check TCM.
Battery voltage is too low
Check battery.
Impossible charging due to deteriorated battery
Replace battery.
Poor battery terminal connection
Check terminal connection or replace battery.
Poor ground cable connection
Tighten ground cable.
Blown fuse
Replace fuse and check its circuit.
Faulty magnetic switch
Check magnetic switch.
Poor magnetic switch lead wire connector connection
Check connector connection.
Open circuit in pull-in coil
Check pull-in coil circuit.
Defective brushes and/or brush springs
Check brushes and brush springs.
Poor sliding of plunger and/or pinion
Check plunger and pinion.
Faulty starting motor control relay
Check starting motor control relay.
Faulty keyless push start system
Check keyless push start system.

---

## AENLSB0A1914A02 - Starting motor not running (Operating sound of magnetic switch heard)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1914A02.xml
Tree scopes: symptoms: 1 - Engine > Starting System > K14C > Diagnostic Information and Procedures
Outgoing references: none

Content:
Starting motor not running (Operating sound of magnetic switch heard)
Possible symptoms of starting system trouble are as follows:
Starting motor does not run (or runs slowly).
Starting motor runs but fails to crank engine.
Abnormal noise is heard.
Proper diagnosis must be made to determine in which of the battery, wiring harness, starting motor (including magnetic switch) and engine the cause of each trouble lies.
Before removing the starting motor, check the following items to identify the most possible cause of trouble.
Condition of trouble
Tightness of battery terminals (including ground cable connection on engine) and starting motor terminals
Discharge of battery
Mounting of starting motor
Starting motor not running (Operating sound of magnetic switch heard)
Battery voltage is too low
Check battery.
Impossible charging due to deteriorated battery
Replace battery.
Poor battery terminal connection
Check terminal connection or replace battery.
Poor ground terminal connection
Tighten ground cable.
Faulty magnetic switch
Check magnetic switch.
Defective brushes and/or brush springs
Check brushes and brush springs.
Defective brush holder
Check brush holder.
Burnt commutator
Check commutator.
Short circuit between commutator and armature
Check commutator.
Poor starting motor cable connection
Check starting motor cable connection.
Open circuit between battery and magnetic switch
Repair circuit.
Obstructed crankshaft rotation
Repair engine assembly.

---

## AENLSB0A1914A03 - Starting motor running but too slow (small torque)
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1914A03.xml
Tree scopes: symptoms: 1 - Engine > Starting System > K14C > Diagnostic Information and Procedures
Outgoing references: none

Content:
Starting motor running but too slow (small torque)
Possible symptoms of starting system trouble are as follows:
Starting motor does not run (or runs slowly).
Starting motor runs but fails to crank engine.
Abnormal noise is heard.
Proper diagnosis must be made to determine in which of the battery, wiring harness, starting motor (including magnetic switch) and engine the cause of each trouble lies.
Before removing the starting motor, check the following items to identify the most possible cause of trouble.
Condition of trouble
Tightness of battery terminals (including ground cable connection on engine) and starting motor terminals
Discharge of battery
Mounting of starting motor
Starting motor running but too slow (small torque)
Faulty magnetic switch
Check magnetic switch.
Low battery voltage
Check battery.
Impossible charging due to deteriorated battery
Replace battery.
Poor battery terminal connection
Check terminal connection or replace battery.
Short circuit between commutator and armature
Check commutator.
Burnt commutator
Check commutator.
Defective brushes and/or brush springs
Check brushes and brush springs.
Defective brush holder
Check brush holder.
Defective rear bracket bushing
Check rear bracket bushing.

---

## AENLSB0A1914A04 - Starting motor running, but not cranking engine
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1914A04.xml
Tree scopes: symptoms: 1 - Engine > Starting System > K14C > Diagnostic Information and Procedures
Outgoing references: none

Content:
Starting motor running, but not cranking engine
Possible symptoms of starting system trouble are as follows:
Starting motor does not run (or runs slowly).
Starting motor runs but fails to crank engine.
Abnormal noise is heard.
Proper diagnosis must be made to determine in which of the battery, wiring harness, starting motor (including magnetic switch) and engine the cause of each trouble lies.
Before removing the starting motor, check the following items to identify the most possible cause of trouble.
Condition of trouble
Tightness of battery terminals (including ground cable connection on engine) and starting motor terminals
Discharge of battery
Mounting of starting motor
Starting motor running, but not cranking engine
Worn pinion tip
Replace overrunning clutch.
Poor sliding of overrunning clutch
Check overrunning clutch.
Slipping overrunning clutch
Replace overrunning clutch.
Worn teeth of ring gear
Replace flywheel (M/T model) or drive plate (A/T model).

---

## AENLSB0A1914A05 - Noise
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1914A05.xml
Tree scopes: symptoms: 1 - Engine > Starting System > K14C > Diagnostic Information and Procedures
Outgoing references: none

Content:
Noise
Possible symptoms of starting system trouble are as follows:
Starting motor does not run (or runs slowly).
Starting motor runs but fails to crank engine.
Abnormal noise is heard.
Proper diagnosis must be made to determine in which of the battery, wiring harness, starting motor (including magnetic switch) and engine the cause of each trouble lies.
Before removing the starting motor, check the following items to identify the most possible cause of trouble.
Condition of trouble
Tightness of battery terminals (including ground cable connection on engine) and starting motor terminals
Discharge of battery
Mounting of starting motor
Noise
Abnormally worn bushing
Replace bushing.
Worn teeth of pinion
Replace overrunning clutch.
Worn teeth of ring gear
Replace flywheel (M/T model) or drive plate (A/T model).

---

## AENLSB0A1916001 - Starting Motor Control Relay Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1916001.xml
Tree scopes: bookmarks: 1 - Engine > 1I - Starting System > Repair Instructions > K14C
Outgoing references:
- AENLSB0AA206009 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0AA206009.xml | Control Relay Inspection

Content:
Starting Motor Control Relay Inspection
Refer to
Control Relay Inspection
.

---

## AENLSB0A1916002 - Starting Motor Removal and Installation
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1916002.xml
Tree scopes: bookmarks: 1 - Engine > 1I - Starting System > Repair Instructions > K14C
Outgoing references:
- AENLSB0A1916007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1916007.xml | Starting Motor Inspection:K14C

Content:
Starting Motor Removal and Installation
Removal
Remove battery and battery tray.
For A/T model, disconnect TCM connector (1), and harness clamps (2).
For A/T model, disconnect select cable from transaxle.
Remove starting motor mounting bolt (upper side) (1).
Hoist vehicle and remove engine undercover.
Disconnect magnetic switch lead wire (2) and starting motor cable (3) from starting motor.
Remove starting motor mounting bolt (lower side) (4).
Remove starting motor (5).
Installation
Starting Motor Inspection:K14C
Reverse removal procedure noting the following point.
Tighten starting motor cable nut (1) to specified torque.
Starting motor cable nut
a
11
1.1
8.5

---

## AENLSB0A1916003 - Starting Motor Components
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1916003.xml
Tree scopes: bookmarks: 1 - Engine > 1I - Starting System > Repair Instructions > K14C
Outgoing references: none

Content:
Starting Motor Components
1.
Armature housing
8.
Internal gear
15.
Bushing
2.
Bushing
9.
Planetary carrier shaft
:
10 N·m (1.0 kgf-m, 7.5 lbf-ft)
3.
Snap ring
10.
Planetary gear
:
6.0 N·m (0.61 kgf-m, 4.5 lbf-ft)
4.
Pinion stop ring
11.
Yoke
:
3.5 N·m (0.36 kgf-m, 2.5 lbf-ft)
5.
Overrunning clutch
12.
Armature
:
Apply grease 99000-25480 to sliding surface of each part.
6.
Drive lever assembly
13.
Brush assembly
:
Do not reuse.
7.
Magnetic switch
14.
End housing

---

## AENLSB0A1916005 - Starting Motor Disassembly and Reassembly
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1916005.xml
Tree scopes: bookmarks: 1 - Engine > 1I - Starting System > Repair Instructions > K14C
Outgoing references:
- AENLSB0A1916002 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1916002.xml | Starting Motor Removal and Installation:K14C
- AENLSB0A1916003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1916003.xml | Starting Motor Components:K14C
- AENLSB0A1916007 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1916007.xml | Starting Motor Inspection:K14C

Content:
Starting Motor Disassembly and Reassembly
Starting Motor Removal and Installation:K14C
Starting Motor Components:K14C
Disassembly
Before disassembly, draw matchmarks (1) and (2) as shown in figure to assure proper alignment when reassembled.
Remove nut (1) and disconnect lead wire (2) from magnetic switch (3).
Remove screws (4) and pull out magnetic switch (1) from starting motor assembly.
Remove spring (2) and plunger (3) from magnetic switch body.
Remove bolts (1) and separate yoke from armature housing (2).
Remove grommet (2) and planetary gears (1).
Remove seal rubber (1) and plate (2).
Remove shaft assembly (1) together with drive lever (2).
With pinion stop ring (3) moved toward overrunning clutch (4) side (in arrow direction), remove snap ring (2) using snap ring pliers (5).
Remove pinion stop ring, overrunning clutch and internal gear (1) from gear shaft.
Remove end housing (1) and remove brush assembly (2) from yoke (3).
Remove armature (1) from yoke (2).
Remove brushes (1) and brush springs (2).
Reassembly
Starting Motor Inspection:K14C
Install brush springs (2) and brushes (1) to brush holder (3).
Install armature (2) to yoke.
Install brush assembly (1) to armature while pushing 4 brushes (3) outward.
Install end housing (1) to brush holder and tighten brush holder screws (2) to specified torque.
Brush holder screw
a
3.5
0.36
2.5
Apply grease to spline of gear shaft (1) and teeth of internal gear (2).
“A”
Grease
99000–25480
ECSTAR Grease A
Install internal gear and overrunning clutch (1) to gear shaft (4) using new snap ring (3) and new pinion stop ring (2).
Install pinion stop ring in the direction and position as shown in figure.
Apply grease to drive lever (2) and insert shaft assembly (1) into armature housing with drive lever positioned as shown in figure.
“A”
Grease
99000–25480
ECSTAR Grease A
With armature housing bolt holes (3) and cutouts in grommet aligned, install grommet (1) in armature housing.
Install plate (5) and seal rubber (4) to armature housing.
Apply grease to planetary gears (2) and install planetary gears to gear shaft.
“A”
Grease
99000–25480
ECSTAR Grease A
Install yoke, armature, brush assembly and end housing (4) to armature housing (2) while aligning matchmarks (3) drawn before disassembly.
Tighten end housing bolts (1) to specified torque.
End housing bolt
a
6.0
0.61
4.5
Apply grease to plunger.
“A”
Grease
99000–25480
ECSTAR Grease A
Install magnetic switch (1), spring (2) and plunger (3) to armature housing (5) while aligning matchmarks drawn before removal and fitting plunger end into drive lever end.
Tighten screws (4) to specified torque.
Magnetic switch screw
a
6.0
0.61
4.5
Connect lead wire (1) to terminal “M” (2) and tighten lead wire nut to specified torque.
Lead wire nut
a
10
1.0
7.5
Check magnetic switch for operation.

---

## AENLSB0A1916007 - Starting Motor Inspection
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1916007.xml
Tree scopes: bookmarks: 1 - Engine > 1I - Starting System > Repair Instructions > K14C
Outgoing references:
- AENLSB0A1916005 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1916005.xml | Starting Motor Disassembly and Reassembly:K14C

Content:
Starting Motor Inspection
Starting Motor Disassembly and Reassembly:K14C
Starting Motor Operation Check
Sparks resulting from a short circuit between the positive (+) and negative (–) terminals during connections to the battery may cause burns.
Be careful not to short circuit the positive (+) and negative (–) cables, and connect them only to the correct terminals.
If battery power is applied too long in any of the following tests, coil of the magnetic switch may burn.
Each test must be completed within 3 – 5 seconds to avoid burning of the coil.
Perform pull-in test as follows.
Disconnect lead wire (3) from terminal “M” (2).
Connect battery to magnetic switch as shown in figure.
Check that pinion moves outward when battery current is applied to terminal “S” (1).
If pinion does not move, replace magnetic switch.
Perform hold-in test as follows.
From the state of Step 1) with plunger and pinion in “out” position, disconnect negative (–) lead from terminal “M”.
Check that plunger and pinion remain in “out” position.
If plunger and pinion return inward, replace magnetic switch.
Perform plunger and pinion return test as follows.
From the state of Step 2) with plunger and pinion in “out” position, disconnect negative (–) lead from starting motor body.
Check that plunger and pinion return inward.
If plunger and pinion do not return, replace magnetic switch.
Perform no-load performance test as follows.
Fix starting motor with vice or the like.
Connect thick wires to starting motor and set ammeter as shown in figure.
Connect terminal “S” (2) and terminal “B” (1) and check that starting motor rotates smoothly and steadily with pinion moving out.
Check that ammeter indicates specified current.
If check result is not as specified, repair or replace starting motor.
Specified current (No-load performance test)
95 A MAX. at 11 V
Plunger
Check plunger for wear. Replace magnetic switch, if defective.
Magnetic Switch
Check that plunger quickly returns to its original position when plunger is pushed in with a finger and released. If check result is not OK, replace magnetic switch.
Pull-in coil open circuit test
Check for continuity between magnetic switch “S” terminal (1) and “M” terminal (2). If there is no continuity, replace magnetic switch.
Hold-in coil open circuit test
Check for continuity between magnetic switch “S” terminal (1) and coil case. If there is no continuity, replace magnetic switch.
End Housing Bushing
Check end housing bushing for wear or damage. If check is not OK, replace defective parts with new ones.
Brush
Check brushes for wear.
Measure length of each brush. If length is less than the limit, replace brush assembly.
Brush length
Standard: 12.3 mm (0.48 in.)
Limit: 5.5 mm (0.22 in.)
After installing brushes into their holders, check that movement of brushes is smooth.
Spring
Check brush springs for wear, damage or other abnormal conditions. Replace brush assembly if defective.
Brush spring tension
Standard: 15.0 – 20.4 N (1.5 – 2.1 kgf, 3.4 – 4.6 lbf)
Limit: 2.75 N (0.28 kgf, 0.62 lbf)
Brush Holder
Check brush holder for brush movement problems, distortion, and dirt on sliding surface.
Clean or correct brush holder if defective.
Check for continuity between insulated brush (positive (+) side) and grounded brush (negative (–) side).
If there is continuity, replace defective parts.
Armature
Check commutator for dirt or burn. Correct commutator with sandpaper or lathe, if defective.
1.
Sandpaper of #300 – 400
Check commutator for uneven wear with armature (1) supported on V-blocks (2) using dial gauge (4). If dial gauge deflection exceeds the limit, repair commutator or replace armature.
Commutator out of round
Standard: 0.05 mm (0.002 in.) or less
Limit: 0.1 mm (0.004 in.)
3.
Magnetic stand
Check commutator for wear and measure diameter of commutator. If diameter of commutator is lower than the limit, replace armature.
Commutator outside diameter
Standard: 29.4 mm (1.16 in.)
Limit: 28.8 mm (1.13 in.)
Check commutator (1) for insulator (2) depth. Correct insulator depth if it is smaller than limit.
Commutator insulator depth “a”
Standard: 0.5 mm (0.02 in.)
Limit: 0.2 mm (0.008 in.)
[A]:
Correct
[B]:
Incorrect
Check insulation between commutator and armature core. If there is continuity, replace armature.
Check for continuity between segments. If there is no continuity at any test point, replace armature.
Gear
Check internal gear and planetary gears for wear, damage or other abnormal conditions. Replace gear set if defective.
Pinion and Overrunning Clutch
Check pinion for wear, damage or other abnormal conditions.
Check that clutch locks when turned in normal rotation direction and rotates freely when turned in reverse direction. Replace pinion and overrunning clutch if defective.
Check spline teeth for wear or damage. If check result is not OK, replace pinion and overrunning clutch.
Check pinion for smooth movement.
Armature Housing Bushing or Needle Bearing
Check bushing or needle bearing for wear and damage. If check is not OK, replace defective parts.

---

## AENLSB0A1917001 - Cranking System Specifications
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1917001.xml
Tree scopes: bookmarks: 1 - Engine > 1I - Starting System > Specifications > K14C
Outgoing references: none

Content:
Cranking System Specifications
Voltage
12 V
Output
0.9 kW
Rating
30 seconds
Direction of rotation
Clockwise as viewed from pinion side
Number of pinion teeth
10
Performance
Voltage
Current
Torque
Revolution speed
At around 20 °C (68 °F)
No-load characteristic
11 V
95 A MAX
—
3,000 rpm MIN
Loaded characteristic
7.5 V
300 A
7.3 N·m (0.74 kgf-m, 5.5 lbf-ft) MIN
940 rpm MIN
Locked characteristic
4 V
640 A MAX
13 N·m (1.3 kgf-m, 9.5 lbf-ft) MIN
—
Magnetic switch operating voltage
8 volts MAX

---

## AENLSB0A1917002 - Tightening Torque Specifications
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1917002.xml
Tree scopes: bookmarks: 1 - Engine > 1I - Starting System > Specifications > K14C
Outgoing references:
- AENLSB0A1916003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1916003.xml | Starting Motor Components:K14C
- AENLSB0A0101006 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0101006.xml | Fasteners Information

Content:
Tightening Torque Specifications
Fastening part
Tightening torque
Note
N·m
kgf-m
lbf-ft
Starting motor cable nut
11
1.1
8.5
Brush holder screw
3.5
0.36
2.5
End housing bolt
6.0
0.61
4.5
Magnetic switch screw
6.0
0.61
4.5
Lead wire nut
10
1.0
7.5
Reference:
For the tightening torques of fasteners not specified in this page, refer to:
Starting Motor Components:K14C
Fasteners Information

---

## AENLSB0A1918001 - Recommended Service Material
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1918001.xml
Tree scopes: bookmarks: 1 - Engine > 1I - Starting System > Special Tools and Equipment > K14C
Outgoing references:
- AENLSB0A1916003 -> ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1916003.xml | Starting Motor Components:K14C

Content:
Recommended Service Material
Material
SUZUKI recommended product or Specification
Note
Grease
ECSTAR Grease A
P/No.: 99000–25480
Required service material(s) is also described in:
Starting Motor Components:K14C

---

## AENLSB0A1921001 - Cranking System Description
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1921001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Cranking System Description
Cranking Circuit
The cranking circuit consists of the battery, starting motor, starting motor control relay, BCM, engine switch, CPP No.1 switch and related electrical wiring.
Starting Motor Circuit
In the circuit shown in
, the coil of the magnetic switch in starting motor is energized when the engine starts. The resulting movement of the plunger and pinion drive lever causes the pinion to engage with the flywheel, while closing the contacts of the magnetic switch. This causes the starting motor to rotate to crank the engine.
When the engine starts, the pinion overrunning clutch protects the armature from excessive speed until the switch is opened, at which time the return spring causes the pinion to disengage.

---

## AENLSB0A1922001 - Cranking System Circuit Diagram
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1922001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Cranking System Circuit Diagram
[A]:
ECM connector (View: [a])
4.
“ST” fuse
8.
“ST SIG2” fuse
1.
Battery
5.
BCM
9.
ECM
2.
Main fuse box
6.
Engine switch
10.
CPP No.1 switch
3.
Starting motor
7.
Starting motor control relay

---

## AENLSB0A1924001 - Cranking System Symptom Diagnosis
Path: ./source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A1924001.xml
Tree scopes: unscoped
Outgoing references: none

Content:
Cranking System Symptom Diagnosis
Possible symptoms of starting system trouble are as follows:
Starting motor does not run (or runs slowly).
Starting motor runs but fails to crank engine.
Abnormal noise is heard.
Starting motor does not stop.
Proper diagnosis must be made to determine in which of the battery, wiring harness, starting motor (including magnetic switch) and engine the cause of each trouble lies.
Before removing the starting motor, check the following items to identify the most possible cause of trouble.
Condition of trouble
Tightness of battery terminals (including ground cable connection on engine) and starting motor terminals
Discharge of battery
Mounting of starting motor
Starting motor not running (No operating sound of magnetic switch)
Malfunction of CPP No.1 switch (if equipped)
Check CPP No.1 switch.
Battery voltage is too low
Check battery.
Impossible charging due to deteriorated battery
Replace battery.
Poor battery terminal connection
Check terminal connection or replace battery.
Poor ground cable connection
Tighten ground cable.
Blown fuse
Replace fuse and check its circuit.
Faulty magnetic switch
Check magnetic switch.
Poor magnetic switch lead wire connector connection
Check connector connection.
Open circuit in pull-in coil
Check pull-in coil circuit.
Defective brushes and/or brush springs
Check brushes and brush springs.
Poor sliding of plunger and/or pinion
Check plunger and pinion.
Faulty starting motor control relay
Check starting motor control relay.
Faulty keyless push start system
Check keyless push start system.
Starting motor not running (Operating sound of magnetic switch heard)
Battery voltage is too low
Check battery.
Impossible charging due to deteriorated battery
Replace battery.
Poor battery terminal connection
Check terminal connection or replace battery.
Poor ground terminal connection
Tighten ground cable.
Faulty magnetic switch
Check magnetic switch.
Defective brushes and/or brush springs
Check brushes and brush springs.
Defective brush holder
Check brush holder.
Burnt commutator
Check commutator.
Short circuit between commutator and armature
Check commutator.
Poor starting motor cable connection
Check starting motor cable connection.
Open circuit between battery and magnetic switch
Repair circuit.
Obstructed crankshaft rotation
Repair engine assembly.
Starting motor running but too slow (small torque)
Faulty magnetic switch
Check magnetic switch.
Low battery voltage
Check battery.
Impossible charging due to deteriorated battery
Replace battery.
Poor battery terminal connection
Check terminal connection or replace battery.
Short circuit between commutator and armature
Check commutator.
Burnt commutator
Check commutator.
Defective brushes and/or brush springs
Check brushes and brush springs.
Defective brush holder
Check brush holder.
Defective rear bracket bushing
Check rear bracket bushing.
Starting motor running, but not cranking engine
Worn pinion tip
Replace overrunning clutch.
Poor sliding of overrunning clutch
Check overrunning clutch.
Slipping overrunning clutch
Replace overrunning clutch.
Worn teeth of ring gear
Replace flywheel.
Noise
Abnormally worn bushing
Replace bushing.
Worn teeth of pinion
Replace overrunning clutch.
Worn teeth of ring gear
Replace flywheel.
Starting motor does not stop (cranking sound is heard)
Poor return of magnetic switch (plunger)
Check magnetic switch.
Starting motor control relay stays on
Check starting motor control relay.
Short circuit between battery positive (+) cable and magnetic switch lead wire
Repair circuit.
Short circuit between battery positive (+) cable and starting motor control relay drive circuit
Repair circuit.
Starting motor does not stop (Free rotating sound is heard)
Welded contact point in magnetic switch
Replace magnetic switch.
Poor return of magnetic switch
Replace magnetic switch.

---
