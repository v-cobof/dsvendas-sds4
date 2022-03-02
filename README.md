# DS Vendas 📊

## About the Project

DS Vendas it's a fullstack web application developed during the fourth edition of "Semana Spring React", an event organized by DevSuperior.

The application shows all the data stored in the database about sales and sellers. The data is displayed in a table with the pagination feature, and two graphs, for data visualization.

The app was deployed in the cloud, and can be visualized <a href="https://dsvendas-vcobo.netlify.app/">here</a>. Because the backend was hosted on heroku with the free tier, it may take a few seconds for the data to load.

## Layout
### Desktop
![image](https://user-images.githubusercontent.com/85073588/156373521-16fb412d-d89a-46da-8ae6-fb0f3f245dff.png)
![image](https://user-images.githubusercontent.com/85073588/156374232-6b817175-2977-49a8-b920-cf13894d0b21.png)

### Mobile
<div style="display: flex; justify-content: space-around;">
<img src="https://user-images.githubusercontent.com/85073588/156373679-a1380583-a69c-48dc-be69-ef54ffd08580.png" style="width: 270px; height: 480px"></img>
<img src="https://user-images.githubusercontent.com/85073588/156374303-f721383c-ad07-442e-ae32-db7ea5d8e350.png" style="width: 270px; height: 480px"></img>
<img src="https://user-images.githubusercontent.com/85073588/156374383-61b19148-831d-4707-be67-5da92a7eb14c.png" style="width: 270px; height: 480px"></img>
</div>

## Conceptual model
<div style="display: flex;">
<img src="https://user-images.githubusercontent.com/85073588/156374865-d720d90e-162b-44fa-b92f-5e2f8a7234b6.png" style="justify-content: center;"></img>
</div>

## Technologies

### backend
- Java
- Spring Boot
- JPA / Hibernate
- Maven
- H2 database
- PostgreSQL

### frontend
- HTML
- CSS
- Bootstrap
- TypeScript
- ReactJS

### deploy
- heroku (backend and database)
- netlify (frontend)

### tools
- Git
- VS Code
- Spring tool suite (STS)

## How to run the app
### backend
For this, you will need to install the JDK (java development kit) and maven

```bash
# clone repo
git clone https://github.com/v-cobof/dsvendas-sds4.git

# change directory to backend
cd backend

# run project
./mvnw spring-boot:run
```

### frontend



