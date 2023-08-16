const SearchConfig = (() => {
    const constants = (input: string): string => {
        const RAY_BAN = ['rey-ban', 'reyban', 'rayban', 'rey-ben', 'raybann', 'rai-ban', 'raiban', 'reiban', 'ray-ban'];
        const ESSILOR = ['esilor', 'essillor', 'ecilor', 'esilor', 'essillor', 'eccilor', 'hessilor'];
        const VARILUX = ['varillux', 'varilus', 'verilux', 'verilus', 'varilucs', 'warilux'];
        const ESSILORLUXOTTICA = ['esilorluxottica', 'essilor luxottica', 'essilorLuxoitica', 'essilorluxoticca',
            'esilorluxxotica', 'esilor luxotica', 'essilor luxxotica', 'essilor luxotticca', 'esilorLuxxottica',
            'essilorluxxotticca', 'essilor', 'luxottica'];
        const OAKLEY = ['okley', 'oclei', 'oaklay', 'oclai', 'oackley', 'aocklay', 'acklai', 'okly', 'ocli'];
        const PERSOL = ['para sól', 'porsol', 'por sol', 'por sol', 'per sol', 'persòl', 'peersol', 'parsol', 'par sol', 'persól', 'per sól', 'persól'];
        const OLIVER_PEOPLE = ['oliver pipols', 'olver peoples', 'oliver people', 'olyver peoples', 'olyver pipols', 'oliver pepols', 'olyver pepols', 'olvy peoples', 'olver pipols', 'holiver', 'oliver', 'people'];
        const VOGUE = ['voghe', 'vague', 'vogh', 'vog'];
        const ARNETTE = ['arnete', 'arnet', 'harnet', 'harnette', 'arnettes', 'arnetts'];
        const STELLETE = ['stelles', 'stelests', 'stillest', 'stellex'];
        const TRANSITIONS = ['transiscions', 'transition', 'transicion', 'transicions', 'trencions', 'trensicion', 'trasition', 'transision'];
        const GRANDVISION = ['grand vision', 'gran vision', 'granvision', 'grandvisions', 'gran visions'];
        const FRANCESCO_MILLERI = ['francesco mileri', 'franceco milleri', 'frencesco mileri', 'francesco melleri', 'franscesco mileri', 'milleri'];
        const PAUL_DU_SAILLANT = ['paul du saillant', 'du saillant', 'paul dusaillant', 'paul du sallant', 'pol du saillant', 'pol du sallant', 'paul du saillan', 'paul du saiant', 'paul du sagliant', 'paul de saillant', 'paul de saillant'];
        const EYEWEAR = ['eywear', 'aiwer', 'eiwear', 'iwear', 'eyewer', 'eywuer'];
        const EYECARE = ['eyecher', 'eyechere', 'eyecare', 'eyecar', 'eycare', 'aicare'];
        const DIRECT_TO_CONSUMER = ['directtoconsumer', 'direct2consumer', 'directconsumer'];
        const RETAIL = ['reteil', 'ritail', 'riteil'];
        const BOARD_OF_DIRECTORS = ['bord', 'boart', 'boord', 'boarde'];
        const BEING_A_SHAREHOLDER = ['shereholder', 'shareolder', 'shareholder', 'beshareholder', 'to be a shareholder', 'how to be a shareholder', 'becoming shareholder'];
        const SUSTAINABILITY = ['sustainability', 'susenability', 'sustainabiliti', 'sustenability'];
        const CARRERS = ['carears', 'carrers', 'carers', 'career', 'chareers', 'charrers'];
        
        let newQuery = input;
        let lowerInput = (input || "").toLowerCase();

        //USE indexOf FOR EXACT MATCH, USE INCLUDES FOR LOOSE CHECKING
        if (RAY_BAN.indexOf(lowerInput) > -1) {
            newQuery = "RAY BAN";
        } else if (ESSILOR.indexOf(lowerInput) > -1) {
            newQuery = "ESSILOR";
        } else if (VARILUX.indexOf(lowerInput) > -1){
            newQuery = "VARILUX";
        } else if (ESSILORLUXOTTICA.indexOf(lowerInput) > -1){
            newQuery = "ESSILORLUXOTTICA";
        } else if (OAKLEY.indexOf(lowerInput) > -1){
            newQuery = "OAKLEY";
        } else if (PERSOL.indexOf(lowerInput) > -1){
            newQuery = "PERSOl";
        } else if (OLIVER_PEOPLE.indexOf(lowerInput) > -1){
            newQuery = "OLIVER PEOPLE";
        } else if (VOGUE.indexOf(lowerInput) > -1){
            newQuery = "VOGUE";
        } else if (ARNETTE.indexOf(lowerInput) > -1){
            newQuery = "ARNETTE";
        } else if (STELLETE.indexOf(lowerInput) > -1){
            newQuery = "STELLETE";
        } else if (TRANSITIONS.indexOf(lowerInput) > -1){
            newQuery = "TRANSITIONS";
        } else if (GRANDVISION.indexOf(lowerInput) > -1){
            newQuery = "GRANDVISIOn";
        } else if (FRANCESCO_MILLERI.indexOf(lowerInput) > -1){
            newQuery = "FRANCESCO MILLERI";
        } else if (PAUL_DU_SAILLANT.indexOf(lowerInput) > -1){
            newQuery = "PAUL DU SAILLANT";
        } else if (EYEWEAR.indexOf(lowerInput) > -1){   
            newQuery = "Eyewear";
        } else if (EYECARE.indexOf(lowerInput) > -1){
            newQuery = "Eyecare";
        } else if (DIRECT_TO_CONSUMER.indexOf(lowerInput) > -1){
            newQuery = "Direct to Consumer";
        } else if (RETAIL.indexOf(lowerInput) > -1){
            newQuery = "Retail";
        } else if (BOARD_OF_DIRECTORS.indexOf(lowerInput) > -1){
            newQuery = "Board of directors";
        } else if (BEING_A_SHAREHOLDER.indexOf(lowerInput) > -1){
            newQuery = "Being a shareholder";
        } else if (SUSTAINABILITY.indexOf(lowerInput) > -1){
            newQuery = "Sustainability";
        } else if (CARRERS.indexOf(lowerInput) > -1){
            newQuery = "Careers";
        }
        return newQuery;
    }
    return {
        constants
    }
})();

export default SearchConfig;