 document.addEventListener('DOMContentLoaded', function() {
            const userInput = document.getElementById('user-input');
            const checkBtn = document.getElementById('check-btn');
            const clearBtn = document.getElementById('clear-btn');
            const resultsDiv = document.getElementById('results-div');
            
            checkBtn.addEventListener('click', function() {
                const phoneNumber = userInput.value.trim();
                
                if (!phoneNumber) {
                    alert('Please provide a phone number');
                    return;
                }
                
                const isValid = telephoneCheck(phoneNumber);
                resultsDiv.textContent = `${isValid ? 'Valid' : 'Invalid'} US number: ${phoneNumber}`;
                resultsDiv.className = isValid ? 'valid' : 'invalid';
            });
            
            clearBtn.addEventListener('click', function() {
                resultsDiv.textContent = '';
                resultsDiv.className = '';
            });
            
            function telephoneCheck(str) {
                // Regular expression to match valid US phone number formats
                const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
                
                // Additional check for balanced parentheses
                const hasParentheses = /\(|\)/.test(str);
                if (hasParentheses) {
                    const balancedParentheses = /^(1\s?)?\(\d{3}\)(\s|-)?\d{3}(-|\s)?\d{4}$/.test(str);
                    if (!balancedParentheses) return false;
                }
                
                // Test the main regex
                return regex.test(str);
            }
        });