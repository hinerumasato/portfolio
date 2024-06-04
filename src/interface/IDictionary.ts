export interface IDictionary {
    nav: {
        home: string;
        about: string;
        service: string;
        projects: string;
        contact: string;
    };
    header: {
        subtitle: string; 
        title: string; 
        position: string; 
        hire: string; 
        downloadCv: string;
    };
    widget: { 
        clients: string; 
        projectCompleted: string; 
        awardsWon: string; 
    }; about: { 
        title: string; 
        subtitle: string; 
        content: string; 
        careerGoals: string; 
        careerGoalsContent1: string; 
        careerGoalsContent2: string; 
        downloadCv: string; 
    }; 
    service: { 
        title: string; 
        content: string; 
        frontend: string; 
        backend: string; 
        android: string; 
        devops: string; 
    }; 
    skill: { 
        title: 
        string; 
        content: string; 
    }; 
    experience: { 
        title: string; 
        subtitle: string; 
        projects?: Array<{
            title: string | React.ReactNode;
            content: string | React.ReactNode;
        }>
        github: string; 
        production: string; 
    }; 

    hireBanner: {
        hireMeForYourProject: string,
        description: string,
        hireMe: string,
    };

    contact: { 
        title: string; 
        subtitle: string; 
        available: string; 
        sendMessage: string; 
        successMessage: string; 
        errorMessage: string; 
        emailAddress: string; 
        location: string; 
        phoneNumber: string; 
        enterYourEmail: string; 
        message: string; 
    };

    modal: {
        selectYourLanguage: string;
        close: string;
    }
}