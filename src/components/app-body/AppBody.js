import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArticleContrainer from '../article-container/article-container';
import PageTwo from '../page-2/page-2'

const AppBody = ({ artData }) => {
    return (
        <Switch>
            <Route path="/pagetwo">
                <PageTwo />
            </Route>
            <Route path="/">
                <ArticleContrainer artData={artData} />
            </Route>
        </Switch>
    )
}

export default AppBody;