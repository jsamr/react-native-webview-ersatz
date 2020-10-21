import React, { forwardRef, Ref } from 'react';
import { WebViewProps } from 'react-native-webview';
import { DOMBackendHandle } from '@formidable-webview/ersatz-core';
import Skeletton from '@formidable-webview/skeletton';
import { WebBackend } from './WebBackend';
import { IframeWebViewProps } from './types';

export const Web = forwardRef<
  DOMBackendHandle,
  WebViewProps & IframeWebViewProps
>(function Web(props, ref) {
  return (
    <Skeletton ref={ref as Ref<Skeletton>} {...props} DOMBackend={WebBackend} />
  );
});
