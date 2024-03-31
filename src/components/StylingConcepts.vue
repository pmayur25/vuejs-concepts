<template>
    <!-- Global Styles -->
    <div>
        <h4>Global Styles</h4>
        <p class="text-red">This is global style example</p>
    </div>
    <!-- Global Styles -->
    <!-- Local Styles -->
    <div>
        <h4>Local Styles</h4>
        <p class="text-pink">This is local style example</p>
    </div>
    <!-- Local Styles -->
    <!-- Combined Styles -->
    <div>
        <h4>Combined Styles</h4>
        <p class="text-highlight">This is combined style example</p>
    </div>
    <!-- Combined Styles -->
    <!-- Module Styles -->
    <div>
        <h4>Module Styles</h4>
        <p :class="myComponent.componentWise">This is module style example</p>
    </div>
    <!-- Module Styles -->
</template>

<!-- Global Style -->
<style>
.text-highlight {
    background-color: blueviolet;
    color: #fff;
}
</style>

<!-- Local Style -->
<style scoped>
.text-pink {
    color: pink;
}
</style>
<!-- NOTE: Local and Module style both are same we just need to choose way which is easier for us. -->
<!-- Module Style -->
<style module="myComponent">
.componentWise {
    background-color: aqua;
    color: #000;
}
</style>