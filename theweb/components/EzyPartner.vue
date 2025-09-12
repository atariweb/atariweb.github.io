<template>
    <section class="max-w-7xl mx-auto px-4 mt-10">
        <div class="lg:bg-white/10 lg:dark:bg-gray-800/10 lg:backdrop-blur-xl lg:rounded-3xl lg:border lg:border-white/20 lg:dark:border-gray-700/20 lg:shadow-2xl p-8">
            <h2 class="font-bold text-3xl text-center mb-5">{{ $t('ezyPartner.title') }}</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10">
            <div class="flex items-center gap-3">
                <img :src="xRochet" alt="xRochet" class="w-10 h-10"></img>
                <span class="text-white font-medium text-sm lg:text-base">xRocket</span>
            </div>
            <div class="flex items-center gap-3">
                <img :src="TonkeeperLogo" alt="TonkeeperLogo" class="w-10 h-10"></img>
                <span class="text-white font-medium text-sm lg:text-base">Tonkeeper</span>
            </div>
            <div class="flex items-center gap-3">
                <img :src="Tonviewer" alt="Tonviewer" class="w-10 h-10"></img>
                <span class="text-white font-medium text-sm lg:text-base">Tonviewer</span>
            </div>
            <div class="flex items-center gap-3">
                <img :src="DyorLogo" alt="DyorLogo" class="w-10 h-10"></img>
                <span class="text-white font-medium text-sm lg:text-base">DYOR.io</span>
            </div>
            <div class="flex items-center gap-3 lg:ml-32">
                <img :src="StonLogo" alt="StonLogo" class="w-10 h-10"></img>
                <span class="text-white font-medium text-sm lg:text-base">STON.fi</span>
            </div>
            <div class="flex items-center gap-3 lg:ml-32">
                <img :src="DedustLogo" alt="DedustLogo" class="w-10 h-10"></img>
                <span class="text-white font-medium text-sm lg:text-base">DeDust.io</span>
            </div>  
            <div class="flex items-center gap-3 lg:ml-32">
                <img :src="GetgemsLogo" alt="GetgemsLogo" class="w-10 h-10"></img>
                <span class="text-white font-medium text-sm lg:text-base">Getgems.io</span>
            </div>
            <div class="flex items-center gap-3 lg:ml-32">
                <img :src="AquaLogo" alt="AquaLogo" class="w-10 h-10"></img>
                <span class="text-white font-medium text-sm lg:text-base">Aqua Protocol</span>
            </div>
        </div>
        </div>          
    </section>
</template>


<script setup>
import xRochet from '@/assets/images/Partner/xRochet.webp'
import TonkeeperLogo from '@/assets/images/Partner/Tonkeeper-logo 1.webp'
import Tonviewer from '@/assets/images/Partner/tonviewer.webp'
import DyorLogo from '@/assets/images/Partner/DyorLogo.webp'
import StonLogo from '@/assets/images/Partner/StonLogo.webp'
import DedustLogo from '@/assets/images/Partner/DedustLogo.webp'
import GetgemsLogo from '@/assets/images/Partner/GetgemsLogo.webp'
import AquaLogo from '@/assets/images/Partner/AquaLogo.webp'
</script>