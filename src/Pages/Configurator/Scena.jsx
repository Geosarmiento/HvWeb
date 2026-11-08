

import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'

const Scena = () => {
  return (
    <div>

        <Canvas 
          camera={{position: [1, 1, 1], fov: 75}} >
 
            <ambientLight intensity={0.5} />
           
            <pointLight
              position={[2, 3, 4]}
              intensity={20}
            />
            

            <mesh>

                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="orange" />
            </mesh>

            <OrbitControls />

            


        </Canvas>
      
    </div>
  )
}

export default Scena
