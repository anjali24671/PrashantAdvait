<div class=" w-full  h-[100vh] flex items-center justify-center">
    <div class="spinner w-[60px] h-[60px] border-[4px] border-t-orange-600 border-l-orange-600 border-white rounded-[50%] ">
        
    </div>
</div>

<style>
    .spinner{
        transform: translate(-50%, -50%);
        animation: 2s spin linear infinite;
    }

    @keyframes spin{
        0% {transform: rotate(0deg); }
        100% {transform: rotate(360deg);}
    }
</style>