const ShareFbButton = {
	view: function(vnode) {
		return m("#share-button.fb-share-button[data-href='https://developers.facebook.com/docs/plugins/'][data-layout='button'][data-size='large']", 
			m("a.fb-xfbml-parse-ignore[target='_blank'][href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse']", 
				"Compartir en facebook"
			)
		)
	}
}

export default ShareFbButton