import React, {ComponentType, FC} from 'react';
import {
    NavigateFunction,
    Params,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

export function withRouter<T>(Component: FC<T>) {
    function ComponentWithRouterProp(props: T & WithRouterType) {
    //     // let location = useLocation();
    //     // let navigate = useNavigate();
    //     let params = useParams();
    //     return <Component {...props} router={{params}}/>
    }

    return ComponentWithRouterProp;
}

// type WithRouterType = Location & NavigateFunction & Readonly<Params<string>>;
type WithRouterType = Location & NavigateFunction & Readonly<Params<string>>;