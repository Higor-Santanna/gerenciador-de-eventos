type EventsType = {
    name: string
    description: string
    numberOfDays: number
    startTime: string
    endTime: string
    status: boolean
}

type EventsId = {
    id: string
}

type UserType = {
    nameUser: string
    email: string
    password: string
}

export { EventsType, EventsId, UserType }