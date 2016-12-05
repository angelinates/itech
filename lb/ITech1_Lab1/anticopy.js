// ��������� c������ ����������� - ��� ��� Ctrl+C, ��� � ��� ������� �� ������ ��� � ���������� ����.
document.addEventListener('copy', function(e){
    // ������������� ����������� �����������, ����� ��� ������ ����������� ��� ������.
	e.preventDefault();
    // ���������� � ������ ������ �� �������� - ����� ������ � ����� ������.
	var selectionText = window.getSelection().toString();
    // ��������� ����, ��� �������������� ��������� � ����� ������.
	var escaped = "Copy from: " + window.location + "\n" + selectionText;
	// ��������� ���������� ����� � �����. 
    e.clipboardData.setData('text/plain', escaped);
  });