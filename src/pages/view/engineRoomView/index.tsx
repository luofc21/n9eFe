/*
 * Copyright 2022 Nightingale Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import React, { useState, useEffect, useContext } from 'react';
import _ from 'lodash';
// import { useTranslation } from 'react-i18next';
import PageLayout from '@/components/pageLayout';
// import { CommonStateContext } from '@/App';
import { Spin } from 'antd';
import '../index.less';

export default function Servers() {
    //   const { t } = useTranslation('servers');
    const iframeUrl = 'https://cp.pcitech.com:9999/pvp-platform/player.html?bg=black&drive=public&path=/project/HJMos_MCM_Demo/layout/%E6%9C%BA%E6%88%BF%E6%A6%82%E5%86%B5-v2.layout#/';
    const [url, setUrl] = useState(iframeUrl);
    const [loading, setLoading] = useState(true);
    //   const fetchData = () => {
    //   }
    //   useEffect(() => {
    //     fetchData();
    //   }, []);

    return (
        <PageLayout
            title={'机房概览'}
        >
            <div className='ifram-wrapper'>
                <Spin spinning={loading}>
                    <iframe src={url} onLoad={() => setLoading(false)} ></iframe>
                </Spin>
            </div>
        </PageLayout>
    );
}
