const express = require('express');
const port = 3000;
const app = express();
const db = require('./db');

app.use(express.json());

const usRouter = require('./routes/us');
const usStatesRouter = require('./routes/us-states');
const usCounties2020Router = require('./routes/us-counties-2020');
const usCounties2021Router = require('./routes/us-counties-2021');
const usCounties2022Router = require('./routes/us-counties-2022');
const usRecentRouter = require('./routes/us-recent');

app.use('/us', usRouter);
app.use('/us-states', usStatesRouter);
app.use('/us-counties-2020', usCounties2020Router);
app.use('/us-counties-2021', usCounties2021Router);
app.use('/us-counties-2022', usCounties2022Router);
app.use('/us-recent', usCounties2022Router);


app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
}
);