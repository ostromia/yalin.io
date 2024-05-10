<script>
    import { T, useTask } from '@threlte/core';
    import { ContactShadows, Float, Grid, OrbitControls, useGltf, interactivity } from '@threlte/extras';
    import { spring } from 'svelte/motion';

    interactivity();
    const scale = spring(1);
    let rotation = 0;
    useTask((delta) => {
        rotation += ( delta / 4 )
    });

    const gltf = useGltf("/assets/90s_computer.glb");
</script>

<T.PerspectiveCamera makeDefault position={[8, 8, 8]} on:create={({ ref }) => {ref.lookAt(0, 0, 0)}}/>

<T.DirectionalLight intensity={0.8} position.x={5} position.y={10}/>
<T.AmbientLight intensity={0.2}/>

<T.Mesh rotation.y={rotation} scale={$scale} on:pointerenter={() => scale.set(1.5)} on:pointerleave={() => scale.set(1)}>
    <Float floatIntensity={1} floatingRange={[0, 0.5]}>
        <T.Mesh position={[0, 0, 0]} rotation.x={0.25} rotation.y={0.125}>
            {#if $gltf}
                <T is={$gltf.scene} />
            {/if}
        </T.Mesh>
    </Float>
</T.Mesh>
