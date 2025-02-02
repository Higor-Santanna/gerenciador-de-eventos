type EventsType = {
    name: string
    description: string
    numberOfDays: string
    startTime: string
    endTime: string
    status: boolean
}

type EventsDelete = {
    id: string
}

export { EventsType, EventsDelete }