/// <reference types="vite/client" />

interface Preset {
    name: string,
    mp: number,
    primary: Weapon,
    secondary?: Weapon,
    armor?: Armor, 
    helmet?: Helmet,
    meds: Med[],
    grenades?: Grenade[],
    connection: string,
    comms?: string
}

interface Weapon {
    name: string,
    modes: string[],
    rpm: number,
    ergo: number,
    vertical: number,
    horizontal: number,
    ammo: Ammo,
}

interface Ammo {
    name: string,
    type: string,
    damage: number,
    penetration: number,
    magazines: Magazine[]
}

interface Magazine {
    name: string,
    count: number,
}

interface Armor {
    name: string,
    areas: Area[]
}

interface Area {
    name: string,
    level: number,
    points: number,
    pointsmax: number
}

interface Helmet {
    name: string,
    areas: HelmArea[]
}

interface HelmArea extends Area {
    ricochet: string
}

interface Med {
    name: string,
    uses: number
}

interface Grenade {
    name: string,
    count: number
}