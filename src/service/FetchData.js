export default class FetchData {

    startUrl = 'https://api.spacexdata.com/v4/'

    getResources = async url => {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Произошла ошибка ${res.status}`)
        }

        return await res.json()
    }

    getRocket = async () => await this.getResources(this.startUrl + 'rockets')



    getLaunches = async () => await this.getResources(this.startUrl + 'launches/past')



    getCompany = async () => await this.getResources(this.startUrl + 'company')



}