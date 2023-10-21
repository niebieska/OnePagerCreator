export class Languages {
    constructor(
        public language:    string = '',
        public level:       string = '',
    ) { }
}

export class Education {
    constructor(
        public startYear:   string = '',
        public endYear:     string = '',
        public company:     string = '',
        public competence:  string = ''
    ) { }

    public get timeframe() {
        return `${this.startYear} - ${this.endYear}`;
    }

    public get details() {
        return `${this.company} ${this.competence}`;
    }
}

export class Qualification {
    constructor(
        public skill:       string = '',
        public tools:       string = '',
    ) { }
}

export class Experience {
    constructor(
        public role:                string = '',
        public industry:            string = '',
        public project:             string = '',
        public responsibilities:    string = ''
    ) { }
}


export class CV {
    constructor(
        public name:            string = '', 
        public surname:         string = '', 
        public position:        string = '', 
        public competences:     string = '', 
        public languages:       Languages[] = [], 
        public education:       Education[] = [], 
        public qualification:   Qualification[] = [], 
        public experience:      Experience[] = []
    ) { }
}