import React from "react";
import { Viewer, Cesium3DTileset, Entity, EntityStaticDescription, BillboardGraphics} from "resium";
import {IonResource, Cartesian3} from "cesium";


function Maps() {

    let viewer;
    const handleReady = tileset => {
        if (viewer) {
            viewer.zoomTo(tileset);
        }
    };

    return (
        <Viewer ref={e => { viewer = e && e.cesiumElement; }}>
            <Cesium3DTileset url={IonResource.fromAssetId(69380)} onReady={handleReady} />
            {/**Add Deakin to the map as an entity*/}
            <Entity
                name="Deakin University"
                position={Cartesian3.fromDegrees(145.1154112021592, -37.847884846591946, 20)}
                >
                {/**Add Deakin logo to the map
                check: https://resium.darwineducation.com/components/BillboardGraphics*/}
                <BillboardGraphics image={'deakin.png'} scale={0.2} show={true}/>
                 {/**Add Description box to the entity*/}
                <EntityStaticDescription>
                    <img src="https://www.deakin.edu.au/__data/assets/image/0007/1146985/logo_deakin-rebrand-stacked.png"  alt="Deakin Logo" 
                    style={{width: 300, height: 70, float : 'top', marginLeft: 'auto', marginRight: 'auto'}}></img>
                    <h1> <a href="https://www.deakin.edu.au/"  title="Go Deakin Website" target="_blank" rel="noreferrer">Visit us to know more!</a></h1>
                    <p>Here you can fill a description</p>
                    <h2>About</h2>
                    <p>This is description. It can be described with React!</p>
                    <h2>Content Type</h2>  
                    <p>Drone video</p>                  
                </EntityStaticDescription>
            </Entity>
        </Viewer>
    );
    };

export default Maps;

// <Entity position={position} name="Khalid">
//                 <EntityDescription>
//                     <h1>Hello, world.</h1>
//                     <p>JSX is available here!</p>
//                 </EntityDescription>
//             </Entity>


