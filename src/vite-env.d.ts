/// <reference types="vite/client" />

interface Preset {
    name: string,
    primary: Weapon,
    secondary?: Weapon,
    armor?: Armor, 
    helmet?: Helmet,
    meds: Med[],
    grenades?: []
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
    level: number,
    ricochet: string,
    points: number
}

interface Med {
    name: string,
    uses: number
}