type EventsType = {
    name: string
    description: string
    numberOfDays: number
    startTime: string
    endTime: string
    local: string
}

type EventsId = {
    id: string
}

type UserType = {
    nameUser: string
    email: string
    password: string
}

type UserID = {
    id: string
}

export { EventsType, EventsId, UserType, UserID}