// args => (
//     <Viewer full>
//       <Entity
//         {...args}
//         name="BillboardGraphics"
//         description="BillboardGraphics!!"
//         position={Cartesian3.fromDegrees(-40.0707383, 40.7117244, 100)}
//         selected>
//         <BillboardGraphics image={billboardImage} scale={0.05} />
//       </Entity>
//       <Entity
//         {...args}
//         name="BoxGraphics"
//         description="BoxGraphics!!"
//         position={Cartesian3.fromDegrees(0.0707383, 40.7117244, 100)}>
//         <BoxGraphics material={Color.RED} dimensions={new Cartesian3(400000.0, 300000.0, 500000.0)} />
//       </Entity>
//       <Entity
//         {...args}
//         name="CorridorGraphics"
//         description="CorridorGraphics!!"
//         position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
//         <CorridorGraphics
//           material={Color.YELLOW}
//           positions={Cartesian3.fromDegreesArray([-100.0, 40.0, -105.0, 40.0, -105.0, 35.0]) as any} // WORKAROUND
//           height={200000.0}
//           extrudedHeight={100000.0}
//           width={200000.0}
//           cornerType={CornerType.BEVELED}
//           outline // height or extrudedHeight must be set for outlines to display
//           outlineColor={Color.WHITE}
//         />
//       </Entity>
//       <Entity
//         {...args}
//         name="CylinderGraphics"
//         description="CylinderGraphics!!"
//         position={Cartesian3.fromDegrees(-74.0707383, 20.7117244, 100)}>
//         <CylinderGraphics
//           length={400000.0}
//           topRadius={200000.0}
//           bottomRadius={200000.0}
//           material={Color.GREEN.withAlpha(0.5)}
//           outline
//           outlineColor={Color.DARKGREEN}
//         />
//       </Entity>
//       <Entity
//         {...args}
//         name="EllipseGraphics"
//         description="EllipseGraphics!!"
//         position={Cartesian3.fromDegrees(-34.0707383, 60.7117244, 100)}>
//         <EllipseGraphics
//           material={Color.RED}
//           semiMinorAxis={150000.0}
//           semiMajorAxis={300000.0}
//           extrudedHeight={200000.0}
//           rotation={0.78539}
//           outline
//         />
//       </Entity>
//       <Entity
//         {...args}
//         name="EllipsoidGraphics"
//         description="EllipsoidGraphics!!"
//         position={Cartesian3.fromDegrees(-14.0707383, 0.7117244, 100)}>
//         <EllipsoidGraphics
//           material={Color.BLUEVIOLET}
//           radii={new Cartesian3(300000.0, 300000.0, 300000.0)}
//           fill
//           outline
//           outlineColor={new Color(0, 0, 0, 1)}
//         />
//       </Entity>
//       <Entity
//         {...args}
//         name="LabelGraphics"
//         description="LabelGraphics!!"
//         position={Cartesian3.fromDegrees(-34.0707383, 5.7117244, 100)}>
//         <LabelGraphics
//           text="LabelGraphics"
//           font="24px Helvetica"
//           fillColor={Color.SKYBLUE}
//           outlineColor={Color.BLACK}
//           outlineWidth={2}
//           style={LabelStyle.FILL_AND_OUTLINE}
//         />
//       </Entity>
//       <Entity
//         {...args}
//         name="ModelGraphics"
//         description="ModelGraphics!!"
//         position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
//         <ModelGraphics uri={glb} minimumPixelSize={128} maximumScale={20000} />
//       </Entity>
//       <Entity
//         {...args}
//         name="PathGraphics"
//         description="PathGraphics!!"
//         position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
//         <PathGraphics material={Color.RED} width={8} leadTime={10} trailTime={1000} resolution={5} />
//       </Entity>
//       <Entity
//         {...args}
//         name="PlaneGraphics"
//         description="PlaneGraphics!!"
//         position={Cartesian3.fromDegrees(-74.0707383, 50.7117244, 100)}>
//         <PlaneGraphics
//           plane={new Plane(Cartesian3.UNIT_Z, 0.0)}
//           dimensions={new Cartesian2(400000.0, 300000.0)}
//           fill={false}
//           outline
//           outlineColor={Color.YELLOW}
//         />
//       </Entity>
//       <Entity
//         {...args}
//         name="PointGraphics"
//         description="PointGraphics!!"
//         position={Cartesian3.fromDegrees(-74.0707383, 60.7117244, 100)}>
//         <PointGraphics color={Color.BISQUE} pixelSize={10} />
//       </Entity>
//       <Entity {...args} name="PolygonGraphics" description="PolygonGraphics!!">
//         <PolygonGraphics
//           hierarchy={Cartesian3.fromDegreesArray([-108.0, 42.0, -100.0, 42.0, -104.0, 40.0]) as any} // WORKAROUND
//           material={Color.GREEN}
//         />
//       </Entity>
//       <Entity
//         {...args}
//         name="PolylineGraphics"
//         description="PolylineGraphics!!"
//         position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
//         <PolylineGraphics
//           positions={Cartesian3.fromDegreesArrayHeights([-75, 45, 500000, -125, 45, 500000])}
//           width={4}
//           material={
//             new PolylineDashMaterialProperty({
//               color: Color.CYAN,
//             })
//           }
//         />
//       </Entity>
//       <Entity
//         {...args}
//         name="PolylineVolumeGraphics"
//         description="PolylineVolumeGraphics!!"
//         position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
//         <PolylineVolumeGraphics
//           positions={Cartesian3.fromDegreesArrayHeights([
//             -90.0,
//             32.0,
//             0.0,
//             -90.0,
//             36.0,
//             100000.0,
//             -94.0,
//             36.0,
//             0.0,
//           ])}
//           shape={[
//             new Cartesian2(-50000, -50000),
//             new Cartesian2(50000, -50000),
//             new Cartesian2(50000, 50000),
//             new Cartesian2(-50000, 50000),
//           ]}
//           cornerType={CornerType.BEVELED}
//           material={Color.GREEN.withAlpha(0.5)}
//           outline
//           outlineColor={Color.BLACK}
//         />
//       </Entity>
//       <Entity
//         {...args}
//         name="RectangleGraphics"
//         description="RectangleGraphics!!"
//         position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
//         <RectangleGraphics
//           coordinates={Rectangle.fromDegrees(-140.0, 30.0, -100.0, 40.0)}
//           material={Color.PEACHPUFF.withAlpha(0.5)}
//           rotation={CesiumMath.toRadians(45)}
//           extrudedHeight={300000.0}
//           height={100000.0}
//           outline // height must be set for outline to display
//           outlineColor={Color.BLACK}
//         />
//       </Entity>
//       <Entity
//         {...args}
//         name="WallGraphics"
//         description="WallGraphics!!"
//         position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
//         <WallGraphics
//           positions={Cartesian3.fromDegreesArray([
//             -115.0,
//             50.0,
//             -112.5,
//             50.0,
//             -110.0,
//             50.0,
//             -107.5,
//             50.0,
//             -105.0,
//             50.0,
//             -102.5,
//             50.0,
//             -100.0,
//             50.0,
//             -97.5,
//             50.0,
//             -95.0,
//             50.0,
//             -92.5,
//             50.0,
//             -90.0,
//             50.0,
//           ])}
//           maximumHeights={[
//             100000,
//             200000,
//             100000,
//             200000,
//             100000,
//             200000,
//             100000,
//             200000,
//             100000,
//             200000,
//             100000,
//           ]}
//           minimumHeights={[0, 100000, 0, 100000, 0, 100000, 0, 100000, 0, 100000, 0]}
//           material={Color.BLUE.withAlpha(0.5)}
//           outline
//           outlineColor={Color.BLACK}
//         />
//       </Entity>
//     </Viewer>
//   )
  