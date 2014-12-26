var page_history = null;
var historyIndex = 0;

function h_page(c, h, s)
{
	this.command = c;
	this.html = h;
	this.section = s;
	this.scroll = 0;
	this.highlight = '';
	
	return this;
}

function clearHistory()
{
	page_history = new Array(page_history[historyIndex]);
	historyIndex = 0;
	
	populateHistoryPopup();
}

function setHistorySize(n)
{
	if(page_history.length > n)
	{
		page_history.splice(n, page_history.length-1);

		if(historyIndex > page_history.length-1)
		{
			historyIndex = page_history.length-1;
			reloadPageAtIndex(historyIndex);
		}
		
		populateHistoryPopup();
	}
}

function addHistory(command, html, section, scroll, h_word)
{
	var page = new h_page(command, html, section);
	
	if(page_history.length > 0)
	{
		page_history[historyIndex].scroll = scroll;
		page_history[historyIndex].highlight = h_word;
	}
	
	page_history.push(page);
	if(page_history.length > document.getElementById('hist_size').value*1) page_history.shift();
	historyIndex = page_history.length - 1;
	
	populateHistoryPopup();
	highlightedKeyword = '';
}

function removeHistory()
{
	page_history.splice(historyIndex,1);
	if(historyIndex > page_history.length-1)
		historyIndex--;
	
	if(page_history.length == 0)
	{
		if(expanded) expand_collapse();
		document.getElementById('tab').style.display = 'none';
		document.getElementById('manualtext').innerHTML = '';
		document.getElementById('function').innerText = '';
	}
	else
		reloadPageAtIndex(historyIndex);
		
	populateHistoryPopup();
}

function h_back()
{
	//alert("back: " + historyIndex);
	if(historyIndex > 0)
	{
		page_history[historyIndex].scroll = document.getElementById('manualtext').scrollTop;
		page_history[historyIndex].highlight = highlightedKeyword;
		reloadPageAtIndex(--historyIndex);
	}
}

function h_forward()
{
	//alert("forward: " + historyIndex);
	if(historyIndex < page_history.length-1)
	{
		page_history[historyIndex].scroll = document.getElementById('manualtext').scrollTop;
		page_history[historyIndex].highlight = highlightedKeyword;
		reloadPageAtIndex(++historyIndex);
	}
}

function reloadPageAtIndex(i)
{
	if(i == 'c')
	{
		clearHistory();
		return;
	}
	
	historyIndex = i;
	var page = page_history[i];
	document.getElementById('commands').selectedIndex = i;
	
	if(!expanded) expand_collapse();
	
	//alert("reloading: " + page.command + " " + page.scroll);
	document.getElementById('manualtext').innerHTML = page.html;
	
	selectSection(page.section);
	setTabText(page.command);
	document.getElementById('SearchField').value = page.command;
	response = page.html;
	section = page.section;
	
	if(page.highlight != '') highlightKeyword(page.highlight, true);
	else highlightedKeyword = '';
	
	document.getElementById('manualtext').scrollTop = page.scroll;
}

function populateHistoryPopup()
{
	HTML = "";
	
	var i;
	for(i = 0; i < page_history.length; i++)
	{
		HTML += "<option value=" + i + ((i == historyIndex) ? " selected " : " ") + ">" + page_history[i].command + "</option>";		
	}
	
	HTML += "<option value='c' disabled>_____________</option><option value='c'>Clear history</option>";

	document.getElementById('commands').innerHTML = HTML;
}