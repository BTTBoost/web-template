import React from 'react';
import Wrapper from 'components/common/Wrapper';

import type {NextRouter} from 'next/router';
import type {ReactElement} from 'react';

function	Content(): ReactElement {
	return (
		<div className={'w-full'}>
			<div className={'flex w-full flex-col gap-2'}>
				<h4 className={'mb-2'}>{'How to use'}</h4>
				<div className={'mb-6 space-y-2'}>
					<p className={'text-neutral-500'}>
						{'The web-lib contains components that can be used to build a new web application (website, dashboard, standalone, etc.), focused for the needs of Yearn Finance and the specificities of the web-3 ecosystem.'}
					</p>
					<p className={'text-neutral-500'}>
						{'The Lib is divided in various sub-sections: components, layouts, utils, contexts and hooks. With it, you should have everything you need to start working with Yearn and Ethereum, from the "Connect Wallet" to the designs of the buttons.'}
					</p>
					<p className={'text-neutral-500'}>
						{'You can now start playing by editing the `pages/index.tsx` file.'}
					</p>
				</div>
			</div>
		</div>
	);
}

function	Index(): ReactElement {
	return (
		<section aria-label={'some default section'}>
			<Content />
		</section>
	);
}

Index.getLayout = function getLayout(page: ReactElement, router: NextRouter): ReactElement {
	return <Wrapper router={router}>{page}</Wrapper>;
};

export default Index;
