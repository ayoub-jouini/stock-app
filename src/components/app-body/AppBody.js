import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArticleContrainer from '../article-container/article-container';
import Details from '../details/details'

const AppBody = ({ artData }) => {
    return (
        <Switch>
            <Route path="/:category/:id">
                <Details />
            </Route>
            <Route path="/">
                <ArticleContrainer artData={artData} />
            </Route>
        </Switch>
    )
}

export default AppBody;